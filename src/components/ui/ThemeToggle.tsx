'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Laptop } from 'lucide-react';
type Theme = 'light' | 'dark' | 'system';
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  useEffect(() => {
    if (!mounted) return;
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);
  if (!mounted) {
    return null;
  }
  const options: {
    value: Theme;
    label: string;
    icon: JSX.Element;
  }[] = [{
    value: 'light',
    label: 'Light',
    icon: <Sun size={15} />
  }, {
    value: 'dark',
    label: 'Dark',
    icon: <Moon size={15} />
  }, {
    value: 'system',
    label: 'System',
    icon: <Laptop size={15} />
  }];
  return <div className="fixed bottom-6 right-6 z-50" data-unique-id="dad04d56-0d8c-4519-9f57-ce9b8167efe3" data-file-name="components/ui/ThemeToggle.tsx">
      <div className="bg-background border border-border rounded-full p-2 shadow-lg" data-unique-id="34c998e9-c4ca-4f77-b09f-5e58abe641b0" data-file-name="components/ui/ThemeToggle.tsx">
        <div className="flex items-center gap-1" data-unique-id="7861e259-5acf-4954-9393-0e58aa2d267b" data-file-name="components/ui/ThemeToggle.tsx" data-dynamic-text="true">
          {options.map(option => <button key={option.value} onClick={() => setTheme(option.value)} className={`relative rounded-full p-2 text-foreground ${theme === option.value ? 'text-primary-foreground' : 'hover:text-accent-foreground'}`} title={option.label} data-unique-id="7f648bdc-1626-462d-b1f1-42aa96908a6a" data-file-name="components/ui/ThemeToggle.tsx" data-dynamic-text="true">
              {theme === option.value && <motion.div layoutId="theme-indicator" className="absolute inset-0 bg-chart-1 rounded-full" transition={{
            type: "spring",
            duration: 0.5
          }} data-unique-id="a8e417fe-0913-4da2-9626-0b37a709f4fb" data-file-name="components/ui/ThemeToggle.tsx" />}
              <span className="relative z-10" data-unique-id="e291cc9f-9daf-40bc-aff8-90de22b6bd76" data-file-name="components/ui/ThemeToggle.tsx" data-dynamic-text="true">{option.icon}</span>
            </button>)}
        </div>
      </div>
    </div>;
}