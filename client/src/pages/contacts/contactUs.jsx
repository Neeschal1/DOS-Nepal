import React from "react";
import ContactUsHero from "./contactUsHero";
import Footer from "../../constants/footer";
import ContactMap from "./liveLocation";

const ContactUs = () => {
  return (
    <div className="flex flex-1 w-full flex-col bg-[#F2F1FF]">
      <ContactUsHero />
      <ContactMap />
      <Footer />
    </div>
  );
};

export default ContactUs;
