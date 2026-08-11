import React, { useEffect, useState } from "react";
import Fonts from "../../utils/fontsconfig";
import { redirect } from "react-router-dom";

const Advertisments = ({ service }) => {
  const [ads, setAds] = useState([])

  useEffect(()=>{
    setAds(service.advertisements)
  }, [ads])

  return (
    <div className="flex items-center justify-center flex-col gap-10 bg-white py-20 px-4 sm:px-6 lg:px-10">
      <div className="flex flex-col items-center text-center">
        <span
          className="border border-gray-200 bg-white rounded-full px-5 py-2 text-sm"
          style={Fonts.poppins.regular}
        >
          ADVERTISMENTS
        </span>

        <h2
          className="mt-6 text-3xl lg:text-5xl text-black"
          style={Fonts.poppins.medium}
        >
          Discover Our Current & Upcoming Training Batches
        </h2>

        <p
          className="mt-4 text-gray-600 max-w-5xl leading-8"
          style={Fonts.poppins.regular}
        >
          Stay informed about our latest admissions, upcoming class schedules,
          and special training programs. Explore detailed information on course
          durations, batch timings, available seats, enrollment deadlines, and
          exclusive offers. Whether you're planning to begin your learning
          journey today or preparing for the next intake, find the perfect batch
          that matches your goals and take the first step toward building a
          successful career.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
        {ads.map((ad, index) => (
          <button
            key={index}
            className="group items-center cursor-pointer lg:w-full relative w-full max-w-75 h-125 rounded-3xl overflow-hidden shadow-lg hover:max-w-80 hover:h-130 duration-500"
            onClick={() => {
              window.open(ad.redirect, "_blank");
            }}
          >
            <img src={ad.thumbnail} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Advertisments;
