import React from "react";
import Fonts from "../../utils/fontsconfig";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const position = [27.689316, 83.465396];

const ContactMap = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_HEADING_TO_DOS_NEPAL;
  const openDirections = () => {
    window.open(
      `${apiKey}`,
      "_blank",
    );
  };

  return (
    <section className="bg-[#F2F1FF] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <h3
          className="bg-white py-2 px-5 rounded-full border border-gray-200 text-sm lg:text-base"
          style={Fonts.poppins.regular}
        >
          OUR LOCATION
        </h3>
        <h1
          style={Fonts.poppins.medium}
          className="text-3xl lg:text-4xl xl:text-5xl text-black mt-5 text-center"
        >
          Visit Our Institute
        </h1>
        <p
          className="text-gray-600 mt-2 w-full text-center lg:text-center"
          style={Fonts.poppins.regular}
        >
          Find us easily using the interactive map below. Visit DOS-NLP to
          explore our Accounting, Computer, German, Korean, and English language
          programs, and connect with our experienced instructors.
        </p>
        <div className="w-full mt-10">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <MapContainer
              center={position}
              zoom={17}
              scrollWheelZoom={false}
              dragging={true}
              zoomControl={true}
              doubleClickZoom={true}
              className="w-full h-87.5 sm:h-112.5 md:h-137.5 lg:h-162.5"
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  <div className="text-center">
                    <h3 className="font-semibold">DOS-NLP</h3>
                    <p>Accounting & Language Training Institute</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white rounded-2xl shadow-xl p-5 max-w-xs z-1000">
              <h2 className="text-xl text-black" style={Fonts.poppins.medium}>
                DOS-NLP
              </h2>
              <p
                className="text-gray-600 mt-2 text-sm"
                style={Fonts.poppins.regular}
              >
                Visit our institute and discover expert-led Accounting,
                Computer, German, Korean, and English language courses designed
                for academic and professional success.
              </p>
              <button
                onClick={openDirections}
                className="mt-5 bg-[#FF090C] cursor-pointer hover:bg-red-700 transition-all duration-300 text-white px-6 py-3 rounded-full"
                style={Fonts.poppins.medium}
              >
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
