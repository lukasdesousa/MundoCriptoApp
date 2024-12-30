import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { Analiser } from './Pages/Analiser/AnaliserTool';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={'/MundoCriptoApp'} element={<Home />} />
      <Route path='/MundoCriptoApp/analiserTool' element={<Analiser />} />
    </Routes>
  );
};

export default App;
