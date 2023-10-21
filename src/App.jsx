import React from "react";
import Home from "./page/Home/v1/Home";
import { ColorPresetProvider } from "./contexts/ColorPresetContext";



function App() {
  return (
    // <ColorPresetProvider>
        <Home />
    // </ColorPresetProvider>
  );
}

export default App;
