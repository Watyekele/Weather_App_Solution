import ForecastData from "./ForecastData.js";

export default function Forecast() {
  const forecastElements = ForecastData.map((Data, index) => (
    <div
      key={Data.id || index}
      className="flex flex-col items-center justify-between 
                 rounded-xl bg-gray-800 p-4 sm:p-5 
                 text-white w-full h-full
                 transition-transform duration-300 hover:scale-105 min-w-[80px] "
    >
      {/* Day */}
      <p className="text-sm sm:text-base">{Data.day}</p>

      {/* Weather icon */}
      <img src={Data.img} alt="" className="w-10 sm:w-12 md:w-14 my-2" />

      {/* Temperatures evenly spaced */}
      <article className="flex justify-between w-full gap-4 min-w-20 p-2">
        <p className="text-sm sm:text-base">{Data.Tempmorning}</p>
        <p className="text-sm sm:text-base">{Data.Tempevening}</p>
      </article>
    </div>
  ));

  return (
    <div className="w-full max-w-[700px] mx-auto flex flex-col flex-1">
      {/* Title */}
      <h1 className="text-white text-left mt-4 px-4 text-lg sm:text-xl">
        Daily Forecast
      </h1>

      {/* Grid container */}
      <section
        className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 
                   w-full px-4 mt-2 gap-4 auto-rows-fr"
      >
        {forecastElements}
      </section>
    </div>
  );
}
