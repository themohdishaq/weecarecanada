import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import DayInLife from "@/components/DayInLife";
import Services from "@/components/Newsletter";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main>
      
      <Hero />
      <section 
      id="call-action" 
      className="w-full bg-[#8C52A1] py-8 md:py-10 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
        
        {/* Left side text */}
        <h2 className="text-white text-2xl md:text-3xl lg:text-[34px] font-light tracking-wide text-center md:text-left">
          Solutions Tailored to Your Needs.
        </h2>
        
        {/* Right side button with specific drop shadow and border styling */}
        <button 
          className="bg-[#8C52A1] border border-[#714083] text-white text-lg md:text-xl px-10 py-3 
                     shadow-[0_12px_15px_-4px_rgba(0,0,0,0.5)] 
                     hover:-translate-y-0.5 hover:shadow-[0_16px_20px_-4px_rgba(0,0,0,0.6)] 
                     transition-all duration-300 active:translate-y-0 active:shadow-[0_4px_6px_-2px_rgba(0,0,0,0.5)]"
        >
          Get in Touch
        </button>
        
      </div>
    </section>
      <Pillars />
      <Testimonial />
      <Contact />
      <Newsletter />
      
      
      <Footer />
    </main>
  );
}
