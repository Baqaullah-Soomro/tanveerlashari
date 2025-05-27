'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Linkedin, Github } from 'lucide-react';
export default function ResumeDownload() {
  return <section className="py-16 bg-chart-1/5" data-unique-id="4f7e322d-3af9-4a49-9445-30b273b2eb04" data-file-name="components/home/ResumeDownload.tsx">
      <div className="container mx-auto px-6" data-unique-id="285b168f-152c-48bb-8c4e-1b587a9cdb60" data-file-name="components/home/ResumeDownload.tsx">
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
      }} className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-card to-chart-1/5 p-8 md:p-12 rounded-2xl shadow-xl border border-chart-1/20" data-unique-id="fb8ad138-888e-40a4-a9b8-bce756bad01d" data-file-name="components/home/ResumeDownload.tsx">
          <div className="mb-6 md:mb-0 md:mr-8" data-unique-id="124fae13-3ac3-47be-b822-38d9ac797c0e" data-file-name="components/home/ResumeDownload.tsx">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center" data-unique-id="2b0ddb62-4ec7-4465-91d6-dd8511f9e2a1" data-file-name="components/home/ResumeDownload.tsx">
              <FileText className="mr-3 text-chart-1" size={28} /><span className="editable-text" data-unique-id="3f9091d2-569e-4ad3-b3af-836b3d1f160e" data-file-name="components/home/ResumeDownload.tsx">
              Download My Resume
            </span></h3>
            <p className="text-muted-foreground mt-2 max-w-xl" data-unique-id="b2adf2c9-9792-41f4-8ac5-574f1c16b38e" data-file-name="components/home/ResumeDownload.tsx"><span className="editable-text" data-unique-id="bcd24a67-77c4-40a6-a25d-fe502caf2ba0" data-file-name="components/home/ResumeDownload.tsx">
              Get a comprehensive overview of my qualifications, academic achievements, and professional experience.
            </span></p>
          </div>
          
          <div className="flex flex-wrap gap-4" data-unique-id="9ceb9c09-01df-453e-9a34-12c3ed51f886" data-file-name="components/home/ResumeDownload.tsx">
            <motion.a whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)"
          }} whileTap={{
            scale: 0.95
          }} href="/resume.pdf" download="Tanveer_Lashari_Resume.pdf" className="flex items-center gap-2 bg-chart-1 hover:bg-chart-1/90 text-white px-7 py-4 rounded-lg transition-all font-medium shadow-lg shadow-chart-1/20" data-unique-id="02ef7c6c-ff5c-4a87-b912-4a8be640eabd" data-file-name="components/home/ResumeDownload.tsx">
              <Download size={20} />
              <span className="text-lg" data-unique-id="dd49b74a-1470-449b-8b7f-282f12fa1887" data-file-name="components/home/ResumeDownload.tsx"><span className="editable-text" data-unique-id="8107f723-bbc5-495c-be0b-8951f2a86878" data-file-name="components/home/ResumeDownload.tsx"> Download Resume</span></span>
            </motion.a>
            
            <motion.div className="flex items-center gap-3" data-unique-id="dde32620-0300-4030-ae39-195bf9f84b7b" data-file-name="components/home/ResumeDownload.tsx">
              <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent p-3 rounded-full border border-border transition-all" data-unique-id="05553a2c-e8a9-4577-a665-c893198c8ae7" data-file-name="components/home/ResumeDownload.tsx">
                <Linkedin size={20} />
              </motion.a>
              
              <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent p-3 rounded-full border border-border transition-all" data-unique-id="dc45a23f-d7c3-4d6c-9293-ba73c2e7813d" data-file-name="components/home/ResumeDownload.tsx">
                <Github size={20} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
}