'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border py-10" data-unique-id="e091db25-7260-4e96-a1d4-f14414880182" data-file-name="components/layout/Footer.tsx">
      <div className="container mx-auto px-6" data-unique-id="30b4aea3-1137-4e53-94c9-766b8f5d92e1" data-file-name="components/layout/Footer.tsx">
        <div className="flex flex-col md:flex-row justify-between items-center" data-unique-id="3e90b726-2d27-4285-b13d-53daf695af82" data-file-name="components/layout/Footer.tsx">
          <div className="mb-6 md:mb-0" data-unique-id="1cdb2261-5094-4108-8c27-418e27f5f093" data-file-name="components/layout/Footer.tsx">
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.2
          }} className="text-2xl font-bold" data-unique-id="b0f0dfed-9c7e-48fd-abd2-911302d463c1" data-file-name="components/layout/Footer.tsx">
              <span className="text-chart-1" data-unique-id="0bee4d76-8fe8-497b-9ce5-026aa6bd5217" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="05b4752e-3ffc-4aeb-83da-79a22e658f6e" data-file-name="components/layout/Footer.tsx">T</span></span><span className="editable-text" data-unique-id="fe45cc09-75e1-44ce-96c1-46fa529547ea" data-file-name="components/layout/Footer.tsx">anver</span><span className="text-chart-1" data-unique-id="ea85ac54-ee58-4eb9-800b-6d2077ffe47b" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="6e1b98b4-4917-4363-b9d6-cd843d8ff3dc" data-file-name="components/layout/Footer.tsx">L</span></span>
            </motion.div>
            <p className="text-muted-foreground mt-2" data-unique-id="28bcb24a-87da-4ec1-9006-b3b1392a0567" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="db815e91-4bf0-4bf5-ad9f-70b604ea68d0" data-file-name="components/layout/Footer.tsx">Library and Information Science Graduate</span></p>
          </div>
          
          <div className="flex items-center space-x-4" data-unique-id="a150faeb-5d1b-4c29-8314-e7a50d1eb6dd" data-file-name="components/layout/Footer.tsx">
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="mailto:lasharitanveerahmed68@gmail.com" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="Email" data-unique-id="0f2e2ab8-c63c-4ee3-9193-e97c04f85334" data-file-name="components/layout/Footer.tsx">
              <Mail size={20} />
            </motion.a>
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="LinkedIn" data-unique-id="25070dbf-61b6-4915-bfbe-5fc468d00aa9" data-file-name="components/layout/Footer.tsx">
              <Linkedin size={20} />
            </motion.a>
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="GitHub" data-unique-id="651fa49f-5e44-43fe-83f6-cb740d8bea4c" data-file-name="components/layout/Footer.tsx">
              <Github size={20} />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground" data-unique-id="07ebb647-fbea-456c-acd1-587db689bdcb" data-file-name="components/layout/Footer.tsx">
          <p className="flex items-center justify-center" data-unique-id="9dee45c7-9405-4c97-b977-1e96402e17ac" data-file-name="components/layout/Footer.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="0e6a68fb-d294-48ca-b195-778b4f1c7551" data-file-name="components/layout/Footer.tsx">
            © </span>{currentYear}<span className="editable-text" data-unique-id="65321e11-b3f8-4bbb-adea-bf6e1356afc9" data-file-name="components/layout/Footer.tsx"> Tanveer Lashari. All rights reserved. Made with </span><Heart size={14} className="mx-1 text-chart-1" /><span className="editable-text" data-unique-id="a85df6d8-3891-46ae-b307-f78d8e5feecc" data-file-name="components/layout/Footer.tsx"> by Tanveer Lashari
          </span></p>
        </div>
      </div>
    </footer>;
}