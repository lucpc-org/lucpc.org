import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDSFuWCK3w0bkM-K8atbePTZ2wezlGQ5JU",
    authDomain: "jakethoffman-7b7ab.firebaseapp.com",
    databaseURL: "https://jakethoffman-7b7ab.firebaseio.com",
    projectId: "jakethoffman-7b7ab",
    storageBucket: "jakethoffman-7b7ab.appspot.com",
    messagingSenderId: "22222103514",
    appId: "1:22222103514:web:00522064bb8f0dc43716e3",
    measurementId: "G-XFY2KYWKLD"
});

export default firebaseConfig;