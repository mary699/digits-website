import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Partnership from "./Component/Partnership";
import Help from "./Component/Help";
import Design from "./Component/Design";
import Testimonials from "./Component/Testimonials";
import MyFooter from "../src/Component/Footer_Folder/MyFooter";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


export{ Navbar,Hero,Partnership,Help,Design,Testimonials,MyFooter}