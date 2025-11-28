// src/main.tsx
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter } from "react-router-dom"; // ← ajouter

createRoot(document.getElementById("root")!).render(
  <HashRouter>  {/* ← wrappe ton App */}
    <App />
  </HashRouter>
);
