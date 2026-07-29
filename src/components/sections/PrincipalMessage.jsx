import { Quote } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { principal } from '../../data/siteData.js';
import principalPhoto from '../../assets/principal.png';

const PrincipalMessage = () => {
  return (
    <section
      id="principal"
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white dark:from-navy-800 dark:to-navy-900 overflow-hidden"
    >
      <div className="absolute top-1/4 -left-24 w-72 h-72 bg-brand-blue/5 dark:bg-brand-emerald/5 rounded-full blur-3xl" />

      <div className="section-container">
        <SectionHeading
          eyebrow="A Message From Our Principal"
          title="Guiding Every Student Toward Excellence"
        />

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left — message (3 cols) */}
          <Reveal as="right" className="lg:col-span-3 order-2 lg:order-1">
            <div className="relative">
              <Quote className="absolute -top-6 -left-4 text-brand-blue/10 dark:text-brand-emerald/10" size={90} />
              <p className="relative text-slate-700 dark:text-slate-300 text-lg sm:text-xl leading-relaxed italic pl-2">
                {principal.message}
              </p>

              {/* Signature block */}
              <div className="mt-10 flex items-center gap-4">
                <div className="relative">
                  <p
                    className="text-3xl text-brand-blue dark:text-brand-emerald"
                    style={{ fontFamily: "'Brush Script MT', cursive" }}
                  >
                    {principal.name}
                  </p>
                  <div className="h-[2px] w-full bg-gradient-to-r from-brand-blue via-brand-emerald to-transparent mt-1" />
                </div>
              </div>
              <div className="mt-2">
                <p className="font-semibold text-slate-900 dark:text-white">{principal.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{principal.title}, {`Al Siddeeq Model High School`}</p>
              </div>
            </div>
          </Reveal>

          {/* Right — photo (2 cols) */}
          <Reveal as="left" className="lg:col-span-2 order-1 lg:order-2">
            <div className="relative flex justify-center">
              {/* glow ring behind photo */}
              <div className="absolute w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-br from-brand-blue/30 to-brand-emerald/30 rounded-full blur-2xl" />

              <div className="relative animate-float">
                <div className="relative w-64 sm:w-72 rounded-[2rem] p-1.5 bg-gradient-to-br from-brand-blue via-brand-emerald to-brand-blue bg-300% animate-gradient-x shadow-glow">
                  <div className="bg-white dark:bg-navy-800 rounded-[1.7rem] p-2 overflow-hidden">
                    <img
                      src={principalPhoto}
                      alt={`${principal.name}, Principal`}
                      className="w-full h-auto rounded-[1.4rem] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2.5 shadow-soft">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Principal</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{principal.name}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;