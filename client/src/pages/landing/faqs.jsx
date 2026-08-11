import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import Fonts from "../../utils/fontsconfig";
import Consultants from "../../assets/images/faqsBanner.jpg";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const qunandanswers = [
    {
      question: "What courses does DOS Multi Services offer?",
      answer:
        "We offer professional training in Accounting, Computer & IT, German Language, Korean Language, and career development programs. Our courses are designed to provide practical knowledge and industry-relevant skills that prepare students for academic, professional, and international opportunities.",
    },
    {
      question: "Who can enroll in your training programs?",
      answer:
        "Our programs are open to students, job seekers, working professionals, and anyone looking to develop new skills. Whether you're preparing for higher education, employment, or international opportunities, we have courses suitable for learners of different backgrounds and experience levels.",
    },
    {
      question: "Do you provide job placement or career guidance?",
      answer:
        "Yes. Along with professional training, we provide career counseling, interview preparation, resume guidance, and job placement support to help students transition confidently into the workforce and achieve their career goals.",
    },
    {
      question:
        "Are your language courses suitable for studying or working abroad?",
      answer:
        "Absolutely. Our German and Korean language programs are designed to help students build strong communication skills required for higher education, employment, and cultural integration in countries where these languages are widely spoken.",
    },
    {
      question: "Why should I choose DOS Multi Services?",
      answer:
        "We focus on practical learning, experienced instructors, modern teaching methods, and personalized career guidance. Our goal is to equip every student with the knowledge, confidence, and professional skills needed to succeed in today's competitive job market.",
    },
    {
      question: "Do you provide certificates after completing the course?",
      answer:
        "Yes. Students who successfully complete their training program receive a course completion certificate. Our certificates recognize the skills and knowledge gained during the program and can strengthen your resume and professional profile when applying for jobs or pursuing further education.",
    },
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="flex flex-col md:flex-row mb-20 items-center justify-between gap-15 px-5 py-20 lg:px-10 lg:py-30 bg-white"
    >
      <div className=" w-full md:w-6/12 flex flex-col items-start gap-8">
        <div className="lg:flex lg:flex-col lg:gap-3 lg:w-full lg:items-start flex flex-col items-center justify-center gap-5">
          <h3
          className="bg-white py-2 px-5 rounded-full border border-gray-200 text-sm lg:text-base"
          style={Fonts.poppins.regular}
        >
          INNOVATIVE SOLUTION
        </h3>

          <div>
            <h1
              style={Fonts.poppins.medium}
              className="text-3xl lg:text-4xl font-bold text-[#FF090C] lg:text-start text-center"
            >
              Build Your Future with Expert Training & Career Guidance
            </h1>

            <p
              className="text-gray-600 mt-2 max-w-md lg:text-start text-center"
              style={Fonts.poppins.regular}
            >
              From professional accounting and IT training to German and Korean
              language courses, we equip you with the practical skills,
              knowledge, and guidance needed to achieve your academic and career
              goals.
            </p>
          </div>
        </div>
        <div className="lg:w-full lg:flex justify-center items-center hidden">
          <img
            src={Consultants}
            alt="FAQ Illustration"
            className="rounded-3xl w-full h-[60vh] object-cover shadow-lg hover:scale-105 transition-transform duration-700 "
          />
        </div>
      </div>
      <div className="w-full md:w-7/12 flex flex-col gap-8">
        {qunandanswers.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleOpen(index)}
            className="bg-[#F8F8F8] rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:bg-[#EBEBEB]"
          >
            <div className="flex justify-between items-start">
              <h3
                className="text-lg md:text-xl font-semibold text-black"
                style={Fonts.poppins.medium}
              >
                {item.question}
              </h3>
              <div className="ml-4 text-black shrink-0">
                {openIndex === index ? (
                  <FaAngleUp className="w-5 h-5" />
                ) : (
                  <FaAngleDown className="w-5 h-5" />
                )}
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-80 mt-3" : "max-h-0"
              }`}
            >
              <p
                className="text-sm md:text-base text-black/60 leading-relaxed whitespace-pre-line"
                style={Fonts.poppins.regular}
              >
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
