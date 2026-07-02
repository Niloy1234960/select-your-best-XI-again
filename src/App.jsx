import "./App.css";
import Crickters from "./components/Crickters";
import { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Loading from "./components/Loading/Loading";
import Footer from "./components/Footer/Footer";

const cricketPlayersPromise = fetch("/cricket.json").then((res) => res.json());
// .then((data) => console.log(data));

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Suspense
          fallback={<Loading></Loading>}
        >
          <Crickters cricketPlayersPromise={cricketPlayersPromise}></Crickters>
        </Suspense>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
