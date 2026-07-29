import Reveal from '../ui/Reveal.jsx';
import Counter from '../ui/Counter.jsx';
import { achievements } from '../../data/siteData.js';

const Achievements = () => {
  return (
    <section
      id="results"
      className="relative py-20 bg-gradient-to-br from-brand-blue to-brand-blue-dark dark:from-navy-800 dark:to-navy-900 overflow-hidden"
    >
      {/* decorative pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="white" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <div className="section-container relative grid grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((item, i) => (
          <Reveal as="up" delay={i * 0.1} key={i}>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                {item.value !== null ? (
                  <Counter value={item.value} suffix={item.suffix} />
                ) : (
                  item.display
                )}
              </p>
              <p className="mt-2 text-sm sm:text-base text-blue-100 dark:text-slate-400 font-medium">
                {item.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Achievements;