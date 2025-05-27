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
  return <section id="about" className="py-24 bg-accent/30" data-unique-id="e5c9f716-81fb-4ca2-bd75-d1998230de6f" data-file-name="components/home/About.tsx">
      <div className="container mx-auto px-6" data-unique-id="86932a8f-179e-47a0-98f3-9e5b60d83d4b" data-file-name="components/home/About.tsx">
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
      }} className="text-center mb-16" data-unique-id="013a446c-8360-460f-b3ba-514f7150438e" data-file-name="components/home/About.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="36db28ec-45e6-4ae5-92a0-ccdf7ae365e3" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="4da5f359-f439-46bf-9135-e7a80bbb732d" data-file-name="components/home/About.tsx">About Me</span></h2>
          <div className="h-1 w-20 bg-chart-1 mx-auto" data-unique-id="6aa830c7-7abd-4196-98a8-7a8e9ca51cb1" data-file-name="components/home/About.tsx"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-unique-id="0ee9e179-565d-48c1-9823-63a37e12152a" data-file-name="components/home/About.tsx">
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
        }} data-unique-id="92d32e17-66a0-4b9a-b9e4-632e844868a6" data-file-name="components/home/About.tsx">
            <h3 className="text-2xl font-bold mb-6 flex items-center" data-unique-id="00a4ef32-55c6-4f97-a4dc-fe8099be317b" data-file-name="components/home/About.tsx">
              <School className="mr-2 text-chart-2" size={24} /><span className="editable-text" data-unique-id="fcfad58b-700b-4b98-baa8-16cfa0943c1c" data-file-name="components/home/About.tsx">
              Academic Qualifications
            </span></h3>
            
            <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.2
          }} className="space-y-6" data-unique-id="43a7e94f-1d73-4e67-ac88-51ee8643746e" data-file-name="components/home/About.tsx">
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="fc9ed9b4-0727-4c2f-82ee-48c8a037c22a" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="5b0a029b-edc7-46a6-87f8-8535950ef04d" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-1/10 p-3 rounded-full mr-4" data-unique-id="ab47ea11-e946-44d5-ac17-d2bb2ce209eb" data-file-name="components/home/About.tsx">
                    <GraduationCap className="text-chart-1" size={24} />
                  </div>
                  <div data-unique-id="df6fda9f-b974-4e15-9006-268043aaaa10" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="ae16dc5e-a692-4588-99c0-8e176da2b8c8" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="ce51f7fc-b463-478c-8c97-c1d50344fb41" data-file-name="components/home/About.tsx">Bachelor of Library and Information Science and Archives Studies</span></h4>
                    <p className="text-muted-foreground" data-unique-id="7db5cd59-be2e-4ce0-bec1-0025c70b6fa4" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="059b5800-5ff5-4aab-b68f-92be6eeb1434" data-file-name="components/home/About.tsx">University of Sindh (2020-2023)</span></p>
                    <p className="text-chart-1 font-medium mt-2" data-unique-id="d93eb7a4-485f-4ea7-9f2f-6000362beae2" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="c8da5cc6-2145-44dd-809d-49c79fea711a" data-file-name="components/home/About.tsx">1st Division (CGPA: 3.59)</span></p>
                  </div>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="b375ad39-cc4e-48cc-83f9-5d02262238e8" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="d06c1402-a609-4f09-bcc4-b733d328239e" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-2/10 p-3 rounded-full mr-4" data-unique-id="5970c1d3-4eb7-4731-94ca-41ec5e2c0aee" data-file-name="components/home/About.tsx">
                    <BookOpen className="text-chart-2" size={24} />
                  </div>
                  <div data-unique-id="d9ddaa0f-5e7a-4451-8f41-83b0aa3273d8" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="818c7fae-84e1-429d-a797-1c8cd4c5c95e" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="6dc769c8-5ddd-490f-88a3-8a7ce93af515" data-file-name="components/home/About.tsx">Intermediate</span></h4>
                    <p className="text-muted-foreground" data-unique-id="cb522a2c-a05a-4a03-add4-fe1e21fd5793" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="625cfaa2-3f76-494b-90e3-c578e44b1170" data-file-name="components/home/About.tsx">Hyderabad Board (2016-2018)</span></p>
                    <p className="text-chart-2 font-medium mt-2" data-unique-id="2954f4ca-6680-4cd3-985f-7a0f04c73f30" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="5b698064-52c6-49ab-a56e-52d7bc8dbc8f" data-file-name="components/home/About.tsx">B Grade</span></p>
                  </div>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="d7f19fea-b7da-432b-9697-4c51d70522f6" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="c8e8022b-4838-4716-bef9-84970786b8aa" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-3/10 p-3 rounded-full mr-4" data-unique-id="0b9bd7bb-3d8c-4a8c-b739-98a30ff27742" data-file-name="components/home/About.tsx">
                    <BookOpen className="text-chart-3" size={24} />
                  </div>
                  <div data-unique-id="036a10fc-3895-4260-94f4-b0a3ede59108" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="4ed651b9-8ea1-4979-a6cd-b51b22450f0d" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="fcdadff7-ae30-41b0-a3cb-88c9f9493cc7" data-file-name="components/home/About.tsx">Matriculation</span></h4>
                    <p className="text-muted-foreground" data-unique-id="d54430b0-4bb3-4d22-b722-0ab9b7177acc" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="2893a04a-d399-4436-b9ff-e49f5acb9e48" data-file-name="components/home/About.tsx">Hyderabad Board</span></p>
                    <p className="text-chart-3 font-medium mt-2" data-unique-id="0bf0512e-3bd4-47e0-b9a6-afa39d6acc84" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="f6886df1-a111-4d0c-ba48-69f7805f6d8b" data-file-name="components/home/About.tsx">A Grade</span></p>
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
        }} data-unique-id="c52abeb6-6dde-4821-9b9b-529d772d7682" data-file-name="components/home/About.tsx">
            <h3 className="text-2xl font-bold mb-6" data-unique-id="3f2f2659-3620-41b5-8141-a96427832c89" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="abb4738c-7403-4529-b5a7-50b797b16635" data-file-name="components/home/About.tsx">Career Objective</span></h3>
            <div className="bg-card p-8 rounded-lg shadow-md" data-unique-id="c5b44466-65e5-4aa3-9edf-c93242de495f" data-file-name="components/home/About.tsx">
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="151e5123-a370-4978-9f3d-17a3f5768fdc" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="f4c9f3a8-235d-41c3-b621-9482e4f9bff8" data-file-name="components/home/About.tsx">
                Enthusiastic and detail-oriented Library Science graduate with a solid academic foundation and hands-on experience in 
                </span><span className="text-chart-1 font-medium" data-unique-id="7a536980-05ce-45c9-bb2d-07920631b2f9" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="4cad32d1-d627-4c5f-acf6-76348877dfc7" data-file-name="components/home/About.tsx"> cataloging</span></span><span className="editable-text" data-unique-id="3e1a9f6a-4b92-468d-8127-e9b09ad24e59" data-file-name="components/home/About.tsx">, 
                </span><span className="text-chart-2 font-medium" data-unique-id="64ffc9f7-60d3-4dbd-b04f-f0862deb0090" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="cd568433-44d4-49d7-85f8-1eabf8a789dd" data-file-name="components/home/About.tsx"> information retrieval</span></span><span className="editable-text" data-unique-id="c4af3c74-c913-4528-9eca-55ad0204409b" data-file-name="components/home/About.tsx">, and 
                </span><span className="text-chart-3 font-medium" data-unique-id="d9f3dd4e-4140-4cf4-9e5c-e43519050c0c" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="8cf7893a-56d4-460a-b6c2-30b82390530d" data-file-name="components/home/About.tsx"> library operations</span></span><span className="editable-text" data-unique-id="6e9ce630-cd30-4a3b-bc84-055c52c226e0" data-file-name="components/home/About.tsx">.
              </span></p>
              
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="7e588f88-a11e-49c0-a3f5-fd51fe5d1720" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="ca42f858-315f-4626-bcad-d28abefe8d2d" data-file-name="components/home/About.tsx">
                Eager to leverage acquired knowledge and skills to contribute effectively to a dynamic library environment. 
                Seeking an opportunity to apply expertise in cataloging standards, digital libraries, and reference services.
              </span></p>
              
              <p className="text-lg leading-relaxed" data-unique-id="36a5f1d0-48de-42f7-9807-0cd6ae3d51e4" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="ea264f1d-aa77-43f3-acbb-0ae0f61a4daa" data-file-name="components/home/About.tsx">
                My goal is to support patrons and enhance information access within a progressive library setting through innovation and 
                user-centered approaches, ensuring information is organized and accessible to all who seek it.
              </span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}