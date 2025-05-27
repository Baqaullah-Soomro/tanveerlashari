import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Experience from '@/components/home/Experience';
import Skills from '@/components/home/Skills';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';
import Resume from '@/components/home/Resume';
import ResumeDownload from '@/components/home/ResumeDownload';
import ThemeToggle from '@/components/ui/ThemeToggle';
export default function HomePage() {
  return <main className="overflow-hidden" data-unique-id="25f7e672-224b-4e4b-84a1-2ff5c2d70f2a" data-file-name="app/page.tsx">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Testimonials />
      <Contact />
      <Resume />
      <ResumeDownload />
      <ThemeToggle />
    </main>;
}