import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const [testimonials, setTestimonials] = useState([
    {
      name: "Miftahul Ulum",
      text: "\"Lokasinya dekat dengan pusat kota, jadi mudah jika ingin mencari produk sari roti di pagi hari.\"",
      img: "img/testimonials/01.jpg",
    },
    {
      name: "Leo",
      text: "\"Produk yang di distribusikan selalu fresh sampai ke toko saya\"",
      img: "img/testimonials/03.jpg",
    },
  ]);

  const addTestimonial = (name, message) => {
    setTestimonials((prevTestimonials) => [
      ...prevTestimonials,
      { name, text: message, img: "img/testimonials/user.png" },
    ]);
  };

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={testimonials} />
      <Contact addTestimonial={addTestimonial} />
    </div>
  );
};

export default App;
