import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

// Placeholder gallery images — replace src values with real school photos later.
const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80', alt: 'Students in classroom', tall: true },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', alt: 'School library' },
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80', alt: 'Science lab' },
  { src: 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=600&q=80', alt: 'Sports activity', tall: true },
  { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80', alt: 'Graduation day' },
  { src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80', alt: 'Classroom activity' },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-navy-900">
      <div className="section-container">
        <SectionHeading
          eyebrow="Gallery"
          title="Life at Al Siddeeq"
          subtitle="A glimpse into our classrooms, activities and campus life."
        />

        <div className="columns-2 sm:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <Reveal as="zoom" delay={i * 0.08} key={i}>
              <button
                onClick={() => setSelected(img)}
                className={`group relative w-full rounded-2xl overflow-hidden break-inside-avoid block ${
                  img.tall ? 'aspect-[3/4]' : 'aspect-square'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors duration-500 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" size={28} />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-navy-900/90 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <button
              aria-label="Close preview"
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selected.src}
              alt={selected.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;