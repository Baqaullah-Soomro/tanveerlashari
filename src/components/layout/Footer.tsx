'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border py-10" data-unique-id="0373c04d-7f5d-4ab2-935c-df828a4f2230" data-file-name="components/layout/Footer.tsx">
      <div className="container mx-auto px-6" data-unique-id="48f7ca61-5436-422b-9f37-f65ee1c8538b" data-file-name="components/layout/Footer.tsx">
        <div className="flex flex-col md:flex-row justify-between items-center" data-unique-id="a05ff956-b97b-4ad3-9ce8-24bbd501d1b3" data-file-name="components/layout/Footer.tsx">
          <div className="mb-6 md:mb-0" data-unique-id="e6d6d592-cdd4-4636-b41c-217cd840943f" data-file-name="components/layout/Footer.tsx">
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.2
          }} className="text-2xl font-bold" data-unique-id="631c41d1-37e2-4299-a934-5be143220b0a" data-file-name="components/layout/Footer.tsx">
              <span className="text-chart-1" data-unique-id="a2f95089-fbb7-4065-84c2-18b599704320" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="97b5699a-f2b7-4ec1-9b81-551b974dce36" data-file-name="components/layout/Footer.tsx">T</span></span><span className="editable-text" data-unique-id="1850a784-3eac-46e1-bba3-73118bf701e2" data-file-name="components/layout/Footer.tsx">anver</span><span className="text-chart-1" data-unique-id="3b5a2c17-b256-4a67-b653-907c12ef5bf1" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="5878c3bc-667f-4612-bce8-74711a965660" data-file-name="components/layout/Footer.tsx">L</span></span>
            </motion.div>
            <p className="text-muted-foreground mt-2" data-unique-id="22cc08e1-7144-41b7-ad28-7c75cdeb97bf" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="af01cf07-9c2c-4bdd-a645-f96300e7699a" data-file-name="components/layout/Footer.tsx">Library and Information Science Graduate</span></p>
          </div>
          
          <div className="flex items-center space-x-4" data-unique-id="782a2983-5208-4464-bf8b-4a70054ba3cb" data-file-name="components/layout/Footer.tsx">
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="mailto:lasharitanveerahmed68@gmail.com" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="Email" data-unique-id="a91f657a-c139-40a9-b492-f41a19ebc208" data-file-name="components/layout/Footer.tsx">
              <Mail size={20} />
            </motion.a>
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="LinkedIn" data-unique-id="7a6030b0-deab-48ed-bd45-2affac283a58" data-file-name="components/layout/Footer.tsx">
              <Linkedin size={20} />
            </motion.a>
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="GitHub" data-unique-id="06651683-e19c-4734-a03d-8feddb42e8ef" data-file-name="components/layout/Footer.tsx">
              <Github size={20} />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground" data-unique-id="fe8f559d-264a-4a90-bff4-fa0e861fdf9d" data-file-name="components/layout/Footer.tsx">
          <p className="flex items-center justify-center" data-unique-id="adbeda85-d0eb-4927-89fa-8a1e953d8fcf" data-file-name="components/layout/Footer.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="861ce72c-71dd-42ae-92e9-3537448f2425" data-file-name="components/layout/Footer.tsx">
            © </span>{currentYear}<span className="editable-text" data-unique-id="7191b9f0-95cf-4a4e-92b9-43f29f1d1d58" data-file-name="components/layout/Footer.tsx"> Tanveer Lashari. All rights reserved. Made with </span><Heart size={14} className="mx-1 text-chart-1" /><span className="editable-text" data-unique-id="58d7936d-0995-4e4f-b778-dd72048c5e99" data-file-name="components/layout/Footer.tsx"> by Tanveer Lashari
          </span></p>
        </div>
      </div>
    </footer>;
}