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
  return <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden" data-unique-id="77c02208-453a-45c2-a518-56d0d0958059" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" data-unique-id="f646da8b-7b3a-4e33-8692-1b1c3ed3a054" data-file-name="components/home/Contact.tsx">
        <div className="absolute top-0 left-0 w-64 h-64 bg-chart-1/5 rounded-full blur-3xl" data-unique-id="41cbdc94-5768-4005-b3ca-8bfa900629d7" data-file-name="components/home/Contact.tsx"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-chart-2/5 rounded-full blur-3xl" data-unique-id="4e6db874-f922-4e36-a079-7d7b9bf54f8c" data-file-name="components/home/Contact.tsx"></div>
      </div>
      
      <div className="container mx-auto px-6" data-unique-id="32d7d0ef-a904-43e3-9c0a-cc19733b6927" data-file-name="components/home/Contact.tsx">
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
      }} className="text-center mb-16" data-unique-id="14dc49ef-b4b4-42bd-afe7-f591b41ecf9d" data-file-name="components/home/Contact.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="38676ecb-7c96-4d2f-ba07-e04747ace7b8" data-file-name="components/home/Contact.tsx">
            <span className="editable-text" data-unique-id="7a34f633-d420-438e-9d53-3266b03abc47" data-file-name="components/home/Contact.tsx">Get In Touch</span>
          </h2>
          <div className="h-1 w-20 bg-chart-4 mx-auto" data-unique-id="14c24bd9-b671-4dda-8849-caa542fa7d90" data-file-name="components/home/Contact.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="507b5b01-74ee-4bbc-907a-15cd405220a7" data-file-name="components/home/Contact.tsx">
            <span className="editable-text" data-unique-id="09217380-b31e-416a-a762-aea7c9134c92" data-file-name="components/home/Contact.tsx">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </span>
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-unique-id="23aca18a-a898-4fd2-95cf-7595999ca92d" data-file-name="components/home/Contact.tsx">
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
        }} className="space-y-8" data-unique-id="ec4b442e-a594-4fa3-ba11-e4a562331cc0" data-file-name="components/home/Contact.tsx">
            <h3 className="text-2xl font-bold" data-unique-id="b51fb051-095e-4c20-a66f-10965e86ddce" data-file-name="components/home/Contact.tsx">
              <span className="editable-text" data-unique-id="810fb34a-41f5-4947-8414-4722e2a320ec" data-file-name="components/home/Contact.tsx">Contact Information</span>
            </h3>
            
            <div className="space-y-6" data-unique-id="00eb4913-51af-4d41-ac71-b38bc978cf9d" data-file-name="components/home/Contact.tsx">
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="70e1dfb0-c080-4cf5-add1-b3dc57bf94c8" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-1/10 p-3 rounded-full mr-4" data-unique-id="d67943af-b570-484b-98f8-13dce82b6e05" data-file-name="components/home/Contact.tsx">
                  <Phone className="text-chart-1" size={24} />
                </div>
                <div data-unique-id="f3075709-7139-4a36-ba8b-c6d2daeb84bb" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="a1884067-e464-4de2-a8f9-5465f49d0df2" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="d1c97944-72dc-46ae-875a-b528bbfd5727" data-file-name="components/home/Contact.tsx">Phone</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="467de1e5-79e0-478a-bc14-4cc2b66382d8" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="967cb1be-549e-48cf-a8fb-0e7191142954" data-file-name="components/home/Contact.tsx">0312-0362742</span>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="efb27a11-3b64-4708-ae1a-81273376f7cb" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-2/10 p-3 rounded-full mr-4" data-unique-id="c6104da5-c084-41bf-9c8a-970f4a13eaed" data-file-name="components/home/Contact.tsx">
                  <Mail className="text-chart-2" size={24} />
                </div>
                <div data-unique-id="2da5d3f9-ee28-4f7a-9877-bf6adec0814a" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="5b8e37ab-3f67-47fa-8526-fe085b521397" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="c616f487-5878-4b54-87a9-4fea2da3721b" data-file-name="components/home/Contact.tsx">Email</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="234c090a-96f7-4aed-80eb-d3811474de90" data-file-name="components/home/Contact.tsx">
                    <a href="mailto:lasharitanveerahmed68@gmail.com" className="hover:text-chart-2 transition-colors" data-unique-id="1d2b0301-b644-4b34-bc21-b6914d990e11" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="6573295e-baed-4dc8-b0a5-25c947e09c31" data-file-name="components/home/Contact.tsx">lasharitanveerahmed68@gmail.com</span>
                    </a>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="93d5af01-11ed-4561-87ea-474c6f1bed56" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-3/10 p-3 rounded-full mr-4" data-unique-id="23ce2d0c-b51a-494d-bce8-d4792667835f" data-file-name="components/home/Contact.tsx">
                  <MapPin className="text-chart-3" size={24} />
                </div>
                <div data-unique-id="2d999d7a-b878-466e-b3e0-3c7398bc9f6d" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="a5b024cf-e134-4f9d-9ec6-51456f9e6c9c" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="76abdbb1-8520-412f-858a-4aa7310f301b" data-file-name="components/home/Contact.tsx">Address</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="b7238ca1-9402-4789-9826-e981714ca5e2" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="4ff8903e-8482-4a35-b451-b952e890e694" data-file-name="components/home/Contact.tsx">
                      Sain Muhammad Shah Road, Zulfiqar Colony, Dadu
                    </span>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="7ebdb1a7-e04d-4fc6-9e45-43c452d78364" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-4/10 p-3 rounded-full mr-4" data-unique-id="8a3506ef-ae73-435c-9cc1-d796687a99ca" data-file-name="components/home/Contact.tsx">
                  <Globe className="text-chart-4" size={24} />
                </div>
                <div data-unique-id="242f3c8f-c32d-41c8-bb44-ba8e601b1156" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="21b25540-436d-4741-b6c2-e4d403424a82" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="d9c5b91a-dad5-4bf2-9325-72d7a2a18868" data-file-name="components/home/Contact.tsx">Availability</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="49709f61-c72e-4a0e-a162-cd319888f6bb" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="5e4abf52-b02d-4013-955a-ec2c81060e36" data-file-name="components/home/Contact.tsx">
                      Open to opportunities worldwide
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="pt-8" data-unique-id="b50d377a-e5f0-4d53-921b-6d0d045f9414" data-file-name="components/home/Contact.tsx">
              <h3 className="text-2xl font-bold mb-4" data-unique-id="606cb7e1-3276-4afa-8d76-0da696f7b9b9" data-file-name="components/home/Contact.tsx">
                <span className="editable-text" data-unique-id="c48e36af-0924-4889-89d8-2ca4c328dbd0" data-file-name="components/home/Contact.tsx">Location</span>
              </h3>
              <motion.div whileHover={{
              scale: 1.02
            }} className="rounded-lg overflow-hidden border border-border shadow-md h-[300px] w-full" data-unique-id="fcd042e3-ae3b-476a-b4a4-f225811bb8b9" data-file-name="components/home/Contact.tsx">
                <iframe title="Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.38306533202!2d67.72261304999999!3d26.734420699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71954baf199f%3A0x2d40beeac353a445!2sDadu%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1632312268054!5m2!1sen!2s" className="w-full h-full" style={{
                border: 0
              }} allowFullScreen loading="lazy" data-unique-id="6a3ba61d-b03b-484b-a360-45f5ca23703f" data-file-name="components/home/Contact.tsx" />
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
        }} data-unique-id="4afa9b34-0ca3-454f-b6b9-2997a73c21e9" data-file-name="components/home/Contact.tsx">
            <motion.div whileHover={{
            y: -5
          }} transition={{
            type: "spring",
            stiffness: 300
          }} className="bg-card p-8 rounded-lg shadow-md border border-border/40" data-unique-id="f63bb4ac-f523-4835-8256-57317ed9d5c4" data-file-name="components/home/Contact.tsx">
              <h3 className="text-2xl font-bold mb-6" data-unique-id="9a803a7e-332f-4649-b19c-36695adcae42" data-file-name="components/home/Contact.tsx">
                <span className="editable-text" data-unique-id="96f51fc4-5bb4-43ea-ac02-f5a7b535b35c" data-file-name="components/home/Contact.tsx">Send a Message</span>
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
              }} className="flex flex-col items-center justify-center py-12 text-center" data-unique-id="56b96b8a-25c3-4cec-9fba-feba8214c022" data-file-name="components/home/Contact.tsx">
                    <motion.div initial={{
                  scale: 0
                }} animate={{
                  scale: [0, 1.2, 1]
                }} transition={{
                  duration: 0.5
                }} data-unique-id="d94967df-fb87-4204-a42b-2d12dd98dd5e" data-file-name="components/home/Contact.tsx">
                      <CheckCircle className="text-chart-2 h-16 w-16 mb-4" />
                    </motion.div>
                    <h4 className="text-xl font-bold mb-2" data-unique-id="467643c5-b3c0-48fd-97ed-47cb53cad13e" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="93e02840-d53e-483b-9e43-fdc27b44c0d2" data-file-name="components/home/Contact.tsx">Message Sent!</span>
                    </h4>
                    <p className="text-muted-foreground" data-unique-id="de4aa707-f8ac-4317-b2d3-3e71a7ba0418" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="a4666894-c5d8-4ba2-9017-57583e3ad671" data-file-name="components/home/Contact.tsx">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </span>
                    </p>
                  </motion.div> : <motion.form key="form" ref={formRef} onSubmit={handleSubmit} initial={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} className="space-y-6" data-unique-id="2a42042f-f038-435d-9af5-1d291aaa6caa" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-unique-id="fdc95b28-6a6b-45c6-80be-6466eb3348e5" data-file-name="components/home/Contact.tsx">
                      <div data-unique-id="3eea794a-d9eb-4778-ac69-264b9959b9ce" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                        <label htmlFor="name" className="block text-sm font-medium mb-2" data-unique-id="73dbb1f5-c123-4da2-bc85-e2d10eb5c37e" data-file-name="components/home/Contact.tsx">
                          <span className="editable-text" data-unique-id="513c6095-968d-414e-a0d1-60e73549fed7" data-file-name="components/home/Contact.tsx">Your Name</span>
                        </label>
                        <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.name ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="John Doe" data-unique-id="bae8d9a1-891d-4cc5-ade3-728d43c5a663" data-file-name="components/home/Contact.tsx" />
                        {formErrors.name && <motion.p initial={{
                      opacity: 0,
                      y: -10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="3d555bb2-9791-40c0-954f-b99638742174" data-file-name="components/home/Contact.tsx">
                            <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="e1d554e6-ac70-44f8-a8aa-f81c128c5f36" data-file-name="components/home/Contact.tsx"> Name is required
                          </span></motion.p>}
                      </div>
                      
                      <div data-unique-id="79afab95-6480-4056-8940-a45c897ff40e" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                        <label htmlFor="email" className="block text-sm font-medium mb-2" data-unique-id="8a8d83bb-3e14-45a4-8634-b6670ed985a8" data-file-name="components/home/Contact.tsx">
                          <span className="editable-text" data-unique-id="0d329c1e-e9c8-4826-9255-ba6a8afca8b9" data-file-name="components/home/Contact.tsx">Email Address</span>
                        </label>
                        <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.email ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="john@example.com" data-unique-id="3b7c0983-aa53-465b-8a68-d4aac52ef96a" data-file-name="components/home/Contact.tsx" />
                        {formErrors.email && <motion.p initial={{
                      opacity: 0,
                      y: -10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="fb2e85c8-c07f-41ec-9e70-ca9deaf6987b" data-file-name="components/home/Contact.tsx">
                            <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="81f2e3be-d50e-40dd-b708-4d1deb5d4d1e" data-file-name="components/home/Contact.tsx"> Valid email is required
                          </span></motion.p>}
                      </div>
                    </div>
                    
                    <div data-unique-id="7d35d8d9-7324-47cd-b044-9a03abee0f3a" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      <label htmlFor="subject" className="block text-sm font-medium mb-2" data-unique-id="9071c017-a2a7-46e1-aecd-f48cb7042cb2" data-file-name="components/home/Contact.tsx">
                        <span className="editable-text" data-unique-id="a1ef7da8-d832-4d8b-a6f8-f4b53204956e" data-file-name="components/home/Contact.tsx">Subject</span>
                      </label>
                      <input type="text" id="subject" name="subject" value={formValues.subject} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.subject ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="Project Inquiry" data-unique-id="ae23c806-0e24-434a-b33c-861d8e3737b1" data-file-name="components/home/Contact.tsx" />
                      {formErrors.subject && <motion.p initial={{
                    opacity: 0,
                    y: -10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="3b9f1de8-3885-43b1-a133-53c14b80bd6a" data-file-name="components/home/Contact.tsx">
                          <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="29f61025-9559-468b-988e-016edcb6f512" data-file-name="components/home/Contact.tsx"> Subject is required
                        </span></motion.p>}
                    </div>
                    
                    <div data-unique-id="bdece2af-49cb-4d68-ba84-90ec2f21ba93" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      <label htmlFor="message" className="block text-sm font-medium mb-2" data-unique-id="c9409ca0-1b95-4414-8e3b-c4c35d3dbba4" data-file-name="components/home/Contact.tsx">
                        <span className="editable-text" data-unique-id="5cd57bc5-a74b-4807-a915-8e68cbd8aa3a" data-file-name="components/home/Contact.tsx">Message</span>
                      </label>
                      <textarea id="message" name="message" value={formValues.message} onChange={handleChange} rows={5} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50 resize-none", formErrors.message ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="Your message here..." data-unique-id="49f4043f-c442-4016-a98e-33d8233f5bbd" data-file-name="components/home/Contact.tsx" />
                      {formErrors.message && <motion.p initial={{
                    opacity: 0,
                    y: -10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="74a2b77f-0bf9-4dbd-9fdd-59826a6f25a0" data-file-name="components/home/Contact.tsx">
                          <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="897a7f36-5080-402a-831f-5f9f697f4b40" data-file-name="components/home/Contact.tsx"> Message is required
                        </span></motion.p>}
                    </div>
                    
                    <motion.button whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }} type="submit" disabled={formStatus === 'loading'} className={cn("flex items-center justify-center gap-2 w-full bg-chart-1 text-white py-3 px-6 rounded-md transition-all", formStatus === 'loading' ? "opacity-70 cursor-not-allowed" : "hover:bg-chart-1/90 hover:shadow-lg")} data-unique-id="552cfbe5-1c0a-4f6e-9619-79195ca40510" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      {formStatus === 'loading' ? <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-unique-id="e96eb86a-ebd9-49f9-b887-064ca77f107a" data-file-name="components/home/Contact.tsx">
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
                }} className="text-destructive text-center mt-2 flex items-center justify-center" data-unique-id="2f7a400b-2746-4923-9487-6601f0ea8048" data-file-name="components/home/Contact.tsx">
                        <AlertCircle size={16} className="mr-2" />
                        <span className="editable-text" data-unique-id="dbdce69b-cbea-4b0c-bf7f-58d8516a9663" data-file-name="components/home/Contact.tsx">
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