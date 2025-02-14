import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Main/Home';
import AnalyserExample from './Pages/App/Analyser/Pages/example/AnalyserExample';
import { Analyser } from './Pages/App/Analyser/Analyser';
import Grass from './Pages/Home/Elements/Grass';

const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grass" element={<Grass />} />
        <Route path="/analyserTool" element={<Analyser />} />
        <Route path="/analyserTool/analyser/etapas" element={<AnalyserExample />} />
      </Routes>
  );
};

export default App;
