import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PlaylistInfo from "./pages/PlaylistInfo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist/:playlistId" element={<PlaylistInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
 