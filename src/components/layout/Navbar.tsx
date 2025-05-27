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
  }} className={cn('fixed w-full z-50 transition-all duration-300', scrolled ? 'bg-background/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5')} style={{
    boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none'
  }} data-unique-id="fc8205aa-6a49-4c7a-b94e-98d3f5848595" data-file-name="components/layout/Navbar.tsx">
      <div className="container mx-auto px-6 flex items-center justify-between" data-unique-id="e74298bc-5aa4-456e-b43d-f743bf7b0a14" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2
      }} className="text-2xl font-bold text-primary" data-unique-id="842d260d-60a1-4aa8-8531-915cd9d07dca" data-file-name="components/layout/Navbar.tsx">
          <span className="text-chart-1" data-unique-id="f92f2355-ba63-46da-911d-aa70099fbdb4" data-file-name="components/layout/Navbar.tsx"><span data-unique-id="3ad561cc-03bf-41a3-8e79-0f298502cd76" data-file-name="components/layout/Navbar.tsx"><span className="editable-text" data-unique-id="b309a643-57f6-481d-8c69-ff9e0375182c" data-file-name="components/layout/Navbar.tsx">T</span></span></span><span data-unique-id="49fe12c1-0149-4e0b-803f-78ff1d3ae265" data-file-name="components/layout/Navbar.tsx"><span className="editable-text" data-unique-id="aac3048b-ec0d-48ef-b440-d6bfa8e85c11" data-file-name="components/layout/Navbar.tsx">anveer</span></span><span className="text-chart-1" data-unique-id="5f1dbed1-a073-4455-964a-7391a736cfbf" data-file-name="components/layout/Navbar.tsx"><span data-unique-id="3d9245fa-5f06-4fad-bc5e-72024b37a3a0" data-file-name="components/layout/Navbar.tsx"><span className="editable-text" data-unique-id="d31e667b-ee0b-49e0-a2a8-3dfa630bfab2" data-file-name="components/layout/Navbar.tsx">L</span></span></span>
        </motion.div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block" data-unique-id="34042aec-a58c-432f-b32c-886565754fc0" data-file-name="components/layout/Navbar.tsx">
          <ul className="flex space-x-5" data-unique-id="1723c351-a40f-4d13-b980-66b2c15e094b" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
            {navLinks.map(link => <li key={link.name} data-unique-id="fd47a6a1-a839-4cad-a63e-a7d9b4a7cb27" data-file-name="components/layout/Navbar.tsx">
                <a href={link.href} onClick={e => handleNavClick(e, link.href)} className={cn('relative px-2 py-2 text-sm font-medium transition-all hover:text-chart-1 flex items-center gap-1 group', activeSection === link.href.slice(1) ? 'text-chart-1' : 'text-foreground')} data-unique-id="7b15975d-bc02-4a86-8d3b-92407b7d5fed" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
                  {activeSection === link.href.slice(1) && <ChevronRight size={14} className="opacity-100 transition-opacity" />}
                  <span data-unique-id="23b61ecf-a0c6-4365-86b9-9720423c0f8b" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">{link.name}</span>
                  <motion.div className={cn("absolute bottom-0 left-0 h-0.5 bg-chart-1 transition-all", activeSection === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full")} layoutId="navIndicator" data-unique-id="d68be227-2b70-4f8d-b62c-094edf3d5f60" data-file-name="components/layout/Navbar.tsx" />
                </a>
              </li>)}
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden p-2 z-50 relative" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" data-unique-id="752bbb56-59a8-44a4-97dc-181abf815971" data-file-name="components/layout/Navbar.tsx">
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
          }} data-unique-id="ac5bf121-7062-4150-be78-35006f3d6dbe" data-file-name="components/layout/Navbar.tsx">
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
          }} data-unique-id="7d47c5c6-6845-432d-b0d2-b27b09544e4e" data-file-name="components/layout/Navbar.tsx">
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
        }} className="fixed inset-0 top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-md flex items-center justify-center z-40 md:hidden" data-unique-id="ef280772-a4ca-4fa2-92ca-53d46c4fa71c" data-file-name="components/layout/Navbar.tsx">
              <nav className="px-6 py-8 w-full" data-unique-id="b4f34810-0030-4220-8904-8597d59f6a4f" data-file-name="components/layout/Navbar.tsx">
                <ul className="flex flex-col items-center space-y-6" data-unique-id="92525d07-062d-4fc8-9ed5-e486f2f892db" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
                  {navLinks.map(link => <motion.li key={link.name} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.3
              }} className="w-full" data-unique-id="72e6ee83-a024-4d67-bb65-ef74717f2761" data-file-name="components/layout/Navbar.tsx">
                      <a href={link.href} onClick={e => handleNavClick(e, link.href)} className={cn('relative flex justify-center text-xl font-medium py-3 w-full border-b border-border/30', activeSection === link.href.slice(1) ? 'text-chart-1' : 'text-foreground')} data-unique-id="4de3491e-6ad2-4b3c-bdbc-7c088c4d0d33" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
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