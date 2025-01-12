'use client';

import { useDarkMode } from '@/hooks/use-darkmode';
import ReactSwitch from 'react-switch';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-lg font-semibold">My Next.js App</h1>
      <div className="flex items-center">
        <span className="mr-2">{isDarkMode ? '🌙 Dark Mode' : '🌞 Light Mode'}</span>
        <ReactSwitch 
          checked={isDarkMode}
          onChange={toggleDarkMode}
          offColor="#ccc"
          onColor="#333"
          offHandleColor="#fff"
          onHandleColor="#fff"
          height={20}
          width={40}
        />
      </div>
    </header>
  );
};

export default Header;
