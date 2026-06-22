"use client";

export default function About() {
  return (
    <section id="about" className="w-full bg-white py-16 md:py-24 px-6">
      {}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 md:gap-16 lg:gap-20">
        
        {}
        <div className="w-full md:w-5/12 lg:w-1/2 flex-shrink-0">
          <img
            // Using a placeholder from Unsplash that closely matches the "caregiver and elderly patient" theme
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Caregiver supporting an elderly man"
            className="w-full h-auto object-cover shadow-sm"
          />
        </div>

        {}
        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col pt-2 md:pt-0">
          <h2 className="text-[#0fa960] text-3xl md:text-[38px] lg:text-[42px] font-light mb-6 tracking-wide">
            About the WeeCare
          </h2>

          <p className="text-gray-500 font-light text-[15px] leading-relaxed mb-6">
            Wee Care Canada is a professional Home Care Agency that is
            dedicated to providing exceptional care and support to seniors and
            individuals with disabilities. Our team of experienced caregivers is
            committed to delivering personalized home care services that meet
            the unique needs of each client. We understand that every individual
            has different requirements, and we work closely with our clients and
            their families to customized care plans that ensure their, safety, and
            well-being.
          </p>

          <p className="text-gray-500 font-light text-[15px] leading-relaxed">
            At Wee Care Canada, we believe that everyone deserves to live with
            dignity and respect, and we are committed to providing
            compassionate care that promotes independence and enhances
            quality of life. Our caregivers are trained to provide a range of
            services, including personal care, medication management, meal
            preparation, light housekeeping, and companionship. We are
            dedicated to building strong relationships with our clients and their
            families, and we strive to provide the highest level of care and support
            possible. Contact us today to learn more about our services and how
            we can help you or your loved one.
          </p>
        </div>
        
      </div>
    </section>
  );
}