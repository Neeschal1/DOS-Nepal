import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
  FaEnvelope, 
} from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import Person1 from "../../assets/images/MrSundarPandey.jpg";
import Person2 from "../../assets/images/chabilaldumre.jpg"
import Person3 from "../../assets/images/NischalPokharel.jpg";
import Fonts from "../../utils/fontsconfig";
import { useNavigate } from "react-router-dom";

const OurPeople = ({colorState}) => {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const navigate = useNavigate()
  const ourPerson = [
    {
      id: 1,
      image: Person1,
      name: "Mr. Sundar Pandey",
      role: "MD",
      description:
        "Specializes in financial accounting, taxation, and practical bookkeeping with years of experience training aspiring accounting professionals.",
      address: "Milanchowk, Butwal, Nepal",
      phone: "+977 9867507700",
      email: "sundar@dosnpl.com",
      facebook: "https://facebook.com/sushantkc",
      instagram: "https://instagram.com/sushantkc",
      linkedin: "https://linkedin.com/in/sushantkc",
      portfolioState: false,
      twitter: "https://twitter.com/sushantkc",
    },
    {
      id: 2,
      image: Person2,
      name: "Mr. Chabi Lal Dumre",
      role: "MD",
      description: "10+ years Exp as Finance Controller",
      address: "Milanchowk, Butwal, Nepal",
      phone: "+977 9857058707",
      email: "sajjan@dosmultiservices.com",
      facebook: "https://facebook.com/sajjanraj",
      instagram: "https://instagram.com/sajjanraj",
      linkedin: "https://linkedin.com/in/sajjanraj",
      portfolioState: false,
      twitter: "https://twitter.com/sajjanraj",
    },
    {
      id: 3,
      image: Person3,
      name: "Nischal Pokharel",
      role: "IT Engineer",
      description:
        "Generative AI Developer with expertise in full-stack web/mobile applications utilizing Django REST APIs and modern frontend technologies, backed by a strong foundation in Python and JavaScript.",
      address: "Kapilvastu-09, Kapilvastu, Nepal",
      phone: "+977 9747397641 / +977 9867418552",
      email: "neeschalpok04@gmail.com",
      facebook: "https://www.facebook.com/nischal.pokharel.598234",
      instagram: "https://www.instagram.com/nees_c_hal/",
      linkedin: "https://www.linkedin.com/in/nischal-pokhrel-6543632b7/",
      twitter: "https://x.com/nischal45898",
      portfolioState: true,
      portfolio: "https://creanees.vercel.app/"
    }
  ];

  return (
    <section className={`py-12 lg:py-20 bg-${colorState ? "#colorState" : "white"} lg:-mt-20 -mt-20`}>
      <div
        id="leadingExperts"
        className="flex flex-col items-center text-center px-4"
      >
        <h3
          className="bg-white py-2 px-5 rounded-full border border-gray-200 text-sm lg:text-base"
          style={Fonts.poppins.regular}
        >
          MEET OUR PEOPLE
        </h3>

        <div className="flex w-full items-center justify-center flex-col">
          <h1
            style={Fonts.poppins.medium}
            className="text-3xl lg:text-4xl xl:text-5xl text-black mt-4"
          >
            Leading Experts
          </h1>
          <p
            className="text-gray-600 mt-2 w-[80%] lg:text-center text-center align-center"
            style={Fonts.poppins.regular}
          >
            From professional accounting and IT training to German and Korean
            language courses, we equip you with the practical skills, knowledge,
            and guidance needed to achieve your academic and career goals.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 lg:items-center lg:w-full sm:px-6 lg:px-8 mt-12 lg:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-full lg:items-center xl:grid-cols-3 gap-6 lg:gap-8">
          {ourPerson.map((person) => (
            <div
              key={person.id}
              className="group relative h-105 sm:h-115 lg:h-125 rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={person.image}
                alt={person.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7 text-white">
                <p
                  style={Fonts.poppins.regular}
                  className="uppercase tracking-[3px] text-xs lg:text-sm text-gray-300"
                >
                  {person.role}
                </p>
                <h2
                  style={Fonts.poppins.medium}
                  className="text-2xl lg:text-3xl mt-2 transition-all duration-500 lg:group-hover:-translate-y-2"
                >
                  {person.name}
                </h2>
                <button
                  onClick={() => {
                    setSelectedExpert(person);
                  }}
                  style={Fonts.poppins.medium}
                  className="mt-5 bg-[#FF090C] hover:bg-white hover:text-black px-6 py-3 rounded-full transition-all duration-500 cursor-pointer opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-6 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"
                >
                  Contact →
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-14">
          {colorState ? null : <button
            onClick={() => navigate("/home/all-experts")}
            style={Fonts.poppins.medium}
            className="bg-black cursor-pointer text-white px-10 py-4 rounded-full hover:bg-[#FF090C] transition-all duration-300"
          >
            View All Experts and Staffs
          </button>}
        </div>
        {selectedExpert && (
          <div
            onClick={() => setSelectedExpert(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-5"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedExpert(null)}
                className="absolute cursor-pointer top-5 right-5 z-20 h-12 w-12 rounded-full bg-white text-3xl leading-none hover:bg-[#FF090C] hover:text-white transition"
              >
                ×
              </button>
              <div className="grid lg:grid-cols-2 max-h-[85vh] min-h-0">
                <div className="h-64 lg:h-full shrink-0">
                  <img
                    src={selectedExpert.image}
                    alt={selectedExpert.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col overflow-y-auto overscroll-contain max-h-[85vh] min-h-0 [-webkit-overflow-scrolling:touch]">
                  <span
                    style={Fonts.poppins.regular}
                    className="text-[#FF090C] uppercase tracking-[3px] text-sm"
                  >
                    {selectedExpert.role}
                  </span>
                  <h2
                    style={Fonts.poppins.medium}
                    className="text-4xl lg:text-5xl mt-3 text-black"
                  >
                    {selectedExpert.name}
                  </h2>

                  <p
                    style={Fonts.poppins.regular}
                    className="text-gray-600 leading-8 mt-6"
                  >
                    {selectedExpert.description}
                  </p>

                  <div className="mt-8 space-y-5 flex flex-col">
                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-full bg-[#FF090C]/10 flex items-center justify-center shrink-0">
                        <FaLocationDot className="text-[#FF090C]" />
                      </div>
                      <div>
                        <h4 style={Fonts.poppins.medium} className="text-black">
                          Office Address
                        </h4>
                        <p
                          style={Fonts.poppins.regular}
                          className="text-gray-600"
                        >
                          {selectedExpert.address}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-full bg-[#FF090C]/10 flex items-center justify-center shrink-0">
                        <FaPhone className="text-[#FF090C]" />
                      </div>
                      <div>
                        <h4 style={Fonts.poppins.medium} className="text-black">
                          Phone Number
                        </h4>
                        <a
                          href={`tel:${selectedExpert.phone}`}
                          className="text-gray-600"
                          style={Fonts.poppins.regular}
                        >
                          {selectedExpert.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-full bg-[#FF090C]/10 flex items-center justify-center shrink-0">
                        <FaEnvelope className="text-[#FF090C]" />
                      </div>
                      <div>
                        <h4 style={Fonts.poppins.medium} className="text-black">
                          Email Address
                        </h4>
                        <a
                          href={`mailto:${selectedExpert.email}`}
                          className="text-gray-600"
                          style={Fonts.poppins.regular}
                        >
                          {selectedExpert.email}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <h3
                      style={Fonts.poppins.medium}
                      className="text-xl text-black mb-5"
                    >
                      Connect with {selectedExpert.name}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={selectedExpert.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300"
                      >
                        <FaFacebookF size={18} />
                      </a>
                      <a
                        href={selectedExpert.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-all duration-300"
                      >
                        <FaInstagram size={18} />
                      </a>
                      <a
                        href={selectedExpert.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
                      >
                        <FaLinkedinIn size={18} />
                      </a>
                      <a
                        href={selectedExpert.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                      >
                        <FaXTwitter size={18} />
                      </a>
                      {selectedExpert.portfolioState ? <a
                        href={selectedExpert.portfolio }
                        target="_blank"
                        rel="noreferrer"
                        className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                      >
                        <IoIosLink  size={18} />
                      </a> : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurPeople;
