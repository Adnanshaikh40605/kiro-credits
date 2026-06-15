import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Features } from "@/components/Features";
import { AIAgents } from "@/components/AIAgents";
import { WhatsAppAutomation } from "@/components/WhatsAppAutomation";
import { CampaignManagement } from "@/components/CampaignManagement";
import { CRM } from "@/components/CRM";
import { Analytics } from "@/components/Analytics";
import { Pricing } from "@/components/Pricing";
import { WhyKorvexa } from "@/components/WhyKorvexa";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <AIAgents />
        <WhatsAppAutomation />
        <CampaignManagement />
        <CRM />
        <Analytics />
        <Pricing />
        <WhyKorvexa />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
