import React from "react";
import Main from "../pages/Main";
import Group from "../pages/Group";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/group" element={<Group />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;