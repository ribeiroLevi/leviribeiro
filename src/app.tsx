import { MoveDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import "./index.css";
import { Experiences } from "./components/experiences";
export function App() {
  return (
    <>
      <div className="w-full flex flex-col h-screen items-center justify-center">
        <nav className="flex flex-row justify-between items-center w-11/12 h-20">
          <p className="font-gabarito text-xl">levi ribeiro</p>
          <div className="font-gabarito flex flex-row gap-6">
            <a href="">sobre</a>
            <a href="">experiências</a>
            <a href="">projetos</a>
            <a href="">artigos</a>
          </div>
        </nav>
        <div className="w-ful h-full flex flex-col gap-1 justify-center items-center">
          <p className="text-[307px] leading-44 font-bebas">LEVI RIBEIRO</p>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "interface",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "experiência do usuário",
              1000,
              "código",
              1000,
              "impressão 3d",
              1000,
              "interface, experiência do usuário, código, impressão 3d",
              1000,
            ]}
            wrapper="p"
            speed={50}
            style={{
              fontSize: "36px",
              display: "inline-block",
              fontFamily: "Gabarito",
            }}
            repeat={Infinity}
          />
        </div>
        <MoveDown className="size-8 mb-3 -mt-9" />
      </div>
      <div className="w-full flex flex-col h-2/3 items-center justify-center">
        <div className="h-screen w-11/12 flex flex-row items-center justify-between">
          <div className="w-1/2 flex justify-start">
            <h1 className="w-1 text-7xl font-gabarito">Sobre Mim</h1>
          </div>
          <p className="w-1/2 text-2xl font-gabarito">
            Curso Sistemas e Mídias Digitais, na Universidade Federal do Ceará,
            com foco em UX Researching. Apesar de trabalhar majoritariamente com
            UI/UX, também programo em React e C# para desenvolvimento de jogos.
            Atualmente, atuo como Game Dev e pesquisador na Célula de Design e
            Multimídia e como designer UI/UX na Residência Apple Academy.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col h-2/3  items-center justify-center">
        <div className="w-11/12 font-gabarito gap-10 flex flex-col">
          <div>
            <p>MINHAS</p>
            <h1 className="text-6xl">Experiências</h1>
            <p className="text-xl">
              Adentrei o universo do design e desenvolvimento desde o primeiro
              semestre da universidade e desde então nunca parei de me envolver
              em projetos e iniciativas.
            </p>
          </div>
          <div className="flex flex-col">
            <Experiences
              titleBold={"Container Digital Jr"}
              title={", UFC - Projetista e Líder de Projetos"}
              dateSpan={"Maio de 2023 a Janeiro de 2024"}
              description={
                "Desenvolvi aplicações WEB com HTML, CSS, JavaScript Vanilla e ReactJS. Atuei como Líder de Projetos em projeto de capacitação interna."
              }
            />

            <Experiences
              titleBold={"Monitor de Cognição e Tecnologias Digitais"}
              title={", UFC - Bolsista Remunerado"}
              dateSpan={"Maio de 2024 a Setembro de 2024"}
              description={
                "Auxiliava os alunos da disciplina de Cognição e Tecnologias Digitais no Instituto UFC Virtual."
              }
            />
            <Experiences
              titleBold={"Container Digital Jr"}
              title={", UFC - Projetista e Líder de Projetos"}
              dateSpan={"Maio de 2023 a Janeiro de 2024"}
              description={
                "Desenvolvi aplicações WEB com HTML, CSS, JavaScript Vanilla e ReactJS. Atuei como Líder de Projetos em projeto de capacitação interna."
              }
            />
            <Experiences
              titleBold={"Container Digital Jr"}
              title={", UFC - Projetista e Líder de Projetos"}
              dateSpan={"Maio de 2023 a Janeiro de 2024"}
              description={
                "Desenvolvi aplicações WEB com HTML, CSS, JavaScript Vanilla e ReactJS. Atuei como Líder de Projetos em projeto de capacitação interna."
              }
            />
            <Experiences
              titleBold={"Container Digital Jr"}
              title={", UFC - Projetista e Líder de Projetos"}
              dateSpan={"Maio de 2023 a Janeiro de 2024"}
              description={
                "Desenvolvi aplicações WEB com HTML, CSS, JavaScript Vanilla e ReactJS. Atuei como Líder de Projetos em projeto de capacitação interna."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
