import React from "react";

const Crickter = ({ crickter }) => {
  console.log(crickter);
  return (
    <div className="">
      <div className="max-w-xs h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-cyan-500/10 hover:border-cyan-500/30 group flex flex-col">
        {/* Player Image */}
        <div className="relative h-72 overflow-hidden bg-slate-950">
          <img
            src={crickter.playerImage}
            alt={crickter.playerName}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />

          {/* Rating */}
          <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 px-2.5 py-1 rounded-lg text-center">
            <span className="text-xs text-cyan-400 block uppercase tracking-wider font-semibold">
              Rating
            </span>
            <span className="text-base font-bold text-white">
              {crickter.rating}
            </span>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Name & Country */}
          <div className="min-h-[70px]">
            <h3 className="text-xl font-bold text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
              {crickter.playerName}
            </h3>

            <p className="text-sm text-slate-400 flex items-center gap-1.5 mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              {crickter.country}
            </p>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-3 bg-slate-950/50 p-3 rounded-xl border border-slate-800/60 text-xs min-h-[80px] mt-4">
            <div>
              <span className="text-slate-500 block mb-1">Role</span>
              <span className="text-slate-200 font-medium break-words">
                {crickter.playingRole}
              </span>
            </div>

            <div>
              <span className="text-slate-500 block mb-1">Style</span>
              <span className="text-slate-200 font-medium break-words">
                {crickter.hand}
              </span>
            </div>
          </div>

          {/* Price & Button */}
          <div className="mt-auto pt-5 flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                Price
              </span>

              <span className="text-lg font-bold text-emerald-400">
                ${crickter.price.toLocaleString()}
              </span>
            </div>

            <button className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm py-2.5 px-4 rounded-xl shadow-lg shadow-cyan-600/20 hover:shadow-cyan-500/30 transition-all duration-300 active:scale-95">
              {crickter.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crickter;
