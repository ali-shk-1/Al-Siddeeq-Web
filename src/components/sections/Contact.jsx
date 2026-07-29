import { useState } from 'react';
import { MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { branches, schoolInfo } from '../../data/siteData.js';

const BranchCard = ({ branch, delay }) => {
  const mapSrc = branch.lat
    ? `https://maps.google.com/maps?q=${branch.lat},${branch.lng}&z=16&output=embed`
    : `https://maps.google.com/maps?q=${encodeURIComponent(branch.address)}&z=15&output=embed`;

  return (
    <Reveal as="up" delay={delay}>
      <div className="rounded-3xl overflow-hidden bg-white dark:bg-navy-700/60 border border-slate-200/70 dark:border-white/5 shadow-soft">
        <div className="h-56 w-full">
          <iframe
            title={`${branch.label} Location`}
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">{branch.label}</h3>
          <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2">
            <MapPin size={16} className="mt-0.5 text-brand-emerald shrink-0" />
            <span>{branch.address}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Phone size={16} className="text-brand-emerald shrink-0" />
            <a href={`tel:${branch.phone}`} className="hover:text-brand-blue dark:hover:text-brand-emerald">
              {branch.phone}
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only demo — wire this up to a backend/email service (e.g. Formspree, EmailJS) later.
    setSubmitted(true);
    setForm({ name: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-navy-800">
      <div className="section-container">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Visit or Contact Our Branches"
          subtitle={`Affiliated with ${schoolInfo.board}`}
        />

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <BranchCard branch={branches.boys} delay={0} />
          <BranchCard branch={branches.girls} delay={0.15} />
        </div>

        {/* Contact form */}
        <Reveal as="up">
          <div className="max-w-2xl mx-auto rounded-3xl bg-white dark:bg-navy-700/60 border border-slate-200/70 dark:border-white/5 shadow-soft p-8 sm:p-10">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center py-8 text-center">
                <CheckCircle size={48} className="text-brand-emerald mb-3" />
                <p className="text-slate-700 dark:text-slate-300 font-medium">
                  Thank you! We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-navy-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-brand-emerald transition-shadow"
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-navy-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-brand-emerald transition-shadow"
                  />
                </div>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-navy-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-brand-emerald transition-shadow resize-none"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-blue text-white font-semibold shadow-glow hover:bg-brand-blue-dark hover:scale-[1.02] active:scale-95 transition-all duration-300"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;