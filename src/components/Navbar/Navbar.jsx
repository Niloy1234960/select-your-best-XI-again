import React from "react";
import navImg from "../../assets/logo.png";
import dollar from "../../assets/Currency (1).png";

const Navbar = ({availableBalance}) => {
  return (
    <nav className="sticky top-0 z-50 bg-[#0F172A] border-b border-slate-700 shadow-lg">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={navImg}
            alt="Logo"
            className="w-14 h-14 rounded-full bg-white p-1 border-2 border-amber-400"
          />

          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Dream<span className="text-amber-400">11</span>
            </h1>
            <p className="text-xs text-slate-400">
              Fantasy Cricket League
            </p>
          </div>
        </div>

        {/* Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-white font-medium">
          <li>
            <a
              href="/"
              className="hover:text-amber-400 duration-300 border-b-2 border-transparent hover:border-amber-400 pb-1"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#players"
              className="hover:text-amber-400 duration-300 border-b-2 border-transparent hover:border-amber-400 pb-1"
            >
              Players
            </a>
          </li>

          <li>
            <a
              href="#teams"
              className="hover:text-amber-400 duration-300 border-b-2 border-transparent hover:border-amber-400 pb-1"
            >
              Teams
            </a>
          </li>

          <li>
            <a
              href="#matches"
              className="hover:text-amber-400 duration-300 border-b-2 border-transparent hover:border-amber-400 pb-1"
            >
              Matches
            </a>
          </li>

          <li>
            <a
              href="#rankings"
              className="hover:text-amber-400 duration-300 border-b-2 border-transparent hover:border-amber-400 pb-1"
            >
              Rankings
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-amber-400 duration-300 border-b-2 border-transparent hover:border-amber-400 pb-1"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-amber-400 text-slate-900 font-semibold px-5 py-2 rounded-full hover:bg-amber-300 duration-300 hover:scale-105">
            Join Now
          </button>

          <div className="flex items-center gap-2 bg-slate-800 border border-slate-600 rounded-full px-4 py-2 hover:border-amber-400 duration-300">
            <span className="font-bold text-white">{availableBalance}</span>

            <span className="text-slate-300">Coin</span>

            <img
              src={dollar}
              alt="Coin"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;