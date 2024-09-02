import React from 'react';
import Home from './component/home.jsx';  // Match the exact filename case
import Signup from './component/Signup.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarksInput from './component/MarksInput.jsx';
import ResultTable from './component/resulttable.jsx';
import CandidatesList from './component/CandidatesList.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/marksinput' element={<MarksInput />} />
        <Route path='/resulttable' element={<ResultTable />} />
        <Route path='/CandidatesList' element={<CandidatesList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
