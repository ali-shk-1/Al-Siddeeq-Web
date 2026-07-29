import SEO from './seo/SEO.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import PrincipalMessage from './components/sections/PrincipalMessage.jsx';
import Academics from './components/sections/Academics.jsx';
import WhyChooseUs from './components/sections/WhyChooseUs.jsx';
import Achievements from './components/sections/Achievements.jsx';
import Gallery from './components/sections/Gallery.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import CTA from './components/sections/CTA.jsx';
import Contact from './components/sections/Contact.jsx';

function App() {
  return (
    <>
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <About />
        <PrincipalMessage />
        <Academics />
        <WhyChooseUs />
        <Achievements />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;