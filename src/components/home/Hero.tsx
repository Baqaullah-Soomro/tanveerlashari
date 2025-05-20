'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Briefcase } from 'lucide-react';
export default function Hero() {
  return <section id="home" className="relative h-screen flex items-center" data-unique-id="173b4e2e-8f87-4d3b-99cf-eaa650c22054" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
      {/* Background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden" data-unique-id="e1ad44f6-be59-44cd-9000-61af2afd2d79" data-file-name="components/home/Hero.tsx">
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 0.05,
        scale: 1
      }} transition={{
        duration: 1.5
      }} className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-chart-1" data-unique-id="1cdfda51-d33d-48e5-ac7f-214aca49953b" data-file-name="components/home/Hero.tsx" />
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 0.05,
        scale: 1
      }} transition={{
        duration: 1.5,
        delay: 0.2
      }} className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-chart-2" data-unique-id="1fdd1f40-0a36-42f8-a167-656d88abf7bb" data-file-name="components/home/Hero.tsx" />
      </div>

      <div className="container mx-auto px-6" data-unique-id="96429081-37a2-4b12-8713-f3cd0e8407ca" data-file-name="components/home/Hero.tsx">
        <div className="max-w-3xl" data-unique-id="aa478f86-0268-49bf-9bd0-b3d3c9cbb1df" data-file-name="components/home/Hero.tsx">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} data-unique-id="033807de-d4ca-4e58-ace5-6e7f4d33e3a4" data-file-name="components/home/Hero.tsx">
            <h2 className="text-lg font-medium text-chart-1 mb-2" data-unique-id="62fa2ac7-1a7f-40da-8d64-06bff3e26255" data-file-name="components/home/Hero.tsx"><span className="editable-text" data-unique-id="9600c3e8-ee57-401a-8151-979400fc6bd6" data-file-name="components/home/Hero.tsx">Hello, I'm</span></h2>
          </motion.div>
          
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4" data-unique-id="c17e1145-d28a-465c-9ee7-46a200cf7b5e" data-file-name="components/home/Hero.tsx"><span className="editable-text" data-unique-id="1d0c1803-6eed-499d-a024-39a7cbcc8ec9" data-file-name="components/home/Hero.tsx">
            Tanveer Lashari
          </span></motion.h1>
          
          <motion.h3 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} className="text-2xl sm:text-3xl font-medium text-muted-foreground mb-8" data-unique-id="1f53a240-9557-48b9-883b-35f5b4fe31f5" data-file-name="components/home/Hero.tsx"><span className="editable-text" data-unique-id="94578871-646e-48c5-a2bd-d9b672510496" data-file-name="components/home/Hero.tsx">
            Library and Information Science Graduate
          </span></motion.h3>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} className="text-lg text-muted-foreground mb-10 max-w-2xl" data-unique-id="1ba802e0-9cd4-45e8-b364-172729e68335" data-file-name="components/home/Hero.tsx"><span className="editable-text" data-unique-id="391fcb71-c0ed-474e-980b-c03dea1931d5" data-file-name="components/home/Hero.tsx">
            Passionate about library sciences, cataloging, digital library systems, and knowledge organization.
            Experienced in modern library management systems and dedicated to enhancing user services.
          </span></motion.p>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.5
        }} className="flex flex-wrap gap-4" data-unique-id="70e8d7ea-5616-4d64-a70b-5749e5101e82" data-file-name="components/home/Hero.tsx">
            <a href="#contact" className="flex items-center gap-2 bg-chart-1 hover:bg-chart-1/90 text-white px-6 py-3 rounded-lg transition-all" onClick={e => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({
              behavior: 'smooth'
            });
          }} data-unique-id="8a10f1df-74be-4eca-9356-d8e4fe1c52a4" data-file-name="components/home/Hero.tsx">
              <Mail size={18} /><span className="editable-text" data-unique-id="8c708b16-71c1-41d5-a896-1c4d208d7672" data-file-name="components/home/Hero.tsx"> Contact Me
            </span></a>
            <a href="#" className="flex items-center gap-2 bg-chart-2 hover:bg-chart-2/90 text-white px-6 py-3 rounded-lg transition-all" data-unique-id="c4e56845-dd01-4b75-aefa-e0834028881b" data-file-name="components/home/Hero.tsx">
              <Download size={18} /><span className="editable-text" data-unique-id="28cb301c-e7ce-4746-ba59-d4f7ce2f83e6" data-file-name="components/home/Hero.tsx"> Download Resume
            </span></a>
            <a href="#experience" className="flex items-center gap-2 bg-chart-3 hover:bg-chart-3/90 text-white px-6 py-3 rounded-lg transition-all" onClick={e => {
            e.preventDefault();
            document.querySelector('#experience')?.scrollIntoView({
              behavior: 'smooth'
            });
          }} data-unique-id="4751c758-b489-4615-af4e-1eb58e973528" data-file-name="components/home/Hero.tsx">
              <Briefcase size={18} /><span className="editable-text" data-unique-id="f566812f-0220-48ff-aa3a-2136f9cbf5d9" data-file-name="components/home/Hero.tsx"> Hire Me
            </span></a>
          </motion.div>
        </div>
      </div>
      
      <motion.div initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: [0, 10, 0]
    }} transition={{
      opacity: {
        delay: 1,
        duration: 0.5
      },
      y: {
        delay: 1,
        duration: 2,
        repeat: Infinity
      }
    }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2" data-unique-id="83491be1-f6a5-4d54-901f-ea58f0d8d6b4" data-file-name="components/home/Hero.tsx">
        <ArrowDown className="text-muted-foreground" />
      </motion.div>
    </section>;
}