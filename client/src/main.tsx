import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource/poppins";
// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       "Poppins", // Replace with your custom font family
//       "Arial", // Backup font
//       "sans-serif", // Fallback
//     ].join(","),
//   },
//   palette: {
//     primary: {
//       main: "#fff", // Replace with your primary color
//     },
//     secondary: {
//       main: "#dc004e", // Replace with your secondary color
//     },
//   },
// });
import { Provider } from "react-redux";
import { store } from "./reducers/store.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <ThemeProvider theme={theme}>
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  // </ThemeProvider>
);
