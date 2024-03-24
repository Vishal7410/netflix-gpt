import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import lang from "../utils/languageConstant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGptSearch = () => {
    // Toggle GPT Search button
    // you can do using useState hook or You can do with redux store
    dispatch(toggleGptSearchView());
  };


const user = useSelector((store) => store.user);

const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // whenever the user logged in or logout it will track all the records of  auth
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe called when component unmount
    return () => unsubscribe();
  }, []);

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 " src={Logo} alt="Logo" />

      {user && (
        <div className="flex p-2 ">
          {showGptSearch && (<select className="p-2 m-2 bg-gray-900 text-white" 
          onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGE.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))}
            {/* <option value="en">English</option>
            <option value="hindi">Hindi</option>
            <option value="spanish">Spanish</option> */}

          </select>)}
          <button
            className="py-2 px-4 mx-4 my-2 text-white bg-purple-800 rounded-lg"
            onClick={handleGptSearch}
          >
            {showGptSearch? "HomePage" :  "GPT Search" }
           
          </button>
          <img className="w-12 h-12" src={user.photoURL} alt="user Icon" />

          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
