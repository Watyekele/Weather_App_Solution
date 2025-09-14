export default function HourlyForecast() {
  const hours = [
    { time: "3 PM", temp: "20°", icon: "../icon-overcast.webp" },
    { time: "4 PM", temp: "20°", icon: "../icon-partly-cloudy.webp" },
    { time: "5 PM", temp: "20°", icon: "../icon-sunny.webp" },
    { time: "6 PM", temp: "19°", icon: "../icon-overcast.webp" },
    { time: "7 PM", temp: "18°", icon: "../icon-drizzle.webp" },
    { time: "8 PM", temp: "18°", icon: "../icon-snow.webp" },
    { time: "9 PM", temp: "17°", icon: "../icon-drizzle.webp" },
    { time: "10 PM", temp: "17°", icon: "../icon-overcast.webp" },
  ];

  return (
    <div className=" w-[318px] h-[620px]  bg-gray-800 rounded-xl p-4 text-white flex flex-col gap-4 mt-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Hourly forecast</h2>
        <button className="flex items-center gap-2 bg-gray-700 px-2 py-1 rounded-md text-sm">
          Tuesday <img src="../icon-dropdown.svg" alt="dropdown" />
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col  gap-2">
        {hours.map((hour, i) => (
          <div
            key={i}
            className="flex justify-between items-center h-[60px]  bg-gray-700 rounded-lg px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <img src={hour.icon} alt="icon" className="w-6 h-6" />
              <p className="text-md">{hour.time}</p>
            </div>
            <p className="text-md">{hour.temp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
