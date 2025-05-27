'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Linkedin, Github } from 'lucide-react';
export default function ResumeDownload() {
  return <section className="py-16 bg-chart-1/5" data-unique-id="fa6b2a1a-dc36-45b6-9d60-c53f821d4ace" data-file-name="components/home/ResumeDownload.tsx">
      <div className="container mx-auto px-6" data-unique-id="05b22de9-7b9b-4072-b035-b642512b9b31" data-file-name="components/home/ResumeDownload.tsx">
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
      }} className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-card to-chart-1/5 p-8 md:p-12 rounded-2xl shadow-xl border border-chart-1/20" data-unique-id="9ae5e7c8-3026-4602-9df3-302ff59db816" data-file-name="components/home/ResumeDownload.tsx">
          <div className="mb-6 md:mb-0 md:mr-8" data-unique-id="d4aaa1f7-e951-439b-8973-ddcdfde19d8f" data-file-name="components/home/ResumeDownload.tsx">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center" data-unique-id="e2abef5a-e60a-4cb2-87d4-7948bca9aa59" data-file-name="components/home/ResumeDownload.tsx">
              <FileText className="mr-3 text-chart-1" size={28} /><span className="editable-text" data-unique-id="795f2ec2-ab0c-4adb-bac0-cc5e1cb807a4" data-file-name="components/home/ResumeDownload.tsx">
              Download My Resume
            </span></h3>
            <p className="text-muted-foreground mt-2 max-w-xl" data-unique-id="3d58cfe9-9322-41d7-b0b9-62e45fe45244" data-file-name="components/home/ResumeDownload.tsx"><span className="editable-text" data-unique-id="917ab3dc-93c5-4374-a52e-4b7921bbdef7" data-file-name="components/home/ResumeDownload.tsx">
              Get a comprehensive overview of my qualifications, academic achievements, and professional experience.
            </span></p>
          </div>
          
          <div className="flex flex-wrap gap-4" data-unique-id="7ad80a09-1669-408b-83a2-fd69987373a0" data-file-name="components/home/ResumeDownload.tsx">
            <motion.a whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)"
          }} whileTap={{
            scale: 0.95
          }} href="/resume.pdf" download="Tanveer_Lashari_Resume.pdf" className="flex items-center gap-2 bg-chart-1 hover:bg-chart-1/90 text-white px-7 py-4 rounded-lg transition-all font-medium shadow-lg shadow-chart-1/20" data-unique-id="42a6d809-1649-4586-a587-298d38226e6e" data-file-name="components/home/ResumeDownload.tsx">
              <Download size={20} />
              <span className="text-lg" data-unique-id="d62de2be-5325-48cf-b33c-3e403d3c1d22" data-file-name="components/home/ResumeDownload.tsx"><span className="editable-text" data-unique-id="7ea9ff61-9be6-4f8f-a39b-c64da9bc966e" data-file-name="components/home/ResumeDownload.tsx"> Download Resume</span></span>
            </motion.a>
            
            <motion.div className="flex items-center gap-3" data-unique-id="5a658bcb-27b6-4c5c-a7ce-9c40b67cfd05" data-file-name="components/home/ResumeDownload.tsx">
              <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent p-3 rounded-full border border-border transition-all" data-unique-id="9f9727f4-0022-41ee-8e29-566ca9c09961" data-file-name="components/home/ResumeDownload.tsx">
                <Linkedin size={20} />
              </motion.a>
              
              <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent p-3 rounded-full border border-border transition-all" data-unique-id="af68a19e-b752-4417-9ac3-d693d868bb60" data-file-name="components/home/ResumeDownload.tsx">
                <Github size={20} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
}