import React, { use } from "react";
import Crickter from "./Crickter";

const Crickters = ({
  cricketPlayersPromise,
  setAvailableBalance,
  availableBalance,
  choosePlayers,
  setChoosePlayers
}) => {
  const crickters = use(cricketPlayersPromise);
  // console.log(crickters);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1200px] mx-auto mr-8 ml-18 gap-8 mt-7">
        {crickters.map((crickter) => (
          <Crickter
            setChoosePlayers={setChoosePlayers}
            choosePlayers={choosePlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            crickter={crickter}
            key={crickter.id}
          ></Crickter>
        ))}
      </div>
    </div>
  );
};

export default Crickters;
