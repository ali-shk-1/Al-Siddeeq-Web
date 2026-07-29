import Reveal from '../ui/Reveal.jsx';

const MissionSection = () => {
  return (
  <section className="relative overflow-hidden bg-fixed bg-center bg-cover flex items-center justify-center h-[75vh]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80')" }}>
      <div className="absolute inset-0 bg-brand-blue-dark/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-transparent to-navy-900/60" />

      <div className="section-container relative text-center max-w-3xl mx-auto">
        <Reveal as="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8">
            Our Mission
          </h2>
        </Reveal>
        <Reveal as="up" delay={0.15}>
          <span className="text-6xl text-white/20 font-serif leading-none">"</span>
        </Reveal>
        <Reveal as="up" delay={0.2}>
          <p className="text-lg sm:text-2xl text-blue-50 leading-relaxed -mt-6">
            To nurture confident, disciplined and knowledgeable individuals rooted in strong values, empowering every student at Al Siddeeq Model High School to lead with integrity and pursue excellence in all walks of life.
          </p>
        </Reveal>
        <Reveal as="up" delay={0.25}>
          <span className="text-6xl text-white/20 font-serif leading-none">"</span>
        </Reveal>
      </div>
    </section>
  );
};

export default MissionSection;