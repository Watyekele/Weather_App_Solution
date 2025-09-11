export default function Main() {
  return (
    <div className="w-[1216px] h-[797px]  m-8  ">
      <section className="flex gap-4 items-center justify-center m-2">
        <input
          type="text"
          placeholder="Search for a place..."
          className=" text-white border-none w-[50%] rounded-md pl-8  px-2 py-1 bg-[url('../icon-search.svg')]
           bg-no-repeat bg-[left_0.5rem_center] bg-gray-700"
        />
        <button
          type="submit"
          className="border-none rounded-md text-white px-2 py-1 bg-blue-700"
        >
          Search
        </button>
      </section>
      <div>
        <div className="w-[700px] h-[286px] relative mt-6 ">
          <img
            src="../bg-today-large.svg"
            alt=""
            className=" w-[700px] h-[286px] "
          />
          <div className="flex items-center gap-10 justify-center">
            <div className="flex items-center gap-2">
              <section className="text-white text-xl text-left absolute left-8 top-24">
                <p>Berlin, Germany</p>
                <p>Tuesday, August, 2025</p>
              </section>
              <div className=" flex items-center absolute right-8 top-16">
                <img src="../icon-sunny.webp" alt="" className=" w-[100px] " />
                <section className="text-white">
                  <p className="font-italic text-7xl font-semibold italic text-yellow-500">
                    20<sup>o</sup>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
