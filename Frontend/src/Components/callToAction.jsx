import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-[#fff] text-[#031f39] py-12">
      <div className="container mx-auto px-4 md:px-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-[#031f39]">
            Get Started with Our URL Shortener!
          </h2>
          <p className="text-lg text-[#031f39] mb-10">
            Take control of your links with our easy-to-use tool. Sign up today
            and start shortening, customizing, and tracking your URLs!
          </p>
          <a
            href="#signup"
            className="bg-[#ee6123] text-[#ffffff] px-8 py-4 rounded-xl text-xl font-semibold hover:bg-[#4b7d9b] transition duration-300"
          >
            Start Now
          </a>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://docrdsfx76ssb.cloudfront.net/static/1732572292/pages/wp-content/uploads/2024/05/00_solution_insurance_hero-img_desktop@2x.png" 
            alt="Call to Action Image"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
