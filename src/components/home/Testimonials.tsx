'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
const testimonials = [{
  id: 1,
  name: "Arif Ali Bhatti",
  role: "Incharge Chairman, Department of Libray Information Science and Archive Studies, University of Sindh",
  content: "Tanveer demonstrated exceptional skills in library automation and cataloging during his internship. His contributions to our digital archiving project were invaluable.",
  avatar: "/Arif ali Bhatti.png"
}, {
  id: 2,
  name: "Prof. Ahmed Shah",
  role: "Library Incharge, Faculty of Pharmacy, University of Sindh",
  content: "Tanveer's implementation of the Koha system greatly improved our library's efficiency. His attention to detail and technical knowledge were impressive.",
  avatar: "/Ahmed shah.png"
}, {
  id: 3,
  name: "Prof. Imamuddin Khoso",
  role: "Professor, IBA, University of Sindh",
  content: "Working with Tanveer on our information literacy program was a pleasure. His ability to simplify complex concepts for users made our training sessions highly effective.",
  avatar: "/Imam din.png"
}];
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };
  return <section id="testimonials" className="py-24" data-unique-id="294a6015-aaba-4231-a545-ed4d88780925" data-file-name="components/home/Testimonials.tsx">
      <div className="container mx-auto px-6" data-unique-id="7f1db4b8-be54-4a59-9cff-2b093b93265a" data-file-name="components/home/Testimonials.tsx">
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
      }} className="text-center mb-16" data-unique-id="ace96d6c-c7ba-4b87-a3b7-fc88737c7d17" data-file-name="components/home/Testimonials.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-unique-id="758c7135-b0b1-41f9-a7bd-9605bde497d9" data-file-name="components/home/Testimonials.tsx"><span className="editable-text" data-unique-id="ce7bdffe-ef58-4a11-94cc-1bd386bfc039" data-file-name="components/home/Testimonials.tsx">What People Say</span></h2>
          <div className="h-1 w-20 bg-chart-4 mx-auto" data-unique-id="6edadf8e-9a5d-4986-89a0-2ac951c08861" data-file-name="components/home/Testimonials.tsx"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto" data-unique-id="b3ef1fca-27f5-42dd-b4fe-0ffda16c13b0" data-file-name="components/home/Testimonials.tsx"><span className="editable-text" data-unique-id="3368c749-d0fc-457c-8228-44db1e1c2862" data-file-name="components/home/Testimonials.tsx">
            Feedback from professionals I've worked with during my academic and internship journey.
          </span></p>
        </motion.div>

        <div className="max-w-4xl mx-auto" data-unique-id="40854f32-3543-4d67-b683-c773e8cf3c23" data-file-name="components/home/Testimonials.tsx">
          <div className="relative" data-unique-id="a9dad16d-bd32-42de-8b6f-e73e2cf5557f" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
            {/* Large quote icon */}
            <div className="absolute -top-12 -left-8 opacity-10" data-unique-id="053fc4ff-ccd6-4554-800f-c3ab51cffa1b" data-file-name="components/home/Testimonials.tsx">
              <Quote size={80} className="text-chart-1" />
            </div>
            
            <div className="bg-card shadow-lg rounded-xl p-8 border border-border/40 min-h-[320px] flex flex-col justify-between" data-unique-id="cbb9f07a-1bb1-49e3-9ab9-e9b624186848" data-file-name="components/home/Testimonials.tsx">
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
              }} className="mb-8" data-unique-id="fecabec6-e7a7-4570-9e7e-06fa9b167a82" data-file-name="components/home/Testimonials.tsx">
                  <p className="text-lg italic text-foreground leading-relaxed" data-unique-id="73912c08-1e21-4325-a95c-1473c06a6ab5" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="e549bee4-20a0-4966-96e2-8864a8b62803" data-file-name="components/home/Testimonials.tsx">
                    "</span>{testimonials[currentIndex].content}<span className="editable-text" data-unique-id="661eb597-0688-4a4f-9863-dcddb60bab38" data-file-name="components/home/Testimonials.tsx">"
                  </span></p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between" data-unique-id="27775488-16c3-4609-88f0-e6e4ee34e9f8" data-file-name="components/home/Testimonials.tsx">
                <div className="flex items-center" data-unique-id="a822610f-f7bd-4318-8a2b-598a35693511" data-file-name="components/home/Testimonials.tsx">
                  <div className="mr-4" data-unique-id="7bca263f-b70d-447e-9c87-92b1c8bb77f2" data-file-name="components/home/Testimonials.tsx">
                    <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-12 h-12 rounded-full object-cover border-2 border-chart-1" data-unique-id="2d47abb3-8567-486e-b7ef-07b90ff11cfd" data-file-name="components/home/Testimonials.tsx" />
                  </div>
                  <div data-unique-id="66962232-cf13-43c6-a7c5-52a54dd24546" data-file-name="components/home/Testimonials.tsx">
                    <h4 className="font-bold text-foreground" data-unique-id="a176ffe9-526e-44cb-b16d-4a73b3fa14e5" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-unique-id="95b6e316-d4ef-46f0-ba1a-a91b4e76092b" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-2" data-unique-id="3297348b-2e7a-41ff-8042-a5d8a9b64b65" data-file-name="components/home/Testimonials.tsx">
                  <button onClick={prevTestimonial} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Previous testimonial" data-unique-id="fbc0be00-e4a1-4783-8050-ff4b915e32fd" data-file-name="components/home/Testimonials.tsx">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={nextTestimonial} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Next testimonial" data-unique-id="4e1560eb-ddb1-4de5-b4ae-2aafb9e9fa33" data-file-name="components/home/Testimonials.tsx">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div className="flex justify-center mt-6" data-unique-id="bb298daf-8b7e-4e73-a732-715a0c14daac" data-file-name="components/home/Testimonials.tsx" data-dynamic-text="true">
                {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${index === currentIndex ? 'bg-chart-1 w-6' : 'bg-muted'}`} aria-label={`Go to testimonial ${index + 1}`} data-unique-id="6d697ab7-9c48-46e6-8772-0e4d2cb6f96a" data-file-name="components/home/Testimonials.tsx" />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}