'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border py-10" data-unique-id="eb02288d-19a2-49ac-8327-ad1254f6c48e" data-file-name="components/layout/Footer.tsx">
      <div className="container mx-auto px-6" data-unique-id="9b958d88-be17-4c0f-9d73-93733eb1dcdd" data-file-name="components/layout/Footer.tsx">
        <div className="flex flex-col md:flex-row justify-between items-center" data-unique-id="06f8eeed-6298-4005-b7da-f5e1ecf06609" data-file-name="components/layout/Footer.tsx">
          <div className="mb-6 md:mb-0" data-unique-id="25bda292-85c2-45d1-84fc-008e2e1a49c5" data-file-name="components/layout/Footer.tsx">
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.2
          }} className="text-2xl font-bold" data-unique-id="b1433a14-553f-4422-a4ca-6431796c65d4" data-file-name="components/layout/Footer.tsx">
              <span className="text-chart-1" data-unique-id="f3da7dd9-531b-4487-9d2f-0149fa3255f5" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="0cbf10b8-5740-4c12-954b-e80b5aeb61bb" data-file-name="components/layout/Footer.tsx">T</span></span><span className="editable-text" data-unique-id="31d1e32d-066a-421f-940d-2767e1e2d76f" data-file-name="components/layout/Footer.tsx">anver</span><span className="text-chart-1" data-unique-id="7f3ca00a-d73b-4b04-8e5d-3cc736a14c58" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="6a14ec02-136a-44fc-b58d-c97d7371d2f1" data-file-name="components/layout/Footer.tsx">L</span></span>
            </motion.div>
            <p className="text-muted-foreground mt-2" data-unique-id="2ba42a7a-5553-4dda-9d3b-5737fff4ad87" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="fa7d0b8f-b3ce-40cf-9666-47cd23a8a893" data-file-name="components/layout/Footer.tsx">Library and Information Science Graduate</span></p>
          </div>
          
          <div className="flex items-center space-x-4" data-unique-id="d823344e-5104-4b02-b93e-63a3e10371fa" data-file-name="components/layout/Footer.tsx">
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="mailto:lasharitanveerahmed68@gmail.com" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="Email" data-unique-id="3346f763-9745-44ac-bbe3-4e231e5a092a" data-file-name="components/layout/Footer.tsx">
              <Mail size={20} />
            </motion.a>
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="LinkedIn" data-unique-id="f170054e-73bf-4663-9419-a647578737f7" data-file-name="components/layout/Footer.tsx">
              <Linkedin size={20} />
            </motion.a>
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="GitHub" data-unique-id="472c46d0-69eb-4bdd-8203-1ec125ef7367" data-file-name="components/layout/Footer.tsx">
              <Github size={20} />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground" data-unique-id="15eb2d1a-4e31-4ef1-a854-8417536d3046" data-file-name="components/layout/Footer.tsx">
          <p className="flex items-center justify-center" data-unique-id="03e90732-f233-4c7b-af5c-5f174185aca9" data-file-name="components/layout/Footer.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="d61e5f76-a282-4134-8085-345ea1bede15" data-file-name="components/layout/Footer.tsx">
            © </span>{currentYear}<span className="editable-text" data-unique-id="8d763d14-e959-4db3-8574-c81957e79eb3" data-file-name="components/layout/Footer.tsx"> Tanveer Lashari. All rights reserved. Made with </span><Heart size={14} className="mx-1 text-chart-1" /><span className="editable-text" data-unique-id="6a0d0838-a1a8-4eb8-9a5d-0db11b984028" data-file-name="components/layout/Footer.tsx"> by Tanveer Lashari
          </span></p>
        </div>
      </div>
    </footer>;
}