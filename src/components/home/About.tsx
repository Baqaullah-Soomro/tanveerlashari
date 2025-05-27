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
  return <section id="about" className="py-24 bg-accent/30" data-unique-id="b3c80f52-d221-478b-9473-ba007548a92f" data-file-name="components/home/About.tsx">
      <div className="container mx-auto px-6" data-unique-id="4f7bc36b-4a2b-4027-985e-05b4ab2f30ca" data-file-name="components/home/About.tsx">
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
      }} className="text-center mb-16" data-unique-id="cc3901ee-72f9-4c3e-9c73-52b25f1bdca3" data-file-name="components/home/About.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="20aff148-3000-49ae-89e5-2f59a6ff88d1" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="b888fe57-4a21-46a3-be51-00bbdca7a968" data-file-name="components/home/About.tsx">About Me</span></h2>
          <div className="h-1 w-20 bg-chart-1 mx-auto" data-unique-id="cb170e87-7728-4e94-837d-18e57cd863b9" data-file-name="components/home/About.tsx"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-unique-id="4b526c36-f37b-4b09-96a6-0dd4d0b24f08" data-file-name="components/home/About.tsx">
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
        }} data-unique-id="bf230442-fb21-4d2a-8784-f408a5306a91" data-file-name="components/home/About.tsx">
            <h3 className="text-2xl font-bold mb-6 flex items-center" data-unique-id="c39ffb43-6471-4297-a632-4bc43a1537dd" data-file-name="components/home/About.tsx">
              <School className="mr-2 text-chart-2" size={24} /><span className="editable-text" data-unique-id="3622fcc9-a8ab-4469-95e5-47e01b9e0626" data-file-name="components/home/About.tsx">
              Academic Qualifications
            </span></h3>
            
            <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.2
          }} className="space-y-6" data-unique-id="b46f3b88-a6ce-4cce-b00e-065b96e37c6e" data-file-name="components/home/About.tsx">
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="453ab55a-cf0c-4450-9f17-1108b2382737" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="97f532ed-57f6-4a5c-b687-50529b058589" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-1/10 p-3 rounded-full mr-4" data-unique-id="a0b04533-6574-4ea3-bb21-40cee77196d9" data-file-name="components/home/About.tsx">
                    <GraduationCap className="text-chart-1" size={24} />
                  </div>
                  <div data-unique-id="22a58667-1aa3-4a01-80da-1ee4de1b46e1" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="34f1051d-1a40-4472-add9-7c6b65e153e6" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="5eeb531a-3eb9-4b98-8860-64b882e7025e" data-file-name="components/home/About.tsx">Bachelor of Library and Information Science and Archives Studies</span></h4>
                    <p className="text-muted-foreground" data-unique-id="ebd307ed-bc00-4f8b-9ce3-bbbf45ba4929" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="6205a0a6-124e-4230-8cef-cbdcb9f68b14" data-file-name="components/home/About.tsx">University of Sindh (2020-2023)</span></p>
                    <p className="text-chart-1 font-medium mt-2" data-unique-id="8dd64f06-7af5-43da-b6b6-d1b344eabfb3" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="e8d5d285-f71a-47e7-b7ee-16c680e59046" data-file-name="components/home/About.tsx">1st Division (CGPA: 3.59)</span></p>
                  </div>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="89cd4da9-6282-4294-9d83-4ad461d8a262" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="abb3f811-aa1c-4658-aae9-f8d802de5f92" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-2/10 p-3 rounded-full mr-4" data-unique-id="39fc2d1f-4c78-480d-9490-ee5826f132e2" data-file-name="components/home/About.tsx">
                    <BookOpen className="text-chart-2" size={24} />
                  </div>
                  <div data-unique-id="b0659703-df7e-452d-a855-326160b67dd1" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="14a5bc19-d3b5-4f26-b703-206d1c675752" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="094ba811-b280-455e-9235-c297f5c918c6" data-file-name="components/home/About.tsx">Intermediate</span></h4>
                    <p className="text-muted-foreground" data-unique-id="6cdf3f95-6fa1-4308-bf38-2ae8b185a4f9" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="5331db8f-c1f4-434a-892a-f54fa64363c4" data-file-name="components/home/About.tsx">Hyderabad Board (2016-2018)</span></p>
                    <p className="text-chart-2 font-medium mt-2" data-unique-id="e1673a43-7a02-49d5-8924-5e6cf64c5c3c" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="d96e23a1-f193-4fa0-a8b8-debd74fd1631" data-file-name="components/home/About.tsx">B Grade</span></p>
                  </div>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="27ca9cd0-2207-46e0-9c33-2b53df87826e" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="eb68232d-cb63-4aa2-97d2-ac5c87f3b042" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-3/10 p-3 rounded-full mr-4" data-unique-id="0d5c2959-3c96-4eac-935d-171853f7fe79" data-file-name="components/home/About.tsx">
                    <BookOpen className="text-chart-3" size={24} />
                  </div>
                  <div data-unique-id="c2e294d0-5d47-4f4b-a634-a549e1c5fda1" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="baf57fd9-c9ad-4bfe-ac18-9aa78a2dada9" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="7f0e006e-791d-4bf4-b764-a27b12ef85b2" data-file-name="components/home/About.tsx">Matriculation</span></h4>
                    <p className="text-muted-foreground" data-unique-id="74487a25-f0b4-4030-88b8-4f13c61a40c6" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="820ba6dd-cab1-435b-a1da-1cec4675b736" data-file-name="components/home/About.tsx">Hyderabad Board</span></p>
                    <p className="text-chart-3 font-medium mt-2" data-unique-id="0b1e64b1-2ff6-415c-8c05-0f3ef37476dc" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="54bafddf-b137-4bd9-9d34-7404ebe50c46" data-file-name="components/home/About.tsx">A Grade</span></p>
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
        }} data-unique-id="14dfe29d-53d8-4bfb-b4b7-bb4282651ee8" data-file-name="components/home/About.tsx">
            <h3 className="text-2xl font-bold mb-6" data-unique-id="1846190f-1f28-415a-b078-7301b174d9ec" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="b658f306-0bb3-4949-bfcc-899ebc06c654" data-file-name="components/home/About.tsx">Career Objective</span></h3>
            <div className="bg-card p-8 rounded-lg shadow-md" data-unique-id="28ed85d1-ed28-4697-bb3c-9bc5e27a5f9d" data-file-name="components/home/About.tsx">
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="2c1e06ad-73c0-4317-ad0b-331e0b227171" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="fbcddbd3-0deb-4a2a-9267-e26c70741aa4" data-file-name="components/home/About.tsx">
                Enthusiastic and detail-oriented Library Science graduate with a solid academic foundation and hands-on experience in 
                </span><span className="text-chart-1 font-medium" data-unique-id="4e537481-3498-405d-9ecb-c51487916fe9" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="87f7e45c-2096-45b8-af4e-2c9a8381c97c" data-file-name="components/home/About.tsx"> cataloging</span></span><span className="editable-text" data-unique-id="6816b8b1-6da5-4550-bc48-71cec252adab" data-file-name="components/home/About.tsx">, 
                </span><span className="text-chart-2 font-medium" data-unique-id="0d2f9b49-4a78-4cc1-8c30-299720cb8b0f" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="f1ce909a-419e-437a-a56e-35657a5332d4" data-file-name="components/home/About.tsx"> information retrieval</span></span><span className="editable-text" data-unique-id="ae9dd8ae-cfa6-4c3f-86b4-b8bee329287a" data-file-name="components/home/About.tsx">, and 
                </span><span className="text-chart-3 font-medium" data-unique-id="5be3209b-8e85-45db-b698-e215897c2ab9" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="4c1c67f7-3dc6-4fef-8d09-55ae43b10be0" data-file-name="components/home/About.tsx"> library operations</span></span><span className="editable-text" data-unique-id="8dce7de4-4f7f-4c8a-8dda-7c1d21c7b154" data-file-name="components/home/About.tsx">.
              </span></p>
              
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="2941bbb5-ab11-48dc-b16c-4d66ca1f9e58" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="8f9f4add-9986-45d7-82ca-352e85b4efa4" data-file-name="components/home/About.tsx">
                With excellent academic performance (3.59 CGPA) and three internships in university libraries, I bring practical expertise in 
                </span><span className="text-chart-1 font-medium" data-unique-id="cff0c9a7-df56-4720-aac8-c96775eeeaac" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="f8c460cb-1609-4ff4-83c5-3b7c1b3c4202" data-file-name="components/home/About.tsx"> Koha Library Management System</span></span><span className="editable-text" data-unique-id="7bf5613c-d693-47fd-a521-21243d4e3fa0" data-file-name="components/home/About.tsx"> and
                </span><span className="text-chart-2 font-medium" data-unique-id="a79a050e-ff6d-40f1-a456-413e860852f9" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="e9ef1ed1-866e-490f-abdc-bedb76c6faf4" data-file-name="components/home/About.tsx"> digital library technologies</span></span><span className="editable-text" data-unique-id="38eeb4db-c54b-478d-a141-5146dafb4a6a" data-file-name="components/home/About.tsx">.
              </span></p>
              
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="2e5d3f92-e7c5-43c9-85e9-1bb95bd21ca0" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="a52a89e1-55b8-482a-968d-d9966c2ce4b5" data-file-name="components/home/About.tsx">
                I have demonstrated success in library automation projects, cataloging systems implementation, and staff training. My trilingual proficiency enables me to serve diverse user communities effectively.
              </span></p>
              
              <p className="text-lg leading-relaxed" data-unique-id="0d16a732-4a37-4a19-b61d-16250359bef8" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="67956fc6-8d2b-4361-b48a-c6980a651ff5" data-file-name="components/home/About.tsx">
                My vision is to create modern, user-centered library environments where information is easily accessible, well-organized, and leverages the latest technology to enhance learning and research experiences.
              </span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}