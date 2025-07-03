// ThemeToggle.jsx
import { useEffect, useState } from 'react';
import Switch from './Switch';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Switch checked={theme === 'dark'} onChange={toggleTheme} />
  );
}



