import React from 'react';
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/pages/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
