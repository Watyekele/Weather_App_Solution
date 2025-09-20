export default function Details() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-[700px] mt-4">
      <article className="flex flex-col items-center justify-between border-none rounded-md text-white p-4 bg-gray-800">
        <p className="mt-2 text-sm sm:text-base">Feels like</p>
        <p className="text-xl sm:text-2xl">
          18<sup>°</sup>
        </p>
      </article>

      <article className="flex flex-col items-center justify-between border-none rounded-md text-white p-4 bg-gray-800">
        <p className="mt-2 text-sm sm:text-base">Humidity</p>
        <p className="text-xl sm:text-2xl">46%</p>
      </article>

      <article className="flex flex-col items-center justify-between border-none rounded-md text-white p-4 bg-gray-800">
        <p className="mt-2 text-sm sm:text-base">Wind</p>
        <p className="text-xl sm:text-2xl">14 km/h</p>
      </article>

      <article className="flex flex-col items-center justify-between border-none rounded-md text-white p-4 bg-gray-800">
        <p className="mt-2 text-sm sm:text-base">Precipitation</p>
        <p className="text-xl sm:text-2xl">0 mm</p>
      </article>
    </div>
  );
}
