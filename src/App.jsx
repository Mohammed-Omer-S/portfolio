import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Footer from './sections/Footer.jsx';
import SectionFallback from './components/SectionFallback.jsx';

// Below-the-fold sections are code-split — only Hero ships in the main bundle.
const Experience = lazy(() => import('./sections/Experience.jsx'));
const TechMatrix = lazy(() => import('./sections/TechMatrix.jsx'));
const Projects = lazy(() => import('./sections/Projects.jsx'));
const ProfessionalProof = lazy(() => import('./sections/ProfessionalProof.jsx'));
const Contact = lazy(() => import('./sections/Contact.jsx'));

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TechMatrix />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ProfessionalProof />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}