'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Linkedin, Github } from 'lucide-react';
export default function ResumeDownload() {
  return <section className="py-16 bg-chart-1/5" data-unique-id="cd27e1fe-1035-45ac-b178-4521e5162083" data-file-name="components/home/ResumeDownload.tsx">
      <div className="container mx-auto px-6" data-unique-id="1260550a-0768-462c-b40c-576cb0034e07" data-file-name="components/home/ResumeDownload.tsx">
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
      }} className="flex flex-col md:flex-row items-center justify-between bg-card p-8 md:p-12 rounded-lg shadow-lg border border-border/30" data-unique-id="c6abe739-6f51-4af0-99ed-5998fba37b23" data-file-name="components/home/ResumeDownload.tsx">
          <div className="mb-6 md:mb-0 md:mr-8" data-unique-id="17d205ee-0a83-4d4e-9062-93f125845654" data-file-name="components/home/ResumeDownload.tsx">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center" data-unique-id="d8c478e4-260e-4181-a78e-9652c45f47b5" data-file-name="components/home/ResumeDownload.tsx">
              <FileText className="mr-3 text-chart-1" size={28} /><span className="editable-text" data-unique-id="a73d95ce-f8b5-4cd6-be79-8a4822e1ed48" data-file-name="components/home/ResumeDownload.tsx">
              Download My Resume
            </span></h3>
            <p className="text-muted-foreground mt-2 max-w-xl" data-unique-id="7e323339-0624-4161-a112-4cd871f0aaa2" data-file-name="components/home/ResumeDownload.tsx"><span className="editable-text" data-unique-id="18c917ec-c470-4a23-921c-8730f8012cda" data-file-name="components/home/ResumeDownload.tsx">
              Get a comprehensive overview of my qualifications, academic achievements, and professional experience.
            </span></p>
          </div>
          
          <div className="flex flex-wrap gap-4" data-unique-id="8e72c996-1d0b-4750-a9d0-b59f3dbc7f50" data-file-name="components/home/ResumeDownload.tsx">
            <motion.a whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} href="#" className="flex items-center gap-2 bg-chart-1 hover:bg-chart-1/90 text-white px-6 py-3 rounded-lg transition-all" data-unique-id="aa860ef3-bff2-4dfb-a949-77e4ff7577a6" data-file-name="components/home/ResumeDownload.tsx">
              <Download size={18} /><span className="editable-text" data-unique-id="681708d9-895f-407f-9013-c423577a5f86" data-file-name="components/home/ResumeDownload.tsx"> Resume (PDF)
            </span></motion.a>
            
            <motion.div className="flex items-center gap-3" data-unique-id="1d99e648-831e-4eed-ad75-637ea9810d2b" data-file-name="components/home/ResumeDownload.tsx">
              <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent p-3 rounded-full border border-border transition-all" data-unique-id="10c223ef-4c0f-489e-8c10-b4e6ac382594" data-file-name="components/home/ResumeDownload.tsx">
                <Linkedin size={20} />
              </motion.a>
              
              <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent p-3 rounded-full border border-border transition-all" data-unique-id="e8350b1d-a7e9-45a6-b836-2d41d5e76ec5" data-file-name="components/home/ResumeDownload.tsx">
                <Github size={20} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
}