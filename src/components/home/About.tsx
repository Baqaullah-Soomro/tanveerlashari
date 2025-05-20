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
  return <section id="about" className="py-24 bg-accent/30" data-unique-id="9ac3a20e-a0be-46d5-9f22-eef976d117bf" data-file-name="components/home/About.tsx">
      <div className="container mx-auto px-6" data-unique-id="b3bfc65c-9491-4c26-b8be-5a4c3f61530b" data-file-name="components/home/About.tsx">
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
      }} className="text-center mb-16" data-unique-id="580e9454-bdf2-4600-aa8d-e22e009b5323" data-file-name="components/home/About.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="92690975-6838-497b-be43-65229fb2d205" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="b63b6cdc-4f05-4d6c-b53e-0400eafaafaf" data-file-name="components/home/About.tsx">About Me</span></h2>
          <div className="h-1 w-20 bg-chart-1 mx-auto" data-unique-id="9b1d7e93-ba43-455b-a6c9-91a9ea126f08" data-file-name="components/home/About.tsx"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-unique-id="24c9c478-b81b-4258-9fbd-7ef16b54bbce" data-file-name="components/home/About.tsx">
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
        }} data-unique-id="82f79130-e1e6-48e4-9b8c-d7c8c6eed39a" data-file-name="components/home/About.tsx">
            <h3 className="text-2xl font-bold mb-6 flex items-center" data-unique-id="f14f432d-6b1a-4027-91c3-1ec0c7d23956" data-file-name="components/home/About.tsx">
              <School className="mr-2 text-chart-2" size={24} /><span className="editable-text" data-unique-id="1a307a10-488b-4c52-825f-f37e97f41130" data-file-name="components/home/About.tsx">
              Academic Qualifications
            </span></h3>
            
            <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.2
          }} className="space-y-6" data-unique-id="b5e2def1-ffd5-43ac-9ed4-ed336ed36caa" data-file-name="components/home/About.tsx">
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="db4951e3-9017-4888-817a-eeba6c61501a" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="e4d6292e-aec5-485c-a7b0-f90aa6c7b001" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-1/10 p-3 rounded-full mr-4" data-unique-id="9e134086-9f08-4876-94a5-392389a97feb" data-file-name="components/home/About.tsx">
                    <GraduationCap className="text-chart-1" size={24} />
                  </div>
                  <div data-unique-id="271037e1-adcf-4b7d-8b95-499f5a32dc68" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="6db74fe7-62f1-4b50-a4c7-8ff40a151a51" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="5d23b176-18a4-4445-a20a-b559c46ea89c" data-file-name="components/home/About.tsx">Bachelor of Library and Information Science and Archives Studies</span></h4>
                    <p className="text-muted-foreground" data-unique-id="8b36ecc3-878a-4d1b-86c6-1e6437182938" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="1eba741d-d381-4d60-aa73-27714f79ba46" data-file-name="components/home/About.tsx">University of Sindh</span></p>
                    <p className="text-chart-1 font-medium mt-2" data-unique-id="906c406f-5ae0-4716-b50d-c61da69cea9b" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="0dcb4e18-2da9-483d-b45e-33ef2c6af059" data-file-name="components/home/About.tsx">CGPA: 3.59</span></p>
                  </div>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="771f73fa-d42f-4ae9-9de9-242071992084" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="16ee43f3-bae3-4c0c-8dec-d0f75086d843" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-2/10 p-3 rounded-full mr-4" data-unique-id="caea081b-d996-43e2-bc44-7b61e0ea032b" data-file-name="components/home/About.tsx">
                    <BookOpen className="text-chart-2" size={24} />
                  </div>
                  <div data-unique-id="bd1f60ee-5a9f-4798-a56d-5084db54ca95" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="6c05ce07-24dd-4cd8-af26-abaa2a212d00" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="f36ac50e-494c-4456-b35e-ae45c039559d" data-file-name="components/home/About.tsx">Intermediate</span></h4>
                    <p className="text-chart-2 font-medium mt-2" data-unique-id="772f647c-be77-4d30-affb-614bebe19db4" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="8db246ad-5016-4085-bc3b-c5a929d0ca47" data-file-name="components/home/About.tsx">B Grade</span></p>
                  </div>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="c108f490-e1e6-4258-80f1-0f09092aceac" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="628c8231-09cf-46b0-87e7-1915f3d6c616" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-3/10 p-3 rounded-full mr-4" data-unique-id="78b6eb39-a7cc-4c16-bdd5-d8281bed5a8c" data-file-name="components/home/About.tsx">
                    <BookOpen className="text-chart-3" size={24} />
                  </div>
                  <div data-unique-id="2f284101-d13a-43f4-b5c4-438b94a8f301" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="3e400da5-5917-4e3b-aa9a-e4d1076d5a9a" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="6c926cad-c6c6-4d64-ac83-05f21c7c3960" data-file-name="components/home/About.tsx">Matriculation</span></h4>
                    <p className="text-chart-3 font-medium mt-2" data-unique-id="e3806211-f9b7-42f5-8f13-866511272314" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="25639726-1567-45a4-be26-b6967e775e77" data-file-name="components/home/About.tsx">A Grade</span></p>
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
        }} data-unique-id="8ef07e63-6423-464d-908e-99b03bbeb9b3" data-file-name="components/home/About.tsx">
            <h3 className="text-2xl font-bold mb-6" data-unique-id="3bf8e071-7abb-47f4-befa-2115a1fab38a" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="c3696c67-5bd3-4063-a1a4-e58218f5869c" data-file-name="components/home/About.tsx">Career Objective</span></h3>
            <div className="bg-card p-8 rounded-lg shadow-md" data-unique-id="149670fb-9cb8-48ee-a3e4-dd966018531a" data-file-name="components/home/About.tsx">
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="a819bb6b-011e-4588-8e28-65dbeceae142" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="ef1633c8-1987-48bb-bf8e-cab5e6785ca5" data-file-name="components/home/About.tsx">
                As a Library and Information Science graduate, I aim to utilize my knowledge and skills in 
                </span><span className="text-chart-1 font-medium" data-unique-id="54812978-64ea-4211-81ad-938352b5619a" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="93a5f620-7810-46a2-b9af-1b1104cfc2b8" data-file-name="components/home/About.tsx"> library automation</span></span><span className="editable-text" data-unique-id="154e1f1e-3c5f-466b-bd31-204b34349cd1" data-file-name="components/home/About.tsx">,
                </span><span className="text-chart-2 font-medium" data-unique-id="0a050859-a4d6-44f3-8e28-cf60427f1a65" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="23bbb06f-d3b5-4455-b823-aed6320655c6" data-file-name="components/home/About.tsx"> metadata and cataloging standards</span></span><span className="editable-text" data-unique-id="575e98b2-57e0-4a15-bb97-15fb1a274107" data-file-name="components/home/About.tsx">, and
                </span><span className="text-chart-3 font-medium" data-unique-id="4a484fbb-a112-4434-8584-9ba883ee30d0" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="fb451f9f-0581-4c29-b576-c2fbbcc68ac7" data-file-name="components/home/About.tsx"> digital archiving</span></span><span className="editable-text" data-unique-id="7b666459-1767-4904-a652-c43be0626d98" data-file-name="components/home/About.tsx"> to enhance user experiences in modern library systems.
              </span></p>
              
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="845fd4b7-9c13-4134-aefc-403c9ed27e02" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="61c9d907-6258-4906-bfb4-3f9ae2927372" data-file-name="components/home/About.tsx">
                I'm passionate about bridging traditional library science with cutting-edge digital technologies to create 
                more accessible and efficient knowledge repositories.
              </span></p>
              
              <p className="text-lg leading-relaxed" data-unique-id="019d3c3e-6e51-43b5-9f65-32c8941a0efc" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="ef621234-aae5-441f-9b7b-865ba36466ff" data-file-name="components/home/About.tsx">
                My goal is to contribute to the evolution of library services through innovation and 
                user-centered approaches, ensuring information is organized and accessible to all who seek it.
              </span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}