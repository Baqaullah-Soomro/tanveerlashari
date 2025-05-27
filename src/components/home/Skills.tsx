'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, BookOpen, PenTool, Languages, Clock, UsersRound, BookText, Monitor, Info } from 'lucide-react';
const skillCategories = [{
  title: "Core Library & Technical Skills",
  color: "border-chart-1",
  icon: <BookText className="text-chart-1" />,
  skills: [{
    name: "Koha Library Software",
    level: 95,
    icon: <Monitor />,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
    description: "Expert in implementing and managing Koha Library Management System"
  }, {
    name: "Library Digitalization",
    level: 90,
    icon: <PenTool />,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    description: "Skilled in digital conversion and preservation of library resources"
  }, {
    name: "Cataloging & Classification",
    level: 95,
    icon: <Database />,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    description: "Advanced knowledge of library cataloging and classification systems"
  }, {
    name: "Library Automation",
    level: 90,
    icon: <BookText />,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    description: "Experienced in automating library processes and workflows"
  }, {
    name: "Library Organization & Management",
    level: 85,
    icon: <BookOpen />,
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
    description: "Competent in organizing and managing library resources efficiently"
  }]
}, {
  title: "Soft Skills",
  color: "border-chart-2",
  icon: <UsersRound className="text-chart-2" />,
  skills: [{
    name: "Communication Skills",
    level: 90,
    icon: <UsersRound />,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
    description: "Effective verbal and written communication across diverse audiences"
  }, {
    name: "Research Skills",
    level: 95,
    icon: <BookOpen />,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    description: "Advanced research methodology and information retrieval capabilities"
  }, {
    name: "Time Management",
    level: 85,
    icon: <Clock />,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    description: "Excellent at prioritizing tasks and managing multiple projects effectively"
  }, {
    name: "Teaching & Instructions",
    level: 80,
    icon: <UsersRound />,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    description: "Experience in training library staff and patrons on systems and resources"
  }, {
    name: "Information Literacy",
    level: 90,
    icon: <Database />,
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
    description: "Skilled in helping users efficiently find, evaluate and use information"
  }]
}, {
  title: "Languages",
  color: "border-chart-3",
  icon: <Languages className="text-chart-3" />,
  skills: [{
    name: "English",
    level: 90,
    icon: <Languages />,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
    description: "Excellence in reading, writing, and speaking English"
  }, {
    name: "Sindhi",
    level: 100,
    icon: <Languages />,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    description: "Fluent native proficiency in Sindhi language"
  }, {
    name: "Urdu",
    level: 95,
    icon: <Languages />,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    description: "Fluent in reading, writing, and speaking Urdu"
  }]
}];
export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<{
    name: string;
    description: string;
    level: number;
    categoryIndex: number;
  } | null>(null);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return <section id="skills" className="py-24" data-unique-id="ec94c179-459c-4fab-8f19-393deb67dff7" data-file-name="components/home/Skills.tsx">
      <div className="container mx-auto px-6" data-unique-id="4e700bd1-01d6-4789-aa2f-05c5dc07bd29" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
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
      }} className="text-center mb-16" data-unique-id="aceae333-ec4d-4eb9-9fdf-e343fb296cdb" data-file-name="components/home/Skills.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="78262d40-249d-48dc-b572-6fa0aae2fae2" data-file-name="components/home/Skills.tsx">
            <span className="editable-text" data-unique-id="be96c573-3d9b-41ec-b429-a8b5ecd32570" data-file-name="components/home/Skills.tsx">Skills & Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-chart-3 mx-auto" data-unique-id="25017bf1-81bd-42db-9af4-d91f9ef895bd" data-file-name="components/home/Skills.tsx"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6" data-unique-id="f3c2605a-c2f4-4374-b903-98b3441fa18b" data-file-name="components/home/Skills.tsx"><span className="editable-text" data-unique-id="8592c2b7-30e6-4c2a-a7e2-e00f6ca323e3" data-file-name="components/home/Skills.tsx">
            My professional skills encompass both technical library science competencies and essential soft skills needed for effective information management.
          </span></p>
        </motion.div>
        
        {/* Skill Tooltip */}
        {activeSkill && <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="bg-card shadow-lg p-4 rounded-lg border border-chart-1/20 max-w-lg mx-auto mb-10 relative" data-unique-id="5984dc5a-6b9c-4767-9eb0-b6b75e4173e7" data-file-name="components/home/Skills.tsx">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-card rotate-45 border-t border-l border-chart-1/20" data-unique-id="a4b16c8a-19b4-4bcc-87ac-2c84138c6817" data-file-name="components/home/Skills.tsx"></div>
            <div className="flex items-start gap-4" data-unique-id="2090160e-d1a4-44eb-9cae-ea60e6c87c2f" data-file-name="components/home/Skills.tsx">
              <div className={`p-3 rounded-full bg-chart-${activeSkill.categoryIndex + 1}/10`} data-unique-id="42ea5a24-9924-4703-84e9-3249e6af1e31" data-file-name="components/home/Skills.tsx">
                <Info className={`text-chart-${activeSkill.categoryIndex + 1}`} size={24} />
              </div>
              <div data-unique-id="b844d7f8-fdb8-4d27-ae43-6e3f42b73b33" data-file-name="components/home/Skills.tsx">
                <div className="flex items-center justify-between" data-unique-id="98668120-16d2-4794-928a-55b6100a1d24" data-file-name="components/home/Skills.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="9994442f-05fe-4cd3-b810-fa451e9ed47b" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.name}</h4>
                  <span className="text-sm font-semibold text-chart-1" data-unique-id="069fc42d-c2e9-42a1-bf7c-b67f61be6a44" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.level}<span className="editable-text" data-unique-id="9cad67e5-a7c0-4d24-961a-ebc03d7fec79" data-file-name="components/home/Skills.tsx">%</span></span>
                </div>
                <div className="w-full h-1.5 bg-muted rounded-full mt-2 mb-3" data-unique-id="48d611fa-eed8-4197-9bcb-9b260e3b443a" data-file-name="components/home/Skills.tsx">
                  <motion.div initial={{
                width: 0
              }} animate={{
                width: `${activeSkill.level}%`
              }} transition={{
                duration: 0.8,
                ease: "easeOut"
              }} className={`h-full bg-chart-${activeSkill.categoryIndex + 1} rounded-full`} data-unique-id="020fb735-3870-4d8d-955a-dfd9cc2e3233" data-file-name="components/home/Skills.tsx" />
                </div>
                <p className="text-muted-foreground" data-unique-id="08311e5a-0d62-4168-80fd-2f5f1b3b929a" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.description}</p>
              </div>
            </div>
          </motion.div>}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12" data-unique-id="4102a6b9-e402-428b-a032-335af833eace" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
          {skillCategories.map((category, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.2
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className={`bg-card p-8 rounded-lg shadow-md border-t-4 ${category.color} hover:shadow-xl transition-shadow`} data-unique-id="c0b59931-c1f3-4f35-b208-e39b4db6159e" data-file-name="components/home/Skills.tsx">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b" data-unique-id="1f9db4db-6093-4146-ada1-e41cd0c56ab2" data-file-name="components/home/Skills.tsx">
                <div className={`p-2 rounded-md bg-chart-${index + 1}/10`} data-unique-id="83c97b44-eceb-4910-907a-0cfa4a52aaf7" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold" data-unique-id="cdcc5d72-50b3-4b23-9904-1dadcfaea40e" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{category.title}</h3>
              </div>
              
              <motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} className="space-y-4" data-unique-id="e1424347-2cf9-4527-a89a-10e47817a129" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
                {category.skills.map((skill, skillIndex) => <motion.li key={skillIndex} variants={itemVariants} onClick={() => setActiveSkill({
              name: skill.name,
              description: skill.description,
              level: skill.level,
              categoryIndex: index
            })} className="flex items-center gap-3 p-4 rounded-lg transition-all hover:bg-accent group cursor-pointer shadow-sm hover:shadow-md border border-transparent hover:border-chart-1/20 hover:-translate-y-1" whileHover={{
              backgroundColor: `rgba(var(--chart-${index + 1}-rgb), 0.05)`
            }} transition={{
              type: "spring",
              stiffness: 400,
              damping: 20
            }} data-unique-id="696fa2c1-1d00-40b8-a87a-6fd41d82f5dd" data-file-name="components/home/Skills.tsx">
                    <div className={`p-3 rounded-full ${skill.bgColor} ${skill.color} transition-all group-hover:scale-110 shadow-inner`} data-unique-id="9d521428-848d-41ca-86be-e0b3688d1869" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
                      {skill.icon}
                    </div>
                    <div className="flex-1" data-unique-id="b0230e79-b424-4ec0-9c13-85a7cc2cf4d2" data-file-name="components/home/Skills.tsx">
                      <div className="flex justify-between items-center" data-unique-id="43730b8d-9d13-45fa-8ee6-615034a89ba5" data-file-name="components/home/Skills.tsx">
                        <span className="font-medium text-lg" data-unique-id="b5f46293-3153-434b-bf46-91cebe299ffb" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{skill.name}</span>
                        <span className="text-xs font-semibold px-2 py-1 rounded-md bg-chart-1 text-white" data-unique-id="73ee7421-a8ab-4a4f-9a7a-61ae69ecc60d" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{skill.level}<span className="editable-text" data-unique-id="50879b32-b6a4-4754-8270-a342a967b454" data-file-name="components/home/Skills.tsx">%</span></span>
                      </div>
                      <div className="w-full h-2 bg-muted/40 rounded-full mt-2 overflow-hidden" data-unique-id="f912381e-2573-436a-a990-19dd7691f63d" data-file-name="components/home/Skills.tsx">
                        <motion.div className={`h-full bg-chart-${index + 1} rounded-full`} initial={{
                    width: 0
                  }} whileInView={{
                    width: `${skill.level}%`
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: 0.2,
                    duration: 1,
                    ease: "easeOut"
                  }} data-unique-id="f38d5100-f95f-463c-8c99-76ba3cf1d984" data-file-name="components/home/Skills.tsx" />
                      </div>
                    </div>
                  </motion.li>)}
              </motion.ul>
            </motion.div>)}
        </div>
        
        <div className="text-center mt-12 text-muted-foreground text-sm" data-unique-id="7fb3b4aa-f9f4-4350-beb8-88038f8b544b" data-file-name="components/home/Skills.tsx">
          <p data-unique-id="9e48dbb5-7797-4b47-9e63-5f4c02db6eb6" data-file-name="components/home/Skills.tsx"><span className="editable-text" data-unique-id="2430fab7-4eff-49b1-bc64-fa8b19cf93f9" data-file-name="components/home/Skills.tsx">Click on any skill to see more details</span></p>
        </div>
      </div>
    </section>;
}