import {
  Award,
  Users,
  TrendingUp,
  Heart,
  ShieldCheck,
  Wallet,
  Lightbulb,
  Smile,
} from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { whyChooseUs } from '../../data/siteData.js';

const iconMap = {
  Award,
  Users,
  TrendingUp,
  Heart,
  ShieldCheck,
  Wallet,
  Lightbulb,
  Smile,
};

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="relative py-24 bg-slate-50 dark:bg-navy-800 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 dark:bg-brand-emerald/5 rounded-full blur-3xl -z-0" />

      <div className="section-container relative">
        <SectionHeading
          eyebrow="Why Families Choose Us"
          title="Everything Your Child Needs to Thrive"
          subtitle="A well-rounded environment built on trust, discipline and genuine care for every student."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal as="zoom" delay={i * 0.08} key={item.title}>
                <div className="group h-full rounded-2xl bg-white dark:bg-navy-700/60 border border-slate-200/70 dark:border-white/5 p-6 flex flex-col items-center text-center shadow-soft hover:shadow-glow-emerald hover:border-brand-emerald/40 transition-all duration-500 hover:-translate-y-1.5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-emerald/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Icon size={24} className="text-brand-blue dark:text-brand-emerald" />
                  </div>
                  <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm sm:text-base">
                    {item.title}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;