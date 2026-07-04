import React from "react";
// import cricketLogo from "../../assets/logo.png"; // Replace with your logo

const HeroSection = () => {
  return (
    <section className="px-5 py-8  max-w-[1240px] mx-auto min-h-screen flex items-center justify-center">
      <div
        className="relative w-full max-w-7xl rounded-2xl overflow-hidden border border-gray-700"
        style={{
          background: `
            radial-gradient(circle at top right, rgba(255,182,193,.35), transparent 35%),
            radial-gradient(circle at bottom left, rgba(96,165,250,.35), transparent 35%),
            linear-gradient(90deg,#171717 0%,#111111 50%,#171717 100%)
          `,
        }}
      >
        {/* Extra Blur Effects */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-pink-300/30 rounded-full blur-[130px]" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-sky-300/30 rounded-full blur-[130px]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-6">
          {/* Logo */}
          <img
            src="https://i.ibb.co.com/jv50XNv5/logo.png"
            alt="Cricket"
            className="w-36 md:w-44 mb-8 object-cover"
          />

          {/* Heading */}
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-base md:text-lg mt-4">
            Beyond Boundaries Beyond Limits
          </p>

          {/* Button */}
          <button className="mt-8 rounded-xl border-2 border-yellow-400 p-[2px] hover:scale-105 duration-300">
            <span className="block rounded-lg bg-[#101010] px-7 py-3 text-yellow-300 font-semibold hover:bg-yellow-400 hover:text-black transition">
              Claim Free Credit
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;