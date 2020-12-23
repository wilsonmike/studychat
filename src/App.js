import React from "react";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth'; 
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDKL27IeoKoOBX7Bs2ggNg2TAK8Rexxaj4",
    authDomain: "studychat-16364.firebaseapp.com",
    projectId: "studychat-16364",
    storageBucket: "studychat-16364.appspot.com",
    messagingSenderId: "26638819191",
    appId: "1:26638819191:web:272ff5e58586773ef54b72",
    measurementId: "G-WTK3FYQ5XF"
})

const auth = firebase.auth();
const firestore = firebase.firestore(); 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Boilerplate</h1>
      </header>
    </div>
  );
}

export default App;
