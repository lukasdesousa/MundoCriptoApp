import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Main/Home';
import AnalyserExample from './Pages/App/Analyser/Pages/example/AnalyserExample';
import { Analyser } from './Pages/App/Analyser/Analyser';
import Grass from './Pages/Home/Elements/Grass';


const App: React.FC = () => {
  return (
    <Routes>
      <Route path={'/MundoCriptoApp'} element={<Home />} />
      <Route path={'/MundoCriptoApp/grass'} element={<Grass />} />
      <Route path={'/MundoCriptoApp/analyserTool'} element={<Analyser />} />
      <Route path={'/MundoCriptoApp/Analyser/Etapas'} element={<AnalyserExample />} />
    </Routes>
  );
};

export default App;
