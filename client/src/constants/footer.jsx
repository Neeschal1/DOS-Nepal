import { useState, useEffect, useRef } from "react";
import Fonts from "../utils/fontsconfig";
import {
  FaMapMarkerAlt,
  FaMailBulk,
  FaGrin,
  FaMobileAlt,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", url: "/" },
  { name: "Success Stories", url: "/success-stories" },
  { name: "Courses", url: "/available-courses" },
  { name: "Contact us", url: "/contact-us" },
  { name: "About us", url: "/about-us" },
];

const socialLinks = [
  { name: "Facebook", url: "facebook.com/dosmultiservices" },
  { name: "Instagram", url: "https://www.instagram.com/dospatbtl?igsh=MTdiMDkyN3hiZHRneQ==" },
  { name: "TikTok", url: "/" },
  { name: "Twitter", url: "/" },
  { name: "Linkedin", url: "/" },
];

const Contacts = [
  {
    name: "Location",
    value: "Milanchowk, Butwal, Nepal",
    icon: <FaMapMarkerAlt />,
  },
  {
    name: "Email",
    value: "info@dosmultiservices.com",
    icon: <FaMailBulk />,
  },
  {
    name: "Reception",
    value: "+977-9800000000",
    icon: <FaGrin />,
  },
  {
    name: "Phone Number",
    value: "+977-9812345678",
    icon: <FaMobileAlt />,
  },
];

const supportLinks = [
  { name: "Help", url: "/support/help" },
  { name: "Security", url: "/support/security" },
  { name: "Cookies policy", url: "/" },
];

const Footer = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-black text-white w-full">
      <div className="px-4 sm:px-6 md:px-10 lg:px-15 py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
          <div className="flex flex-col gap-2 max-w-full lg:max-w-xl">
            <h2
              style={{
                fontSize: 40,
                lineHeight: "1.2",
                ...Fonts.poppins.medium,
              }}
              className="text-3xl md:text-4xl text-white"
            >
              Stay in loop
            </h2>
            <p
              style={{ ...Fonts.poppins.medium }}
              className="text-base sm:text-lg md:text-xl text-[#B8B8B8]"
            >
              Be the first to get updates on our latest content, special offers,
              and new features.
            </p>
            <p
              style={{ ...Fonts.poppins.regular }}
              className="text-xs text-[#A1A1A1]"
            >
              By signing up, you’re agreeing to receive marketing emails from
              Dos-Nepal. You can unsubscribe at any time.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full lg:w-auto">
            <input
              style={Fonts.poppins.regular}
              className="border border-white bg-transparent text-white px-4 py-2 placeholder:text-white h-12.5 sm:h-13.75 md:h-15 w-full sm:w-87.5 md:w-92"
              placeholder="Enter your email"
              type="text"
            />

            <button className="text-white py-2 px-6 text-sm border border-white whitespace-nowrap hover:bg-red-500 duration-600">
              Subscribe
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:items-start sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-20 mt-16">
          <div>
            <h3
              style={Fonts.poppins.medium}
              className="text-base font-semibold mb-4"
            >
              Quick links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-sm text-[#B8B8B8] hover:text-white duration-600"
                >
                  <a
                    style={{ whiteSpace: "nowrap", ...Fonts.poppins.medium }}
                    href={link.url}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-end lg:items-center flex-col">
            <h3
              style={Fonts.poppins.medium}
              className="text-base font-semibold mb-4"
            >
              Social Media
            </h3>
            <ul className="flex flex-col gap-2 items-end text-right lg:text-center">
              {socialLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-sm text-[#B8B8B8] hover:text-white w-full duration-600"
                >
                  <a
                    style={{ whiteSpace: "nowrap", ...Fonts.poppins.medium }}
                    href={link.url}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-start lg:items-center flex-col">
            <h3
              style={Fonts.poppins.medium}
              className="text-base font-semibold mb-4"
            >
              Contacts
            </h3>
            <ul className="flex flex-col items-start lg:items-center gap-3 w-full">
              {Contacts.map((contact, index) => (
                <li
                  key={index}
                  className="flex items-center cursor-pointer justify-center gap-3"
                >
                  <button
                    onClick={() =>
                      setSelectedContact(
                        selectedContact === index ? null : index,
                      )
                    }
                    className="text-sm cursor-pointer text-[#B8B8B8] hover:text-white duration-300"
                    style={Fonts.poppins.medium}
                  >
                    {contact.name}
                  </button>

                  {selectedContact === index && (
                    <div className="flex items-center gap-2 animate-in fade-in duration-300">
                      <span className="text-white text-lg">{contact.icon}</span>

                      <span
                        style={Fonts.poppins.regular}
                        className="text-[#F2F1FF] text-sm"
                      >
                        {contact.value}
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-end flex-col">
            <h3
              style={Fonts.poppins.medium}
              className="text-base font-semibold mb-4"
            >
              Support
            </h3>
            <ul className="flex text-right flex-col gap-2">
              {supportLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-sm text-[#B8B8B8] hover:text-white duration-600"
                >
                  <a
                    style={{ whiteSpace: "nowrap", ...Fonts.poppins.medium }}
                    href={link.url}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-[#2C2C2C] mt-12 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center text-[#B8B8B8] text-sm gap-4 text-center">
          <p className="text-white">
            <span style={Fonts.poppins.medium} className="font-semibold">
              © 2026 DOS-NEPAL
            </span>{" "}
            All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <a
              style={Fonts.poppins.medium}
              className="text-[#b8b8b8] hover:text-white duration-600"
              href="#"
            >
              Terms & Conditions
            </a>
            <a
              style={Fonts.poppins.medium}
              className="text-[#b8b8b8] hover:text-white duration-600"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              style={Fonts.poppins.medium}
              className="text-[#b8b8b8] hover:text-white duration-600"
              href="#"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
