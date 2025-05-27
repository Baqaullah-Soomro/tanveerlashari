'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, BookOpen, Database, Users, Calendar, MapPin, Award, Clock, Building, GraduationCap, BarChart, ChevronDown, ChevronUp, Target, Bookmark, CheckCircle } from 'lucide-react';

// Enhanced experience data with ATS-friendly structure following international standards
const experiences = [{
  id: "pharmacy-lib",
  title: "Faculty of Pharmacy Seminar Library",
  company: "University of Sindh",
  role: "Library Automation Specialist",
  period: "August 2023 - December 2023",
  duration: "5 months",
  location: "Jamshoro, Pakistan",
  industry: "Higher Education",
  description: "Led end-to-end implementation of library automation systems and physical infrastructure setup for the Faculty of Pharmacy's resource center.",
  icon: <BookOpen className="text-chart-1" size={24} />,
  logoUrl: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=150&auto=format&fit=crop",
  achievements: [{
    metric: "45%",
    description: "Improved resource access efficiency through Koha implementation"
  }, {
    metric: "2,500+",
    description: "Pharmacy resources cataloged and organized"
  }, {
    metric: "100%",
    description: "Staff trained on new automation systems"
  }],
  responsibilities: ["Coordinated library infrastructure setup and automation implementation", "Developed comprehensive collection with 2,500+ pharmacy resources", "Processed materials using standardized metadata protocols", "Implemented Dewey Decimal Classification for physical organization", "Deployed and configured Koha Library Management System", "Integrated circulation and cataloging automation systems", "Conducted staff and patron training for software/hardware systems", "Performed feasibility analysis for library automation initiatives"],
  skills: ["Koha LMS", "Metadata Standards", "Library Automation", "Staff Training"],
  keyTechnologies: ["Koha", "MARC21", "Z39.50", "Dublin Core"],
  color: "chart-1"
}, {
  id: "sindhi-lib",
  title: "Department of Sindhi Seminar Library",
  company: "University of Sindh",
  role: "Cataloging Specialist",
  period: "October 2022 - December 2022",
  duration: "3 months",
  location: "Jamshoro, Pakistan",
  industry: "Higher Education",
  description: "Specialized in cataloging and digitization of Sindhi language materials within the university's departmental library system.",
  icon: <Database className="text-chart-2" size={24} />,
  logoUrl: "https://picsum.photos/200",
  achievements: [{
    metric: "98%",
    description: "Cataloging accuracy rate for Sindhi language collection"
  }, {
    metric: "1,200+",
    description: "Language materials digitized and cataloged"
  }, {
    metric: "50+",
    description: "Daily circulation transactions processed"
  }],
  responsibilities: ["Cataloged and classified 1,200+ specialized Sindhi language materials", "Managed daily circulation processes averaging 50+ transactions", "Implemented Library Management System protocols and standards", "Created and migrated database entries from Excel to Koha"],
  skills: ["Cataloging", "Classification", "Data Migration", "Sindhi Literature"],
  keyTechnologies: ["MARC Records", "Excel", "Koha", "Z39.50"],
  color: "chart-2"
}, {
  id: "iba-lib",
  title: "IBA Seminar Library",
  company: "University of Sindh",
  role: "Library Systems Implementation Specialist",
  period: "September 2023 - October 2023",
  duration: "1 month",
  location: "Jamshoro, Pakistan",
  industry: "Higher Education",
  description: "Led the establishment and systems implementation for the Institute of Business Administration's new library facilities.",
  icon: <Users className="text-chart-3" size={24} />,
  logoUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=150&auto=format&fit=crop",
  achievements: [{
    metric: "65%",
    description: "Reduced catalog search time through system optimization"
  }, {
    metric: "100%",
    description: "Automation of circulation and cataloging processes"
  }, {
    metric: "3",
    description: "Staff members trained on library systems"
  }],
  responsibilities: ["Led new library setup including infrastructure planning and automation", "Developed collection policy for business reference materials", "Implemented international cataloging standards for academic resources", "Organized materials using Library of Congress Classification system", "Configured Koha with customized OPAC interface for business students", "Integrated barcode systems for circulation management", "Provided comprehensive staff training on automated library systems"],
  skills: ["System Implementation", "OPAC Configuration", "Barcode Integration", "Staff Training"],
  keyTechnologies: ["Koha", "OPAC", "LOC Classification", "Barcode Systems"],
  color: "chart-3"
}];
export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };
  return <section id="experience" className="py-24 bg-secondary/30 relative overflow-hidden" data-unique-id="d77c1ce4-68d8-44b8-a2ca-d2282852e479" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden" data-unique-id="50039a36-f5b9-4f12-97df-b30b45243004" data-file-name="components/home/Experience.tsx">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-chart-1/5 blur-3xl" data-unique-id="e96e390b-9249-4e5d-8d78-510205724796" data-file-name="components/home/Experience.tsx"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-chart-3/5 blur-3xl" data-unique-id="0fb6d436-baa0-4fc8-b3c9-eeaf0bce539d" data-file-name="components/home/Experience.tsx"></div>
      </div>
      
      <div className="container mx-auto px-6" data-unique-id="c42d99bf-8b1e-4b2d-8804-8a663952886d" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
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
      }} className="text-center mb-16" data-unique-id="a343b464-85ce-41f1-9077-09fb6d7c83d7" data-file-name="components/home/Experience.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="ba45900f-73a8-4c73-a78e-a87954d47980" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="21f6a617-d4b7-4a77-bf7f-0c6a1d72e034" data-file-name="components/home/Experience.tsx">
            Professional Experience
          </span></h2>
          <div className="h-1 w-20 bg-chart-2 mx-auto" data-unique-id="5fee9814-bd7c-4e45-a5ed-a791e3111534" data-file-name="components/home/Experience.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="d4ab879d-ce19-4019-a446-152a6242026f" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="05094402-f230-4682-ada5-4b1a393bac2c" data-file-name="components/home/Experience.tsx">
            My professional history demonstrates expertise in library systems,
            cataloging, and digital resource management aligned with international standards.
          </span></p>
        </motion.div>
        
        {/* Experience Cards - International Resume Format */}
        <div className="space-y-8" data-unique-id="b4b11c09-9259-4c76-a7f1-7b22c9f723f1" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
          {experiences.map((exp, index) => <motion.div key={exp.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.1
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="w-full" data-unique-id="4e25c81e-184d-45ea-8f27-810fdd21f484" data-file-name="components/home/Experience.tsx">
              <div className="bg-card rounded-xl shadow-md border border-border/30 overflow-hidden" data-unique-id="2fc9b187-73cc-4d76-a45d-ea0568a2dfc3" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                {/* Card Header */}
                <div className={`p-6 cursor-pointer ${expandedId === exp.id ? `bg-${exp.color}/5` : ''}`} onClick={() => toggleExpand(exp.id)} data-unique-id="96a4d345-fba2-400c-8937-0a09ef61b564" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                  <div className="flex items-start justify-between" data-unique-id="0943092f-408f-46e0-b207-315dc28dd3d9" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                    <div className="flex gap-4" data-unique-id="2e9be88f-fbee-4a78-8dd5-684da89f10b5" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                      {/* Company Logo */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden border border-border/30 shadow-sm flex-shrink-0" data-unique-id="7496ff93-9c9a-42de-a90a-2b63e8f571bd" data-file-name="components/home/Experience.tsx">
                        <img src={exp.logoUrl} alt={`${exp.company} logo`} className="w-full h-full object-cover" data-unique-id="ff3d60f8-2875-4ec0-aebc-f5971043c562" data-file-name="components/home/Experience.tsx" />
                      </div>
                      
                      {/* Job Title & Company */}
                      <div data-unique-id="25f183a6-442f-4a13-ae1d-8d12aeef0ab6" data-file-name="components/home/Experience.tsx">
                        <h3 className="text-xl font-bold" data-unique-id="d78b642a-b49d-4a26-9ec6-8bb19ae8dbfc" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.role}</h3>
                        <div className="flex items-center text-lg font-medium mt-1" data-unique-id="13a755ec-f90a-4ac6-b8e1-282579430f8c" data-file-name="components/home/Experience.tsx">
                          <Building size={16} className={`text-${exp.color} mr-2`} data-unique-id="839b653f-00de-4546-8198-0af8d2ade2a7" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                          <span data-unique-id="aac23cab-0e97-43f2-aa77-4785de9bd88e" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.title}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2" data-unique-id="bccd3d5f-638f-4444-9505-31450a76ca30" data-file-name="components/home/Experience.tsx">
                          <div className="flex items-center" data-unique-id="3db44326-14ed-488a-bb74-7935cc9580a5" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                            <Calendar size={14} className="mr-1.5" data-unique-id="75f800f4-cd8e-4bb3-987c-4ba1fecb8505" data-file-name="components/home/Experience.tsx" />
                            {exp.period}
                            <span className="ml-1.5 text-xs px-2 py-0.5 bg-secondary rounded-full" data-unique-id="b7b4396a-9b81-411a-b16d-5af037ad124c" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                              {exp.duration}
                            </span>
                          </div>
                          <div className="flex items-center" data-unique-id="3ab0e974-32e3-496f-84a7-5a782cfeeb81" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                            <MapPin size={14} className="mr-1.5" data-unique-id="3420a92f-b6be-4315-933d-f81ae7f12996" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Expand/Collapse button */}
                    <div className={`p-2 rounded-full transition-colors ${expandedId === exp.id ? `bg-${exp.color}/20` : 'bg-secondary'}`} data-unique-id="514a48ac-e304-45db-a59b-0a0ba6a07fe8" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                      {expandedId === exp.id ? <ChevronUp size={20} className={`text-${exp.color}`} data-unique-id="fe796369-56d1-46d8-af5a-5bc9f50c9bf2" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" /> : <ChevronDown size={20} data-unique-id="22dc26e2-6472-4103-8819-5e6682b3b1c4" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />}
                    </div>
                  </div>
                  
                  {/* Short description visible by default */}
                  <p className="text-muted-foreground mt-4 line-clamp-2" data-unique-id="25f0960a-d8d2-41df-8641-15cb77525965" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                    {exp.description}
                  </p>
                  
                  {/* Key metrics/achievements as badges - Always visible */}
                  <div className="flex flex-wrap gap-2 mt-4" data-unique-id="6a724cd0-4688-403b-9936-5f1cce5193d7" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                    {exp.achievements.map((achievement, i) => <div key={i} className={`bg-${exp.color}/10 border border-${exp.color}/20 rounded-lg px-3 py-2 inline-flex items-center gap-2`} data-unique-id="12138e66-651b-4c36-bc72-da175e1e1a34" data-file-name="components/home/Experience.tsx">
                        <div className={`text-${exp.color} font-bold text-lg`} data-unique-id="6abab4d2-990e-4981-bd88-c7cdffafb218" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                          {achievement.metric}
                        </div>
                        <div className="text-xs text-muted-foreground" data-unique-id="11a750af-c199-4ba8-9b9a-f9708bbb7514" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                          {achievement.description}
                        </div>
                      </div>)}
                  </div>
                </div>
                
                {/* Expandable section */}
                <AnimatePresence data-unique-id="698c8ea4-4d95-49ed-bcb6-b93d2c64f32d" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                  {expandedId === exp.id && <motion.div initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: 'auto',
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} transition={{
                duration: 0.3
              }} className="overflow-hidden" data-unique-id="bc21a0ec-f718-400b-b94b-5027e19f9773" data-file-name="components/home/Experience.tsx">
                      <div className={`p-6 pt-0 border-t border-border/30 mt-4 bg-${exp.color}/5`} data-unique-id="ee2c907e-dc56-4d29-9b1e-1e67a3840507" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-unique-id="82a5bfd0-3ec6-46eb-904f-b743bfd36050" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                          {/* Left column - Responsibilities */}
                          <div data-unique-id="8cd6266d-7cb5-4204-a338-4a1ec5623f0d" data-file-name="components/home/Experience.tsx">
                            <h4 className="font-bold text-lg flex items-center mb-3" data-unique-id="6b299203-a485-4d37-afa3-e4cab196f71d" data-file-name="components/home/Experience.tsx">
                              <Target size={16} className={`text-${exp.color} mr-2`} data-unique-id="c731ac7a-6995-452d-9fb4-bae9c86f862c" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" /><span className="editable-text" data-unique-id="6b7415e5-078c-4edb-a7a9-d7ebe7f12f0f" data-file-name="components/home/Experience.tsx">
                              Key Responsibilities
                            </span></h4>
                            <ul className="space-y-2" data-unique-id="81d49770-c152-45ec-9463-f40a82ff6ce2" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                              {exp.responsibilities.map((item, i) => <motion.li key={i} initial={{
                          opacity: 0,
                          x: -10
                        }} animate={{
                          opacity: 1,
                          x: 0
                        }} transition={{
                          delay: i * 0.05
                        }} className="flex items-start" data-unique-id="81143386-32eb-4b7a-b636-005b9068c193" data-file-name="components/home/Experience.tsx">
                                  <CheckCircle size={14} className={`text-${exp.color} mt-1 mr-2 flex-shrink-0`} data-unique-id="1ae9b702-ea02-4339-b726-558beb52aa28" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                                  <span className="text-sm" data-unique-id="d0495e99-38c0-46b7-bd7b-8137cddd39f7" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{item}</span>
                                </motion.li>)}
                            </ul>
                          </div>
                          
                          {/* Right column - Skills & Technologies */}
                          <div data-unique-id="9f8db604-d4cf-45b1-a8c6-fb99300987bb" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                            {/* Skills */}
                            <h4 className="font-bold text-lg flex items-center mb-3" data-unique-id="0f18f24a-ff80-4ab2-a320-d52c4b60b5bc" data-file-name="components/home/Experience.tsx">
                              <Bookmark size={16} className={`text-${exp.color} mr-2`} data-unique-id="33f3b438-4c31-4cba-836a-fdf70d676b6c" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" /><span className="editable-text" data-unique-id="e16c0789-cec0-4cac-9c9b-c524f48d7774" data-file-name="components/home/Experience.tsx">
                              Core Skills
                            </span></h4>
                            <div className="flex flex-wrap gap-2 mb-6" data-unique-id="32b27af7-cfb2-47d1-a2a1-646895d351a6" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                              {exp.skills.map((skill, i) => <motion.span key={i} initial={{
                          opacity: 0,
                          scale: 0.8
                        }} animate={{
                          opacity: 1,
                          scale: 1
                        }} transition={{
                          delay: i * 0.05
                        }} className={`bg-${exp.color}/10 text-${exp.color} text-xs font-medium px-3 py-1.5 rounded-full`} data-unique-id="f76ceb8f-50bf-49ba-a463-97a809aff194" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                                  {skill}
                                </motion.span>)}
                            </div>
                            
                            {/* Technologies */}
                            <h4 className="font-bold text-lg flex items-center mb-3" data-unique-id="9bfd5eb7-230f-4809-95ba-44dfc0099c36" data-file-name="components/home/Experience.tsx">
                              <Database size={16} className={`text-${exp.color} mr-2`} data-unique-id="4fc3617e-9251-413d-856d-45ffbe4dea64" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" /><span className="editable-text" data-unique-id="9ccdc655-fff3-492c-9ef5-32b859326c04" data-file-name="components/home/Experience.tsx">
                              Key Technologies
                            </span></h4>
                            <div className="flex flex-wrap gap-2" data-unique-id="b4d4d0e3-faaa-4e2a-9bea-a3a9526b57cf" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                              {exp.keyTechnologies.map((tech, i) => <motion.span key={i} initial={{
                          opacity: 0,
                          scale: 0.8
                        }} animate={{
                          opacity: 1,
                          scale: 1
                        }} transition={{
                          delay: 0.2 + i * 0.05
                        }} className="bg-secondary text-muted-foreground text-xs px-3 py-1.5 rounded-full" data-unique-id="2279acfc-c1f9-44d5-b932-bc2fef06cb26" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                                  {tech}
                                </motion.span>)}
                            </div>
                          </div>
                        </div>
                        
                        {/* Industry Context */}
                        <div className="mt-6 pt-4 border-t border-border/30" data-unique-id="b27aa9e4-50b1-4285-be7c-d4dcde16aece" data-file-name="components/home/Experience.tsx">
                          <div className="flex items-center text-sm" data-unique-id="5c7beb21-3759-4eb9-b690-38e5c154989e" data-file-name="components/home/Experience.tsx">
                            <BarChart size={14} className={`text-${exp.color} mr-2`} data-unique-id="1adee9d1-bd42-4b8e-ab8f-1faa36000d5c" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                            <span className="font-medium" data-unique-id="e5a92664-9b0d-45b2-bb39-e68cb2e599d0" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="74e3645b-85e2-411e-b319-41b271ce2369" data-file-name="components/home/Experience.tsx">Industry:</span></span>
                            <span className="ml-2 text-muted-foreground" data-unique-id="c789e8d6-7104-4f76-a52f-da3bcb7bc40f" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.industry}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>}
                </AnimatePresence>
              </div>
            </motion.div>)}
        </div>
        
        {/* Professional Summary */}
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
        delay: 0.3
      }} className="max-w-3xl mx-auto mt-16 text-center" data-unique-id="e9df2fe0-12ee-4334-a0ae-cf34278da9ef" data-file-name="components/home/Experience.tsx">
          <div className="bg-card p-6 rounded-xl shadow-md border border-chart-1/20" data-unique-id="c6285d39-6344-4007-a04a-11f3cdddab5b" data-file-name="components/home/Experience.tsx">
            <h3 className="text-xl font-bold mb-4 flex items-center justify-center" data-unique-id="190ec90f-e9d8-4253-be42-3a350b33f464" data-file-name="components/home/Experience.tsx">
              <Award className="mr-2 text-chart-1" size={20} /><span className="editable-text" data-unique-id="41853a25-b2be-4d6c-ac91-8dc9e1f97850" data-file-name="components/home/Experience.tsx">
              Professional Summary
            </span></h3>
            <p className="text-muted-foreground" data-unique-id="86a801b3-0c18-4532-8a9e-9e873ea855fd" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="d5a304cb-2a9d-4b2b-a72d-dc7b1535c041" data-file-name="components/home/Experience.tsx">
              Through these experiences, I've developed expertise in library automation systems, 
              digital cataloging methodologies, collection management strategies, and professional 
              staff training programs — all aligned with international library science standards.
            </span></p>
          </div>
        </motion.div>
      </div>
    </section>;
}