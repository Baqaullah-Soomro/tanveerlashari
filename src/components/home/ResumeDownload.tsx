'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Linkedin, Github } from 'lucide-react';
export default function ResumeDownload() {
  return <section className="py-16 bg-chart-1/5" data-unique-id="71c27480-cf73-48d7-b448-6ebfb075b47e" data-file-name="components/home/ResumeDownload.tsx">
      <div className="container mx-auto px-6" data-unique-id="bffa2106-a9a0-4d15-bc48-071025049ce7" data-file-name="components/home/ResumeDownload.tsx">
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
      }} className="flex flex-col md:flex-row items-center justify-between bg-card p-8 md:p-12 rounded-lg shadow-lg" data-unique-id="d0c8e477-07bf-44f5-b47d-d79436ec8fb9" data-file-name="components/home/ResumeDownload.tsx">
          <div className="mb-6 md:mb-0 md:mr-8" data-unique-id="458d6a7e-85a3-4ed8-8270-a173f8c2ba05" data-file-name="components/home/ResumeDownload.tsx">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center" data-unique-id="953b3ae8-3521-481e-b6e7-de3af994f52a" data-file-name="components/home/ResumeDownload.tsx">
              <FileText className="mr-3 text-chart-1" size={28} /><span className="editable-text" data-unique-id="c9b89035-5aaa-4281-8035-9f1a2fa26cf8" data-file-name="components/home/ResumeDownload.tsx">
              Download My Resume
            </span></h3>
            <p className="text-muted-foreground mt-2 max-w-xl" data-unique-id="c3af2f25-987f-4098-8f91-49389c4b0818" data-file-name="components/home/ResumeDownload.tsx"><span className="editable-text" data-unique-id="f9057040-3769-4e8a-8b0f-4a8199c2853c" data-file-name="components/home/ResumeDownload.tsx">
              Get a comprehensive overview of my qualifications, academic achievements, and professional experience.
            </span></p>
          </div>
          
          <div className="flex flex-wrap gap-4" data-unique-id="0b6a472c-d580-4bb3-b7da-e3aa241fe780" data-file-name="components/home/ResumeDownload.tsx">
            <motion.a whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} href="#" className="flex items-center gap-2 bg-chart-1 hover:bg-chart-1/90 text-white px-6 py-3 rounded-lg transition-all" data-unique-id="6d6aedb7-1d94-481f-9b66-d748104683bd" data-file-name="components/home/ResumeDownload.tsx">
              <Download size={18} /><span className="editable-text" data-unique-id="13146a8c-ebca-44d8-a880-66e65a10b9d9" data-file-name="components/home/ResumeDownload.tsx"> Resume (PDF)
            </span></motion.a>
            
            <motion.div className="flex items-center gap-3" data-unique-id="ad0b917f-504c-475d-95c2-8047faa65da8" data-file-name="components/home/ResumeDownload.tsx">
              <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent p-3 rounded-full border border-border transition-all" data-unique-id="4c1c1220-54d8-426b-a442-fcbdaba5776e" data-file-name="components/home/ResumeDownload.tsx">
                <Linkedin size={20} />
              </motion.a>
              
              <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent p-3 rounded-full border border-border transition-all" data-unique-id="61fb6101-a72b-4b8a-ae15-5d9d5db364eb" data-file-name="components/home/ResumeDownload.tsx">
                <Github size={20} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
}