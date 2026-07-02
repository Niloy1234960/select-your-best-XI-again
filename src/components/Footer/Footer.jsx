import React from "react";
import navImg from "../../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300 mt-20">
      {/* Top Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img
              src={navImg}
              alt="logo"
              className="w-14 h-14 rounded-full bg-white p-1"
            />
            <h2 className="text-2xl font-bold text-white">
              Best<span className="text-amber-400">XI</span>
            </h2>
          </div>

          <p className="text-gray-400 leading-7">
            Build your ultimate fantasy cricket squad, manage your budget,
            and create the strongest Best XI with your favorite players.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-amber-400 duration-300">
                Home
              </a>
            </li>

            <li>
              <a href="#players" className="hover:text-amber-400 duration-300">
                Players
              </a>
            </li>

            <li>
              <a href="#teams" className="hover:text-amber-400 duration-300">
                Teams
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-amber-400 duration-300">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Support
          </h3>

          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-amber-400 duration-300">
                Help Center
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-amber-400 duration-300">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-amber-400 duration-300">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-amber-400 duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Stay Updated
          </h3>

          <p className="text-gray-400 mb-5">
            Subscribe to receive the latest fantasy cricket news and player
            updates.
          </p>

          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-amber-400"
            />

            <button className="bg-amber-400 text-slate-900 font-semibold py-3 rounded-lg hover:bg-amber-300 duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-700"></div>

      {/* Bottom Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-5">

        <p className="text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} BestXI. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-xl">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-black flex items-center justify-center duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-black flex items-center justify-center duration-300"
          >
            <FaTwitter />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-black flex items-center justify-center duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-black flex items-center justify-center duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;