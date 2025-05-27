'use client';

import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Database, Users, Calendar, MapPin } from 'lucide-react';
const experiences = [{
  title: "Faculty of Pharmacy Seminar Library",
  period: "Jan 2023 - Mar 2023",
  location: "University of Sindh",
  description: "Worked with a team of 5 to modernize the pharmacy library's cataloging system, resulting in 30% faster resource retrieval for students and faculty.",
  icon: <BookOpen className="text-chart-1" size={24} />,
  responsibilities: ["Implemented and managed Koha library management software", "Cataloged and processed technical records for pharmacy publications", "Organized and maintained digital archives of research papers", "Assisted students and faculty with research and information retrieval"],
  iconBg: "bg-chart-1/10",
  achievements: "Successfully digitized over 5,000 pharmacy resources and improved search functionality"
}, {
  title: "Department of Sindhi Seminar Library",
  period: "Apr 2023 - Jun 2023",
  location: "University of Sindh",
  description: "Led the preservation initiative for rare Sindhi manuscripts and created a standardized metadata system that improved discoverability of cultural resources.",
  icon: <Database className="text-chart-2" size={24} />,
  responsibilities: ["Developed and maintained digital catalog of Sindhi literature", "Conducted training sessions for library staff on digital systems", "Implemented metadata standards for cultural and historical texts", "Created digital preservation strategies for rare manuscripts"],
  iconBg: "bg-chart-2/10",
  achievements: "Preserved 200+ rare manuscripts and implemented Dublin Core metadata standards"
}, {
  title: "IBA Seminar Library",
  period: "Jul 2023 - Sep 2023",
  location: "University of Sindh",
  description: "Collaborated with IBA faculty to enhance digital library services and trained users on advanced research techniques and database navigation.",
  icon: <Users className="text-chart-3" size={24} />,
  responsibilities: ["Coordinated library automation projects using Koha", "Managed digital resources and e-book collections", "Conducted user training sessions on library database usage", "Collaborated on developing information literacy programs"],
  iconBg: "bg-chart-3/10",
  achievements: "Increased digital resource usage by 45% through targeted training programs"
}];
export default function Experience() {
  return <section id="experience" className="py-24 bg-secondary/30" data-unique-id="0d5cbe85-5d64-476d-9c12-1c8a683ff814" data-file-name="components/home/Experience.tsx">
      <div className="container mx-auto px-6" data-unique-id="b7c3b128-f0b4-4a68-96ea-84e2f3a62d83" data-file-name="components/home/Experience.tsx">
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
      }} className="text-center mb-16" data-unique-id="f1a2b141-b07a-4186-82fa-891a58b1fb34" data-file-name="components/home/Experience.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="c694258a-ad73-4bc8-90a3-f4e18e807f0e" data-file-name="components/home/Experience.tsx">
            <span className="editable-text" data-unique-id="2c8d42d3-a82e-4452-ae76-624459c67584" data-file-name="components/home/Experience.tsx">Professional Experience</span>
          </h2>
          <div className="h-1 w-20 bg-chart-2 mx-auto" data-unique-id="3dc71c8d-4697-44e0-a394-c876d81c7da9" data-file-name="components/home/Experience.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="faa9ad1a-cd90-4033-b82e-006dd8a6595d" data-file-name="components/home/Experience.tsx">
            <span className="editable-text" data-unique-id="e2f069ef-e492-4ca8-8a63-9c1c4c0285eb" data-file-name="components/home/Experience.tsx">
              My internship experiences have equipped me with practical knowledge in library systems,
              cataloging, and digital resource management.
            </span>
          </p>
        </motion.div>
        
        <div className="relative" data-unique-id="3de8b133-71f9-4e35-bf51-fcca5757ae2b" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border" data-unique-id="8481f75a-ed98-402e-b3ba-b95f6af0e4e3" data-file-name="components/home/Experience.tsx"></div>
          
          <div className="space-y-12 lg:space-y-24 relative" data-unique-id="b88edce9-18d9-426f-925d-bb1b9191b80d" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
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
          }} className="relative" data-unique-id="7ab5cf76-36b9-4d35-81d4-8ba2aa74b710" data-file-name="components/home/Experience.tsx">
                <div className={`lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} data-unique-id="940cf0a5-3030-4acf-9d95-3ebd6bbe7866" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2" data-unique-id="8c0630f3-3274-40d1-bef5-146603c86167" data-file-name="components/home/Experience.tsx">
                    <div className="w-8 h-8 bg-chart-1 rounded-full flex items-center justify-center" data-unique-id="3b11b54c-2da5-4969-8770-b41c697de669" data-file-name="components/home/Experience.tsx">
                      <Briefcase className="text-white" size={16} data-unique-id="0b032df7-14d1-4942-be82-7fd0c68a55d2" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                    </div>
                  </div>
                  
                  {/* Content card - alternates sides */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`} data-unique-id="9f851be2-4b70-4bb8-abf7-42548fbae0c7" data-file-name="components/home/Experience.tsx">
                    <motion.div whileHover={{
                  y: -5
                }} transition={{
                  type: "spring",
                  stiffness: 300
                }} className="bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-all border border-border/40" data-unique-id="8cc023ab-95aa-4921-b9b1-8665a78c62e2" data-file-name="components/home/Experience.tsx">
                      <div className={`flex items-center ${index % 2 === 0 ? 'lg:justify-end' : ''}`} data-unique-id="1aebce7f-e4cd-4157-89cd-5976558f4847" data-file-name="components/home/Experience.tsx">
                        <div className={`${exp.iconBg} p-3 rounded-full mr-4 lg:order-${index % 2 === 0 ? '2 lg:ml-4 lg:mr-0' : '1'}`} data-unique-id="7e3ba2ad-ec12-41f0-91c4-e22c460afcd9" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                          {exp.icon}
                        </div>
                        <h3 className="text-xl font-bold" data-unique-id="d3985ecf-a642-4f91-a39a-bcca7a4e6628" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.title}</h3>
                      </div>
                      
                      <div className={`flex items-center text-muted-foreground mt-2 text-sm ${index % 2 === 0 ? 'lg:justify-end' : ''}`} data-unique-id="5a043a15-d2f3-43fb-819c-a5267b0bf8ef" data-file-name="components/home/Experience.tsx">
                        <Calendar size={14} className={`${index % 2 === 0 ? 'lg:order-2 lg:ml-2' : 'mr-2'}`} data-unique-id="b8ed4125-c851-436d-b3cc-c3e594baff6c" data-file-name="components/home/Experience.tsx" />
                        <span data-unique-id="1c517c53-6a53-4eda-855c-034c18265448" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.period}</span>
                        <span className="mx-2" data-unique-id="302c9e02-7d63-4ce6-bb60-f6f96dfa4bee" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="48728638-fe32-4985-886f-1610aeef36d8" data-file-name="components/home/Experience.tsx">•</span></span>
                        <MapPin size={14} className={`${index % 2 === 0 ? 'lg:order-2 lg:ml-2' : 'mr-2'}`} data-unique-id="6b5a3fcc-cf71-4d29-acd9-ff0d4c46613f" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                        <span data-unique-id="e72a5b52-d8b6-4bb4-b991-84994a112165" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.location}</span>
                      </div>
                      
                      <p className={`mt-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'lg:text-right' : ''}`} data-unique-id="be56e66f-3de5-41eb-9909-6913352d96b1" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                        {exp.description}
                      </p>
                      
                      <ul className={`mt-6 space-y-3 ${index % 2 === 0 ? 'lg:text-right' : ''}`} data-unique-id="ee969a4c-3b60-46be-8704-01f9fa33cb3a" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                        {exp.responsibilities.map((item, i) => <li key={i} className="flex items-start" data-unique-id="df4aa8ca-6515-4ced-9115-4f189c82422e" data-file-name="components/home/Experience.tsx">
                            <span className={`h-1.5 w-1.5 rounded-full bg-chart-1 mt-2 ${index % 2 === 0 ? 'lg:order-2 lg:ml-3' : 'mr-3'}`} data-unique-id="81faa300-1bb3-4dbd-9d09-a834cf135767" data-file-name="components/home/Experience.tsx"></span>
                            <span data-unique-id="d7c7b36a-7f3c-45ac-b31a-05f3f4e60298" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{item}</span>
                          </li>)}
                      </ul>
                      
                      <div className={`mt-6 pt-4 border-t border-border/40 ${index % 2 === 0 ? 'lg:text-right' : ''}`} data-unique-id="89867b13-d59e-46d3-84ab-a025faa9ed25" data-file-name="components/home/Experience.tsx">
                        <p className="font-medium text-chart-1" data-unique-id="e3ed2648-b1e7-42a2-bf31-1b7b91490c42" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="8fc962a1-43f2-4f48-ae15-a6441982a6c6" data-file-name="components/home/Experience.tsx">Key Achievement:</span></p>
                        <p className="text-sm" data-unique-id="f3018a36-58f7-43bc-bc80-0010ddf8d1ad" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.achievements}</p>
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