import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBEDZHwCRaqoZyYE4_Sn5zDzNVfIfa3-Zc",
  authDomain: "intenrship-nft.firebaseapp.com",
  projectId: "intenrship-nft",
  storageBucket: "intenrship-nft.appspot.com",
  messagingSenderId: "781171357744",
  appId: "1:781171357744:web:0f694c62836c3f6cb4d5f5"
};
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
