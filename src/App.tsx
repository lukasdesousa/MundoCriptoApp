import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Main/Home';
import Grass from './Pages/Grass/Grass';
import AnalyserV1 from './Pages/App/Analyser/Pages/AnalyserV1';

const App: React.FC = () => {
  return (
    <>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grass" element={<Grass />} />
          <Route path="/analyserTool/v1" element={<AnalyserV1 />} />
        </Routes>
    </>
  );
};

export default App;
