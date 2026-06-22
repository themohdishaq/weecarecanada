"use client";

export default function Newsletter() {
  return (
    <section className="w-full bg-[#f6f6f6] py-16 md:py-24 px-6 flex justify-center">
      <div className="w-full max-w-4xl flex flex-col items-center text-center">
        
        {  }
        {/* Main Heading */}
        <h2 className="text-[#0fa960] text-3xl md:text-[40px] font-light mb-6 tracking-wide">
          Stay Informed with WeeCareCanada
        </h2>

        {/* Subtitle / Description */}
        <p className="text-gray-500 font-light text-[15px] md:text-base leading-relaxed mb-12 max-w-[95%] md:max-w-none">
          Join our mailing list to stay informed about our latest services, resources, and community events. By subscribing, you'll receive valuable
          insights and helpful tips to support your journey towards enhanced well-being.
        </p>

        {}
        {/* Newsletter Form */}
        <form 
          className="w-full max-w-3xl flex flex-col gap-6" 
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Input field with bottom border only */}
          <div className="w-full">
            <input
              type="email"
              placeholder="Enter your email here*"
              required
              className="w-full bg-transparent border-b border-gray-800 pb-2 text-gray-700 font-light placeholder-gray-600 outline-none focus:border-[#8C52A1] transition-colors text-[15px]"
            />
          </div>

          {/* Full-width Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#8C52A1] text-white py-3 md:py-3.5 text-[15px] font-light hover:bg-[#714083] transition-colors mt-2"
          >
            Subscribe for Updates
          </button>
        </form>

      </div>
    </section>
  );
}