import { MoveDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import "./index.css";
import { Experiences } from "./components/experiences";
import { SectionHeader } from "./components/sectionHeader";
import { Project } from "./components/project";
import TheGoodDev from "./assets/TheGoodDev.png";
import Deck from "./assets/DECK.png";
import Zefiro from "./assets/Zefiro.png";
import SenhorPatinhas from "./assets/SenhorPatinhas.png";
import SementinhaDoMal from "./assets/SementinhaDoMal.png";
import MidiPie from "./assets/MidipIE.png";
import Alexandria from "./assets/Alexandria.png";

export function App() {
  return (
    <>
      <div className="w-full flex flex-col h-screen items-center justify-center">
        <nav className="sticky top-0 z-50 flex bg-white flex-row justify-between items-center w-11/12 h-20">
          <p className="font-gabarito text-xl">levi ribeiro</p>
          <div className="font-gabarito flex flex-row gap-6">
            <a href="#about">sobre</a>
            {/*<a href="#experiences">experiências</a>*/}
            <a href="#projects">projetos</a>
            <a href="#articles">artigos</a>
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
      <div
        id="about"
        className="w-full flex flex-col  items-center justify-center"
      >
        <div className="h-92 my-24 w-11/12 flex flex-row items-center justify-between">
          <div className="w-1/2 flex justify-start">
            <h1 className="w-1 text-7xl font-gabarito ">Sobre mim</h1>
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

      <div
        id="experiences"
        className="w-full flex flex-col h-2/3 scroll-smooth  items-center justify-center"
      >
        <div className="w-11/12 font-gabarito gap-10 flex flex-col">
          {/*<div>
            <SectionHeader
              littleTitle={"MINHAS"}
              bigTitle={"Experiências"}
              description={
                "Adentrei a o universo do design e desenvolvimento desde o primeiro semestre da univerisdade e desde então nunca mais parei de me envolver em projetos e iniciativas"
              }
            />
            <p>MINHAS</p>
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
              titleBold={"Monitoria de Cognição e Tecnologias Digitais"}
              title={", UFC - Monitor Remunerado"}
              dateSpan={"Maio de 2024 a Setembro de 2024"}
              description={
                "Auxiliava os alunos da disciplina de Cognição e Tecnologias Digitais no Instituto UFC Virtual."
              }
            />
            <Experiences
              titleBold={"Laboratório de Computação Física"}
              title={", UFC - Bolsista Voluntário"}
              dateSpan={"Dezembro de 2023 a Janeiro de 2025"}
              description={
                "Desenvolvi projetos que integram Eletrônica e Impressão 3D. Entre eles, projetos para o Processo Seletivo e, atualmente, desenvolve o projeto “FigMate” e compõe a equipe de projeto conjunto com o curso de Enfermagem."
              }
            />
            <Experiences
              titleBold={"Célula de Design Multimídia"}
              title={", UFC - Desenvolvedor e Pesquisador"}
              dateSpan={"Maio de 2023 a Janeiro de 2024"}
              description={
                "Estou desenvolvendo jogo em Unity para pesquisa em Dark Patterns e bem-estar digital. Programei o protótipo do mesmo que foi apresentado no Simpósio Brasileiro sobre Fatores Humanos em Sistemas Computacionais (IHC, 2024). Também desenvolvi o site atual do grupo e pesquiso na área de dark patterns."
              }
            />
            <Experiences
              titleBold={"iREDE"}
              title={", Apple Developer Academy Residency - Design UI/UX"}
              dateSpan={"Desde Fevereiro de 2025"}
              description={
                "Atuo como UI/UX de uma das aplicações multiplataforma (iOS, MacOS e VisionOS) para atender aos programas da Apple sediados em regiões interioranas do Brasil."
              }
            />
          </div> */}

          <div id="projects"></div>
          <SectionHeader
            littleTitle={"MEUS"}
            bigTitle={"Projetos"}
            description={
              "Vindo de um background muito diverso, meus projetos navegam entre o design, a programação, sistemas embarcados, modelagem e impressão 3D e outros. Em todos os projetos, principalmente os pessoais, tento adicionar um poucos de personalidade de maneira que eles atendam à necessidade ao mesmo tempo que não são ”só mais um na multidão”."
            }
          />
          <div className="gap-2 mb-24 flex flex-row overflow-auto">
            <Project
              title={"The Good Dev"}
              year={"Em Andamento"}
              description={
                "Jogo mobile para conscientização sobre dark patterns em jogos."
              }
              image={TheGoodDev}
            />
            <Project
              title={"Zéfiro"}
              year={"2025"}
              description={
                "Projeto para solucionar o problema do calor no bloco do curso de Sistemas e Mídias Digitais."
              }
              image={Zefiro}
            />
            <Project
              title={"DECK"}
              year={"2024"}
              description={
                "Rede social de projetos voltado para o curso de Sistemas e Mídias Digitais."
              }
              image={Deck}
            />
            <Project
              title={"MidiPie"}
              year={"2024"}
              description={
                "Sintetizador WEB que interpreta sinais MIDI e transforma em som."
              }
              image={MidiPie}
            />
            <Project
              title={"Alexandria"}
              year={"2023"}
              description={"Biblioteca de cartas do jogo Magic The Gathering."}
              image={Alexandria}
            />
            <Project
              title={"Sementinha do Mal"}
              year={"2023"}
              description={"MIDI construído com Arduino e Impressão 3D."}
              image={SementinhaDoMal}
            />
            <Project
              title={"Senhor Patinhas"}
              year={"2023"}
              description={
                "Curta que faz paródia de produções Noir dos anos 40."
              }
              image={SenhorPatinhas}
            />
          </div>
        </div>
      </div>
    </>
  );
}
