'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border py-10" data-unique-id="e02ed91d-da2a-4932-8c77-e22787c3f166" data-file-name="components/layout/Footer.tsx">
      <div className="container mx-auto px-6" data-unique-id="9495f87a-7e8f-48f5-8a72-bdccf8f1fa80" data-file-name="components/layout/Footer.tsx">
        <div className="flex flex-col md:flex-row justify-between items-center" data-unique-id="0b5a2c83-627f-4bd8-b96e-80488dde073a" data-file-name="components/layout/Footer.tsx">
          <div className="mb-6 md:mb-0" data-unique-id="62297b74-118c-4eef-b363-3c14a1d5e7e6" data-file-name="components/layout/Footer.tsx">
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.2
          }} className="text-2xl font-bold" data-unique-id="c116b2cf-246d-4f8b-823d-dfada1bcfdc8" data-file-name="components/layout/Footer.tsx">
              <span className="text-chart-1" data-unique-id="1390692e-6765-44ac-a456-0d055701ff6b" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="7d3f3cba-d470-4687-a903-93641e40b95b" data-file-name="components/layout/Footer.tsx">T</span></span><span className="editable-text" data-unique-id="6bb0927d-9de3-45b6-ae0c-85dc40b298c3" data-file-name="components/layout/Footer.tsx">anver</span><span className="text-chart-1" data-unique-id="1531fef3-a6f6-4a04-8189-396db02101f1" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="e0176133-22fc-4c09-88d0-5e64a6d20e1a" data-file-name="components/layout/Footer.tsx">L</span></span>
            </motion.div>
            <p className="text-muted-foreground mt-2" data-unique-id="e337b5e7-db4f-4b00-96e9-57f8a25a0a19" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="df6cecb7-b7b0-4807-874d-f9eaafbbfccd" data-file-name="components/layout/Footer.tsx">Library and Information Science Graduate</span></p>
          </div>
          
          <div className="flex items-center space-x-4" data-unique-id="84349d86-a7b3-4c1e-b2b0-3f37e6544245" data-file-name="components/layout/Footer.tsx">
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="mailto:lasharitanveerahmed68@gmail.com" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="Email" data-unique-id="be6e7f75-0390-458c-a628-4fd9d5c80fc3" data-file-name="components/layout/Footer.tsx">
              <Mail size={20} />
            </motion.a>
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="LinkedIn" data-unique-id="2c1ff479-d3fd-42ba-a4c0-b1d4883de45c" data-file-name="components/layout/Footer.tsx">
              <Linkedin size={20} />
            </motion.a>
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="GitHub" data-unique-id="7d200029-fd04-47f6-b25d-970414d3d8d6" data-file-name="components/layout/Footer.tsx">
              <Github size={20} />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground" data-unique-id="25f2a57c-44b4-4a6d-b75c-c5694c0f2bab" data-file-name="components/layout/Footer.tsx">
          <p className="flex items-center justify-center" data-unique-id="ab8f447e-4f74-4e82-b4c1-4b0fcb18f5c0" data-file-name="components/layout/Footer.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="08641574-2e4d-4e7d-abf4-5ec9090bec65" data-file-name="components/layout/Footer.tsx">
            © </span>{currentYear}<span className="editable-text" data-unique-id="54f86e04-1c2b-4544-a9dd-66fdbc353b4f" data-file-name="components/layout/Footer.tsx"> Tanveer Lashari. All rights reserved. Made with </span><Heart size={14} className="mx-1 text-chart-1" /><span className="editable-text" data-unique-id="771b5cc6-bb42-4a26-b00f-de19966bc865" data-file-name="components/layout/Footer.tsx"> by Tanveer Lashari
          </span></p>
        </div>
      </div>
    </footer>;
}