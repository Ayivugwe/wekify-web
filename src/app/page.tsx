import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import DictionarySection from "./components/DictionarySection";
import ApproachSection from "./components/ApproachSection";
import CTASection from "./components/CTASection";
import Layout from "./components/layout";
import FAQSection from "./components/FAQSection";
import { faqData } from "./lib/data/faqData";
import GamePromoSection from "./components/GamePromoSection"; // Added import

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroSection />
        <MissionSection />
        <DictionarySection />
        <ApproachSection />
        <GamePromoSection /> {/* Added GamePromoSection */}
        <CTASection />
        <FAQSection faqs={faqData} />
      </main>
    </Layout>
  );
}

// Placeholder component for GamePromoSection
// This needs to be replaced with actual game promo implementation
const GamePromoSection = () => {
  return (
    <section>
      <h2>Play Our Word Preservation Game!</h2>
      <p>Learn about endangered languages and help preserve them by playing our fun and engaging game.</p>
      <button>Play Now</button>
    </section>
  );
};