import ForecastData from "./ForecastData.js";
export default function Forecast() {
  const forecastElements = ForecastData.map((Data, index) => (
    <div
      key={Data.id || index}
      className=" flex flex-col border-none w-[100.57px] h-[160px] rounded-md bg-gray-800 p-2"
    >
      <p className="text-white text-md">{Data.day}</p>
      <img src={Data.img} alt="" />
      <article className="flex gap-2 justify-between p-2">
        <p className="text-white">{Data.Tempmorning} </p>
        <p className="text-white">{Data.Tempevening} </p>
      </article>
    </div>
  ));

  return (
    <div>
      <h1 className="text-white text-left mt-4 p-4">Daily Forecast</h1>
      <section className="flex gap-2 max-w-[700px]">{forecastElements}</section>
    </div>
  );
}
