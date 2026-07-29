import { CheckCircle2 } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { aboutPoints, schoolInfo } from '../../data/siteData.js';
import monogram from '../../assets/monogram.png';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-white dark:bg-navy-900 overflow-hidden">
      <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — visual */}
        <Reveal as="right">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-brand-blue/10 to-brand-emerald/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50 dark:from-navy-800 dark:to-navy-700 border border-slate-200/60 dark:border-white/5 p-10 sm:p-14 shadow-soft flex flex-col items-center text-center">
              <img src={monogram} alt="School monogram" className="w-28 h-28 object-contain mb-6" />
              <p className="font-display font-bold text-xl text-slate-900 dark:text-white">
                {schoolInfo.name}
              </p>
              <p className="text-brand-emerald text-sm font-medium tracking-wide mt-1">
                {schoolInfo.tagline}
              </p>

              <div className="grid grid-cols-2 gap-6 mt-10 w-full">
                <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
                  <p className="text-2xl font-bold text-brand-blue dark:text-brand-emerald">15+</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Years of Excellence</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
                  <p className="text-2xl font-bold text-brand-blue dark:text-brand-emerald">100%</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Board Results</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right — content */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="About Our School"
            title="Building Character Alongside Academic Excellence"
            subtitle={`${schoolInfo.name} has built an excellent reputation in Rawalpindi for academic excellence, discipline, character building and quality education.`}
          />

          <ul className="space-y-4">
            {aboutPoints.map((point, i) => (
              <Reveal as="left" delay={i * 0.08} key={i}>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={22} className="text-brand-emerald shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">{point}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;