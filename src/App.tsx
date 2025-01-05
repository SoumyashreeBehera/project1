import React from "react";
import "./App.css";
import Routes from "./routes";
import { MantineProvider } from "@mantine/core";
import getCustomTheme from "./theme/theme";

function App() {
  return (
    <MantineProvider withCSSVariables theme={getCustomTheme()}>
      <Routes />
    </MantineProvider>
  );
}

export default App;
