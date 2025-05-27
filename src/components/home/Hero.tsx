'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Briefcase, BookOpen } from 'lucide-react';
export default function Hero() {
  return <section id="home" className="relative h-screen flex items-center" data-unique-id="3c102dc0-121f-4f4b-a848-3146a298b771" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden" data-unique-id="a55dd0ee-f0e9-4c68-9a64-57f8aadce62e" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-bl from-chart-1/20 to-transparent" data-unique-id="4a8c31fb-f540-49e6-a75f-bc62baf0bb86" data-file-name="components/home/Hero.tsx"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-10 bg-gradient-to-tr from-chart-2/20 to-transparent" data-unique-id="b63a3c4a-4190-4446-b229-a650ef9b2ef1" data-file-name="components/home/Hero.tsx"></div>
        
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
      }} className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-chart-1" data-unique-id="f580a187-f243-46c5-a598-4381957057de" data-file-name="components/home/Hero.tsx" />
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
      }} className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-chart-2" data-unique-id="a4cc5fb0-cc5b-45e2-8e1d-bdef4e426202" data-file-name="components/home/Hero.tsx" />
        
        {/* Animated dots grid */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-30" data-unique-id="279cc5df-71f1-42a1-8e9f-38e8d527ce1c" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
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
        }} className="w-1.5 h-1.5 rounded-full bg-chart-4 mx-auto my-auto" data-unique-id="273141fd-36f7-4413-8957-e1539a5cc44e" data-file-name="components/home/Hero.tsx" />)}
        </div>
      </div>

      <div className="container mx-auto px-6" data-unique-id="ff0735ec-9a26-4cdb-9094-58a89dbe2f30" data-file-name="components/home/Hero.tsx">
        <div className="grid grid-cols-12 gap-8" data-unique-id="52d0680d-cf2a-4af5-8f98-1089959ef59a" data-file-name="components/home/Hero.tsx">
          <div className="col-span-12 md:col-span-8 lg:col-span-7" data-unique-id="b8a8fd94-ef62-4c9d-9e67-d2be287108e0" data-file-name="components/home/Hero.tsx">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} data-unique-id="19e6245a-5369-4d51-8ed6-b7a6016dcffd" data-file-name="components/home/Hero.tsx">
              <h2 className="text-lg font-medium text-chart-1 mb-2" data-unique-id="e7e22304-9d84-4110-89c0-99c34c4c92e1" data-file-name="components/home/Hero.tsx">
                <motion.span initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.1,
                duration: 0.5
              }} className="inline-block" data-unique-id="76bddaca-9c31-49ea-a6bf-84537ee9ecd7" data-file-name="components/home/Hero.tsx">
                  <span className="editable-text" data-unique-id="0529320a-58f8-4f73-b9f8-c8f9fa6a200f" data-file-name="components/home/Hero.tsx">Hello, I'm</span>
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
          }} className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 drop-shadow-sm" data-unique-id="5f771fb7-2d3a-475c-9d03-b8039160ccd8" data-file-name="components/home/Hero.tsx">
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
            }} className="inline-block text-chart-1" data-unique-id="e411b4f2-fa41-4f51-8397-7e9635388ebe" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="4e0db441-a76a-45a3-99f0-4d31740b354e" data-file-name="components/home/Hero.tsx">T</span>
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
            }} className="inline-block" data-unique-id="15b46138-dfa9-40f7-ac4d-c6ffa27ef675" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="c352b4c7-2d2d-453f-a9e5-0a4b1c54992f" data-file-name="components/home/Hero.tsx">anveer</span>
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
            }} className="inline-block ml-3 text-chart-1" data-unique-id="db9a3641-83c8-4cf7-9250-18dd6119d5e3" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="aaf52447-c4e5-4f3f-9c7f-3a8b9ceed88d" data-file-name="components/home/Hero.tsx">L</span>
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
            }} className="inline-block" data-unique-id="abcaff59-a870-406f-ade5-8db5f488a66a" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="41054b62-446b-4917-96b1-476ff27a68ca" data-file-name="components/home/Hero.tsx">ashari</span>
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
          }} className="relative inline-flex h-10 overflow-hidden mb-8" data-unique-id="7d0d930d-a92e-47c6-baf0-48e77195b226" data-file-name="components/home/Hero.tsx">
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
            }} className="absolute text-2xl sm:text-3xl font-medium text-muted-foreground" data-unique-id="2bcbd5e7-8cc4-4636-b139-bfc9951c0bee" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="ddb2de5e-2585-49b6-8ab4-6f0961022a7d" data-file-name="components/home/Hero.tsx">Library and Information Science Graduate</span>
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
            }} className="absolute text-2xl sm:text-3xl font-medium text-muted-foreground" data-unique-id="08348a24-3f37-4ca2-b138-cceba0ee0d92" data-file-name="components/home/Hero.tsx">
                <span className="flex items-center" data-unique-id="58d437b5-9800-4fe1-b60f-42990aa8a5b8" data-file-name="components/home/Hero.tsx">
                  <BookOpen size={20} className="mr-2 text-chart-2" />
                  <span className="editable-text" data-unique-id="631590d6-42ab-49a6-9d03-af2178936e8a" data-file-name="components/home/Hero.tsx">Digital Library Specialist</span>
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
          }} data-unique-id="ea790bb7-bc9d-4898-9c15-b09eddbea6ae" data-file-name="components/home/Hero.tsx">
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed" data-unique-id="a76d9c83-8940-4964-aca2-607417c88c73" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="68d2983c-b0b1-4a7c-84be-582904159b15" data-file-name="components/home/Hero.tsx">
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
          }} className="flex flex-wrap gap-4 sm:flex-row" data-unique-id="5563d7eb-f738-43f9-8072-ef05985cafc8" data-file-name="components/home/Hero.tsx">
              <motion.a href="#contact" whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
            }} whileTap={{
              scale: 0.95
            }} className="flex items-center gap-2 bg-chart-1 hover:bg-chart-1/90 text-white px-7 py-3.5 rounded-lg transition-all font-medium shadow-md shadow-chart-1/20" onClick={e => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({
                behavior: 'smooth'
              });
            }} data-unique-id="fa860f1f-168a-4e30-963c-d19be9615c3a" data-file-name="components/home/Hero.tsx">
                <Mail size={18} />
                <span data-unique-id="2faf5087-02e4-4784-8bb1-0a473741848c" data-file-name="components/home/Hero.tsx"><span className="editable-text" data-unique-id="3f1c5e34-1cde-46a3-a9dd-effc9f4cce39" data-file-name="components/home/Hero.tsx">Contact Me</span></span>
              </motion.a>
              
              <motion.a href="#" whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }} whileTap={{
              scale: 0.95
            }} className="flex items-center gap-2 bg-chart-2 hover:bg-chart-2/90 text-white px-6 py-3 rounded-lg transition-all" data-unique-id="3e993606-c920-4609-88e9-9338bd85c233" data-file-name="components/home/Hero.tsx">
                <Download size={18} />
                <span className="editable-text" data-unique-id="cbe91c89-10e7-4979-87b2-340cc3e9a570" data-file-name="components/home/Hero.tsx">Download Resume</span>
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
            }} data-unique-id="c9bc648d-358b-49d7-a636-a02981486829" data-file-name="components/home/Hero.tsx">
                <Briefcase size={18} />
                <span className="editable-text" data-unique-id="f726cdea-5cdb-4592-b7ab-cf228c59569d" data-file-name="components/home/Hero.tsx">Hire Me</span>
              </motion.a>
            </motion.div>
          </div>
          
          <div className="hidden lg:col-span-5 lg:block" data-unique-id="de3c25dc-9435-48ef-bbc2-0409a2b66750" data-file-name="components/home/Hero.tsx">
            <motion.div initial={{
            opacity: 0,
            scale: 0.8,
            y: 20
          }} animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }} className="relative w-full h-full flex items-center justify-center" data-unique-id="708a6d05-782a-4d89-bf52-fbf613e97655" data-file-name="components/home/Hero.tsx">
              <div className="absolute w-[380px] h-[380px] bg-chart-1/10 rounded-full" data-unique-id="4a71f197-05bd-4555-a2b5-c21cd2495aa9" data-file-name="components/home/Hero.tsx"></div>
              <motion.div animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute w-[420px] h-[420px] border-2 border-dashed border-chart-2/30 rounded-full" data-unique-id="b2121880-1063-4d72-a9e6-966f7e201d06" data-file-name="components/home/Hero.tsx" />
              
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.7,
              duration: 0.8
            }} className="relative z-10" whileHover={{
              scale: 1.03
            }} data-unique-id="3689d059-8fde-4295-a551-8d971170d7c5" data-file-name="components/home/Hero.tsx">
                <div className="relative overflow-hidden rounded-xl border-4 border-chart-1/20 shadow-xl" data-unique-id="ef0743a1-049e-44f3-81c1-a402ea96c32a" data-file-name="components/home/Hero.tsx">
                  <img src="https://pre-built-images.s3.amazonaws.com/webapp-uploads/00065ab989e6237638357f010d68f319.webp" alt="Tanveer Lashari" className="w-[340px] h-[340px] object-cover object-center" data-unique-id="3350118e-8b6c-465e-a3c1-e43f679b9b58" data-file-name="components/home/Hero.tsx" />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-chart-1/20 to-transparent" data-unique-id="bf5a1212-d989-4196-b7ec-87e47db6926a" data-file-name="components/home/Hero.tsx"></div>
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
    }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2" data-unique-id="682539da-e846-47a7-b0ca-e334940a18ae" data-file-name="components/home/Hero.tsx">
        <motion.div whileHover={{
        scale: 1.2
      }} className="bg-background/50 backdrop-blur-sm p-2 rounded-full border border-border" data-unique-id="b6a8d472-8345-4a17-a9b3-8bb72f7d704a" data-file-name="components/home/Hero.tsx">
          <ArrowDown className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>;
}