'use client';
import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('theme') || 'system';
    }
    return 'system';
  });

  // Function to update the theme state and localStorage
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // Function to apply the theme by adding a class to the document element
    const applyTheme = (theme) => {
      const isDark =
        theme === 'dark' ||
        (theme === 'system' &&
          window.matchMedia('(prefers-color-scheme: dark)').matches);
      document.documentElement.className = isDark ? 'dark' : '';
    };

    // Function to handle system theme changes
    const handleSystemThemeChange = (e) => {
      if (theme === 'system') {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    };

    // Apply the current theme
    applyTheme(theme);

    // Listen for system theme changes
    const darkThemeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    darkThemeMediaQuery.addEventListener('change', handleSystemThemeChange);

    // Cleanup function to remove the event listener
    return () => {
      darkThemeMediaQuery.removeEventListener(
        'change',
        handleSystemThemeChange
      );
    };
  }, [theme]);

  return (
    <div className='mb-4 z-10 fixed bottom-2 rounded-full overflow-hidden right-4 ring-[3px] ring-primary-clr dark:bg-neutral-800 bg-gray-200/50 backdrop-blur-md flex'>
      {['system', 'light', 'dark'].map((themeOption) => (
        <button
          key={themeOption}
          id={`${themeOption}-color-btn`}
          className={`${
            theme === themeOption
              ? 'bg-primary-clr text-black dark:text-white'
              : 'text-black dark:text-white'
          } inline-block w-20 h-10 p-2`}
          onClick={() => handleThemeChange(themeOption)}
        >
          {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
