import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import { useState } from "react";
import ThemeProvider, { contextTheme } from "../contexts/contextTheme";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
