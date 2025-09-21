import Main from "./Main";
import HourlyForecast from "./HourlyForecast";

export default function DesktopMetric() {
  return (
    <div className="min-h-screen min-w-full flex items-start justify-center bg-[rgb(2,1,45)] lg:p-6">
      {/* Wrapper */}
      <div className="w-full max-w-[1216px] flex flex-col items-center gap-8 mt-4 px-4">
        {/* Header Section */}
        <header className="w-full flex items-center justify-between flex-shrink p-2 mt-8  ">
          <img
            src="../logo.svg"
            alt="Weather-now-icon"
            className="h-8 sm:h-10 lg:mx-8 w-35 sm:w-50  "
          />

          <section className="flex items-center justify-evenly  px-2 sm:py-2 py-1 bg-gray-700 gap-1 w-24 sm:w-30  rounded-md">
            <img src="../icon-units.svg" alt="units-icon" className="h-5 w-5" />
            <p className="text-white text-xs sm:text-lg">Units</p>
            <img
              src="../icon-dropdown.svg"
              alt="drop-down-icon"
              className="h-4 w-2 sm:w-4   "
            />
          </section>
        </header>

        {/* Hero Text */}
        <section className="pt-4 text-center">
          <p className="text-white font-bricolage font-bold text-3xl sm:text-4xl md:text-5xl">
            How's the sky looking Today?
          </p>
        </section>

        {/* Search Section */}
        <section className="w-full flex flex-col sm:flex-row gap-4 items-center justify-center">
          <input
            type="text"
            placeholder="Search for a place..."
            className="w-full sm:w-[60%] text-white rounded-md pl-8 px-2
             py-2  bg-[url('../icon-search.svg')] bg-no-repeat bg-[left_0.5rem_center] bg-gray-700"
          />
          <button
            type="submit"
            className="w-full sm:w-24 rounded-md text-white px-2 py-2 bg-blue-700"
          >
            Search
          </button>
        </section>

        {/* Main Content */}
        <section className="w-full flex flex-col lg:flex-row items-start gap-2">
          <Main />
          <HourlyForecast />
        </section>
      </div>
    </div>
  );
}
