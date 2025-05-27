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
  return <section id="experience" className="py-24 bg-secondary/30" data-unique-id="55be0f29-7584-444d-865f-352181bb8dd2" data-file-name="components/home/Experience.tsx">
      <div className="container mx-auto px-6" data-unique-id="e6402a05-0f85-4153-bdb2-7fe50f199069" data-file-name="components/home/Experience.tsx">
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
      }} className="text-center mb-16" data-unique-id="13219458-95c6-4a77-9542-90a0745ee897" data-file-name="components/home/Experience.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="262467bc-53ab-4300-8459-33509222eda9" data-file-name="components/home/Experience.tsx">
            <span className="editable-text" data-unique-id="12e3678e-bb1f-49f9-9605-4396f14fd1da" data-file-name="components/home/Experience.tsx">Professional Experience</span>
          </h2>
          <div className="h-1 w-20 bg-chart-2 mx-auto" data-unique-id="d4eb3484-3e79-4cc7-af12-e01a28409e48" data-file-name="components/home/Experience.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="20a5433c-d449-46b1-a197-e73a5e1ad557" data-file-name="components/home/Experience.tsx">
            <span className="editable-text" data-unique-id="5e89a614-8aec-4e74-9784-7540278678bb" data-file-name="components/home/Experience.tsx">
              My internship experiences have equipped me with practical knowledge in library systems,
              cataloging, and digital resource management.
            </span>
          </p>
        </motion.div>
        
        <div className="relative" data-unique-id="35edfb18-0aa1-4c3b-89c9-d6be059621c3" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border" data-unique-id="459e6cb9-a4c0-4b9c-bb09-8527ffb3c920" data-file-name="components/home/Experience.tsx"></div>
          
          <div className="space-y-12 lg:space-y-24 relative" data-unique-id="fbd7de2c-7146-4cc0-b666-7dc3ce79e0dc" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
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
          }} className="relative" data-unique-id="9160573f-dbe2-4d36-9995-c3b3775cbb33" data-file-name="components/home/Experience.tsx">
                <div className={`lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} data-unique-id="ff404218-6388-4936-ba4e-051dc603b0af" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2" data-unique-id="90a6025a-60e0-4281-8122-963cb07bb6b3" data-file-name="components/home/Experience.tsx">
                    <div className="w-8 h-8 bg-chart-1 rounded-full flex items-center justify-center" data-unique-id="3f0f878d-0176-46f9-b7e5-69282bb45872" data-file-name="components/home/Experience.tsx">
                      <Briefcase className="text-white" size={16} data-unique-id="8df199c6-7da1-4d54-bc91-123015bd467b" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                    </div>
                  </div>
                  
                  {/* Content card - alternates sides */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`} data-unique-id="c8402080-6903-487f-b955-8c989e7fcfee" data-file-name="components/home/Experience.tsx">
                    <motion.div whileHover={{
                  y: -5
                }} transition={{
                  type: "spring",
                  stiffness: 300
                }} className="bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-all border border-border/40" data-unique-id="d7e69cf4-b684-409b-9c68-c3d603d203e7" data-file-name="components/home/Experience.tsx">
                      <div className={`flex items-center ${index % 2 === 0 ? 'lg:justify-end' : ''}`} data-unique-id="806a1049-b997-4329-9e2d-3806b874056a" data-file-name="components/home/Experience.tsx">
                        <div className={`${exp.iconBg} p-3 rounded-full mr-4 lg:order-${index % 2 === 0 ? '2 lg:ml-4 lg:mr-0' : '1'}`} data-unique-id="a6b143f6-0a74-4584-a3d7-d1f2fc51e386" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                          {exp.icon}
                        </div>
                        <h3 className="text-xl font-bold" data-unique-id="b7470801-7432-4481-b126-090032cbd68c" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.title}</h3>
                      </div>
                      
                      <div className={`flex items-center text-muted-foreground mt-2 text-sm ${index % 2 === 0 ? 'lg:justify-end' : ''}`} data-unique-id="0a64b92a-cd01-46bd-9dfd-611640cdf95d" data-file-name="components/home/Experience.tsx">
                        <Calendar size={14} className={`${index % 2 === 0 ? 'lg:order-2 lg:ml-2' : 'mr-2'}`} data-unique-id="b1964dc6-f4ce-40ad-b8a1-7931bc0b83a7" data-file-name="components/home/Experience.tsx" />
                        <span data-unique-id="9ee01256-2f25-4ff5-92d8-46fa8842bd6d" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.period}</span>
                        <span className="mx-2" data-unique-id="4a7e54b3-da70-41d2-a3ab-acef7e964a91" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="237ad8b6-e641-4057-90a7-212603dd379d" data-file-name="components/home/Experience.tsx">•</span></span>
                        <MapPin size={14} className={`${index % 2 === 0 ? 'lg:order-2 lg:ml-2' : 'mr-2'}`} data-unique-id="e4f4a9e0-391c-437c-9277-b43180a7d1f0" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                        <span data-unique-id="7ffb3561-cd3c-4e6c-97d4-f8d5f283dac7" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.location}</span>
                      </div>
                      
                      <p className={`mt-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'lg:text-right' : ''}`} data-unique-id="de515537-f02b-441d-b905-49bd279d5527" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                        {exp.description}
                      </p>
                      
                      <ul className={`mt-6 space-y-3 ${index % 2 === 0 ? 'lg:text-right' : ''}`} data-unique-id="17b314b5-6896-4858-913b-52cc25339670" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                        {exp.responsibilities.map((item, i) => <li key={i} className="flex items-start" data-unique-id="c29e568d-c47f-4aa4-b601-6334295c8a5f" data-file-name="components/home/Experience.tsx">
                            <span className={`h-1.5 w-1.5 rounded-full bg-chart-1 mt-2 ${index % 2 === 0 ? 'lg:order-2 lg:ml-3' : 'mr-3'}`} data-unique-id="09a74508-c112-4fbf-9219-f9268d5259c0" data-file-name="components/home/Experience.tsx"></span>
                            <span data-unique-id="6f7ace1b-7fe4-4f2c-9c64-2adbf5af12e4" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{item}</span>
                          </li>)}
                      </ul>
                      
                      <div className={`mt-6 pt-4 border-t border-border/40 ${index % 2 === 0 ? 'lg:text-right' : ''}`} data-unique-id="62ec6189-b2d6-4622-b72c-5c49c046c8ff" data-file-name="components/home/Experience.tsx">
                        <p className="font-medium text-chart-1" data-unique-id="37d92450-b7cd-4ba9-b24d-35881fe54482" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="f048a3cc-3a02-425a-9dce-9f5723ae075b" data-file-name="components/home/Experience.tsx">Key Achievement:</span></p>
                        <p className="text-sm" data-unique-id="eaaabac7-bb90-482f-9651-1dca72926bf2" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.achievements}</p>
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