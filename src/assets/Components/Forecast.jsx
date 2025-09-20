import ForecastData from "./ForecastData.js";

export default function Forecast() {
  const forecastElements = ForecastData.map((Data, index) => (
    <div
      key={Data.id || index}
      className="flex flex-col items-center justify-between border-none  rounded-md bg-gray-800 p-3 sm:p-4 "
    >
      <p className="text-white text-sm sm:text-base">{Data.day}</p>
      <img src={Data.img} alt="" className="w-10 sm:w-12 md:w-14" />
      <article className="flex gap-2 justify-between w-full mt-2">
        <p className="text-white text-sm sm:text-base">{Data.Tempmorning}</p>
        <p className="text-white text-sm sm:text-base">{Data.Tempevening}</p>
      </article>
    </div>
  ));

  return (
    <div className="w-full max-w-[700px]">
      <h1 className="text-white text-left mt-4 p-2 sm:p-4 text-lg sm:text-xl">
        Daily Forecast
      </h1>
      <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
        {forecastElements}
      </section>
    </div>
  );
}
