import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCbO9ptVo4ei4yETsDnkjGkz-3FAgGbmvQ",
  authDomain: "e-commerce-b139a.firebaseapp.com",
  projectId: "e-commerce-b139a",
  storageBucket: "e-commerce-b139a.appspot.com",
  messagingSenderId: "868656041953",
  appId: "1:868656041953:web:121225a690ac2718588ca0"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
