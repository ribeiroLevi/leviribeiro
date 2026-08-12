interface ExperiencesAssets {
  titleBold: String;
  title: String;
  dateSpan: String;
  description: String;
}
export function Experiences({ titleBold, title, dateSpan }: ExperiencesAssets) {
  return (
    <div className="flex flex-row items-center justify-between w-full">
      <div className="flex flex-col lg:text-3xl">
        <h1 className="w-5/6 text-xl lg:w-full lg:text-3xl">{title}</h1>
        <span className=" lg:text-xl">{titleBold}</span>
      </div>
      <p className="lg:text-3xl">{dateSpan}</p>
    </div>
  );
}
