'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Briefcase, BookOpen } from 'lucide-react';
export default function Hero() {
  return <section id="home" className="relative h-screen flex items-center" data-unique-id="415c35fb-91a0-4a93-a241-437fd424e3cc" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden" data-unique-id="fb2f7f04-ce88-48c6-b141-075ff146dfe6" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-bl from-chart-1/20 to-transparent" data-unique-id="693f2f82-5fd8-44fd-8d61-e860247d8403" data-file-name="components/home/Hero.tsx"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-10 bg-gradient-to-tr from-chart-2/20 to-transparent" data-unique-id="da9d3ec2-2a42-4f2d-a1db-d118e93b0718" data-file-name="components/home/Hero.tsx"></div>
        
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
      }} className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-chart-1" data-unique-id="93d912f4-b9d9-45af-8735-c8f71746b0fe" data-file-name="components/home/Hero.tsx" />
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
      }} className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-chart-2" data-unique-id="2c48f474-0664-4241-a703-1628e95dd7b5" data-file-name="components/home/Hero.tsx" />
        
        {/* Animated dots grid */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-30" data-unique-id="b0165668-e686-4e26-909a-610623467fd5" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
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
        }} className="w-1.5 h-1.5 rounded-full bg-chart-4 mx-auto my-auto" data-unique-id="a184f577-40b8-421e-809f-78102b5ef780" data-file-name="components/home/Hero.tsx" />)}
        </div>
      </div>

      <div className="container mx-auto px-6" data-unique-id="24ba183c-f3d5-4ae7-a8b2-c750a1ed891c" data-file-name="components/home/Hero.tsx">
        <div className="grid grid-cols-12 gap-6 md:gap-8" data-unique-id="fc460ce3-2a8f-4e6d-ac7a-e5a9e5c31904" data-file-name="components/home/Hero.tsx">
          <div className="col-span-12 md:col-span-8 lg:col-span-7" data-unique-id="c9ad5a6e-44c5-44ae-9b44-dafe259cf409" data-file-name="components/home/Hero.tsx">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} data-unique-id="4492ee9b-9936-49aa-b4e9-dc937d87c756" data-file-name="components/home/Hero.tsx">
              <h2 className="text-lg font-medium text-chart-1 mb-2" data-unique-id="a3afe5bf-47d8-4886-9793-fa5d2418ea17" data-file-name="components/home/Hero.tsx">
                <motion.span initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.1,
                duration: 0.5
              }} className="inline-block" data-unique-id="00811f83-0a7a-450f-a47e-e3ced8f03bed" data-file-name="components/home/Hero.tsx">
                  <span className="editable-text" data-unique-id="eb8950ec-831f-4f3c-9c96-bbf318e26df2" data-file-name="components/home/Hero.tsx">Hello, I'm</span>
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
          }} className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 drop-shadow-sm" data-unique-id="a6562344-c460-4bd2-bed7-bb6e16d6851e" data-file-name="components/home/Hero.tsx">
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
            }} className="inline-block text-chart-1" data-unique-id="02038034-d434-4c2c-80a2-a9ac511907dc" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="25ee99df-5ac5-4396-8994-af4bb1af9632" data-file-name="components/home/Hero.tsx">T</span>
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
            }} className="inline-block" data-unique-id="ec577592-a353-4d35-a0c6-5b9436b9891f" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="ec7c1b63-c1bc-43bc-b348-091e985b1025" data-file-name="components/home/Hero.tsx">anveer</span>
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
            }} className="inline-block ml-3 text-chart-1" data-unique-id="bf6a2415-364a-4812-98d4-1315f5c03c19" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="9c6880a6-332c-4709-860e-45dc9b688a80" data-file-name="components/home/Hero.tsx">L</span>
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
            }} className="inline-block" data-unique-id="564ea106-8392-4272-aad1-ccdf856b8ec8" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="c0419471-6034-45db-8679-ff1da88f13dd" data-file-name="components/home/Hero.tsx">ashari</span>
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
          }} className="relative inline-flex h-10 overflow-hidden mb-8" data-unique-id="ed6eb817-e74b-4471-9f8c-8e7e3e37d5dd" data-file-name="components/home/Hero.tsx">
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
            }} className="absolute text-2xl sm:text-3xl font-medium text-muted-foreground" data-unique-id="17c89587-0e21-4a13-be0a-b7aa5166cd9d" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="f6253846-8f38-422b-b1e0-95fb24c8ca75" data-file-name="components/home/Hero.tsx">Library and Information Science Graduate</span>
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
            }} className="absolute text-2xl sm:text-3xl font-medium text-muted-foreground" data-unique-id="11df3755-7661-46bd-a2c2-a5bb9a0713b9" data-file-name="components/home/Hero.tsx">
                <span className="flex items-center" data-unique-id="ed76128c-8ff4-42e5-85a3-63d8921cfbdf" data-file-name="components/home/Hero.tsx">
                  <BookOpen size={20} className="mr-2 text-chart-2" />
                  <span className="editable-text" data-unique-id="8dd4a386-3fb2-449a-be89-47e6f19e662d" data-file-name="components/home/Hero.tsx">Digital Library Specialist</span>
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
          }} data-unique-id="6bffd5fd-fda9-4331-8968-2f4adb290c6b" data-file-name="components/home/Hero.tsx">
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed" data-unique-id="52c13a79-116e-4cb8-871d-94a3476a4deb" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="0f8882a1-4082-4637-b8d0-f18792a9eda8" data-file-name="components/home/Hero.tsx">
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
          }} className="flex flex-wrap gap-4 sm:flex-row" data-unique-id="5e91120f-5900-4141-8877-251000c48c5c" data-file-name="components/home/Hero.tsx">
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
            }} data-unique-id="7d29f6ae-aaa2-487e-af47-2f49e987abc3" data-file-name="components/home/Hero.tsx">
                <Mail size={18} />
                <span data-unique-id="f7cbbb08-1d90-4b8f-a391-ffda217427d5" data-file-name="components/home/Hero.tsx"><span className="editable-text" data-unique-id="2e9594c0-ebd3-4623-80bf-06628a713192" data-file-name="components/home/Hero.tsx">Contact Me</span></span>
              </motion.a>
              
              <motion.a href="#" whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }} whileTap={{
              scale: 0.95
            }} className="flex items-center gap-2 bg-chart-2 hover:bg-chart-2/90 text-white px-6 py-3 rounded-lg transition-all" data-unique-id="53e4ef7d-7834-426a-aa13-dc9936b956ff" data-file-name="components/home/Hero.tsx">
                <Download size={18} />
                <span className="editable-text" data-unique-id="daba44d9-f097-4719-9394-647c7a4492a6" data-file-name="components/home/Hero.tsx">Download Resume</span>
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
            }} data-unique-id="79961c66-1ea6-4a65-8fab-ef78b0287266" data-file-name="components/home/Hero.tsx">
                <Briefcase size={18} />
                <span className="editable-text" data-unique-id="d707d395-acf0-46dc-9a8f-2de84896331f" data-file-name="components/home/Hero.tsx">Hire Me</span>
              </motion.a>
            </motion.div>
          </div>
          
          <div className="col-span-12 md:col-span-4 lg:col-span-5 mt-12 md:mt-0" data-unique-id="36d9e1bb-4706-4bf6-9738-e3cb3bae33e5" data-file-name="components/home/Hero.tsx">
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
          }} className="relative w-full h-full flex items-center justify-center" data-unique-id="bbbe2f83-fdca-4958-a52b-2eccfb7839e5" data-file-name="components/home/Hero.tsx">
              <div className="absolute w-[280px] md:w-[320px] lg:w-[380px] h-[280px] md:h-[320px] lg:h-[380px] bg-chart-1/10 rounded-full" data-unique-id="c99de33f-be05-47af-b29c-73832a4d2e4d" data-file-name="components/home/Hero.tsx"></div>
              <motion.div animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute w-[320px] md:w-[360px] lg:w-[420px] h-[320px] md:h-[360px] lg:h-[420px] border-2 border-dashed border-chart-2/30 rounded-full" data-unique-id="13a99b72-ed8b-4054-a4d3-705a9d320d29" data-file-name="components/home/Hero.tsx" />
              
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
            }} data-unique-id="3fad91fe-872a-46bc-8d35-202a655a0852" data-file-name="components/home/Hero.tsx">
                <div className="relative overflow-hidden rounded-xl border-4 border-chart-1/20 shadow-xl" data-unique-id="e55f4c33-03d9-4c6a-b815-97f7fcb75b3d" data-file-name="components/home/Hero.tsx">
                  <img src="https://pre-built-images.s3.amazonaws.com/webapp-uploads/00065ab989e6237638357f010d68f319.webp" alt="Tanveer Lashari" className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] object-cover object-center" data-unique-id="cdf0d3e7-75b5-4ef8-92df-985a35b4b8b9" data-file-name="components/home/Hero.tsx" />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-chart-1/20 to-transparent" data-unique-id="b91a2110-d4b0-4126-9e69-6b6e92c33e69" data-file-name="components/home/Hero.tsx"></div>
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
    }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2" data-unique-id="efb7d4fd-1043-49af-bec2-8cb85639f743" data-file-name="components/home/Hero.tsx">
        <motion.div whileHover={{
        scale: 1.2
      }} className="bg-background/50 backdrop-blur-sm p-2 rounded-full border border-border" data-unique-id="e92bd53f-84a8-4ad0-a9fb-a3819c00d4ca" data-file-name="components/home/Hero.tsx">
          <ArrowDown className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>;
}