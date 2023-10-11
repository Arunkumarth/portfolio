import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Projects from './projectsPage';
import NotFound from './NotFound';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   {/* <App /> */}
  //   <Projects/>
  // </React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='*' element={<NotFound/>}/>
    <Route exact path='/' element={<App/>}/>
    <Route exact path='/projects' element={<Projects/>}/>

  </Routes>
  
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
