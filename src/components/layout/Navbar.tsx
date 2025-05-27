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
  }} data-unique-id="8eb7dd5c-adcb-4fdf-8628-9df350bc01d9" data-file-name="components/layout/Navbar.tsx">
      <div className="container mx-auto px-6 flex items-center justify-between" data-unique-id="fb2acae5-4847-49e2-8dd9-b8d7b35bb128" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2
      }} className="text-2xl font-bold text-primary" data-unique-id="e08ec135-85f6-4a13-aa84-d2aca8d85723" data-file-name="components/layout/Navbar.tsx">
          <span className="text-chart-1" data-unique-id="8fd08557-7598-4262-8ea4-bfee5c086d36" data-file-name="components/layout/Navbar.tsx"><span data-unique-id="4e27da0c-bc3b-4b96-9b1f-64a27a864862" data-file-name="components/layout/Navbar.tsx"><span className="editable-text" data-unique-id="7fe0eca6-93ff-4c7f-a872-70bd6619502d" data-file-name="components/layout/Navbar.tsx">T</span></span></span><span data-unique-id="300467e6-6cbe-487e-a69b-a897277df8a3" data-file-name="components/layout/Navbar.tsx"><span className="editable-text" data-unique-id="12013b2c-10f9-4008-81c9-b5f34a3df161" data-file-name="components/layout/Navbar.tsx">anveer</span></span><span className="text-chart-1" data-unique-id="13c1b68b-98cf-4348-aa0a-0ec74bce992b" data-file-name="components/layout/Navbar.tsx"><span data-unique-id="ea75194b-d7ff-4f7d-bb10-98c6056075fa" data-file-name="components/layout/Navbar.tsx"><span className="editable-text" data-unique-id="0acda68a-ba5b-4bb8-a38a-f41f5f4a91d5" data-file-name="components/layout/Navbar.tsx">L</span></span></span>
        </motion.div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block" data-unique-id="6632e0e6-fb50-47eb-972f-e8de046c07e2" data-file-name="components/layout/Navbar.tsx">
          <ul className="flex space-x-5" data-unique-id="853208b8-6368-4354-b1e0-0e3a0605613d" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
            {navLinks.map(link => <li key={link.name} data-unique-id="85b0f5fc-8e13-466e-823e-ef41e5b2844b" data-file-name="components/layout/Navbar.tsx">
                <a href={link.href} onClick={e => handleNavClick(e, link.href)} className={cn('relative px-2 py-2 text-sm font-medium transition-all hover:text-chart-1 flex items-center gap-1 group', activeSection === link.href.slice(1) ? 'text-chart-1' : 'text-foreground')} data-unique-id="95aeb912-5266-45e4-8e3c-02a705f0f37e" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
                  {activeSection === link.href.slice(1) && <ChevronRight size={14} className="opacity-100 transition-opacity" />}
                  <span className="font-medium" data-unique-id="8752b9d1-588e-4b5d-8f1f-2e2bd6ab83e4" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">{link.name}</span>
                  <motion.div className={cn("absolute bottom-0 left-0 h-0.5 bg-chart-1 transition-all", activeSection === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full")} layoutId="navIndicator" transition={{
                type: "spring",
                stiffness: 350,
                damping: 30
              }} data-unique-id="3bfa745a-aa61-4d97-af7c-29a871bea6aa" data-file-name="components/layout/Navbar.tsx" />
                </a>
              </li>)}
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden p-2 z-50 relative" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" data-unique-id="d66c970c-5c8a-40d3-959f-43f1faa15003" data-file-name="components/layout/Navbar.tsx">
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
          }} data-unique-id="c414809f-46f0-451d-9892-43c3bcbfd846" data-file-name="components/layout/Navbar.tsx">
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
          }} data-unique-id="1793b568-d311-4043-b962-099c51badb0b" data-file-name="components/layout/Navbar.tsx">
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
        }} className="fixed inset-0 top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-md flex items-center justify-center z-40 md:hidden" data-unique-id="98a362a5-2b72-4498-aa94-7c1ce80d6a74" data-file-name="components/layout/Navbar.tsx">
              <nav className="px-6 py-8 w-full" data-unique-id="e3fe14db-68b1-42c3-93bc-e184ccf2cc68" data-file-name="components/layout/Navbar.tsx">
                <ul className="flex flex-col items-center space-y-6" data-unique-id="90a5a579-65ad-455a-b7bc-87fc58aec55b" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
                  {navLinks.map(link => <motion.li key={link.name} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.3
              }} className="w-full" data-unique-id="3f2a3839-219b-4338-a24a-b8f56a398b34" data-file-name="components/layout/Navbar.tsx">
                      <a href={link.href} onClick={e => handleNavClick(e, link.href)} className={cn('relative flex justify-center text-xl font-medium py-3 w-full border-b border-border/30', activeSection === link.href.slice(1) ? 'text-chart-1' : 'text-foreground')} data-unique-id="990065cb-e361-464f-9162-ccb84ba5dba8" data-file-name="components/layout/Navbar.tsx" data-dynamic-text="true">
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