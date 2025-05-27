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
  return <section id="about" className="py-24 bg-accent/30" data-unique-id="1bf549d5-2bef-42ea-8131-fbabd108a2ad" data-file-name="components/home/About.tsx">
      <div className="container mx-auto px-6" data-unique-id="13496d21-fe9c-496f-b3da-c18bce9f810f" data-file-name="components/home/About.tsx">
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
      }} className="text-center mb-16" data-unique-id="789771b7-ddbb-4d73-857a-b156d0060293" data-file-name="components/home/About.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="95498f8c-2614-4e8a-bc9f-b81970085ade" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="6ee5ef8c-e1b4-409e-820e-09125ab757ac" data-file-name="components/home/About.tsx">About Me</span></h2>
          <div className="h-1 w-20 bg-chart-1 mx-auto" data-unique-id="34e4a04c-22c7-423a-bd35-3d4cd117e1c6" data-file-name="components/home/About.tsx"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-unique-id="d811ecdc-9244-49ff-80c2-8bcce7301cad" data-file-name="components/home/About.tsx">
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
        }} data-unique-id="1a50ec1a-8d4a-4ce2-8218-e3fc4d8ff748" data-file-name="components/home/About.tsx">
            <h3 className="text-2xl font-bold mb-6 flex items-center" data-unique-id="2f9c0d1c-2622-49ac-a67c-49baca09c22f" data-file-name="components/home/About.tsx">
              <School className="mr-2 text-chart-2" size={24} /><span className="editable-text" data-unique-id="af964878-423e-473f-a23a-9345b1aebe5c" data-file-name="components/home/About.tsx">
              Academic Qualifications
            </span></h3>
            
            <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.2
          }} className="space-y-6" data-unique-id="9ab159ea-f05d-4b1e-bb45-03e4d4ac67c1" data-file-name="components/home/About.tsx">
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="b7420baf-47d6-4a34-b48c-d8dd52cdf429" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="8f5d2308-a65d-439f-84e7-0217e1dc67a3" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-1/10 p-3 rounded-full mr-4" data-unique-id="aacfdb50-988c-46cf-8a6d-ae43e9d7f273" data-file-name="components/home/About.tsx">
                    <GraduationCap className="text-chart-1" size={24} />
                  </div>
                  <div data-unique-id="2662ea99-3bbc-405d-b883-9c2f9b5833dc" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="a05342db-7aca-4c20-bba7-5077d9dceba3" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="332e9aec-c33c-4fb4-bd15-0b35f59f37c1" data-file-name="components/home/About.tsx">Bachelor of Library and Information Science and Archives Studies</span></h4>
                    <p className="text-muted-foreground" data-unique-id="1345f695-85b5-4e0d-bdd3-bcde461d8f3d" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="5388526f-34d3-43a1-9a4f-3b472369ba9c" data-file-name="components/home/About.tsx">University of Sindh</span></p>
                    <p className="text-chart-1 font-medium mt-2" data-unique-id="d4e657cb-71ae-4476-94b2-914315bde434" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="b419d9b3-2bac-4cff-8480-2f00aba82250" data-file-name="components/home/About.tsx">CGPA: 3.59</span></p>
                  </div>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="ac525ee1-5825-4d16-8b70-b46b67768f3e" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="b0d5794b-25f7-4862-a1d6-a190a20a8506" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-2/10 p-3 rounded-full mr-4" data-unique-id="28d94d99-9284-4b91-9dfe-15b0afb0dc28" data-file-name="components/home/About.tsx">
                    <BookOpen className="text-chart-2" size={24} />
                  </div>
                  <div data-unique-id="87ea0078-47f5-43e9-a7ee-aa38d20764ce" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="cfd2f2aa-a84f-4a99-b2ae-9645dfeaaaad" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="b1f629e3-a4fe-48f3-872e-16b3be2458a4" data-file-name="components/home/About.tsx">Intermediate</span></h4>
                    <p className="text-chart-2 font-medium mt-2" data-unique-id="b8446520-fc2f-4a04-9f43-755d0f9059d2" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="cb370ec1-2a11-4b83-a7f5-8f623baabf49" data-file-name="components/home/About.tsx">B Grade</span></p>
                  </div>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="7863f918-d803-4a68-b982-0527ff5884c9" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="d10e95b1-4b6d-4943-8c35-19d0cd81ef04" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-3/10 p-3 rounded-full mr-4" data-unique-id="f1239d29-57e9-4c63-a490-c7695258701a" data-file-name="components/home/About.tsx">
                    <BookOpen className="text-chart-3" size={24} />
                  </div>
                  <div data-unique-id="52cab4c6-1c64-43d9-a5eb-092fbe99830f" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="1a49f566-1ea3-42b2-b924-d227703d0598" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="8f3ac6c6-6eec-4ba9-bf81-fd98cf8cfde1" data-file-name="components/home/About.tsx">Matriculation</span></h4>
                    <p className="text-chart-3 font-medium mt-2" data-unique-id="e92b08c2-190a-451f-83fa-c1bf181886c6" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="2b6e0380-c91b-4783-8fa8-54d54f361bde" data-file-name="components/home/About.tsx">A Grade</span></p>
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
        }} data-unique-id="7a6a787f-2b4b-45e3-9471-aef64e6ffaea" data-file-name="components/home/About.tsx">
            <h3 className="text-2xl font-bold mb-6" data-unique-id="3d6d1c74-3fb8-4ba8-80c3-929a7d6ad1a7" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="e1c04cbf-bcb7-45af-a096-cc6bd10b092b" data-file-name="components/home/About.tsx">Career Objective</span></h3>
            <div className="bg-card p-8 rounded-lg shadow-md" data-unique-id="fba5df12-04f4-4600-af10-ace7eedb93a6" data-file-name="components/home/About.tsx">
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="607f6d3a-188e-4d4c-9023-1c85bdcceaef" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="33664b41-5912-4e1d-9f13-a2fdbac285ea" data-file-name="components/home/About.tsx">
                As a Library and Information Science graduate, I aim to utilize my knowledge and skills in 
                </span><span className="text-chart-1 font-medium" data-unique-id="924f5b2f-b368-4e98-a3fd-e1e2315a76f9" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="077cb34e-9443-4af0-be42-600a10510b8b" data-file-name="components/home/About.tsx"> library automation</span></span><span className="editable-text" data-unique-id="8ebce961-b7ea-42dd-a16b-1245057432d6" data-file-name="components/home/About.tsx">,
                </span><span className="text-chart-2 font-medium" data-unique-id="ac68e3c8-8646-4ecc-a289-ffdcdf6e1d0a" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="607c727c-c8bf-4649-b4c5-21469da3bcd2" data-file-name="components/home/About.tsx"> metadata and cataloging standards</span></span><span className="editable-text" data-unique-id="ef2bfce9-abc5-495b-a932-de3e35cbc5d0" data-file-name="components/home/About.tsx">, and
                </span><span className="text-chart-3 font-medium" data-unique-id="0743a22a-a51b-4cda-8b4f-d48b31e55020" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="cb62d79d-9e16-4139-a325-3d22be8d89a7" data-file-name="components/home/About.tsx"> digital archiving</span></span><span className="editable-text" data-unique-id="e1c55a58-8d00-43ca-a13c-fe74d86bfe15" data-file-name="components/home/About.tsx"> to enhance user experiences in modern library systems.
              </span></p>
              
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="66e73c30-81ba-406d-b8ea-baab3fbaf9f6" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="6a7fc600-a87d-4ae1-80ee-78f742a930cc" data-file-name="components/home/About.tsx">
                I'm passionate about bridging traditional library science with cutting-edge digital technologies to create 
                more accessible and efficient knowledge repositories.
              </span></p>
              
              <p className="text-lg leading-relaxed" data-unique-id="5af0cd84-dbfa-401a-9e4d-0933bc18cb80" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="23718cb6-57ad-4eb3-ae52-272fbe0fe8d0" data-file-name="components/home/About.tsx">
                My goal is to contribute to the evolution of library services through innovation and 
                user-centered approaches, ensuring information is organized and accessible to all who seek it.
              </span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}