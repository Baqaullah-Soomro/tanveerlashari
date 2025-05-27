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
  return <div className="fixed bottom-6 right-6 z-50" data-unique-id="5595659c-bd1b-4892-9fbc-7b4d5b2dba5a" data-file-name="components/ui/ThemeToggle.tsx">
      <div className="bg-background border border-border rounded-full p-2 shadow-lg" data-unique-id="04a605af-630d-4cb2-aa42-8eaab9531405" data-file-name="components/ui/ThemeToggle.tsx">
        <div className="flex items-center gap-1" data-unique-id="9ca24720-e83d-4c8e-a2ce-88a5bc7259e9" data-file-name="components/ui/ThemeToggle.tsx" data-dynamic-text="true">
          {options.map(option => <button key={option.value} onClick={() => setTheme(option.value)} className={`relative rounded-full p-2 text-foreground ${theme === option.value ? 'text-primary-foreground' : 'hover:text-accent-foreground'}`} title={option.label} data-unique-id="ba83222e-eb40-4390-a841-f5794b1eaa0f" data-file-name="components/ui/ThemeToggle.tsx" data-dynamic-text="true">
              {theme === option.value && <motion.div layoutId="theme-indicator" className="absolute inset-0 bg-chart-1 rounded-full" transition={{
            type: "spring",
            duration: 0.5
          }} data-unique-id="6fec21be-4c47-49b6-abcd-48eb23703932" data-file-name="components/ui/ThemeToggle.tsx" />}
              <span className="relative z-10" data-unique-id="02c06fb5-1c7c-49ca-b559-8226a5fbb939" data-file-name="components/ui/ThemeToggle.tsx" data-dynamic-text="true">{option.icon}</span>
            </button>)}
        </div>
      </div>
    </div>;
}