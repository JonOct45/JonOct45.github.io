import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import "./nav_bar.css";


export class NavBar extends React.Component {

render() {
    return (
        <div class="navbar">
            
            <button>Google</button>
            <button id="first" href="https://www.facebook.com/">Facebook</button>
            <button href="https://www.youtube.com/">Youtube</button>
            <button href="https://www.instagram.com/">Instagram</button>
            <button href="https://www.twitter.com/">Twitter</button>
            
        </div>
    ); }
}
