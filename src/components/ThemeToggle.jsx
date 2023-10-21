import React from 'react';

const ThemeToggle = ({ isLightTheme, toggleTheme }) => {
  return (
    <label>
      <input type="checkbox" checked={isLightTheme} onChange={toggleTheme} />
      Toggle Theme
    </label>
  );
};

export default ThemeToggle;
