import Main from "./Main";
export default function DesktopMetric() {
  return (
    // Main Content
    <div className="w-[1440px] min-h-[797px] flex  items-start justify-center border-none border-white  [background:rgb(2,1,45)] ">
      {/* // Header Section */}
      <div className=" w-[1440px] flex flex-col items-center  gap-8 mt-4 border border-none">
        <header className="w-[1216px] h-[43px] border flex items-center justify-between p-2  mt-[48px] border-none mx-[112px] ">
          <img src="../logo.svg" alt="" />
          <section className="flex border-none  px-2 py-1 m-1 gap-2 bg-gray-700 rounded-md">
            <img src="../icon-units.svg" alt="" />
            <p className="text-white text-lg">Units</p>
            <img src="../icon-dropdown.svg" alt="" />
          </section>
        </header>
        <section className="pt-4">
          <p className="text-white text-center font-bricolage font-bold text-[50px]">
            How's the sky looking Today?
          </p>
        </section>
        <Main />
      </div>
    </div>
  );
}
