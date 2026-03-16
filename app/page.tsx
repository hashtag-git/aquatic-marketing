import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Platform from "@/components/Platform";
import Capabilities from "@/components/Capabilities";
import Jurisdictions from "@/components/Jurisdictions";
import ValidatedData from "@/components/ValidatedData";
import TheEngine from "@/components/TheEngine";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-bg">
      <Nav />
      <Hero />
      <div className="section-rule" />
      <Problem />
      <div className="section-rule" />
      <Platform />
      <div className="section-rule" />
      <Capabilities />
      <div className="section-rule" />
      <Jurisdictions />
      <div className="section-rule" />
      <ValidatedData />
      <div className="section-rule" />
      <TheEngine />
      <div className="section-rule" />
      <Closing />
      <Footer />
    </main>
  );
}
