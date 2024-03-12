import { checkValidateData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMsg, seterrorMsg] = useState(null);
  // const [name, setName] = useState(false)
  
  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const HandleButtonclick = () => {
    // Validate the form data
    //checkValidateData(email, password)

    // console.log(email);
    // console.log(password);
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);

    const massage = checkValidateData(
      
      email.current.value,
      password.current.value,
      name.current.value,
      // setName(!name.current.value)
      
    );
    //  console.log(massage);
    seterrorMsg(massage);
  };

  const toggleSignUpForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
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
