import Navigation from '@/components/Navigation';
import Hero       from '@/components/Hero';
import About      from '@/components/About';
import Stats      from '@/components/Stats';
import Process    from '@/components/Process';
import Portfolio  from '@/components/Portfolio';
import Awards     from '@/components/Awards';
import Brands     from '@/components/Brands';
import Services   from '@/components/Services';
import Contact    from '@/components/Contact';
import Footer     from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Stats />
      <Process />
      <Portfolio />
      <Awards />
      <Brands />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
