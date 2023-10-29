import React from "react";
import ReactDOM from "react-dom/client";

// React router dom
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";

// Core third party css
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

// Provider context
import ThemeProvider from "./theme/index.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./provider/AuthProvider.jsx";
import { ColorPresetProvider } from "./contexts/ColorPresetContext.jsx";
// import { ThemeProvider } from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <ColorPresetProvider>
          
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>

        </ColorPresetProvider>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
