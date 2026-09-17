import React from "react";
import Fonts from "../utils/fontsconfig";

/**
 * Heading1 – Page-level heading, large
 */
export const Heading1 = ({ children, className = "", color = "text-gray-900" }) => (
  <h1
    style={Fonts.poppins.bold}
    className={`text-3xl md:text-4xl lg:text-5xl leading-tight ${color} ${className}`}
  >
    {children}
  </h1>
);

/**
 * Heading2 – Section heading
 */
export const Heading2 = ({ children, className = "", color = "text-gray-900" }) => (
  <h2
    style={Fonts.poppins.semiBold}
    className={`text-2xl md:text-3xl leading-tight ${color} ${className}`}
  >
    {children}
  </h2>
);

/**
 * Heading3 – Card / panel heading
 */
export const Heading3 = ({ children, className = "", color = "text-gray-800" }) => (
  <h3
    style={Fonts.poppins.semiBold}
    className={`text-lg md:text-xl leading-snug ${color} ${className}`}
  >
    {children}
  </h3>
);

/**
 * Heading4 – Small section title
 */
export const Heading4 = ({ children, className = "", color = "text-gray-800" }) => (
  <h4
    style={Fonts.poppins.medium}
    className={`text-base md:text-lg leading-snug ${color} ${className}`}
  >
    {children}
  </h4>
);

/**
 * BodyText – Regular paragraph text
 */
export const BodyText = ({ children, className = "", size = "base", color = "text-gray-600" }) => {
  const sizes = { sm: "text-sm", base: "text-base", lg: "text-lg" };
  return (
    <p
      style={Fonts.poppins.regular}
      className={`${sizes[size]} leading-relaxed ${color} ${className}`}
    >
      {children}
    </p>
  );
};

/**
 * Caption – Small helper / label text
 */
export const Caption = ({ children, className = "", color = "text-gray-400" }) => (
  <span
    style={Fonts.poppins.regular}
    className={`text-xs ${color} ${className}`}
  >
    {children}
  </span>
);

/**
 * Label – Form label equivalent
 */
export const Label = ({ children, htmlFor, required = false, className = "" }) => (
  <label
    htmlFor={htmlFor}
    style={Fonts.poppins.medium}
    className={`text-sm text-gray-700 ${className}`}
  >
    {children}
    {required && <span className="text-[#FF090C] ml-1">*</span>}
  </label>
);

/**
 * Badge – Domain / status chip
 */
export const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-gray-100 text-gray-700",
    primary: "bg-red-100 text-[#FF090C]",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
    german: "bg-yellow-100 text-yellow-800",
    korean: "bg-blue-100 text-blue-800",
    accounting: "bg-green-100 text-green-800",
    computer: "bg-purple-100 text-purple-800",
  };
  return (
    <span
      style={Fonts.poppins.medium}
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs
        ${variants[variant] || variants.default}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

/**
 * SectionTitle – Centered section heading with subtitle
 */
export const SectionTitle = ({ title, subtitle, className = "" }) => (
  <div className={`text-center ${className}`}>
    <h2
      style={Fonts.poppins.bold}
      className="text-2xl md:text-3xl text-gray-900"
    >
      {title}
    </h2>
    {subtitle && (
      <p
        style={Fonts.poppins.regular}
        className="text-sm md:text-base text-gray-500 mt-2 max-w-xl mx-auto"
      >
        {subtitle}
      </p>
    )}
  </div>
);

/**
 * ErrorText – Red error message
 */
export const ErrorText = ({ children, className = "" }) => (
  <p
    style={Fonts.poppins.regular}
    className={`text-sm text-red-500 ${className}`}
  >
    {children}
  </p>
);

/**
 * SuccessText – Green success message
 */
export const SuccessText = ({ children, className = "" }) => (
  <p
    style={Fonts.poppins.regular}
    className={`text-sm text-green-600 ${className}`}
  >
    {children}
  </p>
);

