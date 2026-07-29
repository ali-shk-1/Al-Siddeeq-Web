import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, schoolInfo } from '../../data/siteData.js';
import ThemeToggle from '../ui/ThemeToggle.jsx';
import monogram from '../../assets/monogram.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2 glass shadow-soft' : 'py-4 bg-white/40 dark:bg-navy-900/40 backdrop-blur-sm'}`}>
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-blue to-brand-emerald" style={{ width: `${scrollProgress}%` }} />

      <nav className="section-container flex items-center justify-between">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
          <img src={monogram} alt={`${schoolInfo.name} monogram`} className={`transition-all duration-500 ${scrolled ? 'w-10 h-10' : 'w-12 h-12'} object-contain`} width="48" height="48" />
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base">Al Siddeeq</span>
            <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 tracking-wide">Model High School</span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-emerald transition-colors relative group">
                <span>{link.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-emerald group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="px-5 py-2.5 rounded-full bg-brand-blue text-white text-sm font-semibold shadow-glow hover:bg-brand-blue-dark hover:scale-105 active:scale-95 transition-all duration-300">
            <span>Admissions</span>
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle />
          <button aria-label="Toggle menu" onClick={() => setMobileOpen((prev) => !prev)} className="p-2 rounded-lg text-slate-700 dark:text-slate-200">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="lg:hidden glass overflow-hidden">
            <ul className="section-container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="block py-2.5 text-slate-700 dark:text-slate-300 font-medium border-b border-slate-100 dark:border-white/5">
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="block text-center px-5 py-2.5 rounded-full bg-brand-blue text-white text-sm font-semibold">
                  <span>Admissions</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;