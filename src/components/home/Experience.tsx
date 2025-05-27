'use client';

import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Database, Users, Calendar, MapPin, Award, Clock, Building, GraduationCap, Bookmark } from 'lucide-react';

// Enhanced experience data with additional fields meeting international resume standards
const experiences = [{
  title: "Faculty of Pharmacy Seminar Library",
  role: "Library Automation Specialist",
  period: "16 Aug 2023 - 29 Dec 2023",
  location: "University of Sindh",
  description: "Coordinated library setup including physical infrastructure and automation implementation for the Faculty of Pharmacy.",
  icon: <BookOpen className="text-chart-1" size={24} />,
  logoUrl: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=150&auto=format&fit=crop",
  responsibilities: ["Coordinated the setup of library including physical infrastructure and automation", "Collection Development and acquisition of 2,500+ pharmacy resources", "Technical processing of materials with standardized metadata", "Physically arranged library materials on shelves using Dewey Decimal Classification", "Installed and implemented Koha Library Management Software", "Automated library collections including circulation and cataloging", "Conducted staff and patrons training session on library automation software and hardware", "Conducted a comprehensive feasibility study on library automation for the Faculty of Pharmacy"],
  skills: ["Koha LMS", "Metadata Standards", "Library Automation", "Staff Training"],
  iconBg: "bg-chart-1/10",
  achievements: "Successfully implemented Koha automation system improving resource access efficiency by 45%"
}, {
  title: "Department of Sindhi Seminar Library",
  role: "Cataloging Specialist",
  period: "01 Oct 2022 - 31 Dec 2022",
  location: "University of Sindh",
  description: "Assisted in cataloging and organization of Sindhi language materials while implementing digital systems.",
  icon: <Database className="text-chart-2" size={24} />,
  logoUrl: "https://images.unsplash.com/photo-1529158062015-f3421c2705f0?q=80&w=150&auto=format&fit=crop",
  responsibilities: ["Assisted in Cataloging, Classification and Organization of 1,200+ Sindhi language materials", "Contributed to Library Circulation Processes handling 50+ daily transactions", "Gained practical knowledge of Library Management System implementation", "Created and migrated database entries for all books from Excel sheets to Koha"],
  skills: ["Cataloging", "Classification", "Data Migration", "Sindhi Literature"],
  iconBg: "bg-chart-2/10",
  achievements: "Successfully cataloged and digitized Sindhi language collection with 98% accuracy rate"
}, {
  title: "IBA Seminar Library",
  role: "Library Systems Implementation Specialist",
  period: "21 Sep 2023 - 20 Oct 2023",
  location: "University of Sindh",
  description: "Coordinated the setup of a new library at the Institute of Business Administration, implementing automation systems.",
  icon: <Users className="text-chart-3" size={24} />,
  logoUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=150&auto=format&fit=crop",
  responsibilities: ["Coordinated the setup of new library including physical infrastructure and automation", "Developed collection policy and acquired initial business reference materials", "Processed technical materials using international cataloging standards", "Physically arranged library materials on shelves using Library of Congress Classification", "Installed and configured Koha Software with customized OPAC interface", "Automated library collections with barcode integration and circulation system", "Provided training and support for Library staff and patrons to effectively use automated systems"],
  skills: ["System Implementation", "OPAC Configuration", "Barcode Integration", "Staff Training"],
  iconBg: "bg-chart-3/10",
  achievements: "Successfully established automated library system reducing catalog search time by 65%"
}];
export default function Experience() {
  return <section id="experience" className="py-24 bg-secondary/30 relative overflow-hidden" data-unique-id="e8535f6d-9ad8-4dfb-a2bf-f1d444f62b67" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden" data-unique-id="67187a60-f396-4dfd-8637-4695d6825245" data-file-name="components/home/Experience.tsx">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-chart-1/5 blur-3xl" data-unique-id="70125fa0-10e7-45df-85f6-27e7877b22d6" data-file-name="components/home/Experience.tsx"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-chart-3/5 blur-3xl" data-unique-id="7383e40e-f1c1-457e-85e3-2764896f847e" data-file-name="components/home/Experience.tsx"></div>
      </div>
      
      <div className="container mx-auto px-6" data-unique-id="3d6d7c6c-dc4d-4f38-b250-ce14a945315c" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
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
      }} className="text-center mb-16" data-unique-id="71255bdc-7bf8-460c-a58b-7f27248e5aaf" data-file-name="components/home/Experience.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="fa93b34f-a592-41c8-a1c4-a2fed33c4e39" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="845f42d9-d39c-46b6-b2d6-095d87842107" data-file-name="components/home/Experience.tsx">
            Professional Experience
          </span></h2>
          <div className="h-1 w-20 bg-chart-2 mx-auto" data-unique-id="063cc018-b3f6-40ee-b684-04d8f7cb0ed1" data-file-name="components/home/Experience.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="9f02a8ff-4c52-46ac-bb8d-2196fc7ceb16" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="00ee0ef5-ab5a-40e1-9f29-b91e62644457" data-file-name="components/home/Experience.tsx">
            My internship experiences have equipped me with practical knowledge in library systems,
            cataloging, and digital resource management following international standards.
          </span></p>
        </motion.div>
        
        <div className="relative" data-unique-id="5575ae41-74e4-4b40-a0bf-c518187846cf" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
          {/* Timeline Line with animated gradient */}
          <motion.div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-gradient-to-b from-chart-1 via-chart-2 to-chart-3 rounded-full" initial={{
          height: 0
        }} whileInView={{
          height: "100%"
        }} viewport={{
          once: true
        }} transition={{
          duration: 1.5,
          ease: "easeOut"
        }} data-unique-id="b0d80f1d-433e-4866-bf7b-c7426a70c65e" data-file-name="components/home/Experience.tsx" />
          
          <div className="space-y-20 lg:space-y-28 relative" data-unique-id="b9efc645-e0c5-4038-a671-d06383d34496" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
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
          }} className="relative" data-unique-id="49b24a3a-ca74-44f8-9102-73690071ae74" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                {/* Year marker for timeline */}
                <motion.div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 text-sm font-bold bg-chart-1 text-white py-1 px-3 rounded-md" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.3,
              delay: 0.2
            }} style={{
              top: "-2rem"
            }} data-unique-id="a3b25716-8c42-41ba-b48c-9572c6501542" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                  {exp.period.split(" - ")[0].split(" ")[2]} {/* Extract year */}
                </motion.div>

                <div className={`lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} data-unique-id="e07ca943-4933-4cd9-823d-11dc3e87ce85" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                  {/* Timeline dot with icon */}
                  <motion.div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10" initial={{
                scale: 0
              }} whileInView={{
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 0.3
              }} data-unique-id="dc3d86eb-3432-418e-841f-2e22b0e20b3e" data-file-name="components/home/Experience.tsx">
                    <div className={`w-12 h-12 bg-chart-${index + 1} rounded-full flex items-center justify-center shadow-lg`} data-unique-id="3f3ebf66-3eee-4868-a31b-9230e9c12d11" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                      {index === 0 && <GraduationCap className="text-white" size={20} data-unique-id="cf356d5b-55fa-49fa-9085-dee00569d846" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />}
                      {index === 1 && <Bookmark className="text-white" size={20} data-unique-id="acd24439-3b6c-4b39-8980-ff1d2e1167d1" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />}
                      {index === 2 && <Building className="text-white" size={20} data-unique-id="ddf4060e-557a-4ad7-bae5-83b3bd8944b0" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />}
                    </div>
                  </motion.div>
                  
                  {/* Content card - alternates sides */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`} data-unique-id="4bb3d1e9-bfc2-4e35-81ea-db4ffb250653" data-file-name="components/home/Experience.tsx">
                    <motion.div whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                }} transition={{
                  type: "spring",
                  stiffness: 300
                }} className="bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-all border border-border/40" data-unique-id="4ba41f19-649d-45e2-ab54-45c659cca2de" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                      <div className="flex items-center gap-4 mb-4" data-unique-id="dfa0f146-10a5-4a79-be47-aec924a30fb2" data-file-name="components/home/Experience.tsx">
                        <div className={`flex-shrink-0 h-16 w-16 rounded-md overflow-hidden shadow-md border border-border/30 ${index % 2 === 0 ? '' : 'lg:order-2'}`} data-unique-id="56488ff6-90f7-4374-a60a-b58a85386dca" data-file-name="components/home/Experience.tsx">
                          <img src={exp.logoUrl} alt={`${exp.title} logo`} className="h-full w-full object-cover" data-unique-id="fb8044d4-88c9-4a63-99d8-d6310afc7c63" data-file-name="components/home/Experience.tsx" />
                        </div>
                        
                        <div className={`${index % 2 === 0 ? '' : 'lg:text-right lg:flex lg:flex-col lg:items-end'}`} data-unique-id="1597f53f-8e3b-464e-861d-18d6f7228f4a" data-file-name="components/home/Experience.tsx">
                          <h3 className="text-xl font-bold" data-unique-id="00af06fa-872b-4231-ab75-cc7d73a62eec" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.title}</h3>
                          <p className="text-chart-2 font-medium" data-unique-id="6e907569-6f24-48bf-8cb0-6365bdbcb955" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.role}</p>
                        </div>
                      </div>
                      
                      {/* Time and location */}
                      <div className={`flex items-center text-muted-foreground mt-2 text-sm ${index % 2 === 0 ? '' : 'lg:justify-end'}`} data-unique-id="f3800178-1a6b-48f7-a2e1-4afece859a7c" data-file-name="components/home/Experience.tsx">
                        <Clock size={14} className={`${index % 2 === 0 ? '' : 'lg:order-2 lg:ml-2'} mr-1`} data-unique-id="fdc312e1-a3a3-4cf4-b203-3005c27756fb" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                        <span data-unique-id="4ffac996-aa77-4ee7-a9ad-60fbcc1734f0" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.period}</span>
                        <span className="mx-2" data-unique-id="669ae3f5-9299-4813-b03e-b09c1e335088" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="b3e304c0-1f5e-470c-8ba3-e2ad83580a08" data-file-name="components/home/Experience.tsx">•</span></span>
                        <MapPin size={14} className={`${index % 2 === 0 ? '' : 'lg:order-2 lg:ml-2'} mr-1`} data-unique-id="fee536c7-73b7-4f44-945a-cd958f7d2f50" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                        <span data-unique-id="da834bbc-fbe4-4a99-ae73-23ebe632c881" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.location}</span>
                      </div>
                      
                      <p className={`mt-4 text-muted-foreground ${index % 2 === 0 ? '' : 'lg:text-right'}`} data-unique-id="3a024531-8026-448d-8e64-fa6545ed8ec2" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                        {exp.description}
                      </p>
                      
                      {/* Skills tags */}
                      <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? '' : 'lg:justify-end'}`} data-unique-id="22963996-787b-4573-aab7-fa6a6bb87bac" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                        {exp.skills.map((skill, i) => <motion.span key={i} initial={{
                      opacity: 0,
                      scale: 0.8
                    }} whileInView={{
                      opacity: 1,
                      scale: 1
                    }} viewport={{
                      once: true
                    }} transition={{
                      delay: 0.4 + i * 0.1
                    }} className={`bg-chart-${i % 3 + 1}/10 text-chart-${i % 3 + 1} text-xs font-medium px-2 py-1 rounded-full`} data-unique-id="cfa6ffd5-c8fc-45a5-b2fb-8bc5013efd2a" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                            {skill}
                          </motion.span>)}
                      </div>
                      
                      {/* Responsibilities */}
                      <div className="mt-6" data-unique-id="fa8de86f-9d1c-48cb-a7a5-6a6cadcccda2" data-file-name="components/home/Experience.tsx">
                        <h4 className={`font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3 ${index % 2 === 0 ? '' : 'lg:text-right'}`} data-unique-id="57cf6b5b-5ce8-48df-82db-ed0fdb69f562" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="e3fbc297-f9a0-4ff1-9210-b7d3e724e242" data-file-name="components/home/Experience.tsx">
                          Key Responsibilities:
                        </span></h4>
                        <ul className={`space-y-2.5 ${index % 2 === 0 ? '' : 'lg:text-right'}`} data-unique-id="4254f5fc-d8f8-44ae-a349-c01d69272223" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                          {exp.responsibilities.map((item, i) => <motion.li key={i} className="flex items-start" initial={{
                        opacity: 0,
                        x: index % 2 === 0 ? -20 : 20
                      }} whileInView={{
                        opacity: 1,
                        x: 0
                      }} viewport={{
                        once: true
                      }} transition={{
                        duration: 0.4,
                        delay: i * 0.08
                      }} data-unique-id="722eed4e-681f-44e9-9b52-9f5575ee80b2" data-file-name="components/home/Experience.tsx">
                              <span className={`h-1.5 w-1.5 rounded-full bg-chart-${i % 3 + 1} mt-2.5 flex-shrink-0 ${index % 2 === 0 ? 'mr-3' : 'lg:order-2 lg:ml-3'}`} data-unique-id="7633b378-bd4a-4062-8b0e-dc9e7eeefa37" data-file-name="components/home/Experience.tsx" />
                              <span className="text-sm" data-unique-id="e5f4fad5-f027-44dc-89e3-c355f2433e37" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{item}</span>
                            </motion.li>)}
                        </ul>
                      </div>
                      
                      {/* Achievement */}
                      <div className={`mt-6 pt-4 border-t border-border/40`} data-unique-id="3b2073c9-f992-4de6-9fb8-2f1dedc7f529" data-file-name="components/home/Experience.tsx">
                        <div className={`flex items-center ${index % 2 === 0 ? '' : 'lg:justify-end'}`} data-unique-id="5f98cd85-5dff-47eb-a008-1dc6ec8e0845" data-file-name="components/home/Experience.tsx">
                          <Award className={`text-chart-${index + 1} mr-2 ${index % 2 === 0 ? '' : 'lg:order-2 lg:mr-0 lg:ml-2'}`} size={16} data-unique-id="9484dfc8-e2f8-4e38-915f-fa96753b1e37" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                          <p className={`font-medium text-chart-${index + 1}`} data-unique-id="c0d4ac4f-3dfe-4976-9e7a-5819c1cb2f27" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="edd2aca5-0228-47b3-a769-d9b0df3df6f8" data-file-name="components/home/Experience.tsx">
                            Key Achievement:
                          </span></p>
                        </div>
                        <motion.div className={`mt-2 ${index % 2 === 0 ? '' : 'lg:text-right'}`} initial={{
                      opacity: 0,
                      y: 10
                    }} whileInView={{
                      opacity: 1,
                      y: 0
                    }} viewport={{
                      once: true
                    }} transition={{
                      duration: 0.5,
                      delay: 0.5
                    }} data-unique-id="347e1568-e14c-4bdb-886a-4add82fcba31" data-file-name="components/home/Experience.tsx">
                          <p className={`font-medium bg-chart-${index + 1}/5 py-2.5 px-4 rounded-md inline-block text-sm border-l-4 border-chart-${index + 1}`} data-unique-id="9d4930f4-9518-4a8c-b09e-d0e2c7256523" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                            {exp.achievements}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
        
        {/* Bottom section with recommendations/summary */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="max-w-3xl mx-auto mt-20 text-center" data-unique-id="81b8d2f1-88d4-4c6d-8f2e-dbc385ccca3f" data-file-name="components/home/Experience.tsx">
          <div className="bg-card p-6 rounded-xl shadow-md border border-chart-1/20" data-unique-id="66f60006-a85d-464b-9af4-dd37a94776ea" data-file-name="components/home/Experience.tsx">
            <h3 className="text-xl font-bold mb-4 flex items-center justify-center" data-unique-id="ecbb6895-cc75-4c96-b335-7e9192ceadac" data-file-name="components/home/Experience.tsx">
              <Award className="mr-2 text-chart-1" size={20} /><span className="editable-text" data-unique-id="d62da288-b27a-4292-8f3b-cc448e36d53b" data-file-name="components/home/Experience.tsx">
              Professional Skills Development
            </span></h3>
            <p className="text-muted-foreground" data-unique-id="da9ab7bc-1ade-4d6a-8865-8419f4db9a75" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="800711c7-806e-4aab-ab48-a3875fc5c9f0" data-file-name="components/home/Experience.tsx">
              Through these professional experiences, I've developed expertise in library automation, 
              digital cataloging systems, collection management, and staff training — all following 
              international library science standards and best practices.
            </span></p>
          </div>
        </motion.div>
      </div>
    </section>;
}