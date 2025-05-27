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
  }} data-unique-id="03ef2550-243a-4936-a8d0-ca6ec98a591e" data-file-name="components/layout/Navbar.tsx">
      <div className="container mx-auto px-6 flex items-center justify-between" data-unique-id="6cc59ed1-5062-4bc6-a50e-f75386960a65" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2
      }} className="text-2xl font-bold text-primary" data-unique-id="c0b95e4b-d3eb-4ab3-b998-5a43f22c1124" data-file-name="components/layout/Navbar.tsx">
          <span className="text-chart-1" data-unique-id="673101e8-beb6-42f7-9521-5182967bbd3f" data-file-name="components/layout/Navbar.tsx"><span data-unique-id="f574b077-733d-4511-b6ea-d930d9dc1882" data-file-name="components/layout/Navbar.tsx"><span className="editable-text" data-unique-id="e7344f78-d0a0-494c-8806-517b32ef59c3" data-file-name="components/layout/Navbar.tsx">T</span></span></span><span data-unique-id="77b41d7e-e6c3-452d-9348-b8a810bc59b6" data-file-name="components/layout/Navbar.tsx"><span className="editable-text" data-unique-id="aca9fcd2-8d51-4118-a8ba-3bdc7ace2012" data-file-name="components/layout/Navbar.tsx">anveer</span></span><span className="text-chart-1" data-unique-id="814dbc7a-8b79-4fb9-93f8-603430ee453d" data-file-name="components/layout/Navbar.tsx"><span data-unique-id="0dd72cb1-43c9-4ed1-a054-8f70a460e7a0" data-file-name="components/layout/Navbar.tsx"><span className="editable-text" data-unique-id="172416b4-5f85-4ef4-bbcb-7d53d5fecf3d" data-file-name="components/layout/Navbar.tsx">L</span></span></span>
        </motion.div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block" data-unique-id="7ebc4834-d815-4356-9adc-289577d92ed1" data-file-name="components/layout/Navbar.tsx">
          <ul className="flex space-x-5" data-unique-id="019001f7-cd9a-48f5-8693-80d193839627" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
            {navLinks.map(link => <li key={link.name} data-unique-id="e728f961-63e1-46e3-acd3-9b7f5f404ccd" data-file-name="components/layout/Navbar.tsx">
                <a href={link.href} onClick={e => handleNavClick(e, link.href)} className={cn('relative px-2 py-2 text-sm font-medium transition-all hover:text-chart-1 flex items-center gap-1 group', activeSection === link.href.slice(1) ? 'text-chart-1' : 'text-foreground')} data-unique-id="cce971f6-93b6-44da-84d2-d78f8c2e83d9" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
                  {activeSection === link.href.slice(1) && <ChevronRight size={14} className="opacity-100 transition-opacity" />}
                  <span className="font-medium" data-unique-id="e00c920e-fe1c-4ecc-8d1d-f174d035caea" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">{link.name}</span>
                  <motion.div className={cn("absolute bottom-0 left-0 h-0.5 bg-chart-1 transition-all", activeSection === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full")} layoutId="navIndicator" transition={{
                type: "spring",
                stiffness: 350,
                damping: 30
              }} data-unique-id="715bc910-7c0f-4343-99b8-54f8af0b811d" data-file-name="components/layout/Navbar.tsx" />
                </a>
              </li>)}
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden p-2 z-50 relative" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" data-unique-id="02060c13-f289-4dab-a3c4-d8bf0d095595" data-file-name="components/layout/Navbar.tsx">
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
          }} data-unique-id="9e26324a-68c4-4360-901d-df52d57fd76a" data-file-name="components/layout/Navbar.tsx">
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
          }} data-unique-id="93eceef2-17af-48ed-a818-bcd49d5e3215" data-file-name="components/layout/Navbar.tsx">
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
        }} className="fixed inset-0 top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-md flex items-center justify-center z-40 md:hidden" data-unique-id="e97df4fd-73db-47c7-acae-4c45341e8e42" data-file-name="components/layout/Navbar.tsx">
              <nav className="px-6 py-8 w-full" data-unique-id="5f2b1628-0897-42c0-a28c-196990363e9c" data-file-name="components/layout/Navbar.tsx">
                <ul className="flex flex-col items-center space-y-6" data-unique-id="471f70d0-8205-4cc0-9def-fc2f21b4f71a" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
                  {navLinks.map(link => <motion.li key={link.name} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.3
              }} className="w-full" data-unique-id="36d085cd-1ff2-4baa-9ce4-697dab0cbc19" data-file-name="components/layout/Navbar.tsx">
                      <a href={link.href} onClick={e => handleNavClick(e, link.href)} className={cn('relative flex justify-center text-xl font-medium py-3 w-full border-b border-border/30', activeSection === link.href.slice(1) ? 'text-chart-1' : 'text-foreground')} data-unique-id="69bc62b8-eac7-4dcf-a6f6-f8247fb5d0d2" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
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