import React from "react";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className=" text-gray-300 w-11/12 mx-auto mt-20">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold text-yellow-400">Popcorn Picks</h2>
            <p className="mt-2">
              Your ultimate destination for discovering and celebrating the magic of movies. Let’s make every movie
              night special!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-400">Contact Us</h3>
            <ul className="mt-2 space-y-2">
              <li>Email: <a href="mailto:support@movieverse.com" className="text-yellow-400">support@popcornPicks.com</a></li>
              <li>Phone: <a href="tel:+1787621395" className="text-yellow-400">+1 787 621 395</a></li>
              <li>Address: Chandgoan, Chittagong</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-400">Follow Us</h3>
            <div className="flex mt-2 space-x-4">
              <a href="https://github.com/Rain44556" className="text-gray-300 hover:text-yellow-400">
                <FaGithub size={24} />
              </a>
              <a href="https://x.com/Rain44556" className="text-gray-300 hover:text-yellow-400">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/bris-ty-b09707262/" className="text-gray-300 hover:text-yellow-400">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-6"></div>

        <div className="lg:flex justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Popcorn Picks. All Rights Reserved.</p>
          <p className="flex gap-1">Designed with <img className="w-5" src="https://i.ibb.co.com/MnM9mf0/heart.png" alt="" /> by Movie Junkies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
