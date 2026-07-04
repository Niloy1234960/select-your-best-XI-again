import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Crickter = ({
  crickter,
  setAvailableBalance,
  availableBalance,
  choosePlayers,
  setChoosePlayers,
}) => {
  // console.log(crickter);
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(crickter.price)
    if (availableBalance < playerPrice) {
      toast("Not Enough coins");
      return;
    }
    (setIsSelected(true),
      setAvailableBalance(availableBalance - playerPrice));
      setChoosePlayers([...choosePlayers, playerData])
  };

  return (
    <div className="">
      <div className="max-w-[280px] h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-cyan-500/10 hover:border-cyan-500/30 group flex flex-col">
        <div className="relative h-56 overflow-hidden bg-slate-950">
          <img
            src={crickter.playerImage}
            alt={crickter.playerName}
            className="w-full p-4 h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />

          {/* Rating */}
          <div className="absolute top-2.5 right-2.5 bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 px-2 py-0.5 rounded-lg text-center">
            <span className="text-[10px] text-cyan-400 block uppercase tracking-wider font-semibold">
              Rating
            </span>
            <span className="text-sm font-bold text-white">
              {crickter.rating}
            </span>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="p-4 flex-1 flex flex-col">
          {/* Name & Country */}
          <div className="min-h-[60px]">
            <h3 className="text-lg font-bold text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
              {crickter.playerName}
            </h3>

            <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              {crickter.country}
            </p>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-2 bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/60 text-[11px] min-h-[65px] mt-3">
            <div>
              <span className="text-slate-400 block mb-0.5">Role</span>
              <span className="text-slate-200 font-medium break-words">
                {crickter.playingRole}
              </span>
            </div>

            <div>
              <span className="text-slate-400 block mb-0.5">Style</span>
              <span className="text-slate-200 font-medium break-words">
                {crickter.hand}
              </span>
            </div>
          </div>

          {/* Price & Button */}
          <div className="mt-auto pt-4 flex items-center justify-between gap-3">
            <div>
              <span className="text-[9px] text-slate-400 uppercase tracking-wider block">
                Price
              </span>

              <span className="text-base font-bold text-emerald-400">
                ${crickter.price.toLocaleString()}
              </span>
            </div>

            <button
              disabled={isSelected}
              onClick={() => {handleSelected(crickter)}}
              className={`
                      flex-1 text-white font-semibold text-xs py-2 px-2 rounded-xl transition-all duration-300
                     ${
                       isSelected === true
                         ? "bg-green-600 cursor-not-allowed opacity-80"
                         : "bg-cyan-600 hover:bg-cyan-500 active:scale-95"
                     }`}
            >
              <ToastContainer />
              {isSelected === true ? "✓ Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crickter;
