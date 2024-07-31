import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Layout from "./components/layout";

import { Home, Lab, Hosp, Ind } from './pages';
import { Dashboard, Ordem, Atendimento, Treino, Laboratorial } from './pages/Ind/docs';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/lab"
          element={
            <Layout>
              <Lab />
            </Layout>
          }
        />
        <Route
          path="/hosp"
          element={
            <Layout>
              <Hosp />
            </Layout>
          }
        />
        <Route
          path="/ind"
          element={
            <Layout>
              <Ind />
            </Layout>
          }
        />
        <Route
          path="/ind/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/ind/atendimento"
          element={
            <Layout>
              <Atendimento />
            </Layout>
          }
        />
        <Route
          path="/ind/ordem"
          element={
            <Layout>
              <Ordem />
            </Layout>
          }
        />
        <Route
          path="/ind/treino"
          element={
            <Layout>
              <Treino />
            </Layout>
          }
        />
        <Route
          path="/ind/laboratorial"
          element={
            <Layout>
              <Laboratorial />
            </Layout>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
