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
    level: 90,
    icon: <Monitor />,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
    description: "Expert in implementing and managing Koha ILS with 3+ years experience"
  }, {
    name: "Digitalization & Scanning",
    level: 85,
    icon: <PenTool />,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    description: "Proficient in document digitization techniques and OCR processing"
  }, {
    name: "Cataloging & Metadata",
    level: 95,
    icon: <Database />,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    description: "Advanced knowledge of MARC21, Dublin Core, and RDA cataloging standards"
  }, {
    name: "Library Automation",
    level: 80,
    icon: <BookText />,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    description: "Experience with automation software and workflows for library management"
  }]
}, {
  title: "Soft Skills",
  color: "border-chart-2",
  icon: <UsersRound className="text-chart-2" />,
  skills: [{
    name: "Effective Communication",
    level: 90,
    icon: <UsersRound />,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
    description: "Strong verbal and written communication skills across various audiences"
  }, {
    name: "Research & Analysis",
    level: 95,
    icon: <BookOpen />,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    description: "Experienced in academic research methodologies and data analysis"
  }, {
    name: "Time Management",
    level: 85,
    icon: <Clock />,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    description: "Excellent at prioritizing tasks and managing multiple projects simultaneously"
  }, {
    name: "Teaching & Mentoring",
    level: 80,
    icon: <UsersRound />,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    description: "Experience in training students and staff on library information systems"
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
    description: "Excellent reading, writing, and speaking skills (IELTS band 7.5)"
  }, {
    name: "Sindhi",
    level: 100,
    icon: <Languages />,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    description: "Native proficiency in reading, writing, and speaking"
  }, {
    name: "Urdu",
    level: 95,
    icon: <Languages />,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    description: "Fluent in reading, writing, and speaking"
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
  return <section id="skills" className="py-24" data-unique-id="7dbc587c-63d2-4c80-94d0-f2ab00633fb6" data-file-name="components/home/Skills.tsx">
      <div className="container mx-auto px-6" data-unique-id="6880e9f8-96d7-4b43-9516-52bca637eb8b" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
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
      }} className="text-center mb-16" data-unique-id="79dab4f9-f945-4085-8d19-14b91ba7c1af" data-file-name="components/home/Skills.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="540bc921-916a-457e-af2a-259b8096a743" data-file-name="components/home/Skills.tsx">
            <span className="editable-text" data-unique-id="6c58aae0-1a31-4903-b8f6-5cd9b8001a25" data-file-name="components/home/Skills.tsx">Skills & Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-chart-3 mx-auto" data-unique-id="041508fe-c393-49d8-98a3-e37423a4791e" data-file-name="components/home/Skills.tsx"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6" data-unique-id="68f92656-0a13-486f-996a-516e53c6f11e" data-file-name="components/home/Skills.tsx"><span className="editable-text" data-unique-id="3ed83a48-6f8a-422b-9ea4-9228c54cfa02" data-file-name="components/home/Skills.tsx">
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
      }} className="bg-card shadow-lg p-4 rounded-lg border border-chart-1/20 max-w-lg mx-auto mb-10 relative" data-unique-id="ee2886f3-8c6d-4f8a-a656-2ca34f82a5f7" data-file-name="components/home/Skills.tsx">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-card rotate-45 border-t border-l border-chart-1/20" data-unique-id="3582e891-b873-4757-8c0a-b5244c2d00b6" data-file-name="components/home/Skills.tsx"></div>
            <div className="flex items-start gap-4" data-unique-id="ec8278ae-0211-405d-81f3-187d08c9af10" data-file-name="components/home/Skills.tsx">
              <div className={`p-3 rounded-full bg-chart-${activeSkill.categoryIndex + 1}/10`} data-unique-id="e5ca8e30-d531-44fe-9df8-f92e36e79307" data-file-name="components/home/Skills.tsx">
                <Info className={`text-chart-${activeSkill.categoryIndex + 1}`} size={24} />
              </div>
              <div data-unique-id="134edab5-4efa-4e3a-9196-bd6a15cbb03d" data-file-name="components/home/Skills.tsx">
                <div className="flex items-center justify-between" data-unique-id="84ad9a3b-e53b-4c09-81be-c7a4f6373128" data-file-name="components/home/Skills.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="bb2b66ab-be3d-404d-8ce5-99f1279743c6" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.name}</h4>
                  <span className="text-sm font-semibold text-chart-1" data-unique-id="adfa2442-15d3-4236-a06b-ff48438a5f77" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.level}<span className="editable-text" data-unique-id="d49f329c-6476-48e3-a189-1370f520277c" data-file-name="components/home/Skills.tsx">%</span></span>
                </div>
                <div className="w-full h-1.5 bg-muted rounded-full mt-2 mb-3" data-unique-id="0d3d051e-47a7-4e22-9f0f-4e29d37e2c5b" data-file-name="components/home/Skills.tsx">
                  <motion.div initial={{
                width: 0
              }} animate={{
                width: `${activeSkill.level}%`
              }} transition={{
                duration: 0.8,
                ease: "easeOut"
              }} className={`h-full bg-chart-${activeSkill.categoryIndex + 1} rounded-full`} data-unique-id="fda3d2a1-ed61-4bf2-9f64-1fa5c148c541" data-file-name="components/home/Skills.tsx" />
                </div>
                <p className="text-muted-foreground" data-unique-id="9c560b25-c03f-46e8-9325-b7939e959bf5" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{activeSkill.description}</p>
              </div>
            </div>
          </motion.div>}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12" data-unique-id="fb446d2a-1055-467d-b4f8-d85f56a69f64" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
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
        }} className={`bg-card p-8 rounded-lg shadow-md border-t-4 ${category.color} hover:shadow-xl transition-shadow`} data-unique-id="7614ac14-e863-4ee2-adbd-235f929798fb" data-file-name="components/home/Skills.tsx">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b" data-unique-id="a6e94355-7354-4d75-a6d8-a0b60dc62cca" data-file-name="components/home/Skills.tsx">
                <div className={`p-2 rounded-md bg-chart-${index + 1}/10`} data-unique-id="72b4551b-5aec-45a7-bfcc-24eec54953e2" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold" data-unique-id="06901c89-c74b-466e-b81b-c98056cfe7b3" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{category.title}</h3>
              </div>
              
              <motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} className="space-y-4" data-unique-id="7537c5fe-2065-4ef2-8155-435051af7f2c" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
                {category.skills.map((skill, skillIndex) => <motion.li key={skillIndex} variants={itemVariants} onClick={() => setActiveSkill({
              name: skill.name,
              description: skill.description,
              level: skill.level,
              categoryIndex: index
            })} className="flex items-center gap-3 p-3 rounded-md transition-all hover:bg-accent group cursor-pointer" data-unique-id="acf7a439-ed2f-4f3f-a22d-ad1d040e3ae9" data-file-name="components/home/Skills.tsx">
                    <div className={`p-2 rounded-md ${skill.bgColor} ${skill.color} transition-all group-hover:scale-110`} data-unique-id="44dbb47a-3eae-40dd-9f0c-dd87a500632c" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
                      {skill.icon}
                    </div>
                    <div className="flex-1" data-unique-id="1db73fac-8de3-418f-ae24-8dbab4db8d04" data-file-name="components/home/Skills.tsx">
                      <div className="flex justify-between items-center" data-unique-id="f69bac5a-5894-471c-afdc-d0b0562dd06f" data-file-name="components/home/Skills.tsx">
                        <span className="font-medium" data-unique-id="c8da0d5b-de9e-4ed8-ac73-34b8459f2db8" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{skill.name}</span>
                        <span className="text-xs font-semibold text-muted-foreground" data-unique-id="95200dfb-0892-4bba-8691-0d73a0400912" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{skill.level}<span className="editable-text" data-unique-id="9cee9599-8e18-4980-a9e0-cfcb9fa0a8fe" data-file-name="components/home/Skills.tsx">%</span></span>
                      </div>
                      <div className="w-full h-1 bg-muted rounded-full mt-2" data-unique-id="93429eb1-2e03-4b4f-b104-df45030e776d" data-file-name="components/home/Skills.tsx">
                        <div className={`h-full bg-chart-${index + 1} rounded-full`} style={{
                    width: `${skill.level}%`
                  }} data-unique-id="7ef41c6d-520b-4757-8e29-a44765b51989" data-file-name="components/home/Skills.tsx"></div>
                      </div>
                    </div>
                  </motion.li>)}
              </motion.ul>
            </motion.div>)}
        </div>
        
        <div className="text-center mt-12 text-muted-foreground text-sm" data-unique-id="6673048f-deed-4aa1-aeaa-835a965c6b61" data-file-name="components/home/Skills.tsx">
          <p data-unique-id="44f7986e-f3e9-4f50-b965-4e3d8018a152" data-file-name="components/home/Skills.tsx"><span className="editable-text" data-unique-id="646cdc51-0b1f-40d1-9bea-1107d692afee" data-file-name="components/home/Skills.tsx">Click on any skill to see more details</span></p>
        </div>
      </div>
    </section>;
}