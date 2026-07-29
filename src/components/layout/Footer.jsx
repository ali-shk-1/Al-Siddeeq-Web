import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { navLinks, schoolInfo, branches } from '../../data/siteData.js';
import monogram from '../../assets/monogram.png';

const Footer = () => {
  const year = new Date().getFullYear();
  const socialIcons = [FaFacebookF, FaInstagram, FaYoutube, Mail];
  
  return (
    <footer className="bg-navy-900 text-slate-300 pt-16 pb-8">
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={monogram} alt={`${schoolInfo.name} monogram`} className="w-12 h-12 object-contain" />
            <div>
              <p className="font-display font-bold text-white">{schoolInfo.name}</p>
              <p className="text-xs text-brand-emerald tracking-wide">{schoolInfo.tagline}</p>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            {schoolInfo.subheading} — nurturing knowledge, character and confidence from Montessori to Class 10.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-brand-emerald transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-brand-emerald shrink-0" />
              <span>{branches.boys.label}: {branches.boys.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-brand-emerald shrink-0" />
              <span>{branches.girls.label}: {branches.girls.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-brand-emerald shrink-0" />
              <span>{branches.boys.phone} / {branches.girls.phone}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {socialIcons.map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-brand-emerald hover:text-navy-900 transition-colors duration-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>© {year} {schoolInfo.name}. All rights reserved.</p>
        <p>Affiliated with {schoolInfo.board}</p>
      </div>
    </footer>
  );
};

export default Footer;