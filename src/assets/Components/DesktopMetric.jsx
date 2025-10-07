import Main from "./Main";

export default function DesktopMetric({ units }) {
  return (
    <div className="flex flex-col items-center max-w-[700px] w-full">
      <Main units={units} />
    </div>
  );
}
