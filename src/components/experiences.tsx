interface ExperiencesAssets {
  titleBold: String;
  title: String;
  dateSpan: String;
  description: String;
}
export function Experiences({
  titleBold,
  title,
  dateSpan,
  description,
}: ExperiencesAssets) {
  return (
    <>
      <div className="flex flex-row text-3xl">
        <span>{titleBold}</span>
        <h1>{title}</h1>
      </div>
      <p className="text-md">{dateSpan}</p>
      <p className="text-xl pb-8">{description}</p>
    </>
  );
}
