import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { App } from './app.js';


import "./contact.css"




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
//     <HeroBanner />
//   </React.StrictMode>
// );

const root = document.getElementById('root');

ReactDOM.render(<App />, root);