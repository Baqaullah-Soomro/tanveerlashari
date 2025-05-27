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
  return <section id="testimonials" className="py-24" data-unique-id="78ed6bfe-5142-4d76-8644-d1bbad8c6637" data-file-name="components/home/Testimonials.tsx">
      <div className="container mx-auto px-6" data-unique-id="e0c7f3da-0360-4800-a0f8-849ef1dad3b9" data-file-name="components/home/Testimonials.tsx">
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
      }} className="text-center mb-16" data-unique-id="ee1bf4ec-07c2-488f-9c7c-d20259a04dcd" data-file-name="components/home/Testimonials.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="f2b6a9a2-52ed-4229-b978-2db971621081" data-file-name="components/home/Testimonials.tsx"><span className="editable-text" data-unique-id="51328db0-2e72-471d-ad02-41e71ccc6ce3" data-file-name="components/home/Testimonials.tsx">What People Say</span></h2>
          <div className="h-1 w-20 bg-chart-4 mx-auto" data-unique-id="9e16714b-06f6-4d9a-a462-470eee55c7bb" data-file-name="components/home/Testimonials.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="63429e08-8577-4482-ac9f-230163f08707" data-file-name="components/home/Testimonials.tsx"><span className="editable-text" data-unique-id="9a51008e-8e48-49b2-96d6-1d40f76a6d35" data-file-name="components/home/Testimonials.tsx">
            Feedback from professionals I've worked with during my academic and internship journey.
          </span></p>
        </motion.div>

        <div className="max-w-4xl mx-auto" data-unique-id="77ac44c3-7573-4815-97b5-9e395a92a2be" data-file-name="components/home/Testimonials.tsx">
          <div className="relative" data-unique-id="6215b173-cb6f-404c-a86c-391117966057" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
            {/* Large quote icon */}
            <div className="absolute -top-12 -left-8 opacity-10" data-unique-id="7c5aae8e-9715-4b48-ae38-7c9ce09f72fc" data-file-name="components/home/Testimonials.tsx">
              <Quote size={80} className="text-chart-1" />
            </div>
            
            <div className="bg-card shadow-lg rounded-xl p-8 border border-border/40 min-h-[320px] flex flex-col justify-between" data-unique-id="ede987b4-eff4-4d1f-8741-505b9e75a7f5" data-file-name="components/home/Testimonials.tsx">
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
              }} className="mb-8" data-unique-id="a37e1555-b4c3-404b-aec4-8ffaa9461c35" data-file-name="components/home/Testimonials.tsx">
                  <p className="text-lg italic text-foreground leading-relaxed" data-unique-id="ffe0f737-1c31-4ce1-b70e-9fbd759c40c7" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="fd4b4699-a2e4-4be2-9264-e4491c2f1f63" data-file-name="components/home/Testimonials.tsx">
                    "</span>{testimonials[currentIndex].content}<span className="editable-text" data-unique-id="6676f00d-756b-4f8d-80a1-ad6d16239f25" data-file-name="components/home/Testimonials.tsx">"
                  </span></p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between" data-unique-id="db481cfb-0c24-4d63-88ac-b5b649954653" data-file-name="components/home/Testimonials.tsx">
                <div className="flex items-center" data-unique-id="9fc0c649-c976-4bf0-8915-ccffa83f98ef" data-file-name="components/home/Testimonials.tsx">
                  <div className="mr-4" data-unique-id="77d8e9ca-64c2-43e7-b0fe-6e2d08e79e0e" data-file-name="components/home/Testimonials.tsx">
                    <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-12 h-12 rounded-full object-cover border-2 border-chart-1" data-unique-id="2d46c2f3-ec34-4c44-abc3-3a2bd847c168" data-file-name="components/home/Testimonials.tsx" />
                  </div>
                  <div data-unique-id="340337b3-5b92-455b-856d-6e2e0c560dae" data-file-name="components/home/Testimonials.tsx">
                    <h4 className="font-bold text-foreground" data-unique-id="2e322843-6716-4145-a7c2-2b68526a5d1e" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-unique-id="425ca876-349f-4dcd-863c-e53ca059888b" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-2" data-unique-id="138a198f-7aa3-4963-ac9f-3b9e410bf359" data-file-name="components/home/Testimonials.tsx">
                  <button onClick={prevTestimonial} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Previous testimonial" data-unique-id="58ff69de-1063-408d-b0a5-9811521f7e15" data-file-name="components/home/Testimonials.tsx">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={nextTestimonial} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Next testimonial" data-unique-id="43a732c0-d316-46e1-920e-e15f38a9142c" data-file-name="components/home/Testimonials.tsx">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div className="flex justify-center mt-6" data-unique-id="378d3136-418e-420c-adfa-d18e34fcf7c8" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
                {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${index === currentIndex ? 'bg-chart-1 w-6' : 'bg-muted'}`} aria-label={`Go to testimonial ${index + 1}`} data-unique-id="8eee6fa2-eb0e-49e7-b337-af8e86226e0b" data-file-name="components/home/Testimonials.tsx" />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}