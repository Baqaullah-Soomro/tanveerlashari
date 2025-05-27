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
  return <section id="skills" className="py-24" data-unique-id="0854557e-046e-4b9d-8244-b408ba22508c" data-file-name="components/home/Skills.tsx">
      <div className="container mx-auto px-6" data-unique-id="3e97802a-e991-4ef5-8974-38c47a617ff6" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
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
      }} className="text-center mb-16" data-unique-id="e498da56-42bf-422d-ac44-d16ebd964480" data-file-name="components/home/Skills.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="0694569a-c3b3-4cc4-b1e6-ef5d48bab2df" data-file-name="components/home/Skills.tsx">
            <span className="editable-text" data-unique-id="41d3f037-d7b8-4010-afb2-f013cd3bc7d6" data-file-name="components/home/Skills.tsx">Skills & Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-chart-3 mx-auto" data-unique-id="7320a91a-428b-47ce-8c8a-2f507a5efef0" data-file-name="components/home/Skills.tsx"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6" data-unique-id="6d37f70e-d1b7-4da7-b27f-c7d542fad7fc" data-file-name="components/home/Skills.tsx"><span className="editable-text" data-unique-id="a0c3eebe-ca84-479e-9ba2-41967a30e9cd" data-file-name="components/home/Skills.tsx">
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
      }} className="bg-card shadow-lg p-4 rounded-lg border border-chart-1/20 max-w-lg mx-auto mb-10 relative" data-unique-id="7425f964-f0d3-48d7-b4cd-2d47483bb430" data-file-name="components/home/Skills.tsx">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-card rotate-45 border-t border-l border-chart-1/20" data-unique-id="40b6d4f8-5475-4289-96db-cf2b711527df" data-file-name="components/home/Skills.tsx"></div>
            <div className="flex items-start gap-4" data-unique-id="417cf012-8fde-4e8f-8adc-67b11759e39c" data-file-name="components/home/Skills.tsx">
              <div className={`p-3 rounded-full bg-chart-${activeSkill.categoryIndex + 1}/10`} data-unique-id="8a3a163d-6c4e-4071-9e8d-5518aa69a6f5" data-file-name="components/home/Skills.tsx">
                <Info className={`text-chart-${activeSkill.categoryIndex + 1}`} size={24} />
              </div>
              <div data-unique-id="8a08f29a-3229-4dd2-b51d-962bc7469ee6" data-file-name="components/home/Skills.tsx">
                <div className="flex items-center justify-between" data-unique-id="010ad2f7-dcbb-4b2e-89cb-741c3589a681" data-file-name="components/home/Skills.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="df2a2b26-0aff-4b0d-bd3a-f4c4ed707d30" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.name}</h4>
                  <span className="text-sm font-semibold text-chart-1" data-unique-id="a94ec5a9-ae88-4f20-8d3f-140bd67219fa" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.level}<span className="editable-text" data-unique-id="4b4a5bdd-d247-4be9-979b-a72fa43712f1" data-file-name="components/home/Skills.tsx">%</span></span>
                </div>
                <div className="w-full h-1.5 bg-muted rounded-full mt-2 mb-3" data-unique-id="01f9ea08-689c-44d5-a185-76ac3d532e41" data-file-name="components/home/Skills.tsx">
                  <motion.div initial={{
                width: 0
              }} animate={{
                width: `${activeSkill.level}%`
              }} transition={{
                duration: 0.8,
                ease: "easeOut"
              }} className={`h-full bg-chart-${activeSkill.categoryIndex + 1} rounded-full`} data-unique-id="57c0816a-169d-4285-9bda-8d040a3ef3bd" data-file-name="components/home/Skills.tsx" />
                </div>
                <p className="text-muted-foreground" data-unique-id="546fead8-ee2b-4236-807a-ec43b976b155" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.description}</p>
              </div>
            </div>
          </motion.div>}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12" data-unique-id="1b2bfd7c-f569-48ce-ac7a-e07682c30b83" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
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
        }} className={`bg-card p-8 rounded-lg shadow-md border-t-4 ${category.color} hover:shadow-xl transition-shadow`} data-unique-id="7e945084-b871-4230-a6d0-9c54d785d944" data-file-name="components/home/Skills.tsx">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b" data-unique-id="bb1933d1-47ea-4dbb-9342-2b2156b386fc" data-file-name="components/home/Skills.tsx">
                <div className={`p-2 rounded-md bg-chart-${index + 1}/10`} data-unique-id="62124a78-c5e0-4f8b-ba79-581a256a563e" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold" data-unique-id="7cd505f7-3648-439f-9a08-dce2063284e9" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{category.title}</h3>
              </div>
              
              <motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} className="space-y-4" data-unique-id="eb15e512-f974-4cd9-ba4a-855b92fdd4d8" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
                {category.skills.map((skill, skillIndex) => <motion.li key={skillIndex} variants={itemVariants} onClick={() => setActiveSkill({
              name: skill.name,
              description: skill.description,
              level: skill.level,
              categoryIndex: index
            })} className="flex items-center gap-3 p-3 rounded-md transition-all hover:bg-accent group cursor-pointer" data-unique-id="844e87a2-7da2-471a-b279-36c6b27cb7a7" data-file-name="components/home/Skills.tsx">
                    <div className={`p-2 rounded-md ${skill.bgColor} ${skill.color} transition-all group-hover:scale-110`} data-unique-id="9b45e7ea-0d4a-4a25-8a5f-f73113c34037" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
                      {skill.icon}
                    </div>
                    <div className="flex-1" data-unique-id="f0ab713c-3945-4ac3-8127-4ec3b877a4ef" data-file-name="components/home/Skills.tsx">
                      <div className="flex justify-between items-center" data-unique-id="d67b0545-a3aa-4f28-a487-829b72b8f2a5" data-file-name="components/home/Skills.tsx">
                        <span className="font-medium" data-unique-id="f0102dda-874a-4b26-aa0d-8e972c2cd6f3" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{skill.name}</span>
                        <span className="text-xs font-semibold text-muted-foreground" data-unique-id="d197a27d-21c9-46b2-aac0-8a50011316e8" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{skill.level}<span className="editable-text" data-unique-id="52072192-76f1-4087-9298-5fab335ca75f" data-file-name="components/home/Skills.tsx">%</span></span>
                      </div>
                      <div className="w-full h-1 bg-muted rounded-full mt-2" data-unique-id="fbefc4dc-97de-4aa6-a0a6-4fbb4b9afc75" data-file-name="components/home/Skills.tsx">
                        <div className={`h-full bg-chart-${index + 1} rounded-full`} style={{
                    width: `${skill.level}%`
                  }} data-unique-id="6c4049eb-e3ab-4ed1-9360-584a88d2f07d" data-file-name="components/home/Skills.tsx"></div>
                      </div>
                    </div>
                  </motion.li>)}
              </motion.ul>
            </motion.div>)}
        </div>
        
        <div className="text-center mt-12 text-muted-foreground text-sm" data-unique-id="a07a18e8-874c-4563-a7f1-5bcca08740e0" data-file-name="components/home/Skills.tsx">
          <p data-unique-id="79aceca9-7207-4bbf-b700-9be7018ab4f8" data-file-name="components/home/Skills.tsx"><span className="editable-text" data-unique-id="87e01aa4-2942-4399-96bc-964185d862b0" data-file-name="components/home/Skills.tsx">Click on any skill to see more details</span></p>
        </div>
      </div>
    </section>;
}