'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Briefcase, BookOpen } from 'lucide-react';
export default function Hero() {
  return <section id="home" className="relative h-screen flex items-center" data-unique-id="044517d5-bc3f-4603-a5c4-66acce0a5621" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden" data-unique-id="7f3b5367-925f-4289-8c90-2e0e6a1d4560" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-bl from-chart-1/20 to-transparent" data-unique-id="04250bbe-0d0a-4d76-9c05-2fe0ec133507" data-file-name="components/home/Hero.tsx"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-10 bg-gradient-to-tr from-chart-2/20 to-transparent" data-unique-id="2c2513a4-235b-43fc-802b-be919bd436a1" data-file-name="components/home/Hero.tsx"></div>
        
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
      }} className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-chart-1" data-unique-id="41b4c7c2-e654-4993-996c-e335b74d500c" data-file-name="components/home/Hero.tsx" />
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
      }} className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-chart-2" data-unique-id="0f47bcaa-2ce0-46a5-94bb-aac1eca19703" data-file-name="components/home/Hero.tsx" />
        
        {/* Animated dots grid */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-30" data-unique-id="d9c44cc2-6d36-4713-8bdc-10492c6b43c3" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
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
        }} className="w-1.5 h-1.5 rounded-full bg-chart-4 mx-auto my-auto" data-unique-id="40eeec67-7989-48f3-8676-1c8f1a287c51" data-file-name="components/home/Hero.tsx" />)}
        </div>
      </div>

      <div className="container mx-auto px-6" data-unique-id="800cb559-5e7b-4425-a509-4d4c7afd128b" data-file-name="components/home/Hero.tsx">
        <div className="grid grid-cols-12 gap-8" data-unique-id="3ef9c07f-26ef-4e93-b2e8-203a755d9f54" data-file-name="components/home/Hero.tsx">
          <div className="col-span-12 md:col-span-8 lg:col-span-7" data-unique-id="05db7bbf-7ac5-4f44-9a32-52047f92f83a" data-file-name="components/home/Hero.tsx">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} data-unique-id="87ddc721-b411-4a93-a589-2cf6197d4bfe" data-file-name="components/home/Hero.tsx">
              <h2 className="text-lg font-medium text-chart-1 mb-2" data-unique-id="6fe77a61-8d49-4497-9868-9cc4c8d5ae7b" data-file-name="components/home/Hero.tsx">
                <motion.span initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.1,
                duration: 0.5
              }} className="inline-block" data-unique-id="abb3c620-9e09-4628-b860-f1256a0ddf4c" data-file-name="components/home/Hero.tsx">
                  <span className="editable-text" data-unique-id="51d57d0f-b6c2-4c64-9cdf-9bb82bf01875" data-file-name="components/home/Hero.tsx">Hello, I'm</span>
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
          }} className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4" data-unique-id="f7f067ef-3927-481b-ac0a-ef16199fcf90" data-file-name="components/home/Hero.tsx">
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
            }} className="inline-block text-chart-1" data-unique-id="19e71fbd-a9a9-4a39-a18b-cfd7e4b13794" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="708e4cba-faa3-4ac6-ba07-47f1342cfb4d" data-file-name="components/home/Hero.tsx">T</span>
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
            }} className="inline-block" data-unique-id="32624b0e-ece2-4ee6-8ba0-d0d61a69363f" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="76a2d016-dfd9-4d03-8d23-0c59f074a275" data-file-name="components/home/Hero.tsx">anveer</span>
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
            }} className="inline-block ml-3 text-chart-1" data-unique-id="a19cb323-3fee-4abd-8486-fe8e8b1d717a" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="fa04416c-1dd7-4a4c-bbe5-11e8b9f93dc9" data-file-name="components/home/Hero.tsx">L</span>
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
            }} className="inline-block" data-unique-id="5d77b3dd-c81d-4830-bc54-3065273dc827" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="13b415ea-5570-4707-9ade-41d4a0d6c193" data-file-name="components/home/Hero.tsx">ashari</span>
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
          }} className="relative inline-flex h-10 overflow-hidden mb-8" data-unique-id="2083c254-f989-457a-83ec-e56aa7495e39" data-file-name="components/home/Hero.tsx">
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
            }} className="absolute text-2xl sm:text-3xl font-medium text-muted-foreground" data-unique-id="0291fa16-9c34-4611-bf26-3f5e6a4ff837" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="e197ce18-38b1-43bd-86ae-e6e46ef59422" data-file-name="components/home/Hero.tsx">Library and Information Science Graduate</span>
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
            }} className="absolute text-2xl sm:text-3xl font-medium text-muted-foreground" data-unique-id="aeec10c0-d67d-41f0-a9da-d3e0a51dd489" data-file-name="components/home/Hero.tsx">
                <span className="flex items-center" data-unique-id="1170db62-8ec6-4f3e-8ffe-d531b49616de" data-file-name="components/home/Hero.tsx">
                  <BookOpen size={20} className="mr-2 text-chart-2" />
                  <span className="editable-text" data-unique-id="658d45b8-5279-4b8e-b981-03d11df5049d" data-file-name="components/home/Hero.tsx">Digital Library Specialist</span>
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
          }} data-unique-id="ad894192-b711-4789-81d0-c08be05db95e" data-file-name="components/home/Hero.tsx">
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed" data-unique-id="bdc6d7ae-f55f-440e-ada1-efb086a39183" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="ed492818-6e33-4b2b-bff3-7877027ac371" data-file-name="components/home/Hero.tsx">
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
          }} className="flex flex-wrap gap-4 sm:flex-row" data-unique-id="8e7aac8f-5ce6-4098-ba4c-bed16e60c369" data-file-name="components/home/Hero.tsx">
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
            }} data-unique-id="c3862287-de6b-477d-a8e7-c5282e5319bd" data-file-name="components/home/Hero.tsx">
                <Mail size={18} />
                <span className="editable-text" data-unique-id="1292e624-8a93-4881-9c73-f92333e7027e" data-file-name="components/home/Hero.tsx">Contact Me</span>
              </motion.a>
              
              <motion.a href="#" whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }} whileTap={{
              scale: 0.95
            }} className="flex items-center gap-2 bg-chart-2 hover:bg-chart-2/90 text-white px-6 py-3 rounded-lg transition-all" data-unique-id="2ec67314-8365-491f-927b-3e8c2cd2b4af" data-file-name="components/home/Hero.tsx">
                <Download size={18} />
                <span className="editable-text" data-unique-id="dc84e81b-9daf-4e31-8aae-1113aceeaadd" data-file-name="components/home/Hero.tsx">Download Resume</span>
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
            }} data-unique-id="16d372f0-d4a3-40a4-b2dc-70a0a2d92be8" data-file-name="components/home/Hero.tsx">
                <Briefcase size={18} />
                <span className="editable-text" data-unique-id="a42edca0-fff3-46f7-b95a-a368f5ed6295" data-file-name="components/home/Hero.tsx">Hire Me</span>
              </motion.a>
            </motion.div>
          </div>
          
          <div className="hidden lg:col-span-5 lg:block" data-unique-id="768d7ed3-c8c7-4fe2-a327-4ab11f7f2d75" data-file-name="components/home/Hero.tsx">
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
          }} className="relative w-full h-full flex items-center justify-center" data-unique-id="f752c92b-7695-407d-9294-cf84a286ea35" data-file-name="components/home/Hero.tsx">
              <div className="absolute w-[380px] h-[380px] bg-chart-1/10 rounded-full" data-unique-id="8a96d5b9-de9e-4125-a636-bc3957df786c" data-file-name="components/home/Hero.tsx"></div>
              <motion.div animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute w-[420px] h-[420px] border-2 border-dashed border-chart-2/30 rounded-full" data-unique-id="d23e7787-7379-4e51-bcaa-678659706d49" data-file-name="components/home/Hero.tsx" />
              
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
            }} data-unique-id="cf2b9415-b4c5-485c-bae7-537d1ed42c0e" data-file-name="components/home/Hero.tsx">
                <div className="relative overflow-hidden rounded-xl border-4 border-chart-1/20 shadow-xl" data-unique-id="9865c867-cef8-4b8c-91b5-f45efcbbc741" data-file-name="components/home/Hero.tsx">
                  <img src="https://pre-built-images.s3.amazonaws.com/webapp-uploads/00065ab989e6237638357f010d68f319.webp" alt="Tanveer Lashari" className="w-[340px] h-[340px] object-cover object-center" data-unique-id="e7a429cd-641d-481c-bc8a-af7d1b6bf585" data-file-name="components/home/Hero.tsx" />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-chart-1/20 to-transparent" data-unique-id="efdab55e-2dd6-4cae-a794-f61fa7d96c02" data-file-name="components/home/Hero.tsx"></div>
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
    }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2" data-unique-id="dca6e7c4-762d-40ad-b821-a6f1a5fcd3e4" data-file-name="components/home/Hero.tsx">
        <motion.div whileHover={{
        scale: 1.2
      }} className="bg-background/50 backdrop-blur-sm p-2 rounded-full border border-border" data-unique-id="0eafdf9f-d6e4-4a04-97fd-08f9cf6b0da3" data-file-name="components/home/Hero.tsx">
          <ArrowDown className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>;
}