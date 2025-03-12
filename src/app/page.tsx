import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import DictionarySection from "./components/DictionarySection";
import ApproachSection from "./components/ApproachSection";
import CTASection from "./components/CTASection";
import Layout from "./components/layout";
import FAQSection from "./components/FAQSection";
import { faqData } from "./lib/data/faqData";
import GamePromoSection from "./components/GamePromoSection";
import { LanguageDirectoryPromo } from "./components/LanguageDirectoryPromo";

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroSection />
        <MissionSection />
        <DictionarySection />
        <ApproachSection />
        <LanguageDirectoryPromo />
        <GamePromoSection />
        <CTASection />
        <FAQSection faqs={faqData} />
      </main>
    </Layout>
  );
}
const LanguageDirectoryPromo = () => {
  return (
    <section>
      <h2>Explore the World's Languages</h2>
      <p>Discover a comprehensive directory of languages organized by continent and country.</p>
      <a href="/languages">View Directory</a>
    </section>
  );
};