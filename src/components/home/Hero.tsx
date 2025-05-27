'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Briefcase, BookOpen } from 'lucide-react';
export default function Hero() {
  return <section id="home" className="relative h-screen flex items-center" data-unique-id="3c00fed1-e464-4dae-9b08-b248b30a68f7" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden" data-unique-id="3c6692e7-dca6-4fae-822a-8b31a2171a02" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-bl from-chart-1/20 to-transparent" data-unique-id="dbf801b6-601a-463e-9d5d-2c2e4b582b34" data-file-name="components/home/Hero.tsx"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-10 bg-gradient-to-tr from-chart-2/20 to-transparent" data-unique-id="79d1e70a-2c16-4ac7-984c-64dade032575" data-file-name="components/home/Hero.tsx"></div>
        
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
      }} className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-chart-1" data-unique-id="8d5fe947-b857-4667-a24c-2a8310b9fc40" data-file-name="components/home/Hero.tsx" />
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
      }} className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-chart-2" data-unique-id="3d92ca9e-0862-44a1-9aa3-1b547ae69f09" data-file-name="components/home/Hero.tsx" />
        
        {/* Animated dots grid */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-30" data-unique-id="40a7a7d1-0a95-4d44-9f54-4488dad2bb63" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
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
        }} className="w-1.5 h-1.5 rounded-full bg-chart-4 mx-auto my-auto" data-unique-id="76b1b5b0-b264-4df0-af01-e0881b72b852" data-file-name="components/home/Hero.tsx" />)}
        </div>
      </div>

      <div className="container mx-auto px-6" data-unique-id="df88c334-7c0b-41db-be0e-49e97927b098" data-file-name="components/home/Hero.tsx">
        <div className="grid grid-cols-12 gap-8" data-unique-id="36e0aeb4-b359-4a17-bea0-1cd3bbdf9985" data-file-name="components/home/Hero.tsx">
          <div className="col-span-12 md:col-span-8 lg:col-span-7" data-unique-id="c211542c-f119-47c0-b026-4c15ba7b4caf" data-file-name="components/home/Hero.tsx">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} data-unique-id="d835a856-9cfb-463c-a58e-d9b7b59e51ae" data-file-name="components/home/Hero.tsx">
              <h2 className="text-lg font-medium text-chart-1 mb-2" data-unique-id="a5b5fadb-71da-4c24-a565-f608983ca29b" data-file-name="components/home/Hero.tsx">
                <motion.span initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.1,
                duration: 0.5
              }} className="inline-block" data-unique-id="c4bd1c9b-208e-46b8-9325-ab49ee8ffceb" data-file-name="components/home/Hero.tsx">
                  <span className="editable-text" data-unique-id="ca0aa501-0da6-4b22-98cb-26e445bcb279" data-file-name="components/home/Hero.tsx">Hello, I'm</span>
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
          }} className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 drop-shadow-sm" data-unique-id="7bcfdbc6-93e4-4fed-83cd-7f0b6a5fe003" data-file-name="components/home/Hero.tsx">
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
            }} className="inline-block text-chart-1" data-unique-id="1dd86f6b-5169-44eb-85f1-b4c6d1ce9c6d" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="2315be47-63f5-4244-890c-a5af1feae632" data-file-name="components/home/Hero.tsx">T</span>
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
            }} className="inline-block" data-unique-id="e5712249-cad3-405b-b8de-7ff7398ca12c" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="1c220dd8-7aac-431f-b7b1-d90844e99ab2" data-file-name="components/home/Hero.tsx">anveer</span>
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
            }} className="inline-block ml-3 text-chart-1" data-unique-id="cb5e54a5-ac15-458c-aafb-c0475941e800" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="5771b3df-1e8f-43ca-9c1e-9501942a1aa6" data-file-name="components/home/Hero.tsx">L</span>
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
            }} className="inline-block" data-unique-id="c939ab8b-7441-4550-b0f5-2c4e5d0ab3fe" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="da9fe3e4-20a7-4f32-a356-6892af641258" data-file-name="components/home/Hero.tsx">ashari</span>
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
          }} className="relative inline-flex h-10 overflow-hidden mb-8" data-unique-id="b9be37d1-563d-4af5-826f-df7c58d0ba20" data-file-name="components/home/Hero.tsx">
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
            }} className="absolute text-2xl sm:text-3xl font-medium text-muted-foreground" data-unique-id="6b03925d-262f-420f-aad4-f4aea530b6c5" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="578f0ddd-5e56-4948-83b1-87b1df2b5d13" data-file-name="components/home/Hero.tsx">Library and Information Science Graduate</span>
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
            }} className="absolute text-2xl sm:text-3xl font-medium text-muted-foreground" data-unique-id="9da4b89c-202a-4446-99d4-2dff87ec0c81" data-file-name="components/home/Hero.tsx">
                <span className="flex items-center" data-unique-id="e6ba31fc-8a3e-4276-8728-ef47c2858452" data-file-name="components/home/Hero.tsx">
                  <BookOpen size={20} className="mr-2 text-chart-2" />
                  <span className="editable-text" data-unique-id="39c6b456-573b-4794-807e-2ed9f7897be9" data-file-name="components/home/Hero.tsx">Digital Library Specialist</span>
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
          }} data-unique-id="2baeaf3f-cda8-4cdd-a6a9-a6c3defc7e7d" data-file-name="components/home/Hero.tsx">
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed" data-unique-id="36bc221a-0b8b-4b61-b9c8-4ae020a93300" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="d4b0bf4c-03e6-4f52-b44b-1366110c749e" data-file-name="components/home/Hero.tsx">
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
          }} className="flex flex-wrap gap-4 sm:flex-row" data-unique-id="b5d70cab-fdbf-460c-b8f4-e6b2827dedc2" data-file-name="components/home/Hero.tsx">
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
            }} data-unique-id="da29cc6b-5882-4cc9-9b20-4a3d68da502c" data-file-name="components/home/Hero.tsx">
                <Mail size={18} />
                <span data-unique-id="ac0c75c8-1035-4ebf-af7e-67d52b892e73" data-file-name="components/home/Hero.tsx"><span className="editable-text" data-unique-id="a77d9d0f-5698-46c3-a512-63e0ef3bc5ff" data-file-name="components/home/Hero.tsx">Contact Me</span></span>
              </motion.a>
              
              <motion.a href="#" whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }} whileTap={{
              scale: 0.95
            }} className="flex items-center gap-2 bg-chart-2 hover:bg-chart-2/90 text-white px-6 py-3 rounded-lg transition-all" data-unique-id="bc1a08bb-7f31-439f-9a76-17518d056e69" data-file-name="components/home/Hero.tsx">
                <Download size={18} />
                <span className="editable-text" data-unique-id="9599a45e-4d87-4978-8190-467723c54242" data-file-name="components/home/Hero.tsx">Download Resume</span>
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
            }} data-unique-id="c77a20d1-5264-4260-9cc3-e4d659e18dce" data-file-name="components/home/Hero.tsx">
                <Briefcase size={18} />
                <span className="editable-text" data-unique-id="7b8b3a06-3b65-4ec2-b4b3-adb4538243e6" data-file-name="components/home/Hero.tsx">Hire Me</span>
              </motion.a>
            </motion.div>
          </div>
          
          <div className="hidden lg:col-span-5 lg:block" data-unique-id="2aad8a7f-8242-410b-b334-34c0e9062227" data-file-name="components/home/Hero.tsx">
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
          }} className="relative w-full h-full flex items-center justify-center" data-unique-id="b5dee445-73ad-4576-8492-53c125e8eabe" data-file-name="components/home/Hero.tsx">
              <div className="absolute w-[380px] h-[380px] bg-chart-1/10 rounded-full" data-unique-id="f42bcfd5-9349-40a7-8bd9-fe77ccf3e111" data-file-name="components/home/Hero.tsx"></div>
              <motion.div animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute w-[420px] h-[420px] border-2 border-dashed border-chart-2/30 rounded-full" data-unique-id="f23e3d62-8364-41f5-81bc-cf6112267c13" data-file-name="components/home/Hero.tsx" />
              
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
            }} data-unique-id="3ae6c067-492b-4e6a-b460-26b046f2b1b3" data-file-name="components/home/Hero.tsx">
                <div className="relative overflow-hidden rounded-xl border-4 border-chart-1/20 shadow-xl" data-unique-id="e086ee02-c91d-4e24-b8a4-249b6d9b3a00" data-file-name="components/home/Hero.tsx">
                  <img src="https://pre-built-images.s3.amazonaws.com/webapp-uploads/00065ab989e6237638357f010d68f319.webp" alt="Tanveer Lashari" className="w-[340px] h-[340px] object-cover object-center" data-unique-id="97451ff2-17e7-46e6-9980-57a042d93433" data-file-name="components/home/Hero.tsx" />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-chart-1/20 to-transparent" data-unique-id="f7bd7e97-0ff2-4ac1-9a6c-c0ef7b158842" data-file-name="components/home/Hero.tsx"></div>
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
    }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2" data-unique-id="0447b1f3-25b5-4a8f-b3f7-926842bfc95f" data-file-name="components/home/Hero.tsx">
        <motion.div whileHover={{
        scale: 1.2
      }} className="bg-background/50 backdrop-blur-sm p-2 rounded-full border border-border" data-unique-id="8bdd8f82-ee59-4e21-8e8a-6da92cfc0db2" data-file-name="components/home/Hero.tsx">
          <ArrowDown className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>;
}