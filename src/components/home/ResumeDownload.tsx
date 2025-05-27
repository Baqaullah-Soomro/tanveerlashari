'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Linkedin, Github } from 'lucide-react';
export default function ResumeDownload() {
  return <section className="py-16 bg-chart-1/5" data-unique-id="242e2bd8-2d5f-48fe-8016-ebca44ffa873" data-file-name="components/home/ResumeDownload.tsx">
      <div className="container mx-auto px-6" data-unique-id="33b7f120-ee1c-4c61-8894-4942e721ae62" data-file-name="components/home/ResumeDownload.tsx">
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
      }} className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-card to-chart-1/5 p-8 md:p-12 rounded-2xl shadow-xl border border-chart-1/20" data-unique-id="f745589e-3d7d-40c1-b39e-4269816f2e1b" data-file-name="components/home/ResumeDownload.tsx">
          <div className="mb-6 md:mb-0 md:mr-8" data-unique-id="143eb469-c31a-4628-9039-0a3b54ea869b" data-file-name="components/home/ResumeDownload.tsx">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center" data-unique-id="dff562eb-1a54-4b99-9e09-8542c18dd13b" data-file-name="components/home/ResumeDownload.tsx">
              <FileText className="mr-3 text-chart-1" size={28} /><span className="editable-text" data-unique-id="40ceb6e4-1fbc-4104-a882-8ddfd3127d86" data-file-name="components/home/ResumeDownload.tsx">
              Download My Resume
            </span></h3>
            <p className="text-muted-foreground mt-2 max-w-xl" data-unique-id="6c67a0d6-fe23-496a-9587-fb3669de66f9" data-file-name="components/home/ResumeDownload.tsx"><span className="editable-text" data-unique-id="726e51b5-fdab-4088-923c-3b696fd64872" data-file-name="components/home/ResumeDownload.tsx">
              Get a comprehensive overview of my qualifications, academic achievements, and professional experience.
            </span></p>
          </div>
          
          <div className="flex flex-wrap gap-4" data-unique-id="977b9a94-affe-4fd1-b9b4-131e3b585ad8" data-file-name="components/home/ResumeDownload.tsx">
            <motion.a whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)"
          }} whileTap={{
            scale: 0.95
          }} href="/resume.pdf" download="Tanveer_Lashari_Resume.pdf" className="flex items-center gap-2 bg-chart-1 hover:bg-chart-1/90 text-white px-7 py-4 rounded-lg transition-all font-medium shadow-lg shadow-chart-1/20" data-unique-id="11b97281-c911-41ef-8112-999f39053048" data-file-name="components/home/ResumeDownload.tsx">
              <Download size={20} />
              <span className="text-lg" data-unique-id="5852e9f9-6bd2-426d-b2cb-96d887ac49e6" data-file-name="components/home/ResumeDownload.tsx"><span className="editable-text" data-unique-id="3a705c73-53a4-481e-be72-6bc510993fdd" data-file-name="components/home/ResumeDownload.tsx"> Download Resume</span></span>
            </motion.a>
            
            <motion.div className="flex items-center gap-3" data-unique-id="9f49373b-6814-4930-bd4f-f05395219056" data-file-name="components/home/ResumeDownload.tsx">
              <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent p-3 rounded-full border border-border transition-all" data-unique-id="1c3e6569-891b-4812-9b77-ec64f11b2946" data-file-name="components/home/ResumeDownload.tsx">
                <Linkedin size={20} />
              </motion.a>
              
              <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent p-3 rounded-full border border-border transition-all" data-unique-id="596040ba-4889-415e-b21b-652275763b05" data-file-name="components/home/ResumeDownload.tsx">
                <Github size={20} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
}