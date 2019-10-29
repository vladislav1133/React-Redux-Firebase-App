import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDFkbnHst23lCNXCmK0JCyR6g_xTpBLcCg",
    authDomain: "ps-news-72a8a.firebaseapp.com",
    databaseURL: "https://ps-news-72a8a.firebaseio.com",
    projectId: "ps-news-72a8a",
    storageBucket: "ps-news-72a8a.appspot.com",
    messagingSenderId: "866764600469",
    appId: "1:866764600469:web:1cb006d81bb188fac8179c",
    measurementId: "G-PQEB7MRM9S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;