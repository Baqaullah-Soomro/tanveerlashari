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
  return <section id="skills" className="py-24" data-unique-id="2169cf17-26d6-40b4-977c-4cfadcb5c53b" data-file-name="components/home/Skills.tsx">
      <div className="container mx-auto px-6" data-unique-id="815d991a-3d62-44c2-9ba5-93e22ef2a659" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
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
      }} className="text-center mb-16" data-unique-id="d5c3a444-c954-4288-9f1a-353b93e4ae4e" data-file-name="components/home/Skills.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="db00ab89-e788-4c4f-b91a-e5b8192a2008" data-file-name="components/home/Skills.tsx">
            <span className="editable-text" data-unique-id="bac4e015-9c18-4408-bfe1-493c629a28c3" data-file-name="components/home/Skills.tsx">Skills & Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-chart-3 mx-auto" data-unique-id="ad10f101-0b5b-4eab-ba3f-70624b2ac38a" data-file-name="components/home/Skills.tsx"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6" data-unique-id="c8a0407d-7f37-4ae8-9346-c506e55c1ae8" data-file-name="components/home/Skills.tsx"><span className="editable-text" data-unique-id="df079e72-15ef-40dd-8dac-483641064d89" data-file-name="components/home/Skills.tsx">
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
      }} className="bg-card shadow-lg p-4 rounded-lg border border-chart-1/20 max-w-lg mx-auto mb-10 relative" data-unique-id="2fa3ad13-8c1e-4c5a-998a-705f6e2dcedc" data-file-name="components/home/Skills.tsx">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-card rotate-45 border-t border-l border-chart-1/20" data-unique-id="76b6a4c9-e8b4-48ec-9266-e7e80c6a525c" data-file-name="components/home/Skills.tsx"></div>
            <div className="flex items-start gap-4" data-unique-id="b74f29ff-2a0f-477f-a3c3-c9ae72f55162" data-file-name="components/home/Skills.tsx">
              <div className={`p-3 rounded-full bg-chart-${activeSkill.categoryIndex + 1}/10`} data-unique-id="21997ddb-f4e6-4c37-bf0b-4c74785535ff" data-file-name="components/home/Skills.tsx">
                <Info className={`text-chart-${activeSkill.categoryIndex + 1}`} size={24} />
              </div>
              <div data-unique-id="73141318-2a85-4a63-8785-61569f35baa7" data-file-name="components/home/Skills.tsx">
                <div className="flex items-center justify-between" data-unique-id="6b8c39a4-6681-437b-a82f-ef20cb730c82" data-file-name="components/home/Skills.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="eecffe76-5c58-4f25-8267-86c8048df442" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.name}</h4>
                  <span className="text-sm font-semibold text-chart-1" data-unique-id="2d889828-063d-4ece-bd29-6769d64a4494" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.level}<span className="editable-text" data-unique-id="1faaf2dd-25db-4b78-a3a7-c144be111ba3" data-file-name="components/home/Skills.tsx">%</span></span>
                </div>
                <div className="w-full h-1.5 bg-muted rounded-full mt-2 mb-3" data-unique-id="c2b42991-2b91-4da6-af7a-9fefc209bbdd" data-file-name="components/home/Skills.tsx">
                  <motion.div initial={{
                width: 0
              }} animate={{
                width: `${activeSkill.level}%`
              }} transition={{
                duration: 0.8,
                ease: "easeOut"
              }} className={`h-full bg-chart-${activeSkill.categoryIndex + 1} rounded-full`} data-unique-id="57b1098f-a3c5-42a1-bc9d-02ed33bf6f2b" data-file-name="components/home/Skills.tsx" />
                </div>
                <p className="text-muted-foreground" data-unique-id="70933c06-39e8-4215-a632-48e4f703b8b8" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.description}</p>
              </div>
            </div>
          </motion.div>}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12" data-unique-id="d124ce63-40cc-4d80-b521-0b344cb2da8b" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
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
        }} className={`bg-card p-8 rounded-lg shadow-md border-t-4 ${category.color} hover:shadow-xl transition-shadow`} data-unique-id="793f82c3-1105-4cc4-825e-89102189297e" data-file-name="components/home/Skills.tsx">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b" data-unique-id="28f543e6-4390-4ae6-8d3e-a27bf9d57bad" data-file-name="components/home/Skills.tsx">
                <div className={`p-2 rounded-md bg-chart-${index + 1}/10`} data-unique-id="76030da3-e467-42d9-a657-62f823000b8f" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold" data-unique-id="3cce9ac3-cc45-4e13-bc78-0feb4e51b83f" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{category.title}</h3>
              </div>
              
              <motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} className="space-y-4" data-unique-id="98ab3f88-7862-4728-a163-b5b86ad876f6" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
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
            }} data-unique-id="9bd22b17-35fc-4a92-aafa-5e58deaf1784" data-file-name="components/home/Skills.tsx">
                    <div className={`p-3 rounded-full ${skill.bgColor} ${skill.color} transition-all group-hover:scale-110 shadow-inner`} data-unique-id="f7160f0f-ea9e-493d-ba9c-3af57c62dc6e" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
                      {skill.icon}
                    </div>
                    <div className="flex-1" data-unique-id="77f27319-4da4-4eca-8988-1b8f0f8c3d41" data-file-name="components/home/Skills.tsx">
                      <div className="flex justify-between items-center" data-unique-id="88ba0906-8043-4c67-baa1-ba10ec00ee20" data-file-name="components/home/Skills.tsx">
                        <span className="font-medium text-lg" data-unique-id="4e8f81f5-9937-4fce-aedf-17da2dd9a8b9" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{skill.name}</span>
                        <span className="text-xs font-semibold px-2 py-1 rounded-md bg-chart-1 text-white" data-unique-id="6881ff7f-9803-4190-a62b-fa4c88128f86" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{skill.level}<span className="editable-text" data-unique-id="83a0dd9e-3331-4dac-81a2-b59186a5f84c" data-file-name="components/home/Skills.tsx">%</span></span>
                      </div>
                      <div className="w-full h-2 bg-muted/40 rounded-full mt-2 overflow-hidden" data-unique-id="23e3037a-69bc-48df-b01f-5e30000eb378" data-file-name="components/home/Skills.tsx">
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
                  }} data-unique-id="2cf5908d-c23e-464c-afca-67e1c72340a4" data-file-name="components/home/Skills.tsx" />
                      </div>
                    </div>
                  </motion.li>)}
              </motion.ul>
            </motion.div>)}
        </div>
        
        <div className="text-center mt-12 text-muted-foreground text-sm" data-unique-id="a01ebf73-8423-4d30-9296-d36125a930b4" data-file-name="components/home/Skills.tsx">
          <p data-unique-id="9f050467-4095-4238-b545-a2126ee28ac1" data-file-name="components/home/Skills.tsx"><span className="editable-text" data-unique-id="7ed26fc8-3c1d-46ad-b414-47015c9b35f7" data-file-name="components/home/Skills.tsx">Click on any skill to see more details</span></p>
        </div>
      </div>
    </section>;
}