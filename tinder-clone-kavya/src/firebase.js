import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA1ucSJevsYS1Yu7mUlxXMcOExyOf9c0nA",
    authDomain: "tinder-clone-b57d7.firebaseapp.com",
    projectId: "tinder-clone-b57d7",
    storageBucket: "tinder-clone-b57d7.appspot.com",
    messagingSenderId: "83107628935",
    appId: "1:83107628935:web:84b28d73e780d1c6087522"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db