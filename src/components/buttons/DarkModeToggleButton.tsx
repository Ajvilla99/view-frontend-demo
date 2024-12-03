import { useState } from 'react';

export const DarkModeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`relative w-10 h-4 flex items-center justify-between p-1 rounded-full transition-all
        ${isDarkMode ? 'bg-primary' : 'bg-white'}
      `}
    >
      <div
        className={`h-3 w-3 rounded-full bg-white`}/>
    </button>
  );
};
