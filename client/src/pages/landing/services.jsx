import React from "react";
import Fonts from "../../utils/fontsconfig";
import GermanLanguage from "../../assets/images/germanLanguage.jpg";
import AccountingTraining from "../../assets/images/accountingTraining.jpg";
import { useNavigate } from "react-router-dom";
import { AvailableServices } from "../../constants/avaiableServices";

const Services = () => {
  const navigation = useNavigate()

  const handleLearnMore = () => {
    navigation("/available-courses")
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 py-16 lg:py-30 w-full">
      <div className="flex flex-col items-center gap-5">
        <h3
          className="bg-white py-2 px-4 rounded-full lg:w-fit text-center"
          style={Fonts.poppins.regular}
        >
          INNOVATIVE SOLUTION
        </h3>
        <h1 style={Fonts.poppins.medium} className="xl:text-4xl text-3xl text-black">
          Consulting Services
        </h1>
      </div>
      <div className="w-full max-w-7xl mt-12 lg:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {AvailableServices.map((service) => (
            <div
              key={service.id}
              className="group relative w-full h-80 rounded-3xl overflow-hidden object-cover cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-all duration-500"></div>
              <div className="absolute top-7 left-7">
                <span
                  style={Fonts.poppins.medium}
                  className=" text-white px-6 py-2 rounded-full text-xs tracking-wider uppercase"
                >
                  {service.category}
                </span>
              </div>
              <div className="absolute bottom-1 left-7 right-7 text-white">
                <h2
                  style={Fonts.poppins.medium}
                  className="text-2xl lg:text-3xl mb-3 transition-all duration-500 lg:group-hover:-translate-y-2"
                >
                  {service.title}
                </h2>
                <p
                  style={Fonts.poppins.regular}
                  className="text-gray-200 leading-7 text-sm opacity-90"
                >
                  {service.subHeading}
                </p>
                <button onClick={handleLearnMore} className="mt-6 bg-white cursor-pointer text-black px-5 py-3 rounded-full font-medium transition-all duration-500 hover:bg-[#FF090C] hover:text-white opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
