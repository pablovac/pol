import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const [pie, dormir, diversion, ropa] = ["botas", "carpa","pescar", "bolso"];
console.log(pie, dormir, diversion, ropa);

ReactDOM.render(
<div>
  <App authorized={true}/>
</div>, 
  document.getElementById('root')
);