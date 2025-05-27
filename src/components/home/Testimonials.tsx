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
  return <section id="testimonials" className="py-24" data-unique-id="881476a1-6a2a-4d62-b4bc-d52350ca8ea4" data-file-name="components/home/Testimonials.tsx">
      <div className="container mx-auto px-6" data-unique-id="afa72468-dfdc-41aa-8459-7ebfaadfc20c" data-file-name="components/home/Testimonials.tsx">
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
      }} className="text-center mb-16" data-unique-id="6ab1e932-c44a-49cf-b4bc-fd2da5808768" data-file-name="components/home/Testimonials.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="135f0a04-a447-4b08-a9e2-68b26384d389" data-file-name="components/home/Testimonials.tsx"><span className="editable-text" data-unique-id="ffc107b3-0063-48db-a057-7f07ce34d5c2" data-file-name="components/home/Testimonials.tsx">What People Say</span></h2>
          <div className="h-1 w-20 bg-chart-4 mx-auto" data-unique-id="cfa02c98-5377-4ff6-89f7-8592a4733263" data-file-name="components/home/Testimonials.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="0aacdb5f-3662-466a-b575-020fde62bcb9" data-file-name="components/home/Testimonials.tsx"><span className="editable-text" data-unique-id="dca4d714-da81-4f6d-9b77-ca0661ea4dd5" data-file-name="components/home/Testimonials.tsx">
            Feedback from professionals I've worked with during my academic and internship journey.
          </span></p>
        </motion.div>

        <div className="max-w-4xl mx-auto" data-unique-id="e5ff3275-2f9b-402a-841f-3472d12c52b6" data-file-name="components/home/Testimonials.tsx">
          <div className="relative" data-unique-id="8d80ba2d-5682-4080-9656-8dfaa075b8a1" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
            {/* Large quote icon */}
            <div className="absolute -top-12 -left-8 opacity-10" data-unique-id="79970170-9c78-49ed-9e74-83c8e0bba383" data-file-name="components/home/Testimonials.tsx">
              <Quote size={80} className="text-chart-1" />
            </div>
            
            <div className="bg-card shadow-lg rounded-xl p-8 border border-border/40 min-h-[320px] flex flex-col justify-between" data-unique-id="da596ec7-c754-4a5a-9bdb-c83b0ae527b5" data-file-name="components/home/Testimonials.tsx">
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
              }} className="mb-8" data-unique-id="c7c7d1d6-0ac2-4e20-a8b7-840771c8cd5a" data-file-name="components/home/Testimonials.tsx">
                  <p className="text-lg italic text-foreground leading-relaxed" data-unique-id="37aa3d00-85b4-4228-a508-55097f2399eb" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="ae726ff5-2078-45b0-816b-1ea28282ae13" data-file-name="components/home/Testimonials.tsx">
                    "</span>{testimonials[currentIndex].content}<span className="editable-text" data-unique-id="c776b6bd-307b-4238-84bd-b7a534ea3c0f" data-file-name="components/home/Testimonials.tsx">"
                  </span></p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between" data-unique-id="3ce76225-6e3d-479a-83c5-85a0f4501c34" data-file-name="components/home/Testimonials.tsx">
                <div className="flex items-center" data-unique-id="1911ce53-ea53-4433-9216-87aef49ad83d" data-file-name="components/home/Testimonials.tsx">
                  <div className="mr-4" data-unique-id="4cdc539d-1cf5-4a2f-a43b-6ceb67beda99" data-file-name="components/home/Testimonials.tsx">
                    <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-12 h-12 rounded-full object-cover border-2 border-chart-1" data-unique-id="4baf1e4d-cc00-4223-9269-4681de791fd4" data-file-name="components/home/Testimonials.tsx" />
                  </div>
                  <div data-unique-id="5017bceb-b0e4-47bf-a9ea-b59ba8909b98" data-file-name="components/home/Testimonials.tsx">
                    <h4 className="font-bold text-foreground" data-unique-id="eb3da448-d309-47a2-9e41-703029897b66" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-unique-id="48a3d0ea-3739-4834-95d5-a5080e4cdb0d" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-2" data-unique-id="dbf5fef1-a550-4afd-bdf9-4fe650b5e382" data-file-name="components/home/Testimonials.tsx">
                  <button onClick={prevTestimonial} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Previous testimonial" data-unique-id="ebc07886-b45c-4c20-876c-e7ccac0efdd4" data-file-name="components/home/Testimonials.tsx">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={nextTestimonial} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Next testimonial" data-unique-id="7de23c6d-c3fb-47c3-935d-32ec7af1ae58" data-file-name="components/home/Testimonials.tsx">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div className="flex justify-center mt-6" data-unique-id="2ebf4d0e-edde-4cb1-a469-818410a931d6" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
                {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${index === currentIndex ? 'bg-chart-1 w-6' : 'bg-muted'}`} aria-label={`Go to testimonial ${index + 1}`} data-unique-id="8c48260d-2177-4741-9509-224e6422032b" data-file-name="components/home/Testimonials.tsx" />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}