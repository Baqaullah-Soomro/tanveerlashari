'use client';

import { motion } from 'framer-motion';
import { Database, BookOpen, PenTool, Languages, Clock, UsersRound, BookText, Monitor } from 'lucide-react';
const skillCategories = [{
  title: "Core Library & Technical Skills",
  skills: [{
    name: "Koha Library Software",
    icon: <Monitor />,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10"
  }, {
    name: "Digitalization & Scanning",
    icon: <PenTool />,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10"
  }, {
    name: "Cataloging & Metadata",
    icon: <Database />,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10"
  }, {
    name: "Library Automation",
    icon: <BookText />,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10"
  }]
}, {
  title: "Soft Skills",
  skills: [{
    name: "Effective Communication",
    icon: <UsersRound />,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10"
  }, {
    name: "Research & Analysis",
    icon: <BookOpen />,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10"
  }, {
    name: "Time Management",
    icon: <Clock />,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10"
  }, {
    name: "Teaching & Mentoring",
    icon: <UsersRound />,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10"
  }]
}, {
  title: "Languages",
  skills: [{
    name: "English (Excellent)",
    icon: <Languages />,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10"
  }, {
    name: "Sindhi (Fluent)",
    icon: <Languages />,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10"
  }, {
    name: "Urdu (Fluent)",
    icon: <Languages />,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10"
  }]
}];
export default function Skills() {
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
  return <section id="skills" className="py-24 bg-accent/30" data-unique-id="5c1ac05c-01fb-477f-823f-900c396ce3e4" data-file-name="components/home/Skills.tsx">
      <div className="container mx-auto px-6" data-unique-id="e61e4bf2-aac0-4238-b31a-08f7bd3769d0" data-file-name="components/home/Skills.tsx">
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
      }} className="text-center mb-16" data-unique-id="1ceebb88-a948-4d3e-ac31-33209f402f54" data-file-name="components/home/Skills.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="c8351e35-ec46-4ac2-a758-ae83d6a694e1" data-file-name="components/home/Skills.tsx"><span className="editable-text" data-unique-id="82fb0c8c-fbd2-4542-9a6c-2af475db49b4" data-file-name="components/home/Skills.tsx">Skills & Expertise</span></h2>
          <div className="h-1 w-20 bg-chart-3 mx-auto" data-unique-id="626e02a7-e115-4c98-8746-a21f30373c29" data-file-name="components/home/Skills.tsx"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12" data-unique-id="5ba2fa16-cf0e-43ba-a16a-9e2530c67199" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
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
        }} className="bg-card p-8 rounded-lg shadow-md" data-unique-id="3f18a1f7-5f02-4db2-b9e8-c7f1aa17c720" data-file-name="components/home/Skills.tsx">
              <h3 className="text-xl font-bold mb-6 pb-3 border-b" data-unique-id="be2a3e1c-6743-4f20-9603-e74e09eef706" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{category.title}</h3>
              
              <motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} className="space-y-4" data-unique-id="3d16696a-688c-4293-933f-1db7bc9ebdd9" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
                {category.skills.map((skill, skillIndex) => <motion.li key={skillIndex} variants={itemVariants} className="flex items-center gap-3 p-3 rounded-md transition-all hover:bg-accent group" data-unique-id="35641272-6bf1-4852-94fb-0d7e2c63497b" data-file-name="components/home/Skills.tsx">
                    <div className={`p-2 rounded-md ${skill.bgColor} ${skill.color} transition-all group-hover:scale-110`} data-unique-id="06398051-a1bc-490b-a4b9-a5e6f3ede606" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">
                      {skill.icon}
                    </div>
                    <span className="font-medium" data-unique-id="bfe76435-8606-4b07-9576-c9ad0b70d0b9" data-file-name="components/home/Skills.tsx" data-dynamic-text="true">{skill.name}</span>
                  </motion.li>)}
              </motion.ul>
            </motion.div>)}
        </div>
      </div>
    </section>;
}