import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCCMLrdc5t-6PfIWIzKg3JHVN-0yn01y78",
    authDomain: "tesla-clone-project-fc7c7.firebaseapp.com",
    projectId: "tesla-clone-project-fc7c7",
    storageBucket: "tesla-clone-project-fc7c7.appspot.com",
    messagingSenderId: "428708557186",
    appId: "1:428708557186:web:36c2acf86c7caa52fa1f9b"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const auth = getAuth(firebaseApp)

  export { auth }