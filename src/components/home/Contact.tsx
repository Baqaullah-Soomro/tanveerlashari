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
  return <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden" data-unique-id="9cd61d46-6869-457c-b4c9-e55460f2f9d5" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" data-unique-id="2f3445e6-9717-4f16-8268-84e512ca9a43" data-file-name="components/home/Contact.tsx">
        <div className="absolute top-0 left-0 w-64 h-64 bg-chart-1/5 rounded-full blur-3xl" data-unique-id="9e2430a4-7ff9-4027-bc6b-2cab7b4190da" data-file-name="components/home/Contact.tsx"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-chart-2/5 rounded-full blur-3xl" data-unique-id="39d8bfa6-3499-4b3c-a807-5501d88a1324" data-file-name="components/home/Contact.tsx"></div>
      </div>
      
      <div className="container mx-auto px-6" data-unique-id="252aa9b7-2288-4934-a679-f96afe3c03dd" data-file-name="components/home/Contact.tsx">
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
      }} className="text-center mb-16" data-unique-id="b65fe79c-13e6-4e79-95e1-f5f53474d9b9" data-file-name="components/home/Contact.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="6a931372-8836-409c-93e0-4d358f8926bf" data-file-name="components/home/Contact.tsx">
            <span className="editable-text" data-unique-id="03ee3d17-510a-4f73-9243-ed64d8897918" data-file-name="components/home/Contact.tsx">Get In Touch</span>
          </h2>
          <div className="h-1 w-20 bg-chart-4 mx-auto" data-unique-id="5f218d13-0823-4430-8f74-6377508b5422" data-file-name="components/home/Contact.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="ab022bb2-5e4a-45ea-9c74-0b7bd4cd6a75" data-file-name="components/home/Contact.tsx">
            <span className="editable-text" data-unique-id="fe0eae1c-f916-4080-bfd5-6a602f7e0e32" data-file-name="components/home/Contact.tsx">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </span>
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-unique-id="469ca559-4053-48a6-bcc1-554c6a2f2d46" data-file-name="components/home/Contact.tsx">
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
        }} className="space-y-8" data-unique-id="38a14ec7-4333-4b4f-8d8e-05bc165954ae" data-file-name="components/home/Contact.tsx">
            <h3 className="text-2xl font-bold" data-unique-id="c32af700-b92f-43d2-bead-f38077df29f7" data-file-name="components/home/Contact.tsx">
              <span className="editable-text" data-unique-id="90436f67-be39-4e36-9c1d-15ac3612fe59" data-file-name="components/home/Contact.tsx">Contact Information</span>
            </h3>
            
            <div className="space-y-6" data-unique-id="960ba5ee-9ba2-4406-b7d2-b05e0d40aef8" data-file-name="components/home/Contact.tsx">
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="383816f3-e791-4856-a969-108a2392b40f" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-1/10 p-3 rounded-full mr-4" data-unique-id="e1a1d6ef-0359-4d43-bf60-ccf291fbbf91" data-file-name="components/home/Contact.tsx">
                  <Phone className="text-chart-1" size={24} />
                </div>
                <div data-unique-id="15647cff-d5dd-40f0-bb0c-2f8fc49fcac7" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="ff03de1e-f65a-47ba-9436-0d2f1aa23883" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="713e77af-87ab-4a7f-aa31-1af43b719761" data-file-name="components/home/Contact.tsx">Phone</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="61597f0c-4f8d-4bb5-8548-728c59806a35" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="bc8f57c2-3c89-4b71-9f93-3da48396d644" data-file-name="components/home/Contact.tsx">0312-0362742</span>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="9a014ab5-93da-40d0-8d08-24e182be15b7" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-2/10 p-3 rounded-full mr-4" data-unique-id="a9d46f40-b2b4-46d8-8efc-725d540b97cc" data-file-name="components/home/Contact.tsx">
                  <Mail className="text-chart-2" size={24} />
                </div>
                <div data-unique-id="38fc272a-96b5-42aa-87a0-d8d858ecefdb" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="5b50a30b-bcb8-4b3e-87b4-6729f8603ba2" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="52ca1431-669b-46b7-aa2b-2d77b47c3850" data-file-name="components/home/Contact.tsx">Email</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="e790b7d9-c4a0-42b3-b56c-4eaef1b1f35a" data-file-name="components/home/Contact.tsx">
                    <a href="mailto:lasharitanveerahmed68@gmail.com" className="hover:text-chart-2 transition-colors" data-unique-id="e4ad378b-91a5-424a-b598-6e053e2b99ba" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="d971b8a8-3827-4ebe-922f-3be55431051b" data-file-name="components/home/Contact.tsx">lasharitanveerahmed68@gmail.com</span>
                    </a>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="08eccce3-6588-4842-9c12-c35dc6393980" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-3/10 p-3 rounded-full mr-4" data-unique-id="f9df3b3e-d990-460a-b24a-0c7265b4dc73" data-file-name="components/home/Contact.tsx">
                  <MapPin className="text-chart-3" size={24} />
                </div>
                <div data-unique-id="d8108f0f-12fd-42c8-91f6-4dcad7e99444" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="c8ff03f9-fc1e-441a-835c-e988c15c4a20" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="fc34cd82-11d6-4758-8f92-7de01b226733" data-file-name="components/home/Contact.tsx">Address</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="e34ffb97-51e5-4f96-9ef7-17c972f1877a" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="0ce2c774-ad76-40a4-bf61-28f25fbaa9f0" data-file-name="components/home/Contact.tsx">
                      Sain Muhammad Shah Road, Zulfiqar Colony, Dadu
                    </span>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="aade4e94-f692-4fbe-9e93-44280a2cf993" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-4/10 p-3 rounded-full mr-4" data-unique-id="15ba55d3-a4a7-4d1b-928b-727fafc555e1" data-file-name="components/home/Contact.tsx">
                  <Globe className="text-chart-4" size={24} />
                </div>
                <div data-unique-id="84c65c15-ad65-446c-b6b1-bab040741c39" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="3d053229-236b-4a21-a15e-383e2a87760d" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="b9bce4c2-e3d2-43cb-ab83-0864a01e9392" data-file-name="components/home/Contact.tsx">Availability</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="8d35001a-769b-4c6e-9446-39f686e1847f" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="f7a2ebea-ce83-4579-b9ea-7e00d6e3e8dc" data-file-name="components/home/Contact.tsx">
                      Open to opportunities worldwide
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="pt-8" data-unique-id="af6fb3d4-a440-46cf-b400-421864563361" data-file-name="components/home/Contact.tsx">
              <h3 className="text-2xl font-bold mb-4" data-unique-id="516a7d31-0875-4e66-871a-9d4fcca49f4b" data-file-name="components/home/Contact.tsx">
                <span className="editable-text" data-unique-id="117737f9-9022-41a7-a855-c72c9fbc22e3" data-file-name="components/home/Contact.tsx">Location</span>
              </h3>
              <motion.div whileHover={{
              scale: 1.02
            }} className="rounded-lg overflow-hidden border border-border shadow-md h-[300px] w-full" data-unique-id="0c86e49f-f510-4be9-a2bd-93cfe004820b" data-file-name="components/home/Contact.tsx">
                <iframe title="Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.38306533202!2d67.72261304999999!3d26.734420699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71954baf199f%3A0x2d40beeac353a445!2sDadu%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1632312268054!5m2!1sen!2s" className="w-full h-full" style={{
                border: 0
              }} allowFullScreen loading="lazy" data-unique-id="f3237565-ec0d-41be-bf60-a9383594b034" data-file-name="components/home/Contact.tsx" />
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
        }} data-unique-id="795ab5dd-51c3-449f-9494-44f36ecc5df0" data-file-name="components/home/Contact.tsx">
            <motion.div whileHover={{
            y: -5
          }} transition={{
            type: "spring",
            stiffness: 300
          }} className="bg-card p-8 rounded-lg shadow-md border border-border/40" data-unique-id="46268f68-b716-409e-9e67-63b89923343a" data-file-name="components/home/Contact.tsx">
              <h3 className="text-2xl font-bold mb-6" data-unique-id="491b61a1-999f-44d6-93a6-7df1f185e37a" data-file-name="components/home/Contact.tsx">
                <span className="editable-text" data-unique-id="e8a99df1-ca04-4345-ae3f-f34e3f97967c" data-file-name="components/home/Contact.tsx">Send a Message</span>
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
              }} className="flex flex-col items-center justify-center py-12 text-center" data-unique-id="8df5af3c-84df-4004-8a6b-756dfd650dc5" data-file-name="components/home/Contact.tsx">
                    <motion.div initial={{
                  scale: 0
                }} animate={{
                  scale: [0, 1.2, 1]
                }} transition={{
                  duration: 0.5
                }} data-unique-id="750f9367-a6c8-4928-9f62-609b73e39f78" data-file-name="components/home/Contact.tsx">
                      <CheckCircle className="text-chart-2 h-16 w-16 mb-4" />
                    </motion.div>
                    <h4 className="text-xl font-bold mb-2" data-unique-id="3e26b5c1-5238-405a-9ab2-25a4528af6d1" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="1f6e38b1-bc9d-4880-a9a8-5b7d2c134d3b" data-file-name="components/home/Contact.tsx">Message Sent!</span>
                    </h4>
                    <p className="text-muted-foreground" data-unique-id="383df91e-39d7-4209-b51c-9f69cbf6c5d6" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="bf4b1a9f-495e-45a7-ba09-2ab4caec7f9d" data-file-name="components/home/Contact.tsx">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </span>
                    </p>
                  </motion.div> : <motion.form key="form" ref={formRef} onSubmit={handleSubmit} initial={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} className="space-y-6" data-unique-id="670302a5-d8af-4e0f-912c-33e5e228a831" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-unique-id="d158ab83-9435-4918-b0ee-0a33ebcc9404" data-file-name="components/home/Contact.tsx">
                      <div data-unique-id="ca5affea-bde6-49ba-ab73-f3eb8256527a" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                        <label htmlFor="name" className="block text-sm font-medium mb-2" data-unique-id="9f9dc3ce-f86c-48ca-a6cd-bdd72a6332ed" data-file-name="components/home/Contact.tsx">
                          <span className="editable-text" data-unique-id="2341fa09-62d6-4d4c-967f-2bbe83f7e0a7" data-file-name="components/home/Contact.tsx">Your Name</span>
                        </label>
                        <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.name ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="John Doe" data-unique-id="d5ee8f8f-028a-4638-83aa-c9bb9e010bc9" data-file-name="components/home/Contact.tsx" />
                        {formErrors.name && <motion.p initial={{
                      opacity: 0,
                      y: -10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="20bce103-9dc4-49d1-81cb-0a98413eda1d" data-file-name="components/home/Contact.tsx">
                            <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="a9dab7e0-1859-43ce-aa55-f3930e81f4bc" data-file-name="components/home/Contact.tsx"> Name is required
                          </span></motion.p>}
                      </div>
                      
                      <div data-unique-id="c1b6c8ad-1007-4b33-9f17-39bd2b9296cc" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                        <label htmlFor="email" className="block text-sm font-medium mb-2" data-unique-id="32be3aa1-5046-43fa-8bb6-63647eb46d1d" data-file-name="components/home/Contact.tsx">
                          <span className="editable-text" data-unique-id="43123419-cef8-4baa-8478-4c1a72c6e731" data-file-name="components/home/Contact.tsx">Email Address</span>
                        </label>
                        <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.email ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="john@example.com" data-unique-id="d0201ab5-3a9b-4caf-a761-34b5663543e0" data-file-name="components/home/Contact.tsx" />
                        {formErrors.email && <motion.p initial={{
                      opacity: 0,
                      y: -10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="0c2fee8b-438e-4513-ba78-7d44b7636b2c" data-file-name="components/home/Contact.tsx">
                            <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="9e1bb0c4-09f7-4006-90bb-3ade111a010c" data-file-name="components/home/Contact.tsx"> Valid email is required
                          </span></motion.p>}
                      </div>
                    </div>
                    
                    <div data-unique-id="910e18b7-4355-4b11-85fd-8c53c27da84f" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      <label htmlFor="subject" className="block text-sm font-medium mb-2" data-unique-id="ebaf16a7-9687-4e80-8f15-ed01844a7513" data-file-name="components/home/Contact.tsx">
                        <span className="editable-text" data-unique-id="99d392f0-b4a4-46dd-88a9-bc19ae706aa7" data-file-name="components/home/Contact.tsx">Subject</span>
                      </label>
                      <input type="text" id="subject" name="subject" value={formValues.subject} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.subject ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="Project Inquiry" data-unique-id="b49ebe44-1f83-4c10-bcfe-e66056331677" data-file-name="components/home/Contact.tsx" />
                      {formErrors.subject && <motion.p initial={{
                    opacity: 0,
                    y: -10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="ea0e578f-ce3f-42a9-a1b2-c32e1e8b071f" data-file-name="components/home/Contact.tsx">
                          <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="688a8e6f-3809-482b-94a9-4cae15a14f3d" data-file-name="components/home/Contact.tsx"> Subject is required
                        </span></motion.p>}
                    </div>
                    
                    <div data-unique-id="1772166b-5e09-4a03-b299-6779cc573d6b" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      <label htmlFor="message" className="block text-sm font-medium mb-2" data-unique-id="0c686163-1614-487a-972f-ebe49f51d466" data-file-name="components/home/Contact.tsx">
                        <span className="editable-text" data-unique-id="a036af23-8711-45c2-86bb-e8903deef981" data-file-name="components/home/Contact.tsx">Message</span>
                      </label>
                      <textarea id="message" name="message" value={formValues.message} onChange={handleChange} rows={5} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50 resize-none", formErrors.message ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="Your message here..." data-unique-id="516f34a2-1929-4fa1-a94f-bc5f91005634" data-file-name="components/home/Contact.tsx" />
                      {formErrors.message && <motion.p initial={{
                    opacity: 0,
                    y: -10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="bf38972c-cf92-49df-ad31-7860b745ee37" data-file-name="components/home/Contact.tsx">
                          <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="4e0179b3-36c5-414f-86ab-8e8ab7a09e15" data-file-name="components/home/Contact.tsx"> Message is required
                        </span></motion.p>}
                    </div>
                    
                    <motion.button whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }} type="submit" disabled={formStatus === 'loading'} className={cn("flex items-center justify-center gap-2 w-full bg-chart-1 text-white py-3 px-6 rounded-md transition-all", formStatus === 'loading' ? "opacity-70 cursor-not-allowed" : "hover:bg-chart-1/90 hover:shadow-lg")} data-unique-id="172011df-fd35-4638-811d-060d9c556871" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      {formStatus === 'loading' ? <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-unique-id="a5bd8fe3-decc-4990-804e-ba7b00b5678a" data-file-name="components/home/Contact.tsx">
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
                }} className="text-destructive text-center mt-2 flex items-center justify-center" data-unique-id="75bd742c-e89b-425c-92ba-158c1b2497dc" data-file-name="components/home/Contact.tsx">
                        <AlertCircle size={16} className="mr-2" />
                        <span className="editable-text" data-unique-id="e55b1c4c-a9f6-466b-85e9-6546a36b3549" data-file-name="components/home/Contact.tsx">
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