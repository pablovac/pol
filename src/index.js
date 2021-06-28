import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
<Router>
  <App login="pablovac"/>
  </Router>, 
  document.getElementById('root')
);