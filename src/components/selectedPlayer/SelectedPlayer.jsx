import React from "react";

const SelectedPlayer = ({ choosePlayer }) => {
  console.log(choosePlayer);
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Header */}
      <div className="grid grid-cols-4 bg-gray-100 p-4 rounded-t-lg font-semibold text-gray-700">
        <p>Player</p>
        <p>Name</p>
        <p>Style</p>
        <p className="text-center">Action</p>
      </div>

      {/* Row */}
      <div className="grid grid-cols-4 items-center p-4 border border-t-0 hover:bg-gray-50 transition">
        {/* Image */}
        <div>
          <img
            src={choosePlayer.playerImage}
            alt={choosePlayer.playerName}
            className="w-14 h-14 rounded-full object-cover border"
          />
        </div>

        {/* Name */}
        <p className="font-medium text-gray-800">{choosePlayer.playerName}</p>

        {/* Style */}
        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm w-fit">
          {choosePlayer.hand}
        </span>

        {/* Delete Button */}
        <div className="text-center">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedPlayer;
