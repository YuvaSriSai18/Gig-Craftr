// import React from 'react'
import HeroSection from "../../components/Home/HeroSection";
// import Carousel from "../../components/Home/Carousel";
import TextWithImage from "../../components/Home/TextWithImage";

import Footer from "../../components/Footer/Footer";
import InfoSection from "../../components/Home/InfoSection";
import CategoryGrid from "../../components/Home/loadcatogiry";
import JobsCarousel from "../../components/Home/Carousel";
export default function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <TextWithImage />
      <CategoryGrid />
      <JobsCarousel/>
      <Footer />
    </>
  );
}
