'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Linkedin, Github } from 'lucide-react';
export default function ResumeDownload() {
  return <section className="py-16 bg-chart-1/5" data-unique-id="9d6eff12-f8df-43b2-9647-d6867e661bdb" data-file-name="components/home/ResumeDownload.tsx">
      <div className="container mx-auto px-6" data-unique-id="063a9a6d-d778-4164-a786-d48bb2f1bd2f" data-file-name="components/home/ResumeDownload.tsx">
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
      }} className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-card to-chart-1/5 p-8 md:p-12 rounded-2xl shadow-xl border border-chart-1/20" data-unique-id="4546ac97-1f80-4dd9-913e-2c2d22616379" data-file-name="components/home/ResumeDownload.tsx">
          <div className="mb-6 md:mb-0 md:mr-8" data-unique-id="006ff5de-e990-4765-a94b-ee3641b90f5b" data-file-name="components/home/ResumeDownload.tsx">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center" data-unique-id="a0972da1-9745-41b2-84d5-9c4448d35b2f" data-file-name="components/home/ResumeDownload.tsx">
              <FileText className="mr-3 text-chart-1" size={28} /><span className="editable-text" data-unique-id="64dda172-8b7c-4879-bf4e-8bc492d85b64" data-file-name="components/home/ResumeDownload.tsx">
              Download My Resume
            </span></h3>
            <p className="text-muted-foreground mt-2 max-w-xl" data-unique-id="1493e355-ae51-4985-ad22-439e6dd3bdd5" data-file-name="components/home/ResumeDownload.tsx"><span className="editable-text" data-unique-id="cebe2a98-02dd-4f97-8dd4-2cf143bb4345" data-file-name="components/home/ResumeDownload.tsx">
              Get a comprehensive overview of my qualifications, academic achievements, and professional experience.
            </span></p>
          </div>
          
          <div className="flex flex-wrap gap-4" data-unique-id="2b4c0e68-2942-4d12-8d64-efce18d60da0" data-file-name="components/home/ResumeDownload.tsx">
            <motion.a whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)"
          }} whileTap={{
            scale: 0.95
          }} href="/resume.pdf" download="Tanveer_Lashari_Resume.pdf" className="flex items-center gap-2 bg-chart-1 hover:bg-chart-1/90 text-white px-7 py-4 rounded-lg transition-all font-medium shadow-lg shadow-chart-1/20" data-unique-id="95393885-6968-4d07-9663-70b8732172d4" data-file-name="components/home/ResumeDownload.tsx">
              <Download size={20} />
              <span className="text-lg" data-unique-id="fc70c51a-6452-470a-ba54-61572c89991d" data-file-name="components/home/ResumeDownload.tsx"><span className="editable-text" data-unique-id="ccf7e51f-3a6f-4d75-9145-0f49bfa9e56d" data-file-name="components/home/ResumeDownload.tsx"> Download Resume</span></span>
            </motion.a>
            
            <motion.div className="flex items-center gap-3" data-unique-id="d8b7c053-7115-4573-bbd2-0e7e4a38c157" data-file-name="components/home/ResumeDownload.tsx">
              <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent p-3 rounded-full border border-border transition-all" data-unique-id="4ddf9145-df83-4071-a510-4de0f859374f" data-file-name="components/home/ResumeDownload.tsx">
                <Linkedin size={20} />
              </motion.a>
              
              <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent p-3 rounded-full border border-border transition-all" data-unique-id="4c1209a8-70c7-47cc-8d09-99eabe24fe13" data-file-name="components/home/ResumeDownload.tsx">
                <Github size={20} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
}