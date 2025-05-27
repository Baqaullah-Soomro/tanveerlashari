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
  return <section id="testimonials" className="py-24" data-unique-id="33f10794-ba61-46d6-838f-12604afe46ca" data-file-name="components/home/Testimonials.tsx">
      <div className="container mx-auto px-6" data-unique-id="978746fc-942c-4ee0-8dc6-8954ea82875c" data-file-name="components/home/Testimonials.tsx">
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
      }} className="text-center mb-16" data-unique-id="8d2ad846-4d5a-4813-8a37-d27247250a36" data-file-name="components/home/Testimonials.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="151099fe-8e3f-40b4-b7d1-1dc84d0584b2" data-file-name="components/home/Testimonials.tsx"><span className="editable-text" data-unique-id="570246fa-2425-4c37-851a-2682537e37f9" data-file-name="components/home/Testimonials.tsx">What People Say</span></h2>
          <div className="h-1 w-20 bg-chart-4 mx-auto" data-unique-id="9be040c0-2773-456a-b602-d3badf52d9cb" data-file-name="components/home/Testimonials.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="dfbd78a2-321d-4bc4-bf2e-735fc389f1da" data-file-name="components/home/Testimonials.tsx"><span className="editable-text" data-unique-id="937a8fbc-ba33-4df7-8dd4-1c39b409cdd3" data-file-name="components/home/Testimonials.tsx">
            Feedback from professionals I've worked with during my academic and internship journey.
          </span></p>
        </motion.div>

        <div className="max-w-4xl mx-auto" data-unique-id="49eb61f7-10d4-46d8-8284-83a2d74e5d99" data-file-name="components/home/Testimonials.tsx">
          <div className="relative" data-unique-id="c6734de0-08ce-4f4f-8609-534997e0e137" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
            {/* Large quote icon */}
            <div className="absolute -top-12 -left-8 opacity-10" data-unique-id="eb93f562-2e8d-447a-85b1-d49d44f26f3e" data-file-name="components/home/Testimonials.tsx">
              <Quote size={80} className="text-chart-1" />
            </div>
            
            <div className="bg-card shadow-lg rounded-xl p-8 border border-border/40 min-h-[320px] flex flex-col justify-between" data-unique-id="4564ab4f-db89-45b6-aebb-cdffc3c375b7" data-file-name="components/home/Testimonials.tsx">
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
              }} className="mb-8" data-unique-id="a878e9ac-61a6-4ba1-9ff7-7340bfaf9624" data-file-name="components/home/Testimonials.tsx">
                  <p className="text-lg italic text-foreground leading-relaxed" data-unique-id="a2a927f2-d07b-4d05-ae6b-ffda6ddddc2c" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="d3d0be84-a2ec-4b6e-a330-68196655d832" data-file-name="components/home/Testimonials.tsx">
                    "</span>{testimonials[currentIndex].content}<span className="editable-text" data-unique-id="801b2266-a475-477c-9b00-4c85a6f27b4d" data-file-name="components/home/Testimonials.tsx">"
                  </span></p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between" data-unique-id="ff99d1ba-5d1c-4e38-b3d7-69dc2e7df670" data-file-name="components/home/Testimonials.tsx">
                <div className="flex items-center" data-unique-id="1a64ad27-6d79-4e02-a569-8cbb025cb471" data-file-name="components/home/Testimonials.tsx">
                  <div className="mr-4" data-unique-id="26926804-fda1-43c4-9c02-af96b1ef30fb" data-file-name="components/home/Testimonials.tsx">
                    <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-12 h-12 rounded-full object-cover border-2 border-chart-1" data-unique-id="c2b5cdc0-02fc-4a95-a98e-d405d76126e1" data-file-name="components/home/Testimonials.tsx" />
                  </div>
                  <div data-unique-id="d81331b7-9f3f-45eb-8267-ad3d4fa89269" data-file-name="components/home/Testimonials.tsx">
                    <h4 className="font-bold text-foreground" data-unique-id="39c46bcb-5fa5-416c-a994-6779a9469a07" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-unique-id="188e256c-66be-4d13-80ec-8d7c3900b7df" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-2" data-unique-id="707b4cd9-6b26-46db-b1bf-2684e6ab43fd" data-file-name="components/home/Testimonials.tsx">
                  <button onClick={prevTestimonial} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Previous testimonial" data-unique-id="0432629c-8810-4f1e-a6b4-73c17e2db252" data-file-name="components/home/Testimonials.tsx">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={nextTestimonial} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Next testimonial" data-unique-id="556a261b-d578-4b5e-ab2e-3437f90cb7b4" data-file-name="components/home/Testimonials.tsx">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div className="flex justify-center mt-6" data-unique-id="429ee72c-6e1f-4b74-87ac-e5797d51719c" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
                {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${index === currentIndex ? 'bg-chart-1 w-6' : 'bg-muted'}`} aria-label={`Go to testimonial ${index + 1}`} data-unique-id="bc40dd6f-7501-428a-8d72-37a9c6bc09be" data-file-name="components/home/Testimonials.tsx" />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}