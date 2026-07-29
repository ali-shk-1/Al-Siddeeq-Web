import { Baby, BookOpen, Backpack, GraduationCap } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { academicLevels } from '../../data/siteData.js';

const iconMap = {
  Baby,
  BookOpen,
  Backpack,
  GraduationCap,
};

const cardAccents = [
  'from-brand-blue/10 to-brand-blue/0 text-brand-blue',
  'from-brand-emerald/10 to-brand-emerald/0 text-brand-emerald',
  'from-brand-blue/10 to-brand-blue/0 text-brand-blue',
  'from-brand-emerald/10 to-brand-emerald/0 text-brand-emerald',
];

const Academics = () => {
  return (
    <section id="academics" className="py-24 bg-white dark:bg-navy-900">
      <div className="section-container">
        <SectionHeading
          eyebrow="Academic Programs"
          title="A Clear Path From Montessori to Class 10"
          subtitle="Structured academic levels designed to grow with every student, at every stage."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicLevels.map((level, i) => {
            const Icon = iconMap[level.icon];
            return (
              <Reveal as="up" delay={i * 0.12} key={level.title}>
                <div className="group relative h-full rounded-3xl border border-slate-200/70 dark:border-white/5 bg-white dark:bg-navy-800 p-8 shadow-soft hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${cardAccents[i % cardAccents.length]}`}
                  />

                  <div className="relative">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-slate-100 dark:bg-white/5 ${cardAccents[i % cardAccents.length].split(' ').pop()} group-hover:scale-110 transition-transform duration-500`}>
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                      {level.title}
                    </h3>

                    <ul className="space-y-2">
                      {level.classes.map((cls) => (
                        <li
                          key={cls}
                          className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald shrink-0" />
                          {cls}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Academics;