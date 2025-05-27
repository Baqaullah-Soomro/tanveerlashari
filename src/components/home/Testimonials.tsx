'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
const testimonials = [{
  id: 1,
  name: "Dr. Sarah Ahmed",
  role: "Head Librarian, University of Sindh",
  content: "Tanveer demonstrated exceptional skills in library automation and cataloging during his internship. His contributions to our digital archiving project were invaluable.",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
}, {
  id: 2,
  name: "Prof. Muhammad Saleem",
  role: "Faculty of Pharmacy, University of Sindh",
  content: "Tanveer's implementation of the Koha system greatly improved our library's efficiency. His attention to detail and technical knowledge were impressive.",
  avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
}, {
  id: 3,
  name: "Ms. Fatima Nazir",
  role: "Digital Resources Manager, IBA",
  content: "Working with Tanveer on our information literacy program was a pleasure. His ability to simplify complex concepts for users made our training sessions highly effective.",
  avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
}];
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };
  return <section id="testimonials" className="py-24" data-unique-id="f1fa2041-f680-4d1a-95a1-bab9d34de112" data-file-name="components/home/Testimonials.tsx">
      <div className="container mx-auto px-6" data-unique-id="b5e263be-2369-42db-89f4-ecb140c4bf00" data-file-name="components/home/Testimonials.tsx">
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
      }} className="text-center mb-16" data-unique-id="ee987aff-4cb4-4b24-8413-1ea27069ad87" data-file-name="components/home/Testimonials.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="78f6faac-a355-4f15-be81-5aa9505c0c9e" data-file-name="components/home/Testimonials.tsx"><span className="editable-text" data-unique-id="e8f6c7cd-886a-45bd-a5ba-43a7f91ab868" data-file-name="components/home/Testimonials.tsx">What People Say</span></h2>
          <div className="h-1 w-20 bg-chart-4 mx-auto" data-unique-id="ebc0c206-4ba6-4c83-adb7-ac82cef260ad" data-file-name="components/home/Testimonials.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="0f1df2b7-20d8-4201-bb68-07ecde8130a7" data-file-name="components/home/Testimonials.tsx"><span className="editable-text" data-unique-id="df80e572-d8ec-4f18-89b4-baf9d356d8c2" data-file-name="components/home/Testimonials.tsx">
            Feedback from professionals I've worked with during my academic and internship journey.
          </span></p>
        </motion.div>

        <div className="max-w-4xl mx-auto" data-unique-id="a67b0988-d67b-4352-92be-c7d327c0c427" data-file-name="components/home/Testimonials.tsx">
          <div className="relative" data-unique-id="3a505882-f6c4-4885-bab4-3defe2d9386e" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
            {/* Large quote icon */}
            <div className="absolute -top-12 -left-8 opacity-10" data-unique-id="c72e839b-d011-4335-a0d3-20138143b799" data-file-name="components/home/Testimonials.tsx">
              <Quote size={80} className="text-chart-1" />
            </div>
            
            <div className="bg-card shadow-lg rounded-xl p-8 border border-border/40 min-h-[320px] flex flex-col justify-between" data-unique-id="1d7576f0-a43d-4a17-92bb-f3f992f1d370" data-file-name="components/home/Testimonials.tsx">
              <AnimatePresence mode="wait">
                <motion.div key={testimonials[currentIndex].id} initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -20
              }} transition={{
                duration: 0.5
              }} className="mb-8" data-unique-id="23e57275-a1c9-4bef-a2ec-0ed7b3be1a66" data-file-name="components/home/Testimonials.tsx">
                  <p className="text-lg italic text-foreground leading-relaxed" data-unique-id="862c6b47-4baa-4bc9-8930-151b55030d79" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="0cc82100-dd44-438e-b004-f4b43f455aef" data-file-name="components/home/Testimonials.tsx">
                    "</span>{testimonials[currentIndex].content}<span className="editable-text" data-unique-id="19f41d74-91d1-4896-b024-9c1f6cb129ad" data-file-name="components/home/Testimonials.tsx">"
                  </span></p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between" data-unique-id="d329edd9-2fe8-4d29-8fbf-51256aa1c227" data-file-name="components/home/Testimonials.tsx">
                <div className="flex items-center" data-unique-id="25abd34b-2972-425d-98dd-9077476ea56a" data-file-name="components/home/Testimonials.tsx">
                  <div className="mr-4" data-unique-id="21cfd527-b823-44f7-b474-47b7494133a8" data-file-name="components/home/Testimonials.tsx">
                    <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-12 h-12 rounded-full object-cover border-2 border-chart-1" data-unique-id="2fb56e48-3540-4566-847a-25510f2fa6f9" data-file-name="components/home/Testimonials.tsx" />
                  </div>
                  <div data-unique-id="2148cbeb-903a-4555-b1f4-45bf5101ca7b" data-file-name="components/home/Testimonials.tsx">
                    <h4 className="font-bold text-foreground" data-unique-id="dff78a59-1406-4f82-b05b-2f359a0a137f" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-unique-id="7708fe16-d6f2-4ddc-b3c6-e5b4e5a22dbc" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-2" data-unique-id="d3f83dd7-df88-40e3-b6c9-757938fe82e8" data-file-name="components/home/Testimonials.tsx">
                  <button onClick={prevTestimonial} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Previous testimonial" data-unique-id="a698367e-ec80-4c19-9405-0a0f9ff47de6" data-file-name="components/home/Testimonials.tsx">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={nextTestimonial} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Next testimonial" data-unique-id="9d90ca1a-0245-4fdb-8ffd-29785dfa50dd" data-file-name="components/home/Testimonials.tsx">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div className="flex justify-center mt-6" data-unique-id="57811408-6331-4c34-a5ce-92b5f32c0199" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
                {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${index === currentIndex ? 'bg-chart-1 w-6' : 'bg-muted'}`} aria-label={`Go to testimonial ${index + 1}`} data-unique-id="37f3c4e8-7611-4e3a-9975-799078cae2c8" data-file-name="components/home/Testimonials.tsx" />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}