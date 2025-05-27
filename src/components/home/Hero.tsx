'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Briefcase, BookOpen } from 'lucide-react';
export default function Hero() {
  return <section id="home" className="relative h-screen flex items-center" data-unique-id="56a9162f-23ec-48a7-a597-ca2e4f2e8f39" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden" data-unique-id="07b91c02-0625-4c88-b056-057eee2fb25a" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-bl from-chart-1/20 to-transparent" data-unique-id="e89d9ffc-4e78-42bb-bfa3-9bea49df182c" data-file-name="components/home/Hero.tsx"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-10 bg-gradient-to-tr from-chart-2/20 to-transparent" data-unique-id="e991ba0c-f625-49c6-808f-dac732e43a05" data-file-name="components/home/Hero.tsx"></div>
        
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
      }} className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-chart-1" data-unique-id="9abc4a17-f4b3-4db8-93f2-3bf043b33303" data-file-name="components/home/Hero.tsx" />
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
      }} className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-chart-2" data-unique-id="4bcbb9c4-324c-483c-9106-3fe925947994" data-file-name="components/home/Hero.tsx" />
        
        {/* Animated dots grid */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-30" data-unique-id="a0b6805f-522f-4b53-a35c-b5e18bd597ac" data-file-name="components/home/Hero.tsx" data-dynamic-text="true">
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
        }} className="w-1.5 h-1.5 rounded-full bg-chart-4 mx-auto my-auto" data-unique-id="1980a577-3fb4-4363-be4f-3f94129337d0" data-file-name="components/home/Hero.tsx" />)}
        </div>
      </div>

      <div className="container mx-auto px-6" data-unique-id="9fdccea3-91a4-4396-8436-45da405868b8" data-file-name="components/home/Hero.tsx">
        <div className="grid grid-cols-12 gap-8" data-unique-id="73ea16fc-e1d0-4863-8729-71a6125e1c63" data-file-name="components/home/Hero.tsx">
          <div className="col-span-12 md:col-span-8 lg:col-span-7" data-unique-id="f7908e6a-c1ed-4d09-805e-4e743c43dc6f" data-file-name="components/home/Hero.tsx">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} data-unique-id="06c4b15f-aef6-4593-b4e7-9752601b378c" data-file-name="components/home/Hero.tsx">
              <h2 className="text-lg font-medium text-chart-1 mb-2" data-unique-id="7450e3b6-c854-4420-b73d-c7b5c76510cd" data-file-name="components/home/Hero.tsx">
                <motion.span initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.1,
                duration: 0.5
              }} className="inline-block" data-unique-id="a5afc628-803a-429c-aeec-da2995a7635a" data-file-name="components/home/Hero.tsx">
                  <span className="editable-text" data-unique-id="9613a9fc-c681-4177-b828-4ea88439dfd6" data-file-name="components/home/Hero.tsx">Hello, I'm</span>
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
          }} className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 drop-shadow-sm" data-unique-id="71610667-5a15-472a-a563-5de49efbe1e6" data-file-name="components/home/Hero.tsx">
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
            }} className="inline-block text-chart-1" data-unique-id="660528dc-d9c8-4df4-a0d4-3cfef461e934" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="8af515d0-2d70-4407-8d8b-182c565c53c0" data-file-name="components/home/Hero.tsx">T</span>
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
            }} className="inline-block" data-unique-id="870e0c29-9f29-4a1e-822e-c2f99efecca0" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="6b00c473-dcef-4cba-994d-afa72303f053" data-file-name="components/home/Hero.tsx">anveer</span>
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
            }} className="inline-block ml-3 text-chart-1" data-unique-id="837271b6-780c-40d4-a63d-b430506f944b" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="fd614701-c890-425e-9bc1-4d6bb287b097" data-file-name="components/home/Hero.tsx">L</span>
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
            }} className="inline-block" data-unique-id="16325d4f-58eb-412b-81d2-abff2a120d9d" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="261fcbb4-37a8-4045-9423-eb34843883bf" data-file-name="components/home/Hero.tsx">ashari</span>
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
          }} className="relative inline-flex h-10 overflow-hidden mb-8" data-unique-id="a4b3bf17-1111-49c2-beeb-bc507ba57fcf" data-file-name="components/home/Hero.tsx">
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
            }} className="absolute text-2xl sm:text-3xl font-medium text-muted-foreground" data-unique-id="63f97b50-170e-4575-8cd2-fbb9226d8bf4" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="38a1b24d-6562-41bc-b3af-056d7226b366" data-file-name="components/home/Hero.tsx">Library and Information Science Graduate</span>
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
            }} className="absolute text-2xl sm:text-3xl font-medium text-muted-foreground" data-unique-id="eafa9957-1054-4bcc-82ad-ff6913f0da2d" data-file-name="components/home/Hero.tsx">
                <span className="flex items-center" data-unique-id="c1df71ef-db32-46e7-bf2d-b477c866158b" data-file-name="components/home/Hero.tsx">
                  <BookOpen size={20} className="mr-2 text-chart-2" />
                  <span className="editable-text" data-unique-id="58ef288a-6abc-4022-9628-1d94e391d3b6" data-file-name="components/home/Hero.tsx">Digital Library Specialist</span>
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
          }} data-unique-id="8958c5cb-39db-4749-b221-0db1c37ac04f" data-file-name="components/home/Hero.tsx">
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed" data-unique-id="403a52f3-a14d-4637-86e0-0bcfede8373e" data-file-name="components/home/Hero.tsx">
                <span className="editable-text" data-unique-id="39ab276f-a5ec-4291-a620-54747bb0c814" data-file-name="components/home/Hero.tsx">
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
          }} className="flex flex-wrap gap-4 sm:flex-row" data-unique-id="b2985c98-037d-434b-9dc3-e63fe0e7c28e" data-file-name="components/home/Hero.tsx">
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
            }} data-unique-id="0eaab82e-c118-4b55-898e-c6fd91ef567c" data-file-name="components/home/Hero.tsx">
                <Mail size={18} />
                <span data-unique-id="7040fc4b-3556-4697-b5fc-581716183121" data-file-name="components/home/Hero.tsx"><span className="editable-text" data-unique-id="ca3071b0-f47c-4271-ab91-7d40edef3966" data-file-name="components/home/Hero.tsx">Contact Me</span></span>
              </motion.a>
              
              <motion.a href="#" whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }} whileTap={{
              scale: 0.95
            }} className="flex items-center gap-2 bg-chart-2 hover:bg-chart-2/90 text-white px-6 py-3 rounded-lg transition-all" data-unique-id="c54dee1c-4e4e-4fe1-9303-0a5d9caa6e81" data-file-name="components/home/Hero.tsx">
                <Download size={18} />
                <span className="editable-text" data-unique-id="4ea852d7-71da-4682-b082-a7d15b47d09f" data-file-name="components/home/Hero.tsx">Download Resume</span>
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
            }} data-unique-id="7886f145-0e36-4c39-9867-88b88109c6c6" data-file-name="components/home/Hero.tsx">
                <Briefcase size={18} />
                <span className="editable-text" data-unique-id="0007ebff-0f0a-4231-be68-de39d92e8b22" data-file-name="components/home/Hero.tsx">Hire Me</span>
              </motion.a>
            </motion.div>
          </div>
          
          <div className="hidden lg:col-span-5 lg:block" data-unique-id="b3ddd2e7-a162-404a-a8ae-29bf98732cd7" data-file-name="components/home/Hero.tsx">
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
          }} className="relative w-full h-full flex items-center justify-center" data-unique-id="b0796cd2-5014-4c03-9d55-7b54f8e0fe57" data-file-name="components/home/Hero.tsx">
              <div className="absolute w-[380px] h-[380px] bg-chart-1/10 rounded-full" data-unique-id="9a241ecf-e905-40af-bc02-cf3945e7eb23" data-file-name="components/home/Hero.tsx"></div>
              <motion.div animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute w-[420px] h-[420px] border-2 border-dashed border-chart-2/30 rounded-full" data-unique-id="dff5084b-ee60-432c-879e-1f66b3ffdb3b" data-file-name="components/home/Hero.tsx" />
              
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
            }} data-unique-id="896e3d74-919e-4d1c-8684-34455744bd01" data-file-name="components/home/Hero.tsx">
                <div className="relative overflow-hidden rounded-xl border-4 border-chart-1/20 shadow-xl" data-unique-id="3620a099-9eec-4eb6-85fd-008a737ce1cf" data-file-name="components/home/Hero.tsx">
                  <img src="https://pre-built-images.s3.amazonaws.com/webapp-uploads/00065ab989e6237638357f010d68f319.webp" alt="Tanveer Lashari" className="w-[340px] h-[340px] object-cover object-center" data-unique-id="cd3750b4-39f9-41da-b244-9f80bd86b9ed" data-file-name="components/home/Hero.tsx" />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-chart-1/20 to-transparent" data-unique-id="ed6d9fdd-06c2-4b39-ba71-9d0d93092c73" data-file-name="components/home/Hero.tsx"></div>
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
    }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2" data-unique-id="6b103886-e1af-477f-a208-02b182429335" data-file-name="components/home/Hero.tsx">
        <motion.div whileHover={{
        scale: 1.2
      }} className="bg-background/50 backdrop-blur-sm p-2 rounded-full border border-border" data-unique-id="f6ad27d7-6748-40e9-828f-2f8b10aeb139" data-file-name="components/home/Hero.tsx">
          <ArrowDown className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>;
}