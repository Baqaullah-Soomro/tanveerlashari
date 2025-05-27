import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Experience from '@/components/home/Experience';
import Skills from '@/components/home/Skills';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';
import ResumeDownload from '@/components/home/ResumeDownload';
import ThemeToggle from '@/components/ui/ThemeToggle';
export default function HomePage() {
  return <main className="overflow-hidden" data-unique-id="3e83f6e9-17d4-45ae-b288-35431105d880" data-file-name="app/page.tsx">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Testimonials />
      <Contact />
      <ResumeDownload />
      <ThemeToggle />
    </main>;
}