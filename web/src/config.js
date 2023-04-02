import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDaIvW6Kl-wsHikLweI7jSbbhxC5VXSTOU",
    authDomain: "lucpc-edf35.firebaseapp.com",
    databaseURL: "https://lucpc-edf35-default-rtdb.firebaseio.com/",
    projectId: "lucpc-edf35",
    storageBucket: "lucpc-edf35.appspot.com",
    messagingSenderId: "1076015219952",
    appId: "1:1076015219952:web:b03d4e6a0ba9b659fe2e35",
    measurementId: "G-0NKDKH1DPC"
});

const analytics = firebase.analytics(firebaseConfig);

export default firebaseConfig;