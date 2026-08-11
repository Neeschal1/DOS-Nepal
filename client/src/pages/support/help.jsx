import React, { useState } from "react";
import Navbar from "../../constants/navbar";
import Fonts from "../../utils/fontsconfig";
import HelpBackground from "../../assets/images/help.jpg";
import Consultants from "../../assets/images/consultants.jpg"
import {
  FiChevronDown,
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiBookOpen,
  FiCreditCard,
  FiUser,
  FiSettings,
} from "react-icons/fi";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import Footer from "../../constants/footer";

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I enroll in a course?",
      answer:
        "Choose the course you are interested in and contact our team through the enrollment form, phone, or email. Our team will guide you through the registration process.",
    },
    {
      question: "Do you provide online classes?",
      answer:
        "Yes. Selected courses are available through online and physical learning modes. Please check the individual course details for availability.",
    },
    {
      question: "How can I contact a consultant?",
      answer:
        "You can contact our consultancy team through phone, email, contact forms, or by visiting our office during business hours.",
    },
    {
      question: "What payment methods are available?",
      answer:
        "Available payment methods depend on the course or service. Our team will provide the relevant payment information during enrollment.",
    },
    {
      question: "Can I get a refund after enrollment?",
      answer:
        "Refund and cancellation eligibility depends on the specific course or service. Please contact our support team for detailed information.",
    },
    {
      question: "What payment methods are available?",
      answer:
        "Available payment methods depend on the course or service. Our team will provide the relevant payment information during enrollment.",
    }
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const supportCards = [
    {
      icon: <FiBookOpen />,
      title: "Courses & Training",
      description:
        "Get help choosing courses, understanding schedules, eligibility, and learning modes.",
    },
    {
      icon: <FiUser />,
      title: "Registration",
      description:
        "Need help creating an account, registering for a course, or submitting your application?",
    },
    {
      icon: <FiCreditCard />,
      title: "Payments",
      description:
        "Find assistance with payments, enrollment fees, invoices, cancellations, and refunds.",
    },
    {
      icon: <FiSettings />,
      title: "Technical Support",
      description:
        "Having trouble with the website, forms, login, or other technical features?",
    },
  ];

  return (
    <div className="bg-white">
      <div className="relative flex flex-1 min-h-screen w-full overflow-hidden bg-black">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{ backgroundImage: `url(${HelpBackground})` }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 w-full min-h-screen flex flex-col bg-black/30 p-3">
          <Navbar textColor="white" bordercolor="white/30" />
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <h3
              className="bg-white text-black py-2 px-5 rounded-full"
              style={Fonts.poppins.regular}
            >
              HELP AND SUPPORT
            </h3>

            <div className="flex w-full items-center flex-col">
              <h1
                style={Fonts.poppins.medium}
                className="mt-6 text-4xl md:text-5xl lg:text-7xl text-white leading-tight"
              >
                Help You Move Forward.
              </h1>
              <h3
                style={Fonts.poppins.regular}
                className="text-sm text-white/90 pt-3 leading-relaxed lg:max-w-8/12 text-center"
              >
                Find answers to common questions, get assistance with courses
                and consultancy services, or connect directly with our support
                team.
              </h3>
            </div>
            <button
              style={Fonts.poppins.regular}
              onClick={() =>
                document
                  .getElementById("help-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-8 bg-[#FF090C] text-white px-8 lg:px-10 py-4 rounded-full hover:bg-black transition-all duration-300 cursor-pointer"
            >
              Find Help
            </button>
          </div>
        </div>
      </div>

      <section id="help-section" className="px-5 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p
              style={Fonts.poppins.medium}
              className="text-sm uppercase tracking-[0.25em] text-[#FF090C]"
            >
              Support Center
            </p>

            <h2
              style={Fonts.poppins.medium}
              className="mt-3 text-3xl text-gray-900 md:text-4xl"
            >
              How Can We Help?
            </h2>

            <p
              style={Fonts.poppins.regular}
              className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500"
            >
              Whether you are exploring our courses or already working with us,
              our support team is here to assist you.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportCards.map((card) => (
              <div
                key={card.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-xl text-[#FF090C] transition-all duration-300 group-hover:bg-[#FF090C] group-hover:text-white">
                  {card.icon}
                </div>

                <h3
                  style={Fonts.poppins.medium}
                  className="mt-6 text-lg text-gray-900"
                >
                  {card.title}
                </h3>

                <p
                  style={Fonts.poppins.regular}
                  className="mt-3 text-sm leading-6 text-gray-500"
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row mb-20 items-center justify-between gap-15 px-5 py-20 lg:px-10 lg:py-30 bg-white">
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
                From professional accounting and IT training to German and
                Korean language courses, we equip you with the practical skills,
                knowledge, and guidance needed to achieve your academic and
                career goals.
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
          {faqs.map((item, index) => (
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

      <section className="px-5 py-20 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-black px-8 py-12 md:px-14">
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <h2
                style={Fonts.poppins.medium}
                className="text-2xl text-white md:text-3xl"
              >
                Still Need Help?
              </h2>

              <p
                style={Fonts.poppins.regular}
                className="mt-3 max-w-xl text-sm leading-6 text-white/80"
              >
                Our team is ready to answer your questions and help you find the
                right solution.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white">
                <FiMail />
                <p
                style={Fonts.poppins.regular}
                className="max-w-xl text-sm leading-6 text-white/80"
              >Mail us at: sundar@dosnpl.com</p>   
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white">
                <FiPhone />
                <p
                style={Fonts.poppins.regular}
                className="max-w-xl text-sm leading-6 text-white/80"
              >Call us on: +977 9867507700</p>   
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Help;
