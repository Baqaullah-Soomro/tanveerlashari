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
  return <section id="about" className="py-24 bg-accent/30" data-unique-id="e190893f-df6f-452d-a243-27454373a2c4" data-file-name="components/home/About.tsx">
      <div className="container mx-auto px-6" data-unique-id="67a72930-623e-4254-925c-d3625c2627c6" data-file-name="components/home/About.tsx">
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
      }} className="text-center mb-16" data-unique-id="c99c1f28-f587-4117-98c8-386a6cd70ffb" data-file-name="components/home/About.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="cff5d0a4-01f9-4194-9758-70ee4b310f90" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="35827b1d-984e-4673-b963-e84098eec428" data-file-name="components/home/About.tsx">About Me</span></h2>
          <div className="h-1 w-20 bg-chart-1 mx-auto" data-unique-id="49f5dab2-92be-42fc-b7e2-1f6397c00a29" data-file-name="components/home/About.tsx"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-unique-id="2f5ce576-9643-44bc-99aa-bae911e89e30" data-file-name="components/home/About.tsx">
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
        }} data-unique-id="0a592d9e-6685-4a67-813b-4199ec4ae095" data-file-name="components/home/About.tsx">
            <h3 className="text-2xl font-bold mb-6 flex items-center" data-unique-id="b0137726-2ca1-4496-9d57-8b92a28e55d0" data-file-name="components/home/About.tsx">
              <School className="mr-2 text-chart-2" size={24} /><span className="editable-text" data-unique-id="d4727cb2-703b-4525-91d7-9dc861b166a0" data-file-name="components/home/About.tsx">
              Academic Qualifications
            </span></h3>
            
            <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.2
          }} className="space-y-6" data-unique-id="dfbcaa8e-edfd-4263-852b-50f220a4dc94" data-file-name="components/home/About.tsx">
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="3c226d72-cc57-4914-837b-8eb005fe67a2" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="19890e18-8756-4e12-8f96-44b5d68d6e4c" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-1/10 p-3 rounded-full mr-4" data-unique-id="d4d75624-1009-4675-ba5a-991fc15ca82a" data-file-name="components/home/About.tsx">
                    <GraduationCap className="text-chart-1" size={24} />
                  </div>
                  <div data-unique-id="fd79f30a-5100-4dac-9a81-10a8353eb521" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="48800b11-c55a-4eb8-a1f2-6c0df53827a3" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="819bee5e-9ba1-4d5d-9257-3e3dd2eaea88" data-file-name="components/home/About.tsx">Bachelor of Library and Information Science and Archives Studies</span></h4>
                    <p className="text-muted-foreground" data-unique-id="56cece6f-8486-49c8-8782-58eed3085633" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="65960f1d-fc94-4326-913a-adf074ee325b" data-file-name="components/home/About.tsx">University of Sindh (2020-2023)</span></p>
                    <p className="text-chart-1 font-medium mt-2" data-unique-id="41a4b310-ff05-48b3-bf74-e4e8226dc378" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="92a341a6-1b24-4b7e-be5c-99458bf37936" data-file-name="components/home/About.tsx">1st Division (CGPA: 3.59)</span></p>
                  </div>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="40c1db06-2c51-471f-b765-8495fe54d119" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="a5df3743-d6db-44d8-becd-5d03941020d9" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-2/10 p-3 rounded-full mr-4" data-unique-id="cbc44784-5a2e-4779-a479-fec5acf26808" data-file-name="components/home/About.tsx">
                    <BookOpen className="text-chart-2" size={24} />
                  </div>
                  <div data-unique-id="ff9775b9-8602-4b88-a1b0-ef65fa37c58f" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="9a8b2e26-28ea-4215-86ff-65d6da25c53f" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="ae37ba55-1b91-4c26-8b64-f1590fd555b5" data-file-name="components/home/About.tsx">Intermediate</span></h4>
                    <p className="text-muted-foreground" data-unique-id="80b1b3d4-808e-478e-9184-59879f92cac4" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="b5db5b23-4ab5-450e-9a5c-0db50a5a51f6" data-file-name="components/home/About.tsx">Hyderabad Board (2016-2018)</span></p>
                    <p className="text-chart-2 font-medium mt-2" data-unique-id="356cffd8-07e6-43ae-8da4-5d1be582c814" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="5ee6ec5e-664d-4bd4-aa0b-349cfae9afa9" data-file-name="components/home/About.tsx">B Grade</span></p>
                  </div>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="d2c0eaa6-ea16-40bc-8f63-88028ede01f9" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="3b7c641d-e670-443e-ae8d-0f6ade0ebef2" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-3/10 p-3 rounded-full mr-4" data-unique-id="2c5c770a-9159-47a5-a785-e24b5c502798" data-file-name="components/home/About.tsx">
                    <BookOpen className="text-chart-3" size={24} />
                  </div>
                  <div data-unique-id="6c48df5d-0f9a-4f54-a5c8-605ba24c3858" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="659252ca-65f1-4c61-b984-c54a2154c323" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="927b2d89-71ad-4a14-bdb7-126cf622606a" data-file-name="components/home/About.tsx">Matriculation</span></h4>
                    <p className="text-muted-foreground" data-unique-id="0fdc1995-1a20-4857-84e4-1f8d78d47eda" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="fbdad979-d590-43c0-bbe3-c81b9416cccb" data-file-name="components/home/About.tsx">Hyderabad Board</span></p>
                    <p className="text-chart-3 font-medium mt-2" data-unique-id="e7be552a-f226-4af3-8f4a-a2c5be93692a" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="89e24040-5a23-4723-b22a-562949f66353" data-file-name="components/home/About.tsx">A Grade</span></p>
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
        }} data-unique-id="61050322-e924-4615-95fb-f71d2bd58df7" data-file-name="components/home/About.tsx">
            <h3 className="text-2xl font-bold mb-6" data-unique-id="9f842e08-26f1-47e3-8c95-8916021d5044" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="a32348f4-f951-4de5-964f-e623c825889d" data-file-name="components/home/About.tsx">Career Objective</span></h3>
            <div className="bg-card p-8 rounded-lg shadow-md" data-unique-id="32e7282f-b1fd-49c6-b66a-b8cb5de484f3" data-file-name="components/home/About.tsx">
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="8998d688-2315-4167-a635-a1731595f6de" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="e61993d0-4aad-4d66-81c5-3294a9bd8923" data-file-name="components/home/About.tsx">
                Enthusiastic and detail-oriented Library Science graduate with a solid academic foundation and hands-on experience in 
                </span><span className="text-chart-1 font-medium" data-unique-id="5d8d0c82-615e-49b7-9ed3-36f3bf9deebc" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="dd1d1d68-b6fc-419d-b65e-859cc10fb49a" data-file-name="components/home/About.tsx"> cataloging</span></span><span className="editable-text" data-unique-id="b8a6ca1e-d134-49d7-a283-81cb46841cdf" data-file-name="components/home/About.tsx">, 
                </span><span className="text-chart-2 font-medium" data-unique-id="5e4a9488-7434-4c70-9f4b-d3167025065a" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="ba7dbf86-63fa-4e62-89a1-3e2aaa477bdc" data-file-name="components/home/About.tsx"> information retrieval</span></span><span className="editable-text" data-unique-id="5c244bb5-aff1-4ae8-9f24-fdbb809da863" data-file-name="components/home/About.tsx">, and 
                </span><span className="text-chart-3 font-medium" data-unique-id="e37d2b18-03f5-41c7-8a7d-ffbe1ffa5541" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="0b4584d2-169d-4dcd-a11f-e3921fbfc0a1" data-file-name="components/home/About.tsx"> library operations</span></span><span className="editable-text" data-unique-id="cda39611-2c0f-42b1-bb9a-c520a77bba28" data-file-name="components/home/About.tsx">.
              </span></p>
              
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="9aa519a9-5984-46e6-9933-e710165d8fdd" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="dc39f3fd-7c14-47b8-b22c-cefd835e249f" data-file-name="components/home/About.tsx">
                With excellent academic performance (3.59 CGPA) and three internships in university libraries, I bring practical expertise in 
                </span><span className="text-chart-1 font-medium" data-unique-id="01bff745-da48-4404-b855-79661d53b966" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="27888cd5-9542-4a0d-9777-c5bac933de09" data-file-name="components/home/About.tsx"> Koha Library Management System</span></span><span className="editable-text" data-unique-id="8787183d-2835-48b0-b1d9-33fd5a9312ee" data-file-name="components/home/About.tsx"> and
                </span><span className="text-chart-2 font-medium" data-unique-id="3d8b32f3-77e5-4c71-83d7-b5ba2d7629ed" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="eb0856d0-e233-4b3a-b51f-73803d6e7657" data-file-name="components/home/About.tsx"> digital library technologies</span></span><span className="editable-text" data-unique-id="99061fcd-823e-4b1f-81e3-b8013ce6c3dc" data-file-name="components/home/About.tsx">.
              </span></p>
              
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="0e86ded7-95b0-4bb4-ad60-661ce05d1d82" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="c1d9e289-8b71-4097-8698-6af756f964c8" data-file-name="components/home/About.tsx">
                I have demonstrated success in library automation projects, cataloging systems implementation, and staff training. My trilingual proficiency enables me to serve diverse user communities effectively.
              </span></p>
              
              <p className="text-lg leading-relaxed" data-unique-id="404533ec-d855-49e8-91f7-ab77e12690f6" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="9d81aefc-f0ce-48d0-8cc5-edd3a390ec81" data-file-name="components/home/About.tsx">
                My vision is to create modern, user-centered library environments where information is easily accessible, well-organized, and leverages the latest technology to enhance learning and research experiences.
              </span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}