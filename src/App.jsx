import "./App.css";
import navImg from "./assets/logo.png";
import dollar from "./assets/Currency (1).png";
import Crickters from "./components/Crickters";
import { Suspense } from "react";

const cricketPlayersPromise = fetch("cricket.json").then((res) => res.json());
// .then((data) => console.log(data));

function App() {
  return (
    <>
      <div>
        <div className="navbar max-w-[1200px] mx-auto">
          <div className="flex-1">
            <a className="text-xl">
              <img className="w-[60px] h-[60px] ml-7" src={navImg} alt="" />
            </a>
          </div>
          <div className="flex gap-2 mr-7 border-1 p-3 rounded-xl">
            <span>6000000</span>
            <span>Coin</span>
            <img src={dollar} alt="" />
          </div>
        </div>
        <Suspense fallback={<h1 className="text-center text-3xl font-bold">Crickters Loading....</h1>}>
          <Crickters cricketPlayersPromise={cricketPlayersPromise}></Crickters>
        </Suspense>
      </div>
    </>
  );
}

export default App;
