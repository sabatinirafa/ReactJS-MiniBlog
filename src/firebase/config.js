import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDcqI6VHk9ffxnXAT1S_8BKk7neEu_zQ40",
  authDomain: "miniblog-react-90c7c.firebaseapp.com",
  projectId: "miniblog-react-90c7c",
  storageBucket: "miniblog-react-90c7c.appspot.com",
  messagingSenderId: "757622364534",
  appId: "1:757622364534:web:053450f4d56c0f63534257"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}