// src/hooks/use-darkmode.tsx

'use client';

import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
    } else if (savedMode === 'false') {
      setIsDarkMode(false);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return { isDarkMode, toggleDarkMode };
};
