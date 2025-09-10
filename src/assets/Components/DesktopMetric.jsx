export default function DesktopMetric() {
  return (
    // Main Content
    <div className="w-[1216px] h-[797px] flex  items-start justify-center border-none border-white  [background:rgb(2,1,45)] ">
      <header className="w-[1200px] h-[43px] border flex items-center justify-between p-2  mt-[48px] border-white/50 mx-[112px] ">
        <img src="../logo.svg" alt="" />
        <section className="flex border  px-2 py-1 m-1 gap-2 bg-gray-700 rounded-md">
          <img src="../icon-units.svg" alt="" />
          <p className="text-white text-lg">Units</p>
          <img src="../icon-dropdown.svg" alt="" />
        </section>
      </header>
      <section>
        <p className="text-white">Hows the sky looking Today?</p>
      </section>
    </div>
  );
}
