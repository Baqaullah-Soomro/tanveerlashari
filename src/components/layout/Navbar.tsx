'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useNavStore } from '@/store/store';
import { ChevronRight } from 'lucide-react';
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
  name: 'Testimonials',
  href: '#testimonials'
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
    // Trigger on initial load to set active section
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={cn('fixed w-full z-50 transition-all duration-300', scrolled ? 'bg-background/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5')} style={{
    boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none'
  }} data-unique-id="69c826d8-6959-4ffe-8e63-15bf48ff67cc" data-file-name="components/layout/Navbar.tsx">
      <div className="container mx-auto px-6 flex items-center justify-between" data-unique-id="7799aaec-aef9-4e1c-a07b-9448339e3c8c" data-file-name="components/layout/Navbar.tsx">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2
      }} className="text-2xl font-bold text-primary" data-unique-id="5e13d6bb-0e71-42a8-b876-b3f2d382212c" data-file-name="components/layout/Navbar.tsx">
          <span className="text-chart-1" data-unique-id="c9ade6e2-5d24-48f4-8bed-c94fb9afc2fa" data-file-name="components/layout/Navbar.tsx"><span className="editable-text" data-unique-id="f8065ab8-1800-43b2-b818-b890aef76ead" data-file-name="components/layout/Navbar.tsx">T</span></span><span className="editable-text" data-unique-id="8115ef28-1cfc-4e97-9b96-222266f959fa" data-file-name="components/layout/Navbar.tsx">anver</span><span className="text-chart-1" data-unique-id="b1345e25-603c-4635-80fb-1d7dc7306dff" data-file-name="components/layout/Navbar.tsx"><span className="editable-text" data-unique-id="75b6e4ec-3bbd-4032-be8b-eae7771d259c" data-file-name="components/layout/Navbar.tsx">L</span></span>
        </motion.div>
        
        <nav data-unique-id="841c1d94-215b-4acb-8023-c787007cea22" data-file-name="components/layout/Navbar.tsx">
          <ul className="flex space-x-5" data-unique-id="47ab74a6-6523-4684-b699-81a480555c94" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
            {navLinks.map(link => <li key={link.name} data-unique-id="4222f2ad-fd98-4b78-a630-af50978ba938" data-file-name="components/layout/Navbar.tsx">
                <a href={link.href} onClick={e => {
              e.preventDefault();
              document.querySelector(link.href)?.scrollIntoView({
                behavior: 'smooth'
              });
              setActiveSection(link.href.slice(1));
            }} className={cn('relative px-2 py-2 text-sm font-medium transition-all hover:text-chart-1 flex items-center gap-1 group', activeSection === link.href.slice(1) ? 'text-chart-1' : 'text-foreground')} data-unique-id="f576bd54-955d-4957-82fb-202bca255ae4" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
                  {activeSection === link.href.slice(1) && <ChevronRight size={14} className="opacity-100 transition-opacity" />}
                  <span data-unique-id="968b6afe-c311-48ad-9b83-ff9427d6282c" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">{link.name}</span>
                  <motion.div className={cn("absolute bottom-0 left-0 h-0.5 bg-chart-1 transition-all", activeSection === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full")} layoutId="navIndicator" data-unique-id="423ff2ff-9202-4fac-b57c-ef20dcabf634" data-file-name="components/layout/Navbar.tsx" />
                </a>
              </li>)}
          </ul>
        </nav>
      </div>
    </motion.header>;
}