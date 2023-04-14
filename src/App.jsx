import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Ankuran, Anakhronos, Freshers } from './pages';
import Login from './components/Login/Login';
import SignUp from './components/Login/signUp';
import AnakhronosEventform from './components/forms/anakhronosEvent';
import PrarambhEventform from './components/forms/freshers';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Ankuran />} />
      <Route exact path="/anakhronos" element={<Anakhronos />} />
      <Route exact path="/freshers" element={<Freshers />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route
        exact
        path="/anakhronosRegister"
        element={<AnakhronosEventform />}
      />
      <Route exact path="/prarambhRegister" element={<PrarambhEventform />} />
    </Routes>
  );
};

export default App;
