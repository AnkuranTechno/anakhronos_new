import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Ankuran, Anakhronos, Freshers } from './pages';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Ankuran />} />
      <Route exact path="/anakhronos" element={<Anakhronos />} />
      <Route exact path="/freshers" element={<Freshers />} />
    </Routes>
  );
};

export default App;
