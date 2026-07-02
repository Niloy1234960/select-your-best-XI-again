import React, { use } from "react";
import Crickter from "./Crickter";

const Crickters = ({ cricketPlayersPromise }) => {
  const crickters = use(cricketPlayersPromise);
  // console.log(crickters);

  return (
    <div>
      <div className="flex justify-between items-center mt-10">
        <div>
          <h1 className="text-3xl font-bold mt-8 ml-18">Available Players:</h1>
        </div>
        <div className="mr-22">
          <button className="border p-2 rounded-l-xl">Availabe</button>
          <button className="border p-2 rounded-r-xl">
            Selected <span>(0)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1200px] mx-auto mr-8 ml-18 gap-8 mt-7">
        {crickters.map((crickter) => (
          <Crickter crickter={crickter} key={crickter.id}></Crickter>
        ))}
      </div>
    </div>
  );
};

export default Crickters;
