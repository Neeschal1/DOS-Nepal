import React from "react";
import Fonts from "../../utils/fontsconfig";
import Thumbnail from "../../assets/images/thumbnail.png"

const HowWeDo = () => {
  const IntroVideo = "https://res.cloudinary.com/ffzuvvv6/video/upload/v1786450557/video.mp4"
  return (
    <div
      id="leadingExperts"
      className="flex bg-[#F2F1FF] flex-col items-center text-center px-4 py-12 lg:py-20 lg:-mt-20 sm:-mt-20"
    >
      <h3
        className="bg-white py-2 px-5 rounded-full border border-gray-200 text-sm lg:text-base"
        style={Fonts.poppins.regular}
      >
        WORKING TECHNIQUES
      </h3>

      <div className="flex w-full items-center justify-center flex-col">
        <h1
          style={Fonts.poppins.medium}
          className="text-3xl lg:text-4xl xl:text-5xl text-black mt-4"
        >
          How we Work?
        </h1>
        <p
          className="text-gray-600 mt-2 w-[80%] lg:text-center text-center align-center"
          style={Fonts.poppins.regular}
        >
          We follow a Collaborative and Transparent Process, Ensuring
          Communication and Expert Execution, at every stage.
        </p>
      <div className="w-full max-w-4xl mt-6 mb-20 mx-auto rounded-xl overflow-hidden">
        <video className="w-full h-auto" controls preload="metadata" poster={Thumbnail}>
          <source src={IntroVideo} type="video/mp4"/>
          Your browser does not support the video. So sorry :(
        </video>
      </div>
      </div>
    </div>
  );
};

export default HowWeDo;
