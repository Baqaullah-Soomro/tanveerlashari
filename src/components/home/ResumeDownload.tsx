'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Linkedin, Github } from 'lucide-react';
export default function ResumeDownload() {
  return <section className="py-16 bg-chart-1/5" data-unique-id="ec259a67-0cd0-4f2d-ae24-f8fd2b90f9a9" data-file-name="components/home/ResumeDownload.tsx">
      <div className="container mx-auto px-6" data-unique-id="f0b015f6-f4c3-4d44-a5b4-01fcb3fe403b" data-file-name="components/home/ResumeDownload.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.2
      }} transition={{
        duration: 0.5
      }} className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-card to-chart-1/5 p-8 md:p-12 rounded-2xl shadow-xl border border-chart-1/20" data-unique-id="8f546c28-bed5-44a3-a291-41ff0030e730" data-file-name="components/home/ResumeDownload.tsx">
          <div className="mb-6 md:mb-0 md:mr-8" data-unique-id="6fa6d601-f744-4509-9924-4e48f52a686a" data-file-name="components/home/ResumeDownload.tsx">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center" data-unique-id="c0fe369f-bf51-4970-8315-ae8b5eea8316" data-file-name="components/home/ResumeDownload.tsx">
              <FileText className="mr-3 text-chart-1" size={28} /><span className="editable-text" data-unique-id="6d6636b6-f302-4478-83c7-4ce37f4ca9de" data-file-name="components/home/ResumeDownload.tsx">
              Download My Resume
            </span></h3>
            <p className="text-muted-foreground mt-2 max-w-xl" data-unique-id="bf4a40ae-ebb1-4a1e-9431-00a9cd5a42ea" data-file-name="components/home/ResumeDownload.tsx"><span className="editable-text" data-unique-id="171ce060-ad4d-4a1d-91ba-0e333092f939" data-file-name="components/home/ResumeDownload.tsx">
              Get a comprehensive overview of my qualifications, academic achievements, and professional experience.
            </span></p>
          </div>
          
          <div className="flex flex-wrap gap-4" data-unique-id="9caf7096-1a48-46df-98b4-aa5d67e79bab" data-file-name="components/home/ResumeDownload.tsx">
            <motion.a whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)"
          }} whileTap={{
            scale: 0.95
          }} href="/resume.pdf" download="Tanveer_Lashari_Resume.pdf" className="flex items-center gap-2 bg-chart-1 hover:bg-chart-1/90 text-white px-7 py-4 rounded-lg transition-all font-medium shadow-lg shadow-chart-1/20" data-unique-id="7c9d4a4d-89b6-4fc0-8982-94918dd91099" data-file-name="components/home/ResumeDownload.tsx">
              <Download size={20} />
              <span className="text-lg" data-unique-id="b21065cc-8d88-4d74-afe4-937ff174377a" data-file-name="components/home/ResumeDownload.tsx"><span className="editable-text" data-unique-id="421d1b1a-2039-4ebf-9340-2ae6fde47032" data-file-name="components/home/ResumeDownload.tsx"> Download Resume</span></span>
            </motion.a>
            
            <motion.div className="flex items-center gap-3" data-unique-id="b9812c11-8ae3-4f90-9503-295c08c1747c" data-file-name="components/home/ResumeDownload.tsx">
              <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent p-3 rounded-full border border-border transition-all" data-unique-id="2367aa0d-672d-4d48-aafc-30211f3bfa6a" data-file-name="components/home/ResumeDownload.tsx">
                <Linkedin size={20} />
              </motion.a>
              
              <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent p-3 rounded-full border border-border transition-all" data-unique-id="e78fd808-66c0-4059-abf4-e549c385deb9" data-file-name="components/home/ResumeDownload.tsx">
                <Github size={20} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
}