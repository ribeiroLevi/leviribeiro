interface ProjectProps {
  title: String;
  year: String;
  description: String;
  image: string;
}

export function Project({ title, year, description, image }: ProjectProps) {
  return (
    <div>
      <img className="w-52 rounded-2xl" src={image} alt="" />
      <div className="flex flex-row items-baseline gap-1">
        <p className="text-2xl ">{title}</p>
        <p className="text-gray-500">{year}</p>
      </div>
      <p className="w-56">{description}</p>
    </div>
  );
}
