// src/app/layout.tsx

'use client';

import { useDarkMode } from '../hooks/use-darkmode';
import Header from './components/Header';
import '@/app/css/globals.css';
import { useEffect } from 'react';
import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    // 다크 모드 상태에 따라 light.css 또는 dark.css를 로드
    const existingLink = document.getElementById('theme-style') as HTMLLinkElement | null;

    if (existingLink) {
      existingLink.href = isDarkMode ? '/css/dark.css' : '/css/light.css';
    } else {
      const link = document.createElement('link');
      link.id = 'theme-style';
      link.rel = 'stylesheet';
      link.href = isDarkMode ? '/css/dark.css' : '/css/light.css';
      document.head.appendChild(link);
    }
  }, [isDarkMode]);

  return (
    <>
      <Head>
        {/* 초기 로딩 시 기본 테마 적용을 위한 링크 */}
        <link
          id="theme-style"
          rel="stylesheet"
          href={isDarkMode ? '/css/dark.css' : '/css/light.css'}
        />
      </Head>
      <html lang="en" className={isDarkMode ? 'dark' : ''}>
        <body className="bg-background text-foreground">
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </>
  );
}
