import Main from "./Main";
import HourlyForecast from "./HourlyForecast";
export default function DesktopMetric() {
  return (
    // Main Content
    <div className="w-[1440px] min-h-[797px]  flex items-start justify-center border-none border-white  [background:rgb(2,1,45)] ">
      {/* // Header Section */}
      <div className=" min-w-[1216px]  flex flex-col items-center  gap-8 mt-4 border border-none ">
        <header className="w-[85%]  h-[43px] border flex items-center justify-between p-2  mt-[48px] border-none">
          <img src="../logo.svg" alt="Weather-now-icon" />
          <section className="flex border-none  px-2 py-1 m-1 gap-2 bg-gray-700 rounded-md">
            <img src="../icon-units.svg" alt="" />
            <p className="text-white text-lg">Units</p>
            <img src="../icon-dropdown.svg" alt="drop-down-icon" />
          </section>
        </header>
        <section className="pt-4">
          <p className="text-white text-center font-bricolage font-bold text-[50px]">
            How's the sky looking Today?
          </p>
        </section>
        <section className="w-[80%] flex gap-6 items-center justify-center m-2">
          <input
            type="text"
            placeholder="Search for a place..."
            className=" text-white border-none w-[50%] rounded-md pl-8  px-2 py-2 bg-[url('../icon-search.svg')]
           bg-no-repeat bg-[left_0.5rem_center] bg-gray-700"
          />
          <button
            type="submit"
            className="border-none rounded-md text-white w-20 px-2 py-2 bg-blue-700"
          >
            Search
          </button>
        </section>
        <section className="flex items-start ">
          <Main />
          <HourlyForecast />
        </section>
      </div>
    </div>
  );
}
