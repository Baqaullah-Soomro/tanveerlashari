'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle, Globe, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import emailjs from '@emailjs/browser';
export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });
  const formRef = useRef<HTMLFormElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
    if (value.trim()) {
      setFormErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };
  const validateForm = () => {
    const errors = {
      name: formValues.name.trim() === '',
      email: !/^\S+@\S+\.\S+$/.test(formValues.email),
      subject: formValues.subject.trim() === '',
      message: formValues.message.trim() === ''
    };
    setFormErrors(errors);
    return !Object.values(errors).some(Boolean);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    if (!formRef.current) return;
    try {
      setFormStatus('loading');

      // In a real implementation, you would add your EmailJS service ID, template ID and public key
      // Since we're using localStorage in this example, we'll just simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Store the form data in localStorage (for demonstration purposes)
      const formData = new FormData(formRef.current);
      const formValues = Object.fromEntries(formData.entries());
      localStorage.setItem('contactForm', JSON.stringify(formValues));
      formRef.current.reset();
      setFormValues({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormStatus('success');

      // Reset the success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      setFormStatus('error');
      console.error('Error submitting form:', error);
    }
  };
  return <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden" data-unique-id="9d0c1c60-4d67-41e7-a04f-d34b42766c4d" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" data-unique-id="727420a9-8f81-4057-8c9e-18dcc1dd2792" data-file-name="components/home/Contact.tsx">
        <div className="absolute top-0 left-0 w-64 h-64 bg-chart-1/5 rounded-full blur-3xl" data-unique-id="4b4d61c9-ed45-41ff-8d20-ea16fcdef99e" data-file-name="components/home/Contact.tsx"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-chart-2/5 rounded-full blur-3xl" data-unique-id="f55eb4e8-1b79-4373-886e-350c79b0ffd2" data-file-name="components/home/Contact.tsx"></div>
      </div>
      
      <div className="container mx-auto px-6" data-unique-id="d29aa089-10ef-41e9-94a5-d573e4f84648" data-file-name="components/home/Contact.tsx">
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
      }} className="text-center mb-16" data-unique-id="9d587a57-016f-4ec9-b77a-d038fc074941" data-file-name="components/home/Contact.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="9cc5f957-3053-4b15-9a38-7f747da5a5c4" data-file-name="components/home/Contact.tsx">
            <span className="editable-text" data-unique-id="578a1fed-e492-4e9a-b985-ee3fa4def557" data-file-name="components/home/Contact.tsx">Get In Touch</span>
          </h2>
          <div className="h-1 w-20 bg-chart-4 mx-auto" data-unique-id="6c13c34e-99da-414f-a853-2f2ac51f0441" data-file-name="components/home/Contact.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="248c3026-f818-44ba-9a04-855f4043865d" data-file-name="components/home/Contact.tsx">
            <span className="editable-text" data-unique-id="4aedb86d-b401-4f5a-8279-3287afa58c87" data-file-name="components/home/Contact.tsx">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </span>
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-unique-id="d0940998-036a-4c11-ad93-8da67b7fc138" data-file-name="components/home/Contact.tsx">
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
        }} className="space-y-8" data-unique-id="56bb1f56-786e-4b41-ac40-cf1d57b1d22f" data-file-name="components/home/Contact.tsx">
            <h3 className="text-2xl font-bold" data-unique-id="773a03f7-d6e6-45b8-b9ee-0a2ea9a0c36c" data-file-name="components/home/Contact.tsx">
              <span className="editable-text" data-unique-id="784684d3-c4da-4a08-b925-509295e3e230" data-file-name="components/home/Contact.tsx">Contact Information</span>
            </h3>
            
            <div className="space-y-6" data-unique-id="bc9aea2a-3e0a-40a6-9955-e4825df9a05b" data-file-name="components/home/Contact.tsx">
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="9814541a-62ce-4968-81c2-85229a1ac1f5" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-1/10 p-3 rounded-full mr-4" data-unique-id="e74fd451-b8e4-4e5d-8c27-aaac733f6f27" data-file-name="components/home/Contact.tsx">
                  <Phone className="text-chart-1" size={24} />
                </div>
                <div data-unique-id="55421dbb-5110-4e4b-a0c8-481b3921a05e" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="ba05cee9-499a-4a42-89af-9b2966e1d087" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="7436e47e-19ae-4016-9f86-77da769bdfbc" data-file-name="components/home/Contact.tsx">Phone</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="387cc543-dd01-4758-9840-2a116069718e" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="9e21499a-3663-41fb-8c7c-97cd1ee71cb1" data-file-name="components/home/Contact.tsx">0312-0362742</span>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="7d5fe3c0-e482-4feb-b4a0-e1ef36239af6" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-2/10 p-3 rounded-full mr-4" data-unique-id="c95e9c5a-0ff9-4b10-be7a-0c7eac91901a" data-file-name="components/home/Contact.tsx">
                  <Mail className="text-chart-2" size={24} />
                </div>
                <div data-unique-id="41e25bfc-cd3e-4c8d-bfe7-a3833851f6a4" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="c8548bb3-acb3-4fc8-8260-c2a98cdbbbcf" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="66315ec1-0c9d-4eb6-bef1-8fe1dcae7378" data-file-name="components/home/Contact.tsx">Email</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="354b9ade-c586-4762-b4a8-028ab84781d7" data-file-name="components/home/Contact.tsx">
                    <a href="mailto:lasharitanveerahmed68@gmail.com" className="hover:text-chart-2 transition-colors" data-unique-id="ae792908-9f25-4766-bd65-f5e15da99c05" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="bac5e033-49ca-4ae7-9f90-5753a718a124" data-file-name="components/home/Contact.tsx">lasharitanveerahmed68@gmail.com</span>
                    </a>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="debf40da-1b68-41b8-a14c-60726aa92a7b" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-3/10 p-3 rounded-full mr-4" data-unique-id="f9e23ea4-b8e5-4ef3-aab6-d32545e647d2" data-file-name="components/home/Contact.tsx">
                  <MapPin className="text-chart-3" size={24} />
                </div>
                <div data-unique-id="2de442cc-ff7c-4530-bc1c-bad19da66e3e" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="d04f7d01-44bf-4873-8103-ec53e1190ff2" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="f4cf51e8-1f5a-4e44-bcde-865efc96246d" data-file-name="components/home/Contact.tsx">Address</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="4dac7d32-2efc-4cd6-abc3-88e7aa64031f" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="b6ed7306-8e90-426a-9c84-4114399e6466" data-file-name="components/home/Contact.tsx">
                      Sain Muhammad Shah Road, Zulfiqar Colony, Dadu
                    </span>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="9b6bc233-e036-42bf-829a-41c9f2d720b3" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-4/10 p-3 rounded-full mr-4" data-unique-id="102bd5e0-6475-496f-a25d-13093ffa9e7c" data-file-name="components/home/Contact.tsx">
                  <Globe className="text-chart-4" size={24} />
                </div>
                <div data-unique-id="6427a784-24e1-43b9-8aa8-a18ec1ee8665" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="825d300f-c5df-4d97-a81e-3e77a40fdc92" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="41db79e7-6723-4fe1-a323-acfea23c3133" data-file-name="components/home/Contact.tsx">Availability</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="7185ebb1-723c-403e-9c56-b7b805622b5e" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="bed9daf7-095a-466d-a562-defebd2526ca" data-file-name="components/home/Contact.tsx">
                      Open to opportunities worldwide
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="pt-8" data-unique-id="be80e2c1-3e5f-4ca0-8b63-647aaf749b33" data-file-name="components/home/Contact.tsx">
              <h3 className="text-2xl font-bold mb-4" data-unique-id="1708897d-8aa6-4b23-8c3c-bc425351ff72" data-file-name="components/home/Contact.tsx">
                <span className="editable-text" data-unique-id="dc6b1206-9e12-45ad-96da-46599d8ab447" data-file-name="components/home/Contact.tsx">Location</span>
              </h3>
              <motion.div whileHover={{
              scale: 1.02
            }} className="rounded-lg overflow-hidden border border-border shadow-md h-[300px] w-full" data-unique-id="7a7c9f51-d5d7-44bb-b550-0cb23cf5b740" data-file-name="components/home/Contact.tsx">
                <iframe title="Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.38306533202!2d67.72261304999999!3d26.734420699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71954baf199f%3A0x2d40beeac353a445!2sDadu%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1632312268054!5m2!1sen!2s" className="w-full h-full" style={{
                border: 0
              }} allowFullScreen loading="lazy" data-unique-id="a2bd44eb-0762-4ff6-8712-faffd5620df7" data-file-name="components/home/Contact.tsx" />
              </motion.div>
            </div>
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
        }} data-unique-id="385ad748-4b48-401a-acdb-4a313fb4331b" data-file-name="components/home/Contact.tsx">
            <motion.div whileHover={{
            y: -5
          }} transition={{
            type: "spring",
            stiffness: 300
          }} className="bg-card p-8 rounded-lg shadow-md border border-border/40" data-unique-id="05b77c8d-9978-497a-a7e8-44f47e18c535" data-file-name="components/home/Contact.tsx">
              <h3 className="text-2xl font-bold mb-6" data-unique-id="d66f7172-0a65-4ee0-9aa0-1322f4579565" data-file-name="components/home/Contact.tsx">
                <span className="editable-text" data-unique-id="b3750f27-09cc-47bf-baee-03fd4de7445d" data-file-name="components/home/Contact.tsx">Send a Message</span>
              </h3>
              
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? <motion.div key="success" initial={{
                opacity: 0,
                scale: 0.8
              }} animate={{
                opacity: 1,
                scale: 1
              }} exit={{
                opacity: 0,
                scale: 0.8
              }} className="flex flex-col items-center justify-center py-12 text-center" data-unique-id="e8851afe-9934-4ef2-ad74-38e775d56f7a" data-file-name="components/home/Contact.tsx">
                    <motion.div initial={{
                  scale: 0
                }} animate={{
                  scale: [0, 1.2, 1]
                }} transition={{
                  duration: 0.5
                }} data-unique-id="607693fe-56f5-43f0-97f6-a570c1434037" data-file-name="components/home/Contact.tsx">
                      <CheckCircle className="text-chart-2 h-16 w-16 mb-4" />
                    </motion.div>
                    <h4 className="text-xl font-bold mb-2" data-unique-id="8326e209-b7f5-4547-82fd-2874dd63c19e" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="29919417-6151-461a-8680-42ab60473faf" data-file-name="components/home/Contact.tsx">Message Sent!</span>
                    </h4>
                    <p className="text-muted-foreground" data-unique-id="1ed66670-898e-4a0d-8479-e0165cba27fb" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="ae7a6e68-da53-433a-8453-840f29d358a6" data-file-name="components/home/Contact.tsx">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </span>
                    </p>
                  </motion.div> : <motion.form key="form" ref={formRef} onSubmit={handleSubmit} initial={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} className="space-y-6" data-unique-id="fc746bbe-5e1b-46c8-b9fc-0e583b730601" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-unique-id="c9f317db-1e97-42ec-ab61-5829c2d31061" data-file-name="components/home/Contact.tsx">
                      <div data-unique-id="0abb91f7-b241-487f-9fe5-bd1e9072c764" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                        <label htmlFor="name" className="block text-sm font-medium mb-2" data-unique-id="4f85d0a7-1234-4a0d-b4f3-1ebc123bcfd1" data-file-name="components/home/Contact.tsx">
                          <span className="editable-text" data-unique-id="8c5da532-b608-4b0a-a7ac-f8af2a325da8" data-file-name="components/home/Contact.tsx">Your Name</span>
                        </label>
                        <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.name ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="John Doe" data-unique-id="09e0f5ac-3839-4b3a-8266-99d9e298624f" data-file-name="components/home/Contact.tsx" />
                        {formErrors.name && <motion.p initial={{
                      opacity: 0,
                      y: -10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="141ed291-2377-4ff3-beb2-f1a41e4bbbcd" data-file-name="components/home/Contact.tsx">
                            <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="5034c029-bed5-4ff8-886e-ace7546ec173" data-file-name="components/home/Contact.tsx"> Name is required
                          </span></motion.p>}
                      </div>
                      
                      <div data-unique-id="173d0efa-174d-46c8-bf34-2fc68346a841" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                        <label htmlFor="email" className="block text-sm font-medium mb-2" data-unique-id="a2e8515e-f2a2-42ac-9f2a-542d2af97d1f" data-file-name="components/home/Contact.tsx">
                          <span className="editable-text" data-unique-id="71a984f5-1367-44b0-96f5-5372219767a1" data-file-name="components/home/Contact.tsx">Email Address</span>
                        </label>
                        <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.email ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="john@example.com" data-unique-id="9f276691-e927-425b-be5b-a7fd67589d80" data-file-name="components/home/Contact.tsx" />
                        {formErrors.email && <motion.p initial={{
                      opacity: 0,
                      y: -10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="2ff572b3-7a48-488d-9b09-0bdccda39517" data-file-name="components/home/Contact.tsx">
                            <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="cfe559c8-3b3a-4460-af1d-d3bea1168d80" data-file-name="components/home/Contact.tsx"> Valid email is required
                          </span></motion.p>}
                      </div>
                    </div>
                    
                    <div data-unique-id="23832541-6ff0-4235-8bff-46abe3d07df6" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      <label htmlFor="subject" className="block text-sm font-medium mb-2" data-unique-id="7272f731-7e06-45d9-8923-f5b4a4c222fe" data-file-name="components/home/Contact.tsx">
                        <span className="editable-text" data-unique-id="c1220c49-e997-4b3d-88f9-28e75e561ccb" data-file-name="components/home/Contact.tsx">Subject</span>
                      </label>
                      <input type="text" id="subject" name="subject" value={formValues.subject} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.subject ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="Project Inquiry" data-unique-id="d255f079-2b6a-4643-9aa0-cb855af2903f" data-file-name="components/home/Contact.tsx" />
                      {formErrors.subject && <motion.p initial={{
                    opacity: 0,
                    y: -10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="7e4c47c8-5498-4896-a6e7-5809fd88abf8" data-file-name="components/home/Contact.tsx">
                          <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="547b8ca0-10b1-429f-b682-1ef6e52ef0ea" data-file-name="components/home/Contact.tsx"> Subject is required
                        </span></motion.p>}
                    </div>
                    
                    <div data-unique-id="b8a7cee3-8ad0-4568-a326-8dd0c9bd150e" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      <label htmlFor="message" className="block text-sm font-medium mb-2" data-unique-id="2d136198-843b-4c17-8570-d2fc9fea8cea" data-file-name="components/home/Contact.tsx">
                        <span className="editable-text" data-unique-id="f0b9b5e1-991c-4971-afa0-7087bd81e695" data-file-name="components/home/Contact.tsx">Message</span>
                      </label>
                      <textarea id="message" name="message" value={formValues.message} onChange={handleChange} rows={5} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50 resize-none", formErrors.message ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="Your message here..." data-unique-id="10774016-3411-41c4-896b-88f8aa090db3" data-file-name="components/home/Contact.tsx" />
                      {formErrors.message && <motion.p initial={{
                    opacity: 0,
                    y: -10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="a9f8c678-dc7d-4639-b32a-e0689d438e06" data-file-name="components/home/Contact.tsx">
                          <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="2e71fbc4-21c2-4c6f-8f74-155db51a23fb" data-file-name="components/home/Contact.tsx"> Message is required
                        </span></motion.p>}
                    </div>
                    
                    <motion.button whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }} type="submit" disabled={formStatus === 'loading'} className={cn("flex items-center justify-center gap-2 w-full bg-chart-1 text-white py-3 px-6 rounded-md transition-all", formStatus === 'loading' ? "opacity-70 cursor-not-allowed" : "hover:bg-chart-1/90 hover:shadow-lg")} data-unique-id="54476aa3-cb4c-450a-b202-2a82a5566732" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      {formStatus === 'loading' ? <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-unique-id="a3944695-54f9-4b0a-bb51-ff6b7cb35c6f" data-file-name="components/home/Contact.tsx">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </> : <>
                          <Send size={18} />
                          Send Message
                        </>}
                    </motion.button>
                    
                    {formStatus === 'error' && <motion.p initial={{
                  opacity: 0,
                  y: -10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} className="text-destructive text-center mt-2 flex items-center justify-center" data-unique-id="a165daea-0468-4409-9586-c3aa15e38a48" data-file-name="components/home/Contact.tsx">
                        <AlertCircle size={16} className="mr-2" />
                        <span className="editable-text" data-unique-id="1862a02c-f66f-41da-88bd-737b8beb30a6" data-file-name="components/home/Contact.tsx">
                          There was an error sending your message. Please try again.
                        </span>
                      </motion.p>}
                  </motion.form>}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
}