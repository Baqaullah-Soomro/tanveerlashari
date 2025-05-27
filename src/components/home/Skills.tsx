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
  return <section id="skills" className="py-24" data-unique-id="a46921d4-4e0a-44f5-b98a-86bd5beb3b1e" data-file-name="components/home/Skills.tsx">
      <div className="container mx-auto px-6" data-unique-id="989bc09e-23b5-4c47-a7f8-1f1f6bd44f9a" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
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
      }} className="text-center mb-16" data-unique-id="1cef5fab-a19f-4a0c-9b4e-19bf07ee7d48" data-file-name="components/home/Skills.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="47d4f458-7262-44e6-bf2a-6662ea281390" data-file-name="components/home/Skills.tsx">
            <span className="editable-text" data-unique-id="ac49a45b-c1c9-4c64-a13c-6ab6b4575c27" data-file-name="components/home/Skills.tsx">Skills & Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-chart-3 mx-auto" data-unique-id="9b0979be-1a9c-4816-b59e-e48d1dbf8907" data-file-name="components/home/Skills.tsx"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6" data-unique-id="aa763ff9-4243-4ada-99eb-db1edbf4a834" data-file-name="components/home/Skills.tsx"><span className="editable-text" data-unique-id="47a35b4f-5b8a-44ba-8db8-4ca8801f7871" data-file-name="components/home/Skills.tsx">
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
      }} className="bg-card shadow-lg p-4 rounded-lg border border-chart-1/20 max-w-lg mx-auto mb-10 relative" data-unique-id="7ecab735-ce29-4d26-8a3b-0cea43ad217a" data-file-name="components/home/Skills.tsx">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-card rotate-45 border-t border-l border-chart-1/20" data-unique-id="97daf4c3-4f50-4e8a-93a8-3c18a96a7e09" data-file-name="components/home/Skills.tsx"></div>
            <div className="flex items-start gap-4" data-unique-id="39a51b36-ef71-4c45-b5d9-4a127e929d9f" data-file-name="components/home/Skills.tsx">
              <div className={`p-3 rounded-full bg-chart-${activeSkill.categoryIndex + 1}/10`} data-unique-id="1b36d251-c53b-475f-8833-2d9948eed47b" data-file-name="components/home/Skills.tsx">
                <Info className={`text-chart-${activeSkill.categoryIndex + 1}`} size={24} />
              </div>
              <div data-unique-id="d62cb257-9289-4522-9bfd-eef1026be27e" data-file-name="components/home/Skills.tsx">
                <div className="flex items-center justify-between" data-unique-id="0f99c328-4ad9-4746-aa73-81830f09b8f6" data-file-name="components/home/Skills.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="f95239b0-dd23-488b-9ac8-2db8da664649" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.name}</h4>
                  <span className="text-sm font-semibold text-chart-1" data-unique-id="8a63307b-a457-4215-9a6f-f484ff7a763c" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.level}<span className="editable-text" data-unique-id="607d8393-1ca1-4b93-ae69-f8da4215bc83" data-file-name="components/home/Skills.tsx">%</span></span>
                </div>
                <div className="w-full h-1.5 bg-muted rounded-full mt-2 mb-3" data-unique-id="67d2bfa1-86de-49f4-a7d8-003091d0b8c3" data-file-name="components/home/Skills.tsx">
                  <motion.div initial={{
                width: 0
              }} animate={{
                width: `${activeSkill.level}%`
              }} transition={{
                duration: 0.8,
                ease: "easeOut"
              }} className={`h-full bg-chart-${activeSkill.categoryIndex + 1} rounded-full`} data-unique-id="26b5d635-295a-42c6-a9da-b07a7df79785" data-file-name="components/home/Skills.tsx" />
                </div>
                <p className="text-muted-foreground" data-unique-id="63925a5e-c9b3-4f2c-8944-86de31605160" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.description}</p>
              </div>
            </div>
          </motion.div>}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12" data-unique-id="d1604268-e4ec-4149-aa0f-45b640d7ef2b" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
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
        }} className={`bg-card p-8 rounded-lg shadow-md border-t-4 ${category.color} hover:shadow-xl transition-shadow`} data-unique-id="06304cc1-eede-404c-86d0-a926d020eed4" data-file-name="components/home/Skills.tsx">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b" data-unique-id="2e4f4f6a-f6eb-4524-9d07-2571956992aa" data-file-name="components/home/Skills.tsx">
                <div className={`p-2 rounded-md bg-chart-${index + 1}/10`} data-unique-id="ff3808e9-8570-4d18-9397-7a4ed8fd1c52" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold" data-unique-id="6e5ec2f9-bb45-4301-a211-87f75ed0d710" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{category.title}</h3>
              </div>
              
              <motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} className="space-y-4" data-unique-id="94785d8a-fbe4-412b-bf4e-303948ce4584" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
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
            }} data-unique-id="4bcdab1e-4948-4f35-8e1a-856b80ea39cf" data-file-name="components/home/Skills.tsx">
                    <div className={`p-3 rounded-full ${skill.bgColor} ${skill.color} transition-all group-hover:scale-110 shadow-inner`} data-unique-id="296c280b-3628-4ec6-81ba-7e95df97211d" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
                      {skill.icon}
                    </div>
                    <div className="flex-1" data-unique-id="6d828b42-199d-4598-acf9-fd78013daf1e" data-file-name="components/home/Skills.tsx">
                      <div className="flex justify-between items-center" data-unique-id="6f12656e-9bbd-40ff-8d25-2ddec569ae11" data-file-name="components/home/Skills.tsx">
                        <span className="font-medium text-lg" data-unique-id="0dbd0b64-9190-4308-8a25-8b42bf6f4b66" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{skill.name}</span>
                        <span className="text-xs font-semibold px-2 py-1 rounded-md bg-chart-1 text-white" data-unique-id="88e4217b-477e-4675-8e8f-0884dd7290ee" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{skill.level}<span className="editable-text" data-unique-id="ae1921d0-5ff6-4f38-b741-b0fe9e96fbf9" data-file-name="components/home/Skills.tsx">%</span></span>
                      </div>
                      <div className="w-full h-2 bg-muted/40 rounded-full mt-2 overflow-hidden" data-unique-id="3a42efde-9ca9-4915-991a-4de18dd0d2f8" data-file-name="components/home/Skills.tsx">
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
                  }} data-unique-id="fab7dd93-0d25-4c62-95b0-7e4f5fc32e0e" data-file-name="components/home/Skills.tsx" />
                      </div>
                    </div>
                  </motion.li>)}
              </motion.ul>
            </motion.div>)}
        </div>
        
        <div className="text-center mt-12 text-muted-foreground text-sm" data-unique-id="73c993e6-fe1e-47e2-8b95-e847363f1131" data-file-name="components/home/Skills.tsx">
          <p data-unique-id="d7c891ba-f01d-4259-be89-1e0301aa8cc8" data-file-name="components/home/Skills.tsx"><span className="editable-text" data-unique-id="aaf2b821-acb0-4677-9a5d-1c270c42069c" data-file-name="components/home/Skills.tsx">Click on any skill to see more details</span></p>
        </div>
      </div>
    </section>;
}