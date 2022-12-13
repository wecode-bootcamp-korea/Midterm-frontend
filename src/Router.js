import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Monster from "./pages/Monster/Monster";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Monster />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
