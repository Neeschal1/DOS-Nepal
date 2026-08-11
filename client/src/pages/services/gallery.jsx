import React, { useEffect, useState } from "react";
import Fonts from "../../utils/fontsconfig";
import { FiImage } from "react-icons/fi";

const Gallery = ({ service }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [albumb, setAlbumb] = useState([]);
  const selectedImage = albumb[selectedIndex];

  useEffect(() => {
    setSelectedIndex(0);
  }, [service]);

  useEffect(() => {
    if (!albumb?.length) return;
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % albumb.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [albumb]);

  useEffect(() => {
    if (!service?.gallery) return;

    const pictures = Object.keys(service.gallery)
      .filter((key) => key.startsWith("image"))
      .map((key) => service.gallery[key])
      .filter(Boolean);

    setAlbumb(pictures);
  }, [service]);

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <span
            className="border border-gray-200 bg-white rounded-full px-5 py-2 text-sm"
            style={Fonts.poppins.regular}
          >
            GALLERY
          </span>

          <h2
            className="mt-6 text-3xl lg:text-5xl text-black"
            style={Fonts.poppins.medium}
          >
            Explore Our Learning Environment
          </h2>

          <p
            className="mt-4 text-gray-600 max-w-3xl leading-8"
            style={Fonts.poppins.regular}
          >
            Take a glimpse into our classrooms, interactive sessions, practical
            activities, and student experiences.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-8">
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-4">
              {albumb.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`overflow-hidden rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedIndex === index
                      ? "border-[#FF090C]"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="h-36 w-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
            <div className="lg:col-span-3">
              <div className="relative overflow-hidden rounded-3xl h-80 md:h-125 lg:h-155">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 text-white">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#FF090C] p-3 rounded-xl">
                      <FiImage size={22} />
                    </div>

                    <div>
                      <h2 className="text-3xl" style={Fonts.poppins.medium}>
                        {service.title}
                      </h2>

                      <p
                        className="mt-2 text-white/80"
                        style={Fonts.poppins.regular}
                      >
                        Interactive learning sessions & classroom moments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {albumb.length > 4 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {albumb.slice(4).map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedIndex(index + 4)}
                  className={`group cursor-pointer overflow-hidden rounded-3xl border-2 transition-all duration-300 ${
                    selectedIndex === index + 4
                      ? "border-[#FF090C]"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 5}`}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
