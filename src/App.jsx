import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Home, Destination, Crew, Technology } from "./Pages";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:planetId" element={<Destination />} />
          <Route
            path="/destination"
            element={<Navigate to={"/destination/0"} />}
          />
          <Route path="/crew/:crewId" element={<Crew />} />
          <Route path="/crew" element={<Navigate to={"/crew/0"} />} />
          <Route path="/technology/:technologyId" element={<Technology />} />
          <Route
            path="/technology"
            element={<Navigate to={"/technology/0"} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
