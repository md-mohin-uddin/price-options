import { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import DaisyNav from "./components/DaisyNav";

function App() {
  return (
    <>
      <NavBar />
      {/* <DaisyNav /> */}
      <h1 className="text-7xl bg-rose-400">Price Options</h1>
      <PriceOptions />
    </>
  );
}

export default App;
