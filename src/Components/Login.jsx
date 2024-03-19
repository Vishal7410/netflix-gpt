import { checkValidateData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { bgcImage, userAvtar } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const HandleButtonclick = () => {
    // Validate the form data
    //checkValidateData(email, password)

    // console.log(email);
    // console.log(password);
    // console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);

    const massage = checkValidateData(
      email.current.value,
      password.current.value
      // name.current.value,
      // setName(!name.current.value)
    );
    //  console.log(massage);
    setErrorMsg(massage);
    if (massage) return; // if massage is present means it have some error so it will return it. Other wise go ahead

    //Sign In  Sign UP Logic Below

    if (!isSignInForm) {
      //if my SignIn form is not present then do Sign Up form else go to the Sign In Logic
      // Sign Up Logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        //  console.log(user);

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: userAvtar
            
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              // eslint-disable-next-line no-undef
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMsg(error.message);
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // SignIn Logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignUpForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={bgcImage}
          alt="Background Img "
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black  justify-center my-32 mx-auto right-0 left-0 text-white rounded-lg opacity-90 "
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-6 w-full bg-gray-700 rounded-lg"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-6 w-full bg-gray-700 rounded-lg"
        />

        <input
          ref={password}
          type="Password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-700 font-bold text-lg py-2">{errorMsg}</p>
        <button
          className="p-4 my-6 w-full bg-red-700 rounded-lg"
          onClick={HandleButtonclick}
        >
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignUpForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Alreadt registered? Sign In Now. "}
        </p>
      </form>
    </div>
  );
};

export default Login;
