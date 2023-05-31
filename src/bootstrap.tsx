import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/globalStyle";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const rootNode = document.getElementById("root");
if (!rootNode) throw new Error("Root Node Not Found!");
const root = ReactDOM.createRoot(rootNode);
const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </QueryClientProvider>
);
