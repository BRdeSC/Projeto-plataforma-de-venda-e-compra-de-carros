
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSEhGMCsB5VsZjR_FVYhp_j6PcX9HY18I",
  authDomain: "webcarros-186c9.firebaseapp.com",
  projectId: "webcarros-186c9",
  storageBucket: "webcarros-186c9.appspot.com",
  messagingSenderId: "179917152316",
  appId: "1:179917152316:web:5e273ef696f58252392339"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };