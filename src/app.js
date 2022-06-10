import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './nav_bar';
import Github  from './github';

export function App() {
  return (
    
    
   <div>
       <NavBar />
    
    <BrowserRouter>
    <Routes>
        <Route path='/'>

        </Route>

        <Route path='/github' element={ <Github />}>

   
        </Route>




    </Routes>
    </BrowserRouter>
   </div>
    
      


   
  );
}

