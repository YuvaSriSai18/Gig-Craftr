// import React from 'react'
import HeroSection from "../../components/Home/HeroSection";
// import Carousel from "../../components/Home/Carousel";
import Jobs from "../../components/Home/Jobs";
import TextWithImage from "../../components/Home/TextWithImage";
import Footer from "../../components/Footer/Footer";
import InfoSection from "../../components/Home/InfoSection";
import CategoryGrid from '../../components/Home/loadcatogiry'
export default function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <TextWithImage />
      <CategoryGrid/>
      <Jobs />
      <Footer />
    </>
  );
}
