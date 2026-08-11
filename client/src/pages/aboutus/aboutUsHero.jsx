import React, { useEffect, useState } from "react";
import Navbar from "../../constants/navbar";
import AboutusBanner from "../../assets/images/aboutus.jpg";
import Fonts from "../../utils/fontsconfig";

const AboutUsHero = () => {
    const backgroundImages = [
    "https://res.cloudinary.com/dlzx671ck/image/upload/v1784798922/IMG-20250919-WA0450_rkylal.jpg",
    "https://res.cloudinary.com/dlzx671ck/image/upload/v1784798922/IMG-20250919-WA0444_ixdul6.jpg",
    "https://res.cloudinary.com/dlzx671ck/image/upload/v1784798916/FB_IMG_1751804065936_xoeg2b.jpg",
    "https://res.cloudinary.com/dlzx671ck/image/upload/v1784798915/FB_IMG_1751803959697_hrzool.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const handleInterval = setInterval(() => {
        setCurrentImage((previous) => (previous + 1) % backgroundImages.length);
      }, 5000);
  
      return () => clearInterval(handleInterval);
    }, [backgroundImages.length]);

  return (
    <div className="relative flex flex-1 min-h-screen w-full overflow-hidden bg-black">
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          aria-hidden="true"
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 w-full min-h-screen flex flex-col bg-black/30 p-3">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <h3
            className="bg-white text-black py-2 px-5 rounded-full"
            style={Fonts.poppins.regular}
          >
            WHO WE ARE?
          </h3>

          <div className="flex w-full items-center flex-col">
            <h1
              style={Fonts.poppins.medium}
              className="mt-6 text-4xl md:text-5xl lg:text-7xl text-white leading-tight"
            >
              Empowering Learning Together
            </h1>
            <h3
              style={Fonts.poppins.regular}
              className="text-sm text-white/90 pt-3 leading-relaxed lg:max-w-8/12 text-center"
            >At DOS-NLP, we believe quality education creates limitless opportunities. With experienced instructors, practical learning methods, and personalized guidance, we help students master accounting, computer skills, and international languages including German, Korean, and English. Together, we prepare learners with the confidence and skills needed to achieve academic, professional, and global success.
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
            Reach Out Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
