import React from "react";
import Fonts from "../../utils/fontsconfig";
import OurVisionImage from "../../assets/images/ourVision.png";

const OurVision = () => {
  return (
    <section className="bg-white">
      <div
        id="leadingExperts"
        className="flex flex-col items-center text-center px-4 py-12 lg:py-20"
      >
        <div className="flex flex-col-reverse lg:flex-row justify-start items-start gap-10 px-4 lg:px-6 max-w-7xl">
          <div className="flex w-full flex-col items-center  lg:items-start justify-start">
            <h3
              className="bg-white flex py-2 px-5 rounded-full border border-gray-200 text-sm lg:text-base"
              style={Fonts.poppins.regular}
            >
              OUR VISION
            </h3>

            <div className="flex w-full items-center lg:items-start justify-center flex-col">
              <h1
                style={Fonts.poppins.medium}
                className="text-3xl lg:text-4xl xl:text-5xl text-black mt-4 text-center lg:text-left"
              >
                What's our Vision towards DOS-Nepal?
              </h1>

              <p
                className="text-gray-600 mt-2 w-full text-center lg:text-left"
                style={Fonts.poppins.regular}
              >
                Our vision is to become a leading center of excellence in
                education and professional development, recognized for
                empowering individuals with the knowledge, skills, and
                confidence to succeed in a rapidly evolving global landscape. We
                aspire to create lifelong learners, future leaders, and globally
                competitive professionals through innovative teaching, practical
                learning, and a commitment to academic excellence.
              </p>
            </div>
          </div>
          <img
            className="w-full max-w-87.5 md:max-w-112.5 mb-20 lg:max-w-112.5 h-auto"
            src={OurVisionImage}
            alt="Our Mission"
          />
        </div>
      </div>
    </section>
  );
};

export default OurVision;
