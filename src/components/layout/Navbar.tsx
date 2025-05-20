'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useNavStore } from '@/store/store';
const navLinks = [{
  name: 'Home',
  href: '#home'
}, {
  name: 'About',
  href: '#about'
}, {
  name: 'Experience',
  href: '#experience'
}, {
  name: 'Skills',
  href: '#skills'
}, {
  name: 'Contact',
  href: '#contact'
}];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const {
    activeSection,
    setActiveSection
  } = useNavStore();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Find which section is currently in view
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={cn('fixed w-full z-50 transition-all duration-300', scrolled ? 'bg-background/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5')} data-unique-id="50784095-c3cb-47b2-97c6-c35cdad9c7df" data-file-name="components/layout/Navbar.tsx">
      <div className="container mx-auto px-6 flex items-center justify-between" data-unique-id="0b8add6c-0873-47c4-8974-17aeea0ca547" data-file-name="components/layout/Navbar.tsx">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2
      }} className="text-2xl font-bold text-primary" data-unique-id="97406ab6-10c4-4a20-8289-05635f6d1e92" data-file-name="components/layout/Navbar.tsx">
          <span className="text-chart-1" data-unique-id="be6b3a87-ab49-4f2f-80b9-d1bc3cc439cd" data-file-name="components/layout/Navbar.tsx"><span className="editable-text" data-unique-id="056f3b30-9cfe-42ac-9c12-1f3c81e888f2" data-file-name="components/layout/Navbar.tsx">T</span></span><span className="editable-text" data-unique-id="455893e6-ae70-40c8-a00d-ba28154abac6" data-file-name="components/layout/Navbar.tsx">anver</span><span className="text-chart-1" data-unique-id="20d65511-e6f9-445d-bb92-b007669eebce" data-file-name="components/layout/Navbar.tsx"><span className="editable-text" data-unique-id="fb795251-bf13-402d-84ff-773293eed42c" data-file-name="components/layout/Navbar.tsx">L</span></span>
        </motion.div>
        
        <nav data-unique-id="83bf7873-2623-4a26-b9ab-1b01ffb7e688" data-file-name="components/layout/Navbar.tsx">
          <ul className="flex space-x-8" data-unique-id="6462b65d-0fc6-4580-971c-30ea55a5ec87" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
            {navLinks.map(link => <li key={link.name} data-unique-id="d5f1c926-67b8-4672-8e03-a6c78e9883a9" data-file-name="components/layout/Navbar.tsx">
                <a href={link.href} onClick={e => {
              e.preventDefault();
              document.querySelector(link.href)?.scrollIntoView({
                behavior: 'smooth'
              });
              setActiveSection(link.href.slice(1));
            }} className={cn('relative text-sm font-medium transition-colors hover:text-chart-1', activeSection === link.href.slice(1) ? 'text-chart-1' : 'text-foreground')} data-unique-id="2c1c2b35-627a-4be3-b212-8c0524696e95" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
                  {link.name}
                  {activeSection === link.href.slice(1) && <motion.span layoutId="activeSection" className="absolute -bottom-2 left-0 right-0 h-0.5 bg-chart-1" data-unique-id="0ab40cd6-300d-44f8-a2d6-fc5accf1d1e3" data-file-name="components/layout/Navbar.tsx" />}
                </a>
              </li>)}
          </ul>
        </nav>
      </div>
    </motion.header>;
}