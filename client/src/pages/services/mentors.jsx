import React, { useEffect, useState } from "react";
import Fonts from "../../utils/fontsconfig";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Mentors = ({ service }) => {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [mentors, setMentors] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    const mentorsInfo = () => {
      setMentors(service.mentors)
    }
    mentorsInfo()
  }, [mentors])

  return (
    <section className= "py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        <div className="flex flex-col items-center w-full">
          <div className="text-center mb-12">
            <span
              className="bg-white rounded-full px-5 py-2 text-sm"
              style={Fonts.poppins.regular}
            >
              MENTORS
            </span>

            <h2
              className="mt-6 text-3xl lg:text-5xl"
              style={Fonts.poppins.medium}
            >
              Meet Your Mentors
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {mentors?.map((person, index) => (
              <div
                key={index}
                className="group items-center lg:w-full relative w-full max-w-75 h-125 rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src={person.mentorimage}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7 text-white">
                  <p
                    style={Fonts.poppins.regular}
                    className="uppercase tracking-[3px] text-xs lg:text-sm text-gray-300"
                  >
                    {service.title} INSTRUCTOR
                  </p>
                  <h2
                    style={Fonts.poppins.medium}
                    className="text-2xl lg:text-3xl mt-2 transition-all duration-500 lg:group-hover:-translate-y-2"
                  >
                    {person.mentorname}
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
            <button
              onClick={() => navigate("/home/all-experts")}
              style={Fonts.poppins.medium}
              className="bg-black cursor-pointer text-white px-10 py-4 rounded-full hover:bg-[#FF090C] transition-all duration-300"
            >
              View All Mentors
            </button>
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
                      src={selectedExpert.mentorimage}
                      alt={selectedExpert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col overflow-y-auto overscroll-contain max-h-[85vh] min-h-0 [-webkit-overflow-scrolling:touch]">
                    <span
                      style={Fonts.poppins.regular}
                      className="text-[#FF090C] uppercase tracking-[3px] text-sm"
                    >
                      {service.title} INSTRUCTOR
                    </span>
                    <h2
                      style={Fonts.poppins.medium}
                      className="text-4xl lg:text-5xl mt-3 text-black"
                    >
                      {selectedExpert.mentorname}
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
                          <h4
                            style={Fonts.poppins.medium}
                            className="text-black"
                          >
                            Address
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
                          <h4
                            style={Fonts.poppins.medium}
                            className="text-black"
                          >
                            Phone Number
                          </h4>
                          <a
                            href={`tel:${selectedExpert.phone}`}
                            className="text-gray-600 hover:text-[#FF090C]"
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
                          <h4
                            style={Fonts.poppins.medium}
                            className="text-black"
                          >
                            Email Address
                          </h4>
                          <a
                            href={`mailto:${selectedExpert.email}`}
                            className="text-gray-600 hover:text-[#FF090C]"
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
                          href={selectedExpert.facebookurl}
                          target="_blank"
                          rel="noreferrer"
                          className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300"
                        >
                          <FaFacebookF size={18} />
                        </a>
                        <a
                          href={selectedExpert.instagramurl}
                          target="_blank"
                          rel="noreferrer"
                          className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-all duration-300"
                        >
                          <FaInstagram size={18} />
                        </a>
                        <a
                          href={selectedExpert.linkedinurl}
                          target="_blank"
                          rel="noreferrer"
                          className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
                        >
                          <FaLinkedinIn size={18} />
                        </a>
                        <a
                          href={selectedExpert.twitterurl}
                          target="_blank"
                          rel="noreferrer"
                          className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                        >
                          <FaXTwitter size={18} />
                        </a>
                        <a
                          href={selectedExpert.tiktokurl}
                          target="_blank"
                          rel="noreferrer"
                          className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                        >
                          <FaTiktok size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
