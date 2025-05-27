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
  return <div className="fixed bottom-6 right-6 z-50" data-unique-id="cd15cddb-a2d5-4fa4-82b2-aca7909927f0" data-file-name="components/ui/ThemeToggle.tsx">
      <div className="bg-background border border-border rounded-full p-2 shadow-lg" data-unique-id="57156522-b11f-4725-be62-c0ac057a2ca3" data-file-name="components/ui/ThemeToggle.tsx">
        <div className="flex items-center gap-1" data-unique-id="43946464-65db-4ca9-922b-670cd7a1230f" data-file-name="components/ui/ThemeToggle.tsx" data-dynamic-text="true">
          {options.map(option => <button key={option.value} onClick={() => setTheme(option.value)} className={`relative rounded-full p-2 text-foreground ${theme === option.value ? 'text-primary-foreground' : 'hover:text-accent-foreground'}`} title={option.label} data-unique-id="22eddb5e-1ea5-479b-9559-4a8978011a7d" data-file-name="components/ui/ThemeToggle.tsx" data-dynamic-text="true">
              {theme === option.value && <motion.div layoutId="theme-indicator" className="absolute inset-0 bg-chart-1 rounded-full" transition={{
            type: "spring",
            duration: 0.5
          }} data-unique-id="ce3d4f56-b9ba-48f1-8083-58a950f8e40d" data-file-name="components/ui/ThemeToggle.tsx" />}
              <span className="relative z-10" data-unique-id="cc6969ac-96b1-4faf-b4a2-010aee788dcd" data-file-name="components/ui/ThemeToggle.tsx" data-dynamic-text="true">{option.icon}</span>
            </button>)}
        </div>
      </div>
    </div>;
}