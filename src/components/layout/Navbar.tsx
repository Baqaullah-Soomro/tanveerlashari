'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useNavStore } from '@/store/store';
import { ChevronRight, Menu, X } from 'lucide-react';
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
}, {
  name: 'Resume',
  href: '#resume'
}];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Close mobile menu when a link is clicked
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
      setActiveSection(href.slice(1));
      setMobileMenuOpen(false);
    }
  };

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={cn('fixed w-full z-50 transition-all duration-500 sticky top-0', scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5')} style={{
    boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.12)' : 'none'
  }} data-unique-id="b9ab92a7-9559-4531-bde3-d50da676bee8" data-file-name="components/layout/Navbar.tsx">
      <div className="container mx-auto px-6 flex items-center justify-between" data-unique-id="ad74e431-b0eb-49ef-a923-0502038ca984" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2
      }} className="text-2xl font-bold text-primary" data-unique-id="43f06e0a-8963-4e1a-a5ad-1361ab177508" data-file-name="components/layout/Navbar.tsx">
          <span className="text-chart-1" data-unique-id="d9efc7a8-dce2-4244-9144-4ed4f488671d" data-file-name="components/layout/Navbar.tsx"><span data-unique-id="c670e7b1-ef97-4388-b534-cdb24508b982" data-file-name="components/layout/Navbar.tsx"><span className="editable-text" data-unique-id="c77d3c78-9a37-4cba-8fbb-67eca297103f" data-file-name="components/layout/Navbar.tsx">T</span></span></span><span data-unique-id="13915edd-4faa-49dc-8599-15f20b3033f0" data-file-name="components/layout/Navbar.tsx"><span className="editable-text" data-unique-id="c8f49704-b48a-41ed-ada2-4d3ab01c9ec8" data-file-name="components/layout/Navbar.tsx">anveer</span></span><span className="text-chart-1" data-unique-id="d3c5d407-574b-48fe-8ebb-edcabe84844f" data-file-name="components/layout/Navbar.tsx"><span data-unique-id="20fbd112-0730-41b0-80d0-9b574c707bbd" data-file-name="components/layout/Navbar.tsx"><span className="editable-text" data-unique-id="25be4105-2bd1-4f5b-9890-194ce3722aff" data-file-name="components/layout/Navbar.tsx">L</span></span></span>
        </motion.div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block" data-unique-id="79ba45cd-0a84-416e-bc1a-b1e84277e3b1" data-file-name="components/layout/Navbar.tsx">
          <ul className="flex space-x-5" data-unique-id="a7adb7d3-5065-453e-9ed5-e4b3fa3eb37d" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
            {navLinks.map(link => <li key={link.name} data-unique-id="c084abbd-de35-4f94-bc9b-5c42b1cbc90b" data-file-name="components/layout/Navbar.tsx">
                <a href={link.href} onClick={e => handleNavClick(e, link.href)} className={cn('relative px-2 py-2 text-sm font-medium transition-all hover:text-chart-1 flex items-center gap-1 group', activeSection === link.href.slice(1) ? 'text-chart-1' : 'text-foreground')} data-unique-id="5b15db8b-e89f-4704-9148-dbd25a9a3368" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
                  {activeSection === link.href.slice(1) && <ChevronRight size={14} className="opacity-100 transition-opacity" />}
                  <span className="font-medium" data-unique-id="f60003cf-8e33-4edf-829e-43815b3efbb4" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">{link.name}</span>
                  <motion.div className={cn("absolute bottom-0 left-0 h-0.5 bg-chart-1 transition-all", activeSection === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full")} layoutId="navIndicator" transition={{
                type: "spring",
                stiffness: 350,
                damping: 30
              }} data-unique-id="b86e9ac3-b690-4faf-be9c-c21ae7b4a74a" data-file-name="components/layout/Navbar.tsx" />
                </a>
              </li>)}
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden p-2 z-50 relative" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" data-unique-id="191243d1-b695-47df-9654-4508c626ad71" data-file-name="components/layout/Navbar.tsx">
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? <motion.div key="close" initial={{
            opacity: 0,
            rotate: -90
          }} animate={{
            opacity: 1,
            rotate: 0
          }} exit={{
            opacity: 0,
            rotate: 90
          }} transition={{
            duration: 0.2
          }} data-unique-id="2c729b6b-c40d-4bb1-b8f2-4d6857ded00b" data-file-name="components/layout/Navbar.tsx">
                <X size={24} className="text-chart-1" />
              </motion.div> : <motion.div key="menu" initial={{
            opacity: 0,
            rotate: 90
          }} animate={{
            opacity: 1,
            rotate: 0
          }} exit={{
            opacity: 0,
            rotate: -90
          }} transition={{
            duration: 0.2
          }} data-unique-id="79fa85fe-09a1-445e-b991-1dd4166b7a19" data-file-name="components/layout/Navbar.tsx">
                <Menu size={24} />
              </motion.div>}
          </AnimatePresence>
        </button>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0,
          y: -20
        }} animate={{
          opacity: 1,
          height: 'auto',
          y: 0
        }} exit={{
          opacity: 0,
          height: 0,
          y: -20
        }} transition={{
          duration: 0.3
        }} className="fixed inset-0 top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-md flex items-center justify-center z-40 md:hidden" data-unique-id="5d78cda2-2515-4523-9c44-4e8dbcf9cca4" data-file-name="components/layout/Navbar.tsx">
              <nav className="px-6 py-8 w-full" data-unique-id="6fec76b3-99b5-4db0-8af6-081433388778" data-file-name="components/layout/Navbar.tsx">
                <ul className="flex flex-col items-center space-y-6" data-unique-id="e85f1008-f47e-4c72-9532-51f4b1d09ece" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
                  {navLinks.map(link => <motion.li key={link.name} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.3
              }} className="w-full" data-unique-id="c5473844-7ae7-4812-932b-a4537123c05a" data-file-name="components/layout/Navbar.tsx">
                      <a href={link.href} onClick={e => handleNavClick(e, link.href)} className={cn('relative flex justify-center text-xl font-medium py-3 w-full border-b border-border/30', activeSection === link.href.slice(1) ? 'text-chart-1' : 'text-foreground')} data-unique-id="3206c920-6c9f-46c2-92ec-cc1856185106" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
                        {link.name}
                      </a>
                    </motion.li>)}
                </ul>
              </nav>
            </motion.div>}
        </AnimatePresence>
      </div>
    </motion.header>;
}