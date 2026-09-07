import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBanner from '@/components/StatsBanner';
import Services from '@/components/Services';
import ROICalculator from '@/components/ROICalculator';
import Portfolio from '@/components/Portfolio';
import WhyChoose from '@/components/WhyChoose';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f7fbff] text-[#102a43] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <StatsBanner />
        <Services />
        <ROICalculator />
        <Portfolio />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
