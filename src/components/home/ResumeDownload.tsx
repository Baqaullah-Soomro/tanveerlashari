'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Linkedin, Github } from 'lucide-react';
export default function ResumeDownload() {
  return <section className="py-16 bg-chart-1/5" data-unique-id="b65e354d-1c87-486e-bbd7-ef8f016ded6a" data-file-name="components/home/ResumeDownload.tsx">
      <div className="container mx-auto px-6" data-unique-id="6831348f-a866-48d4-8e6c-23a52947bd97" data-file-name="components/home/ResumeDownload.tsx">
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
      }} className="flex flex-col md:flex-row items-center justify-between bg-card p-8 md:p-12 rounded-lg shadow-lg" data-unique-id="2fff7f1b-adf1-40c9-babb-a11009b0dc7b" data-file-name="components/home/ResumeDownload.tsx">
          <div className="mb-6 md:mb-0 md:mr-8" data-unique-id="24e95c88-73e2-4351-92fe-d5c5e537bd9e" data-file-name="components/home/ResumeDownload.tsx">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center" data-unique-id="ae00008e-3b21-43bb-8b32-2e21102b7803" data-file-name="components/home/ResumeDownload.tsx">
              <FileText className="mr-3 text-chart-1" size={28} /><span className="editable-text" data-unique-id="afbd0450-d6c8-49bb-8fc1-c81d016dbc96" data-file-name="components/home/ResumeDownload.tsx">
              Download My Resume
            </span></h3>
            <p className="text-muted-foreground mt-2 max-w-xl" data-unique-id="b408d660-3656-4a53-993c-ed4daad64b22" data-file-name="components/home/ResumeDownload.tsx"><span className="editable-text" data-unique-id="640926af-f703-4d6f-8762-7a6f9e3a4042" data-file-name="components/home/ResumeDownload.tsx">
              Get a comprehensive overview of my qualifications, academic achievements, and professional experience.
            </span></p>
          </div>
          
          <div className="flex flex-wrap gap-4" data-unique-id="d4b9a754-dfa4-4db9-a5fd-2e11ec6f4d27" data-file-name="components/home/ResumeDownload.tsx">
            <motion.a whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} href="#" className="flex items-center gap-2 bg-chart-1 hover:bg-chart-1/90 text-white px-6 py-3 rounded-lg transition-all" data-unique-id="0ed79611-7e97-4606-89d8-7f1be0806bd2" data-file-name="components/home/ResumeDownload.tsx">
              <Download size={18} /><span className="editable-text" data-unique-id="81ecd65c-3ad3-4860-9fd6-7d9d4abb886a" data-file-name="components/home/ResumeDownload.tsx"> Resume (PDF)
            </span></motion.a>
            
            <motion.div className="flex items-center gap-3" data-unique-id="fdd7162e-51cb-4ca6-aff0-2a3f4ac11272" data-file-name="components/home/ResumeDownload.tsx">
              <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent p-3 rounded-full border border-border transition-all" data-unique-id="f2be055e-0a66-4a89-b725-6b4cd5d96946" data-file-name="components/home/ResumeDownload.tsx">
                <Linkedin size={20} />
              </motion.a>
              
              <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent p-3 rounded-full border border-border transition-all" data-unique-id="802f650c-ef5f-4a78-9699-4c407b9dc46e" data-file-name="components/home/ResumeDownload.tsx">
                <Github size={20} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
}