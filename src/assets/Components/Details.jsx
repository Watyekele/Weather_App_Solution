export default function Details() {
  return (
    <div className="flex  max-w-[700px] h-[118px] gap-6  ">
      <article
        className=" flex flex-col items-center justify-between 
      border-none w-[160px] h-[118px] rounded-md text-white p-2 bg-gray-800"
      >
        <p className="mt-2">Feels like</p>
        <p className="text-2xl">
          18<sup>o</sup>
        </p>
      </article>
      <article
        className="  flex flex-col items-center justify-between 
      border-none w-[160px] h-[118px] rounded-md text-white p-2 bg-gray-800"
      >
        <p className="mt-2">Humidity</p>
        <p className="text-2xl">46%</p>
      </article>
      <article
        className="flex flex-col items-center justify-between 
      border-none w-[160px] h-[118px] rounded-md text-white p-2 bg-gray-800"
      >
        <p className="mt-2">Wind</p>
        <p className="text-2xl">14km/h</p>
      </article>
      <article
        className="flex flex-col items-center justify-between 
      border-none w-[160px] h-[118px] rounded-md text-white p-2 bg-gray-800"
      >
        <p className="mt-2">Precipitation</p>
        <p className="text-2xl">0 mm</p>
      </article>
    </div>
  );
}
