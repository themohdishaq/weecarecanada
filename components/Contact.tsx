"use client";

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-700 shrink-0">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-700 shrink-0">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-700 shrink-0">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ThumbsUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-700 shrink-0">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-20 px-6 overflow-hidden flex items-center justify-center min-h-[600px]">
      
      {/* Background Image with Heavy White Overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
          alt="Office background"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft white overlay to achieve the faded look from the design */}
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8 lg:gap-20">
        
        {}
        <div className="w-full md:w-5/12 flex flex-col">
          <h2 className="text-[#8C52A1] text-4xl md:text-[42px] font-light mb-12 tracking-wide">
            Contact
          </h2>

          <div className="flex flex-col gap-8">
            {/* Address */}
            <div className="flex items-start gap-6">
              <div className="mt-1"><MapPinIcon /></div>
              <p className="text-gray-500 font-light text-[15px] leading-relaxed">
                203 Max Becker Drive, Kitchener,<br />
                Ontario, N2E4G2
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-6">
              <div><PhoneIcon /></div>
              <p className="text-gray-500 font-light text-[15px]">
                +1 647-561-5549
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-6">
              <div><EnvelopeIcon /></div>
              <a href="mailto:CEO@weecarecanada.com" className="text-gray-500 font-light text-[15px] hover:text-[#8C52A1] transition-colors">
                CEO@weecarecanada.com
              </a>
            </div>

            {/* Thumbs Up (as per design, no text next to it) */}
            <div className="flex items-center gap-6">
              <div><ThumbsUpIcon /></div>
            </div>
          </div>
        </div>

        {}
        <div className="w-full md:w-7/12 flex flex-col justify-start md:pt-4">
          <form className="w-full flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Row 1: First Name & Last Name */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-1/2 flex flex-col">
                <label htmlFor="firstName" className="font-serif italic text-gray-700 text-[15px] mb-2">
                  First Name
                </label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="w-full border border-gray-200 bg-white px-3 py-2.5 outline-none focus:border-[#8C52A1] transition-colors shadow-sm"
                />
              </div>
              <div className="w-full sm:w-1/2 flex flex-col">
                <label htmlFor="lastName" className="font-serif italic text-gray-700 text-[15px] mb-2">
                  Last Name
                </label>
                <input 
                  type="text" 
                  id="lastName" 
                  className="w-full border border-gray-200 bg-white px-3 py-2.5 outline-none focus:border-[#8C52A1] transition-colors shadow-sm"
                />
              </div>
            </div>

            {/* Row 2: Email */}
            <div className="w-full flex flex-col">
              <label htmlFor="email" className="font-serif italic text-gray-700 text-[15px] mb-2">
                Email *
              </label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full border border-gray-200 bg-white px-3 py-2.5 outline-none focus:border-[#8C52A1] transition-colors shadow-sm"
              />
            </div>

            {/* Row 3: Message */}
            <div className="w-full flex flex-col">
              <label htmlFor="message" className="font-serif italic text-gray-700 text-[15px] mb-2">
                Message
              </label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full border border-gray-200 bg-white px-3 py-2.5 outline-none focus:border-[#8C52A1] transition-colors shadow-sm resize-y"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-end mt-2">
              <button 
                type="submit"
                className="bg-[#8C52A1] text-white px-10 py-2.5 hover:bg-[#714083] transition-colors font-light text-[15px]"
              >
                Send
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}