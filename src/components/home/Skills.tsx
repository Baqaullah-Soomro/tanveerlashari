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
  return <section id="skills" className="py-24" data-unique-id="2d48ea0c-1d9e-47fc-b3cf-bc279a9c96e8" data-file-name="components/home/Skills.tsx">
      <div className="container mx-auto px-6" data-unique-id="0988b9fa-e02c-48b2-bdd6-01378e436854" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
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
      }} className="text-center mb-16" data-unique-id="a07e65e8-23c1-41da-a2d2-8b78c745456e" data-file-name="components/home/Skills.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="ac495676-52c5-4028-a4a1-5c9043398a26" data-file-name="components/home/Skills.tsx">
            <span className="editable-text" data-unique-id="7f2737fd-f15f-46e2-a8f8-36771078c83b" data-file-name="components/home/Skills.tsx">Skills & Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-chart-3 mx-auto" data-unique-id="9ab5aa2b-a923-489b-874c-860b10150cd8" data-file-name="components/home/Skills.tsx"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6" data-unique-id="4452ac91-bdb5-4659-a0ef-7da1f71a212e" data-file-name="components/home/Skills.tsx"><span className="editable-text" data-unique-id="92d6ee82-8e46-427d-8d13-3a95be1bb94c" data-file-name="components/home/Skills.tsx">
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
      }} className="bg-card shadow-lg p-4 rounded-lg border border-chart-1/20 max-w-lg mx-auto mb-10 relative" data-unique-id="b9fcc797-baac-44ad-8211-992feb363f00" data-file-name="components/home/Skills.tsx">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-card rotate-45 border-t border-l border-chart-1/20" data-unique-id="df2da65a-4a0f-4b32-a56d-0b7556f0747b" data-file-name="components/home/Skills.tsx"></div>
            <div className="flex items-start gap-4" data-unique-id="f896ef47-4fe7-4bb4-9bb3-6db6029f12b8" data-file-name="components/home/Skills.tsx">
              <div className={`p-3 rounded-full bg-chart-${activeSkill.categoryIndex + 1}/10`} data-unique-id="cae058df-401f-4795-b8ef-46bf179b3110" data-file-name="components/home/Skills.tsx">
                <Info className={`text-chart-${activeSkill.categoryIndex + 1}`} size={24} />
              </div>
              <div data-unique-id="736874dc-c582-41d4-8ecb-49fc33e12988" data-file-name="components/home/Skills.tsx">
                <div className="flex items-center justify-between" data-unique-id="d286c9a5-afc2-48af-9bb7-79615eb5f66a" data-file-name="components/home/Skills.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="ce366836-31d9-49d9-a200-6a8323dcf25f" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.name}</h4>
                  <span className="text-sm font-semibold text-chart-1" data-unique-id="6c110ba2-f9f0-49a9-9616-623d3a513b5c" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.level}<span className="editable-text" data-unique-id="9618698c-31c6-46d0-9ef1-5377b6ff4be0" data-file-name="components/home/Skills.tsx">%</span></span>
                </div>
                <div className="w-full h-1.5 bg-muted rounded-full mt-2 mb-3" data-unique-id="e02e12c5-687f-4035-ad4c-c76e4414ccda" data-file-name="components/home/Skills.tsx">
                  <motion.div initial={{
                width: 0
              }} animate={{
                width: `${activeSkill.level}%`
              }} transition={{
                duration: 0.8,
                ease: "easeOut"
              }} className={`h-full bg-chart-${activeSkill.categoryIndex + 1} rounded-full`} data-unique-id="aea89efd-cf06-479b-bfbe-785f805492d2" data-file-name="components/home/Skills.tsx" />
                </div>
                <p className="text-muted-foreground" data-unique-id="7cc16ff6-6561-4e21-89f8-62f6ba1009b6" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.description}</p>
              </div>
            </div>
          </motion.div>}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12" data-unique-id="2e65f486-dbc5-4867-8b60-d68158e03177" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
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
        }} className={`bg-card p-8 rounded-lg shadow-md border-t-4 ${category.color} hover:shadow-xl transition-shadow`} data-unique-id="bf761bac-f3ff-40c9-a512-cf48a7fb87fa" data-file-name="components/home/Skills.tsx">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b" data-unique-id="2c7a9b4d-1991-4aa5-b7e9-222ac3ebfb83" data-file-name="components/home/Skills.tsx">
                <div className={`p-2 rounded-md bg-chart-${index + 1}/10`} data-unique-id="0860b41e-c61b-467a-ada9-5b2100c9341b" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold" data-unique-id="ec6e8ebe-aeab-4c00-849c-3e7b7de88543" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{category.title}</h3>
              </div>
              
              <motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} className="space-y-4" data-unique-id="13dbfba6-8a82-4c4e-9b1d-c7ce68c6779d" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
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
            }} data-unique-id="23e2b992-2853-4d5b-bc35-e1f92304b23a" data-file-name="components/home/Skills.tsx">
                    <div className={`p-3 rounded-full ${skill.bgColor} ${skill.color} transition-all group-hover:scale-110 shadow-inner`} data-unique-id="aca75ede-1041-4d08-a57d-5f828718b285" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
                      {skill.icon}
                    </div>
                    <div className="flex-1" data-unique-id="13939c71-f347-4a03-aa35-04fa3a077493" data-file-name="components/home/Skills.tsx">
                      <div className="flex justify-between items-center" data-unique-id="681a9279-abfc-4f1f-9a88-8845385a347d" data-file-name="components/home/Skills.tsx">
                        <span className="font-medium text-lg" data-unique-id="19a69c1e-6b23-4afb-b8bb-113955a7e19b" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{skill.name}</span>
                        <span className="text-xs font-semibold px-2 py-1 rounded-md bg-chart-1 text-white" data-unique-id="3fb2f092-bd11-43db-83eb-ae44ba00c209" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{skill.level}<span className="editable-text" data-unique-id="303373b7-1c21-480b-9d5b-ea7d28bb9d8c" data-file-name="components/home/Skills.tsx">%</span></span>
                      </div>
                      <div className="w-full h-2 bg-muted/40 rounded-full mt-2 overflow-hidden" data-unique-id="97aca396-fa66-45aa-b472-386e98b5050d" data-file-name="components/home/Skills.tsx">
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
                  }} data-unique-id="cf9dd527-d079-4316-b6d2-cc43297ba86e" data-file-name="components/home/Skills.tsx" />
                      </div>
                    </div>
                  </motion.li>)}
              </motion.ul>
            </motion.div>)}
        </div>
        
        <div className="text-center mt-12 text-muted-foreground text-sm" data-unique-id="2a783940-50c2-422c-93a1-fb2aef41f3b5" data-file-name="components/home/Skills.tsx">
          <p data-unique-id="44189233-ab5f-4fc4-8d04-961fe63cd5fb" data-file-name="components/home/Skills.tsx"><span className="editable-text" data-unique-id="9c041085-d297-4b0d-9c36-bab387b9b310" data-file-name="components/home/Skills.tsx">Click on any skill to see more details</span></p>
        </div>
      </div>
    </section>;
}