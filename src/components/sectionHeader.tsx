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
    <div>
      <p>{littleTitle}</p>
      <h1 className="text-6xl">{bigTitle}</h1>
      <p className="text-xl">{description}</p>
    </div>
  );
}
