interface FullProjectProps {
  title: string;
  fullPic: string;
  blocks: (
    | { type: "text"; content: string }
    | { type: "image"; src: string }
  )[];
  links?: string[];
}

import ReactMarkdown from "react-markdown";
import { Footer } from "./footer";
import { ProjectHeader } from "./projectHeader";

export function FullProject({
  title,
  fullPic,
  blocks,
  links,
}: FullProjectProps) {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <ProjectHeader />

      <div className="w-full flex flex-col gap-10 items-center">
        <img src={fullPic} alt={`${title} header`} className="w-full" />

        <h1 className="font-bebas text-6xl text-center">{title}</h1>

        <div className="w-2/3 flex flex-col gap-10">
          {blocks.map((block, index) => {
            if (block.type === "text") {
              return (
                <div
                  key={index}
                  className="prose font-gabarito text-xl space-y-6"
                >
                  <ReactMarkdown>{block.content}</ReactMarkdown>
                </div>
              );
            }

            if (block.type === "image") {
              return (
                <img
                  key={index}
                  className="w-full"
                  src={block.src}
                  alt={`${title} extra`}
                />
              );
            }

            return null;
          })}
        </div>

        {links && links.length > 0 && (
          <div className="mt-6 font-gabarito text-lg space-y-2">
            <h2 className="text-2xl font-semibold">Related Links</h2>
            <ul className="list-disc list-inside">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
