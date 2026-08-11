import React from "react";
import Services from "./services";
import CoursesHeroSection from "./hero";
import Footer from "../../constants/footer";
import BecomeATutor from "./becomeATutor";
import Advertisments from "../services/advertisments";
// import GermanServices from "./german";

const Courses = () => {
  return (
    <div className="flex flex-1 w-full flex-col bg-[#F2F1FF]">
      <CoursesHeroSection />
      <Services />
      <BecomeATutor />
      <Footer />
    </div>
  );
};

export default Courses;
