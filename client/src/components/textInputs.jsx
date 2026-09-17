import React, { useState } from "react";
import Fonts from "../utils/fontsconfig";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";

/**
 * TextInput – Standard labeled text input
 */
export const TextInput = ({
  label,
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder = "",
  type = "text",
  error = "",
  helperText = "",
  required = false,
  disabled = false,
  icon = null,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          style={Fonts.poppins.medium}
          className="text-sm text-gray-700"
        >
          {label}
          {required && <span className="text-[#FF090C] ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          style={Fonts.poppins.regular}
          className={`
            w-full rounded-xl border px-4 py-3 outline-none text-sm text-gray-800
            transition-all duration-200
            ${icon ? "pl-10" : ""}
            ${error
              ? "border-red-400 focus:ring-2 focus:ring-red-400 bg-red-50"
              : "border-gray-300 focus:ring-2 focus:ring-[#FF090C] focus:border-transparent"
            }
            ${disabled ? "bg-gray-100 cursor-not-allowed text-gray-400" : "bg-white"}
          `}
        />
      </div>
      {error && (
        <p style={Fonts.poppins.regular} className="text-xs text-red-500 mt-0.5">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p style={Fonts.poppins.regular} className="text-xs text-gray-400 mt-0.5">
          {helperText}
        </p>
      )}
    </div>
  );
};

/**
 * PasswordInput – Input with show/hide toggle
 */
export const PasswordInput = ({
  label,
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder = "Enter password",
  error = "",
  helperText = "",
  required = false,
  disabled = false,
  inputRef = null,
  className = "",
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          style={Fonts.poppins.medium}
          className="text-sm text-gray-700"
        >
          {label}
          {required && <span className="text-[#FF090C] ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          id={name}
          name={name}
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          ref={inputRef}
          style={Fonts.poppins.regular}
          className={`
            w-full rounded-xl border px-4 py-3 pr-11 outline-none text-sm text-gray-800
            transition-all duration-200
            ${error
              ? "border-red-400 focus:ring-2 focus:ring-red-400 bg-red-50"
              : "border-gray-300 focus:ring-2 focus:ring-[#FF090C] focus:border-transparent"
            }
            ${disabled ? "bg-gray-100 cursor-not-allowed text-gray-400" : "bg-white"}
          `}
        />
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#FF090C] transition-colors duration-200 cursor-pointer"
        >
          {show ? <IoEyeOffSharp size={20} /> : <IoEye size={20} />}
        </button>
      </div>
      {error && (
        <p style={Fonts.poppins.regular} className="text-xs text-red-500 mt-0.5">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p style={Fonts.poppins.regular} className="text-xs text-gray-400 mt-0.5">
          {helperText}
        </p>
      )}
    </div>
  );
};

/**
 * SelectInput – Styled dropdown select
 */
export const SelectInput = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  error = "",
  helperText = "",
  required = false,
  disabled = false,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          style={Fonts.poppins.medium}
          className="text-sm text-gray-700"
        >
          {label}
          {required && <span className="text-[#FF090C] ml-1">*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        style={Fonts.poppins.regular}
        className={`
          w-full rounded-xl border px-4 py-3 outline-none text-sm text-gray-800 appearance-none
          transition-all duration-200 bg-white cursor-pointer
          ${error
            ? "border-red-400 focus:ring-2 focus:ring-red-400"
            : "border-gray-300 focus:ring-2 focus:ring-[#FF090C] focus:border-transparent"
          }
          ${disabled ? "bg-gray-100 cursor-not-allowed text-gray-400" : ""}
        `}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p style={Fonts.poppins.regular} className="text-xs text-red-500 mt-0.5">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p style={Fonts.poppins.regular} className="text-xs text-gray-400 mt-0.5">
          {helperText}
        </p>
      )}
    </div>
  );
};

/**
 * PhoneInput – Phone number input with country prefix visual
 */
export const PhoneInput = ({
  label,
  name,
  value,
  onChange,
  error = "",
  helperText = "",
  required = false,
  disabled = false,
  prefix = "+977",
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          style={Fonts.poppins.medium}
          className="text-sm text-gray-700"
        >
          {label}
          {required && <span className="text-[#FF090C] ml-1">*</span>}
        </label>
      )}
      <div className="flex">
        <div
          style={Fonts.poppins.regular}
          className={`
            flex items-center px-3 rounded-l-xl border border-r-0 border-gray-300 bg-gray-50
            text-sm text-gray-600 select-none
            ${error ? "border-red-400" : ""}
          `}
        >
          {prefix}
        </div>
        <input
          id={name}
          name={name}
          type="tel"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          placeholder="98XXXXXXXX"
          style={Fonts.poppins.regular}
          className={`
            flex-1 rounded-r-xl border px-4 py-3 outline-none text-sm text-gray-800
            transition-all duration-200
            ${error
              ? "border-red-400 focus:ring-2 focus:ring-red-400 bg-red-50"
              : "border-gray-300 focus:ring-2 focus:ring-[#FF090C] focus:border-transparent"
            }
            ${disabled ? "bg-gray-100 cursor-not-allowed text-gray-400" : "bg-white"}
          `}
        />
      </div>
      {error && (
        <p style={Fonts.poppins.regular} className="text-xs text-red-500 mt-0.5">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p style={Fonts.poppins.regular} className="text-xs text-gray-400 mt-0.5">
          {helperText}
        </p>
      )}
    </div>
  );
};

/**
 * TextArea – Multi-line text input
 */
export const TextArea = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  error = "",
  helperText = "",
  required = false,
  disabled = false,
  rows = 4,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          style={Fonts.poppins.medium}
          className="text-sm text-gray-700"
        >
          {label}
          {required && <span className="text-[#FF090C] ml-1">*</span>}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        rows={rows}
        style={Fonts.poppins.regular}
        className={`
          w-full rounded-xl border px-4 py-3 outline-none text-sm text-gray-800 resize-none
          transition-all duration-200
          ${error
            ? "border-red-400 focus:ring-2 focus:ring-red-400 bg-red-50"
            : "border-gray-300 focus:ring-2 focus:ring-[#FF090C] focus:border-transparent"
          }
          ${disabled ? "bg-gray-100 cursor-not-allowed text-gray-400" : "bg-white"}
        `}
      />
      {error && (
        <p style={Fonts.poppins.regular} className="text-xs text-red-500 mt-0.5">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p style={Fonts.poppins.regular} className="text-xs text-gray-400 mt-0.5">
          {helperText}
        </p>
      )}
    </div>
  );
};

/**
 * OTPInput – 6-box OTP input
 */
export const OTPInput = ({ value = "", onChange, error = "" }) => {
  const digits = Array(6).fill("");
  const filled = value.split("").slice(0, 6);

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/\D/g, "").slice(-1);
    const arr = value.split("").slice(0, 6);
    arr[index] = val;
    const newVal = arr.join("").slice(0, 6);
    onChange(newVal);
    // Move to next
    if (val && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !filled[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    onChange(pasted);
    const focusIdx = Math.min(pasted.length, 5);
    document.getElementById(`otp-${focusIdx}`)?.focus();
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-3" onPaste={handlePaste}>
        {digits.map((_, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={filled[index] || ""}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={Fonts.poppins.bold}
            className={`
              w-11 h-12 text-center text-lg rounded-xl border-2 outline-none
              transition-all duration-200
              ${error
                ? "border-red-400 bg-red-50 text-red-600"
                : filled[index]
                  ? "border-[#FF090C] bg-red-50 text-[#FF090C]"
                  : "border-gray-300 bg-white text-gray-800 focus:border-[#FF090C] focus:ring-2 focus:ring-red-100"
              }
            `}
          />
        ))}
      </div>
      {error && (
        <p style={Fonts.poppins.regular} className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

