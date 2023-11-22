import { useEffect, useState } from 'react';

type DarkModeHook = {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
  getClassName: (baseClassName: string) => string;
};

const useDarkMode = (): DarkModeHook => {

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('darkTheme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const toggleDarkTheme = (): void => {
    setIsDarkTheme((prevState) => !prevState);
  };

  const getClassName = (baseClassName: string): string => {
    return isDarkTheme ? `${baseClassName}-dark` : baseClassName;
  };

  useEffect(() => {
    localStorage.setItem('darkTheme', JSON.stringify(isDarkTheme))
  }, [isDarkTheme]);

  return { isDarkTheme, toggleDarkTheme, getClassName };

};

export default useDarkMode;