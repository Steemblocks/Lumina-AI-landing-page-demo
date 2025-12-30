import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import FloatingShapes from "@/components/FloatingShapes";
import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#030014] overflow-hidden">
      {/* Global Background Effects */}
      <div className="fixed inset-0 bg-grid -z-20 opacity-40" />
      <div className="bg-noise" />
      <Spotlight />

      <FloatingShapes />
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />

      <Pricing />

      {/* Final CTA - Fixed Text Sizes */}
      <section className="section-spacing relative z-20">
        <div className="container">
          <div className="glass-card p-10 md:p-16 text-center rounded-3xl relative overflow-hidden group border border-white/5">
            {/* CTA Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 group-hover:bg-primary/30 transition-all duration-700" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 relative z-10 leading-tight text-white">
              Ready to Amplify Your <br />
              <span className="text-primary">Team&apos;s Potential?</span>
            </h2>
            <p className="text-base md:text-lg text-text-secondary max-w-xl mx-auto mb-10 relative z-10">
              Join over 5,000 teams already using Lumina AI to build the next
              generation of digital products.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button className="btn-primary px-8 py-3.5 text-base shadow-[0_0_25px_rgba(112,66,248,0.3)]">
                Create Free Account
              </button>
              <button className="btn-secondary px-8 py-3.5 text-base bg-white/5 hover:bg-white/10">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
