const UrlShortenerForm = () => {
      return (
        <section className="py-16 relative z-10">
          <div className="container mx-auto my-4 px-4 md:px-12 text-center relative z-10" id="url-shortener-form">
            <div className="bg-[#ffffff] rounded-3xl p-8 md:p-12 shadow-2xl -mt-32 md:-mt-40 relative z-20" >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#031f39]">
                Shorten Your URL
              </h2>
              <p className="text-lg text-[#031f39] mb-10">
                Paste your long URL below and create a short, shareable link in seconds.
              </p>
              <form className="flex flex-col md:flex-row justify-center items-center gap-4">
                <input
                  type="url"
                  placeholder="Paste your long URL here..."
                  className="w-full md:w-2/3 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-[#ee6123] transition duration-300 shadow-lg"
                />
                <button
                  type="button"
                  className="px-8 py-4 bg-[#ee6123] text-[#ffffff] font-semibold rounded-full hover:bg-[#ff7c4b] transition duration-300 shadow-lg"
                >
                  Shorten URL
                </button>
              </form>
            </div>
          </div>
        </section>
      );
    };
    
    export default UrlShortenerForm;
    