import React, { useEffect, useState } from "react";
import Navbar from "../../constants/navbar";
import Fonts from "../../utils/fontsconfig";
import CoursesBackground from "../../assets/images/coursesBackground.jpg";

const CoursesHeroSection = () => {
  return (
    <div className="relative flex flex-1 min-h-screen w-full overflow-hidden bg-black">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${CoursesBackground})` }}
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 w-full min-h-screen flex flex-col bg-black/30 p-3">
        <Navbar textColor="white" bordercolor="white/30" />
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <h3
            className="bg-white text-black py-2 px-5 rounded-full"
            style={Fonts.poppins.regular}
          >
            PROFESSIONAL COURSES
          </h3>

          <div className="flex w-full items-center flex-col">
            <h1
              style={Fonts.poppins.medium}
              className="mt-6 text-4xl md:text-5xl lg:text-7xl text-white leading-tight"
            >
              Learn Skills That Open
              <br className="hidden md:block" />
              Global Opportunities.
            </h1>
            <h3
              style={Fonts.poppins.regular}
              className="text-sm text-white/90 pt-3 leading-relaxed lg:max-w-8/12 text-center"
            >
              Master Accounting, German, Korean, and English with expert
              instructors, practical learning, and personalized guidance to
              achieve your academic, professional, and international career
              goals.
            </h3>
          </div>
          <button
            style={Fonts.poppins.regular}
            onClick={() => {
              document
                .getElementById("courses-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 bg-[#FF090C] text-white px-8 lg:px-10 py-4 rounded-full hover:bg-black transition-all duration-300 cursor-pointer"
          >
            Explore Our Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesHeroSection;
