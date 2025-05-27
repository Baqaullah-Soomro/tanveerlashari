'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border py-10" data-unique-id="68c9e5f7-be78-40cd-a766-19e777e692cd" data-file-name="components/layout/Footer.tsx">
      <div className="container mx-auto px-6" data-unique-id="aa019686-3e6c-484d-b5bf-8a928e13ddba" data-file-name="components/layout/Footer.tsx">
        <div className="flex flex-col md:flex-row justify-between items-center" data-unique-id="98a7c127-0041-4974-9757-fa3784933b28" data-file-name="components/layout/Footer.tsx">
          <div className="mb-6 md:mb-0" data-unique-id="21fbe4ed-de27-4a0a-8b53-885a1fb24857" data-file-name="components/layout/Footer.tsx">
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.2
          }} className="text-2xl font-bold" data-unique-id="7ea75a16-772e-4c03-930f-972074c192a5" data-file-name="components/layout/Footer.tsx">
              <span className="text-chart-1" data-unique-id="b3fbb644-57b4-4308-bd1a-d25fd2fb7c50" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="0cef4388-aae0-4e47-8041-dfa9ab3aac43" data-file-name="components/layout/Footer.tsx">T</span></span><span className="editable-text" data-unique-id="f2d17df1-e0be-47c3-bed5-b3c301cc9a81" data-file-name="components/layout/Footer.tsx">anver</span><span className="text-chart-1" data-unique-id="7242fa45-998e-46e9-99b3-46af6798c730" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="19dca72c-7c28-4314-a889-14a5247cd7eb" data-file-name="components/layout/Footer.tsx">L</span></span>
            </motion.div>
            <p className="text-muted-foreground mt-2" data-unique-id="dabc686d-b888-4946-bacb-41bfbaf89c5b" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="4bac429d-029f-4200-a59a-7742bc9599c8" data-file-name="components/layout/Footer.tsx">Library and Information Science Graduate</span></p>
          </div>
          
          <div className="flex items-center space-x-4" data-unique-id="8edffa0b-5595-4c19-b73b-7c258de60df9" data-file-name="components/layout/Footer.tsx">
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="mailto:lasharitanveerahmed68@gmail.com" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="Email" data-unique-id="151144bd-88a4-40a8-8526-26389979b79a" data-file-name="components/layout/Footer.tsx">
              <Mail size={20} />
            </motion.a>
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="LinkedIn" data-unique-id="162820bb-8b94-4b6f-81e4-0192482189ee" data-file-name="components/layout/Footer.tsx">
              <Linkedin size={20} />
            </motion.a>
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="GitHub" data-unique-id="f7949a7a-e93a-4f9d-addd-8a1410d7041f" data-file-name="components/layout/Footer.tsx">
              <Github size={20} />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground" data-unique-id="9c4b9cc9-7639-4c24-ac4c-97f3b561bad1" data-file-name="components/layout/Footer.tsx">
          <p className="flex items-center justify-center" data-unique-id="e24d96f1-4c15-428c-822c-162eb2399081" data-file-name="components/layout/Footer.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="76dbe45e-cdfc-4b1e-9dc8-72a20d10eb20" data-file-name="components/layout/Footer.tsx">
            © </span>{currentYear}<span className="editable-text" data-unique-id="020440c2-c3f6-47db-9a47-6cabdcc27b55" data-file-name="components/layout/Footer.tsx"> Tanveer Lashari. All rights reserved. Made with </span><Heart size={14} className="mx-1 text-chart-1" /><span className="editable-text" data-unique-id="8e58cc4b-33f8-4f45-b0ca-c99d9ce82bd1" data-file-name="components/layout/Footer.tsx"> by Tanveer Lashari
          </span></p>
        </div>
      </div>
    </footer>;
}