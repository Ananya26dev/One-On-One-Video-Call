import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Room from "./components/Room";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/room/:id" element={<Room />}></Route>
      </Routes>
    </div>
  );
};

export default App;
