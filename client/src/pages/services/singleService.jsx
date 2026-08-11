import React from "react";
import { AvailableServices } from "../../constants/avaiableServices";
import { useLocation } from "react-router-dom";
import ServicesHeroSection from "./servicesHero";
import Description from "./description";
import Footer from "../../constants/footer";
import Gallery from "./gallery";
import Statistics from "./statistics";
import Mentors from "./mentors";
import Advertisments from "./advertisments";

const SingleServices = () => {
  const { state } = useLocation();
  return (
    <div className="flex flex-1 w-full flex-col bg-[#F2F1FF]">
      <ServicesHeroSection service={state} />
      <Statistics service={state} />
      <Description service={state} />
      <Advertisments service={state} />
      <Mentors service={state} />
      <Gallery service={state} />
      <Footer />
    </div>
  );
};

export default SingleServices;
