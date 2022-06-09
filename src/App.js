import React from 'react';
import { Heading } from './Heading';
import { HeroBanner } from './HeroBanner';
import {Github} from './Github';
import {AboutMe} from './aboutme';


function App() {
  return (
    
      <body>
    <div className="root">
      <Heading />
      <HeroBanner />
      <Github />
      <AboutMe />
      
    </div>
    </body>
   
  );
}

export default App;
