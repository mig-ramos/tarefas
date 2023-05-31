import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVYLAgkcLpXcYU9Ti13Xbk1e-b2RPpnhA",
  authDomain: "tarefasplus-f1d27.firebaseapp.com",
  projectId: "tarefasplus-f1d27",
  storageBucket: "tarefasplus-f1d27.appspot.com",
  messagingSenderId: "693013408838",
  appId: "1:693013408838:web:de67e3531692131a036e47"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };