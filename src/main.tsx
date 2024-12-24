import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";

import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App.tsx";
import RecipePage from "./components/RecipePage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:slug" element={<RecipePage />} />
        </Routes>
      </HashRouter>
    </Provider>
  </StrictMode>
);
