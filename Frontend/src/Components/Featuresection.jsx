import React from 'react'

const Featuresection = () => {
  return (
    <section className="bg-gradient-to-br from-[#031f39] to-[#000000] text-[#ee6123] py-20">
      <div className="container mx-auto px-4 md:px-12 text-center">
        {/* Bigger Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Enhance Your Sharing Experience</h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 mb-20">
          Our URL shortener offers powerful features that help you track, manage, and customize your links like never before.Whether you're looking to shorten links for social media, marketing campaigns, or just to keep your URLs clean.
        </p>


        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col bg-[#ffffff] text-[#031f39] p-6 rounded-xl shadow-lg h-full">
            <div className="flex justify-center mb-4">
              <img src="https://docrdsfx76ssb.cloudfront.net/static/1732572292/pages/wp-content/uploads/2024/04/url-shortener-icon.svg" className='h-[160px] pb-5' alt="Easy URL Shortening Icon" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Easy URL Shortening</h3>
            <p className="text-lg text-gray-700">
              Instantly shorten long URLs with just a few clicks—perfect for quick sharing and better user experience.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col bg-[#ffffff] text-[#031f39] p-6 rounded-xl shadow-lg h-full">
            <div className="flex justify-center mb-4">
              <img src="https://docrdsfx76ssb.cloudfront.net/static/1732572292/pages/wp-content/uploads/2024/05/icon_paying-customers.svg" alt="Customizable Links Icon" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Customizable Links</h3>
            <p className="text-lg text-gray-700">
              Customize your shortened URLs to make them more memorable and meaningful for your audience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col bg-[#ffffff] text-[#031f39] p-6 rounded-xl shadow-lg h-full">
            <div className="flex justify-center mb-4">
              <img src="https://docrdsfx76ssb.cloudfront.net/static/1732572292/pages/wp-content/uploads/2024/04/landing-pages-icon.svg" className='h-[160px]  pb-5' alt="Click Tracking Icon" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Click Tracking</h3>
            <p className="text-lg text-gray-700">
              Track the number of clicks your links receive and analyze performance with ease.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col bg-[#ffffff] text-[#031f39] p-6 rounded-xl shadow-lg h-full">
            <div className="flex justify-center mb-4">
              <img src="https://docrdsfx76ssb.cloudfront.net/static/1732572292/pages/wp-content/uploads/2024/05/icon_integrations.svg" alt="Expiry Date Icon" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Expiry Date</h3>
            <p className="text-lg text-gray-700">
              Set an expiry date for your shortened URLs so they automatically become inactive after a certain time.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col bg-[#ffffff] text-[#031f39] p-6 rounded-xl shadow-lg h-full">
            <div className="flex justify-center mb-4">
              <img src="https://docrdsfx76ssb.cloudfront.net/static/1732572292/pages/wp-content/uploads/2024/05/icon_codes-links-created.svg" alt="Analytics Dashboard Icon" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Analytics Dashboard</h3>
            <p className="text-lg text-gray-700">
              Access an easy-to-read dashboard with all your URL performance metrics and insights.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="flex flex-col bg-[#ffffff] text-[#031f39] p-6 rounded-xl shadow-lg h-full">
            <div className="flex justify-center mb-4">
              <img src="https://docrdsfx76ssb.cloudfront.net/static/1732572292/pages/wp-content/uploads/2024/05/icon_connections-monthly.svg" alt="Secure & Reliable Icon" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Secure & Reliable</h3>
            <p className="text-lg text-gray-700">
              Your shortened URLs are secure, ensuring safe and trustworthy sharing across platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featuresection
