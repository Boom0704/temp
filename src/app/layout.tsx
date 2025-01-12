'use client';
import { useDarkMode } from '../hooks/use-darkmode';
import Header from './components/Header';
import '@/app/globals.scss'; 

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useDarkMode();

  return (
    <html lang="en" className={isDarkMode ? 'dark' : ''}>
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
