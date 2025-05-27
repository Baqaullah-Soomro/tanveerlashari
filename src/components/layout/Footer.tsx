'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border py-10" data-unique-id="f95951df-37ac-4b55-b135-eb5e4b18a37c" data-file-name="components/layout/Footer.tsx">
      <div className="container mx-auto px-6" data-unique-id="58393987-e950-4b9b-93ce-432451021c68" data-file-name="components/layout/Footer.tsx">
        <div className="flex flex-col md:flex-row justify-between items-center" data-unique-id="6c667c48-9646-46e1-a18c-87df9f8dc01d" data-file-name="components/layout/Footer.tsx">
          <div className="mb-6 md:mb-0" data-unique-id="1a961fcd-cb43-40d5-b793-d5353fd51744" data-file-name="components/layout/Footer.tsx">
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.2
          }} className="text-2xl font-bold" data-unique-id="3426518b-0361-49a3-bc1a-0e82e8283371" data-file-name="components/layout/Footer.tsx">
              <span className="text-chart-1" data-unique-id="9d905f06-a8d2-4070-93b2-99028da6d238" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="3e998b34-e016-4bed-97ea-6c336ccacd41" data-file-name="components/layout/Footer.tsx">T</span></span><span className="editable-text" data-unique-id="afd0de0d-61e0-4280-bd0a-303b1c5f3bf2" data-file-name="components/layout/Footer.tsx">anver</span><span className="text-chart-1" data-unique-id="1eff6888-b9ac-43ec-bb3f-3543cdfc6eff" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="d21af5c7-8f1d-4326-b78b-fbe5c4637d0d" data-file-name="components/layout/Footer.tsx">L</span></span>
            </motion.div>
            <p className="text-muted-foreground mt-2" data-unique-id="24280609-fa22-4eab-a5ca-9b9aac3951e2" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="c4c94786-b16f-4dd1-a711-4033412152eb" data-file-name="components/layout/Footer.tsx">Library and Information Science Graduate</span></p>
          </div>
          
          <div className="flex items-center space-x-4" data-unique-id="fda01f8e-e38a-4e46-9993-a275ca940db0" data-file-name="components/layout/Footer.tsx">
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="mailto:lasharitanveerahmed68@gmail.com" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="Email" data-unique-id="f85f820a-fa16-42fc-a67c-ddb89e933fff" data-file-name="components/layout/Footer.tsx">
              <Mail size={20} />
            </motion.a>
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="LinkedIn" data-unique-id="fc3f468a-9de2-471a-a536-8bdb6b8c7c8b" data-file-name="components/layout/Footer.tsx">
              <Linkedin size={20} />
            </motion.a>
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="GitHub" data-unique-id="7bb0f349-0612-405d-b3bf-6fa77cb868a6" data-file-name="components/layout/Footer.tsx">
              <Github size={20} />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground" data-unique-id="7bd457b2-22d6-40d3-bb52-1cd92d84a5d5" data-file-name="components/layout/Footer.tsx">
          <p className="flex items-center justify-center" data-unique-id="ed1e8441-a5e9-4421-8a65-4d70450eee4c" data-file-name="components/layout/Footer.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="961a30a8-a8c0-4675-a7e5-329630841cad" data-file-name="components/layout/Footer.tsx">
            © </span>{currentYear}<span className="editable-text" data-unique-id="b7a12a46-4787-4918-81b4-bf6290dc758c" data-file-name="components/layout/Footer.tsx"> Tanveer Lashari. All rights reserved. Made with </span><Heart size={14} className="mx-1 text-chart-1" /><span className="editable-text" data-unique-id="69343a60-69be-40da-9e02-3e5bfaabacb4" data-file-name="components/layout/Footer.tsx"> by Tanveer Lashari
          </span></p>
        </div>
      </div>
    </footer>;
}