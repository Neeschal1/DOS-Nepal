import React, { useEffect, useState } from "react";
import Fonts from "../../utils/fontsconfig";
import {
  FiClock,
  FiMonitor,
  FiTrendingUp,
  FiCalendar,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";

const Description = ({ service }) => {
  const [languages, setLanguages] = useState([]);
  const [features, setFeatures] = useState([]);

  const overview = [
    {
      icon: <FiClock size={22} />,
      title: "Duration",
      value: service.duration,
    },
    {
      icon: <FiMonitor size={22} />,
      title: "Learning Mode",
      value: service.mode,
    },
    {
      icon: <FiTrendingUp size={22} />,
      title: "Course Level",
      value: service.level,
    },
    {
      icon: <FiCalendar size={22} />,
      title: "Class Timing",
      value: service.classTiming,
    },
    {
      icon: <FiAward size={22} />,
      title: "Certificate",
      value: service.certificate ? "Included" : "Not Available",
    },
  ];

  useEffect(() => {
    if (!service?.languages) return;

    const languageLevels = Object.keys(service.languages)
      .filter((key) => key.startsWith("languageLevel"))
      .map((key) => service.languages[key])
      .filter(Boolean);

    setLanguages(languageLevels);
  }, [service]);

  useEffect(() => {
    if (!service?.features) return;

    const featuresList = Object.keys(service.features)
      .filter((key) => key.startsWith("feature"))
      .map((key) => service.features[key])
      .filter(Boolean);

    setFeatures(featuresList);
  }, [service]);

  return (
    <section
      id="detail-section"
      className="bg-[#F2F1FF] py-20 px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <span
            className="border border-white bg-white rounded-full px-5 py-2 text-sm"
            style={Fonts.poppins.regular}
          >
            DESCRIPTION
          </span>

          <h2
            className="mt-6 text-3xl lg:text-5xl text-black"
            style={Fonts.poppins.medium}
          >
            What We Offer
          </h2>

          <p
            className="mt-5 max-w-4xl text-gray-600 leading-8"
            style={Fonts.poppins.regular}
          >
            {service.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mt-16">
          {overview.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white bg-white p-7 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#FF090C]">
                {item.icon}
              </div>

              <h3
                className="mt-6 text-lg text-black"
                style={Fonts.poppins.medium}
              >
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600" style={Fonts.poppins.regular}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-20 flex items-center flex-col">
          <h3 className="text-2xl text-black mb-8" style={Fonts.poppins.medium}>
            Available Levels
          </h3>

          <div className="flex flex-wrap gap-4 items-center">
            {languages.map((level) => (
              <span
                key={level}
                className="rounded-full bg-white border border-white px-6 py-3 text-[#FF090C]"
                style={Fonts.poppins.medium}
              >
                {level}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-20 flex items-center justify-center flex-col">
          <h3 className="text-2xl text-black mb-8" style={Fonts.poppins.medium}>
            Course Features
          </h3>

          <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center justify-center bg-white gap-4 rounded-2xl p-5 transition-all duration-300 hover:bg-[#FF090C] hover:text-white group"
              >
                <div className="text-[#FF090C] group-hover:text-white">
                  <FiCheckCircle size={22} />
                </div>
                <p style={Fonts.poppins.regular}>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
