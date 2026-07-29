import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { testimonials } from '../../data/siteData.js';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => setIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-24 bg-slate-50 dark:bg-navy-800">
      <div className="section-container">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Parents Say About Us"
        />

        <div className="max-w-3xl mx-auto relative">
          <div className="relative min-h-[260px] sm:min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 rounded-3xl bg-white dark:bg-navy-700/60 border border-slate-200/70 dark:border-white/5 shadow-soft p-8 sm:p-10 flex flex-col items-center text-center"
              >
                <Quote className="text-brand-emerald/40 mb-4" size={32} />
                <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg italic leading-relaxed">
                  {testimonials[index].text}
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {testimonials[index].name}
                  </p>
                  <p className="text-sm text-brand-blue dark:text-brand-emerald">
                    {testimonials[index].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full bg-white dark:bg-navy-700 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-6 bg-brand-emerald' : 'w-2 bg-slate-300 dark:bg-white/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-white dark:bg-navy-700 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;