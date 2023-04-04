import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={Home} />
      </Routes>
    </div>
  );
};

export default App;
