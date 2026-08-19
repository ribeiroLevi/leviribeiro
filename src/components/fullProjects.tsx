import ReactMarkdown from "react-markdown";
import { Footer } from "./footer";
import { ProjectHeader } from "./projectHeader";

interface FullProjectProps {
  title: string;
  fullPic: string;
  blocks: (
    | { type: "text"; content: string }
    | { type: "image"; src: string }
    | { type: "embed"; embedUrl: string }
    | { type: "link"; url: string; label: string }
  )[];
  links?: string[];
}

export function FullProject({
  title,
  fullPic,
  blocks,
  links,
}: FullProjectProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <ProjectHeader />

      <div className="flex flex-col items-center w-full gap-10">
        <img src={fullPic} alt={`${title} header`} className="w-full" />

        <h1 className="text-6xl text-center font-bebas">{title}</h1>

        <div className="flex flex-col w-2/3 gap-10">
          {blocks.map((block, index) => {
            if (block.type === "text") {
              return (
                <div
                  key={index}
                  className="space-y-6 text-xl prose font-gabarito"
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

            if (block.type === "embed") {
              return (
                <div key={index} className="w-full aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={block.embedUrl}
                    title="Embedded video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              );
            }

            if (block.type === "link") {
              return (
                <div key={index} className="-mt-6">
                  <a
                    href={block.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-blue-600 underline transition-colors font-gabarito hover:text-blue-500"
                  >
                    {block.label}
                  </a>
                </div>
              );
            }

            return null;
          })}
        </div>

        {links && links.length > 0 && (
          <div className="mt-6 space-y-2 text-lg font-gabarito">
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
