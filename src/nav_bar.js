import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import "./nav_bar.css";


export class NavBar extends React.Component {

render() {
    return (
        <header>
        <div className="figure-head">
          <figure>Jon M</figure>
        </div>
        
        <nav>
    
          <a href="./">Home</a>
          <a href="./github">GitHub</a>
          <a href="#aboutme">About Me</a>
          <a href="#photography">Photography</a>
          <a href="">Contact</a>
          <a href="">Monster Bros</a>
    
    
        </nav>
    
    
      </header>
    ); }
}
