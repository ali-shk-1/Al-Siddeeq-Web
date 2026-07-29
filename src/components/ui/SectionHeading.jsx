import Reveal from './Reveal.jsx';

const SectionHeading = ({ eyebrow, title, subtitle, align = 'center' }) => {
  const alignment = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignment} max-w-2xl mb-14`}>
      {eyebrow && (
        <Reveal as="fade">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-widest uppercase text-brand-blue dark:text-brand-emerald mb-3">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal as="up" delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal as="up" delay={0.2}>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base md:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;