import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Counter from '../ui/Counter.jsx';
import { schoolInfo, heroCounters } from '../../data/siteData.js';
import monogram from '../../assets/monogram.png';

const Hero = () => {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-emerald-50/30 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-blue/10 dark:bg-brand-blue/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-brand-emerald/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-brand-blue/5 dark:bg-brand-emerald/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal as="fade">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 dark:bg-brand-emerald/10 text-brand-blue dark:text-brand-emerald text-xs font-semibold tracking-wide mb-6">
              <Sparkles size={14} /> {schoolInfo.tagline}
            </span>
          </Reveal>

          <Reveal as="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-slate-900 dark:text-white">
              {schoolInfo.name}
            </h1>
          </Reveal>

          <Reveal as="up" delay={0.2}>
            <p className="mt-5 text-lg sm:text-xl font-medium gradient-text">
              {schoolInfo.subheading}
            </p>
          </Reveal>

          <Reveal as="up" delay={0.3}>
            <p className="mt-5 text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
              We are committed to delivering quality education rooted in discipline, character and modern learning, guiding every student from Montessori through Class 10 with care and excellence.
            </p>
          </Reveal>

          <Reveal as="up" delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-blue text-white font-semibold shadow-glow hover:bg-brand-blue-dark hover:scale-105 active:scale-95 transition-all duration-300">
                <span>Contact Us</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" onClick={(e) => scrollTo(e, '#about')} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-100 dark:hover:bg-white/5 hover:scale-105 active:scale-95 transition-all duration-300">
                <span>Explore School</span>
              </a>
            </div>
          </Reveal>

          <Reveal as="up" delay={0.5}>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 max-w-2xl">
              {heroCounters.map((item, i) => (
                <div key={i} className="min-w-0">
                  <p className="text-2xl sm:text-3xl font-bold text-brand-blue dark:text-brand-emerald leading-tight">
                    {item.value !== null ? <Counter value={item.value} suffix={item.suffix} /> : item.display}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 whitespace-nowrap">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative hidden lg:flex items-center justify-center h-[480px]">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute w-80 h-80 rounded-full border-2 border-dashed border-brand-blue/20 dark:border-brand-emerald/20" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 55, repeat: Infinity, ease: 'linear' }} className="absolute w-[26rem] h-[26rem] rounded-full border border-brand-emerald/15" />

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative z-10 w-64 h-64 rounded-full bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-navy-700 dark:to-navy-800 shadow-soft shadow-glow flex items-center justify-center animate-float p-10 overflow-hidden">
            <img src={monogram} alt="School monogram" className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal dark:opacity-90" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="absolute top-6 left-0 glass rounded-2xl px-4 py-3 shadow-soft animate-float">
            <p className="text-xs text-slate-500 dark:text-slate-400">Board Results</p>
            <p className="text-lg font-bold text-brand-emerald">100%</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="absolute bottom-10 right-0 glass rounded-2xl px-4 py-3 shadow-soft animate-float-slow">
            <p className="text-xs text-slate-500 dark:text-slate-400">Experience</p>
            <p className="text-lg font-bold text-brand-blue dark:text-brand-emerald">15+ Years</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;