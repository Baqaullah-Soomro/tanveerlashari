'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Briefcase, BookOpen } from 'lucide-react';
export default function Hero() {
  return <section id="home" className="relative h-screen flex items-center" data-unique-id="29d90092-9831-4c79-a5e9-e8ae0596b356" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden" data-unique-id="991d9d0b-244b-4a03-ab3c-aaba6e875a2d" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-bl from-chart-1/20 to-transparent" data-unique-id="b5a0fbca-e06b-4fda-8ce2-0e77b642bf1f" data-file-name="components/home/Hero.tsx"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-10 bg-gradient-to-tr from-chart-2/20 to-transparent" data-unique-id="a85771ae-1b3f-448e-88d4-51366b3a8084" data-file-name="components/home/Hero.tsx"></div>
        
        <motion.div initial={{
        opacity: 0,
        scale: 0.8,
        x: 50
      }} animate={{
        opacity: 0.07,
        scale: 1,
        x: 0
      }} transition={{
        duration: 1.5
      }} className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-chart-1" data-unique-id="fbbc69a6-ce79-4834-b45b-0ac7560d8d07" data-file-name="components/home/Hero.tsx" />
        <motion.div initial={{
        opacity: 0,
        scale: 0.8,
        x: -50
      }} animate={{
        opacity: 0.07,
        scale: 1,
        x: 0
      }} transition={{
        duration: 1.5,
        delay: 0.2
      }} className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-chart-2" data-unique-id="0a45c1a6-e438-44c4-99dc-f1b2b9d34a52" data-file-name="components/home/Hero.tsx" />
        
        {/* Animated dots grid */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-30" data-unique-id="a5dd2d4a-7364-4c0b-9c62-7f1da3d3fae7" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
          {Array.from({
          length: 12 * 6
        }).map((_, i) => <motion.div key={i} initial={{
          opacity: 0
        }} animate={{
          opacity: Math.random() * 0.5 + 0.3
        }} transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          delay: Math.random() * 2
        }} className="w-1.5 h-1.5 rounded-full bg-chart-4 mx-auto my-auto" data-unique-id="29850e82-539d-44f3-9bf3-ffe5f1d06eba" data-file-name="components/home/Hero.tsx" />)}
        </div>
      </div>

      <div className="container mx-auto px-6" data-unique-id="169f7553-88f4-4c1e-8667-6069169e1ec5" data-file-name="components/home/Hero.tsx">
        <div className="grid grid-cols-12 gap-8" data-unique-id="586d544f-33ef-4d6f-aa85-83212ddd4009" data-file-name="components/home/Hero.tsx">
          <div className="col-span-12 lg:col-span-7" data-unique-id="dbcfd62c-57c7-4a8e-a077-447d794e1116" data-file-name="components/home/Hero.tsx">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} data-unique-id="5b909845-a704-4a66-9ef1-4af2219b51a2" data-file-name="components/home/Hero.tsx">
              <h2 className="text-lg font-medium text-chart-1 mb-2" data-unique-id="d6384992-1ed0-4371-a2e1-26f47e79d9b6" data-file-name="components/home/Hero.tsx">
                <motion.span initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.1,
                duration: 0.5
              }} className="inline-block" data-unique-id="8d17ee79-8278-4d1b-83e8-70a54ebcefe1" data-file-name="components/home/Hero.tsx">
                  <span className="editable-text" data-unique-id="410f9307-6570-459c-bc12-5e926d66fd9a" data-file-name="components/home/Hero.tsx">Hello, I'm</span>
                </motion.span>
              </h2>
            </motion.div>
            
            <motion.h1 initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 1,
            delay: 0.2
          }} className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4" data-unique-id="9bd4962e-c8ab-4251-98f1-957c352f7d2f" data-file-name="components/home/Hero.tsx">
              <motion.span initial={{
              display: "inline-block",
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2,
              duration: 0.5
            }} className="inline-block text-chart-1" data-unique-id="2c5af3cc-326f-4780-af41-282f5a669f93" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="e5472a98-cb9c-4759-9a94-6eb9a572bd02" data-file-name="components/home/Hero.tsx">T</span>
              </motion.span>
              <motion.span initial={{
              display: "inline-block",
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.3,
              duration: 0.5
            }} className="inline-block" data-unique-id="3ce433fb-d6ff-48eb-bb25-655c357c03d0" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="b5b665b0-695d-4d83-9bfa-3dabec650fcd" data-file-name="components/home/Hero.tsx">anveer</span>
              </motion.span>
              <motion.span initial={{
              display: "inline-block",
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4,
              duration: 0.5
            }} className="inline-block ml-3 text-chart-1" data-unique-id="a4229fc1-e509-427b-ba74-2c81f60f9601" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="64b4a8df-c441-48c6-98c8-ccd0b3caff4c" data-file-name="components/home/Hero.tsx">L</span>
              </motion.span>
              <motion.span initial={{
              display: "inline-block",
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5,
              duration: 0.5
            }} className="inline-block" data-unique-id="8b5a7361-c9e5-4b16-86ae-d004f86b83e7" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="f6c3dc86-d529-454c-82d6-f73e66518db5" data-file-name="components/home/Hero.tsx">ashari</span>
              </motion.span>
            </motion.h1>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.6
          }} className="relative inline-flex h-10 overflow-hidden mb-8" data-unique-id="3e3c5a78-b2b6-4fc1-8272-24d240a33d07" data-file-name="components/home/Hero.tsx">
              <motion.h3 initial={{
              y: 0
            }} animate={{
              y: '-100%'
            }} transition={{
              duration: 0.5,
              delay: 3,
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 2
            }} className="absolute text-2xl sm:text-3xl font-medium text-muted-foreground" data-unique-id="5e1fdbc6-2d92-40d7-998b-88702e9fced4" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="93b2bcec-bc16-4aec-9d1a-60b1468d4438" data-file-name="components/home/Hero.tsx">Library and Information Science Graduate</span>
              </motion.h3>
              <motion.h3 initial={{
              y: '100%'
            }} animate={{
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 3,
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 2
            }} className="absolute text-2xl sm:text-3xl font-medium text-muted-foreground" data-unique-id="6aa372b8-7b88-489d-af3a-591d48a25295" data-file-name="components/home/Hero.tsx">
                <span className="flex items-center" data-unique-id="06c75876-75e0-40ec-802d-6c43839b8eab" data-file-name="components/home/Hero.tsx">
                  <BookOpen size={20} className="mr-2 text-chart-2" />
                  <span className="editable-text" data-unique-id="8f3ddb85-25bd-4a87-ba5b-4ae3605857c4" data-file-name="components/home/Hero.tsx">Digital Library Specialist</span>
                </span>
              </motion.h3>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.7
          }} data-unique-id="28623bec-e12d-4810-98ca-b3f931378af4" data-file-name="components/home/Hero.tsx">
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed" data-unique-id="289bb740-473f-48a0-9b52-d196acadc060" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="ae0fb7e5-6401-4183-a65f-96b3894d4899" data-file-name="components/home/Hero.tsx">
                  Passionate about library sciences, cataloging, digital library systems, and knowledge organization.
                  Experienced in modern library management systems and dedicated to enhancing user services.
                </span>
              </p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.8
          }} className="flex flex-wrap gap-4" data-unique-id="925fb8bf-90ed-477e-ae7b-51b949115d36" data-file-name="components/home/Hero.tsx">
              <motion.a href="#contact" whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }} whileTap={{
              scale: 0.95
            }} className="flex items-center gap-2 bg-chart-1 hover:bg-chart-1/90 text-white px-6 py-3 rounded-lg transition-all" onClick={e => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({
                behavior: 'smooth'
              });
            }} data-unique-id="daa622b4-36df-400e-ae38-c9ba85530666" data-file-name="components/home/Hero.tsx">
                <Mail size={18} />
                <span className="editable-text" data-unique-id="ed2797e6-1c7b-4182-aac8-feaeb5225d5c" data-file-name="components/home/Hero.tsx">Contact Me</span>
              </motion.a>
              
              <motion.a href="#" whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }} whileTap={{
              scale: 0.95
            }} className="flex items-center gap-2 bg-chart-2 hover:bg-chart-2/90 text-white px-6 py-3 rounded-lg transition-all" data-unique-id="fead510e-7e86-4d3a-a754-13ac9e54e50b" data-file-name="components/home/Hero.tsx">
                <Download size={18} />
                <span className="editable-text" data-unique-id="1df96eff-b350-46ee-8a08-d40c251de1c5" data-file-name="components/home/Hero.tsx">Download Resume</span>
              </motion.a>
              
              <motion.a href="#experience" whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }} whileTap={{
              scale: 0.95
            }} className="flex items-center gap-2 bg-chart-3 hover:bg-chart-3/90 text-white px-6 py-3 rounded-lg transition-all" onClick={e => {
              e.preventDefault();
              document.querySelector('#experience')?.scrollIntoView({
                behavior: 'smooth'
              });
            }} data-unique-id="562dc6e3-e559-4024-bffa-35a2ff10c448" data-file-name="components/home/Hero.tsx">
                <Briefcase size={18} />
                <span className="editable-text" data-unique-id="f1e52ce5-95fd-4e39-9382-d1b8a768b6b6" data-file-name="components/home/Hero.tsx">Hire Me</span>
              </motion.a>
            </motion.div>
          </div>
          
          <div className="hidden lg:col-span-5 lg:block" data-unique-id="f2d88060-b34b-4ab8-ab96-2d1072e66f67" data-file-name="components/home/Hero.tsx">
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }} className="relative w-full h-full" data-unique-id="36e96ed1-6d61-4528-b948-f6c267797a43" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
              <div className="absolute w-72 h-72 bg-chart-1/10 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" data-unique-id="a88aebce-202b-4705-a122-1ddd1cddb58f" data-file-name="components/home/Hero.tsx"></div>
              <motion.div animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute w-[450px] h-[450px] border-2 border-dashed border-chart-2/30 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" data-unique-id="d16fe444-a4a3-445e-af6a-5c2a5fcc691e" data-file-name="components/home/Hero.tsx"></motion.div>
              <motion.div animate={{
              rotate: [360, 0]
            }} transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute w-[380px] h-[380px] border-2 border-dashed border-chart-1/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" data-unique-id="cab3c8e4-1ff0-4489-a4a9-70545ffcb872" data-file-name="components/home/Hero.tsx"></motion.div>
              
              {/* Skill icons positioned around circle */}
              <motion.div animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute w-[450px] h-[450px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" data-unique-id="a2e6d024-07cc-4914-bfb3-3b643d29bbcc" data-file-name="components/home/Hero.tsx">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" data-unique-id="80f6b7f5-94c8-4c63-ba05-b9deb4aef7fa" data-file-name="components/home/Hero.tsx">
                  <motion.div whileHover={{
                  scale: 1.2
                }} className="bg-chart-1/20 p-3 rounded-full" data-unique-id="e6bd6609-a67c-49ca-95c9-447bbda9a6c3" data-file-name="components/home/Hero.tsx">
                    <BookOpen size={24} className="text-chart-1" />
                  </motion.div>
                </div>
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2" data-unique-id="18d7e178-10fe-43ae-8263-3a9b879a5c99" data-file-name="components/home/Hero.tsx">
                  <motion.div whileHover={{
                  scale: 1.2
                }} className="bg-chart-2/20 p-3 rounded-full" data-unique-id="a8d7ee81-bd10-4759-bf2a-9d9980cd9308" data-file-name="components/home/Hero.tsx">
                    <Mail size={24} className="text-chart-2" />
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2" data-unique-id="7245104c-5100-411e-9fb0-cf50c24890d6" data-file-name="components/home/Hero.tsx">
                  <motion.div whileHover={{
                  scale: 1.2
                }} className="bg-chart-3/20 p-3 rounded-full" data-unique-id="35d85fa7-91db-4705-ad60-62bab02e62bb" data-file-name="components/home/Hero.tsx">
                    <Briefcase size={24} className="text-chart-3" />
                  </motion.div>
                </div>
                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2" data-unique-id="3a64d802-3104-4d37-9286-3fd92b5cc5d6" data-file-name="components/home/Hero.tsx">
                  <motion.div whileHover={{
                  scale: 1.2
                }} className="bg-chart-4/20 p-3 rounded-full" data-unique-id="3361a6e5-c386-471b-aab7-c6e76e8514f1" data-file-name="components/home/Hero.tsx">
                    <Download size={24} className="text-chart-4" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: [0, 10, 0]
    }} transition={{
      opacity: {
        delay: 1,
        duration: 0.5
      },
      y: {
        delay: 1,
        duration: 2,
        repeat: Infinity
      }
    }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2" data-unique-id="aa15eefe-6b84-4b4d-b415-3556c2ea139c" data-file-name="components/home/Hero.tsx">
        <motion.div whileHover={{
        scale: 1.2
      }} className="bg-background/50 backdrop-blur-sm p-2 rounded-full border border-border" data-unique-id="4e04bc61-3aef-418d-808b-648088c8b007" data-file-name="components/home/Hero.tsx">
          <ArrowDown className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>;
}