import { useRef } from "react";
import { useCountUp } from "react-countup";
import Fonts from "../utils/fontsconfig";

const StatsCard = ({ end, suffix = "", title }) => {
  const countUpRef = useRef(null);

  useCountUp({
    ref: countUpRef,
    end,
    duration: 3,
    separator: ",",
  });

  return (
    <div className="flex flex-col items-center justify-center bg-white px-10 py-20">
      <div
        className="flex items-baseline text-[#FF090C]"
        style={{
          ...Fonts.poppins.bold,
          fontSize: "50px",
        }}
      >
        <span ref={countUpRef}></span>
        <span>{suffix}</span>
      </div>

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