'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border py-10" data-unique-id="3f12253a-cca9-461c-87ce-2d2f611e8f10" data-file-name="components/layout/Footer.tsx">
      <div className="container mx-auto px-6" data-unique-id="9fc8509f-aeec-4862-840e-fdd34090a424" data-file-name="components/layout/Footer.tsx">
        <div className="flex flex-col md:flex-row justify-between items-center" data-unique-id="805c2c4b-38fa-4ccb-a4e8-c272e54b9e8d" data-file-name="components/layout/Footer.tsx">
          <div className="mb-6 md:mb-0" data-unique-id="41c55b46-6f36-48b4-b9e6-87fcb15ee672" data-file-name="components/layout/Footer.tsx">
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.2
          }} className="text-2xl font-bold" data-unique-id="7c0bc198-2cea-4f3c-8db5-20cb559e5bda" data-file-name="components/layout/Footer.tsx">
              <span className="text-chart-1" data-unique-id="103b0d0f-16d1-4d4b-b5cb-86c6ebec1855" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="6ffd49af-ad31-4b2e-8840-2ac2ce69c156" data-file-name="components/layout/Footer.tsx">T</span></span><span className="editable-text" data-unique-id="53d135a8-f89d-47ca-8051-d881260034f2" data-file-name="components/layout/Footer.tsx">anver</span><span className="text-chart-1" data-unique-id="a66b65ad-705b-448b-a2b1-8c19bf66ea65" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="777f3f07-b4f2-4073-b2cd-93d10a4e52db" data-file-name="components/layout/Footer.tsx">L</span></span>
            </motion.div>
            <p className="text-muted-foreground mt-2" data-unique-id="2dff2fbf-d4b7-4c2d-bb20-a61fa138e61f" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="bc3f0358-49c4-4cb8-b715-a6af5b6151a6" data-file-name="components/layout/Footer.tsx">Library and Information Science Graduate</span></p>
          </div>
          
          <div className="flex items-center space-x-4" data-unique-id="546b1709-a764-498c-93e6-1e48b4a5e098" data-file-name="components/layout/Footer.tsx">
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="mailto:lasharitanveerahmed68@gmail.com" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="Email" data-unique-id="f42641d9-5bda-4c22-bceb-3e135ce29ed1" data-file-name="components/layout/Footer.tsx">
              <Mail size={20} />
            </motion.a>
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="LinkedIn" data-unique-id="e1a2342a-bc9b-42b4-95ae-cdaa9d9f00c6" data-file-name="components/layout/Footer.tsx">
              <Linkedin size={20} />
            </motion.a>
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="GitHub" data-unique-id="abde1b3d-c164-4940-bf2e-2d6f20608374" data-file-name="components/layout/Footer.tsx">
              <Github size={20} />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground" data-unique-id="00b5b9d8-a21a-449f-b7b6-6320e5435816" data-file-name="components/layout/Footer.tsx">
          <p className="flex items-center justify-center" data-unique-id="043a1213-bad2-4b1c-b2f7-35d7114369f5" data-file-name="components/layout/Footer.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="3082333e-063e-4018-9aad-40cf1d52915c" data-file-name="components/layout/Footer.tsx">
            © </span>{currentYear}<span className="editable-text" data-unique-id="74734392-6922-4927-bc8e-9b135626cfa0" data-file-name="components/layout/Footer.tsx"> Tanveer Lashari. All rights reserved. Made with </span><Heart size={14} className="mx-1 text-chart-1" /><span className="editable-text" data-unique-id="509e6736-6c3a-468f-aa06-79ae1fbe9771" data-file-name="components/layout/Footer.tsx"> by Tanveer Lashari
          </span></p>
        </div>
      </div>
    </footer>;
}