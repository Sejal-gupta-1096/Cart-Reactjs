import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBnbGeSf2-_AVi_L_sVcoEwu4hKAcPhvdQ",
  authDomain: "cart-2ffef.firebaseapp.com",
  databaseURL: "https://cart-2ffef.firebaseio.com",
  projectId: "cart-2ffef",
  storageBucket: "cart-2ffef.appspot.com",
  messagingSenderId: "720865398429",
  appId: "1:720865398429:web:54d0385c1df4250f184e74"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


