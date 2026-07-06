// import React from "react";
// import navImg from "../../assets/logo.png";
// import dollar from "../../assets/Currency (1).png";

// const Navbar = ({ availableBalance }) => {
//   return (
//     <nav className="sticky top-0 z-50 bg-[#0F172A] border-b border-slate-700 shadow-lg">
//       <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
//         {/* Logo */}
//         <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
//           <img
//             src={navImg}
//             alt="Logo"
//             className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white p-1 border-2 border-amber-400"
//           />

//           <div>
//             <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-wide">
//               Dream<span className="text-amber-400">11</span>
//             </h1>

//             <p className="hidden sm:block text-xs text-slate-400">
//               Fantasy Cricket League
//             </p>
//           </div>
//         </div>

//         {/* Navigation */}
//         <ul className="hidden lg:flex items-center gap-8 text-white font-medium">
//           <li>
//             <a
//               href="/"
//               className="hover:text-amber-400 duration-300 border-b-2 border-transparent hover:border-amber-400 pb-1"
//             >
//               Home
//             </a>
//           </li>

//           <li>
//             <a
//               href="#players"
//               className="hover:text-amber-400 duration-300 border-b-2 border-transparent hover:border-amber-400 pb-1"
//             >
//               Players
//             </a>
//           </li>

//           <li>
//             <a
//               href="#teams"
//               className="hover:text-amber-400 duration-300 border-b-2 border-transparent hover:border-amber-400 pb-1"
//             >
//               Teams
//             </a>
//           </li>

//           <li>
//             <a
//               href="#matches"
//               className="hover:text-amber-400 duration-300 border-b-2 border-transparent hover:border-amber-400 pb-1"
//             >
//               Matches
//             </a>
//           </li>

//           <li>
//             <a
//               href="#rankings"
//               className="hover:text-amber-400 duration-300 border-b-2 border-transparent hover:border-amber-400 pb-1"
//             >
//               Rankings
//             </a>
//           </li>

//           <li>
//             <a
//               href="#contact"
//               className="hover:text-amber-400 duration-300 border-b-2 border-transparent hover:border-amber-400 pb-1"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>

//         {/* Right Side */}
//         <div className="flex items-center gap-2 sm:gap-4">
//           <button className="hidden md:block bg-amber-400 text-slate-900 font-semibold px-4 lg:px-5 py-2 rounded-full hover:bg-amber-300 duration-300 hover:scale-105">
//             Join Now
//           </button>

//           <div className="flex items-center gap-1 sm:gap-2 bg-slate-800 border border-slate-600 rounded-full px-3 sm:px-4 py-2 hover:border-amber-400 duration-300">
//             <span className="font-bold text-sm sm:text-base text-white">
//               {availableBalance}
//             </span>

//             <span className="hidden sm:inline text-slate-300">
//               Coin
//             </span>

//             <img
//               src={dollar}
//               alt="Coin"
//               className="w-5 h-5 sm:w-6 sm:h-6"
//             />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import navImg from "../../assets/logo.png";
import dollar from "../../assets/Currency (1).png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ availableBalance }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0F172A] border-b border-slate-700 shadow-lg">
      {/* Top Navbar */}
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={navImg}
            alt="Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white p-1 border-2 border-amber-400"
          />

          <div>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-wide">
              Dream<span className="text-amber-400">11</span>
            </h1>

            <p className="hidden sm:block text-xs text-slate-400">
              Fantasy Cricket League
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
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
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Join Button */}
          <button className="hidden md:block bg-amber-400 text-slate-900 font-semibold px-4 lg:px-5 py-2 rounded-full hover:bg-amber-300 duration-300 hover:scale-105">
            Join Now
          </button>

          {/* Coin */}
          <div className="flex items-center gap-2 bg-slate-800 border border-slate-600 rounded-full px-3 sm:px-4 py-2 hover:border-amber-400 duration-300">
            <span className="font-bold text-sm sm:text-base text-white">
              {availableBalance}
            </span>

            <span className="hidden sm:inline text-slate-300">Coin</span>

            <img
              src={dollar}
              alt="Coin"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-3xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0F172A] border-t border-slate-700">
          <ul className="flex flex-col text-white font-medium">
            <li>
              <a
                href="/"
                className="block px-6 py-4 hover:bg-slate-800"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#players"
                className="block px-6 py-4 hover:bg-slate-800"
                onClick={() => setMenuOpen(false)}
              >
                Players
              </a>
            </li>

            <li>
              <a
                href="#teams"
                className="block px-6 py-4 hover:bg-slate-800"
                onClick={() => setMenuOpen(false)}
              >
                Teams
              </a>
            </li>

            <li>
              <a
                href="#matches"
                className="block px-6 py-4 hover:bg-slate-800"
                onClick={() => setMenuOpen(false)}
              >
                Matches
              </a>
            </li>

            <li>
              <a
                href="#rankings"
                className="block px-6 py-4 hover:bg-slate-800"
                onClick={() => setMenuOpen(false)}
              >
                Rankings
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="block px-6 py-4 hover:bg-slate-800"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>

            {/* Join Button in Mobile */}
            <li className="px-6 py-4">
              <button className="w-full bg-amber-400 text-slate-900 font-semibold py-2 rounded-full hover:bg-amber-300 duration-300">
                Join Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;  