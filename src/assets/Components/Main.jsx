import Details from "./Details";
import Forecast from "./Forecast";
export default function Main() {
  return (
    <div className=" w-[80%] flex  flex-col   min-h-[790px]  ">
      <div className="max-w-[700px] h-[286px] relative  ">
        <img
          src="../bg-today-large.svg"
          alt="Weather-today-image"
          className=" w-[700px] h-[286px] "
        />
        <div className="flex items-center gap-10 justify-center">
          <div className="flex items-center gap-2">
            <section className="text-white text-xl text-left absolute left-8 top-24">
              <p>Berlin, Germany</p>
              <p>Tuesday, August, 2025</p>
            </section>
            <div className=" flex items-center absolute right-8 top-16">
              <img
                src="../icon-sunny.webp"
                alt="Sunny-icon"
                className=" w-[100px] "
              />
              <section className="text-white">
                <p className="font-italic text-7xl font-semibold italic text-yellow-500">
                  20<sup>o</sup>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Details />
      <Forecast />
    </div>
  );
}
