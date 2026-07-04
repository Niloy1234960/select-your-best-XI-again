import "./App.css";
import Crickters from "./components/Crickters";
import { Suspense, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Loading from "./components/Loading/Loading";
import Footer from "./components/Footer/Footer";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import HeroSection from "./components/HeroSection/HeroSection";

const cricketPlayersPromise = fetch("/cricket.json").then((res) => res.json());
// .then((data) => console.log(data));

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <div className="flex justify-between items-center mt-8 max-w-[1200px] mx-auto">
          <h1 className="text-2xl font-bold">Available Players:</h1>
          <div>
            <button onClick={()=> setToggle(true)} className={`border-2 border-gray-400  py-3 px-4 rounded-l-xl font-semibold  border-r-0 ${toggle === true ? "bg-[#E7FF29]" : ""}`}>
              Available
            </button>
            <button onClick={()=> setToggle(false)} className={`border-2 border-gray-400 py-3 px-4 rounded-r-xl font-semibold border-l-0 ${toggle === false ? "bg-[#E7FF29]" : ""}`}>
              Selected <span>(0)</span>
            </button>
          </div>
        </div>

        {toggle === true ? (
          <Suspense fallback={<Loading></Loading>}>
            <Crickters
              cricketPlayersPromise={cricketPlayersPromise}
            ></Crickters>
          </Suspense>
        ) : (
          <SelectedPlayers></SelectedPlayers>
        )}

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
