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
  }} data-unique-id="448b6aea-ce89-4f9e-ad7c-4b802e0ab767" data-file-name="components/layout/Navbar.tsx">
      <div className="container mx-auto px-6 flex items-center justify-between" data-unique-id="22a920fa-c467-4599-9371-1479a0d7c9ed" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2
      }} className="text-2xl font-bold text-primary" data-unique-id="81305b2d-3601-41ff-a4a3-fffca42abf70" data-file-name="components/layout/Navbar.tsx">
          <span className="text-chart-1" data-unique-id="71976c7c-4715-44d0-8394-5fe3e76a5b4c" data-file-name="components/layout/Navbar.tsx"><span data-unique-id="f7d8b470-bea8-4167-993d-da440cf6fb38" data-file-name="components/layout/Navbar.tsx"><span className="editable-text" data-unique-id="428001fa-4098-4758-b4d4-04afa0e335a0" data-file-name="components/layout/Navbar.tsx">T</span></span></span><span data-unique-id="c9eb7cea-8801-4ee6-9d6c-ab9e8b22fe9e" data-file-name="components/layout/Navbar.tsx"><span className="editable-text" data-unique-id="1dcb3ac8-08eb-4b24-a16e-bd3642c36214" data-file-name="components/layout/Navbar.tsx">anveer</span></span><span className="text-chart-1" data-unique-id="3d80d8a1-a907-4577-a0c2-a41d015c7dfd" data-file-name="components/layout/Navbar.tsx"><span data-unique-id="3a2f0730-662b-42e1-8c5d-27733f645702" data-file-name="components/layout/Navbar.tsx"><span className="editable-text" data-unique-id="814a1656-ce26-4fa4-8685-8cf290ae6c0b" data-file-name="components/layout/Navbar.tsx">L</span></span></span>
        </motion.div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block" data-unique-id="d6d369b8-4277-475f-9309-47d09c1c513a" data-file-name="components/layout/Navbar.tsx">
          <ul className="flex space-x-5" data-unique-id="aeefcf3c-671e-4729-88d4-8cc13af5b803" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
            {navLinks.map(link => <li key={link.name} data-unique-id="7f77281c-24d6-4a37-aa53-6c4286bc5b93" data-file-name="components/layout/Navbar.tsx">
                <a href={link.href} onClick={e => handleNavClick(e, link.href)} className={cn('relative px-2 py-2 text-sm font-medium transition-all hover:text-chart-1 flex items-center gap-1 group', activeSection === link.href.slice(1) ? 'text-chart-1' : 'text-foreground')} data-unique-id="27f52e17-f99c-488b-a71c-723fe51a7b94" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
                  {activeSection === link.href.slice(1) && <ChevronRight size={14} className="opacity-100 transition-opacity" />}
                  <span className="font-medium" data-unique-id="b43850a9-cb74-495b-944c-b29299ccdd9f" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">{link.name}</span>
                  <motion.div className={cn("absolute bottom-0 left-0 h-0.5 bg-chart-1 transition-all", activeSection === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full")} layoutId="navIndicator" transition={{
                type: "spring",
                stiffness: 350,
                damping: 30
              }} data-unique-id="be78f1af-4bfc-45cc-80b3-f8f1022e3416" data-file-name="components/layout/Navbar.tsx" />
                </a>
              </li>)}
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden p-2 z-50 relative" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" data-unique-id="71d13ee0-3d0f-4f11-a0d9-6d489405a314" data-file-name="components/layout/Navbar.tsx">
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
          }} data-unique-id="90b3c735-e426-47d8-b14b-141615b70cdc" data-file-name="components/layout/Navbar.tsx">
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
          }} data-unique-id="80f0478b-7bec-462a-9e35-f134c341226c" data-file-name="components/layout/Navbar.tsx">
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
        }} className="fixed inset-0 top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-md flex items-center justify-center z-40 md:hidden" data-unique-id="a4c17689-a816-45e2-a513-c8196edb25f3" data-file-name="components/layout/Navbar.tsx">
              <nav className="px-6 py-8 w-full" data-unique-id="ac46a875-ba01-42c7-842b-b00b3caf8a59" data-file-name="components/layout/Navbar.tsx">
                <ul className="flex flex-col items-center space-y-6" data-unique-id="a465029d-0ab5-4a88-ae9d-6e114e446d1d" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
                  {navLinks.map(link => <motion.li key={link.name} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.3
              }} className="w-full" data-unique-id="ea054328-65a9-4f2d-87cf-c244f0a8b4ae" data-file-name="components/layout/Navbar.tsx">
                      <a href={link.href} onClick={e => handleNavClick(e, link.href)} className={cn('relative flex justify-center text-xl font-medium py-3 w-full border-b border-border/30', activeSection === link.href.slice(1) ? 'text-chart-1' : 'text-foreground')} data-unique-id="a28d8fab-565d-44b6-808f-6ee07400c000" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
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