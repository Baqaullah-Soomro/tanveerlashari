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
  return <div className="fixed bottom-6 right-6 z-50" data-unique-id="9d1fac0e-540c-48ad-b8a0-5b1f328dce21" data-file-name="components/ui/ThemeToggle.tsx">
      <div className="bg-background border border-border rounded-full p-2 shadow-lg" data-unique-id="c6443b85-8643-4e4a-a47c-287cf0dae16d" data-file-name="components/ui/ThemeToggle.tsx">
        <div className="flex items-center gap-1" data-unique-id="d9919ec9-0372-4969-b02f-0ca0e0a6a032" data-file-name="components/ui/ThemeToggle.tsx" data-dynamic-text="true">
          {options.map(option => <button key={option.value} onClick={() => setTheme(option.value)} className={`relative rounded-full p-2 text-foreground ${theme === option.value ? 'text-primary-foreground' : 'hover:text-accent-foreground'}`} title={option.label} data-unique-id="7c32c704-d8f6-4cb6-b315-b83c0b4a6490" data-file-name="components/ui/ThemeToggle.tsx" data-dynamic-text="true">
              {theme === option.value && <motion.div layoutId="theme-indicator" className="absolute inset-0 bg-chart-1 rounded-full" transition={{
            type: "spring",
            duration: 0.5
          }} data-unique-id="d8f00111-6a37-4b53-9d98-5da8ec37e326" data-file-name="components/ui/ThemeToggle.tsx" />}
              <span className="relative z-10" data-unique-id="804bb4f7-950d-4ed4-8128-b1ed417280ef" data-file-name="components/ui/ThemeToggle.tsx" data-dynamic-text="true">{option.icon}</span>
            </button>)}
        </div>
      </div>
    </div>;
}