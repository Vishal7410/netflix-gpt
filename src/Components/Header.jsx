import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo } from "../utils/constants";

  const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
      signOut(auth).then(() => {
  
       }).catch((error) => {
  // An error happened.
  console.log(error);
   });
    }

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {  // whenever the user logged in or logout it will track all the records of  auth
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(
          addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL:photoURL,
        })
        );
         navigate("/browse")
      }
      else {
        dispatch(removeUser());
       
         navigate("/")
       
      }
    } )
// Unsubscribe called when component unmount 
    return () => unsubscribe();
  }, [])







  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
        
        <img 
        className="w-44 "
        src={Logo}
        alt="Logo" />

      { user && (<div className="flex p-2 ">
          <img
           className = "w-12 h-12" 
           src={user.photoURL}
           alt="user Icon" />
  

        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>

        </div>)}
        

    
    </div>
  );
};

export default Header;
