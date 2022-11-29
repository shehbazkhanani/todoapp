import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebaseConfig";

const auth = getAuth(app);

const SignUp = (obj) => {
    const {email, password} = obj
new Promise ((resolve, reject) => {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    resolve(userCredential)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    reject(error)
    // ..
  });
})
}

export {SignUp}