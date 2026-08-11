import React, { useEffect, useState } from "react";
import Fonts from "../../utils/fontsconfig";
import axios from "axios";

const API_URL = import.meta.env.VITE_SERVER_URL;

const Stories = () => {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedStory, setSelectedStory] = useState(null);
  const [studentsStories, setStudentsStories] = useState([]);

  useEffect(() => {
    console.log("API URL:", API_URL)
    const fetchStories = async () => {
      try {
        const res = await axios.get(
          `${API_URL}employees/success-stories-details/`,
        );

        const formattedStories = res.data.data.map((stories, index) => ({
          id: stories.id || `story-${index}`,
          image: stories.image || "https://placehold.co/600x800?text=SuccessStory",
          name: stories.name,
          description: stories.description || "Confidential!",
          address: stories.address || "Butwal",
          title: stories.enrolled_in || "Confidential!",
        }));

        setStudentsStories(formattedStories);
      } catch (err) {
        console.error(err);
      }
    };

    fetchStories();
  }, []);

  const visibleStories = studentsStories.slice(0, visibleCount);

  return (
    <div id="stories-section" className="flex flex-1 bg-white items-center justify-center flex-col w-full py-16">
      <div className="flex flex-col items-center gap-5 mb-12">
        <div className="flex flex-col items-center gap-5">
        <h3
          className="bg-[#F2F1FF] py-2 px-4 rounded-full lg:w-fit text-center"
          style={Fonts.poppins.regular}
        >
          SUCCESS STORIES
        </h3>
        <h1
          style={Fonts.poppins.medium}
          className="xl:text-4xl text-3xl text-black text-center"
        >
          Celebrating Student Achievements
        </h1>
      </div>
      <p
        style={Fonts.poppins.regular}
        className="text-sm text-black/90 text-center leading-relaxed"
      >
       Discover the inspiring journeys of our students who turned their ambitions into achievements. Their success reflects the quality of our training and commitment to career growth.
      </p>
      </div>

      <div className="grid bg-white grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 px-6 gap-6 lg:gap-8 w-full">
        {visibleStories.map((story) => (
          <div
            key={story.id}
            className="group relative w-full h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500"
          >
            <img
              src={story.image}
              alt={story.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-all duration-500"></div>

            <div className="absolute top-7 left-7">
              <span
                style={Fonts.poppins.medium}
                className="bg-[#FF090C] text-white px-5 py-2 rounded-full text-xs tracking-wider uppercase"
              >
                {story.title}
              </span>
            </div>

            <div className="absolute bottom-7 left-7 right-7 text-white">
              <h2
                style={Fonts.poppins.medium}
                className="text-2xl lg:text-3xl mb-2 transition-all duration-500 lg:group-hover:-translate-y-2"
              >
                {story.name}
              </h2>
              <p className="text-sm text-white/80 mb-4">{story.address}</p>
              <button
                onClick={() => setSelectedStory(story)}
                className="bg-white cursor-pointer text-black px-5 py-3 rounded-full font-medium transition-all duration-500 hover:bg-[#FF090C] hover:text-white opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"
              >
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < studentsStories.length && (
        <div className="flex justify-center mt-14">
          <button
            onClick={() => setVisibleCount(studentsStories.length)}
            style={Fonts.poppins.medium}
            className="bg-black cursor-pointer text-white px-10 py-4 rounded-full hover:bg-[#FF090C] transition-all duration-300"
          >
            View All Stories
          </button>
        </div>
      )}

      {selectedStory && (
        <div
          onClick={() => setSelectedStory(null)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-5"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-5 cursor-pointer right-5 z-20 h-12 w-12 rounded-full bg-white text-3xl leading-none hover:bg-[#FF090C] hover:text-white transition"
            >
              ×
            </button>

            <div className="grid lg:grid-cols-2 max-h-screen">
              <div className="h-64 lg:h-full">
                <img
                  src={selectedStory.image}
                  alt={selectedStory.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 lg:p-12 flex flex-col overflow-y-auto max-h-screen">
                <span
                  style={Fonts.poppins.regular}
                  className="text-[#FF090C] uppercase tracking-[3px] text-sm"
                >
                  {selectedStory.title}
                </span>

                <h2
                  style={Fonts.poppins.medium}
                  className="text-4xl lg:text-5xl mt-4 text-black"
                >
                  {selectedStory.name}
                </h2>

                <p className="text-gray-400 text-sm mt-2">
                  {selectedStory.address}
                </p>

                <p
                  style={Fonts.poppins.regular}
                  className="text-gray-600 leading-8 mt-8"
                >
                  {selectedStory.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stories;