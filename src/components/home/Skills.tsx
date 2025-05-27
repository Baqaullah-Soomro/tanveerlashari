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
  return <section id="skills" className="py-24" data-unique-id="0d2022b0-c9f6-4423-bb3d-5dab85661624" data-file-name="components/home/Skills.tsx">
      <div className="container mx-auto px-6" data-unique-id="76b21f22-aaa0-42d6-8866-95829bf94ba3" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
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
      }} className="text-center mb-16" data-unique-id="e86e4cd2-3e6a-4013-bd5f-141e77aae2c9" data-file-name="components/home/Skills.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="12825f74-8226-4725-b3d1-41aded4a1850" data-file-name="components/home/Skills.tsx">
            <span className="editable-text" data-unique-id="28d2d9e1-a437-4b8c-acb7-d5127854437b" data-file-name="components/home/Skills.tsx">Skills & Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-chart-3 mx-auto" data-unique-id="e1fd68c5-3d77-4252-9cfc-6e17a8052608" data-file-name="components/home/Skills.tsx"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6" data-unique-id="4f692558-224a-4a3f-a106-1f520f84867a" data-file-name="components/home/Skills.tsx"><span className="editable-text" data-unique-id="fa56b68b-8ba1-4f10-8c3e-75f13bfd55b1" data-file-name="components/home/Skills.tsx">
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
      }} className="bg-card shadow-lg p-4 rounded-lg border border-chart-1/20 max-w-lg mx-auto mb-10 relative" data-unique-id="e6e63f66-4096-40ea-b2eb-a4a1ce7915cb" data-file-name="components/home/Skills.tsx">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-card rotate-45 border-t border-l border-chart-1/20" data-unique-id="1df5a4da-9dd2-4b9b-bb08-49350f8b76f8" data-file-name="components/home/Skills.tsx"></div>
            <div className="flex items-start gap-4" data-unique-id="5d67dac3-1641-4d24-ba85-5f4e2f3a715c" data-file-name="components/home/Skills.tsx">
              <div className={`p-3 rounded-full bg-chart-${activeSkill.categoryIndex + 1}/10`} data-unique-id="9593a681-1631-4aab-8fa3-6930b14e9bb5" data-file-name="components/home/Skills.tsx">
                <Info className={`text-chart-${activeSkill.categoryIndex + 1}`} size={24} />
              </div>
              <div data-unique-id="571a9de7-f0ee-4d98-a0bb-ba1d2bc247d2" data-file-name="components/home/Skills.tsx">
                <div className="flex items-center justify-between" data-unique-id="cb291146-1e12-4d6e-807b-ed959e0892c1" data-file-name="components/home/Skills.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="bcf6b173-5539-4fe1-90b5-df18875569d9" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.name}</h4>
                  <span className="text-sm font-semibold text-chart-1" data-unique-id="5f1245e0-6f31-4a26-8d88-9493e842e3b8" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.level}<span className="editable-text" data-unique-id="7e4b60b1-3933-4cef-affa-4bae9edbdfce" data-file-name="components/home/Skills.tsx">%</span></span>
                </div>
                <div className="w-full h-1.5 bg-muted rounded-full mt-2 mb-3" data-unique-id="ae9ae796-fe58-4e85-b660-0ee2d99a5e9b" data-file-name="components/home/Skills.tsx">
                  <motion.div initial={{
                width: 0
              }} animate={{
                width: `${activeSkill.level}%`
              }} transition={{
                duration: 0.8,
                ease: "easeOut"
              }} className={`h-full bg-chart-${activeSkill.categoryIndex + 1} rounded-full`} data-unique-id="3f484409-8bbe-41b5-94a1-08527cf3f123" data-file-name="components/home/Skills.tsx" />
                </div>
                <p className="text-muted-foreground" data-unique-id="386e1867-6410-443d-8620-bbee53c6e6ff" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.description}</p>
              </div>
            </div>
          </motion.div>}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12" data-unique-id="7a924223-0911-4221-9a32-32abb9b6d0fb" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
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
        }} className={`bg-card p-8 rounded-lg shadow-md border-t-4 ${category.color} hover:shadow-xl transition-shadow`} data-unique-id="a75d07a5-ee61-43aa-bf5f-8f1c4c385796" data-file-name="components/home/Skills.tsx">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b" data-unique-id="deea0c19-f28b-4250-a009-222874854433" data-file-name="components/home/Skills.tsx">
                <div className={`p-2 rounded-md bg-chart-${index + 1}/10`} data-unique-id="f50af601-7aed-4037-b4c2-f23dfae54f6e" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold" data-unique-id="8b834391-c490-4444-bbda-3796a278de75" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{category.title}</h3>
              </div>
              
              <motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} className="space-y-4" data-unique-id="7c929cda-af4c-4859-b531-6b6ae2239b13" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
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
            }} data-unique-id="38afb5d3-aba6-4b12-9b2e-f6e438466001" data-file-name="components/home/Skills.tsx">
                    <div className={`p-3 rounded-full ${skill.bgColor} ${skill.color} transition-all group-hover:scale-110 shadow-inner`} data-unique-id="69afc0f3-ddbe-4b98-9641-ac9afdab9325" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
                      {skill.icon}
                    </div>
                    <div className="flex-1" data-unique-id="9cabfff1-15de-4ef7-a037-61af485336a1" data-file-name="components/home/Skills.tsx">
                      <div className="flex justify-between items-center" data-unique-id="204f37b0-e4c8-4704-a0e0-9e3676cc236e" data-file-name="components/home/Skills.tsx">
                        <span className="font-medium text-lg" data-unique-id="fa7855e3-4874-43fd-a7c2-580b1ab2b70b" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{skill.name}</span>
                        <span className="text-xs font-semibold px-2 py-1 rounded-md bg-chart-1 text-white" data-unique-id="6ca17f94-50a8-41db-96d6-303b191ae7c3" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{skill.level}<span className="editable-text" data-unique-id="e2249ebe-2ce3-47a4-986c-d1c71d3b1ca3" data-file-name="components/home/Skills.tsx">%</span></span>
                      </div>
                      <div className="w-full h-2 bg-muted/40 rounded-full mt-2 overflow-hidden" data-unique-id="539cec1c-3da3-44f7-b1ef-88142e077e15" data-file-name="components/home/Skills.tsx">
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
                  }} data-unique-id="68840cd7-e343-44aa-83fc-ff5e593165c5" data-file-name="components/home/Skills.tsx" />
                      </div>
                    </div>
                  </motion.li>)}
              </motion.ul>
            </motion.div>)}
        </div>
        
        <div className="text-center mt-12 text-muted-foreground text-sm" data-unique-id="ac2f858c-7fd8-48e2-89ec-a6fe9dfe1f54" data-file-name="components/home/Skills.tsx">
          <p data-unique-id="f058301e-26c5-4339-a65d-58f551bc0105" data-file-name="components/home/Skills.tsx"><span className="editable-text" data-unique-id="4cd1a5cb-6d1a-4b02-80b7-627d7e1545f6" data-file-name="components/home/Skills.tsx">Click on any skill to see more details</span></p>
        </div>
      </div>
    </section>;
}