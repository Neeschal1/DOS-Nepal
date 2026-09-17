import React, { useRef } from "react";
import { useCountUp } from "react-countup";
import { useInView } from "react-intersection-observer";
import Fonts from "../utils/fontsconfig";

const StatsCard = ({ end, suffix = "", title }) => {
  const countUpRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useCountUp({
    ref: countUpRef,
    end: inView ? end : 0,
    duration: 3,
    separator: ",",
  });

  return (
    <div
      ref={ref}
      className="
        flex flex-col items-center justify-center
        bg-white
        px-6 py-10
        rounded-2xl
        transition-all duration-300
      "
    >
      {/* Animated Number */}
      <div
        className="flex items-baseline text-[#FF090C]"
        style={{
          ...Fonts.poppins.bold,
          fontSize: "50px",
        }}
      >
        <span ref={countUpRef}>0</span>
        <span>{suffix}</span>
      </div>

      {/* Title */}
      <p
        className="mt-3 text-gray-600 text-center"
        style={Fonts.poppins.medium}
      >
        {title}
      </p>
    </div>
  );
};

export default StatsCard;

