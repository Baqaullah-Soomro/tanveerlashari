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
  return <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden" data-unique-id="cf636af4-e630-442c-9574-02baab4acef9" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" data-unique-id="0abf69d4-9181-4a63-96ee-6a4317af4e11" data-file-name="components/home/Contact.tsx">
        <div className="absolute top-0 left-0 w-64 h-64 bg-chart-1/5 rounded-full blur-3xl" data-unique-id="4c700209-fb66-4b4a-86d8-57886e7b1290" data-file-name="components/home/Contact.tsx"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-chart-2/5 rounded-full blur-3xl" data-unique-id="444ee6ee-859b-465c-a1a9-0e88b66507d7" data-file-name="components/home/Contact.tsx"></div>
      </div>
      
      <div className="container mx-auto px-6" data-unique-id="e2c87b57-46e1-4992-81c4-595456801bf0" data-file-name="components/home/Contact.tsx">
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
      }} className="text-center mb-16" data-unique-id="4e128da4-d9e7-4ede-bae6-6774b4cef92c" data-file-name="components/home/Contact.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="6735b603-cc14-4926-975e-be4a1ef34792" data-file-name="components/home/Contact.tsx">
            <span className="editable-text" data-unique-id="b0815dbc-6bd6-4a2a-9de8-78e21e77cf04" data-file-name="components/home/Contact.tsx">Get In Touch</span>
          </h2>
          <div className="h-1 w-20 bg-chart-4 mx-auto" data-unique-id="73d7c13f-9f73-4c66-9bab-afd8fda4a691" data-file-name="components/home/Contact.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="7b8cdafd-6e88-49fc-80cc-2783475cd826" data-file-name="components/home/Contact.tsx">
            <span className="editable-text" data-unique-id="e8fe96bb-7977-41af-9b5c-c2861bcb2829" data-file-name="components/home/Contact.tsx">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </span>
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-unique-id="7dc7598a-2f26-48f3-ac79-5eb475ffda49" data-file-name="components/home/Contact.tsx">
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
        }} className="space-y-8" data-unique-id="392e0907-f450-4b64-ad01-163a242af8cc" data-file-name="components/home/Contact.tsx">
            <h3 className="text-2xl font-bold" data-unique-id="d22ff7ad-1be3-4f9e-a960-1946b6273ca9" data-file-name="components/home/Contact.tsx">
              <span className="editable-text" data-unique-id="e94bb555-96d0-4b37-bb8d-afe0074d72c7" data-file-name="components/home/Contact.tsx">Contact Information</span>
            </h3>
            
            <div className="space-y-6" data-unique-id="aa13afd4-7b37-462b-b438-9fa382206c2e" data-file-name="components/home/Contact.tsx">
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="7e939921-56eb-4b96-b7ac-197e7de4ef4a" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-1/10 p-3 rounded-full mr-4" data-unique-id="0890cfa4-c639-4848-a7cc-8d0b46d5c142" data-file-name="components/home/Contact.tsx">
                  <Phone className="text-chart-1" size={24} />
                </div>
                <div data-unique-id="90c45595-746f-49b7-a88c-8bc41c878b50" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="a24860f6-2724-41c2-b781-5bc7b223042a" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="5e7e2bbc-23a2-4ab0-a22b-6cd7b036366f" data-file-name="components/home/Contact.tsx">Phone</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="7b474266-ff62-446e-ab45-08746a0fc817" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="483db527-b3e4-4fd5-8907-625b0e6ce6e1" data-file-name="components/home/Contact.tsx">0312-0362742</span>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="22441cd3-6f8e-46a4-b7ec-dfff297651f0" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-2/10 p-3 rounded-full mr-4" data-unique-id="233e8196-3a7e-495e-aa70-15a4bb9d6610" data-file-name="components/home/Contact.tsx">
                  <Mail className="text-chart-2" size={24} />
                </div>
                <div data-unique-id="7d724a16-fe40-4943-9c55-8a25709911ee" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="2be036b0-9d69-4303-a796-9e1d3972e235" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="a6afd851-0c58-4f2a-b1eb-e500eac2f24e" data-file-name="components/home/Contact.tsx">Email</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="937bdc34-e93b-4c7b-96b3-ef767c74bcf0" data-file-name="components/home/Contact.tsx">
                    <a href="mailto:lasharitanveerahmed68@gmail.com" className="hover:text-chart-2 transition-colors" data-unique-id="186b7a06-1bef-4786-8fff-307ca4125ca6" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="97fc4ee6-fd17-4cd1-bd9b-bb073a695230" data-file-name="components/home/Contact.tsx">lasharitanveerahmed68@gmail.com</span>
                    </a>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="425f704e-abbe-487a-999d-e853d3066488" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-3/10 p-3 rounded-full mr-4" data-unique-id="e4f0ffc8-2861-41c7-a81e-5ab694e0f2c1" data-file-name="components/home/Contact.tsx">
                  <MapPin className="text-chart-3" size={24} />
                </div>
                <div data-unique-id="0171899d-8107-4e3f-a8b6-2290a7ef176e" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="b57a7b16-2915-4c05-97e6-a5a6eee3486b" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="92e99c9d-4bf4-4562-8dac-eaa3c5c0d72f" data-file-name="components/home/Contact.tsx">Address</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="024d5a00-177c-41a4-89eb-9816a3f35808" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="1a4f9feb-fa21-45f8-ba1b-f00d7f8b20a1" data-file-name="components/home/Contact.tsx">
                      Sain Muhammad Shah Road, Zulfiqar Colony, Dadu
                    </span>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="455cddbb-32f2-4bc6-ae55-6a2f56cf5126" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-4/10 p-3 rounded-full mr-4" data-unique-id="6a444f44-d516-4cb0-b148-3c20867bc467" data-file-name="components/home/Contact.tsx">
                  <Globe className="text-chart-4" size={24} />
                </div>
                <div data-unique-id="c4edd3a6-8f71-487f-9a80-80d29a9758cf" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="d7a1736e-a2ca-4ae3-8dc6-8e4f8eec3ebb" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="f47a06d6-b5db-4fd1-94b1-605e5553df15" data-file-name="components/home/Contact.tsx">Availability</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="1f7feba2-d948-4595-a980-b15af9099bfc" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="dec818bb-808a-467f-962d-f151b5477dd7" data-file-name="components/home/Contact.tsx">
                      Open to opportunities worldwide
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="pt-8" data-unique-id="dd5d141c-6866-4c66-846e-d8253e3da870" data-file-name="components/home/Contact.tsx">
              <h3 className="text-2xl font-bold mb-4" data-unique-id="ec2c6b2f-225e-4f8c-b34f-dd6c69d0d582" data-file-name="components/home/Contact.tsx">
                <span className="editable-text" data-unique-id="5569c52a-b7b8-416e-883a-4471e824f8dd" data-file-name="components/home/Contact.tsx">Location</span>
              </h3>
              <motion.div whileHover={{
              scale: 1.02
            }} className="rounded-lg overflow-hidden border border-border shadow-md h-[300px] w-full" data-unique-id="f0555c47-011f-4f25-a3a0-b268c6fde886" data-file-name="components/home/Contact.tsx">
                <iframe title="Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.38306533202!2d67.72261304999999!3d26.734420699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71954baf199f%3A0x2d40beeac353a445!2sDadu%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1632312268054!5m2!1sen!2s" className="w-full h-full" style={{
                border: 0
              }} allowFullScreen loading="lazy" data-unique-id="8b7f5304-b8ac-49ad-9271-b9f7a9b4f5aa" data-file-name="components/home/Contact.tsx" />
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
        }} data-unique-id="a425c617-e90a-4915-a7bf-46460d1a4aaa" data-file-name="components/home/Contact.tsx">
            <motion.div whileHover={{
            y: -5
          }} transition={{
            type: "spring",
            stiffness: 300
          }} className="bg-card p-8 rounded-lg shadow-md border border-border/40" data-unique-id="cd8b94e4-2543-485c-8448-875dc946f511" data-file-name="components/home/Contact.tsx">
              <h3 className="text-2xl font-bold mb-6" data-unique-id="95220e11-3141-4ea1-a3e5-ab25553c1747" data-file-name="components/home/Contact.tsx">
                <span className="editable-text" data-unique-id="0b919ba6-4aed-4c44-a40d-21381de45d4a" data-file-name="components/home/Contact.tsx">Send a Message</span>
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
              }} className="flex flex-col items-center justify-center py-12 text-center" data-unique-id="f5a8a9d8-a111-424e-a8e2-2ae4a94bc574" data-file-name="components/home/Contact.tsx">
                    <motion.div initial={{
                  scale: 0
                }} animate={{
                  scale: [0, 1.2, 1]
                }} transition={{
                  duration: 0.5
                }} data-unique-id="be983bf5-2f66-44d4-b528-c43b984c6106" data-file-name="components/home/Contact.tsx">
                      <CheckCircle className="text-chart-2 h-16 w-16 mb-4" />
                    </motion.div>
                    <h4 className="text-xl font-bold mb-2" data-unique-id="d0d26ec6-11a9-4b62-a2f6-5ae12e8c0460" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="42b314d0-6e46-4202-8563-9fee0fac358f" data-file-name="components/home/Contact.tsx">Message Sent!</span>
                    </h4>
                    <p className="text-muted-foreground" data-unique-id="7e1475be-9e00-4245-852d-11bbac0a4d5a" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="6c9a8bca-f23c-4a53-9b8e-70c42ce2ac06" data-file-name="components/home/Contact.tsx">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </span>
                    </p>
                  </motion.div> : <motion.form key="form" ref={formRef} onSubmit={handleSubmit} initial={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} className="space-y-6" data-unique-id="d84a02a7-2119-4aa2-9417-537c2289d91f" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-unique-id="4d24bde1-73ed-437f-b8f1-dbec2c815b4b" data-file-name="components/home/Contact.tsx">
                      <div data-unique-id="cc6ba1e9-2bc0-4134-a1e0-881cb28bcade" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                        <label htmlFor="name" className="block text-sm font-medium mb-2" data-unique-id="73a1aac0-f90d-4a46-a255-7c6897d1f6ad" data-file-name="components/home/Contact.tsx">
                          <span className="editable-text" data-unique-id="c0078702-150a-4e3b-bde4-c1019707f200" data-file-name="components/home/Contact.tsx">Your Name</span>
                        </label>
                        <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.name ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="John Doe" data-unique-id="22794403-5d32-4705-a144-be77da942e4c" data-file-name="components/home/Contact.tsx" />
                        {formErrors.name && <motion.p initial={{
                      opacity: 0,
                      y: -10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="706f5e5f-b15a-4f1a-9b80-e4dc16282697" data-file-name="components/home/Contact.tsx">
                            <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="b5befcbf-d951-47ab-a038-7d607d315c46" data-file-name="components/home/Contact.tsx"> Name is required
                          </span></motion.p>}
                      </div>
                      
                      <div data-unique-id="50d61ffa-934f-4cde-ade0-43a4262e71e6" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                        <label htmlFor="email" className="block text-sm font-medium mb-2" data-unique-id="bbd8c45b-dffb-479b-8a83-9c124d2eb5e8" data-file-name="components/home/Contact.tsx">
                          <span className="editable-text" data-unique-id="466d164f-10d9-4e60-9b2e-a2576994a147" data-file-name="components/home/Contact.tsx">Email Address</span>
                        </label>
                        <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.email ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="john@example.com" data-unique-id="d1ccd968-78fe-4612-be8a-1c01be937f2f" data-file-name="components/home/Contact.tsx" />
                        {formErrors.email && <motion.p initial={{
                      opacity: 0,
                      y: -10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="9db90a3e-c45c-43f9-a161-794b095424bf" data-file-name="components/home/Contact.tsx">
                            <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="04155dff-b476-46a8-8a3a-49f24c120a2c" data-file-name="components/home/Contact.tsx"> Valid email is required
                          </span></motion.p>}
                      </div>
                    </div>
                    
                    <div data-unique-id="30f1fb1c-e3ef-4e1b-9bce-a8ae79269559" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      <label htmlFor="subject" className="block text-sm font-medium mb-2" data-unique-id="5288d485-36e7-4d4c-be26-d24b6e5f8c9e" data-file-name="components/home/Contact.tsx">
                        <span className="editable-text" data-unique-id="0ded6327-873c-45b3-b7be-ee53c59db739" data-file-name="components/home/Contact.tsx">Subject</span>
                      </label>
                      <input type="text" id="subject" name="subject" value={formValues.subject} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.subject ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="Project Inquiry" data-unique-id="e0fe9537-c01c-40ec-8fc6-09f6fbc4b48f" data-file-name="components/home/Contact.tsx" />
                      {formErrors.subject && <motion.p initial={{
                    opacity: 0,
                    y: -10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="995a730d-d288-4831-b5c0-65457d8be1fa" data-file-name="components/home/Contact.tsx">
                          <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="30dab35b-07f3-41e1-a225-7cba80747ed6" data-file-name="components/home/Contact.tsx"> Subject is required
                        </span></motion.p>}
                    </div>
                    
                    <div data-unique-id="6265b9aa-8417-4585-8f3c-08b968d2abde" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      <label htmlFor="message" className="block text-sm font-medium mb-2" data-unique-id="3fa97e4b-9c28-43ba-8fa6-712a23eb7fd3" data-file-name="components/home/Contact.tsx">
                        <span className="editable-text" data-unique-id="cce9df2b-99a2-4dcc-86fc-2f73577e2dbd" data-file-name="components/home/Contact.tsx">Message</span>
                      </label>
                      <textarea id="message" name="message" value={formValues.message} onChange={handleChange} rows={5} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50 resize-none", formErrors.message ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="Your message here..." data-unique-id="56a44ea3-f343-4142-85f2-4661cc72bd93" data-file-name="components/home/Contact.tsx" />
                      {formErrors.message && <motion.p initial={{
                    opacity: 0,
                    y: -10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="9bee1553-8c80-4f36-bf65-5d8214bef0b7" data-file-name="components/home/Contact.tsx">
                          <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="5538bf57-3ce6-4f2a-8658-e2982b7a2daf" data-file-name="components/home/Contact.tsx"> Message is required
                        </span></motion.p>}
                    </div>
                    
                    <motion.button whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }} type="submit" disabled={formStatus === 'loading'} className={cn("flex items-center justify-center gap-2 w-full bg-chart-1 text-white py-3 px-6 rounded-md transition-all", formStatus === 'loading' ? "opacity-70 cursor-not-allowed" : "hover:bg-chart-1/90 hover:shadow-lg")} data-unique-id="4f3f4dc5-4154-4e22-8ee2-851da480605f" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      {formStatus === 'loading' ? <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-unique-id="b56491a6-a1b3-4843-9d54-8449defcada2" data-file-name="components/home/Contact.tsx">
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
                }} className="text-destructive text-center mt-2 flex items-center justify-center" data-unique-id="7798d7c7-047f-4981-80b0-bf57505d3f67" data-file-name="components/home/Contact.tsx">
                        <AlertCircle size={16} className="mr-2" />
                        <span className="editable-text" data-unique-id="b4bc92eb-8174-407c-b573-ca6025cc97a8" data-file-name="components/home/Contact.tsx">
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