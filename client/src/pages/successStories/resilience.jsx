import React from "react";
import Fonts from "../../utils/fontsconfig";

const Resilience = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 py-16 lg:py-30 w-full">
      <div className="flex flex-col items-center gap-5">
        <h3
          className="bg-white py-2 px-4 rounded-full lg:w-fit text-center"
          style={Fonts.poppins.regular}
        >
          EMPOWERING FUTURE PROFESSIONALS
        </h3>
        <h1
          style={Fonts.poppins.medium}
          className="xl:text-4xl text-3xl text-black text-center"
        >
          Transforming Skills into Successful Careers
        </h1>
      </div>
      <p
        style={Fonts.poppins.regular}
        className="text-sm text-black/90 pt-3 text-center leading-relaxed"
      >
        From professional accounting and IT training to German and Korean
        language courses, we equip learners with practical skills,
        internationally recognized knowledge, and career-focused guidance to
        unlock new opportunities both in Nepal and abroad.
      </p>
    </div>
  );
};

export default Resilience;
