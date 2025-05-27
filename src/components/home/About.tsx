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
  return <section id="about" className="py-24 bg-accent/30" data-unique-id="7513e73b-112c-4f32-9b05-5fada978cac7" data-file-name="components/home/About.tsx">
      <div className="container mx-auto px-6" data-unique-id="97c8677c-d214-46a4-9a79-6f0e4de92527" data-file-name="components/home/About.tsx">
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
      }} className="text-center mb-16" data-unique-id="83c629e8-eac9-4c8c-a1c1-0b8f944912da" data-file-name="components/home/About.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="71b345a0-a53b-4eca-946e-cc8132d04cdf" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="b7218a0d-0cc7-4f23-8954-63f7bf9975e9" data-file-name="components/home/About.tsx">About Me</span></h2>
          <div className="h-1 w-20 bg-chart-1 mx-auto" data-unique-id="0872b4dc-a99d-4256-ad8b-5e8be870e972" data-file-name="components/home/About.tsx"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-unique-id="b469ae94-d484-4c01-90b2-b6273d04ddc1" data-file-name="components/home/About.tsx">
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
        }} data-unique-id="61cd3f49-5b6e-43b1-bd49-20d630986274" data-file-name="components/home/About.tsx">
            <h3 className="text-2xl font-bold mb-6 flex items-center" data-unique-id="efcd7f6a-7529-4b1e-976a-0c54a5d140dc" data-file-name="components/home/About.tsx">
              <School className="mr-2 text-chart-2" size={24} /><span className="editable-text" data-unique-id="3501b6f5-681d-403f-996a-8551774ebab6" data-file-name="components/home/About.tsx">
              Academic Qualifications
            </span></h3>
            
            <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{
            once: true,
            amount: 0.2
          }} className="space-y-6" data-unique-id="34b036bc-694a-4885-b936-bc9c0a238cd6" data-file-name="components/home/About.tsx">
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="04c1e5fc-b78f-45a0-800c-1162061f4fb7" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="769814b9-1f8f-494b-9b15-5306cc6c2626" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-1/10 p-3 rounded-full mr-4" data-unique-id="64453b19-2cb1-40f3-8894-ab09e3ec3915" data-file-name="components/home/About.tsx">
                    <GraduationCap className="text-chart-1" size={24} />
                  </div>
                  <div data-unique-id="70c368b2-2f94-44c2-87f5-511ec9e314cc" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="430addb5-869d-44f6-a54a-2d876059b151" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="af95b009-834a-454a-a014-955add9c264d" data-file-name="components/home/About.tsx">Bachelor of Library and Information Science and Archives Studies</span></h4>
                    <p className="text-muted-foreground" data-unique-id="92dc32ac-1493-4fae-9cf7-02285f0b417e" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="8d4c03e7-293f-4971-9650-ea7a02d47923" data-file-name="components/home/About.tsx">University of Sindh (2020-2023)</span></p>
                    <p className="text-chart-1 font-medium mt-2" data-unique-id="e2fcf7cc-d33f-408b-a1d9-a201e94aa53d" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="2a0f0387-ecc7-4e83-a3f8-46e7601158df" data-file-name="components/home/About.tsx">1st Division (CGPA: 3.59)</span></p>
                  </div>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="702bf144-bef9-4b35-ba5e-ce5c3108c2f7" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="95f71155-bc46-4802-a753-fad329de077a" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-2/10 p-3 rounded-full mr-4" data-unique-id="5321d23a-3336-4835-adb6-2d747a93b9a7" data-file-name="components/home/About.tsx">
                    <BookOpen className="text-chart-2" size={24} />
                  </div>
                  <div data-unique-id="b81e4d7a-371b-4a83-9930-2d3b52b742fd" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="0cb4d678-bde2-4f12-9837-d1a56d0cf9a8" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="623bc076-9ab3-4e84-8ea4-a58b86bde0db" data-file-name="components/home/About.tsx">Intermediate</span></h4>
                    <p className="text-muted-foreground" data-unique-id="8b1e1748-0424-485a-b9bc-e19a9cab7549" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="f6466a6b-f50c-481a-a3e5-b96553ef262d" data-file-name="components/home/About.tsx">Hyderabad Board (2016-2018)</span></p>
                    <p className="text-chart-2 font-medium mt-2" data-unique-id="c44b7fc8-1a39-4da9-83f3-c252d1795766" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="fae45604-8999-4e2d-8957-23a3e7288022" data-file-name="components/home/About.tsx">B Grade</span></p>
                  </div>
                </div>
              </motion.li>
              
              <motion.li variants={item} className="bg-card p-6 rounded-lg shadow-md" data-unique-id="178e57ff-8835-48e6-91ce-84ac00fc4283" data-file-name="components/home/About.tsx">
                <div className="flex items-start" data-unique-id="36e53190-bcfd-4e68-b3cc-603bd75ebeff" data-file-name="components/home/About.tsx">
                  <div className="bg-chart-3/10 p-3 rounded-full mr-4" data-unique-id="8ac26f4d-dc23-4365-b639-754adb5f7b4f" data-file-name="components/home/About.tsx">
                    <BookOpen className="text-chart-3" size={24} />
                  </div>
                  <div data-unique-id="317c3202-1ef9-4307-854b-b9da3fb49cc4" data-file-name="components/home/About.tsx">
                    <h4 className="font-bold text-lg" data-unique-id="7e00622f-fc66-4dab-a3f0-59a4172567f4" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="1b596cb5-b5fa-45bc-a7d9-99d0e70e6098" data-file-name="components/home/About.tsx">Matriculation</span></h4>
                    <p className="text-muted-foreground" data-unique-id="e6540bcd-dc85-492b-9cd5-8608a7046c1e" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="da10d1b7-b051-433c-9b4b-459efae17bfa" data-file-name="components/home/About.tsx">Hyderabad Board</span></p>
                    <p className="text-chart-3 font-medium mt-2" data-unique-id="556ef69d-87eb-4b6a-961c-69bb0cb0d7a9" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="c430fc44-f305-438d-9bf9-2e328dc1359c" data-file-name="components/home/About.tsx">A Grade</span></p>
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
        }} data-unique-id="d32f48e0-a692-41f7-a49d-699e776fe446" data-file-name="components/home/About.tsx">
            <h3 className="text-2xl font-bold mb-6" data-unique-id="6966ccbe-6ed9-4363-9307-f03bf5836fd8" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="56f0f8da-42ba-4238-9c92-99f7275fcb9b" data-file-name="components/home/About.tsx">Career Objective</span></h3>
            <div className="bg-card p-8 rounded-lg shadow-md" data-unique-id="c7224dd4-569e-4d44-ae8a-8aa3cd908d9c" data-file-name="components/home/About.tsx">
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="82fd6977-1546-4553-9b23-c84e35687fc8" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="6b328932-0876-42be-a074-afab00f4011d" data-file-name="components/home/About.tsx">
                Enthusiastic and detail-oriented Library Science graduate with a solid academic foundation and hands-on experience in 
                </span><span className="text-chart-1 font-medium" data-unique-id="71b301ea-130a-4e1b-a73f-f065e4e45a14" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="f762a875-9ac0-4792-8a72-4cd0d5379987" data-file-name="components/home/About.tsx"> cataloging</span></span><span className="editable-text" data-unique-id="dffd3896-3ad9-4284-bdc6-43968dddcb0a" data-file-name="components/home/About.tsx">, 
                </span><span className="text-chart-2 font-medium" data-unique-id="69074398-80bf-427c-938c-29125d16611e" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="6b01b647-7143-4954-9e96-781ebdd18111" data-file-name="components/home/About.tsx"> information retrieval</span></span><span className="editable-text" data-unique-id="09493dd3-ee6d-48e1-b8f6-a3bb4a3767bf" data-file-name="components/home/About.tsx">, and 
                </span><span className="text-chart-3 font-medium" data-unique-id="7df088dc-3f75-4957-ae52-29e4b7beec64" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="f6d0d2ae-6dcb-400a-9486-3365406cf93c" data-file-name="components/home/About.tsx"> library operations</span></span><span className="editable-text" data-unique-id="316c6182-6193-42c3-bda5-220d51dc5251" data-file-name="components/home/About.tsx">.
              </span></p>
              
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="29acf975-3b12-415d-b304-263e2b659492" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="c0e3a060-6f07-4f99-9ff4-489b8cdd0ae7" data-file-name="components/home/About.tsx">
                With excellent academic performance (3.59 CGPA) and three internships in university libraries, I bring practical expertise in 
                </span><span className="text-chart-1 font-medium" data-unique-id="2d151c27-f889-4e1a-923d-03e218b7f732" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="13e67ac8-e4a4-4b3f-a21b-ca8c5897fb74" data-file-name="components/home/About.tsx"> Koha Library Management System</span></span><span className="editable-text" data-unique-id="e82278a1-b0dd-4a2f-8826-3c000458c872" data-file-name="components/home/About.tsx"> and
                </span><span className="text-chart-2 font-medium" data-unique-id="b6933fca-fada-475a-982c-e25f6dc8edd6" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="4a05f6e8-c12c-423a-bccc-67332553e396" data-file-name="components/home/About.tsx"> digital library technologies</span></span><span className="editable-text" data-unique-id="d5d9d9ca-77c1-4037-8add-e561da2c8182" data-file-name="components/home/About.tsx">.
              </span></p>
              
              <p className="mb-6 text-lg leading-relaxed" data-unique-id="70aa6449-2c39-441c-a50d-29280ea2df1d" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="51e296c6-117b-4cad-90cd-43adad6b6174" data-file-name="components/home/About.tsx">
                I have demonstrated success in library automation projects, cataloging systems implementation, and staff training. My trilingual proficiency enables me to serve diverse user communities effectively.
              </span></p>
              
              <p className="text-lg leading-relaxed" data-unique-id="ad73a1fa-ff43-45d2-8698-1317b8ef532e" data-file-name="components/home/About.tsx"><span className="editable-text" data-unique-id="94376d2f-f2a0-43f8-bdfc-dd2a96da392c" data-file-name="components/home/About.tsx">
                My vision is to create modern, user-centered library environments where information is easily accessible, well-organized, and leverages the latest technology to enhance learning and research experiences.
              </span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}