import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function UnitsDropdown() {
  const [open, setOpen] = useState(false);
  const [system, setSystem] = useState("metric");
  const [settings, setSettings] = useState({
    temperature: "Celsius (°C)",
    wind: "km/h",
    precipitation: "Millimeters (mm)",
  });

  const toggleDropdown = () => setOpen(!open);

  const handleSelect = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };

  return (
    <div className="relative inline-block text-left">
      {/* Units Button (stays the same UI) */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition max-w-[100px]"
      >
        Units ({system === "metric" ? "Metric" : "Imperial"})
        <ChevronDown size={18} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-64 bg-[#1E1E2F] text-white rounded-xl shadow-lg border border-purple-600 z-50">
          <div className="p-4">
            {/* Switch Mode */}
            <p className="font-semibold mb-3">
              Switch to {system === "metric" ? "Imperial" : "Metric"}
            </p>

            {/* Temperature */}
            <div className="mb-3">
              <p className="text-sm text-gray-400">Temperature</p>
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
              <p className="text-sm text-gray-400">Wind Speed</p>
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
              <p className="text-sm text-gray-400">Precipitation</p>
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
