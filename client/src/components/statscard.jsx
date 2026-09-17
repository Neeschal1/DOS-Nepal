import React from "react";
import Fonts from "../utils/fontsconfig";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

/**
 * StatsCard – Animated stat counter card with icon and trend
 */
const StatsCard = ({
  icon,
  value,
  label,
  suffix = "+",
  trend = null,
  trendLabel = "",
  gradient = "from-red-50 to-orange-50",
  iconBg = "bg-red-100",
  iconColor = "text-[#FF090C]",
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`
        bg-gradient-to-br ${gradient}
        rounded-2xl p-5 shadow-sm border border-white
        hover:shadow-md transition-all duration-300
        flex flex-col gap-3
      `}
    >
      {/* Icon */}
      {icon && (
        <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center`}>
          <span className={`${iconColor} text-xl`}>{icon}</span>
        </div>
      )}

      {/* Value */}
      <div>
        <h3
          style={Fonts.poppins.bold}
          className="text-2xl md:text-3xl text-gray-900"
        >
          {inView ? (
            <CountUp end={typeof value === "number" ? value : parseInt(value)} duration={2} suffix={suffix} />
          ) : (
            "0"
          )}
        </h3>
        <p
          style={Fonts.poppins.regular}
          className="text-sm text-gray-500 mt-0.5"
        >
          {label}
        </p>
      </div>

      {/* Trend */}
      {trend !== null && (
        <div className="flex items-center gap-1">
          <span
            style={Fonts.poppins.medium}
            className={`text-xs ${trend >= 0 ? "text-green-600" : "text-red-500"}`}
          >
            {trend >= 0 ? "↑" : "↓"} {Math.abs(trend)}%
          </span>
          {trendLabel && (
            <span style={Fonts.poppins.regular} className="text-xs text-gray-400">
              {trendLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default StatsCard;