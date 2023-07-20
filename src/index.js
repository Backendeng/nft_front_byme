import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import Swap from './swap';
import SwapRouter from './SwapRoute';
import reportWebVitals from './reportWebVitals';

import "https://www.googletagmanager.com/gtag/js?id=G-B5JJP7FY91"
import { getCLS, getFCP, getFID, getLCP, getTTFB } from 'https://cdn.jsdelivr.net/npm/web-vitals@2.1.2/dist/web-vitals.js';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SwapRouter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
