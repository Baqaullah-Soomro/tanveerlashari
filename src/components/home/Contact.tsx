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
  return <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden" data-unique-id="190c3d9e-18ae-4d50-b90c-3a9a432e6cb1" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" data-unique-id="19b3a4be-e437-4905-84b9-b37ee79cb054" data-file-name="components/home/Contact.tsx">
        <div className="absolute top-0 left-0 w-64 h-64 bg-chart-1/5 rounded-full blur-3xl" data-unique-id="2a3bea7a-0382-42f6-9000-e2b9cab1ead4" data-file-name="components/home/Contact.tsx"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-chart-2/5 rounded-full blur-3xl" data-unique-id="80df2c16-7512-4bb6-88f5-b96510c7991f" data-file-name="components/home/Contact.tsx"></div>
      </div>
      
      <div className="container mx-auto px-6" data-unique-id="e761a034-ab8b-4f6d-8fd3-8e2ddf03260a" data-file-name="components/home/Contact.tsx">
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
      }} className="text-center mb-16" data-unique-id="e6732ac5-cfb8-43ae-ba9b-bfc79ea06245" data-file-name="components/home/Contact.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="acc5fc15-c683-447c-b7aa-38173ed09377" data-file-name="components/home/Contact.tsx">
            <span className="editable-text" data-unique-id="03c75e63-05f4-4ad2-adcb-35eef3e4aa49" data-file-name="components/home/Contact.tsx">Get In Touch</span>
          </h2>
          <div className="h-1 w-20 bg-chart-4 mx-auto" data-unique-id="a187fbe3-8438-4148-8087-46763b0badb8" data-file-name="components/home/Contact.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="8764d3d3-26a4-4cd1-a026-e5f9855fed28" data-file-name="components/home/Contact.tsx">
            <span className="editable-text" data-unique-id="345abea2-2179-4a07-b7a0-a383133b980e" data-file-name="components/home/Contact.tsx">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </span>
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-unique-id="dc10f74e-9652-4e16-b3b6-e15df36b34ec" data-file-name="components/home/Contact.tsx">
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
        }} className="space-y-8" data-unique-id="10b42606-3fc9-40c0-a8ac-6b5ff4df4b73" data-file-name="components/home/Contact.tsx">
            <h3 className="text-2xl font-bold" data-unique-id="e9a8be99-5d54-4e8d-a15c-40168b568131" data-file-name="components/home/Contact.tsx">
              <span className="editable-text" data-unique-id="b5215b05-9cc4-4e9e-a2e3-c9b7ddbc933d" data-file-name="components/home/Contact.tsx">Contact Information</span>
            </h3>
            
            <div className="space-y-6" data-unique-id="814d038a-8108-4625-a2e9-de6de6d2803a" data-file-name="components/home/Contact.tsx">
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="ccb485f3-3995-4800-8c5c-fd24f9d45815" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-1/10 p-3 rounded-full mr-4" data-unique-id="0cfa9132-ed02-4942-9a3c-2fd11ed32a43" data-file-name="components/home/Contact.tsx">
                  <Phone className="text-chart-1" size={24} />
                </div>
                <div data-unique-id="3b98cc60-04ec-4c00-8a51-bbb69baf6a62" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="7cd7ca8a-5065-4876-9ae4-f9bcb1cbf2a1" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="db2d87ef-6e2d-4884-a60b-e8706653ad9e" data-file-name="components/home/Contact.tsx">Phone</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="d105e20a-96f6-4c74-94cf-f9d2fd16d581" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="fc614f5d-a677-4b5e-82d1-0acf30e90097" data-file-name="components/home/Contact.tsx">0312-0362742</span>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="5479ca7b-b00b-4317-bbf0-921136eda072" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-2/10 p-3 rounded-full mr-4" data-unique-id="5f894908-fe37-42cb-99ec-09e610a82713" data-file-name="components/home/Contact.tsx">
                  <Mail className="text-chart-2" size={24} />
                </div>
                <div data-unique-id="f1016639-f385-4ed0-9e71-1a5c65699f9e" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="eac0898d-721d-452e-ab45-8a66eba6e510" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="d57455a6-0263-4365-92d0-5fa65c6c348f" data-file-name="components/home/Contact.tsx">Email</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="156e2ba3-9386-4d2c-bc87-b86c2e1332f7" data-file-name="components/home/Contact.tsx">
                    <a href="mailto:lasharitanveerahmed68@gmail.com" className="hover:text-chart-2 transition-colors" data-unique-id="db07c63a-222d-47cb-83bb-88eccee9118b" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="cdc0e109-8358-45d5-8057-d71eb28dbc09" data-file-name="components/home/Contact.tsx">lasharitanveerahmed68@gmail.com</span>
                    </a>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="4baae62a-acfc-405f-949c-631f7dfc2aac" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-3/10 p-3 rounded-full mr-4" data-unique-id="cf2c6f14-76a0-4fb6-a520-1986db47bcc9" data-file-name="components/home/Contact.tsx">
                  <MapPin className="text-chart-3" size={24} />
                </div>
                <div data-unique-id="0b20820e-0f16-4b75-8bb8-06b1d876a924" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="fb7dc7e0-0ac5-4da5-be66-49d2de66ff6e" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="eec6b9be-ed2c-4b2d-80a7-a1d2d41f8765" data-file-name="components/home/Contact.tsx">Address</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="8b652738-7e5b-4fba-8ebb-5472f92b49cd" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="d55640f5-20cb-47bd-91f8-206f0b6714a1" data-file-name="components/home/Contact.tsx">
                      Sain Muhammad Shah Road, Zulfiqar Colony, Dadu
                    </span>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="2d39f1f1-16a3-4657-8fda-7b12fd04ace9" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-4/10 p-3 rounded-full mr-4" data-unique-id="a0d18d80-1aa3-4e4b-9573-791e26bd6f47" data-file-name="components/home/Contact.tsx">
                  <Globe className="text-chart-4" size={24} />
                </div>
                <div data-unique-id="7ef3e3ba-a5a9-41e1-8b1d-c1f6b1e90fe9" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="878c3899-5bda-40fa-84c1-4d9657d45dc4" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="ab721cd6-1c5e-44fb-9f13-8878df6cfd11" data-file-name="components/home/Contact.tsx">Availability</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="d5ec18af-b2a0-44bd-b014-62cdb5d4b59a" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="6b51cc0b-a823-4b31-8902-1e675feb15ea" data-file-name="components/home/Contact.tsx">
                      Open to opportunities worldwide
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="pt-8" data-unique-id="8e3b9aad-65d6-494f-ac3a-3c43321d340d" data-file-name="components/home/Contact.tsx">
              <h3 className="text-2xl font-bold mb-4" data-unique-id="b25e6d00-ddc5-4ee9-9344-b34183cbfba3" data-file-name="components/home/Contact.tsx">
                <span className="editable-text" data-unique-id="3b872907-0388-4d3c-be47-4a49c380da47" data-file-name="components/home/Contact.tsx">Location</span>
              </h3>
              <motion.div whileHover={{
              scale: 1.02
            }} className="rounded-lg overflow-hidden border border-border shadow-md h-[300px] w-full" data-unique-id="d6e6ae8e-3272-402f-9416-f823d108fc0d" data-file-name="components/home/Contact.tsx">
                <iframe title="Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.38306533202!2d67.72261304999999!3d26.734420699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71954baf199f%3A0x2d40beeac353a445!2sDadu%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1632312268054!5m2!1sen!2s" className="w-full h-full" style={{
                border: 0
              }} allowFullScreen loading="lazy" data-unique-id="dd4547d3-2fab-48d9-8bcb-ea69d0967334" data-file-name="components/home/Contact.tsx" />
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
        }} data-unique-id="d2fb4650-0f09-4471-abf4-486f4c9cf23e" data-file-name="components/home/Contact.tsx">
            <motion.div whileHover={{
            y: -5
          }} transition={{
            type: "spring",
            stiffness: 300
          }} className="bg-card p-8 rounded-lg shadow-md border border-border/40" data-unique-id="d5153bfa-0034-4faf-af85-8b80fe78752c" data-file-name="components/home/Contact.tsx">
              <h3 className="text-2xl font-bold mb-6" data-unique-id="194c5a84-9136-4fb8-8129-4cc8666d5ba0" data-file-name="components/home/Contact.tsx">
                <span className="editable-text" data-unique-id="547f60bf-f9fb-41e6-b91d-468df533a848" data-file-name="components/home/Contact.tsx">Send a Message</span>
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
              }} className="flex flex-col items-center justify-center py-12 text-center" data-unique-id="ec60e115-e7a2-4771-9470-b035b75c0b04" data-file-name="components/home/Contact.tsx">
                    <motion.div initial={{
                  scale: 0
                }} animate={{
                  scale: [0, 1.2, 1]
                }} transition={{
                  duration: 0.5
                }} data-unique-id="0fae8d50-645c-404a-b605-c3dfb73c50a6" data-file-name="components/home/Contact.tsx">
                      <CheckCircle className="text-chart-2 h-16 w-16 mb-4" />
                    </motion.div>
                    <h4 className="text-xl font-bold mb-2" data-unique-id="022c3ecd-d912-4b46-9d95-7f24c9f4cfa9" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="e40bed42-c296-4f9a-b303-4543db9d2f1b" data-file-name="components/home/Contact.tsx">Message Sent!</span>
                    </h4>
                    <p className="text-muted-foreground" data-unique-id="32932e36-b5ba-4477-a0e7-e29bf737652a" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="6ee90bce-ce74-41ef-bd7d-fa3bda209813" data-file-name="components/home/Contact.tsx">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </span>
                    </p>
                  </motion.div> : <motion.form key="form" ref={formRef} onSubmit={handleSubmit} initial={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} className="space-y-6" data-unique-id="559b849b-6427-459b-bdb0-dc68ad46c6c0" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-unique-id="d0381d58-4faa-4431-b54f-71df1b43acca" data-file-name="components/home/Contact.tsx">
                      <div data-unique-id="4003dfcf-bfd0-48fd-84a3-3bd832aecfe6" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                        <label htmlFor="name" className="block text-sm font-medium mb-2" data-unique-id="12afe453-9219-4bb1-bea2-1252c64943ac" data-file-name="components/home/Contact.tsx">
                          <span className="editable-text" data-unique-id="aead0800-19ee-4e9f-b03b-12a77706af96" data-file-name="components/home/Contact.tsx">Your Name</span>
                        </label>
                        <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.name ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="John Doe" data-unique-id="4176fd8e-bb46-411c-a36b-d88ee0e55743" data-file-name="components/home/Contact.tsx" />
                        {formErrors.name && <motion.p initial={{
                      opacity: 0,
                      y: -10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="00e8fda4-2b45-4655-89d2-c96f9b9a20a1" data-file-name="components/home/Contact.tsx">
                            <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="123f5aac-0338-47fa-8d7d-a9964ecae850" data-file-name="components/home/Contact.tsx"> Name is required
                          </span></motion.p>}
                      </div>
                      
                      <div data-unique-id="65e9badd-e8a2-4477-b6ae-88628b7631dd" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                        <label htmlFor="email" className="block text-sm font-medium mb-2" data-unique-id="bd03fa0e-c9d9-410a-8f11-4b956eba6098" data-file-name="components/home/Contact.tsx">
                          <span className="editable-text" data-unique-id="70028fc5-b1c1-474f-af34-3fe1c4eaab4d" data-file-name="components/home/Contact.tsx">Email Address</span>
                        </label>
                        <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.email ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="john@example.com" data-unique-id="355b0def-58b5-4b50-9c5d-6f3452ea2484" data-file-name="components/home/Contact.tsx" />
                        {formErrors.email && <motion.p initial={{
                      opacity: 0,
                      y: -10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="fc81bf8f-fb07-4c43-b452-4c021f7c4cfe" data-file-name="components/home/Contact.tsx">
                            <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="f6eb0924-6062-4fbc-b019-f959de276a45" data-file-name="components/home/Contact.tsx"> Valid email is required
                          </span></motion.p>}
                      </div>
                    </div>
                    
                    <div data-unique-id="1722ce39-acc8-4ff0-82ca-04f96391e097" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      <label htmlFor="subject" className="block text-sm font-medium mb-2" data-unique-id="573c08f2-061e-4709-aa12-2c92f7b9c83a" data-file-name="components/home/Contact.tsx">
                        <span className="editable-text" data-unique-id="e35b56e7-4a27-40d5-b1a6-a96dff070cd2" data-file-name="components/home/Contact.tsx">Subject</span>
                      </label>
                      <input type="text" id="subject" name="subject" value={formValues.subject} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.subject ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="Project Inquiry" data-unique-id="8ecebeb9-dece-4016-ae92-a7c2b25a61f5" data-file-name="components/home/Contact.tsx" />
                      {formErrors.subject && <motion.p initial={{
                    opacity: 0,
                    y: -10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="d0af1c69-850b-43eb-b82e-90e891e817c2" data-file-name="components/home/Contact.tsx">
                          <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="7a465ca3-99e8-4bea-81f0-c663cbff86c7" data-file-name="components/home/Contact.tsx"> Subject is required
                        </span></motion.p>}
                    </div>
                    
                    <div data-unique-id="c956c30c-5bf0-4222-b8ce-60d1f6b62cf8" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      <label htmlFor="message" className="block text-sm font-medium mb-2" data-unique-id="119bf8e1-7d7a-4abf-8151-2e03a9254d2a" data-file-name="components/home/Contact.tsx">
                        <span className="editable-text" data-unique-id="db78cd76-d25f-4a09-aa58-23829c1c8602" data-file-name="components/home/Contact.tsx">Message</span>
                      </label>
                      <textarea id="message" name="message" value={formValues.message} onChange={handleChange} rows={5} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50 resize-none", formErrors.message ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="Your message here..." data-unique-id="7e6a9066-ebb1-4a7d-b2fc-42506a2508e8" data-file-name="components/home/Contact.tsx" />
                      {formErrors.message && <motion.p initial={{
                    opacity: 0,
                    y: -10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="f8bb3bb6-07a7-40c4-b3cf-8660b1857586" data-file-name="components/home/Contact.tsx">
                          <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="b12c2d0c-4859-4e9f-adf3-84a892e34484" data-file-name="components/home/Contact.tsx"> Message is required
                        </span></motion.p>}
                    </div>
                    
                    <motion.button whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }} type="submit" disabled={formStatus === 'loading'} className={cn("flex items-center justify-center gap-2 w-full bg-chart-1 text-white py-3 px-6 rounded-md transition-all", formStatus === 'loading' ? "opacity-70 cursor-not-allowed" : "hover:bg-chart-1/90 hover:shadow-lg")} data-unique-id="1f015b66-f8ec-4fbf-8059-cd02563bb6c6" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      {formStatus === 'loading' ? <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-unique-id="e019aebb-b2f5-4b3c-9759-d602cd05e19b" data-file-name="components/home/Contact.tsx">
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
                }} className="text-destructive text-center mt-2 flex items-center justify-center" data-unique-id="b537fac3-5c4a-4e3c-8419-9979a962847c" data-file-name="components/home/Contact.tsx">
                        <AlertCircle size={16} className="mr-2" />
                        <span className="editable-text" data-unique-id="04bd998c-3a1a-4228-9983-06c53bb52abb" data-file-name="components/home/Contact.tsx">
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