import React from "react";
import Fonts from "../utils/fontsconfig";

/**
 * PrimaryButton – Red filled, full or auto width
 */
export const PrimaryButton = ({
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  size = "md",
  type = "button",
  className = "",
}) => {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={Fonts.poppins.regular}
      className={`
        ${fullWidth ? "w-full" : ""}
        ${sizes[size]}
        bg-[#FF090C] text-white rounded-full
        hover:bg-black active:scale-95
        transition-all duration-300 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

/**
 * SecondaryButton – Dark filled button
 */
export const SecondaryButton = ({
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  size = "md",
  type = "button",
  className = "",
}) => {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={Fonts.poppins.regular}
      className={`
        ${fullWidth ? "w-full" : ""}
        ${sizes[size]}
        bg-gray-900 text-white rounded-full
        hover:bg-gray-700 active:scale-95
        transition-all duration-300 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

/**
 * OutlineButton – Transparent with border
 */
export const OutlineButton = ({
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  size = "md",
  type = "button",
  className = "",
}) => {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={Fonts.poppins.regular}
      className={`
        ${fullWidth ? "w-full" : ""}
        ${sizes[size]}
        border border-gray-300 text-gray-700 rounded-full bg-transparent
        hover:border-[#FF090C] hover:text-[#FF090C] active:scale-95
        transition-all duration-300 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

/**
 * DangerButton – Outlined red, for destructive actions
 */
export const DangerButton = ({
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  size = "md",
  type = "button",
  className = "",
}) => {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={Fonts.poppins.regular}
      className={`
        ${fullWidth ? "w-full" : ""}
        ${sizes[size]}
        border border-red-500 text-red-500 rounded-full bg-transparent
        hover:bg-red-500 hover:text-white active:scale-95
        transition-all duration-300 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

/**
 * IconButton – Circular icon button
 */
export const IconButton = ({
  children,
  onClick,
  disabled = false,
  variant = "ghost",
  size = "md",
  type = "button",
  className = "",
}) => {
  const sizes = { sm: "w-8 h-8", md: "w-10 h-10", lg: "w-12 h-12" };
  const variants = {
    ghost: "bg-transparent hover:bg-gray-100 text-gray-600",
    filled: "bg-[#FF090C] hover:bg-black text-white",
    outline: "border border-gray-300 hover:border-[#FF090C] hover:text-[#FF090C] text-gray-600",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${sizes[size]} ${variants[variant]}
        flex items-center justify-center rounded-full
        active:scale-95 transition-all duration-200 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

/**
 * LoadingButton – Shows spinner when loading
 */
export const LoadingButton = ({
  children,
  loading = false,
  onClick,
  fullWidth = false,
  size = "md",
  type = "button",
  className = "",
}) => {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };
  return (
    <button
      type={type}
      onClick={!loading ? onClick : undefined}
      disabled={loading}
      style={Fonts.poppins.regular}
      className={`
        ${fullWidth ? "w-full" : ""}
        ${sizes[size]}
        bg-[#FF090C] text-white rounded-full
        hover:bg-black active:scale-95
        transition-all duration-300 cursor-pointer
        disabled:opacity-70 disabled:cursor-not-allowed
        flex items-center justify-center gap-2
        ${className}
      `}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};

