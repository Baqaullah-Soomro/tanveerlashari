'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Linkedin, Github } from 'lucide-react';
export default function ResumeDownload() {
  return <section className="py-16 bg-chart-1/5" data-unique-id="b4b38350-0abc-4013-95a1-3d92b9832926" data-file-name="components/home/ResumeDownload.tsx">
      <div className="container mx-auto px-6" data-unique-id="0ea18675-448e-468c-9020-3cf97ed7bf75" data-file-name="components/home/ResumeDownload.tsx">
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
      }} className="flex flex-col md:flex-row items-center justify-between bg-card p-8 md:p-12 rounded-lg shadow-lg border border-border/30" data-unique-id="11176a86-088a-40b4-90e9-29b746009466" data-file-name="components/home/ResumeDownload.tsx">
          <div className="mb-6 md:mb-0 md:mr-8" data-unique-id="d024bdd0-9bf1-459f-beee-443122a16f08" data-file-name="components/home/ResumeDownload.tsx">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center" data-unique-id="dc973907-7a0d-4870-8525-0e19bfbca45c" data-file-name="components/home/ResumeDownload.tsx">
              <FileText className="mr-3 text-chart-1" size={28} /><span className="editable-text" data-unique-id="eb5a3908-183c-4b9e-a987-9e922637d239" data-file-name="components/home/ResumeDownload.tsx">
              Download My Resume
            </span></h3>
            <p className="text-muted-foreground mt-2 max-w-xl" data-unique-id="95565b43-f93a-4e49-a46d-7b7ad9f00d9f" data-file-name="components/home/ResumeDownload.tsx"><span className="editable-text" data-unique-id="903cf56f-2fb4-446e-a02b-ae6e232a662b" data-file-name="components/home/ResumeDownload.tsx">
              Get a comprehensive overview of my qualifications, academic achievements, and professional experience.
            </span></p>
          </div>
          
          <div className="flex flex-wrap gap-4" data-unique-id="d2ec867d-f540-4e21-815b-4d99bfc4816d" data-file-name="components/home/ResumeDownload.tsx">
            <motion.a whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} href="#" className="flex items-center gap-2 bg-chart-1 hover:bg-chart-1/90 text-white px-6 py-3 rounded-lg transition-all" data-unique-id="4e827da5-77cd-4d8d-a34f-c51fe625db20" data-file-name="components/home/ResumeDownload.tsx">
              <Download size={18} /><span className="editable-text" data-unique-id="086304dc-430c-4c76-a5f1-8d0c5cb3e76f" data-file-name="components/home/ResumeDownload.tsx"> Resume (PDF)
            </span></motion.a>
            
            <motion.div className="flex items-center gap-3" data-unique-id="96cd0cf1-f7a6-4faf-866b-eee19a93ffd3" data-file-name="components/home/ResumeDownload.tsx">
              <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent p-3 rounded-full border border-border transition-all" data-unique-id="7588ff1e-9e82-469c-a09b-4f1c006bf6c2" data-file-name="components/home/ResumeDownload.tsx">
                <Linkedin size={20} />
              </motion.a>
              
              <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-accent p-3 rounded-full border border-border transition-all" data-unique-id="b2300f81-02ba-4624-9ff6-8fea9b04030f" data-file-name="components/home/ResumeDownload.tsx">
                <Github size={20} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
}