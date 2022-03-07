import { Injectable } from '@angular/core';

import { initializeApp } from 'firebase/app';
import {getDatabase, set, ref, get, push} from 'firebase/database';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, 
  sendPasswordResetEmail, updatePassword } from "firebase/auth";

const auth = getAuth();


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
  apiKey: "AIzaSyCbTSACPUh6FhU-nO7bH-0C9QvB-vMTzt8",
  authDomain: "map-that-talent.firebaseapp.com",
  databaseURL: "https://map-that-talent-default-rtdb.firebaseio.com",
  projectId: "map-that-talent",
  storageBucket: "map-that-talent.appspot.com",
  messagingSenderId: "957443488779",
  appId: "1:957443488779:web:2eadc67d1c6e7578e4db0e",
  measurementId: "G-8MVM5L29DX"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase();

@Injectable()
export class LoginService {
url:any = "admin";
user:any = null;
loginerror:any;
logouterror:any;
  constructor() { 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        this.user = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
        this.user = null;
      }
    });
    



  }
  login(email, password):Promise<boolean>{
   

return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
   this.user = userCredential.user;
    // ...
    console.log(this.user);
    
    return true;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.loginerror = errorMessage;
    console.log(this.user);
    return false;
  });
  }


  logout():Promise<boolean>{
    return signOut(auth).then(() => {
      // Sign-out successful.
      this.user= null;
      return true;

    }).catch((error) => {
      // An error happened.
      this.logouterror = error.message;
      return false;
    });
  }


changepassword(newPassword): Promise<boolean>{
  const user = auth.currentUser;
//const newPassword = getASecureRandomPassword();

return updatePassword(user, newPassword).then(() => {
  // Update successful
  console.log(user);

return true;
}).catch((error) => {
  // An error ocurred
  // ...
  console.log('error');
  return false;
  
});
}  



isloggedin():boolean{
  if(this.user == null){
    return false;
  }else{
    return true;
  }
}

resetPassword(email): Promise<string>{
return sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
    console.log("success")
    return "successfull"
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    return errorMessage;
  });
}

}
