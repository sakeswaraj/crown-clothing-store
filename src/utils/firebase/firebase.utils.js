import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAND7xq67P2VJraE3f9ifPJZDSx_uEN5vg",
  authDomain: "crown-clothing-store-789fa.firebaseapp.com",
  projectId: "crown-clothing-store-789fa",
  storageBucket: "crown-clothing-store-789fa.appspot.com",
  messagingSenderId: "992880562619",
  appId: "1:992880562619:web:342ef98f3e33985d53349e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
