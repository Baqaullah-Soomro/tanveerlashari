'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border py-10" data-unique-id="a41ae762-7523-4f4e-9dc5-ec82317c2d07" data-file-name="components/layout/Footer.tsx">
      <div className="container mx-auto px-6" data-unique-id="4b8fb67d-bfc2-4be9-82b5-3bd6bea251c0" data-file-name="components/layout/Footer.tsx">
        <div className="flex flex-col md:flex-row justify-between items-center" data-unique-id="98d2e559-5e75-4173-b55b-2cf900d22e4a" data-file-name="components/layout/Footer.tsx">
          <div className="mb-6 md:mb-0" data-unique-id="e3f8032a-41b1-4f61-b2a5-dce25e8d1a12" data-file-name="components/layout/Footer.tsx">
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.2
          }} className="text-2xl font-bold" data-unique-id="a327d183-b389-4e34-be72-721b97252558" data-file-name="components/layout/Footer.tsx">
              <span className="text-chart-1" data-unique-id="911fcf9c-63fd-44ca-96da-786cd7ce6713" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="7a62d275-2adc-4411-b3ae-05f37bcd5809" data-file-name="components/layout/Footer.tsx">T</span></span><span className="editable-text" data-unique-id="66cba3a2-98f7-4a35-a216-3918b131f92e" data-file-name="components/layout/Footer.tsx">anver</span><span className="text-chart-1" data-unique-id="a646d2bd-f35c-4e99-ae9a-0d83ae47cb24" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="15884c9e-3581-4372-ae1c-0fdce48bf491" data-file-name="components/layout/Footer.tsx">L</span></span>
            </motion.div>
            <p className="text-muted-foreground mt-2" data-unique-id="62acf9f2-d751-4539-a2fc-56d5dd72d0a1" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="19e98e09-2d59-4742-b5b1-21071d6170e5" data-file-name="components/layout/Footer.tsx">Library and Information Science Graduate</span></p>
          </div>
          
          <div className="flex items-center space-x-4" data-unique-id="2f98e25a-2664-4b90-bbb1-be66080f042a" data-file-name="components/layout/Footer.tsx">
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="mailto:lasharitanveerahmed68@gmail.com" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="Email" data-unique-id="7ab69fe4-a15e-4df2-9b71-3c113609646f" data-file-name="components/layout/Footer.tsx">
              <Mail size={20} />
            </motion.a>
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="LinkedIn" data-unique-id="b56c0398-e91b-4c0b-a092-ae6fe93ebf55" data-file-name="components/layout/Footer.tsx">
              <Linkedin size={20} />
            </motion.a>
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="GitHub" data-unique-id="1fd4b15b-0a14-4709-b6ec-f17ece440abe" data-file-name="components/layout/Footer.tsx">
              <Github size={20} />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground" data-unique-id="f5c363b0-e08c-4d9a-9fe5-0378a236b9c4" data-file-name="components/layout/Footer.tsx">
          <p className="flex items-center justify-center" data-unique-id="ea0ca2e8-68da-4cc4-b8e4-2bd58c84c9c6" data-file-name="components/layout/Footer.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="2c42072b-25eb-453f-b1e7-08252849132c" data-file-name="components/layout/Footer.tsx">
            © </span>{currentYear}<span className="editable-text" data-unique-id="055052a2-ed55-4a43-9ac6-92a615deaba2" data-file-name="components/layout/Footer.tsx"> Tanveer Lashari. All rights reserved. Made with </span><Heart size={14} className="mx-1 text-chart-1" /><span className="editable-text" data-unique-id="e1a9f6de-f342-4dce-95a6-597b7f23d429" data-file-name="components/layout/Footer.tsx"> by Tanveer Lashari
          </span></p>
        </div>
      </div>
    </footer>;
}