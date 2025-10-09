import { useState, useEffect, useRef } from "react";

export default function UnitsDropdown() {
  const [open, setOpen] = useState(false);
  const [system, setSystem] = useState("metric");
  const [settings, setSettings] = useState({
    temperature: "Celsius (°C)",
    wind: "km/h",
    precipitation: "Millimeters (mm)",
  });

  const dropdownRef = useRef(null); // reference for detecting outside clicks

  const toggleDropdown = () => setOpen(!open);

  const handleSelect = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };

  // 🟢 Close dropdown when clicking outside (desktop or mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); // for mobile

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* 🔘 Units Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 sm:gap-2 bg-gray-700 text-white 
                   px-2 sm:px-3 py-2 rounded-lg shadow-md hover:bg-gray-600 
                   transition min-w-[60px] sm:min-w-[80px]"
      >
        <img src="../icon-units.svg" className="w-4 sm:w-5" alt="" />
        Units
        <img src="../icon-dropdown.svg" alt="" className="w-3 sm:w-4" />
      </button>

      {/* 🟣 Dropdown Menu */}
      {open && (
        <div
          className="absolute mt-2 w-60 sm:w-64 bg-[#1E1E2F] text-white 
                     rounded-xl shadow-lg border border-purple-600 z-50 
                     max-h-[80vh] overflow-y-auto"
        >
          <div className="p-3 sm:p-4 text-sm sm:text-base">
            {/* Switch Mode */}
            <p className="font-semibold mb-3 text-center sm:text-left">
              Switch to {system === "metric" ? "Imperial" : "Metric"}
            </p>

            {/* Temperature */}
            <div className="mb-3">
              <p className="text-xs sm:text-sm text-gray-400">Temperature</p>
              <div
                onClick={() => handleSelect("temperature", "Celsius (°C)")}
                className={`p-2 rounded-md cursor-pointer ${
                  settings.temperature === "Celsius (°C)"
                    ? "bg-purple-700"
                    : "hover:bg-purple-800"
                }`}
              >
                Celsius (°C)
              </div>
              <div
                onClick={() => handleSelect("temperature", "Fahrenheit (°F)")}
                className={`p-2 rounded-md cursor-pointer ${
                  settings.temperature === "Fahrenheit (°F)"
                    ? "bg-purple-700"
                    : "hover:bg-purple-800"
                }`}
              >
                Fahrenheit (°F)
              </div>
            </div>

            {/* Wind Speed */}
            <div className="mb-3">
              <p className="text-xs sm:text-sm text-gray-400">Wind Speed</p>
              <div
                onClick={() => handleSelect("wind", "km/h")}
                className={`p-2 rounded-md cursor-pointer ${
                  settings.wind === "km/h"
                    ? "bg-purple-700"
                    : "hover:bg-purple-800"
                }`}
              >
                km/h
              </div>
              <div
                onClick={() => handleSelect("wind", "mph")}
                className={`p-2 rounded-md cursor-pointer ${
                  settings.wind === "mph"
                    ? "bg-purple-700"
                    : "hover:bg-purple-800"
                }`}
              >
                mph
              </div>
            </div>

            {/* Precipitation */}
            <div>
              <p className="text-xs sm:text-sm text-gray-400">Precipitation</p>
              <div
                onClick={() =>
                  handleSelect("precipitation", "Millimeters (mm)")
                }
                className={`p-2 rounded-md cursor-pointer ${
                  settings.precipitation === "Millimeters (mm)"
                    ? "bg-purple-700"
                    : "hover:bg-purple-800"
                }`}
              >
                Millimeters (mm)
              </div>
              <div
                onClick={() => handleSelect("precipitation", "Inches (in)")}
                className={`p-2 rounded-md cursor-pointer ${
                  settings.precipitation === "Inches (in)"
                    ? "bg-purple-700"
                    : "hover:bg-purple-800"
                }`}
              >
                Inches (in)
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
