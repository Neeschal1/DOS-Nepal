import React from "react";
import Fonts from "../../utils/fontsconfig";

const BecomeATutor = () => {
  return (
    <div className="flex bg-white flex-col items-center justify-center px-4 sm:px-6 lg:px-10 py-16 lg:py-30 w-full">
      <div className="lg:flex lg:flex-col lg:gap-6 lg:w-full lg:items-center flex flex-col items-center justify-center gap-5">
        <h3
          className="bg-white py-2 px-5 rounded-full border border-gray-200 text-sm lg:text-base"
          style={Fonts.poppins.regular}
        >
          MENTORSHIP OPPORTUNITY
        </h3>

        <div className="lg:flex lg:w-full lg:items-center flex-col">
          <h1
            style={Fonts.poppins.medium}
            className="text-3xl lg:text-4xl font-bold text-black lg:text-start text-center"
          >
            Become a Tutor
          </h1>

          <p
            className="text-gray-600 mt-2 lg:max-w-9/12 lg:text-center w-full text-center"
            style={Fonts.poppins.regular}
          >
            From professional accounting and IT training to German and Korean
            language courses, we equip you with the practical skills, knowledge,
            and guidance needed to achieve your academic and career goals.
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/all-experts")}
            style={Fonts.poppins.medium}
            className="bg-black cursor-pointer text-white px-10 py-4 rounded-full hover:bg-[#FF090C] transition-all duration-300"
          >
            Apply for Mentor
          </button>
        </div>
      </div>
    </div>
  );
};

export default BecomeATutor;
