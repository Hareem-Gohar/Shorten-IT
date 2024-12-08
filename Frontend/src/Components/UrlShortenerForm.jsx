import { useState } from "react";

const UrlShortenerForm = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [clicks, setClicks] = useState(0); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validate URL
    if (!originalUrl || !/^https?:\/\/\S+$/.test(originalUrl)) {
      setError("Please enter a valid URL.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ originalUrl, expiryDate }),
      });

      const data = await response.json();
      if (data.shortUrl) {
        setShortUrl(`http://localhost:5000/${data.shortUrl}`);
        setClicks(data.clicks); 
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (error) {
      setError("Failed to shorten URL. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = async () => {
    try {
      const response = await fetch(`http://localhost:5000/${shortUrl.split('/')[3]}`);
      
      // (URL expired)
      if (response.status === 410) {
        setError("URL has expired.");
        return;
      }
  
      const data = await response.json();
  
      if (data.clicks !== undefined) {
        setClicks(data.clicks); 
  
        window.open(data.originalUrl, "_blank");
      } else {
        setError("Error occurred while processing the click.");
      }
    } catch (error) {
      setError("Error occurred while processing the click.");
    }
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl).then(() => {
      alert("Shortened URL copied to clipboard!");
    });
  };

  return (
    <section className="py-16 relative z-10">
      <div
        className="container mx-auto my-4 px-4 md:px-12 text-center relative z-10"
        id="url-shortener-form"
      >
        <div className="bg-[#ffffff] rounded-3xl p-8 md:p-12 shadow-2xl -mt-32 md:-mt-40 relative z-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#031f39]">
            Shorten Your URL
          </h2>
          <p className="text-lg text-[#031f39] mb-10">
            Paste your long URL below and create a short, shareable link in
            seconds. <br />
            <span className="text-sm text-gray-600">
              (Default expiry: 7 days if not provided)
            </span>
          </p>
          <form
            className="flex flex-col  justify-center items-center gap-4 flex-wrap"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="originalUrl"
              className="text-sm ps-4 text-left text-[#031f39] font-semibold"
            >
              Enter Original URL
            </label>
            <input
              id="originalUrl"
              type="url"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
              placeholder="Paste your long URL here..."
              className="w-full md:w-2/3 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-[#ee6123] transition duration-300 shadow-lg"
            />

            <label
              htmlFor="expiryDate"
              className="text-sm ps-4 text-left text-[#031f39] font-semibold"
            >
              Enter Expiry Date
            </label>
            <input
              id="expiryDate"
              type="datetime-local"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full md:w-2/3 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-[#ee6123] transition duration-300 shadow-lg"
            />

            <button
              type="submit"
              disabled={loading}
              className={`px-8 py-4 ${
                loading ? "bg-gray-400" : "bg-[#ee6123]"
              } text-[#ffffff] font-semibold rounded-full hover:bg-[#ff7c4b] transition duration-300 shadow-lg`}
            >
              {loading ? "Shortening..." : "Shorten URL"}
            </button>
          </form>

          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
          {shortUrl && (
            <div className="mt-6">
              <p className="text-lg text-[#031f39]">
                Shortened URL:{" "}
                <a
                  href={shortUrl}
                  className="text-[#ee6123]"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick();
                  }}
                >
                  {shortUrl}
                </a>
              </p>
              {clicks !== undefined && (
                <p className="text-sm text-[#031f39] mt-2">
                  Clicks: {clicks}
                </p>
              )}
              <button
                onClick={handleCopy}
                className="mt-4 px-6 py-3 bg-[#031f39] text-[#ffffff] font-semibold rounded-full hover:bg-[#042b4f] transition duration-300 shadow-lg"
              >
                Copy to Clipboard
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UrlShortenerForm;
