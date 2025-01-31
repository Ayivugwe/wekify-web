import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import DictionarySection from "./components/DictionarySection";
import ApproachSection from "./components/ApproachSection";
import CTASection from "./components/CTASection";
import Layout from "./components/layout";
import FAQSection from "./components/FAQSection";
import { faqData } from "./lib/data/faqData";

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroSection />
        <MissionSection />
        <DictionarySection />
        <ApproachSection />
        <CTASection />
        <FAQSection faqs={faqData} />
      </main>
    </Layout>
  );
}
