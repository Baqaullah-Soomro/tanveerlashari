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
  return <div className="fixed bottom-6 right-6 z-50" data-unique-id="7b83da12-5007-4267-b8be-7dd637694866" data-file-name="components/ui/ThemeToggle.tsx">
      <div className="bg-background border border-border rounded-full p-2 shadow-lg" data-unique-id="a5687ad0-f673-4acc-a2f6-61902127dcf3" data-file-name="components/ui/ThemeToggle.tsx">
        <div className="flex items-center gap-1" data-unique-id="8cd732d7-6d44-459d-836f-43af85b84d68" data-file-name="components/ui/ThemeToggle.tsx" data-dynamic-text="true">
          {options.map(option => <button key={option.value} onClick={() => setTheme(option.value)} className={`relative rounded-full p-2 text-foreground ${theme === option.value ? 'text-primary-foreground' : 'hover:text-accent-foreground'}`} title={option.label} data-unique-id="22c0222a-292b-418c-9a14-7b09b8c2318a" data-file-name="components/ui/ThemeToggle.tsx" data-dynamic-text="true">
              {theme === option.value && <motion.div layoutId="theme-indicator" className="absolute inset-0 bg-chart-1 rounded-full" transition={{
            type: "spring",
            duration: 0.5
          }} data-unique-id="e6065ac5-476f-490b-8c45-af72d518b594" data-file-name="components/ui/ThemeToggle.tsx" />}
              <span className="relative z-10" data-unique-id="16be59a5-b4a3-4119-bd28-cfff8be64159" data-file-name="components/ui/ThemeToggle.tsx" data-dynamic-text="true">{option.icon}</span>
            </button>)}
        </div>
      </div>
    </div>;
}