import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyles } from "./assets/Styles/GlobalStyles.tsx";
import { ThemeProvider } from "styled-components";
import Theme from "./assets/Styles/Theme.ts"; // Importe corretamente Theme
import App from "./App.tsx";

// Crie uma instância do QueryClient

console.log(Theme);

ReactDOM.render(
  <React.StrictMode>
    {/* Forneça o QueryClient usando o QueryClientProvider */}

    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
