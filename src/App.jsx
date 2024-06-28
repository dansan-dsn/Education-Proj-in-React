import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const routes = (
  <Router>
    <Routes>
      <Route path="/dashbord" exact element={<Home />} />
      <Route path="/Login" exact element={<Login />} />
      <Route path="/SignUp" exact element={<SignUp />} />
    </Routes>
  </Router>
);

export default function App() {
  return <>{routes}</>;
}
