"use client";

// Custom SVG Icons matching the clean, thin-line aesthetic
const ChatIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-12 h-12 text-white"
  >
    <path d="M14 19h-4.5a2.5 2.5 0 0 1-2.5-2.5v-8A2.5 2.5 0 0 1 9.5 6h9A2.5 2.5 0 0 1 21 8.5v6A2.5 2.5 0 0 1 18.5 17h-2.5l-2 2z" />
    <path d="M10 19l-3 3v-3H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2" />
  </svg>
);

const UserIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-12 h-12 text-white"
  >
    <circle cx="12" cy="8" r="4.5" />
    <path d="M5.5 21.5v-2a4.5 4.5 0 0 1 4.5-4.5h4a4.5 4.5 0 0 1 4.5 4.5v2" />
  </svg>
);

const StethoscopeIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-12 h-12 text-white"
  >
    <path d="M5 3v5.5a7 7 0 0 0 14 0V3" />
    <path d="M12 15.5v3.5" />
    <circle cx="12" cy="20.5" r="2.5" />
    <path d="M3 3h4" />
    <path d="M17 3h4" />
  </svg>
);

const commitmentData = [
  {
    id: 1,
    icon: <ChatIcon />,
    title: "Dignified Support",
    description: "We are committed to promoting independence, dignity, and a sense of security for our clients. Our comprehensive home care services are designed to provide exceptional care and support.",
    linkText: "Learn About Our Approach",
    linkHref: "#approach"
  },
  {
    id: 2,
    icon: <UserIcon />,
    title: "Empowering Seniors and Families",
    description: "As a leading home care agency, we empower seniors and families with reliable and compassionate care. Our commitment to excellence sets us apart, ensuring peace of mind for all those we serve.",
    linkText: "Discover The Difference",
    linkHref: "#discover"
  },
  {
    id: 3,
    icon: <StethoscopeIcon />,
    title: "Expert Care Team",
    description: "Our professional caregivers and support staff uphold the highest standards of care with expertise, empathy, and genuine compassion. We are dedicated to making a positive impact on the lives of our clients and their families.",
    linkText: "Meet Our Professional Team",
    linkHref: "#team"
  }
];

export default function Commitment() {
  return (
    <section id="commitment" className="w-full bg-white py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Main Heading */}
        <h2 className="text-[#0fa960] text-3xl md:text-[40px] font-light mb-16 text-center tracking-wide">
          Committed to Your Well-being
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 w-full">
          {commitmentData.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center">
              
              {/* Green Icon Circle */}
              <div className="w-[100px] h-[100px] rounded-full bg-[#0fa960] flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[#0fa960] text-xl md:text-[22px] font-light mb-4 px-4 leading-tight">
                {item.title}
              </h3>

              {/* Description Body */}
              <p className="text-gray-400 font-light text-[15px] leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>

              {/* Action Link */}
              <a 
                href={item.linkHref}
                className="text-[#8C52A1] font-light text-[15px] hover:text-[#714083] hover:underline transition-colors mt-auto"
              >
                {item.linkText}
              </a>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}