'use client';

import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Database, Users } from 'lucide-react';
const experiences = [{
  title: "Faculty of Pharmacy Seminar Library",
  icon: <BookOpen className="text-chart-1" size={24} />,
  responsibilities: ["Implemented and managed Koha library management software", "Cataloged and processed technical records for pharmacy publications", "Organized and maintained digital archives of research papers", "Assisted students and faculty with research and information retrieval"],
  iconBg: "bg-chart-1/10"
}, {
  title: "Department of Sindhi Seminar Library",
  icon: <Database className="text-chart-2" size={24} />,
  responsibilities: ["Developed and maintained digital catalog of Sindhi literature", "Conducted training sessions for library staff on digital systems", "Implemented metadata standards for cultural and historical texts", "Created digital preservation strategies for rare manuscripts"],
  iconBg: "bg-chart-2/10"
}, {
  title: "IBA Seminar Library",
  icon: <Users className="text-chart-3" size={24} />,
  responsibilities: ["Coordinated library automation projects using Koha", "Managed digital resources and e-book collections", "Conducted user training sessions on library database usage", "Collaborated on developing information literacy programs"],
  iconBg: "bg-chart-3/10"
}];
export default function Experience() {
  return <section id="experience" className="py-24" data-unique-id="c25b7788-fe52-4a72-a354-c9767b369c19" data-file-name="components/home/Experience.tsx">
      <div className="container mx-auto px-6" data-unique-id="c47f1571-4ac9-4921-b648-882b715234d5" data-file-name="components/home/Experience.tsx">
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
      }} className="text-center mb-16" data-unique-id="fb79fc79-2c14-4cb2-b29d-3cbaead89f62" data-file-name="components/home/Experience.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="895e60b7-70a1-4f60-86d7-42270499d592" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="276cd5f0-d3ef-48ee-a415-10810fc03267" data-file-name="components/home/Experience.tsx">Professional Experience</span></h2>
          <div className="h-1 w-20 bg-chart-2 mx-auto" data-unique-id="d14e4b49-0832-4461-9e60-774cc4966356" data-file-name="components/home/Experience.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="e0b8b9cc-78d6-4e8d-953b-1419b2bf2695" data-file-name="components/home/Experience.tsx"><span className="editable-text" data-unique-id="66fdd5c8-e12e-4100-b2e9-235717dd6cf7" data-file-name="components/home/Experience.tsx">
            My internship experiences have equipped me with practical knowledge in library systems,
            cataloging, and digital resource management.
          </span></p>
        </motion.div>
        
        <div className="relative" data-unique-id="26d4a302-a236-4959-a876-8e9e85e32b25" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border" data-unique-id="f2527b28-593e-4ac7-be28-c14beca18636" data-file-name="components/home/Experience.tsx"></div>
          
          <div className="space-y-12 lg:space-y-24 relative" data-unique-id="7a961959-4c61-4933-b94b-2bcfbd647bea" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
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
          }} className="relative" data-unique-id="e5574b0e-fc71-4831-84b0-801645845f35" data-file-name="components/home/Experience.tsx">
                <div className={`lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} data-unique-id="0e8f629a-3280-415c-b651-7ba37ba57fdb" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2" data-unique-id="a782165e-7a22-4001-94b5-2613413fab8c" data-file-name="components/home/Experience.tsx">
                    <div className="w-8 h-8 bg-chart-1 rounded-full flex items-center justify-center" data-unique-id="ae483f67-ab7c-4ee3-86d3-a4f7768b7818" data-file-name="components/home/Experience.tsx">
                      <Briefcase className="text-white" size={16} data-unique-id="9dde7888-9099-4a67-8367-de33c8487461" data-file-name="components/home/Experience.tsx" data-dynamic-text="true" />
                    </div>
                  </div>
                  
                  {/* Content card - alternates sides */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`} data-unique-id="01fe819d-b4d0-446b-94c9-ef42970e0891" data-file-name="components/home/Experience.tsx">
                    <div className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow" data-unique-id="8181c728-5827-4127-9c52-752a41ab8e16" data-file-name="components/home/Experience.tsx">
                      <div className={`flex items-center ${index % 2 === 0 ? 'lg:justify-end' : ''}`} data-unique-id="298a8c98-49fe-4c73-adcd-dca1103d8f4e" data-file-name="components/home/Experience.tsx">
                        <div className={`${exp.iconBg} p-3 rounded-full mr-4 lg:order-${index % 2 === 0 ? '2 lg:ml-4 lg:mr-0' : '1'}`} data-unique-id="d6c3fd71-af67-4182-afac-db338a95568d" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                          {exp.icon}
                        </div>
                        <h3 className="text-xl font-bold" data-unique-id="7fd8af7d-41b6-410a-a5b6-c94184b557aa" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{exp.title}</h3>
                      </div>
                      
                      <ul className={`mt-6 space-y-3 ${index % 2 === 0 ? 'lg:text-right' : ''}`} data-unique-id="de275439-3fc9-45ba-a40d-78ae69b1101e" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">
                        {exp.responsibilities.map((item, i) => <li key={i} className="flex items-start" data-unique-id="450177b0-cd59-4c66-bfdc-71d78a8a450a" data-file-name="components/home/Experience.tsx">
                            <span className={`h-1.5 w-1.5 rounded-full bg-chart-1 mt-2 ${index % 2 === 0 ? 'lg:order-2 lg:ml-3' : 'mr-3'}`} data-unique-id="2afb217a-17bb-4679-a9aa-e5743708a4f1" data-file-name="components/home/Experience.tsx"></span>
                            <span data-unique-id="e185cf96-1296-4e46-9631-589dd695fddd" data-file-name="components/home/Experience.tsx" data-dynamic-text="true">{item}</span>
                          </li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}