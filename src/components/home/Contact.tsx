'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import emailjs from '@emailjs/browser';
export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      setFormStatus('success');

      // Reset the success message after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      setFormStatus('error');
      console.error('Error submitting form:', error);
    }
  };
  return <section id="contact" className="py-24" data-unique-id="d1984798-85de-460e-b559-1b24d9495fda" data-file-name="components/home/Contact.tsx">
      <div className="container mx-auto px-6" data-unique-id="5ca0a309-b3ab-4ec8-9cf6-4417f53be915" data-file-name="components/home/Contact.tsx">
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
      }} className="text-center mb-16" data-unique-id="b2fdbcd9-e731-40c9-9b21-87312409b477" data-file-name="components/home/Contact.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="36b584c2-0b48-46bf-b278-a02e7e0719d1" data-file-name="components/home/Contact.tsx"><span className="editable-text" data-unique-id="b68b251c-db12-487e-8df9-35fbb2fe46ed" data-file-name="components/home/Contact.tsx">Get In Touch</span></h2>
          <div className="h-1 w-20 bg-chart-4 mx-auto" data-unique-id="e6360de3-abf8-47a2-bb26-2f8e8ae959bb" data-file-name="components/home/Contact.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="061aa863-e3e4-46fe-94ce-d9ebe722a530" data-file-name="components/home/Contact.tsx"><span className="editable-text" data-unique-id="126b5edb-8af9-48e6-8b31-b016de319bdc" data-file-name="components/home/Contact.tsx">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </span></p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-unique-id="1b956999-fedf-4790-ad59-96d0f18aacb1" data-file-name="components/home/Contact.tsx">
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
        }} className="space-y-8" data-unique-id="aa7ed8ca-29c0-4c62-af1a-29643c6fdd6c" data-file-name="components/home/Contact.tsx">
            <h3 className="text-2xl font-bold" data-unique-id="55cbdae2-fac7-48f3-882d-98d0ded39a7b" data-file-name="components/home/Contact.tsx"><span className="editable-text" data-unique-id="e67a5406-8f98-4c1f-b443-1df892d9b3ac" data-file-name="components/home/Contact.tsx">Contact Information</span></h3>
            
            <div className="space-y-6" data-unique-id="ede37043-6b57-44ed-9ddd-9abada40aa19" data-file-name="components/home/Contact.tsx">
              <div className="flex items-start" data-unique-id="f745822a-5a81-4985-97d0-44e935cf120a" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-1/10 p-3 rounded-full mr-4" data-unique-id="381dc9b5-cc4e-4c62-94fa-a3b319e6ad93" data-file-name="components/home/Contact.tsx">
                  <Phone className="text-chart-1" size={24} />
                </div>
                <div data-unique-id="3359206d-a455-4857-9aac-870e5e40fecf" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="54613196-924e-4eac-82a4-1e009a5ff6d2" data-file-name="components/home/Contact.tsx"><span className="editable-text" data-unique-id="20322c1f-8774-47c0-9a65-a00b8cb0357f" data-file-name="components/home/Contact.tsx">Phone</span></h4>
                  <p className="text-muted-foreground" data-unique-id="a07c6d8b-782a-41bf-a22c-6ba07ea60469" data-file-name="components/home/Contact.tsx"><span className="editable-text" data-unique-id="fc5d064a-203b-42b8-b2e4-b2dd1cbd43b0" data-file-name="components/home/Contact.tsx">0312-0362742</span></p>
                </div>
              </div>
              
              <div className="flex items-start" data-unique-id="ae1e200a-9162-400d-ae73-992d764f410f" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-2/10 p-3 rounded-full mr-4" data-unique-id="49332a07-a3ce-48a2-b77d-5b1b2658c8c5" data-file-name="components/home/Contact.tsx">
                  <Mail className="text-chart-2" size={24} />
                </div>
                <div data-unique-id="93c5d827-a4c6-43c6-bc88-e178bd4118af" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="00897b48-affc-4828-ada6-605f94da61ad" data-file-name="components/home/Contact.tsx"><span className="editable-text" data-unique-id="8f828715-1915-4eb9-b3c7-e1eecaeaf7b7" data-file-name="components/home/Contact.tsx">Email</span></h4>
                  <p className="text-muted-foreground" data-unique-id="dc2c3878-a3c7-470f-a21f-14f3898e9d87" data-file-name="components/home/Contact.tsx"><span className="editable-text" data-unique-id="d80c74f7-d15b-4b1c-91bd-46590e8b030e" data-file-name="components/home/Contact.tsx">lasharitanveerahmed68@gmail.com</span></p>
                </div>
              </div>
              
              <div className="flex items-start" data-unique-id="95d75cd4-5948-43b7-8780-d627d7534a60" data-file-name="components/home/Contact.tsx">
                <div className="bg-chart-3/10 p-3 rounded-full mr-4" data-unique-id="f4f156c3-2c3d-4663-9938-f430bbd1f83e" data-file-name="components/home/Contact.tsx">
                  <MapPin className="text-chart-3" size={24} />
                </div>
                <div data-unique-id="d86927d7-705d-4001-a929-2b644a8f1eb4" data-file-name="components/home/Contact.tsx">
                  <h4 className="font-bold text-lg" data-unique-id="efdeb621-315a-4e39-bf3d-d6402745acf2" data-file-name="components/home/Contact.tsx"><span className="editable-text" data-unique-id="3dfb4755-6e27-4a46-99e2-de0d0175d962" data-file-name="components/home/Contact.tsx">Address</span></h4>
                  <p className="text-muted-foreground" data-unique-id="2e2bb887-4e9a-4757-9ae2-1ec4337088da" data-file-name="components/home/Contact.tsx"><span className="editable-text" data-unique-id="5d5fbda9-885f-459b-9a89-eb4247b05833" data-file-name="components/home/Contact.tsx">
                    Sain Muhammad Shah Road, Zulfiqar Colony, Dadu
                  </span></p>
                </div>
              </div>
            </div>
            
            <div className="pt-8" data-unique-id="efef1dd7-55d6-4e8f-adc9-d2f0810fc20c" data-file-name="components/home/Contact.tsx">
              <h3 className="text-2xl font-bold mb-4" data-unique-id="7a7d1030-2b9d-4ef8-98ac-948aa48f0f45" data-file-name="components/home/Contact.tsx"><span className="editable-text" data-unique-id="e670c782-2d2e-4bea-93ec-c443034b0db8" data-file-name="components/home/Contact.tsx">Location</span></h3>
              <div className="rounded-lg overflow-hidden border border-border h-[300px] w-full" data-unique-id="3aea7dee-51ba-40fb-887c-63ea04aa09b0" data-file-name="components/home/Contact.tsx">
                <iframe title="Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.38306533202!2d67.72261304999999!3d26.734420699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71954baf199f%3A0x2d40beeac353a445!2sDadu%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1632312268054!5m2!1sen!2s" className="w-full h-full" style={{
                border: 0
              }} allowFullScreen loading="lazy" data-unique-id="2c0de1a3-7dba-41b6-aa5f-3ee379b9288e" data-file-name="components/home/Contact.tsx"></iframe>
              </div>
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
        }} data-unique-id="3967b1b7-4d71-40c0-be00-16ad8963351a" data-file-name="components/home/Contact.tsx">
            <div className="bg-card p-8 rounded-lg shadow-md" data-unique-id="288d39c9-7b00-4125-b93f-67fe1a2d2653" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
              <h3 className="text-2xl font-bold mb-6" data-unique-id="f6bac32d-5c68-447f-9651-9e13f4f9d2a5" data-file-name="components/home/Contact.tsx"><span className="editable-text" data-unique-id="b1423835-e5c3-4b9e-9a59-19ef49861e84" data-file-name="components/home/Contact.tsx">Send a Message</span></h3>
              
              {formStatus === 'success' ? <motion.div initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} className="flex flex-col items-center justify-center py-12 text-center" data-unique-id="2468552f-4b36-4833-847c-931be45c8c2c" data-file-name="components/home/Contact.tsx">
                  <CheckCircle className="text-chart-2 h-16 w-16 mb-4" />
                  <h4 className="text-xl font-bold mb-2" data-unique-id="3eacdd19-451d-4776-9739-50754ce41dff" data-file-name="components/home/Contact.tsx"><span className="editable-text" data-unique-id="b1ff0ea5-8d45-46d4-bff5-75216c4a69d6" data-file-name="components/home/Contact.tsx">Message Sent!</span></h4>
                  <p className="text-muted-foreground" data-unique-id="8a6d3e4c-24c7-4f6f-a9a3-86fd9519e2f5" data-file-name="components/home/Contact.tsx"><span className="editable-text" data-unique-id="1b33bb45-b3bd-4b31-ac0b-82583a7f1b75" data-file-name="components/home/Contact.tsx">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </span></p>
                </motion.div> : <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" data-unique-id="67402877-231f-455f-af1f-330a0b5cdd29" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-unique-id="1f947665-2958-4c4c-8412-a2aed287ed90" data-file-name="components/home/Contact.tsx">
                    <div data-unique-id="8dc22c32-2737-47be-a87a-c8854d3805c0" data-file-name="components/home/Contact.tsx">
                      <label htmlFor="name" className="block text-sm font-medium mb-2" data-unique-id="b55c83db-c6b5-4e8a-9664-f81589718cc5" data-file-name="components/home/Contact.tsx"><span className="editable-text" data-unique-id="b180a6f3-d9f1-4d82-9bd1-5a575436e0d2" data-file-name="components/home/Contact.tsx">
                        Your Name
                      </span></label>
                      <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background" placeholder="John Doe" data-unique-id="5c1c3dfe-e066-4f72-910e-3ca74d9213cd" data-file-name="components/home/Contact.tsx" />
                    </div>
                    
                    <div data-unique-id="8927e21f-1753-47ed-b695-c423c5a5de1d" data-file-name="components/home/Contact.tsx">
                      <label htmlFor="email" className="block text-sm font-medium mb-2" data-unique-id="390cb34b-533a-47a3-ad92-810790db2253" data-file-name="components/home/Contact.tsx"><span className="editable-text" data-unique-id="7f2d9d28-1542-4984-ae72-03d9b7d6b553" data-file-name="components/home/Contact.tsx">
                        Email Address
                      </span></label>
                      <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background" placeholder="john@example.com" data-unique-id="58d29b57-7cf1-4c90-856b-79ad555e351d" data-file-name="components/home/Contact.tsx" />
                    </div>
                  </div>
                  
                  <div data-unique-id="99f02a4c-7300-4c31-9cbc-81ba62f64b9f" data-file-name="components/home/Contact.tsx">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2" data-unique-id="9b5b5b4b-165d-4e89-964c-71178792b883" data-file-name="components/home/Contact.tsx"><span className="editable-text" data-unique-id="cb24e4a5-0d80-4b85-a568-bc332dbd7777" data-file-name="components/home/Contact.tsx">
                      Subject
                    </span></label>
                    <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 rounded-md border border-input bg-background" placeholder="Project Inquiry" data-unique-id="8c9a51ae-8b7f-43eb-a9a2-8b14599cc387" data-file-name="components/home/Contact.tsx" />
                  </div>
                  
                  <div data-unique-id="daadc492-796c-4461-985a-a2817f8dcb15" data-file-name="components/home/Contact.tsx">
                    <label htmlFor="message" className="block text-sm font-medium mb-2" data-unique-id="1e7de96c-8595-4f69-8ff3-a3cb776d63a1" data-file-name="components/home/Contact.tsx"><span className="editable-text" data-unique-id="e4c81b57-aa87-4e25-8857-7c606351c88e" data-file-name="components/home/Contact.tsx">
                      Message
                    </span></label>
                    <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 rounded-md border border-input bg-background resize-none" placeholder="Your message here..." data-unique-id="c44cfca8-295f-4a7e-a0ac-b9b546fc84b3" data-file-name="components/home/Contact.tsx"></textarea>
                  </div>
                  
                  <button type="submit" disabled={formStatus === 'loading'} className={cn("flex items-center justify-center gap-2 w-full bg-chart-1 text-white py-3 px-6 rounded-md transition-all", formStatus === 'loading' ? "opacity-70 cursor-not-allowed" : "hover:bg-chart-1/90")} data-unique-id="02ef848f-5628-4b37-aab1-aa60d96164d0" data-file-name="components/home/Contact.tsx" data-dynamic-text="true">
                    {formStatus === 'loading' ? <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-unique-id="982091ad-8dd4-4f74-a514-62df3dd2c603" data-file-name="components/home/Contact.tsx">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </> : <>
                        <Send size={18} />
                        Send Message
                      </>}
                  </button>
                  
                  {formStatus === 'error' && <p className="text-destructive text-center mt-2" data-unique-id="f34f73be-b652-425a-a547-dc319c9b2975" data-file-name="components/home/Contact.tsx"><span className="editable-text" data-unique-id="3396fc86-1aa5-49a1-b594-16b7781b2a6c" data-file-name="components/home/Contact.tsx">
                      There was an error sending your message. Please try again.
                    </span></p>}
                </form>}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}