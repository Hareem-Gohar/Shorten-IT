import React from 'react'

const HeroSection = () => {
  return (
      <section className="bg-gradient-to-br from-[#031f39] to-[#000000] text-[#ffffff] pt-10 pb-28">
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Revolutionize How You <span className="text-[#ee6123]">Share Links</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Shorten long URLs, track their performance, and set expiration dates—all in one place. Simplify your online sharing experience with ease and elegance.
          </p>
          <a href="#url-shortener-form" className="inline-block">
            <button className="px-6 py-3 bg-[#ee6123] text-[#ffffff] font-semibold rounded-lg hover:bg-[#ff7c4b] transition duration-300">
              Get Started
            </button>
          </a>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <img
            src="https://docrdsfx76ssb.cloudfront.net/static/1732572292/pages/wp-content/uploads/2024/04/home-page-slider-1.png"
            alt="App Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection