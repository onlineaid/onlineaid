import React, { createContext, useContext, useState, useCallback } from 'react';
import { colorPresets } from './../utils/getColorPresets'; // Import the color presets data

// Create a context for managing color presets
const ColorPresetContext = createContext();

// Custom hook for using the color presets context
export const useColorPresets = () => {
  const context = useContext(ColorPresetContext);
  if (!context) {
    throw new Error('useColorPresets must be used within a ColorPresetProvider');
  }
  return context;
};

// Define the ColorPresetProvider component
export const ColorPresetProvider = ({ children }) => {
  const [currentPreset, setCurrentPreset] = useState(colorPresets.default);

  // Function to change the color preset
  const changePreset = useCallback((presetName) => {
    const selectedPreset = colorPresets[presetName];
    if (selectedPreset) {
      setCurrentPreset(selectedPreset);
    }
  }, []);

  return (
    <ColorPresetContext.Provider value={{ currentPreset, changePreset }}>
      {children}
    </ColorPresetContext.Provider>
  );
};
