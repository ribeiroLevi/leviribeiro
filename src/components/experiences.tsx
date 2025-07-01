interface ExperiencesAssets {
  titleBold: String;
  title: String;
  dateSpan: String;
  description: String;
}
export function Experiences({ titleBold, title, dateSpan }: ExperiencesAssets) {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-col lg:text-3xl">
        <h1 className="w-5/6 lg:w-full text-xl lg:text-3xl">{title}</h1>
        <span className=" lg:text-xl">{titleBold}</span>
      </div>
      <p className="lg:text-3xl">{dateSpan}</p>
    </div>
  );
}
