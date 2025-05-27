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
  return <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden" data-unique-id="6d901196-7921-4c71-922c-10fe76551fc5" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" data-unique-id="9d65f900-f71d-41ea-9456-f199fa2433a7" data-file-name="components/home/Contact.tsx">
        <div className="absolute top-0 left-0 w-64 h-64 bg-chart-1/5 rounded-full blur-3xl" data-unique-id="156efe13-60cc-4fda-ac05-7956687003a1" data-file-name="components/home/Contact.tsx"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-chart-2/5 rounded-full blur-3xl" data-unique-id="28d98784-916f-4420-be27-a168b5cdb657" data-file-name="components/home/Contact.tsx"></div>
      </div>
      
      <div className="container mx-auto px-6" data-unique-id="d5cba1a0-5620-48af-a575-a38e7372f9aa" data-file-name="components/home/Contact.tsx">
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
      }} className="text-center mb-16" data-unique-id="fa8e0aa1-a9dc-45b3-8b5e-e96e2995a09c" data-file-name="components/home/Contact.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="f7124dbc-7a7a-4137-a0be-312d83c11389" data-file-name="components/home/Contact.tsx">
            <span className="editable-text" data-unique-id="29a34536-6944-43fc-982d-5c9d02a35663" data-file-name="components/home/Contact.tsx">Get In Touch</span>
          </h2>
          <div className="h-1 w-20 bg-chart-4 mx-auto" data-unique-id="7476f344-f4ab-43c9-a21e-dc2ec9a63a8d" data-file-name="components/home/Contact.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="ab84618f-238c-42a7-9dd0-a6f5e12bc17b" data-file-name="components/home/Contact.tsx">
            <span className="editable-text" data-unique-id="c991997a-44c9-4cb2-be4c-bcff5dce7118" data-file-name="components/home/Contact.tsx">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </span>
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-unique-id="fdb02b6d-c72c-4323-b17c-886489469dbb" data-file-name="components/home/Contact.tsx">
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
        }} className="space-y-8" data-unique-id="83a75e56-28f7-4fbb-9278-4cac8b2c4736" data-file-name="components/home/Contact.tsx">
            <h3 className="text-2xl font-bold" data-unique-id="be7d0405-caf8-4f14-a003-90d3c5741708" data-file-name="components/home/Contact.tsx">
              <span className="editable-text" data-unique-id="f662a50c-ffff-4209-8cc5-b5c7c01a175c" data-file-name="components/home/Contact.tsx">Contact Information</span>
            </h3>
            
            <div className="space-y-6" data-unique-id="405a78d1-af2f-4f6b-ba5c-db2a3dce60f2" data-file-name="components/home/Contact.tsx">
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="6208cc4e-c4eb-4f17-8cf8-94852898f690" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-1/10 p-3 rounded-full mr-4" data-unique-id="316323c4-376c-4238-9af8-b224893dfe99" data-file-name="components/home/Contact.tsx">
                  <Phone className="text-chart-1" size={24} />
                </div>
                <div data-unique-id="fadc66fe-a4cc-4004-a637-32caef03fec9" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="d24d7271-abf4-4478-85e7-c02e75f1efde" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="26ce572b-db5a-4505-95c6-788458128024" data-file-name="components/home/Contact.tsx">Phone</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="cf1ca575-413a-42d6-b3ee-28ff9fa7ca3d" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="fe173fdf-7d27-4342-822f-00ef3b1e67a1" data-file-name="components/home/Contact.tsx">0312-0362742</span>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="c0676a3d-0874-488e-9e51-3a2e1e4b4d2d" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-2/10 p-3 rounded-full mr-4" data-unique-id="7870c784-0d33-4603-9a4e-c8806e3bec03" data-file-name="components/home/Contact.tsx">
                  <Mail className="text-chart-2" size={24} />
                </div>
                <div data-unique-id="a1da9434-820d-4f3d-9ca9-dba6a4d227f7" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="f8cbf524-7630-4691-a269-2a820a742012" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="7dbe5226-0084-43f1-aa59-36d06544506b" data-file-name="components/home/Contact.tsx">Email</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="7542121c-fe3e-43da-a1de-fc88a73766f1" data-file-name="components/home/Contact.tsx">
                    <a href="mailto:lasharitanveerahmed68@gmail.com" className="hover:text-chart-2 transition-colors" data-unique-id="423662c0-022f-420d-97fa-8cdaacade943" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="bee7cc72-c6a0-4280-be87-ab68dff1abbc" data-file-name="components/home/Contact.tsx">lasharitanveerahmed68@gmail.com</span>
                    </a>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="9220b5c7-21b4-4d25-939a-5c92ea29eb0e" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-3/10 p-3 rounded-full mr-4" data-unique-id="09aaaf1a-c6dc-4ebf-b653-feba226c4e9f" data-file-name="components/home/Contact.tsx">
                  <MapPin className="text-chart-3" size={24} />
                </div>
                <div data-unique-id="92bb273e-bb59-4a33-939d-2b0506f09c88" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="6dac09a1-10fd-416c-bb7e-3f9e015646e8" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="a430fce1-62a9-4fbd-8cde-c1606af6761a" data-file-name="components/home/Contact.tsx">Address</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="d0c03af0-2f55-487a-b624-65f97370a427" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="0b44bae4-1695-4b5a-80bf-85847df0e8d2" data-file-name="components/home/Contact.tsx">
                      Sain Muhammad Shah Road, Zulfiqar Colony, Dadu
                    </span>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="b5f8553f-fb0a-47d4-b7fb-beded7bf47a8" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-4/10 p-3 rounded-full mr-4" data-unique-id="693379e3-975d-4e75-bd4d-2cb8b9f75d4c" data-file-name="components/home/Contact.tsx">
                  <Globe className="text-chart-4" size={24} />
                </div>
                <div data-unique-id="577c4347-ccde-49eb-a76b-724fc0233e20" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="264ee623-1a5d-4029-a3d6-0223aa1849a5" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="b5e88fc2-75aa-4346-babb-92f4ea0c98a7" data-file-name="components/home/Contact.tsx">Availability</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="c84c8fd1-fcf7-4551-a9bb-925caa8cbf91" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="9134953c-9f4d-429e-a35f-cd252f271350" data-file-name="components/home/Contact.tsx">
                      Open to opportunities worldwide
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="pt-8" data-unique-id="137f09f2-7de6-4e80-a8a7-3a79479d88de" data-file-name="components/home/Contact.tsx">
              <h3 className="text-2xl font-bold mb-4" data-unique-id="5fb07c4a-0012-4b1f-b459-4e3f8928b635" data-file-name="components/home/Contact.tsx">
                <span className="editable-text" data-unique-id="41913690-0a9b-4bda-a715-8a33449fb9ec" data-file-name="components/home/Contact.tsx">Location</span>
              </h3>
              <motion.div whileHover={{
              scale: 1.02
            }} className="rounded-lg overflow-hidden border border-border shadow-md h-[300px] w-full" data-unique-id="dcc67787-f20d-4b25-aa3b-929a766780aa" data-file-name="components/home/Contact.tsx">
                <iframe title="Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.38306533202!2d67.72261304999999!3d26.734420699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71954baf199f%3A0x2d40beeac353a445!2sDadu%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1632312268054!5m2!1sen!2s" className="w-full h-full" style={{
                border: 0
              }} allowFullScreen loading="lazy" data-unique-id="c81947ee-cfa1-4279-bcb1-56fc9c77a8c8" data-file-name="components/home/Contact.tsx" />
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
        }} data-unique-id="e9f46059-2953-4a55-9b8b-656b475c4c49" data-file-name="components/home/Contact.tsx">
            <motion.div whileHover={{
            y: -5
          }} transition={{
            type: "spring",
            stiffness: 300
          }} className="bg-card p-8 rounded-lg shadow-md border border-border/40" data-unique-id="70738db3-a11a-48bb-a508-6e2ad5dc6b36" data-file-name="components/home/Contact.tsx">
              <h3 className="text-2xl font-bold mb-6" data-unique-id="ce26eb72-c0d7-4fad-94e0-18651ed6d22a" data-file-name="components/home/Contact.tsx">
                <span className="editable-text" data-unique-id="b595d2d0-6d43-4cb7-8e4f-a39864709dab" data-file-name="components/home/Contact.tsx">Send a Message</span>
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
              }} className="flex flex-col items-center justify-center py-12 text-center" data-unique-id="66944b5c-3e8e-400b-bbc7-1e2e38b0a983" data-file-name="components/home/Contact.tsx">
                    <motion.div initial={{
                  scale: 0
                }} animate={{
                  scale: [0, 1.2, 1]
                }} transition={{
                  duration: 0.5
                }} data-unique-id="a8ae2236-d84c-49a4-a821-1c684623a082" data-file-name="components/home/Contact.tsx">
                      <CheckCircle className="text-chart-2 h-16 w-16 mb-4" />
                    </motion.div>
                    <h4 className="text-xl font-bold mb-2" data-unique-id="ae963c5a-63a1-4f9f-b5ca-a256641f11dd" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="f744b9ae-a325-4e19-9cdf-4b901e08e759" data-file-name="components/home/Contact.tsx">Message Sent!</span>
                    </h4>
                    <p className="text-muted-foreground" data-unique-id="8eb75ea8-e399-422c-93a6-573783f8381e" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="efce09c0-4c3d-44b6-9d78-e1e77227483d" data-file-name="components/home/Contact.tsx">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </span>
                    </p>
                  </motion.div> : <motion.form key="form" ref={formRef} onSubmit={handleSubmit} initial={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} className="space-y-6" data-unique-id="fe5f6113-4a61-4256-9c65-05f0dbfd43f1" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-unique-id="b7ac9ee0-b011-4f26-a6a2-a5c253a0805f" data-file-name="components/home/Contact.tsx">
                      <div data-unique-id="f2bfc190-1db2-4971-9a27-c6dec73e2763" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                        <label htmlFor="name" className="block text-sm font-medium mb-2" data-unique-id="24d476c4-6cc3-4142-8d98-48050b8d2863" data-file-name="components/home/Contact.tsx">
                          <span className="editable-text" data-unique-id="c4bc28ce-b7d8-4034-a33d-a63302b73a17" data-file-name="components/home/Contact.tsx">Your Name</span>
                        </label>
                        <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.name ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="John Doe" data-unique-id="7b9efec5-d9b2-45e2-88c9-540e099b57fc" data-file-name="components/home/Contact.tsx" />
                        {formErrors.name && <motion.p initial={{
                      opacity: 0,
                      y: -10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="e275a6f0-c2e8-4012-b192-fa24c4c04afa" data-file-name="components/home/Contact.tsx">
                            <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="f4f60b6f-8b91-4510-b41d-a785ac6f992a" data-file-name="components/home/Contact.tsx"> Name is required
                          </span></motion.p>}
                      </div>
                      
                      <div data-unique-id="41c5d7ad-7fe9-4d05-b511-905e15b649fc" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                        <label htmlFor="email" className="block text-sm font-medium mb-2" data-unique-id="3e542e06-24cc-4bc1-afcc-9e7d8eca8f01" data-file-name="components/home/Contact.tsx">
                          <span className="editable-text" data-unique-id="9e355f7f-367e-4a5a-b50c-9c135a7a1154" data-file-name="components/home/Contact.tsx">Email Address</span>
                        </label>
                        <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.email ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="john@example.com" data-unique-id="1e1efeb4-5431-43f0-96b7-e6cd458f128e" data-file-name="components/home/Contact.tsx" />
                        {formErrors.email && <motion.p initial={{
                      opacity: 0,
                      y: -10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="84aa4c0f-50aa-4ef5-a8e0-61251aa317a7" data-file-name="components/home/Contact.tsx">
                            <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="6a255653-5bfc-42e3-8493-7e5fd6b541ec" data-file-name="components/home/Contact.tsx"> Valid email is required
                          </span></motion.p>}
                      </div>
                    </div>
                    
                    <div data-unique-id="7f996d0d-6680-49f3-b1ce-889d1d5efabd" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      <label htmlFor="subject" className="block text-sm font-medium mb-2" data-unique-id="1a4d79b4-d5c1-486a-9896-6847a7aafd7e" data-file-name="components/home/Contact.tsx">
                        <span className="editable-text" data-unique-id="1175bb54-0c66-46c3-995b-f254c9ba5912" data-file-name="components/home/Contact.tsx">Subject</span>
                      </label>
                      <input type="text" id="subject" name="subject" value={formValues.subject} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.subject ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="Project Inquiry" data-unique-id="749f78db-8f36-465d-9169-769934d40fb0" data-file-name="components/home/Contact.tsx" />
                      {formErrors.subject && <motion.p initial={{
                    opacity: 0,
                    y: -10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="ad47442b-87ab-4ef7-bfb0-934215b241dd" data-file-name="components/home/Contact.tsx">
                          <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="54a7533c-1466-47d5-9caa-28e0c85a4a54" data-file-name="components/home/Contact.tsx"> Subject is required
                        </span></motion.p>}
                    </div>
                    
                    <div data-unique-id="f45d7845-174c-4580-b9c4-14954a9464f8" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      <label htmlFor="message" className="block text-sm font-medium mb-2" data-unique-id="51f25886-b3e9-4d7d-9b12-057efb65ec5f" data-file-name="components/home/Contact.tsx">
                        <span className="editable-text" data-unique-id="3350333e-4747-49f0-8f02-05d1c78761a6" data-file-name="components/home/Contact.tsx">Message</span>
                      </label>
                      <textarea id="message" name="message" value={formValues.message} onChange={handleChange} rows={5} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50 resize-none", formErrors.message ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="Your message here..." data-unique-id="bfbe983a-faa1-42a5-8f0f-016a5ad297bc" data-file-name="components/home/Contact.tsx" />
                      {formErrors.message && <motion.p initial={{
                    opacity: 0,
                    y: -10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="78810bd2-4d04-4910-bf50-524c41533583" data-file-name="components/home/Contact.tsx">
                          <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="e71e6f62-a04d-44ae-8822-c45fa9a4149d" data-file-name="components/home/Contact.tsx"> Message is required
                        </span></motion.p>}
                    </div>
                    
                    <motion.button whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }} type="submit" disabled={formStatus === 'loading'} className={cn("flex items-center justify-center gap-2 w-full bg-chart-1 text-white py-3 px-6 rounded-md transition-all", formStatus === 'loading' ? "opacity-70 cursor-not-allowed" : "hover:bg-chart-1/90 hover:shadow-lg")} data-unique-id="b088e536-fa80-4d1e-818d-2fff5f1ed278" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      {formStatus === 'loading' ? <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-unique-id="45f6e2ca-0e7d-4938-92c1-a27a0a45f151" data-file-name="components/home/Contact.tsx">
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
                }} className="text-destructive text-center mt-2 flex items-center justify-center" data-unique-id="41cbbe77-e8aa-4746-a493-dc4ed3bcd675" data-file-name="components/home/Contact.tsx">
                        <AlertCircle size={16} className="mr-2" />
                        <span className="editable-text" data-unique-id="db66cc92-c598-4d2a-be13-b47b2cbdcee0" data-file-name="components/home/Contact.tsx">
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