import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Layout from "./components/layout";

import { Home, Lab, Hosp, Ind, Tecnicos, Relatorio } from "./pages";
import {
  DashboardLab,
  OrdemLab,
  AtendimentoLab,
  TreinoLab,
  LaboratorialLab,
} from "./pages/Lab/docs";
import {
  DashboardHosp,
  OrdemHosp,
  AtendimentoHosp,
  TreinoHosp,
  LaboratorialHosp,
} from "./pages/Hosp/docs";
import {
  Dashboard,
  Ordem,
  Atendimento,
  Treino,
  Laboratorial,
} from "./pages/Ind/docs";

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
          path="/lab/dashboard"
          element={
            <Layout>
              <DashboardLab />
            </Layout>
          }
        />
        <Route
          path="/lab/atendimento"
          element={
            <Layout>
              <AtendimentoLab />
            </Layout>
          }
        />
        <Route
          path="/lab/ordem"
          element={
            <Layout>
              <OrdemLab />
            </Layout>
          }
        />
        <Route
          path="/lab/treino"
          element={
            <Layout>
              <TreinoLab />
            </Layout>
          }
        />
        <Route
          path="/lab/laboratorial"
          element={
            <Layout>
              <LaboratorialLab />
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
          path="/hosp/dashboard"
          element={
            <Layout>
              <DashboardHosp />
            </Layout>
          }
        />
        <Route
          path="/hosp/atendimento"
          element={
            <Layout>
              <AtendimentoHosp />
            </Layout>
          }
        />
        <Route
          path="/hosp/ordem"
          element={
            <Layout>
              <OrdemHosp />
            </Layout>
          }
        />
        <Route
          path="/hosp/treino"
          element={
            <Layout>
              <TreinoHosp />
            </Layout>
          }
        />
        <Route
          path="/hosp/laboratorial"
          element={
            <Layout>
              <LaboratorialHosp />
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
        <Route
          path="/tecnicos"
          element={
            <Layout>
              <Tecnicos />
            </Layout>
          }
        />
        <Route
          path="/relatorio"
          element={
            <Layout>
              <Relatorio />
            </Layout>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
