import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

import { BrowserRouter as Router } from "react-router-dom"
import { ThirdwebProvider } from "@thirdweb-dev/react"
import { Mumbai } from "@thirdweb-dev/chains";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID} activeChain={Mumbai}>
      <Router>
        <App />
      </Router>
    </ThirdwebProvider>
  </React.StrictMode>
)
