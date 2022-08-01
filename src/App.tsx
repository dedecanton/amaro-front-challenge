import React from "react";
import { Route, Routes } from "react-router-dom";
import Catalog from "./features/Catalog";
import Layout from "./features/Layout";
import './App.scss'
import Cart from "./features/Cart";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
