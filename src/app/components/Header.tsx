// src/app/components/Header.tsx

'use client';

import React from 'react';
import { useDarkMode } from '../../hooks/use-darkmode';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="p-4 bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
      <h1 className="text-xl text-gray-900 dark:text-white">My App</h1>
      <button
        onClick={toggleDarkMode}
        className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
      >
        {isDarkMode ? '라이트 모드' : '다크 모드'}
      </button>
    </header>
  );
};

export default Header;
