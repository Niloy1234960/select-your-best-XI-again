import React, { use } from "react";
import Crickter from "./Crickter";

const Crickters = ({ cricketPlayersPromise }) => {
  const crickters = use(cricketPlayersPromise);
  // console.log(crickters);

  return (
    <div>
      <h1 className="text-3xl font-bold mt-8 ml-8">Available Players:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-8 gap-8 mt-7">
        {crickters.map((crickter) => (
          <Crickter crickter={crickter} key={crickter.id}></Crickter>
        ))}
      </div>
    </div>
  );
};

export default Crickters;
