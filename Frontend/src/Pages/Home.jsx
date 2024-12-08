import React, { useState } from "react";
import { Header } from "../Layout/Header";
import HeroSection from "../Components/HeroSection";
import UrlShortenerForm from "../Components/UrlShortenerForm";
import Featuresection from "../Components/Featuresection";
import Footer from "../Layout/Footer";
import CallToAction from "../Components/callToAction";

const Home = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = (e) => {
    e.preventDefault();
    if (url) {
      const randomString = Math.random().toString(36).substring(2, 8);
      setShortUrl(`https://short.ly/${randomString}`);
    }
  };

  return (
    <div>
      <Header />
      <HeroSection />
      <UrlShortenerForm />
      <Featuresection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
