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
  return <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden" data-unique-id="d101c667-49b2-409d-a6da-27633ec0ea15" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" data-unique-id="a0f6b60d-04ff-4b50-a22e-828d7c81f1e3" data-file-name="components/home/Contact.tsx">
        <div className="absolute top-0 left-0 w-64 h-64 bg-chart-1/5 rounded-full blur-3xl" data-unique-id="fdb8a47b-9b0a-4341-8520-c60af8f9338f" data-file-name="components/home/Contact.tsx"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-chart-2/5 rounded-full blur-3xl" data-unique-id="76bfa699-ecc6-402d-bde5-be6ea4ebb07b" data-file-name="components/home/Contact.tsx"></div>
      </div>
      
      <div className="container mx-auto px-6" data-unique-id="ac6b9a97-0626-4447-8d41-3a505824f701" data-file-name="components/home/Contact.tsx">
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
      }} className="text-center mb-16" data-unique-id="1db65440-5d59-4925-9a4e-95a7f23d3044" data-file-name="components/home/Contact.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="3dff3a16-08a0-4388-af2d-f397f169f6a7" data-file-name="components/home/Contact.tsx">
            <span className="editable-text" data-unique-id="6d3c8894-95b1-4949-9fd0-a71acc86e355" data-file-name="components/home/Contact.tsx">Get In Touch</span>
          </h2>
          <div className="h-1 w-20 bg-chart-4 mx-auto" data-unique-id="bc786e77-dda5-4a83-946a-6dfe152ae493" data-file-name="components/home/Contact.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="3beb52df-b7be-45e6-81bd-3ebed61b8d60" data-file-name="components/home/Contact.tsx">
            <span className="editable-text" data-unique-id="0c91649b-8eca-40cf-8a88-1918e6947c55" data-file-name="components/home/Contact.tsx">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </span>
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-unique-id="9c417916-6958-4fe1-aaa6-b7333d657cbf" data-file-name="components/home/Contact.tsx">
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
        }} className="space-y-8" data-unique-id="23286c5c-a54a-430c-8d10-76e6f555a92b" data-file-name="components/home/Contact.tsx">
            <h3 className="text-2xl font-bold" data-unique-id="21ea3a2e-e73a-4e4c-ba2c-b1b442b67e33" data-file-name="components/home/Contact.tsx">
              <span className="editable-text" data-unique-id="bb8d1375-0478-4872-8f7e-3edd9409e158" data-file-name="components/home/Contact.tsx">Contact Information</span>
            </h3>
            
            <div className="space-y-6" data-unique-id="28655615-25c5-49c8-a7c9-619407cdd494" data-file-name="components/home/Contact.tsx">
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="27545251-2878-47c4-b168-932d1c34b1fd" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-1/10 p-3 rounded-full mr-4" data-unique-id="7f350648-800a-48eb-aeb5-55131f3b2195" data-file-name="components/home/Contact.tsx">
                  <Phone className="text-chart-1" size={24} />
                </div>
                <div data-unique-id="25618c82-a24a-4336-9322-ca1123f97d7c" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="597338a0-740e-48b2-becc-557f77efe671" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="7c457062-4625-4f4f-8894-1cb6ef2a327b" data-file-name="components/home/Contact.tsx">Phone</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="e21ad309-753b-416a-88db-b8768b06da24" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="d7197c33-a2f8-4ea0-9ee9-bc12f67524b7" data-file-name="components/home/Contact.tsx">0312-0362742</span>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="5ed78436-0795-4740-b48f-4d3e0fe1e188" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-2/10 p-3 rounded-full mr-4" data-unique-id="be30f83c-130b-4a9b-908e-ccd588ebc451" data-file-name="components/home/Contact.tsx">
                  <Mail className="text-chart-2" size={24} />
                </div>
                <div data-unique-id="aeffa0ed-035d-42f4-ba0f-fdb17d21b1be" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="5868ad2c-379c-493e-a6e6-90e50346b2de" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="e50f2d3d-9d7c-469f-9ad1-13a02cf927cb" data-file-name="components/home/Contact.tsx">Email</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="e5cf9e64-6ee1-4141-a215-931566c721f8" data-file-name="components/home/Contact.tsx">
                    <a href="mailto:lasharitanveerahmed68@gmail.com" className="hover:text-chart-2 transition-colors" data-unique-id="a9ff0bdb-a774-470d-9f84-df60f290cf43" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="3d389aa1-b9c5-4a5b-bf51-0d644508d56d" data-file-name="components/home/Contact.tsx">lasharitanveerahmed68@gmail.com</span>
                    </a>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="cedcd537-cff3-482d-95c4-ec0558491e0a" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-3/10 p-3 rounded-full mr-4" data-unique-id="d136bb4c-4fe0-480d-bb30-ae23a63b702b" data-file-name="components/home/Contact.tsx">
                  <MapPin className="text-chart-3" size={24} />
                </div>
                <div data-unique-id="4b4eb09b-59fc-4b06-ac2c-e5e7b0a1002c" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="f2a5177d-5ee4-4852-b096-0cca396d7073" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="d6673884-040a-47ea-a29c-9744b560b505" data-file-name="components/home/Contact.tsx">Address</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="73734610-02c5-47a3-8fef-ac2fd8360df6" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="6de3cabe-8e44-4429-9ec1-80222ef2048a" data-file-name="components/home/Contact.tsx">
                      Sain Muhammad Shah Road, Zulfiqar Colony, Dadu
                    </span>
                  </p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} className="flex items-start bg-card p-4 rounded-lg shadow-md border border-border/40" data-unique-id="762faa2f-b610-4795-89f2-cad4f159bacf" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-4/10 p-3 rounded-full mr-4" data-unique-id="47335a33-5331-4884-995f-4263b328581d" data-file-name="components/home/Contact.tsx">
                  <Globe className="text-chart-4" size={24} />
                </div>
                <div data-unique-id="12609d35-b815-451c-ba41-6112c7c66120" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="03bb1f58-5b50-4291-a0f9-1b32bed9666e" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="f1159782-7ebe-490a-b1f8-46eadf365ea4" data-file-name="components/home/Contact.tsx">Availability</span>
                  </h4>
                  <p className="text-muted-foreground" data-unique-id="6d882a45-4569-47e7-adc3-17d60c3f20af" data-file-name="components/home/Contact.tsx">
                    <span className="editable-text" data-unique-id="7a053e4a-16b7-4b47-b518-106212dcf40b" data-file-name="components/home/Contact.tsx">
                      Open to opportunities worldwide
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="pt-8" data-unique-id="8c9aefc9-d497-479d-94bc-9c442d1e4f02" data-file-name="components/home/Contact.tsx">
              <h3 className="text-2xl font-bold mb-4" data-unique-id="b557f993-5dbb-4225-a461-c72a42772b7b" data-file-name="components/home/Contact.tsx">
                <span className="editable-text" data-unique-id="6ca3de93-6371-4b60-8915-90cce226efaa" data-file-name="components/home/Contact.tsx">Location</span>
              </h3>
              <motion.div whileHover={{
              scale: 1.02
            }} className="rounded-lg overflow-hidden border border-border shadow-md h-[300px] w-full" data-unique-id="2303dc88-c283-490a-9c12-f6337836da10" data-file-name="components/home/Contact.tsx">
                <iframe title="Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.38306533202!2d67.72261304999999!3d26.734420699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71954baf199f%3A0x2d40beeac353a445!2sDadu%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1632312268054!5m2!1sen!2s" className="w-full h-full" style={{
                border: 0
              }} allowFullScreen loading="lazy" data-unique-id="e39b3bc8-85c8-48d2-ba74-47cd1519a556" data-file-name="components/home/Contact.tsx" />
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
        }} data-unique-id="b50030d4-8656-4b67-87c3-28229c18d35e" data-file-name="components/home/Contact.tsx">
            <motion.div whileHover={{
            y: -5
          }} transition={{
            type: "spring",
            stiffness: 300
          }} className="bg-card p-8 rounded-lg shadow-md border border-border/40" data-unique-id="7e958395-e6ce-4808-92a3-ceebdb9f5b1b" data-file-name="components/home/Contact.tsx">
              <h3 className="text-2xl font-bold mb-6" data-unique-id="6392d997-358e-4a81-bf9f-2dbe3fe3b2f5" data-file-name="components/home/Contact.tsx">
                <span className="editable-text" data-unique-id="a65a23da-c442-4443-9c68-367cb077126b" data-file-name="components/home/Contact.tsx">Send a Message</span>
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
              }} className="flex flex-col items-center justify-center py-12 text-center" data-unique-id="3e2d146a-ccad-4106-af16-4e1b1edfde79" data-file-name="components/home/Contact.tsx">
                    <motion.div initial={{
                  scale: 0
                }} animate={{
                  scale: [0, 1.2, 1]
                }} transition={{
                  duration: 0.5
                }} data-unique-id="8756a63f-cfa6-479d-b67b-327b24cd1ab6" data-file-name="components/home/Contact.tsx">
                      <CheckCircle className="text-chart-2 h-16 w-16 mb-4" />
                    </motion.div>
                    <h4 className="text-xl font-bold mb-2" data-unique-id="7254fb47-533e-4b95-91d2-e9cd5a64bfda" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="513e27f4-5a07-428d-bfc7-1e92ba30d2fe" data-file-name="components/home/Contact.tsx">Message Sent!</span>
                    </h4>
                    <p className="text-muted-foreground" data-unique-id="8004fda2-1f04-491f-99c6-ed157d58fc36" data-file-name="components/home/Contact.tsx">
                      <span className="editable-text" data-unique-id="9e425b9e-b941-4af4-bad7-042beaeef377" data-file-name="components/home/Contact.tsx">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </span>
                    </p>
                  </motion.div> : <motion.form key="form" ref={formRef} onSubmit={handleSubmit} initial={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} className="space-y-6" data-unique-id="8a636590-d1ef-4bac-a818-da510346ffc6" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-unique-id="1ee4aaa8-8496-412f-82ce-dbd0fa6228ea" data-file-name="components/home/Contact.tsx">
                      <div data-unique-id="9bfdcb7f-c4ee-465c-8bef-a6b7eced0502" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                        <label htmlFor="name" className="block text-sm font-medium mb-2" data-unique-id="2df77150-212f-4ca3-899e-179229c46caf" data-file-name="components/home/Contact.tsx">
                          <span className="editable-text" data-unique-id="acf6363f-86c1-4f36-ac65-bb5d3a4a621a" data-file-name="components/home/Contact.tsx">Your Name</span>
                        </label>
                        <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.name ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="John Doe" data-unique-id="bb54a33b-d004-4741-9da8-f31af1717822" data-file-name="components/home/Contact.tsx" />
                        {formErrors.name && <motion.p initial={{
                      opacity: 0,
                      y: -10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="f434e015-80e7-4f76-a72a-6f53f062bc11" data-file-name="components/home/Contact.tsx">
                            <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="c6998f00-8ba5-49f6-bf2f-4eabe62eec0e" data-file-name="components/home/Contact.tsx"> Name is required
                          </span></motion.p>}
                      </div>
                      
                      <div data-unique-id="c9b1578a-2e59-4484-bc3b-11753d738e6e" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                        <label htmlFor="email" className="block text-sm font-medium mb-2" data-unique-id="5cfb763a-f869-4157-9600-a014dfd52a85" data-file-name="components/home/Contact.tsx">
                          <span className="editable-text" data-unique-id="28fddbf5-11b4-4a99-9627-0e41b1b32907" data-file-name="components/home/Contact.tsx">Email Address</span>
                        </label>
                        <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.email ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="john@example.com" data-unique-id="45a587cf-4804-4d06-a31c-e024b61b2740" data-file-name="components/home/Contact.tsx" />
                        {formErrors.email && <motion.p initial={{
                      opacity: 0,
                      y: -10
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="3a228015-2aba-4932-a4d4-9bd7be3f386b" data-file-name="components/home/Contact.tsx">
                            <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="8f80b37f-bd28-4326-be5e-955025c71dcf" data-file-name="components/home/Contact.tsx"> Valid email is required
                          </span></motion.p>}
                      </div>
                    </div>
                    
                    <div data-unique-id="2db60894-3f4c-439d-bf96-59853b386439" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      <label htmlFor="subject" className="block text-sm font-medium mb-2" data-unique-id="8eb04288-9b8d-407f-84d1-328b3042baae" data-file-name="components/home/Contact.tsx">
                        <span className="editable-text" data-unique-id="a0dc9b44-deb3-40f0-b443-cf8cab356aa4" data-file-name="components/home/Contact.tsx">Subject</span>
                      </label>
                      <input type="text" id="subject" name="subject" value={formValues.subject} onChange={handleChange} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50", formErrors.subject ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="Project Inquiry" data-unique-id="d777ea1b-3dce-4232-9eb0-c1043520daea" data-file-name="components/home/Contact.tsx" />
                      {formErrors.subject && <motion.p initial={{
                    opacity: 0,
                    y: -10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="94620e87-e1ae-44c8-b343-476bd1e01635" data-file-name="components/home/Contact.tsx">
                          <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="9f4737aa-cf8a-467d-b844-affe7d17790e" data-file-name="components/home/Contact.tsx"> Subject is required
                        </span></motion.p>}
                    </div>
                    
                    <div data-unique-id="3fe0d5ca-8a9d-4f21-8bdc-c02475ad5296" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      <label htmlFor="message" className="block text-sm font-medium mb-2" data-unique-id="9df4b0fe-af25-4308-80c2-45b16e2cfa6a" data-file-name="components/home/Contact.tsx">
                        <span className="editable-text" data-unique-id="9b15cc31-72a6-4a95-acb7-1892e0a71953" data-file-name="components/home/Contact.tsx">Message</span>
                      </label>
                      <textarea id="message" name="message" value={formValues.message} onChange={handleChange} rows={5} className={cn("w-full px-4 py-3 rounded-md border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-chart-1/50 resize-none", formErrors.message ? "border-destructive" : "border-input hover:border-chart-1/50")} placeholder="Your message here..." data-unique-id="6773898f-929a-4cab-b46f-2ababdb1f3b9" data-file-name="components/home/Contact.tsx" />
                      {formErrors.message && <motion.p initial={{
                    opacity: 0,
                    y: -10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} className="text-destructive text-sm mt-1 flex items-center" data-unique-id="a9a603c4-b502-45c6-a668-8ea79c5d40a8" data-file-name="components/home/Contact.tsx">
                          <AlertCircle size={12} className="mr-1" /><span className="editable-text" data-unique-id="900a0819-7fd7-4b49-87b9-98a2eec13b62" data-file-name="components/home/Contact.tsx"> Message is required
                        </span></motion.p>}
                    </div>
                    
                    <motion.button whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }} type="submit" disabled={formStatus === 'loading'} className={cn("flex items-center justify-center gap-2 w-full bg-chart-1 text-white py-3 px-6 rounded-md transition-all", formStatus === 'loading' ? "opacity-70 cursor-not-allowed" : "hover:bg-chart-1/90 hover:shadow-lg")} data-unique-id="a1311bb3-0dbe-4ef4-8fe4-c841775e703b" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                      {formStatus === 'loading' ? <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-unique-id="c35949f2-b9ef-4989-ac9b-1a0d8a7bb881" data-file-name="components/home/Contact.tsx">
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
                }} className="text-destructive text-center mt-2 flex items-center justify-center" data-unique-id="a12ae2ee-9f36-48f2-b272-98ab39537221" data-file-name="components/home/Contact.tsx">
                        <AlertCircle size={16} className="mr-2" />
                        <span className="editable-text" data-unique-id="371ba79a-8960-4269-8428-6d5dd50d1182" data-file-name="components/home/Contact.tsx">
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