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
  logoUrl: "https://images.unsplash.com/photo-1529158062015-f3421c2705f0?q=80&w=150&auto=format&fit=crop",
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
  return <section id="experience" className="py-24 bg-secondary/30 relative overflow-hidden" data-unique-id="930cd863-def6-44a3-ba63-be1854b221b7" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden" data-unique-id="f12d18f7-390a-422a-afa4-0b43f9586de3" data-file-name="components/home/Experience.tsx">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-chart-1/5 blur-3xl" data-unique-id="53d54cea-58aa-45e7-b546-6f74d3deeb8a" data-file-name="components/home/Experience.tsx"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-chart-3/5 blur-3xl" data-unique-id="b327566b-7eed-40d9-b6fa-3fabb9d0d58d" data-file-name="components/home/Experience.tsx"></div>
      </div>
      
      <div className="container mx-auto px-6" data-unique-id="d3eb353d-3588-4eb3-92f4-356f7d512b89" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
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
      }} className="text-center mb-16" data-unique-id="8d088d45-cea7-4842-a269-db7f8cbbb297" data-file-name="components/home/Experience.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="c3f77118-acf9-41ef-af22-99fda8512fd1" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="321549b5-2263-434b-b3f0-f3f3e319ff88" data-file-name="components/home/Experience.tsx">
            Professional Experience
          </span></h2>
          <div className="h-1 w-20 bg-chart-2 mx-auto" data-unique-id="0a04d123-5faf-4607-a080-0d74c7a94f9b" data-file-name="components/home/Experience.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="075c3780-d2b8-4818-b60a-7714d6900bae" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="41bb3c6b-2208-4bcd-a802-099ec648750b" data-file-name="components/home/Experience.tsx">
            My professional history demonstrates expertise in library systems,
            cataloging, and digital resource management aligned with international standards.
          </span></p>
        </motion.div>
        
        {/* Experience Cards - International Resume Format */}
        <div className="space-y-8" data-unique-id="e9f1c706-4f25-44cf-8c32-6cfb8c007bf4" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
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
        }} className="w-full" data-unique-id="a7ebc8af-bb52-4968-b1d1-a08a4588ec43" data-file-name="components/home/Experience.tsx">
              <div className="bg-card rounded-xl shadow-md border border-border/30 overflow-hidden" data-unique-id="58e15548-2508-4328-812b-7e603584e1ac" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                {/* Card Header */}
                <div className={`p-6 cursor-pointer ${expandedId === exp.id ? `bg-${exp.color}/5` : ''}`} onClick={() => toggleExpand(exp.id)} data-unique-id="2e5bed4d-242b-487b-b054-b5c12792eba8" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                  <div className="flex items-start justify-between" data-unique-id="229ba395-d5e8-42ce-8415-5d2cdfbc707a" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                    <div className="flex gap-4" data-unique-id="c753f469-fbfd-48d0-ae76-f42d18122e3c" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                      {/* Company Logo */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden border border-border/30 shadow-sm flex-shrink-0" data-unique-id="33d03b4f-c2d6-4f9d-b730-185c8741a07f" data-file-name="components/home/Experience.tsx">
                        <img src={exp.logoUrl} alt={`${exp.company} logo`} className="w-full h-full object-cover" data-unique-id="4deee70f-5f72-4923-a2c0-4de2db59c1d2" data-file-name="components/home/Experience.tsx" />
                      </div>
                      
                      {/* Job Title & Company */}
                      <div data-unique-id="2a61e80b-3350-4de9-b6ab-a0442f83cb5f" data-file-name="components/home/Experience.tsx">
                        <h3 className="text-xl font-bold" data-unique-id="437e3b89-275a-49e3-bb65-b18c375cdb1e" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.role}</h3>
                        <div className="flex items-center text-lg font-medium mt-1" data-unique-id="753cf74a-814e-40fe-918a-3d82493323b1" data-file-name="components/home/Experience.tsx">
                          <Building size={16} className={`text-${exp.color} mr-2`} data-unique-id="f3979252-8557-4b4c-a049-cbf10a8ce9f7" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                          <span data-unique-id="39dc99af-3ba8-4bf4-91cc-675dd75854d0" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.title}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2" data-unique-id="1ad979f9-2e6f-46f8-ae1b-14cbce8fd1d0" data-file-name="components/home/Experience.tsx">
                          <div className="flex items-center" data-unique-id="4bc619d5-9c35-450c-84c2-33446e042331" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                            <Calendar size={14} className="mr-1.5" data-unique-id="3e3ef342-8228-446a-9f8f-25e9a6d20e33" data-file-name="components/home/Experience.tsx" />
                            {exp.period}
                            <span className="ml-1.5 text-xs px-2 py-0.5 bg-secondary rounded-full" data-unique-id="2b335999-927d-4eae-8d96-b9cabb043deb" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                              {exp.duration}
                            </span>
                          </div>
                          <div className="flex items-center" data-unique-id="6a6b3db0-bd33-4114-8dd2-c75f7b149478" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                            <MapPin size={14} className="mr-1.5" data-unique-id="85ac7377-9d9a-45e4-b289-0f2cce3045b8" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Expand/Collapse button */}
                    <div className={`p-2 rounded-full transition-colors ${expandedId === exp.id ? `bg-${exp.color}/20` : 'bg-secondary'}`} data-unique-id="5005c420-271c-4f71-bd7b-ed0675b06cea" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                      {expandedId === exp.id ? <ChevronUp size={20} className={`text-${exp.color}`} data-unique-id="bf627646-f1ba-4e95-81ba-5b4d3bca9e67" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" /> : <ChevronDown size={20} data-unique-id="d30772be-a1f4-4b7f-b65a-a7a0cd2a9948" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />}
                    </div>
                  </div>
                  
                  {/* Short description visible by default */}
                  <p className="text-muted-foreground mt-4 line-clamp-2" data-unique-id="f4769aa1-04dc-4a42-aa79-424c02b6774e" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                    {exp.description}
                  </p>
                  
                  {/* Key metrics/achievements as badges - Always visible */}
                  <div className="flex flex-wrap gap-2 mt-4" data-unique-id="2799c556-8c99-411a-9c4f-5a86813630b7" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                    {exp.achievements.map((achievement, i) => <div key={i} className={`bg-${exp.color}/10 border border-${exp.color}/20 rounded-lg px-3 py-2 inline-flex items-center gap-2`} data-unique-id="56bc1000-78a2-42fb-93c9-f5ab8e03494d" data-file-name="components/home/Experience.tsx">
                        <div className={`text-${exp.color} font-bold text-lg`} data-unique-id="5718f437-9ddf-4de6-a689-7e04c447c437" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                          {achievement.metric}
                        </div>
                        <div className="text-xs text-muted-foreground" data-unique-id="7013c3f2-0fd0-48ac-9f7e-6d56333e43f6" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                          {achievement.description}
                        </div>
                      </div>)}
                  </div>
                </div>
                
                {/* Expandable section */}
                <AnimatePresence data-unique-id="ab142ecf-2557-4471-a139-1853fb87b20a" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
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
              }} className="overflow-hidden" data-unique-id="706c8eef-41f3-4488-a355-19586b02f806" data-file-name="components/home/Experience.tsx">
                      <div className={`p-6 pt-0 border-t border-border/30 mt-4 bg-${exp.color}/5`} data-unique-id="b7b4c8f8-a5bf-4dd7-ab54-cebc660f5941" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-unique-id="f0111635-568a-4dcb-8aaa-7f0a7a695dd7" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                          {/* Left column - Responsibilities */}
                          <div data-unique-id="373622f3-56e6-4b13-b3d1-487ae658e3b2" data-file-name="components/home/Experience.tsx">
                            <h4 className="font-bold text-lg flex items-center mb-3" data-unique-id="96220a05-7f6b-45ed-9e02-ca4fee162061" data-file-name="components/home/Experience.tsx">
                              <Target size={16} className={`text-${exp.color} mr-2`} data-unique-id="9790659a-acc9-4a56-9270-065a9ab29503" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" /><span className="editable-text" data-unique-id="74e310e5-09bd-4738-92ad-5365e557923b" data-file-name="components/home/Experience.tsx">
                              Key Responsibilities
                            </span></h4>
                            <ul className="space-y-2" data-unique-id="78be7a01-1537-4b34-9c66-9c3bb3d92fb7" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                              {exp.responsibilities.map((item, i) => <motion.li key={i} initial={{
                          opacity: 0,
                          x: -10
                        }} animate={{
                          opacity: 1,
                          x: 0
                        }} transition={{
                          delay: i * 0.05
                        }} className="flex items-start" data-unique-id="55c744a4-acff-4bf8-a84c-75eb71b361f6" data-file-name="components/home/Experience.tsx">
                                  <CheckCircle size={14} className={`text-${exp.color} mt-1 mr-2 flex-shrink-0`} data-unique-id="c9d05930-8151-4ad0-abcd-f2b205be2ff8" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                                  <span className="text-sm" data-unique-id="7f371cac-4a55-4ce6-8f6f-fc32e9a9f60f" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{item}</span>
                                </motion.li>)}
                            </ul>
                          </div>
                          
                          {/* Right column - Skills & Technologies */}
                          <div data-unique-id="53cc6767-9ae6-48e3-9f5e-b2a298ccec1f" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                            {/* Skills */}
                            <h4 className="font-bold text-lg flex items-center mb-3" data-unique-id="88afe1b3-8061-4586-922e-27e2915b88fc" data-file-name="components/home/Experience.tsx">
                              <Bookmark size={16} className={`text-${exp.color} mr-2`} data-unique-id="4e397d04-9448-4b23-aca8-96181f7f67f4" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" /><span className="editable-text" data-unique-id="804ae9a1-fbaa-41e1-b975-aabff2a89228" data-file-name="components/home/Experience.tsx">
                              Core Skills
                            </span></h4>
                            <div className="flex flex-wrap gap-2 mb-6" data-unique-id="8b4d838b-4633-4a33-961c-a06c59ac8335" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                              {exp.skills.map((skill, i) => <motion.span key={i} initial={{
                          opacity: 0,
                          scale: 0.8
                        }} animate={{
                          opacity: 1,
                          scale: 1
                        }} transition={{
                          delay: i * 0.05
                        }} className={`bg-${exp.color}/10 text-${exp.color} text-xs font-medium px-3 py-1.5 rounded-full`} data-unique-id="3e936683-0660-470c-969d-3972853d1411" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                                  {skill}
                                </motion.span>)}
                            </div>
                            
                            {/* Technologies */}
                            <h4 className="font-bold text-lg flex items-center mb-3" data-unique-id="8d944190-177f-4af7-8340-d3526ef56982" data-file-name="components/home/Experience.tsx">
                              <Database size={16} className={`text-${exp.color} mr-2`} data-unique-id="60e007f2-e316-44cd-ae9a-4bba7633d999" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" /><span className="editable-text" data-unique-id="01008955-d4c7-4d5d-863d-d69794bb76c1" data-file-name="components/home/Experience.tsx">
                              Key Technologies
                            </span></h4>
                            <div className="flex flex-wrap gap-2" data-unique-id="6d92cfc0-ac2b-4af3-9075-cbee161f2571" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                              {exp.keyTechnologies.map((tech, i) => <motion.span key={i} initial={{
                          opacity: 0,
                          scale: 0.8
                        }} animate={{
                          opacity: 1,
                          scale: 1
                        }} transition={{
                          delay: 0.2 + i * 0.05
                        }} className="bg-secondary text-muted-foreground text-xs px-3 py-1.5 rounded-full" data-unique-id="40e4b535-5cde-445e-9ae2-2d56a89ac54e" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                                  {tech}
                                </motion.span>)}
                            </div>
                          </div>
                        </div>
                        
                        {/* Industry Context */}
                        <div className="mt-6 pt-4 border-t border-border/30" data-unique-id="b0d3e056-2eb7-47ee-a22b-a53202a89b0d" data-file-name="components/home/Experience.tsx">
                          <div className="flex items-center text-sm" data-unique-id="5efa249b-4ba0-44ac-901a-9af5dc5fe618" data-file-name="components/home/Experience.tsx">
                            <BarChart size={14} className={`text-${exp.color} mr-2`} data-unique-id="0a998a30-4933-41e5-9d6e-c1620eb91005" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                            <span className="font-medium" data-unique-id="7d687562-0563-402d-981e-7ac91debfe66" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="090c3581-ab7f-4775-ab82-be763073fa6d" data-file-name="components/home/Experience.tsx">Industry:</span></span>
                            <span className="ml-2 text-muted-foreground" data-unique-id="5290474b-1f4c-4fcf-a2d6-e6bc8065a2d9" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.industry}</span>
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
      }} className="max-w-3xl mx-auto mt-16 text-center" data-unique-id="720dec84-e6bf-437d-a023-e9c57ea869b5" data-file-name="components/home/Experience.tsx">
          <div className="bg-card p-6 rounded-xl shadow-md border border-chart-1/20" data-unique-id="25514150-6ee6-4461-b393-f6fe11a8f8d8" data-file-name="components/home/Experience.tsx">
            <h3 className="text-xl font-bold mb-4 flex items-center justify-center" data-unique-id="57e4a62a-266f-4e91-aab8-f2c1c12f08c5" data-file-name="components/home/Experience.tsx">
              <Award className="mr-2 text-chart-1" size={20} /><span className="editable-text" data-unique-id="a2e2f3c0-38f5-4a4d-892f-40842f07b551" data-file-name="components/home/Experience.tsx">
              Professional Summary
            </span></h3>
            <p className="text-muted-foreground" data-unique-id="cea257a9-e1d5-4d14-a157-b825b1ce91e0" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="fc1dc51e-5288-4296-837a-c877ae2edb70" data-file-name="components/home/Experience.tsx">
              Through these experiences, I've developed expertise in library automation systems, 
              digital cataloging methodologies, collection management strategies, and professional 
              staff training programs — all aligned with international library science standards.
            </span></p>
          </div>
        </motion.div>
      </div>
    </section>;
}