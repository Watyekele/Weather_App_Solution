export default function Details() {
  const Detailsinfo = [
    { id: "1", statement: "Feels like", weather: "18°" },
    { id: "2", statement: "Humidity", weather: "46%" },
    { id: "3", statement: "Wind", weather: "14km/h" },
    { id: "4", statement: "Precipitation", weather: "0mm" },
  ];

  return (
    <div
      className="
        grid 
        grid-cols-2        /* 2 columns by default (mobile) */
        sm:grid-cols-2     /* still 2 columns on small screens */
        md:grid-cols-3     /* 3 columns on medium screens */
        lg:grid-cols-4     /* 4 columns on large screens */
        gap-4
        w-full mt-4
      "
    >
      {Detailsinfo.map((detail) => (
        <article
          key={detail.id}
          className="text-white p-4 h-34 
          flex flex-col justify-between items-center
          rounded-md bg-gray-800"
        >
          <p className="text-xl">{detail.statement}</p>
          <p className="text-2xl">{detail.weather}</p>
        </article>
      ))}
    </div>
  );
}
