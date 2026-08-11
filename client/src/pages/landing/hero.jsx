import React, { useEffect, useState } from "react";
import Navbar from "../../constants/navbar";
import Fonts from "../../utils/fontsconfig";
import Users from "../../assets/images/users.png";

const Hero = () => {
  const backgroundImages = [
    "https://res.cloudinary.com/ffzuvvv6/image/upload/v1786442294/img.jpg",
    "https://res.cloudinary.com/ffzuvvv6/image/upload/v1786442291/FB_IMG_1751804385961.jpg",
    "https://res.cloudinary.com/ffzuvvv6/image/upload/v1786442300/IMG-20251212-WA0121.jpg",
    "https://res.cloudinary.com/ffzuvvv6/image/upload/v1786442288/FB_IMG_1751804157640.jpg",
    "https://res.cloudinary.com/ffzuvvv6/image/upload/v1786442288/20260322_163538.jpg",
    "https://res.cloudinary.com/ffzuvvv6/image/upload/v1786442304/IMG-20260211-WA0022.jpg"
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

        {/* ------------------- Mobile------------------- */}
        <div className="flex md:hidden flex-1 flex-col">
          <div className="flex-1 flex items-center justify-start pt-8 pb-6">
            <div className="flex flex-col gap-4">
              <div>
                <h1
                  style={Fonts.poppins.medium}
                  className="text-4xl leading-tight text-white"
                >
                  Learn Today,
                  <br />
                  Earn Tomorrow
                </h1>
                <h3
                  style={Fonts.poppins.regular}
                  className="text-sm text-white/90 pt-3 leading-relaxed"
                >
                  Professional Accounting Training | German Language | Korean
                  Language | IT Training | Job Placement Services
                </h3>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                {/* <button
                  style={Fonts.poppins.regular}
                  className="w-full bg-[#FF090C] text-white px-6 py-3 rounded-full active:bg-black duration-300 cursor-pointer text-sm"
                >
                  Enroll your Admission
                </button> */}
                <button
                  style={Fonts.poppins.regular}
                  onClick={() => {
                    document
                      .getElementById("leadingExperts")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full border border-[#F2F1FF] text-white px-6 py-3 rounded-full active:bg-black active:border-black duration-300 cursor-pointer text-sm"
                >
                  Get Free Career Counselling
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-4">
            <div className="py-4 px-5 bg-black/20 backdrop-blur-xs rounded-2xl border-t border-r border-white/30">
              <h3
                style={Fonts.poppins.light}
                className="text-white text-xs leading-relaxed"
              >
                We help you build practical skills that open doors to global
                career opportunities, from accounting and IT to German and
                Korean language courses.
              </h3>
            </div>
          </div>
        </div>

        {/* ------------------- Tablets------------------- */}
        <div className="hidden md:flex xl:hidden flex-1 flex-col">
          {/* Center contents */}
          <div className="flex-1 flex items-center justify-start ml-2">
            <div className="flex flex-col gap-5 max-w-xl">
              <div>
                <h1
                  style={Fonts.poppins.medium}
                  className="text-5xl leading-tight text-white"
                >
                  Learn Today,
                  <br />
                  Earn Tomorrow
                </h1>
                <h3
                  style={Fonts.poppins.regular}
                  className="text-base text-white pt-3"
                >
                  Professional Accounting Training | German Language | Korean
                  Language | IT Training | Job Placement Services
                </h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {/* <button
                  style={Fonts.poppins.regular}
                  className="bg-[#FF090C] text-white px-8 py-3 rounded-4xl hover:bg-black duration-300 cursor-pointer"
                >
                  Enroll your Admission
                </button> */}
                <button
                  onClick={() => {
                    document
                      .getElementById("leadingExperts")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={Fonts.poppins.regular}
                  className="border border-[#F2F1FF] hover:border-black text-white px-8 py-3 rounded-4xl hover:bg-black duration-300 cursor-pointer"
                >
                  Get Free Career Counselling
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-6 px-2">
            <div className="flex flex-row items-center gap-3 px-5 py-2.5 rounded-2xl border-t border-l border-white/30 backdrop-blur-xs bg-black/15">
              <img
                className="h-11 w-28 object-contain"
                src={Users}
                alt="Users"
              />
              <h3 style={Fonts.poppins.light} className="text-white text-sm">
                Trusted by 10000+ users
              </h3>
            </div>
            <div className="py-5 px-7 bg-black/15 backdrop-blur-xs rounded-3xl border-t border-r border-white/30 max-w-md">
              <h3
                style={Fonts.poppins.light}
                className="text-white text-sm text-left sm:text-right leading-relaxed"
              >
                We help you build practical skills that open doors to global
                career opportunities. From professional accounting and IT
                training to German and Korean language courses, we provide
                industry-focused education and job placement support.
              </h3>
            </div>
          </div>
        </div>

        {/* ------------------- Desktops/PC------------------- */}
        <div className="hidden xl:flex flex-1 flex-col">
          {/* Center contents */}
          <div className="flex-1 flex items-center justify-start ml-5">
            <div className="flex flex-col gap-5">
              <div>
                <h1
                  style={Fonts.poppins.medium}
                  className="text-7xl text-white"
                >
                  Learn Today,
                  <br />
                  Earn Tomorrow
                </h1>
                <h3
                  style={Fonts.poppins.regular}
                  className="text-lg text-white pt-3"
                >
                  Professional Accounting Training | German Language | Korean
                  Language | IT Training | Job Placement Services
                </h3>
              </div>

              <div className="flex gap-5">
                {/* <button
                  style={Fonts.poppins.regular}
                  className="bg-[#FF090C] text-white px-10 py-4 rounded-4xl hover:bg-[#000000] duration-300 cursor-pointer"
                >
                  Enroll your Admission
                </button> */}
                {/* <button
                  style={Fonts.poppins.regular}
                  onClick={() => {
                    document
                      .getElementById("leadingExperts")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="border border-[#F2F1FF] hover:border-black text-white px-10 py-4 rounded-4xl hover:bg-[#000000] duration-300 cursor-pointer"
                >
                  Get Free Career Counselling
                </button> */}
                <button
                  style={Fonts.poppins.regular}
                  onClick={() => {
                    document
                      .getElementById("leadingExperts")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-[#FF090C] text-white px-10 py-4 rounded-4xl hover:bg-[#000000] duration-300 cursor-pointer"
                >
                  Get Free Career Counselling
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-end justify-between pb-8 px-4">
            <div className="flex flex-row items-center gap-3 px-6 py-3 rounded-2xl border-t border-l border-white/30 backdrop-blur-xs bg-black/15">
              <img className="h-15 w-38" src={Users} alt="Users" />
              <h3 style={Fonts.poppins.light} className="text-white">
                Trusted by 10000+ users
              </h3>
            </div>
            <div className="py-6 px-10 bg-black/15 backdrop-blur-xs rounded-3xl border-t border-r border-white/30 max-w-2xl">
              <h3 style={Fonts.poppins.light} className="text-white text-right">
                We help you build practical skills that open doors to global
                career opportunities.
                <br /> From professional accounting and IT training to German
                and Korean
                <br /> language courses, we provide industry-focused education
                and job
                <br /> placement support to help you achieve your career goals.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
