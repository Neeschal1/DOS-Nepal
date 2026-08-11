import React, { useEffect, useState } from "react";
import Navbar from "../../constants/navbar";
import Fonts from "../../utils/fontsconfig";
import SuccessStudents1 from "../../assets/images/successStudents1.jpg";
import SuccessStudents2 from "../../assets/images/successStudents2.jpg";
import SuccessStudents3 from "../../assets/images/successStudents3.jpg";

const SuccessStoriesHero = () => {
  const [backgroundImage, setBackgroundImage] = useState(0);

  const SuccessStudentsImages = [
    "https://res.cloudinary.com/dlzx671ck/image/upload/v1784798917/FB_IMG_1751804165780_tic4sn.jpg",
    "https://res.cloudinary.com/dlzx671ck/image/upload/v1784798917/FB_IMG_1751804157640_ykwfyd.jpg",
    "https://res.cloudinary.com/dlzx671ck/image/upload/v1784798919/IMG-20250713-WA0003_biuhxs.jpg",
    "https://res.cloudinary.com/dlzx671ck/image/upload/v1784798914/FB_IMG_1751803765410_judbjz.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prev) => (prev + 1) % SuccessStudentsImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-1 min-h-screen w-full overflow-hidden bg-black">
      {SuccessStudentsImages.map((image, index) => (
        <div
          key={image}
          aria-hidden="true"
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === backgroundImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 w-full min-h-screen flex flex-col bg-black/30 p-3">
        <Navbar textColor="white" bordercolor="white/30" />
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <h3
            className="bg-white text-black py-2 px-5 rounded-full"
            style={Fonts.poppins.regular}
          >
            SUCCESS STORIES
          </h3>

          <div>
            <h1
              style={Fonts.poppins.medium}
              className="mt-6 text-4xl md:text-5xl lg:text-7xl text-white leading-tight"
            >
              Our Student's Success Speaks
              <br className="hidden md:block" />
              Louder Than Words.
            </h1>
            <h3
              style={Fonts.poppins.regular}
              className="text-sm text-white/90 pt-3 leading-relaxed"
            >
              Hear from students who transformed their careers through our
              expert training.
            </h3>
          </div>
          <button
            style={Fonts.poppins.regular}
            onClick={() => {
              document
                .getElementById("stories-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 bg-[#FF090C] text-white px-8 lg:px-10 py-4 rounded-full hover:bg-black transition-all duration-300 cursor-pointer"
          >
            View Success Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesHero;
