import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAe5Nup3xHQ7tZ3Qex-MQr5Lcgvm-kPtTs",
  authDomain: "soft-project-4346b.firebaseapp.com",
  projectId: "soft-project-4346b",
  storageBucket: "soft-project-4346b.appspot.com",
  messagingSenderId: "663066615047",
  appId: "1:663066615047:web:63c0cc8f0c64a27c0a79a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth =getAuth(app);
