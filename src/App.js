import React from 'react';
import Home from './component/home.jsx';  // Correctly imported and capitalized component names
import Login from './component/login.jsx';
import Signup from './component/Signup.jsx';  // Corrected the capitalization here
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
