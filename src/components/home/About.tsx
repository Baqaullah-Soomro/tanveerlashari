'use client';

import { motion } from 'framer-motion';
import { School, GraduationCap, BookOpen } from 'lucide-react';
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0
  }
};
export default function About() {
  return <section id="about" className="py-24 bg-accent/30" data-unique-id="dd109e2b-d746-4901-af21-0a014197a88b" data-file-name="components/home/About.tsx">
      <div className="container mx-auto px-6" data-unique-id="105f30bb-1633-4e06-8a79-a51438ac4005" data-file-name="components/home/About.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.2
      }} transition={{
        duration: 0.5
      }} className="text-center mb-16" data-unique-id="4d15a835-e613-4085-9e32-e2a1c29a3d67" data-file-name="components/home/About.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="164a8176-e331-4d7d-8355-2d50b58c81cb" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="a5cf243e-5b42-45d8-ac6c-2f475d63c7c4" data-file-name="components/home/About.tsx">About Me</span></h2>
          <div className="h-1 w-20 bg-chart-1 mx-auto" data-unique-id="aa54f1d0-7e29-4cd5-b5d8-428e3b41e981" data-file-name="components/home/About.tsx"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-unique-id="56bed9a8-7cfb-4b43-9b09-b41d52ff2723" data-file-name="components/home/About.tsx">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          amount: 0.2
        }} transition={{
          duration: 0.5
        }} data-unique-id="a71717ee-70ae-4141-823a-e98ab4fb8697" data-file-name="components/home/About.tsx">
            <h3 className="text-2xl font-bold mb-6 flex items-center" data-unique-id="f784b181-a4a8-4b7f-851c-a5875e5fd06a" data-file-name="components/home/About.tsx">
              <School className="mr-2 text-chart-2" size={24} /><span className="editable-text" data-unique-id="130e65cf-8ad9-475e-bea9-ae84cbe82644" data-file-name="components/home/About.tsx">
              Academic Qualifications
            </span></h3>
            
            <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.2
          }} className="space-y-6" data-unique-id="d44631fe-bffe-45f0-814d-5d681368dce1" data-file-name="components/home/About.tsx">
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="3fb17c1b-2bef-438b-ba79-ae97e4ca2c24" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="98adcfa3-5824-40df-b629-7aa98f01dfef" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-1/10 p-3 rounded-full mr-4" data-unique-id="67ba9689-6a23-4f8d-b2b3-7b1f56bc2857" data-file-name="components/home/About.tsx">
                    <GraduationCap className="text-chart-1" size={24} />
                  </div>
                  <div data-unique-id="97eb5ab2-8f81-4f6d-b13e-fba63ec434ad" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="5130472d-735f-4459-945c-fb88576bb0fd" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="6d87ae6f-b27b-4883-b545-112e90ee07d9" data-file-name="components/home/About.tsx">Bachelor of Library and Information Science and Archives Studies</span></h4>
                    <p className="text-muted-foreground" data-unique-id="c0db0c8f-b615-4390-87d6-8925c8613db5" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="d2899c40-3cea-4e6d-98e1-338123f0ad19" data-file-name="components/home/About.tsx">University of Sindh (2020-2023)</span></p>
                    <p className="text-chart-1 font-medium mt-2" data-unique-id="665ae05d-3c9a-4e30-8656-545a0ac4bf5c" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="7710b187-37c4-4b8e-b6a7-b6c87e66db31" data-file-name="components/home/About.tsx">1st Division (CGPA: 3.59)</span></p>
                  </div>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="1457951e-da9a-46a1-8744-d57b4b5bbebf" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="d0b9b89a-e12c-4868-844b-b8906b4ce542" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-2/10 p-3 rounded-full mr-4" data-unique-id="3589cd1f-e2e6-45df-a760-4db502a1e08c" data-file-name="components/home/About.tsx">
                    <BookOpen className="text-chart-2" size={24} />
                  </div>
                  <div data-unique-id="f1e83e44-e0b4-42f0-ab45-b187d883e187" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="6bb54991-6dd5-4e8d-b425-d8ecc94fa2fa" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="bcd1d239-e5d4-4e44-9d0b-112ac99be534" data-file-name="components/home/About.tsx">Intermediate</span></h4>
                    <p className="text-muted-foreground" data-unique-id="f5664f52-f617-4061-80b9-e9f11858fa3d" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="17242b5c-1ce4-4be2-ba22-1e34e0919442" data-file-name="components/home/About.tsx">Hyderabad Board (2016-2018)</span></p>
                    <p className="text-chart-2 font-medium mt-2" data-unique-id="85316cb2-6b89-4fe6-a5fd-e4f661ed7565" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="9cc6c827-e815-425e-a571-de772529ad68" data-file-name="components/home/About.tsx">B Grade</span></p>
                  </div>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="b1665d68-65c4-4b8a-9530-ce52bad38cad" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="cc4f5622-234e-4198-ac2d-0ee15380cf2b" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-3/10 p-3 rounded-full mr-4" data-unique-id="5be509e0-fa6c-4c0e-abde-10bf9ff64496" data-file-name="components/home/About.tsx">
                    <BookOpen className="text-chart-3" size={24} />
                  </div>
                  <div data-unique-id="59b27fc8-2fab-4dd9-a2ed-0aca19dc9c85" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="2e6b3578-8a0a-4ca4-ba53-e9f0e5edaaf2" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="ebf061ee-3f73-46e7-bdd7-68bd51fe11d9" data-file-name="components/home/About.tsx">Matriculation</span></h4>
                    <p className="text-muted-foreground" data-unique-id="a3f8601d-b519-481e-88a8-e0f56c3e3fe1" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="d451e554-f80e-4a32-a988-c2cb52eba1b3" data-file-name="components/home/About.tsx">Hyderabad Board</span></p>
                    <p className="text-chart-3 font-medium mt-2" data-unique-id="3dc303a1-dc2e-46c2-bbcc-9a4470d271dd" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="4708e938-198c-46aa-b04d-f8f15472b457" data-file-name="components/home/About.tsx">A Grade</span></p>
                  </div>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          amount: 0.2
        }} transition={{
          duration: 0.5
        }} data-unique-id="e858c10f-c99c-4d76-ae6f-e3f0e3ba51aa" data-file-name="components/home/About.tsx">
            <h3 className="text-2xl font-bold mb-6" data-unique-id="499051c2-f5ee-4048-97a3-284183fe8e42" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="a61c1700-7bf9-45d9-ad9f-bef118c60d90" data-file-name="components/home/About.tsx">Career Objective</span></h3>
            <div className="bg-card p-8 rounded-lg shadow-md" data-unique-id="3f8f6efc-312e-4140-90b4-58da2ae213b2" data-file-name="components/home/About.tsx">
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="b60e0bc6-334f-4536-87dc-3800237704b4" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="c605f4c3-630c-4a10-8e3f-d359af4cd2c2" data-file-name="components/home/About.tsx">
                Enthusiastic and detail-oriented Library Science graduate with a solid academic foundation and hands-on experience in 
                </span><span className="text-chart-1 font-medium" data-unique-id="ca5c4766-ca37-4fc4-b9d9-5dcbf607fc45" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="b4e4716e-2b7e-4e5d-a42a-43b4e26ca349" data-file-name="components/home/About.tsx"> cataloging</span></span><span className="editable-text" data-unique-id="f3aeb291-2ae6-4135-80b2-4e66031776e3" data-file-name="components/home/About.tsx">, 
                </span><span className="text-chart-2 font-medium" data-unique-id="3be04500-e665-4d14-b322-62383657f03a" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="81dd1041-3c9d-450f-b79c-0069c62fa986" data-file-name="components/home/About.tsx"> information retrieval</span></span><span className="editable-text" data-unique-id="05fb5b40-ab90-41d8-b52d-85cdb38fdd88" data-file-name="components/home/About.tsx">, and 
                </span><span className="text-chart-3 font-medium" data-unique-id="b8bab69c-0549-4a07-9adb-22cd8492dd76" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="ded22b3b-d665-485f-ac71-f1d16aa4b578" data-file-name="components/home/About.tsx"> library operations</span></span><span className="editable-text" data-unique-id="9a2c397d-ab70-41b9-8c60-3d88d3fa4138" data-file-name="components/home/About.tsx">.
              </span></p>
              
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="144eedd8-b56e-4f2b-81a5-ec7bec2ed5df" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="c64dbdc6-7c17-4607-ac6d-99a2f94d32aa" data-file-name="components/home/About.tsx">
                Eager to leverage acquired knowledge and skills to contribute effectively to a dynamic library environment. 
                Seeking an opportunity to apply expertise in cataloging standards, digital libraries, and reference services.
              </span></p>
              
              <p className="text-lg leading-relaxed" data-unique-id="d86495b7-0226-4eae-9196-9c26e0f84579" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="07a4e362-66b4-4ced-9f1a-5776530f7aee" data-file-name="components/home/About.tsx">
                My goal is to support patrons and enhance information access within a progressive library setting through innovation and 
                user-centered approaches, ensuring information is organized and accessible to all who seek it.
              </span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}