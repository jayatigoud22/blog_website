import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDP5W2JOcq0lt6NUglA4E9_qrzzZWBO8Uc",
  authDomain: "blog-app-bffd4.firebaseapp.com",
  projectId: "blog-app-bffd4",
  storageBucket: "blog-app-bffd4.appspot.com",
  messagingSenderId: "557774891205",
  appId: "1:557774891205:web:f6f988910355b28e95e8ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };