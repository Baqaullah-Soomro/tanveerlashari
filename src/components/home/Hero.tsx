'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Briefcase, BookOpen } from 'lucide-react';
export default function Hero() {
  return <section id="home" className="relative h-screen flex items-center" data-unique-id="fe2a03ec-b47f-4395-b206-0edacfda44b2" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden" data-unique-id="b7f715c9-48b8-4b0b-a51d-1e8b99c7f364" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-bl from-chart-1/20 to-transparent" data-unique-id="89a5ef9f-bc07-4457-8d95-8904ef8b3ffa" data-file-name="components/home/Hero.tsx"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-10 bg-gradient-to-tr from-chart-2/20 to-transparent" data-unique-id="7fb298db-7e04-43e7-94d0-0170e72571ab" data-file-name="components/home/Hero.tsx"></div>
        
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
      }} className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-chart-1" data-unique-id="579424f2-0ce7-4623-ae1f-8ff529791d7b" data-file-name="components/home/Hero.tsx" />
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
      }} className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-chart-2" data-unique-id="81491327-7fec-46d1-bf71-6f37b03a9c6a" data-file-name="components/home/Hero.tsx" />
        
        {/* Animated dots grid */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-30" data-unique-id="912207f0-1a7e-4f3e-a483-a42f5369af68" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
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
        }} className="w-1.5 h-1.5 rounded-full bg-chart-4 mx-auto my-auto" data-unique-id="d0efbd76-ffd5-4dc1-bf2b-b20fe55f5e08" data-file-name="components/home/Hero.tsx" />)}
        </div>
      </div>

      <div className="container mx-auto px-6" data-unique-id="fe49ddbd-8e55-4a48-9d5a-0710f66d57f6" data-file-name="components/home/Hero.tsx">
        <div className="grid grid-cols-12 gap-8" data-unique-id="f4c67bb4-6638-4264-bbfb-537d08fde9ed" data-file-name="components/home/Hero.tsx">
          <div className="col-span-12 md:col-span-8 lg:col-span-7" data-unique-id="e7c64e43-f9ed-4f42-a4b8-8e5b7d9da6ed" data-file-name="components/home/Hero.tsx">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} data-unique-id="cad79ead-b06b-4f41-8448-adbf60545a0c" data-file-name="components/home/Hero.tsx">
              <h2 className="text-lg font-medium text-chart-1 mb-2" data-unique-id="6359595b-3740-4d5d-81af-a28ada0350b5" data-file-name="components/home/Hero.tsx">
                <motion.span initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.1,
                duration: 0.5
              }} className="inline-block" data-unique-id="9c1be1ab-55c5-448d-ad21-8cd94b6202cf" data-file-name="components/home/Hero.tsx">
                  <span className="editable-text" data-unique-id="414cf349-cfbf-4ef9-bb64-d900a435f4a4" data-file-name="components/home/Hero.tsx">Hello, I'm</span>
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
          }} className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4" data-unique-id="832713db-f036-4ed8-8e46-918c791de980" data-file-name="components/home/Hero.tsx">
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
            }} className="inline-block text-chart-1" data-unique-id="8933f536-ac84-48c3-b3ef-54c146369c4f" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="71efe9c2-31c0-4a24-a552-ff7310307d7f" data-file-name="components/home/Hero.tsx">T</span>
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
            }} className="inline-block" data-unique-id="beb01814-cb21-4e75-90e7-466cf8107c21" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="cc5ccb2c-bce2-422d-8ba1-83c9c5200cba" data-file-name="components/home/Hero.tsx">anveer</span>
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
            }} className="inline-block ml-3 text-chart-1" data-unique-id="0eb2d09a-ede0-4cb6-a0d9-a598d7c665fe" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="e2a814b5-69a6-407f-8b28-0612c2b72a3a" data-file-name="components/home/Hero.tsx">L</span>
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
            }} className="inline-block" data-unique-id="af3f9360-2940-435c-b369-87f12fb79dbd" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="9f37690d-3db4-4b6d-a0fe-7b9453e8bbca" data-file-name="components/home/Hero.tsx">ashari</span>
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
          }} className="relative inline-flex h-10 overflow-hidden mb-8" data-unique-id="5bf42c7c-1fce-4dc0-a5df-c540c025ce69" data-file-name="components/home/Hero.tsx">
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
            }} className="absolute text-2xl sm:text-3xl font-medium text-muted-foreground" data-unique-id="789cfbf1-ff61-4ac6-add1-777b08a693d4" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="7079ce47-894e-4401-baee-d2714a67415c" data-file-name="components/home/Hero.tsx">Library and Information Science Graduate</span>
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
            }} className="absolute text-2xl sm:text-3xl font-medium text-muted-foreground" data-unique-id="c172eb3b-9dee-4d48-ab69-66fe2eb510db" data-file-name="components/home/Hero.tsx">
                <span className="flex items-center" data-unique-id="1d71ed1c-29a9-471a-80d0-b02c36b6e102" data-file-name="components/home/Hero.tsx">
                  <BookOpen size={20} className="mr-2 text-chart-2" />
                  <span className="editable-text" data-unique-id="0a5b21dd-04f0-4095-b6ae-4716213a1845" data-file-name="components/home/Hero.tsx">Digital Library Specialist</span>
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
          }} data-unique-id="7d7f3a26-76ef-42d0-b6b2-756189e44f8f" data-file-name="components/home/Hero.tsx">
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed" data-unique-id="bb563207-2e8f-4668-b927-12c51ca9f56b" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="2d2d5c5a-3274-437e-88d9-5267778e799b" data-file-name="components/home/Hero.tsx">
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
          }} className="flex flex-wrap gap-4 sm:flex-row" data-unique-id="475b32ac-a8f0-4af9-86f0-bb62ac0a46ad" data-file-name="components/home/Hero.tsx">
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
            }} data-unique-id="666fb063-ea45-498e-94c8-8b0959c9555d" data-file-name="components/home/Hero.tsx">
                <Mail size={18} />
                <span className="editable-text" data-unique-id="c45a9e4f-e1d5-40a4-89d1-11ce053dd738" data-file-name="components/home/Hero.tsx">Contact Me</span>
              </motion.a>
              
              <motion.a href="#" whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }} whileTap={{
              scale: 0.95
            }} className="flex items-center gap-2 bg-chart-2 hover:bg-chart-2/90 text-white px-6 py-3 rounded-lg transition-all" data-unique-id="b6456c61-58d3-47fb-abd2-539d43a64596" data-file-name="components/home/Hero.tsx">
                <Download size={18} />
                <span className="editable-text" data-unique-id="b0337cc4-b85d-468d-a989-d72c712c3d97" data-file-name="components/home/Hero.tsx">Download Resume</span>
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
            }} data-unique-id="28a4a23b-0ec0-458c-bfeb-131910118a00" data-file-name="components/home/Hero.tsx">
                <Briefcase size={18} />
                <span className="editable-text" data-unique-id="82730d8b-7c8f-4003-b33b-a0e7f02a5dba" data-file-name="components/home/Hero.tsx">Hire Me</span>
              </motion.a>
            </motion.div>
          </div>
          
          <div className="hidden lg:col-span-5 lg:block" data-unique-id="81f58098-a0bb-4b17-a542-0afdbc12fca5" data-file-name="components/home/Hero.tsx">
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }} className="relative w-full h-full" data-unique-id="3a12b926-4285-4d5a-b37f-68587044a4c5" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
              <div className="absolute w-72 h-72 bg-chart-1/10 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" data-unique-id="ad0cabd6-de43-44af-80b8-f1e48321ead7" data-file-name="components/home/Hero.tsx"></div>
              <motion.div animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute w-[450px] h-[450px] border-2 border-dashed border-chart-2/30 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" data-unique-id="29180828-3a63-4e3f-aa7f-b4181793a758" data-file-name="components/home/Hero.tsx"></motion.div>
              <motion.div animate={{
              rotate: [360, 0]
            }} transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute w-[380px] h-[380px] border-2 border-dashed border-chart-1/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" data-unique-id="21ac6634-1fcf-42a3-bc2d-16835c05a1be" data-file-name="components/home/Hero.tsx"></motion.div>
              
              {/* Skill icons positioned around circle */}
              <motion.div animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute w-[450px] h-[450px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" data-unique-id="1f13267f-4010-4c73-b8e6-b1e409fb3193" data-file-name="components/home/Hero.tsx">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" data-unique-id="e8efd9f1-4fd8-466b-8405-3cdb27a873c2" data-file-name="components/home/Hero.tsx">
                  <motion.div whileHover={{
                  scale: 1.2
                }} className="bg-chart-1/20 p-3 rounded-full" data-unique-id="4fdecce1-c980-4414-ac6b-bdcea8302ff1" data-file-name="components/home/Hero.tsx">
                    <BookOpen size={24} className="text-chart-1" />
                  </motion.div>
                </div>
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2" data-unique-id="0e943f66-00f1-4023-aa40-86e5fc963ca0" data-file-name="components/home/Hero.tsx">
                  <motion.div whileHover={{
                  scale: 1.2
                }} className="bg-chart-2/20 p-3 rounded-full" data-unique-id="6314eb85-e111-4fb0-9865-9829b0f09c51" data-file-name="components/home/Hero.tsx">
                    <Mail size={24} className="text-chart-2" />
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2" data-unique-id="4f925dfb-8176-41d7-a8db-0a1380ae09d1" data-file-name="components/home/Hero.tsx">
                  <motion.div whileHover={{
                  scale: 1.2
                }} className="bg-chart-3/20 p-3 rounded-full" data-unique-id="e8a1ab0e-a61b-4b6c-a362-241ed31fd2bb" data-file-name="components/home/Hero.tsx">
                    <Briefcase size={24} className="text-chart-3" />
                  </motion.div>
                </div>
                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2" data-unique-id="5eddd353-261b-4d19-8c3c-5f293da0cde7" data-file-name="components/home/Hero.tsx">
                  <motion.div whileHover={{
                  scale: 1.2
                }} className="bg-chart-4/20 p-3 rounded-full" data-unique-id="687a9dee-069c-46bb-af4f-7faa1903cd9a" data-file-name="components/home/Hero.tsx">
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
    }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2" data-unique-id="712b5bc9-e40c-4f69-b263-ab84dcafae01" data-file-name="components/home/Hero.tsx">
        <motion.div whileHover={{
        scale: 1.2
      }} className="bg-background/50 backdrop-blur-sm p-2 rounded-full border border-border" data-unique-id="09314a46-bcbf-4486-9e88-a1c1ddd0fd21" data-file-name="components/home/Hero.tsx">
          <ArrowDown className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>;
}