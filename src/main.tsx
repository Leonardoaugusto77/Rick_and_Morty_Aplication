import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query"; // Importe os módulos do React Query
import { ReactQueryDevtools } from "react-query/devtools"; // Opcional, para fins de desenvolvimento

import { GlobalStyles } from "./assets/Styles/GlobalStyles.tsx";
import { ThemeProvider } from "styled-components";
import Theme from "./assets/Styles/Theme.ts"; // Importe corretamente Theme
import App from "./App.tsx";

// Crie uma instância do QueryClient
const queryClient = new QueryClient();

console.log(Theme);

ReactDOM.render(
  <React.StrictMode>
    {/* Forneça o QueryClient usando o QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
      <ReactQueryDevtools /> {/* Opcional, para fins de desenvolvimento */}
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
