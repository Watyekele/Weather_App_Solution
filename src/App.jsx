import { useState } from "react";
import DesktopMetric from "./assets/Components/DesktopMetric";
import HourlyForecast from "./assets/Components/HourlyForecast";
import UnitsDropdown from "./assets/Components/UnitsDropdown";
import "./App.css";

function App() {
  const [units, setUnits] = useState("metric");

  return (
    <div
      className="
        min-h-screen min-w-full
        bg-[rgb(2,1,45)] 
        text-white 
        grid 
        grid-rows-[auto_auto_auto_1fr] 
        justify-items-center 
        gap-6 
        lg:p-6
      "
    >
      {/* Header */}
      <header className="w-full max-w-[700px] sm:max-w-[980px] flex items-center justify-between  px-6 sm:px-4 p-4">
        <img
          src="./logo.svg"
          alt="Weather logo"
          className="h-8 sm:h-10 lg:mx-8"
        />
        <UnitsDropdown units={units} setUnits={setUnits} />
      </header>

      {/* Hero Text */}
      <section className="text-center">
        <p className="font-bricolage font-bold text-3xl sm:text-4xl md:text-5xl">
          How's the sky looking Today?
        </p>
      </section>

      {/* Search Section */}
      <section className="w-full max-w-[500px] sm:max-w-[680px] flex flex-col sm:flex-row gap-4 items-center justify-center">
        <input
          type="text"
          placeholder="Search for a place..."
          className="
            w-[95%] sm:w-[60%] text-white rounded-md pl-8 px-2 py-2
            bg-[url('./icon-search.svg')] bg-no-repeat bg-[left_0.5rem_center]
            bg-gray-700
          "
        />
        <button
          type="submit"
          className="w-[95%] sm:w-24 rounded-md text-white px-2 py-2 bg-blue-700"
        >
          Search
        </button>
      </section>

      {/* 🌤 Main Grid Layout */}
      <section
        className="
          w-full max-w-[950px] 
          grid grid-cols-1 lg:grid-cols-[1fr_300px] 
          gap-2 
          p-2
        "
      >
        {/* Left (Main + details + forecast) */}
        <DesktopMetric units={units} />

        {/* Right (Hourly Forecast) */}
        <HourlyForecast units={units} />
      </section>
    </div>
  );
}

export default App;
