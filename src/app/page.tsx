import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Experience from '@/components/home/Experience';
import Skills from '@/components/home/Skills';
import Contact from '@/components/home/Contact';
import ResumeDownload from '@/components/home/ResumeDownload';
import ThemeToggle from '@/components/ui/ThemeToggle';
export default function HomePage() {
  return <main data-unique-id="6f2ddec5-557b-4dd8-a2cf-517b83629210" data-file-name="app/page.tsx">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <ResumeDownload />
      <ThemeToggle />
    </main>;
}