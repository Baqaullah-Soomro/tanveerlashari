'use client';

import { motion } from 'framer-motion';
import { Download, File, FileText, Link as LinkIcon } from 'lucide-react';
export default function Resume() {
  return <section id="resume" className="py-24 bg-chart-1/5" data-unique-id="49c11536-6112-484e-8d01-62b34880f3da" data-file-name="components/home/Resume.tsx">
      <div className="container mx-auto px-6" data-unique-id="542d0645-9ef6-47db-a5bd-8ab09d156bf2" data-file-name="components/home/Resume.tsx">
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
      }} className="text-center mb-16" data-unique-id="18d954f8-0446-4e99-a6cc-673f254d61a1" data-file-name="components/home/Resume.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="3ca320e5-0d40-4b8b-890b-a8a4050b764e" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="85185a0c-ceb8-4a13-9989-bb994e5fcbd3" data-file-name="components/home/Resume.tsx">Resume</span></h2>
          <div className="h-1 w-20 bg-chart-5 mx-auto" data-unique-id="c74b2712-38de-4eaa-ae44-fb7420168c53" data-file-name="components/home/Resume.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="12a84c47-2427-487a-9fc8-348219472510" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="59e0205e-681d-4a1c-ba75-96665d0c9c55" data-file-name="components/home/Resume.tsx">
            View and download my complete resume with detailed information about my education, skills, and work experience
          </span></p>
        </motion.div>

        <div className="max-w-5xl mx-auto" data-unique-id="2a7e2e2b-0279-4f70-b476-132697ffc323" data-file-name="components/home/Resume.tsx">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8" data-unique-id="7b0b3444-7514-478f-a392-daf41471bee9" data-file-name="components/home/Resume.tsx" data-dynamic-text="true">
            {/* Resume preview column */}
            <div className="md:col-span-3" data-unique-id="b2702429-c534-46ea-837c-42b6a9e2963f" data-file-name="components/home/Resume.tsx">
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
              duration: 0.5,
              delay: 0.1
            }} className="bg-card shadow-lg rounded-lg overflow-hidden border border-border/30" data-unique-id="42a3b2e3-d007-433d-b5ba-e101e5f5b695" data-file-name="components/home/Resume.tsx">
                <div className="bg-chart-1/10 p-4 flex justify-between items-center border-b border-border/30" data-unique-id="5bab220c-9fcb-4455-92ba-b8fb4d16856c" data-file-name="components/home/Resume.tsx">
                  <h3 className="font-bold text-lg flex items-center" data-unique-id="5e9ee24f-b667-4cd7-9b5d-0ada21659551" data-file-name="components/home/Resume.tsx">
                    <FileText className="mr-2 text-chart-1" size={20} /><span className="editable-text" data-unique-id="b99f5578-9cc3-4fb1-a687-c6e5a5850e9b" data-file-name="components/home/Resume.tsx">
                    Resume Preview
                  </span></h3>
                  <span className="text-xs text-muted-foreground" data-unique-id="421e0e8c-cb43-4876-900d-636cc8756173" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="56954c66-5b3c-4546-8b57-69561325ceb7" data-file-name="components/home/Resume.tsx">PDF, 1 page</span></span>
                </div>
                
                <div className="p-4" data-unique-id="1a956e30-159d-420c-86ce-8594832e4863" data-file-name="components/home/Resume.tsx">
                  <div className="aspect-[3/4] bg-background rounded-md border border-border/30 overflow-hidden" data-unique-id="eacb6dbc-150d-41aa-b8fa-0d561471462c" data-file-name="components/home/Resume.tsx">
                    <div className="w-full h-full p-4" data-unique-id="38731d44-feaf-46f0-b81d-530810c38cd4" data-file-name="components/home/Resume.tsx" data-dynamic-text="true">
                      {/* Resume content preview */}
                      <div className="text-sm space-y-4" data-unique-id="9b49a1b8-e34a-4fb1-8f58-91e70b728720" data-file-name="components/home/Resume.tsx">
                        <div className="text-center space-y-1" data-unique-id="8c0c515a-0839-44d0-8030-88160c060697" data-file-name="components/home/Resume.tsx">
                          <h1 className="text-xl font-bold text-chart-1" data-unique-id="6acd8d58-5c52-4a1a-bd0d-9b6d2bd9a050" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="94cd8454-2e67-4379-8322-ee21d9ee08bb" data-file-name="components/home/Resume.tsx">TANVEER LASHARI</span></h1>
                          <div className="flex justify-center gap-3 text-xs" data-unique-id="8b76a89c-1781-4f46-9df4-fcfb973f8833" data-file-name="components/home/Resume.tsx">
                            <span data-unique-id="51b92081-d269-423e-b953-cee59361469b" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="d34d85d7-5fcd-4ee7-a55d-6b872d71487d" data-file-name="components/home/Resume.tsx">0312-0362742</span></span>
                            <span data-unique-id="414d1b39-7301-4980-a9b7-5cd3ca87726c" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="8d8777ed-a57a-43ce-87c5-8b5096b51ecc" data-file-name="components/home/Resume.tsx">•</span></span>
                            <span className="text-chart-1" data-unique-id="e439c3da-bb6c-4499-9ae8-7d1346de8da1" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="1e5ff757-03cb-411a-9953-f7b35c778b95" data-file-name="components/home/Resume.tsx">lasharitanveerahmed68@gmail.com</span></span>
                          </div>
                        </div>
                        
                        <div data-unique-id="374a039f-9ad2-4be9-a8f0-7290043b528b" data-file-name="components/home/Resume.tsx">
                          <h2 className="text-md font-bold border-b border-border/70 mb-1" data-unique-id="0d2e489c-72c0-4aad-a19f-7f4896313658" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="d2256b0b-0a56-437c-bb02-48ad01d06be9" data-file-name="components/home/Resume.tsx">EDUCATION</span></h2>
                          <div className="text-xs mb-1" data-unique-id="14c58ce8-1077-44f0-95b2-5c52e602c131" data-file-name="components/home/Resume.tsx">
                            <div className="flex justify-between" data-unique-id="b5103592-2c4c-4263-8269-4417d9397442" data-file-name="components/home/Resume.tsx">
                              <span className="font-semibold" data-unique-id="50b6ef69-f778-41f2-aab6-bda8a8b3c415" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="5d925fc1-706d-4e6a-86f4-d4a54fd5b0d2" data-file-name="components/home/Resume.tsx">Bachelor of Library Information Science and Archives Studies</span></span>
                              <span data-unique-id="d1775e82-d02a-4ca9-8ba7-a3b70bc99134" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="979be305-e5a3-4dd9-83b3-44bf9c1fc821" data-file-name="components/home/Resume.tsx">2020-2023</span></span>
                            </div>
                            <div className="flex justify-between" data-unique-id="36a46a30-6c40-4ccd-a570-a4b4bd8f3c13" data-file-name="components/home/Resume.tsx">
                              <span data-unique-id="548e5063-43a0-4e09-bb37-811a4f4f8812" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="e7816dd5-ff43-4cec-ac17-90f633890d71" data-file-name="components/home/Resume.tsx">University of Sindh</span></span>
                              <span className="text-chart-1" data-unique-id="10fe7e21-e55c-4a81-881e-b4e0c0153084" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="8e90bc55-acf0-4bc1-adfa-e30eab27802b" data-file-name="components/home/Resume.tsx">1st Division (CGPA 3.59)</span></span>
                            </div>
                          </div>
                          <div className="text-xs" data-unique-id="b95221b2-b433-4540-a1b6-1176c32904ab" data-file-name="components/home/Resume.tsx">
                            <div className="flex justify-between" data-unique-id="92f6bf77-088c-40d9-928c-aad190ddc6f7" data-file-name="components/home/Resume.tsx">
                              <span data-unique-id="5d01db64-f6d0-4dcc-9d0c-ad389a7fdc76" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="4e31edd5-3606-4b35-b3e4-7c7eb4799ee3" data-file-name="components/home/Resume.tsx">Intermediate</span></span>
                              <span data-unique-id="dbb425e5-7a6a-46f3-b4d6-bdb83cb53f2b" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="20ef8301-083e-47f0-9c93-81d81120ffe4" data-file-name="components/home/Resume.tsx">2016-2018</span></span>
                            </div>
                            <span data-unique-id="b85edb8a-5105-4c5b-9713-f67d49963895" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="7de3dbd8-1918-4760-be95-956e6f16a1c3" data-file-name="components/home/Resume.tsx">Hyderabad Board • "B" Grade</span></span>
                          </div>
                        </div>
                        
                        <div data-unique-id="95cdc5a6-bd33-46e3-baf4-e7e5321c9e50" data-file-name="components/home/Resume.tsx">
                          <h2 className="text-md font-bold border-b border-border/70 mb-1" data-unique-id="345162ce-aee8-4ffa-b1fd-f1f7a99376ac" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="8eb7fcd2-ea1a-466c-aa26-c72584a05226" data-file-name="components/home/Resume.tsx">EXPERIENCE</span></h2>
                          <div className="text-xs space-y-2" data-unique-id="c1f740d5-a17f-436b-af41-8d4098df19d7" data-file-name="components/home/Resume.tsx">
                            <div data-unique-id="9c192e80-c2ff-4ce3-9f3b-4da22cd2f526" data-file-name="components/home/Resume.tsx">
                              <div className="flex justify-between font-medium" data-unique-id="d0736138-b73c-4f06-ba6c-770fda945346" data-file-name="components/home/Resume.tsx">
                                <span data-unique-id="219eea5c-7468-471c-8a01-5e8dd243a005" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="84390d7f-67a5-48dc-a603-197869fffbf2" data-file-name="components/home/Resume.tsx">Faculty of Pharmacy Seminar Library</span></span>
                                <span data-unique-id="d4c8d141-1286-40c7-bbec-aa3da4bbdf67" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="17448945-8930-4659-85f4-859b86392d9a" data-file-name="components/home/Resume.tsx">Aug - Dec 2023</span></span>
                              </div>
                              <span className="italic" data-unique-id="9299205c-7d0f-40d1-b9e0-88d075ccc467" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="6c110a61-0679-42c1-a694-4ce4d0426475" data-file-name="components/home/Resume.tsx">University of Sindh</span></span>
                            </div>
                            <div data-unique-id="68c3b60f-f001-48e0-bba2-ad7b3a6c3955" data-file-name="components/home/Resume.tsx">
                              <div className="flex justify-between font-medium" data-unique-id="f122d991-a13f-4bd8-a80a-36b31105c6fe" data-file-name="components/home/Resume.tsx">
                                <span data-unique-id="12377c8f-2c64-4d8f-a339-d7795d14374c" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="e9508729-9265-4b6c-b7da-a034a92d1862" data-file-name="components/home/Resume.tsx">Department of Sindhi Seminar Library</span></span>
                                <span data-unique-id="d1602596-5428-4bc7-9cb0-3d52604edf90" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="1537d3c8-fcf5-45ef-9207-fe780bc0a26c" data-file-name="components/home/Resume.tsx">Oct - Dec 2022</span></span>
                              </div>
                              <span className="italic" data-unique-id="025e9cb8-d431-4121-818b-55da0f6010e3" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="fbb72390-6d60-45ec-a9b8-b9df985a73b4" data-file-name="components/home/Resume.tsx">University of Sindh</span></span>
                            </div>
                          </div>
                        </div>
                        
                        <div data-unique-id="2e5ec8ce-34cd-45ad-8e25-2d3514db0333" data-file-name="components/home/Resume.tsx">
                          <h2 className="text-md font-bold border-b border-border/70 mb-1" data-unique-id="f9219ffd-f78a-478c-9479-ae3c11dae068" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="af3089d2-a243-4bd3-9fa0-2b84afbe8a75" data-file-name="components/home/Resume.tsx">SKILLS</span></h2>
                          <div className="grid grid-cols-2 gap-x-4 text-xs" data-unique-id="d8db44ea-14a9-4400-a760-ac827d3c6855" data-file-name="components/home/Resume.tsx">
                            <ul className="list-disc list-inside" data-unique-id="5715db0d-8001-48d1-820a-4a4540f69e3f" data-file-name="components/home/Resume.tsx">
                              <li data-unique-id="e08dae13-5e11-4eba-9637-f372ed3adb07" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="caf137d9-8123-4534-953b-6184ce089d31" data-file-name="components/home/Resume.tsx">Library Organization</span></li>
                              <li data-unique-id="99791ede-2120-4120-9a1e-855dd62cfa1e" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="7e965e78-5fbb-421f-8f5f-8ba616bc2433" data-file-name="components/home/Resume.tsx">Cataloging & Classification</span></li>
                              <li data-unique-id="8a8ef0cf-d91f-42b7-9bd2-6da3cb39dea1" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="3c7ed661-3612-4a2c-8889-0aecd4602bc5" data-file-name="components/home/Resume.tsx">Library Automation</span></li>
                            </ul>
                            <ul className="list-disc list-inside" data-unique-id="5de22497-e746-46c1-8bee-47563f9adcde" data-file-name="components/home/Resume.tsx">
                              <li data-unique-id="adb127d9-b2e6-45d5-9aa3-ae6459cce84b" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="df5e9260-3bd4-4ccc-83b0-d0f45953d7b4" data-file-name="components/home/Resume.tsx">Koha Software</span></li>
                              <li data-unique-id="58f0e93d-80b1-4b86-8851-1906816a95dd" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="bef4798a-337e-44d0-bd76-27605e7ce33b" data-file-name="components/home/Resume.tsx">Information Literacy</span></li>
                              <li data-unique-id="eef892ad-a39c-4979-8b55-e3efa1871dba" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="e44091da-392b-41e2-b226-152d99b3fe0b" data-file-name="components/home/Resume.tsx">Time Management</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Download options column */}
            <div className="md:col-span-2" data-unique-id="7945cad1-2ebd-4da6-92a0-bb40c788b314" data-file-name="components/home/Resume.tsx">
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
              duration: 0.5,
              delay: 0.2
            }} className="bg-card shadow-lg rounded-lg p-6 border border-border/30 h-full" data-unique-id="1bb7d384-ba37-4877-b4f6-436f7d2d5790" data-file-name="components/home/Resume.tsx">
                <h3 className="font-bold text-xl mb-6" data-unique-id="a4f8f19f-ec48-4131-b73b-6984d96397eb" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="81d3ab59-d4d1-4aad-b817-fb51a3f441e6" data-file-name="components/home/Resume.tsx">Download Options</span></h3>
                
                <div className="space-y-4" data-unique-id="7c2ac150-6f36-4c48-ab11-904c76c7edfa" data-file-name="components/home/Resume.tsx">
                  <motion.a href="/resume.pdf" download="Tanveer_Lashari_Resume.pdf" whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(var(--chart-1-rgb), 0.1)",
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)"
                }} whileTap={{
                  scale: 0.98
                }} transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20
                }} className="flex items-center justify-between p-5 border border-chart-1/30 rounded-lg hover:bg-chart-1/5 transition-all shadow-sm hover:shadow-md" data-unique-id="fb1632bf-b8e8-45dd-84da-5860d6bb5779" data-file-name="components/home/Resume.tsx">
                    <div className="flex items-center" data-unique-id="0465c242-b402-42fc-b14c-cd2539b39d4a" data-file-name="components/home/Resume.tsx">
                      <File className="mr-3 text-chart-1" />
                      <div data-unique-id="e93f47d6-722c-4182-99fc-064af379da3b" data-file-name="components/home/Resume.tsx">
                        <p className="font-medium" data-unique-id="0c9b7dee-cb82-43da-96cb-509b449e5eff" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="2dd7338c-18ae-402d-9869-351a919a49c8" data-file-name="components/home/Resume.tsx">Full Resume</span></p>
                        <p className="text-xs text-muted-foreground" data-unique-id="f5152e4c-4a86-46e3-a42f-1de1f81849ab" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="05fd1684-4236-486e-a432-14fdac066b37" data-file-name="components/home/Resume.tsx">Complete professional resume (PDF)</span></p>
                      </div>
                    </div>
                    <Download size={20} className="text-chart-1" />
                  </motion.a>
                  
                  <motion.a href="#contact" onClick={e => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }} whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }} className="flex items-center justify-between p-4 border border-border/50 rounded-md hover:bg-chart-2/5 transition-colors" data-unique-id="53d9b7d1-ff52-4648-8575-99973e44167b" data-file-name="components/home/Resume.tsx">
                    <div className="flex items-center" data-unique-id="74c217ae-14af-4983-9c0c-a58aecb697fd" data-file-name="components/home/Resume.tsx">
                      <LinkIcon className="mr-3 text-chart-2" />
                      <div data-unique-id="990d7f5a-5fe0-4904-a678-fc65726d8f51" data-file-name="components/home/Resume.tsx">
                        <p className="font-medium" data-unique-id="34828e91-0172-4f86-a63b-f1dda581b34b" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="f21b8dee-f392-4925-8192-e132f6cebe67" data-file-name="components/home/Resume.tsx">Request Custom Resume</span></p>
                        <p className="text-xs text-muted-foreground" data-unique-id="3fa5228a-7028-4022-9307-d81896206bce" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="e53faa74-ae23-47c4-89f4-9dff5309ca35" data-file-name="components/home/Resume.tsx">Contact me for a tailored resume</span></p>
                      </div>
                    </div>
                    <div className="h-6 w-6 rounded-full flex items-center justify-center bg-chart-2/10" data-unique-id="ed5cd94a-26cd-4b9d-b390-5552c8f44bd7" data-file-name="components/home/Resume.tsx">
                      <LinkIcon size={12} className="text-chart-2" />
                    </div>
                  </motion.a>
                  
                  <div className="mt-8" data-unique-id="5f2dad47-ffbd-47fa-a84e-4f32f109b388" data-file-name="components/home/Resume.tsx">
                    <h4 className="font-medium text-sm mb-2" data-unique-id="98931daf-2c7f-4473-8416-26ba731e7f36" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="d720460a-119a-478c-822f-c9a190574163" data-file-name="components/home/Resume.tsx">Resume Summary</span></h4>
                    <ul className="text-sm text-muted-foreground space-y-2" data-unique-id="ed0d88df-1282-448d-ac18-88969be7db18" data-file-name="components/home/Resume.tsx">
                      <li className="flex items-start" data-unique-id="4d2d62e2-9621-4b56-8e49-b9b9683c3bf9" data-file-name="components/home/Resume.tsx">
                        <span className="h-1.5 w-1.5 rounded-full bg-chart-1 mt-2 mr-2" data-unique-id="b1b9219e-0536-4343-ba50-14df3a79d274" data-file-name="components/home/Resume.tsx"></span>
                        <span data-unique-id="d289a04b-e935-452b-b19b-9c40d0b9d5c4" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="c6040573-1083-4533-a4ea-8b33b3453ea2" data-file-name="components/home/Resume.tsx">Library and Information Science graduate with 3.59 CGPA</span></span>
                      </li>
                      <li className="flex items-start" data-unique-id="b4e4ed42-c02b-4ff0-9d79-09ca9e3b55d4" data-file-name="components/home/Resume.tsx">
                        <span className="h-1.5 w-1.5 rounded-full bg-chart-1 mt-2 mr-2" data-unique-id="5ec80050-df25-48c9-a747-621894f5a2de" data-file-name="components/home/Resume.tsx"></span>
                        <span data-unique-id="a8b348cb-bdae-4245-bd1a-b53fbb86bf67" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="584f9f2d-0e45-42a5-9a53-ea59c040304f" data-file-name="components/home/Resume.tsx">Experience in multiple university library settings</span></span>
                      </li>
                      <li className="flex items-start" data-unique-id="01cda1d6-ced0-4e8c-ad94-82a45c40b481" data-file-name="components/home/Resume.tsx">
                        <span className="h-1.5 w-1.5 rounded-full bg-chart-1 mt-2 mr-2" data-unique-id="231c55e6-07c0-41f4-a23f-c78d0851eb83" data-file-name="components/home/Resume.tsx"></span>
                        <span data-unique-id="8e767cfc-eeac-432b-8772-572a9c508f7b" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="bfba6464-62b7-4162-8f58-ce683d001be7" data-file-name="components/home/Resume.tsx">Expertise in Koha software and library automation</span></span>
                      </li>
                      <li className="flex items-start" data-unique-id="93b64d87-b9bf-488e-ba69-aed96a83b46f" data-file-name="components/home/Resume.tsx">
                        <span className="h-1.5 w-1.5 rounded-full bg-chart-1 mt-2 mr-2" data-unique-id="43247798-b20b-4cd0-9c7e-f6dd8bb8955b" data-file-name="components/home/Resume.tsx"></span>
                        <span data-unique-id="18a922e7-cc79-49d4-b32e-ab827db6c82e" data-file-name="components/home/Resume.tsx"><span className="editable-text" data-unique-id="2cdd1f99-88df-4439-92f3-84f462e95f72" data-file-name="components/home/Resume.tsx">Trilingual: English, Sindhi, and Urdu proficiency</span></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}