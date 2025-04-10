interface ProjectProps {
  title: String;
  year: String;
  description: String;
  image: string;
}

export function Project({ title, year, description, image }: ProjectProps) {
  return (
    <div className="hover:scale-110 transition delay-50 duration-300 ease-in-out" >
      <img className="w-52 rounded-2xl " src={image} alt="" />
      <div className="flex flex-col items-baseline">
        <p className="text-2xl ">{title}</p>
        <p className="text-gray-500">{year}</p>
      </div>
      <p className="w-56">{description}</p>
    </div>
  );
}
