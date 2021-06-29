import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyCnRpkPIiylt1zMri-9BAG4Y3ejmL6R9lY",
    authDomain: "letmeask-f1f16.firebaseapp.com",
    databaseURL: "https://letmeask-f1f16-default-rtdb.firebaseio.com",
    projectId: "letmeask-f1f16",
    storageBucket: "letmeask-f1f16.appspot.com",
    messagingSenderId: "996008047076",
    appId: "1:996008047076:web:b8e249ff01d0b78f2dd7f1"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()