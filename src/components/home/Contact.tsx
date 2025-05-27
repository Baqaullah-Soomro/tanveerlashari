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
  return <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden" data-unique-id="defa7154-37ad-4847-a618-d631e3580da2" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" data-unique-id="fed10f6d-1d29-4a51-afec-0144cc12c7f6" data-file-name="components/home/Contact.tsx">
        <div className="absolute top-0 left-0 w-64 h-64 bg-chart-1/5 rounded-full blur-3xl" data-unique-id="5d313376-6724-47c3-ba84-43511f926300" data-file-name="components/home/Contact.tsx"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-chart-2/5 rounded-full blur-3xl" data-unique-id="b5012a69-26c9-40b7-bc75-4f8d89d94e93" data-file-name="components/home/Contact.tsx"></div>
      </div>
      
      <div className="container mx-auto px-6" data-unique-id="2eec79ac-d107-475e-8db1-f961b710b26e" data-file-name="components/home/Contact.tsx">
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
      }} className="text-center mb-16" data-unique-id="4fdaed08-1288-47cb-aba6-51d6ee97214a" data-file-name="components/home/Contact.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="da593d89-56b8-4623-9d20-e6cbd4e10311" data-file-name="components/home/Contact.tsx">
            <span className="editable-text" data-unique-id="2259568a-158a-4054-901d-bd68a8972310" data-file-name="components/home/Contact.tsx">Get In Touch</span>
          </h2>
          <div className="h-1 w-20 bg-chart-4 mx-auto" data-unique-id="9d18f796-ff3c-4932-a0ab-21d4fe15196b" data-file-name="components/home/Contact.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="b632e81b-9a16-4e68-ba30-5f91d9f2428b" data-file-name="components/home/Contact.tsx">
            <span className="editable-text" data-unique-id="9cbcfbad-b804-492d-a041-d94b3c848833" data-file-name="components/home/Contact.tsx">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </span>
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-unique-id="8ae72699-ce4b-4d9a-a163-d968d8a3aa5b" data-file-name="components/home/Contact.tsx">
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
        }} className="space-y-8" data-unique-id="dd956e1d-27f6-42dd-b701-eae85d7a082f" data-file-name="components/home/Contact.tsx">
            <h3 className="text-2xl font-bold" data-unique-id="7d0397fd-9d96-48e6-bac5-2ed902ceef73" data-file-name="components/home/Contact.tsx">
              <span className="editable-text" data-unique-id="46e8c015-b756-4aa6-84d0-10812ddf9c06" data-file-name="components/home/Contact.tsx">Contact Information</span>
            </h3>
            
            <div className="space-y-6" data-unique-id="6a1b340e-7b22-4813-ab4f-f33443b6e713" data-file-name="components/home/Contact.tsx">
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="df49ed30-0cd0-448f-85df-930722f3bf5f" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-1/10 p-3 rounded-full mr-4" data-unique-id="085c9541-6832-4c9c-b9ba-fa0cb85226e3" data-file-name="components/home/Contact.tsx">
                  <Phone className="text-chart-1" size={24} />
                </div>
                <div data-unique-id="aa86b2ed-646c-4d02-a05c-9f3a16cd507a" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="ef47bbac-c894-4fb1-8d80-d6f7f65ea19c" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="59e3de90-d4d4-4c5e-aec7-84336f838a34" data-file-name="components/home/Contact.tsx">Phone</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="e0bcf34a-1172-433f-8c69-ace250505958" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="7b28f97a-82b6-4a48-a46b-58bb6b5517fd" data-file-name="components/home/Contact.tsx">0312-0362742</span>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="014b0ae8-7bb9-4537-b05e-cfa10bea8543" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-2/10 p-3 rounded-full mr-4" data-unique-id="d85c3e45-299c-437e-85dd-17464c269da7" data-file-name="components/home/Contact.tsx">
                  <Mail className="text-chart-2" size={24} />
                </div>
                <div data-unique-id="7b1e3a2a-92ab-4afa-8693-e5beccc06d4d" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="d247db4f-9eb4-479a-936a-7908047558d9" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="8f937cd0-eaad-4125-92a2-b3a9d6f7306b" data-file-name="components/home/Contact.tsx">Email</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="77639d4d-ae3e-4e64-9d7e-9b3f5d58f088" data-file-name="components/home/Contact.tsx">
                    <a href="mailto:lasharitanveerahmed68@gmail.com" className="hover:text-chart-2 transition-colors" data-unique-id="8a41971b-9b19-43ef-a439-996051f285ad" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="bd8cb78f-6ec0-47e1-a0ed-316c49e27897" data-file-name="components/home/Contact.tsx">lasharitanveerahmed68@gmail.com</span>
                    </a>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="9de5da29-6aab-4173-a9fe-015be1404b05" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-3/10 p-3 rounded-full mr-4" data-unique-id="b87113ba-47db-4847-adfb-d6c7dedadc2e" data-file-name="components/home/Contact.tsx">
                  <MapPin className="text-chart-3" size={24} />
                </div>
                <div data-unique-id="8c9ef672-f033-4f5f-b004-717531e6a403" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="3b26208b-297c-4c1c-97bc-3bcf7253538c" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="9f1f1979-5721-41c8-ae5e-c36f4cf3a87b" data-file-name="components/home/Contact.tsx">Address</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="4922472d-53d2-4f93-9a2e-ddb2c9e99f47" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="7f74cfb2-91bb-4099-b9b2-1b99cf8d656f" data-file-name="components/home/Contact.tsx">
                      Sain Muhammad Shah Road, Zulfiqar Colony, Dadu
                    </span>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="79bf3f91-e9e7-4469-b43b-db46958563c7" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-4/10 p-3 rounded-full mr-4" data-unique-id="d0996b34-c8cd-469e-9261-faa96b5a2112" data-file-name="components/home/Contact.tsx">
                  <Globe className="text-chart-4" size={24} />
                </div>
                <div data-unique-id="c197ada4-35f4-4018-af5a-9c36bf92a1f4" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="1ef6f3f6-bbf1-4efb-b5c5-fe84ce87c802" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="d218d2d9-df4c-4c6d-970c-7f37afcb4256" data-file-name="components/home/Contact.tsx">Availability</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="fbe63821-eecb-4345-8d63-0ca13feeb52d" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="a3a129b0-d6ff-47fc-b1d0-5e279611bd8f" data-file-name="components/home/Contact.tsx">
                      Open to opportunities worldwide
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="pt-8" data-unique-id="7d78856e-6838-46d2-8305-ec9270983341" data-file-name="components/home/Contact.tsx">
              <h3 className="text-2xl font-bold mb-4" data-unique-id="ffcda14a-1c75-4783-a646-c44abdd315db" data-file-name="components/home/Contact.tsx">
                <span className="editable-text" data-unique-id="658098c0-9669-4fc8-84e8-f36c5fdfb85f" data-file-name="components/home/Contact.tsx">Location</span>
              </h3>
              <motion.div whileHover={{
              scale: 1.02
            }} className="rounded-lg overflow-hidden border border-border shadow-md h-[300px] w-full" data-unique-id="fa2ecae4-3249-4c42-b899-00a6fc093688" data-file-name="components/home/Contact.tsx">
                <iframe title="Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.38306533202!2d67.72261304999999!3d26.734420699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71954baf199f%3A0x2d40beeac353a445!2sDadu%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1632312268054!5m2!1sen!2s" className="w-full h-full" style={{
                border: 0
              }} allowFullScreen loading="lazy" data-unique-id="ed26503a-9caa-4a6c-bae1-f93754de2028" data-file-name="components/home/Contact.tsx" />
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
        }} data-unique-id="349beebf-6fd5-4e19-bb37-480172a76d86" data-file-name="components/home/Contact.tsx">
            <motion.div whileHover={{
            y: -5
          }} transition={{
            type: "spring",
            stiffness: 300
          }} className="bg-card p-8 rounded-lg shadow-md border border-border/40" data-unique-id="712063fc-d4b7-4926-95c0-05bf32cfb5b9" data-file-name="components/home/Contact.tsx">
              <h3 className="text-2xl font-bold mb-6" data-unique-id="0b43cf4e-9a42-4646-8316-b2e22ba43045" data-file-name="components/home/Contact.tsx">
                <span className="editable-text" data-unique-id="8cf177ec-8680-44ac-9d54-52d330cfed45" data-file-name="components/home/Contact.tsx">Send a Message</span>
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
              }} className="flex flex-col items-center justify-center py-12 text-center" data-unique-id="fdf1ed40-828c-4488-993b-cb9b4a0e40c0" data-file-name="components/home/Contact.tsx">
                    <motion.div initial={{
                  scale: 0
                }} animate={{
                  scale: [0, 1.2, 1]
                }} transition={{
                  duration: 0.5
                }} data-unique-id="e69579ef-5f8c-4c4e-a6b4-00593e26b2a5" data-file-name="components/home/Contact.tsx">
                      <CheckCircle className="text-chart-2 h-16 w-16 mb-4" />
                    </motion.div>
                    <h4 className="text-xl font-bold mb-2" data-unique-id="2d385ab7-7eaf-4494-87bb-f52580d1354c" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="24e45f69-ce4c-4588-8bbb-933554d0da0b" data-file-name="components/home/Contact.tsx">Message Sent!</span>
                    </h4>
                    <p className="text-muted-foreground" data-unique-id="f873fc75-d0bb-4a89-a3fb-db204fad788f" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="b436b0bf-0aea-4f5b-aabb-e3acf862a513" data-file-name="components/home/Contact.tsx">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </span>
                    </p>
                  </motion.div> : <motion.form key="form" ref={formRef} onSubmit={handleSubmit} initial={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} className="space-y-6" data-unique-id="297b6bba-da6b-4440-b7e7-b5d0c51e93fb" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-unique-id="82d53212-1bda-4fcf-aa2d-23571df9ad35" data-file-name="components/home/Contact.tsx">
                      <div data-unique-id="1489357d-b748-4ae6-962f-af77cdb35df3" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                        <label htmlFor="name" className="block text-sm font-medium mb-2" data-unique-id="72c66e8a-1251-4bbb-860e-b2ff9bedc921" data-file-name="components/home/Contact.tsx">
                          <span className="editable-text" data-unique-id="80b2f085-fd3a-497f-a699-c3b8216d178b" data-file-name="components/home/Contact.tsx">Your Name</span>
                        </label>
                        <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.name ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="John Doe" data-unique-id="ea902dad-54af-451a-b4ca-a98591f93f9c" data-file-name="components/home/Contact.tsx" />
                        {formErrors.name && <motion.p initial={{
                      opacity: 0,
                      y: -10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="66eb5db6-d234-4d42-9849-93c7e1b71b11" data-file-name="components/home/Contact.tsx">
                            <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="a744fa61-d9f2-48ef-92d0-98e74015ea41" data-file-name="components/home/Contact.tsx"> Name is required
                          </span></motion.p>}
                      </div>
                      
                      <div data-unique-id="5297a2e6-f1ba-466e-bfcf-2fcd5c0a5539" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                        <label htmlFor="email" className="block text-sm font-medium mb-2" data-unique-id="af8e5f99-c040-442b-ba52-4e61648a79b1" data-file-name="components/home/Contact.tsx">
                          <span className="editable-text" data-unique-id="159d1067-7b29-4bc5-ad5f-f35b89900527" data-file-name="components/home/Contact.tsx">Email Address</span>
                        </label>
                        <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.email ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="john@example.com" data-unique-id="fba8d7e8-9431-47bc-ad78-9a39432e1261" data-file-name="components/home/Contact.tsx" />
                        {formErrors.email && <motion.p initial={{
                      opacity: 0,
                      y: -10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="a21ca032-331b-4968-b8c1-83b647ce62b4" data-file-name="components/home/Contact.tsx">
                            <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="ae2bb513-c26f-4699-98ec-727188c95d15" data-file-name="components/home/Contact.tsx"> Valid email is required
                          </span></motion.p>}
                      </div>
                    </div>
                    
                    <div data-unique-id="78c5f334-1b80-48e1-83b5-9b5ac9f9e896" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      <label htmlFor="subject" className="block text-sm font-medium mb-2" data-unique-id="c6ba2c39-9135-4000-92cb-0e7a0ab011b4" data-file-name="components/home/Contact.tsx">
                        <span className="editable-text" data-unique-id="9ae3dd13-bb25-4bef-aef8-d335043a2ea8" data-file-name="components/home/Contact.tsx">Subject</span>
                      </label>
                      <input type="text" id="subject" name="subject" value={formValues.subject} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.subject ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="Project Inquiry" data-unique-id="2c90e3d0-24f0-46e2-9f82-2ed647c4068b" data-file-name="components/home/Contact.tsx" />
                      {formErrors.subject && <motion.p initial={{
                    opacity: 0,
                    y: -10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="3d0adaae-0639-4edd-a89a-1b7863214535" data-file-name="components/home/Contact.tsx">
                          <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="5ec735f9-bde7-4bfb-832b-3a55192d2768" data-file-name="components/home/Contact.tsx"> Subject is required
                        </span></motion.p>}
                    </div>
                    
                    <div data-unique-id="5f596413-1f59-43ae-b7c7-5c5f5fcaaa4f" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      <label htmlFor="message" className="block text-sm font-medium mb-2" data-unique-id="aaa112e9-abd4-41aa-ab35-b3411b68ff31" data-file-name="components/home/Contact.tsx">
                        <span className="editable-text" data-unique-id="d333d240-7d08-4718-92f9-6920fda5858c" data-file-name="components/home/Contact.tsx">Message</span>
                      </label>
                      <textarea id="message" name="message" value={formValues.message} onChange={handleChange} rows={5} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50 resize-none", formErrors.message ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="Your message here..." data-unique-id="8841f203-1577-4692-ba4c-9a522d7d0f71" data-file-name="components/home/Contact.tsx" />
                      {formErrors.message && <motion.p initial={{
                    opacity: 0,
                    y: -10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="51e24244-b7ef-446e-ac51-7c53101b8256" data-file-name="components/home/Contact.tsx">
                          <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="aac12d40-64d2-4d03-975d-4eabf80c1f67" data-file-name="components/home/Contact.tsx"> Message is required
                        </span></motion.p>}
                    </div>
                    
                    <motion.button whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }} type="submit" disabled={formStatus === 'loading'} className={cn("flex items-center justify-center gap-2 w-full bg-chart-1 text-white py-3 px-6 rounded-md transition-all", formStatus === 'loading' ? "opacity-70 cursor-not-allowed" : "hover:bg-chart-1/90 hover:shadow-lg")} data-unique-id="d7649179-4c83-4e01-b543-306a8a0e3eea" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      {formStatus === 'loading' ? <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-unique-id="097a8965-a083-4d3d-bc59-4fd0c5d62bbd" data-file-name="components/home/Contact.tsx">
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
                }} className="text-destructive text-center mt-2 flex items-center justify-center" data-unique-id="f1b1e3d0-b51f-48c3-bb82-a7ff3865b71b" data-file-name="components/home/Contact.tsx">
                        <AlertCircle size={16} className="mr-2" />
                        <span className="editable-text" data-unique-id="15f97d18-11bf-42ba-a369-1de6849902dc" data-file-name="components/home/Contact.tsx">
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