import React from "react";
import { GiPolarStar } from "react-icons/gi";
import { MdHighlight } from "react-icons/md";
import { RiUserCommunityFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-yellow-400 font-titleFont">About Us</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Welcome to <span className="text-yellow-400 font-semibold font-paraFont">PopcornPicks</span>, your ultimate destination for all
          things cinema! We’re passionate about movies and dedicated to bringing you a platform that celebrates
          storytelling, creativity, and the magic of the silver screen.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-yellow-400 flex gap-1"><MdHighlight className="mt-1 text-purple-400" /> Highlight the Best</h3>
            <p className="text-gray-300">
              Explore trending titles, hidden gems, and timeless classics, all curated to satisfy every cinephile.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-yellow-400 flex gap-1"><GiPolarStar className="mt-1 text-purple-400" /> Celebrate Diversity</h3>
            <p className="text-gray-300">
              From heartwarming animations to gripping thrillers, we showcase movies across genres, cultures, and
              languages.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-yellow-400 flex gap-1"><RiUserCommunityFill className="mt-1 text-purple-400" /> Build Community</h3>
            <p className="text-gray-300">
              Connect with fellow movie lovers, share your favorite moments, and dive into lively discussions.
            </p>
          </div>
        </div>
        <p className="text-lg mt-8 text-gray-300">
          Whether you're looking for inspiration, entertainment, or a walk down memory lane, <span className="text-yellow-400 font-semibold font-paraFont">PopcornPicks</span> is
          here to spark your imagination and keep the movie magic alive. Sit back, grab some popcorn, and let the show
          begin!
        </p>
      </div>
    </div>
  );
};

export default About;
