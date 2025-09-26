import Details from "./Details";
import Forecast from "./Forecast";

export default function Main() {
  return (
    <div className="w-full  flex flex-col items-center px-4 sm:px-6 lg:px-12 ">
      {/* Weather Card */}
      <div className="w-full max-w-[650px] h-[200px] sm:h-[250px] md:h-[286px] relative rounded-xl overflow-hidden">
        <img
          src="../bg-today-large.svg"
          alt="Weather-today-image"
          className="w-full sm:w-full h-full object-cover"
        />

        {/* Location + Date */}
        <section className="absolute left-2 sm:left-8 top-16 sm:top-24 text-white text-xs sm:text-lg md:text-xl">
          <p className="font-bold text-lg ml-2 sm:text-2xl">Berlin, Germany</p>
          <p>Tuesday, August, 2025</p>
        </section>

        {/* Icon + Temperature */}
        <div className="absolute right-4 sm:right-8 top-10 sm:top-16 flex items-center gap-4 sm:gap-8">
          <img
            src="../icon-sunny.webp"
            alt="Sunny-icon"
            className="w-[60px] sm:w-[80px] md:w-[100px]"
          />
          <section className="text-white">
            <p className="italic font-semibold text-3xl sm:text-6xl md:text-7xl">
              20°
            </p>
          </section>
        </div>
      </div>

      {/* Additional Info */}
      <div className="w-full max-w-[700px]">
        <Details />
        <Forecast />
      </div>
    </div>
  );
}
