import { MapPin, Phone } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { branches, schoolInfo } from '../../data/siteData.js';

const BranchCard = ({ branch, delay }) => {
  const mapSrc = branch.lat ? `https://maps.google.com/maps?q=${branch.lat},${branch.lng}&z=16&output=embed` : `https://maps.google.com/maps?q=${encodeURIComponent(branch.address)}&z=15&output=embed`;

  return (
    <Reveal as="up" delay={delay}>
      <div className="rounded-3xl overflow-hidden bg-white dark:bg-navy-700/60 border border-slate-200/70 dark:border-white/5 shadow-soft">
        <div className="h-56 w-full">
          <iframe title={`${branch.label} Location`} src={mapSrc} width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">{branch.label}</h3>
          <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2">
            <MapPin size={16} className="mt-0.5 text-brand-emerald shrink-0" />
            <span>{branch.address}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Phone size={16} className="text-brand-emerald shrink-0" />
            <a href={`tel:${branch.phone}`} className="hover:text-brand-blue dark:hover:text-brand-emerald">{branch.phone}</a>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-navy-800">
      <div className="section-container">
        <SectionHeading eyebrow="Get In Touch" title="Visit or Contact Our Branches" subtitle={`Affiliated with ${schoolInfo.board}`} />

        <div className="grid lg:grid-cols-2 gap-8">
          <BranchCard branch={branches.boys} delay={0} />
          <BranchCard branch={branches.girls} delay={0.15} />
        </div>
      </div>
    </section>
  );
};

export default Contact;