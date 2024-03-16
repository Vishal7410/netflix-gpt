export const checkValidateData = (email, password) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   // const isNameValidate = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)

if(!isEmailValid) return "Email ID id not valid";
if(!isPasswordValid) return "Password is not valid";
//if(!isNameValidate) return "Name is not valid";


return null; 
}
