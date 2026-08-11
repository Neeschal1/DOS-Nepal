import React from "react";
import Fonts from "../../utils/fontsconfig";
import OurMissionImage from "../../assets/images/workingImageContents.png";
import { FaCheck } from "react-icons/fa6";

const OurMissionBullets = [
  {
    id: 1,
    value: "Quality Education",
  },
  {
    id: 2,
    value: "Career Development",
  },
  {
    id: 3,
    value: "Practical Skill Building",
  },
  {
    id: 4,
    value: "Global Language Excellence",
  },
  {
    id: 5,
    value: "Lifelong Learning",
  },
];

const OurMission = () => {
  return (
    <section className="bg-[#F2F1FF]">
  <div
    id="leadingExperts"
    className="flex flex-col items-center text-center px-4 py-12 lg:py-20"
  >
    <div className="flex flex-col-reverse lg:flex-row justify-start items-start gap-10 px-4 lg:px-6 max-w-7xl">
      <img
        className="w-full max-w-87.5 md:max-w-112.5 mb-20 lg:max-w-112.5 h-auto"
        src={OurMissionImage}
        alt="Our Mission"
      />

      <div className="flex w-full flex-col items-center  lg:items-start justify-start">
        <h3
          className="bg-white flex py-2 px-5 rounded-full border border-gray-200 text-sm lg:text-base"
          style={Fonts.poppins.regular}
        >
          OUR MISSION
        </h3>

        <div className="flex w-full items-center lg:items-start justify-center flex-col">
          <h1
            style={Fonts.poppins.medium}
            className="text-3xl lg:text-4xl xl:text-5xl text-black mt-4 text-center lg:text-left"
          >
            What we aim to do?
          </h1>

          <p
            className="text-gray-600 mt-2 w-full text-center lg:text-left"
            style={Fonts.poppins.regular}
          >
            Our mission is to empower individuals through high-quality
            education, practical skill development, and personalized
            guidance. We strive to create a learning environment where
            students gain the confidence, knowledge, and global competencies
            needed to excel in academics, careers, and international
            opportunities.
            <br />
            <br />
            We focus in:
          </p>

          {OurMissionBullets.map((index) => (
            <div
              key={index.id}
              className="flex flex-row items-center justify-start gap-4 py-2 w-full"
            >
              <FaCheck size={20} color="#FF090C" />
              <p
                className="text-black text-center lg:text-left"
                style={Fonts.poppins.regular}
              >
                {index.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default OurMission;
