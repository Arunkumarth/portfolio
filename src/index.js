import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Projects from './projectsPage';
import NotFound from './NotFound';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Routes>
    <Route path='*' element={<NotFound/>}/>
    <Route exact path='/' element={<App/>}/>
    <Route exact path='/projects' element={<Projects/>}/>

  </Routes>
  
  </BrowserRouter>
);

