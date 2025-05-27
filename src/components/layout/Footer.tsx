'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border py-10" data-unique-id="a4f3f6d8-d0c4-4f1c-822b-c6ed8bf499f2" data-file-name="components/layout/Footer.tsx">
      <div className="container mx-auto px-6" data-unique-id="a6591de8-d48a-4425-962a-a5d44be54981" data-file-name="components/layout/Footer.tsx">
        <div className="flex flex-col md:flex-row justify-between items-center" data-unique-id="f4867381-df65-46a4-92ef-503e4c196046" data-file-name="components/layout/Footer.tsx">
          <div className="mb-6 md:mb-0" data-unique-id="95363069-0c30-487b-941f-fc282db07113" data-file-name="components/layout/Footer.tsx">
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.2
          }} className="text-2xl font-bold" data-unique-id="9f53da4a-3ee8-41a1-90ce-8d61db4703cc" data-file-name="components/layout/Footer.tsx">
              <span className="text-chart-1" data-unique-id="b13e5e9b-23b1-4493-b61f-8a23cd1ded4f" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="e42a788d-50c0-45a0-acd6-9738f8f7c4d3" data-file-name="components/layout/Footer.tsx">T</span></span><span className="editable-text" data-unique-id="7aaff6b3-9620-4809-bae4-d61b73a92645" data-file-name="components/layout/Footer.tsx">anver</span><span className="text-chart-1" data-unique-id="c1b1c436-563a-4336-854f-b4ab6d4ce455" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="8f61d74f-9333-42ef-8bd2-74a90874997e" data-file-name="components/layout/Footer.tsx">L</span></span>
            </motion.div>
            <p className="text-muted-foreground mt-2" data-unique-id="b63e8704-65ec-4564-a4b2-bcd0dbc6b406" data-file-name="components/layout/Footer.tsx"><span className="editable-text" data-unique-id="59d21a04-fd09-451e-bbd5-98832be10f5e" data-file-name="components/layout/Footer.tsx">Library and Information Science Graduate</span></p>
          </div>
          
          <div className="flex items-center space-x-4" data-unique-id="61ff14a6-7141-4fa1-ab6c-bc67a60a4115" data-file-name="components/layout/Footer.tsx">
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="mailto:lasharitanveerahmed68@gmail.com" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="Email" data-unique-id="b515c8f7-6961-4610-90a3-3b8aca4f05a5" data-file-name="components/layout/Footer.tsx">
              <Mail size={20} />
            </motion.a>
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="LinkedIn" data-unique-id="635bafa9-e3f3-40ee-a620-bd13182e6fd1" data-file-name="components/layout/Footer.tsx">
              <Linkedin size={20} />
            </motion.a>
            <motion.a whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors" aria-label="GitHub" data-unique-id="a960cfa1-74fa-42a5-b925-2dce9385da8a" data-file-name="components/layout/Footer.tsx">
              <Github size={20} />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground" data-unique-id="6986da5b-7a61-4db0-aa87-06359ab45ff0" data-file-name="components/layout/Footer.tsx">
          <p className="flex items-center justify-center" data-unique-id="59cd5ab9-e4a0-4717-9b2e-f51ac5464b37" data-file-name="components/layout/Footer.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="807bef96-08eb-4d37-9612-a4daf698a257" data-file-name="components/layout/Footer.tsx">
            © </span>{currentYear}<span className="editable-text" data-unique-id="b060d2d5-a371-431e-8c2f-6ca2a72f02ef" data-file-name="components/layout/Footer.tsx"> Tanveer Lashari. All rights reserved. Made with </span><Heart size={14} className="mx-1 text-chart-1" /><span className="editable-text" data-unique-id="74f420a9-454a-4505-92a4-60c87fa712c8" data-file-name="components/layout/Footer.tsx"> by Tanveer Lashari
          </span></p>
        </div>
      </div>
    </footer>;
}