import React from "react";
import Hero from "./hero";
import Statistics from "./statistics";
import Services from "./services";
import Faqs from "./faqs";
import OurPeople from "./ourPeople";
import Footer from "../../constants/footer";

const Landing = () => {
  return (
    <div className="flex flex-1 w-full flex-col bg-[#F2F1FF]">
      <Hero />
      <Statistics />
      <Services />
      <Faqs />
      <OurPeople />
      <Footer />
    </div>
  );
};

export default Landing;
