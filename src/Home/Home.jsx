import React from "react";
import Navbar from "../Component/Navbar";
import Banner from "../Component/Banner";
import Cards from "../Component/Cards";
import Footer from "../Component/Footer";
import TopCarousel from "../Component/TopCarousel";
import Inspire from "../Component/Inspire";

function Home() {
  return (
    <>
      <Navbar />
      <TopCarousel/>
      <Banner />
      <Cards />
      <Inspire/>
      <Footer />
    </>
  );
}

export default Home;