import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AddUser from "./Components/AddUser";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/Adduser" Component={AddUser} />
      </Routes>
    </div>
  );
};

export default App;
