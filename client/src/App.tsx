// import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import Chatbot from "../src/components/chatbot/chatbot";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

function AppContent() {
  const location = useLocation();

  // Define routes where the Navbar shouldn't be displayed
  const noNavbarRoutes = ["/view-profile", "/view-project"];

  // Check if the current location matches any of the no-navbar routes
  const showNavbar = !noNavbarRoutes.some((route) =>
    location.pathname.includes(route)
  );

  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      {" "}
      {/* Ensure no horizontal overflow */}
      {/* Conditionally render the Navbar based on the current route */}
      {showNavbar && <Navbar />}
      <AllRoutes />
      <Chatbot />
    </Box>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
