interface ProjectProps {
  title: String;
  year: String;
  description: String;
  image: string;
  link: string;
}

export function Project({
  title,
  year,
  description,
  image,
  link,
}: ProjectProps) {
  return (
    <a href={link}>
      <div className="transition duration-300 ease-in-out hover:scale-110 delay-50">
        <img className="w-full mx-auto mb-3 rounded-2xl" src={image} alt="" />
        <div className="flex flex-col items-baseline">
          <p className="text-2xl">{title}</p>
          <p className="text-gray-500">{year}</p>
        </div>
        <p className="w-full text-xl lg:text-md md:w-3/4 lg:w-5/6">
          {description}
        </p>
      </div>
    </a>
  );
}
