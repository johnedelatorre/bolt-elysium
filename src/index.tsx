import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IntegrationsLanding } from "./screens/IntegrationsLanding/IntegrationsLanding";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <IntegrationsLanding />
  </StrictMode>,
);
