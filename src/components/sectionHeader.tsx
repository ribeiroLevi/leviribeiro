interface sectionHeaderProps {
  littleTitle: String;
  bigTitle: String;
  description: String;
}
export function SectionHeader({
  littleTitle,
  bigTitle,
  description,
}: sectionHeaderProps) {
  return (
    <div className="w-11/12">
      <p>{littleTitle}</p>
      <h1 className="text-4xl lg:text-6xl">{bigTitle}</h1>
      <p className="text-md lg:text-xl">{description}</p>
    </div>
  );
}
