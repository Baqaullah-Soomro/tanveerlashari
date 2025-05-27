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
  return <section id="experience" className="py-24 bg-secondary/30" data-unique-id="8d6373e8-9cd8-47b3-ba1e-7fff5047a9b4" data-file-name="components/home/Experience.tsx">
      <div className="container mx-auto px-6" data-unique-id="5399c939-6451-4855-a69f-68ad1be54425" data-file-name="components/home/Experience.tsx">
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
      }} className="text-center mb-16" data-unique-id="362af3ec-a788-4ac3-918c-3ca99d6bcbff" data-file-name="components/home/Experience.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="9ce22148-c274-406a-8d39-b8b4a77fffde" data-file-name="components/home/Experience.tsx">
            <span className="editable-text" data-unique-id="0ffa51fb-a900-41d9-83aa-9f2aa04999f3" data-file-name="components/home/Experience.tsx">Professional Experience</span>
          </h2>
          <div className="h-1 w-20 bg-chart-2 mx-auto" data-unique-id="30c764b7-fdab-4fc3-9e9e-56de990d2138" data-file-name="components/home/Experience.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="e6b37284-fd64-4780-a04b-41b06316470b" data-file-name="components/home/Experience.tsx">
            <span className="editable-text" data-unique-id="53b3cbf2-0299-401e-9f2f-bbd1a87099aa" data-file-name="components/home/Experience.tsx">
              My internship experiences have equipped me with practical knowledge in library systems,
              cataloging, and digital resource management.
            </span>
          </p>
        </motion.div>
        
        <div className="relative" data-unique-id="4b7dba4c-5820-4454-afb9-399102d4e43a" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border" data-unique-id="55f41fde-9f54-4377-a3e1-2a1ae92d9562" data-file-name="components/home/Experience.tsx"></div>
          
          <div className="space-y-12 lg:space-y-24 relative" data-unique-id="cbceed79-9e9d-4add-bf7e-77ce4b2bef80" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
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
          }} className="relative" data-unique-id="49b07f07-ffa6-4fa3-bd7e-e5fe05c3a94a" data-file-name="components/home/Experience.tsx">
                <div className={`lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} data-unique-id="9ad4bf47-aac6-417a-9a3a-f6c2a70a13ee" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2" data-unique-id="82632d87-875d-4a48-8104-4a67e55396b8" data-file-name="components/home/Experience.tsx">
                    <div className="w-8 h-8 bg-chart-1 rounded-full flex items-center justify-center" data-unique-id="0f5569fb-376c-43b9-840b-ba3d60a4c08e" data-file-name="components/home/Experience.tsx">
                      <Briefcase className="text-white" size={16} data-unique-id="f1e07c41-7343-4d5f-97ac-a897bc0b0b5c" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                    </div>
                  </div>
                  
                  {/* Content card - alternates sides */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`} data-unique-id="0cf31877-873d-4bea-9953-d273f39f9f0b" data-file-name="components/home/Experience.tsx">
                    <motion.div whileHover={{
                  y: -5
                }} transition={{
                  type: "spring",
                  stiffness: 300
                }} className="bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-all border border-border/40" data-unique-id="da877b5e-0e03-4ac1-b2c1-b7e9e42ed5be" data-file-name="components/home/Experience.tsx">
                      <div className={`flex items-center ${index % 2 === 0 ? 'lg:justify-end' : ''}`} data-unique-id="c39cfbdd-34bd-46e3-a325-5ac5b22cb23e" data-file-name="components/home/Experience.tsx">
                        <div className={`${exp.iconBg} p-3 rounded-full mr-4 lg:order-${index % 2 === 0 ? '2 lg:ml-4 lg:mr-0' : '1'}`} data-unique-id="ad46772d-cdc6-445c-8e18-865643d0bef3" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                          {exp.icon}
                        </div>
                        <h3 className="text-xl font-bold" data-unique-id="e67cf33b-9248-4d49-941b-7be64844bc4a" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.title}</h3>
                      </div>
                      
                      <div className={`flex items-center text-muted-foreground mt-2 text-sm ${index % 2 === 0 ? 'lg:justify-end' : ''}`} data-unique-id="25f3f9fc-b9d6-4e43-a2cc-2a93449be687" data-file-name="components/home/Experience.tsx">
                        <Calendar size={14} className={`${index % 2 === 0 ? 'lg:order-2 lg:ml-2' : 'mr-2'}`} data-unique-id="a306b47f-da67-4eef-a29d-68c5bfa88fc9" data-file-name="components/home/Experience.tsx" />
                        <span data-unique-id="b67172de-f5f2-462d-8c51-e0dba351ec5c" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.period}</span>
                        <span className="mx-2" data-unique-id="80f1b64c-6ce9-415f-8d99-bca98e5e9acf" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="44be60fc-a910-4918-a235-efd14dfa344f" data-file-name="components/home/Experience.tsx">•</span></span>
                        <MapPin size={14} className={`${index % 2 === 0 ? 'lg:order-2 lg:ml-2' : 'mr-2'}`} data-unique-id="8a1a1d81-bcfa-4e83-b75e-d2455c5f8d6b" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                        <span data-unique-id="2943882b-659c-4a24-9d4e-866a1b05d89d" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.location}</span>
                      </div>
                      
                      <p className={`mt-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'lg:text-right' : ''}`} data-unique-id="eee0482f-134d-4701-a28b-eb20facf81dd" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                        {exp.description}
                      </p>
                      
                      <ul className={`mt-6 space-y-3 ${index % 2 === 0 ? 'lg:text-right' : ''}`} data-unique-id="33b9c0a3-4f89-41cd-936b-ee1d89cc2b30" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
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
                    }} data-unique-id="3a3f4a59-d4fb-44b1-8773-03147136fc5e" data-file-name="components/home/Experience.tsx">
                            <span className={`h-2 w-2 rounded-full bg-chart-${i % 3 + 1} mt-2 ${index % 2 === 0 ? 'lg:order-2 lg:ml-3' : 'mr-3'}`} data-unique-id="a29e08e2-be93-442d-b94b-2426ea0b6690" data-file-name="components/home/Experience.tsx"></span>
                            <span className="font-medium" data-unique-id="9441fdec-5053-40a9-882c-c21fe8f771f8" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{item}</span>
                          </motion.li>)}
                      </ul>
                      
                      <div className={`mt-6 pt-4 border-t border-border/40 ${index % 2 === 0 ? 'lg:text-right' : ''}`} data-unique-id="549672c6-9f47-47d6-8a46-37f74f104f8e" data-file-name="components/home/Experience.tsx">
                        <p className="font-medium text-chart-1" data-unique-id="b4b7d6cc-2d99-42db-a2ce-783d26e31bf4" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="e9ad0948-6ad1-44c0-80fb-5e770c2d2a0a" data-file-name="components/home/Experience.tsx">Key Achievement:</span></p>
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
                    }} data-unique-id="51c8a359-94c0-40a8-9a20-6a00b4089f4d" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
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