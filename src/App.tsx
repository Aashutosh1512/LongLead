import { MotionConfig } from 'motion/react';
import { LeadLayer } from './components/lead/LeadLayer';
import { AfterWalk } from './sections/AfterWalk';
import { Footer } from './sections/Footer';
import { Groups } from './sections/Groups';
import { Hero } from './sections/Hero';
import { InsuranceKeys } from './sections/InsuranceKeys';
import { MeetFirst } from './sections/MeetFirst';
import { Navbar } from './sections/Navbar';
import { Pack } from './sections/Pack';
import { Prices } from './sections/Prices';
import { Quote } from './sections/Quote';
import { TheWalk } from './sections/TheWalk';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <LeadLayer>
        <main>
          <Hero />
          <TheWalk />
          <Groups />
          <Pack />
          <AfterWalk />
          <InsuranceKeys />
          <Prices />
          <Quote />
          <MeetFirst />
        </main>
        <Footer />
      </LeadLayer>
    </MotionConfig>
  );
}
