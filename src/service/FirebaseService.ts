import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaIvW6Kl-wsHikLweI7jSbbhxC5VXSTOU",
  authDomain: "lucpc-edf35.firebaseapp.com",
  databaseURL: "https://lucpc-edf35-default-rtdb.firebaseio.com/",
  projectId: "lucpc-edf35",
  storageBucket: "lucpc-edf35.appspot.com",
  messagingSenderId: "1076015219952",
  appId: "1:1076015219952:web:b03d4e6a0ba9b659fe2e35",
  measurementId: "G-0NKDKH1DPC",
};

// const analytics = firebase.analytics(firebaseConfig);

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
