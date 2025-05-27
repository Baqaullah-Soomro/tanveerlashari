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
  return <section id="experience" className="py-24 bg-secondary/30" data-unique-id="4bc94171-21b8-4dae-aeac-4cebea974f29" data-file-name="components/home/Experience.tsx">
      <div className="container mx-auto px-6" data-unique-id="38778479-2631-4cb3-80e8-8780eb176eca" data-file-name="components/home/Experience.tsx">
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
      }} className="text-center mb-16" data-unique-id="5fb3b46a-d1d5-4c8f-b3be-93e878243f00" data-file-name="components/home/Experience.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="8b4e8290-bd50-4483-959e-92ae50501262" data-file-name="components/home/Experience.tsx">
            <span className="editable-text" data-unique-id="7d88290f-3994-47c5-b858-36f416749aa3" data-file-name="components/home/Experience.tsx">Professional Experience</span>
          </h2>
          <div className="h-1 w-20 bg-chart-2 mx-auto" data-unique-id="ec7369eb-13f7-4ec3-a0bb-f2bed2a2a4b1" data-file-name="components/home/Experience.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="6982e478-87a2-4429-9c78-2078531b3ffa" data-file-name="components/home/Experience.tsx">
            <span className="editable-text" data-unique-id="f51633a0-a301-46b1-9142-45c904cd01a5" data-file-name="components/home/Experience.tsx">
              My internship experiences have equipped me with practical knowledge in library systems,
              cataloging, and digital resource management.
            </span>
          </p>
        </motion.div>
        
        <div className="relative" data-unique-id="64111b39-0459-4174-9ba2-763c399f5023" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border" data-unique-id="6d0bf5c1-c4ca-4b88-97c7-67e2f1639ef3" data-file-name="components/home/Experience.tsx"></div>
          
          <div className="space-y-12 lg:space-y-24 relative" data-unique-id="5c8064f2-c477-4ea4-a66d-1e3213fd5cf5" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
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
          }} className="relative" data-unique-id="4f6839ec-458b-4e91-a1b3-534f19a73a7a" data-file-name="components/home/Experience.tsx">
                <div className={`lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} data-unique-id="44c442a9-1f4c-4fe5-bbfe-7136568b3185" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2" data-unique-id="8444fb32-54ab-4058-ad18-96103cab1630" data-file-name="components/home/Experience.tsx">
                    <div className="w-8 h-8 bg-chart-1 rounded-full flex items-center justify-center" data-unique-id="6f39d255-d112-4456-a9a4-cd94c641b4fe" data-file-name="components/home/Experience.tsx">
                      <Briefcase className="text-white" size={16} data-unique-id="a96002d7-a804-47a3-8f31-4d89fb8b1866" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                    </div>
                  </div>
                  
                  {/* Content card - alternates sides */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`} data-unique-id="fdeba34d-010d-4e8d-aef8-82edf3f8c418" data-file-name="components/home/Experience.tsx">
                    <motion.div whileHover={{
                  y: -5
                }} transition={{
                  type: "spring",
                  stiffness: 300
                }} className="bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-all border border-border/40" data-unique-id="4c17261d-4b59-4225-a0dc-8d1a4f0e3f8b" data-file-name="components/home/Experience.tsx">
                      <div className={`flex items-center ${index % 2 === 0 ? 'lg:justify-end' : ''}`} data-unique-id="44147ed7-ad76-4fd7-8aac-8929168fded4" data-file-name="components/home/Experience.tsx">
                        <div className={`${exp.iconBg} p-3 rounded-full mr-4 lg:order-${index % 2 === 0 ? '2 lg:ml-4 lg:mr-0' : '1'}`} data-unique-id="27a0174b-3c04-4294-82df-2ec3ee2d1e01" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                          {exp.icon}
                        </div>
                        <h3 className="text-xl font-bold" data-unique-id="1684f17b-65ee-4e68-aa87-6f69a85345a2" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.title}</h3>
                      </div>
                      
                      <div className={`flex items-center text-muted-foreground mt-2 text-sm ${index % 2 === 0 ? 'lg:justify-end' : ''}`} data-unique-id="e05a9fdf-9de5-4b83-8660-e234b6303d8e" data-file-name="components/home/Experience.tsx">
                        <Calendar size={14} className={`${index % 2 === 0 ? 'lg:order-2 lg:ml-2' : 'mr-2'}`} data-unique-id="17e52c2e-1a49-4d42-819a-da3ae090a1ee" data-file-name="components/home/Experience.tsx" />
                        <span data-unique-id="5b66a2a4-f822-4561-929b-486523c9c503" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.period}</span>
                        <span className="mx-2" data-unique-id="1f043e10-da47-456b-a41c-d480b399f44f" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="0b6144e5-363b-449d-8794-bacda096fa11" data-file-name="components/home/Experience.tsx">•</span></span>
                        <MapPin size={14} className={`${index % 2 === 0 ? 'lg:order-2 lg:ml-2' : 'mr-2'}`} data-unique-id="ac177d3b-cdae-410d-8f13-cea41058a286" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                        <span data-unique-id="2954992c-4f03-4502-a889-01131074f1ee" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.location}</span>
                      </div>
                      
                      <p className={`mt-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'lg:text-right' : ''}`} data-unique-id="2ce343bd-b3a5-4a0d-9cc4-e2896ae71cfd" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                        {exp.description}
                      </p>
                      
                      <ul className={`mt-6 space-y-3 ${index % 2 === 0 ? 'lg:text-right' : ''}`} data-unique-id="79495274-62dd-48f0-bdca-7df289c1d42b" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                        {exp.responsibilities.map((item, i) => <li key={i} className="flex items-start" data-unique-id="708dc8f6-6edb-48e9-822a-6dad02525bce" data-file-name="components/home/Experience.tsx">
                            <span className={`h-1.5 w-1.5 rounded-full bg-chart-1 mt-2 ${index % 2 === 0 ? 'lg:order-2 lg:ml-3' : 'mr-3'}`} data-unique-id="1336d8aa-8aa7-4775-8b9c-c4e39578f5da" data-file-name="components/home/Experience.tsx"></span>
                            <span data-unique-id="c5d15108-60b8-4d8d-a34b-008ec73e975f" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{item}</span>
                          </li>)}
                      </ul>
                      
                      <div className={`mt-6 pt-4 border-t border-border/40 ${index % 2 === 0 ? 'lg:text-right' : ''}`} data-unique-id="d2fa1fe9-c7ce-4252-8077-6359d6867508" data-file-name="components/home/Experience.tsx">
                        <p className="font-medium text-chart-1" data-unique-id="6a104b23-d705-4b9f-bd4f-3f8e5a856a99" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="c79a6e23-63cb-42b8-bd4b-4ab7f2e39f10" data-file-name="components/home/Experience.tsx">Key Achievement:</span></p>
                        <p className="text-sm" data-unique-id="249ad60c-dbf7-4071-8248-58942ad83804" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.achievements}</p>
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