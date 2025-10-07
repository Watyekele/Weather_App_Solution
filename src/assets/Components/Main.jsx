import Details from "./Details";
import Forecast from "./Forecast";

export default function Main() {
  return (
    <div className="w-full lg:flex-1 flex flex-col items-center px-2 sm:px-4">
      {/* Weather Card */}
      <div className="w-full  max-w-[480px] sm:max-w-[700px] h-[200px] sm:h-[250px] md:h-[286px] relative rounded-xl overflow-hidden">
        <img
          src="../bg-today-large.svg"
          alt="Weather-today-image"
          className="w-full h-full object-cover"
        />

        {/* Location + Date */}
        <div className="flex flex-col sm:flex-row">
          <p className=" absolute left-2 sm:left-8 top-16 sm:top-24 text-white text-xs sm:text-lg md:text-xl font-bold text-lg ml-2 sm:text-2xl block">
            Berlin, Germany
            <span className="block"> Tuesday, August, 2025</span>
          </p>

          {/* Icon + Temperature */}
          <span className="absolute right-4 sm:right-8 top-10 sm:top-16 flex items-center gap-2 sm:gap-8">
            <img
              src="../icon-sunny.webp"
              alt="Sunny-icon"
              className="w-[50px] sm:w-[80px] md:w-[100px] "
            />

            <p className="italic font-semibold text-3xl sm:text-6xl md:text-7xl">
              20°
            </p>
          </span>
        </div>
      </div>

      {/* Additional Info */}
      <div className="w-full max-w-[700px] flex flex-col items-center">
        <Details />
        <Forecast />
      </div>
    </div>
  );
}
