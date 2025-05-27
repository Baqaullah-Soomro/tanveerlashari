'use client';

import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Database, Users, Calendar, MapPin } from 'lucide-react';
const experiences = [{
  title: "Faculty of Pharmacy Seminar Library",
  period: "16 Aug 2023 - 29 Dec 2023",
  location: "University of Sindh",
  description: "Coordinated library setup including physical infrastructure and automation implementation for the Faculty of Pharmacy.",
  icon: <BookOpen className="text-chart-1" size={24} />,
  responsibilities: ["Coordinated the setup of library including physical infrastructure and automation", "Collection Development and acquisition", "Technical processing of materials", "Physically arranged library materials on shelves", "Installed and implemented Koha Software", "Automate library collections", "Conducted staff and patrons training session on library automation software and hardware", "Conducted a comprehensive feasibility study on library automation for the Faculty of Pharmacy"],
  iconBg: "bg-chart-1/10",
  achievements: "Successfully implemented Koha automation system improving efficiency of resource access"
}, {
  title: "Department of Sindhi Seminar Library",
  period: "01 Oct 2022 - 31 Dec 2022",
  location: "University of Sindh",
  description: "Assisted in cataloging and organization of Sindhi language materials while implementing digital systems.",
  icon: <Database className="text-chart-2" size={24} />,
  responsibilities: ["Assisted in Cataloging, Classification and Organization of Sindhi language materials", "Contributed to Library Circulation Processes", "Gained practical knowledge of Library Management System", "Made entries of all books data on Excel sheet and imported on Koha"],
  iconBg: "bg-chart-2/10",
  achievements: "Successfully cataloged and digitized Sindhi language materials and implemented data migration to Koha"
}, {
  title: "IBA Seminar Library",
  period: "21 Sep 2023 - 20 Oct 2023",
  location: "University of Sindh",
  description: "Coordinated the setup of a new library at the Institute of Business Administration, implementing automation systems.",
  icon: <Users className="text-chart-3" size={24} />,
  responsibilities: ["Coordinated the setup of new library including physical infrastructure and automation", "Collection Development", "Technical processing of materials", "Physically arranged library materials on shelves", "Installed and implemented Koha Software", "Automate library collections", "Provided training and support for Library staff and patrons to effectively use automated systems"],
  iconBg: "bg-chart-3/10",
  achievements: "Successfully established automated library system with trained staff for continued operation"
}];
export default function Experience() {
  return <section id="experience" className="py-24 bg-secondary/30" data-unique-id="9b9a7105-0776-4a4c-aeb6-5c36f1e2a6af" data-file-name="components/home/Experience.tsx">
      <div className="container mx-auto px-6" data-unique-id="4fe0be0b-94a2-40df-8018-ca70330c48ca" data-file-name="components/home/Experience.tsx">
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
      }} className="text-center mb-16" data-unique-id="8bb5df80-22a4-43ac-8643-413ba8e3d3db" data-file-name="components/home/Experience.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="c0bde641-67c5-4303-9563-9f48e2a9e3ba" data-file-name="components/home/Experience.tsx">
            <span className="editable-text" data-unique-id="19f84a94-8663-42ce-a456-57788a3084ae" data-file-name="components/home/Experience.tsx">Professional Experience</span>
          </h2>
          <div className="h-1 w-20 bg-chart-2 mx-auto" data-unique-id="d4694747-ad0b-4739-8432-7076ccf7bc68" data-file-name="components/home/Experience.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="b264189a-5339-4642-986f-eb0afe45d1c5" data-file-name="components/home/Experience.tsx">
            <span className="editable-text" data-unique-id="1cd614e0-0005-4b89-982c-b7a747051f7e" data-file-name="components/home/Experience.tsx">
              My internship experiences have equipped me with practical knowledge in library systems,
              cataloging, and digital resource management.
            </span>
          </p>
        </motion.div>
        
        <div className="relative" data-unique-id="036c19a8-bd10-429f-bde7-9d1a0263ea13" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border" data-unique-id="3fca4011-a52d-4606-9326-276a47d75ebc" data-file-name="components/home/Experience.tsx"></div>
          
          <div className="space-y-12 lg:space-y-24 relative" data-unique-id="73492168-30b9-4b08-b581-edec7987a6a5" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
            {experiences.map((exp, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            amount: 0.2
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} className="relative" data-unique-id="0d33963e-263a-40e1-952f-021fb26ea69d" data-file-name="components/home/Experience.tsx">
                <div className={`lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} data-unique-id="7acef4d4-ff0c-42da-ba8c-8dcd7a0fa0e6" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2" data-unique-id="8fe08275-6be5-4f05-ab5a-baed5f0335b0" data-file-name="components/home/Experience.tsx">
                    <div className="w-8 h-8 bg-chart-1 rounded-full flex items-center justify-center" data-unique-id="06921e32-c406-4d6b-a519-3553e94b2bdf" data-file-name="components/home/Experience.tsx">
                      <Briefcase className="text-white" size={16} data-unique-id="21c5b993-4d07-46b3-bc5b-5990fe21fe51" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                    </div>
                  </div>
                  
                  {/* Content card - alternates sides */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`} data-unique-id="eae4d37c-cfb6-4523-ba9d-cc9467acc390" data-file-name="components/home/Experience.tsx">
                    <motion.div whileHover={{
                  y: -5
                }} transition={{
                  type: "spring",
                  stiffness: 300
                }} className="bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-all border border-border/40" data-unique-id="cdff769a-f9af-492c-bbcf-436c1ce2306a" data-file-name="components/home/Experience.tsx">
                      <div className={`flex items-center ${index % 2 === 0 ? 'lg:justify-end' : ''}`} data-unique-id="7e5be39c-668a-46ab-9cc7-5af963d81610" data-file-name="components/home/Experience.tsx">
                        <div className={`${exp.iconBg} p-3 rounded-full mr-4 lg:order-${index % 2 === 0 ? '2 lg:ml-4 lg:mr-0' : '1'}`} data-unique-id="88e4df76-c0e6-4bd9-8323-681fafa45754" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                          {exp.icon}
                        </div>
                        <h3 className="text-xl font-bold" data-unique-id="48f32cbf-b3a6-4e51-b7da-7039c73b7f81" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.title}</h3>
                      </div>
                      
                      <div className={`flex items-center text-muted-foreground mt-2 text-sm ${index % 2 === 0 ? 'lg:justify-end' : ''}`} data-unique-id="9137901a-107c-4cac-82bc-ab1a750c04d0" data-file-name="components/home/Experience.tsx">
                        <Calendar size={14} className={`${index % 2 === 0 ? 'lg:order-2 lg:ml-2' : 'mr-2'}`} data-unique-id="a3d57498-ae6b-494f-9cce-0a3ac56edf09" data-file-name="components/home/Experience.tsx" />
                        <span data-unique-id="dce3a8f4-987f-4801-bcec-5367836f57cf" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.period}</span>
                        <span className="mx-2" data-unique-id="11092259-1cd1-4690-9187-75a747e0aa0b" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="61cc3efa-87e3-41c5-9e6a-0f1522332d2c" data-file-name="components/home/Experience.tsx">•</span></span>
                        <MapPin size={14} className={`${index % 2 === 0 ? 'lg:order-2 lg:ml-2' : 'mr-2'}`} data-unique-id="373a5d73-1796-489e-b266-7cbc4228a1e4" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                        <span data-unique-id="8318989f-57c2-4673-b33f-0377863fa03c" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.location}</span>
                      </div>
                      
                      <p className={`mt-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'lg:text-right' : ''}`} data-unique-id="1155046e-3e92-4ff0-be11-bb1b0386e2c3" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                        {exp.description}
                      </p>
                      
                      <ul className={`mt-6 space-y-3 ${index % 2 === 0 ? 'lg:text-right' : ''}`} data-unique-id="3319f691-a87b-414b-8dc8-51e95f426545" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                        {exp.responsibilities.map((item, i) => <motion.li key={i} className="flex items-start" initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? 20 : -20
                    }} whileInView={{
                      opacity: 1,
                      x: 0
                    }} viewport={{
                      once: true
                    }} transition={{
                      duration: 0.4,
                      delay: i * 0.1
                    }} data-unique-id="4c8689e1-ca4e-4ed2-a56a-903a6cc52903" data-file-name="components/home/Experience.tsx">
                            <span className={`h-2 w-2 rounded-full bg-chart-${i % 3 + 1} mt-2 ${index % 2 === 0 ? 'lg:order-2 lg:ml-3' : 'mr-3'}`} data-unique-id="47c7e310-1443-4365-9212-c2153ec1bd21" data-file-name="components/home/Experience.tsx"></span>
                            <span className="font-medium" data-unique-id="bce4d747-eb1d-4f17-aebb-69b9843fc85d" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{item}</span>
                          </motion.li>)}
                      </ul>
                      
                      <div className={`mt-6 pt-4 border-t border-border/40 ${index % 2 === 0 ? 'lg:text-right' : ''}`} data-unique-id="1ef0fbea-6d6e-4fd7-83a3-00d2f72bdfd5" data-file-name="components/home/Experience.tsx">
                        <p className="font-medium text-chart-1" data-unique-id="ec1d5297-0449-4be7-acff-38231ef20fe4" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="723cc50f-70cd-4d1f-adf9-c8636222aa9d" data-file-name="components/home/Experience.tsx">Key Achievement:</span></p>
                        <motion.p className="text-sm mt-2 font-medium bg-chart-1/5 py-2 px-3 rounded-md inline-block" initial={{
                      opacity: 0,
                      y: 10
                    }} whileInView={{
                      opacity: 1,
                      y: 0
                    }} viewport={{
                      once: true
                    }} transition={{
                      duration: 0.5,
                      delay: 0.3
                    }} data-unique-id="aa91fd86-3719-4f7e-99a9-37f652676ae4" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                          {exp.achievements}
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}