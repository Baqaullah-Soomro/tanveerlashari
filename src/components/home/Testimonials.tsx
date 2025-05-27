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
  return <section id="testimonials" className="py-24" data-unique-id="83ca395e-80ee-40ab-b9a8-b4a3f21f44f0" data-file-name="components/home/Testimonials.tsx">
      <div className="container mx-auto px-6" data-unique-id="bdce6277-88ff-482f-99a7-93bcc980a805" data-file-name="components/home/Testimonials.tsx">
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
      }} className="text-center mb-16" data-unique-id="e1187ffb-ea1b-48e8-b047-36aacbd3fc5d" data-file-name="components/home/Testimonials.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="d9f3d6c0-10e6-44e1-a957-108d8b1621f9" data-file-name="components/home/Testimonials.tsx"><span className="editable-text" data-unique-id="33bc9f8f-761e-455a-b2f1-5d452e167a47" data-file-name="components/home/Testimonials.tsx">What People Say</span></h2>
          <div className="h-1 w-20 bg-chart-4 mx-auto" data-unique-id="6b84290a-3647-402a-81cf-7f606b6a8547" data-file-name="components/home/Testimonials.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="d69f6c94-693f-41c2-af63-df545b2e1f96" data-file-name="components/home/Testimonials.tsx"><span className="editable-text" data-unique-id="bb66da26-2800-4754-bbb3-8eb81a52cb27" data-file-name="components/home/Testimonials.tsx">
            Feedback from professionals I've worked with during my academic and internship journey.
          </span></p>
        </motion.div>

        <div className="max-w-4xl mx-auto" data-unique-id="5139904e-fe14-46e2-ac34-a3f7b0b95955" data-file-name="components/home/Testimonials.tsx">
          <div className="relative" data-unique-id="4491ddf6-6a48-4487-978c-98edc8baf80b" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
            {/* Large quote icon */}
            <div className="absolute -top-12 -left-8 opacity-10" data-unique-id="1a407c9f-68c0-41a0-aed9-6913f9a2b181" data-file-name="components/home/Testimonials.tsx">
              <Quote size={80} className="text-chart-1" />
            </div>
            
            <div className="bg-card shadow-lg rounded-xl p-8 border border-border/40 min-h-[320px] flex flex-col justify-between" data-unique-id="905e1951-8cb8-49be-a438-0037b6cab61e" data-file-name="components/home/Testimonials.tsx">
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
              }} className="mb-8" data-unique-id="faaff06b-bd8b-4468-b67e-df6cdb6a5825" data-file-name="components/home/Testimonials.tsx">
                  <p className="text-lg italic text-foreground leading-relaxed" data-unique-id="d31bc1fd-421d-4454-93c9-ba1f4b1bddef" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="2191e3ab-6670-409f-a7ce-0501cb9abbe1" data-file-name="components/home/Testimonials.tsx">
                    "</span>{testimonials[currentIndex].content}<span className="editable-text" data-unique-id="fc007eb2-8599-48cf-9df3-bfb431570f3b" data-file-name="components/home/Testimonials.tsx">"
                  </span></p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between" data-unique-id="d7260bf8-453e-405a-9677-9f2646eb0ede" data-file-name="components/home/Testimonials.tsx">
                <div className="flex items-center" data-unique-id="b4e9c92d-9b8c-47f1-a522-d2e6e8121d51" data-file-name="components/home/Testimonials.tsx">
                  <div className="mr-4" data-unique-id="40e97b7e-a441-4409-811e-ca2334dfd34c" data-file-name="components/home/Testimonials.tsx">
                    <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-12 h-12 rounded-full object-cover border-2 border-chart-1" data-unique-id="83fa822c-c94c-4931-8bfd-59279203e21c" data-file-name="components/home/Testimonials.tsx" />
                  </div>
                  <div data-unique-id="0dfb5df6-9915-420d-95f4-af910e55be70" data-file-name="components/home/Testimonials.tsx">
                    <h4 className="font-bold text-foreground" data-unique-id="0877ff71-0cec-41a9-91c2-74d1b7895206" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-unique-id="b649c591-418a-4ff4-b0dd-be1d12f1c51b" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-2" data-unique-id="1a6a491a-8e8d-438e-9b28-bff6865958c4" data-file-name="components/home/Testimonials.tsx">
                  <button onClick={prevTestimonial} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Previous testimonial" data-unique-id="0e2c564d-53ee-4576-ac67-8a8a5b7519a1" data-file-name="components/home/Testimonials.tsx">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={nextTestimonial} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Next testimonial" data-unique-id="e7a72e9c-aea7-4de5-992f-c624be006444" data-file-name="components/home/Testimonials.tsx">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div className="flex justify-center mt-6" data-unique-id="7c7913ac-ff45-46c8-b28f-ff11d94c5b19" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
                {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${index === currentIndex ? 'bg-chart-1 w-6' : 'bg-muted'}`} aria-label={`Go to testimonial ${index + 1}`} data-unique-id="2555af04-6efb-403a-a191-5c6b6a398166" data-file-name="components/home/Testimonials.tsx" />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}