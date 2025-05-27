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
  return <section id="about" className="py-24 bg-accent/30" data-unique-id="d3026e69-3020-47e2-bab8-744cf5f47439" data-file-name="components/home/About.tsx">
      <div className="container mx-auto px-6" data-unique-id="b4bcedcd-cbcd-44d3-8f1c-65b7e7086faf" data-file-name="components/home/About.tsx">
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
      }} className="text-center mb-16" data-unique-id="2bcff8ac-93ed-4060-abe4-4cb66fcf81d2" data-file-name="components/home/About.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="242785e3-6ccb-4d13-902c-6105f526444f" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="47b12754-e114-40ed-9b1b-5decfcdd477d" data-file-name="components/home/About.tsx">About Me</span></h2>
          <div className="h-1 w-20 bg-chart-1 mx-auto" data-unique-id="d7fb9e87-431f-4fef-b41f-093adc08f645" data-file-name="components/home/About.tsx"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-unique-id="a130dd24-084f-487c-a0e4-69c5ebd899bf" data-file-name="components/home/About.tsx">
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
        }} data-unique-id="28c57ded-ae6f-49ac-b018-925b26e55f07" data-file-name="components/home/About.tsx">
            <h3 className="text-2xl font-bold mb-6 flex items-center" data-unique-id="cbbbab40-f79c-4ea9-bf04-e3108ce977ad" data-file-name="components/home/About.tsx">
              <School className="mr-2 text-chart-2" size={24} /><span className="editable-text" data-unique-id="076aaa46-0a89-4c4c-80a2-3ca0c4aa6a3d" data-file-name="components/home/About.tsx">
              Academic Qualifications
            </span></h3>
            
            <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.2
          }} className="space-y-6" data-unique-id="337db4bb-8cc9-45dc-a72f-ce3838a0aa4f" data-file-name="components/home/About.tsx">
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="5ff17b69-5040-4622-8d95-6e9290f79ee5" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="caedd468-0cde-4e58-b22f-234499344839" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-1/10 p-3 rounded-full mr-4" data-unique-id="0cc4bc11-ccb6-4fc8-91f9-706969c1cd36" data-file-name="components/home/About.tsx">
                    <GraduationCap className="text-chart-1" size={24} />
                  </div>
                  <div data-unique-id="48a2a02b-d813-4ab0-83c6-62f618a40d0f" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="6f25e9e7-b2b2-45c5-b61f-f2edac877a78" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="c322fa75-9f7e-42aa-a4d3-3af30adcfb87" data-file-name="components/home/About.tsx">Bachelor of Library and Information Science and Archives Studies</span></h4>
                    <p className="text-muted-foreground" data-unique-id="3ad16d11-2bd1-46dc-8e5b-9dc84c03c5cd" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="d002f70a-fd47-4ab4-8445-8992a9cdae71" data-file-name="components/home/About.tsx">University of Sindh (2020-2023)</span></p>
                    <p className="text-chart-1 font-medium mt-2" data-unique-id="2e8628db-aeb4-401f-8015-95c70683678e" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="2977afd2-4629-4c17-8b34-16e09b8c42b9" data-file-name="components/home/About.tsx">1st Division (CGPA: 3.59)</span></p>
                  </div>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="d12b095a-50c9-4e1d-8b48-8202de29fb0a" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="e5350a25-1a14-43a8-be49-23287d564c22" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-2/10 p-3 rounded-full mr-4" data-unique-id="cd3e7431-20ae-4628-b28b-3c07520cb57d" data-file-name="components/home/About.tsx">
                    <BookOpen className="text-chart-2" size={24} />
                  </div>
                  <div data-unique-id="737bcab4-37d1-480d-a458-bd7d5e20125d" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="72ea0837-9cd8-46d1-9ba6-a5b3786dad9d" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="12831077-84f7-4ced-b9a0-c442554e825c" data-file-name="components/home/About.tsx">Intermediate</span></h4>
                    <p className="text-muted-foreground" data-unique-id="f888beba-075e-4225-b909-546f1b75d301" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="c2fa3f1f-4403-4af7-b6e3-e4f571125020" data-file-name="components/home/About.tsx">Hyderabad Board (2016-2018)</span></p>
                    <p className="text-chart-2 font-medium mt-2" data-unique-id="99fcd3e1-67fe-416d-bac9-b22ed82bee29" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="89a43692-4a48-4bb9-bd60-0fdc2bee20fb" data-file-name="components/home/About.tsx">B Grade</span></p>
                  </div>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="6802259f-7fc5-434d-b253-483fb6271158" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="fdd84c5c-9428-4745-bdc0-73030645fc7d" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-3/10 p-3 rounded-full mr-4" data-unique-id="ac2435c0-5c49-4b36-843a-31f7e79d6996" data-file-name="components/home/About.tsx">
                    <BookOpen className="text-chart-3" size={24} />
                  </div>
                  <div data-unique-id="342f1f70-5d00-4bd0-994a-cf73f243d031" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="e0aa881c-6f3c-437b-b49f-661ba4136c36" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="bd7e3498-8ac0-496b-b00d-c9a578b5107b" data-file-name="components/home/About.tsx">Matriculation</span></h4>
                    <p className="text-muted-foreground" data-unique-id="82d7e219-9f5a-4f0a-9edd-906125b3f467" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="c27d0c2b-e3fe-4cc2-b4f2-270fad97fa14" data-file-name="components/home/About.tsx">Hyderabad Board</span></p>
                    <p className="text-chart-3 font-medium mt-2" data-unique-id="557aa4b2-c78f-4285-ba11-6a191a1bf57d" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="06d9cc54-54e9-4676-bb1f-50cf6d44efeb" data-file-name="components/home/About.tsx">A Grade</span></p>
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
        }} data-unique-id="ac56234d-7f79-43d5-b10c-19973f229bdf" data-file-name="components/home/About.tsx">
            <h3 className="text-2xl font-bold mb-6" data-unique-id="c53703bc-68c9-4302-ba08-ddda5408735b" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="57b04151-d170-4fb6-9b28-41eba118fac7" data-file-name="components/home/About.tsx">Career Objective</span></h3>
            <div className="bg-card p-8 rounded-lg shadow-md" data-unique-id="027f246c-3b5e-4f04-a124-0f880b70429a" data-file-name="components/home/About.tsx">
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="408286e1-ca1d-4634-9d7d-41276971e1f4" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="9efceefa-7923-4f4f-bba7-f1ca070be328" data-file-name="components/home/About.tsx">
                Enthusiastic and detail-oriented Library Science graduate with a solid academic foundation and hands-on experience in 
                </span><span className="text-chart-1 font-medium" data-unique-id="c6615385-1b1e-4982-87ae-15e35b057e78" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="9a230294-6daa-4264-8031-742a16d585be" data-file-name="components/home/About.tsx"> cataloging</span></span><span className="editable-text" data-unique-id="621aa108-cb43-4626-9dd2-3c5b543f129e" data-file-name="components/home/About.tsx">, 
                </span><span className="text-chart-2 font-medium" data-unique-id="32e7977e-e9bd-449a-9303-3afb94be59b8" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="17f6364d-16e1-4037-a5dd-5ce0573f6b52" data-file-name="components/home/About.tsx"> information retrieval</span></span><span className="editable-text" data-unique-id="488f82ff-87fa-4956-9cf0-3178d502cc40" data-file-name="components/home/About.tsx">, and 
                </span><span className="text-chart-3 font-medium" data-unique-id="57a443da-238a-4f66-ba44-2d6fdb9f4b82" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="48bef7fc-99f7-4310-b037-d6073e238ae9" data-file-name="components/home/About.tsx"> library operations</span></span><span className="editable-text" data-unique-id="22c00cc2-1093-4c3f-912a-cb97c9bd4879" data-file-name="components/home/About.tsx">.
              </span></p>
              
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="6c9d9adb-bc68-4b06-9787-9301042aec4c" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="d6d36aa2-fd06-493f-aeef-5c308316c679" data-file-name="components/home/About.tsx">
                With excellent academic performance (3.59 CGPA) and three internships in university libraries, I bring practical expertise in 
                </span><span className="text-chart-1 font-medium" data-unique-id="4d0ddfb9-2ee7-4780-9b14-6a8ae748cf17" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="78cbb34c-8292-48f4-9c14-22fabe896967" data-file-name="components/home/About.tsx"> Koha Library Management System</span></span><span className="editable-text" data-unique-id="701ab6ac-fa80-4061-a78e-e94a5d7e1aee" data-file-name="components/home/About.tsx"> and
                </span><span className="text-chart-2 font-medium" data-unique-id="cb533cd1-4555-4e96-b6f3-92298c4ecec1" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="767959a1-ee30-4ef1-a7ef-8ac49c2e4d9c" data-file-name="components/home/About.tsx"> digital library technologies</span></span><span className="editable-text" data-unique-id="66d0835b-7d9a-44de-be82-d24d9a5dbf80" data-file-name="components/home/About.tsx">.
              </span></p>
              
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="41949a88-52b3-4a19-be55-757ea6ec4f13" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="0e3f992f-ff08-4a63-bccc-5a94b0816507" data-file-name="components/home/About.tsx">
                I have demonstrated success in library automation projects, cataloging systems implementation, and staff training. My trilingual proficiency enables me to serve diverse user communities effectively.
              </span></p>
              
              <p className="text-lg leading-relaxed" data-unique-id="ac0263c4-5b54-4812-b040-54f74ca51761" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="22fc459e-17b1-4265-a8a2-9ac4a91ab32c" data-file-name="components/home/About.tsx">
                My vision is to create modern, user-centered library environments where information is easily accessible, well-organized, and leverages the latest technology to enhance learning and research experiences.
              </span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}