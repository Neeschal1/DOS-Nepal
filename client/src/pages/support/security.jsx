import React from "react";
import Navbar from "../../constants/navbar";
import Fonts from "../../utils/fontsconfig";
import SecurityBackground from "../../assets/images/security.jpg";
import SecurityImage from "../../assets/images/securityInfo.jpg";
import Footer from "../../constants/footer";

import {
  FiShield,
  FiLock,
  FiDatabase,
  FiUserCheck,
  FiCheckCircle,
  FiAlertTriangle,
  FiMail,
  FiPhone,
  FiEye,
} from "react-icons/fi";

const Security = () => {
  const securityFeatures = [
    {
      icon: <FiLock />,
      title: "Secure Communication",
      description:
        "We take reasonable measures to protect information transmitted between your device and our website.",
    },
    {
      icon: <FiDatabase />,
      title: "Data Protection",
      description:
        "We handle personal information responsibly and apply appropriate safeguards based on the nature of the information we collect.",
    },
    {
      icon: <FiUserCheck />,
      title: "Access Control",
      description:
        "Access to information is limited to authorized individuals who require it to provide services and perform their responsibilities.",
    },
    {
      icon: <FiShield />,
      title: "Account Security",
      description:
        "We take reasonable steps to protect account information against unauthorized access, misuse, or inappropriate activity.",
    },
    {
      icon: <FiEye />,
      title: "Privacy Awareness",
      description:
        "We aim to collect, use, and handle information responsibly and only for legitimate operational and service-related purposes.",
    },
    {
      icon: <FiCheckCircle />,
      title: "Continuous Improvement",
      description:
        "Our security practices may be reviewed and improved as our services, technologies, and operational requirements evolve.",
    },
  ];

  const securityPrinciples = [
    "Protect information against unauthorized access or misuse.",
    "Limit access to information based on legitimate business requirements.",
    "Use information responsibly for legitimate purposes.",
    "Take reasonable measures to maintain the security of our systems.",
    "Review and improve security practices when necessary.",
  ];

  return (
    <div className="bg-white">
      <div className="relative flex flex-1 min-h-screen w-full overflow-hidden bg-black">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{ backgroundImage: `url(${SecurityBackground})` }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 w-full min-h-screen flex flex-col bg-black/30 p-3">
          <Navbar textColor="white" bordercolor="white/30" />
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <h3
              className="bg-white text-black py-2 px-5 rounded-full"
              style={Fonts.poppins.regular}
            >
              SECURITY AND PROTECTION
            </h3>

            <div className="flex w-full items-center flex-col">
              <h1
                style={Fonts.poppins.medium}
                className="mt-6 text-4xl md:text-5xl lg:text-7xl text-white leading-tight"
              >
                Your Trust,
                <br className="hidden md:block" />
                Our Responsibility.
              </h1>
              <h3
                style={Fonts.poppins.regular}
                className="text-sm text-white/90 pt-3 leading-relaxed lg:max-w-8/12 text-center"
              >
                We take reasonable measures to protect your information and
                maintain a secure, trustworthy experience across our website,
                courses, and consultancy services.
              </h3>
            </div>
            <button
              style={Fonts.poppins.regular}
              onClick={() =>
                document
                  .getElementById("security-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-8 bg-[#FF090C] text-white px-8 lg:px-10 py-4 rounded-full hover:bg-black transition-all duration-300 cursor-pointer"
            >
              Explore Our Security
            </button>
          </div>
        </div>
      </div>
      <section
        id="security-section"
        className="flex flex-col items-center justify-between gap-15 px-5 py-20 md:flex-row lg:px-10 lg:py-30"
      >
        {/* TEXT */}
        <div className="flex w-full flex-col items-start gap-8 md:w-6/12">
          <div className="flex w-full flex-col items-center justify-center gap-5 lg:items-start lg:gap-3">
            <h3
              className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm lg:text-base"
              style={Fonts.poppins.regular}
            >
              SECURITY FIRST
            </h3>

            <div>
              <h1
                style={Fonts.poppins.medium}
                className="text-center text-3xl font-bold text-[#FF090C] lg:text-start lg:text-4xl"
              >
                Protecting the Information You Trust Us With
              </h1>

              <p
                className="mt-4 max-w-xl text-center text-gray-600 lg:text-start"
                style={Fonts.poppins.regular}
              >
                Security is an important part of the way we operate. We aim to
                use appropriate safeguards to protect the information entrusted
                to us while providing reliable courses, training, and
                consultancy services.
              </p>

              <p
                className="mt-4 max-w-xl text-center text-gray-600 lg:text-start"
                style={Fonts.poppins.regular}
              >
                Our approach focuses on responsible data handling, appropriate
                access controls, secure communication, and continuous
                improvement of our security practices.
              </p>
            </div>
          </div>

          <div className="w-full space-y-4">
            {securityPrinciples.map((principle, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl bg-[#F8F8F8] p-4 transition-all duration-300 hover:bg-[#EBEBEB]"
              >
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50">
                  <FiCheckCircle className="text-sm text-[#FF090C]" />
                </div>

                <p
                  style={Fonts.poppins.regular}
                  className="text-sm leading-6 text-gray-600"
                >
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-center md:w-6/12">
          <img
            src={SecurityImage}
            alt="Security and data protection"
            className="h-[55vh] w-full rounded-3xl object-cover shadow-lg transition-transform duration-700 hover:scale-105"
          />
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-20 lg:px-20 lg:py-30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p
              style={Fonts.poppins.medium}
              className="text-sm uppercase tracking-[0.25em] text-[#FF090C]"
            >
              Our Security Practices
            </p>

            <h2
              style={Fonts.poppins.medium}
              className="mt-3 text-3xl text-gray-900 md:text-4xl"
            >
              How We Protect Your Information
            </h2>

            <p
              style={Fonts.poppins.regular}
              className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500"
            >
              We use reasonable practices designed to reduce the risks
              associated with unauthorized access, misuse, loss, or
              inappropriate disclosure of information.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-xl text-[#FF090C] transition-all duration-300 group-hover:bg-[#FF090C] group-hover:text-white">
                  {feature.icon}
                </div>
                <h3
                  style={Fonts.poppins.medium}
                  className="mt-6 text-lg text-gray-900"
                >
                  {feature.title}
                </h3>
                <p
                  style={Fonts.poppins.regular}
                  className="mt-3 text-sm leading-7 text-gray-500"
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-10 lg:py-30">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h3
              style={Fonts.poppins.regular}
              className="inline-block rounded-full border border-gray-200 bg-white px-5 py-2 text-sm"
            >
              YOUR ROLE IN SECURITY
            </h3>

            <h2
              style={Fonts.poppins.medium}
              className="mt-5 text-center text-3xl font-bold text-[#FF090C] lg:text-start lg:text-4xl"
            >
              Security Is a Shared Responsibility
            </h2>

            <p
              style={Fonts.poppins.regular}
              className="mt-5 text-center text-sm leading-7 text-gray-600 lg:text-start"
            >
              While we take reasonable steps to protect information, users also
              play an important role in maintaining account and personal
              security.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Keep your account credentials confidential.",
              "Use strong and unique passwords where applicable.",
              "Avoid sharing sensitive account information with others.",
              "Be cautious when responding to suspicious emails or messages.",
              "Contact us if you believe your account or information may have been compromised.",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:shadow-md"
              >
                <span
                  style={Fonts.poppins.medium}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF090C] text-sm text-white"
                >
                  {index + 1}
                </span>

                <p
                  style={Fonts.poppins.regular}
                  className="text-sm leading-6 text-gray-600"
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-red-50 px-8 py-12 md:px-14">
          <div className="flex flex-col items-start gap-7 md:flex-row">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl text-[#FF090C] shadow-sm">
              <FiAlertTriangle />
            </div>
            <div>
              <h2
                style={Fonts.poppins.medium}
                className="text-2xl text-gray-900 md:text-3xl"
              >
                Notice Something Unusual?
              </h2>

              <p
                style={Fonts.poppins.regular}
                className="mt-3 max-w-3xl text-sm leading-7 text-gray-600"
              >
                If you notice suspicious activity, unauthorized access, unusual
                communication, or another potential security concern, please
                contact our team as soon as possible so we can review the
                situation.
              </p>

              <button
                style={Fonts.poppins.regular}
                className="mt-6 rounded-full bg-[#FF090C] px-7 py-3 text-sm text-white transition-all duration-300 hover:bg-black"
              >
                Report a Security Concern
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-20 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-black px-8 py-12 md:px-14">
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            {/* TEXT */}
            <div>
              <h2
                style={Fonts.poppins.medium}
                className="text-2xl text-white md:text-3xl"
              >
                Have a Security Question?
              </h2>

              <p
                style={Fonts.poppins.regular}
                className="mt-3 max-w-xl text-sm leading-6 text-white/80"
              >
                If you have questions about our security practices or believe
                there may be a security issue, our team is available to assist
                you.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white">
                <FiMail />

                <p
                  style={Fonts.poppins.regular}
                  className="text-sm leading-6 text-white/80"
                >
                  Mail us at: sundar@dosnpl.com
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white">
                <FiPhone />

                <p
                  style={Fonts.poppins.regular}
                  className="text-sm leading-6 text-white/80"
                >
                  Call us on: +977 9867507700
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;
