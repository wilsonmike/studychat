import React, {useRef, useState } from "react";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/analytics'; 

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
const analytics = firebase.analytics(); 



function App() {
  const [user] = useAuthState(auth); 
  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider); 
  }
  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  const dummy = useRef(); 
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25); 
  const [messages] = useCollectionData(query, {idField: 'id'}); 
  return (
    <>
      <div>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
        <span ref={dummy}></span>
      </div>
    </>
  )
}

function ChatMessage(props) {
  const { text, uid } = props.message;
  return (<>
  <p>{text}</p>
  </>)
}

export default App;
