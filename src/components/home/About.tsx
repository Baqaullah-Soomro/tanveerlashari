'use client';

import { motion } from 'framer-motion';
import { School, GraduationCap, BookOpen } from 'lucide-react';
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0
  }
};
export default function About() {
  return <section id="about" className="py-24 bg-accent/30" data-unique-id="010cf2bf-081c-486c-b719-c9c8a44c7013" data-file-name="components/home/About.tsx">
      <div className="container mx-auto px-6" data-unique-id="c997a0f8-cb54-427d-b6d7-1d26caa1ff60" data-file-name="components/home/About.tsx">
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
      }} className="text-center mb-16" data-unique-id="4bb3ba0d-c692-4260-ac2a-45e7b0e8fece" data-file-name="components/home/About.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="758837b5-36d6-478d-8588-876eedf2a1e8" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="fa3ffe3c-e051-4b59-b51c-b7fb6ce7dd5e" data-file-name="components/home/About.tsx">About Me</span></h2>
          <div className="h-1 w-20 bg-chart-1 mx-auto" data-unique-id="20fb1a00-3366-45f0-8ad7-c476b7201f61" data-file-name="components/home/About.tsx"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-unique-id="17b62f9f-8d13-4571-ac47-0ba34070e590" data-file-name="components/home/About.tsx">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          amount: 0.2
        }} transition={{
          duration: 0.5
        }} data-unique-id="03eeff9b-817d-4589-8098-cee6acefe8f9" data-file-name="components/home/About.tsx">
            <h3 className="text-2xl font-bold mb-6 flex items-center" data-unique-id="f0ce49ff-b0cb-44ab-a0d5-9f2a1c47cfbe" data-file-name="components/home/About.tsx">
              <School className="mr-2 text-chart-2" size={24} /><span className="editable-text" data-unique-id="20087ab3-a47f-46c3-8318-c3c23d9e795b" data-file-name="components/home/About.tsx">
              Academic Qualifications
            </span></h3>
            
            <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.2
          }} className="space-y-6" data-unique-id="cfde000a-6e8f-4c7e-9419-4bc57c38aca7" data-file-name="components/home/About.tsx">
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="d8c3b403-312e-43dd-8e41-5ff9a8e99f2d" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="970f42e4-92b5-43e5-9aa9-aec313334fcb" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-1/10 p-3 rounded-full mr-4" data-unique-id="a14494d9-8761-4dc6-ad86-dd95e246d8e1" data-file-name="components/home/About.tsx">
                    <GraduationCap className="text-chart-1" size={24} />
                  </div>
                  <div data-unique-id="98f1e8b8-2bb3-4194-b099-079864f91e8d" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="4a2a9c67-3229-48f6-abad-fec38e431f19" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="eb5e526b-f835-4cc6-90ca-fba70a32fe67" data-file-name="components/home/About.tsx">Bachelor of Library and Information Science and Archives Studies</span></h4>
                    <p className="text-muted-foreground" data-unique-id="d4d16301-14cc-46ab-be20-9b39c32bf15a" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="394aa98d-c2d9-4e18-9fcb-4ba91d1ddc36" data-file-name="components/home/About.tsx">University of Sindh (2020-2023)</span></p>
                    <p className="text-chart-1 font-medium mt-2" data-unique-id="d7e95c08-3208-41f4-92ac-a3537c94535b" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="ffe01e7c-7366-4299-b7d0-697456f219ae" data-file-name="components/home/About.tsx">1st Division (CGPA: 3.59)</span></p>
                  </div>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="32ec5579-e892-4fe2-b9e8-7943261ed389" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="7a89209a-cfec-4bb0-b45d-ec55c7c6f52c" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-2/10 p-3 rounded-full mr-4" data-unique-id="98f4394a-edac-43b4-9671-cbabd9796488" data-file-name="components/home/About.tsx">
                    <BookOpen className="text-chart-2" size={24} />
                  </div>
                  <div data-unique-id="9c01d147-35d2-4d0a-a52f-db1825fa1dc0" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="12427090-6d6d-4012-8afd-93c2165c1841" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="4f75ea0e-6e02-4e87-96d9-ee39b948ad31" data-file-name="components/home/About.tsx">Intermediate</span></h4>
                    <p className="text-muted-foreground" data-unique-id="e29980a2-8c30-4a9a-a0e7-2b5f768e4fb6" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="9cef98ab-4159-48e0-bfb3-d00444c7b742" data-file-name="components/home/About.tsx">Hyderabad Board (2016-2018)</span></p>
                    <p className="text-chart-2 font-medium mt-2" data-unique-id="b37e9d83-7e95-416c-8d77-1d4533fbfc1a" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="08603b45-d2af-4c2f-bfcf-f7ece93f26d9" data-file-name="components/home/About.tsx">B Grade</span></p>
                  </div>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="add4baae-c074-477d-8f1b-515888938753" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="c3b4108d-3b98-4aaf-8c29-4a1bd578a5ee" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-3/10 p-3 rounded-full mr-4" data-unique-id="6f507d66-88eb-4f0e-9e67-85c554aada78" data-file-name="components/home/About.tsx">
                    <BookOpen className="text-chart-3" size={24} />
                  </div>
                  <div data-unique-id="76859000-d757-4051-9586-161e9861afaf" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="68e72064-b323-489b-8d18-c79e7c93bcc0" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="5d4f10db-b1bf-41aa-8c1e-158731d2b06c" data-file-name="components/home/About.tsx">Matriculation</span></h4>
                    <p className="text-muted-foreground" data-unique-id="8369fb87-f54c-4cbb-8739-33988408f520" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="a5c81b76-de64-47d7-9747-a9c09dbfb0e3" data-file-name="components/home/About.tsx">Hyderabad Board</span></p>
                    <p className="text-chart-3 font-medium mt-2" data-unique-id="f46e4133-f399-4a8e-b099-e51a16c1b7b5" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="883de441-f11d-475d-a4b0-115b18f3dcce" data-file-name="components/home/About.tsx">A Grade</span></p>
                  </div>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          amount: 0.2
        }} transition={{
          duration: 0.5
        }} data-unique-id="b1d50a1f-5a27-4441-b558-c1dbd710398c" data-file-name="components/home/About.tsx">
            <h3 className="text-2xl font-bold mb-6" data-unique-id="d5796823-f4d3-4517-9b78-6e01f067bd37" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="a848bf3b-ed80-4b2d-aa4b-d93060ffbb58" data-file-name="components/home/About.tsx">Career Objective</span></h3>
            <div className="bg-card p-8 rounded-lg shadow-md" data-unique-id="0ed4c8b3-8da3-4e47-82cb-a607004d5378" data-file-name="components/home/About.tsx">
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="e6b794f4-fb7b-4044-88e1-9e159cc0ff39" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="4c489a03-1293-4f53-95cc-c61e2e158ec3" data-file-name="components/home/About.tsx">
                Enthusiastic and detail-oriented Library Science graduate with a solid academic foundation and hands-on experience in 
                </span><span className="text-chart-1 font-medium" data-unique-id="66c8a603-cdf7-4e9c-8467-823632836928" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="e77fbd6a-ba37-44de-a1ea-55b803b177a2" data-file-name="components/home/About.tsx"> cataloging</span></span><span className="editable-text" data-unique-id="38bda27c-d926-4eb4-acb4-23d918f07fe0" data-file-name="components/home/About.tsx">, 
                </span><span className="text-chart-2 font-medium" data-unique-id="4e2bc54f-1bb7-4553-808f-bfbe895ea0d0" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="65b8b728-7a71-4815-9f67-b0ed16f917df" data-file-name="components/home/About.tsx"> information retrieval</span></span><span className="editable-text" data-unique-id="5b105b36-4c4b-4b0e-9065-25c0e9baa9a4" data-file-name="components/home/About.tsx">, and 
                </span><span className="text-chart-3 font-medium" data-unique-id="45b586cb-43c7-4913-b9d3-050a333973c1" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="32cf118f-a3ab-4ef3-863e-cc507bff6f66" data-file-name="components/home/About.tsx"> library operations</span></span><span className="editable-text" data-unique-id="723e412e-edc1-4873-9828-d9d3a5185b3b" data-file-name="components/home/About.tsx">.
              </span></p>
              
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="be34af4c-e44e-4d91-8971-795c116028c4" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="f1ee5520-00b3-4448-b8d0-792ea464d8c1" data-file-name="components/home/About.tsx">
                With excellent academic performance (3.59 CGPA) and three internships in university libraries, I bring practical expertise in 
                </span><span className="text-chart-1 font-medium" data-unique-id="2e1efdeb-58c0-406e-8aa1-ebcbf3ee54f1" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="e26228de-ffcb-4546-8186-187cb9bd312b" data-file-name="components/home/About.tsx"> Koha Library Management System</span></span><span className="editable-text" data-unique-id="78b0ac54-978d-46be-8d1e-5aae7ac95efd" data-file-name="components/home/About.tsx"> and
                </span><span className="text-chart-2 font-medium" data-unique-id="7b1c0863-a0ff-4542-858c-8626c359f327" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="7e31eae7-18d1-4b03-8980-610746120f5c" data-file-name="components/home/About.tsx"> digital library technologies</span></span><span className="editable-text" data-unique-id="ce318a9c-ad6b-44cc-98bb-a974dead2ad2" data-file-name="components/home/About.tsx">.
              </span></p>
              
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="093e1431-44ed-4d17-b858-5dc0e0a26017" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="a32d6d23-68bb-466e-b579-87203413839c" data-file-name="components/home/About.tsx">
                I have demonstrated success in library automation projects, cataloging systems implementation, and staff training. My trilingual proficiency enables me to serve diverse user communities effectively.
              </span></p>
              
              <p className="text-lg leading-relaxed" data-unique-id="1acc2c4a-5c84-401e-9d36-a2afc79d5744" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="0562c73c-cf2e-4b64-b4ed-625058a734d8" data-file-name="components/home/About.tsx">
                My vision is to create modern, user-centered library environments where information is easily accessible, well-organized, and leverages the latest technology to enhance learning and research experiences.
              </span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}