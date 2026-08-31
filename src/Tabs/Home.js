import React from "react";
import Pallete from "../Components/Pallete";
import Category from "../Components/Category";
import WhatsAppButton from "../Components/WhatsAppButton";
import HomeContact from "../Components/HomeContact";
import Footer from "../Components/Footer";
// import HomeAbout from "../Components/HomeAbout";
import "./Home.css";




function Home() {
  return (
    <>
      <Pallete />
      <Category/>
      {/* <HomeAbout/> */}
      <HomeContact/>
      <Footer/>
      <WhatsAppButton/>
    </>
  );
}

export default Home;