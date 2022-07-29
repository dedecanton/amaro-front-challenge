import React from "react";
import { Route, Routes } from "react-router-dom";
import Catalog from "./features/Catalog";
import Layout from "./features/Layout";
import './App.scss'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Catalog />} />
      </Routes>
    </Layout>
  );
}

export default App;
