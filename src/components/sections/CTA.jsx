import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';

const CTA = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-brand-blue via-brand-blue-dark to-brand-emerald bg-300% animate-gradient-x">
      <div className="absolute inset-0 bg-navy-900/10" />

      <div className="section-container relative flex flex-col items-center text-center">
        <Reveal as="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Admissions Open
          </h2>
        </Reveal>
        <Reveal as="up" delay={0.1}>
          <p className="mt-4 text-blue-50 max-w-xl text-base sm:text-lg">
            Give your child the foundation for a bright future. Enroll today and become part of the
            Al Siddeeq family.
          </p>
        </Reveal>
        <Reveal as="up" delay={0.2}>
          
            <a href="#contact" onClick={scrollToContact} className="group mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand-blue font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300">
              Apply Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

        </Reveal>
      </div>
    </section>
  );
};

export default CTA;