import { MoveDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import "../index.css";
import { SectionHeader } from "./sectionHeader";
import { Project } from "./project";
import TheGoodDev from "../assets/TheGoodDev.png";
import Deck from "../assets/DECK.png";
import Zefiro from "../assets/Zefiro.png";
import SenhorPatinhas from "../assets/SenhorPatinhas.png";
import SementinhaDoMal from "../assets/SementinhaDoMal.png";
import MidiPie from "../assets/MidipIE.png";
import Alexandria from "../assets/Alexandria.png";
import MDWK from "../assets/MDWK.png";
import { Experiences } from "./experiences";
import { Header } from "./pageHeader";
import { Footer } from "./footer";

export function Home() {
  return (
    <>
      <div className="w-full flex flex-col h-screen items-center justify-center">
        <Header></Header>
        <div className="w-full h-full flex flex-col gap-1 justify-center items-center">
          <p className=" text-9xl lg:text-[307px] leading-25 lg:leading-54 font-bebas">
            LEVI RIBEIRO
          </p>
          <div className="flex justify-start w-full text-left sm:text-center">
            <p className="lg:mt-1 w-full">
              <TypeAnimation
                sequence={[
                  "interface",
                  1000,
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
                  width: "100%",
                  fontFamily: "Gabarito",
                }}
                repeat={Infinity}
              />
            </p>
          </div>
        </div>
        <MoveDown className="size-8 mb-3 -mt-9" />
      </div>
      <div
        id="about"
        className="w-full flex flex-col items-center justify-center"
      >
        <div className="lg:h-92 my-32 md:my-24 lg:my-24 w-full lg:w-11/12 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="text-2xl justify-center w-1/2 flex lg:justify-start">
            <h1 className="lg:w-1 lg:text-7xl font-gabarito font-bold lg:font-normal ">
              Sobre mim
            </h1>
          </div>
          <p className="text-center md:w-11/12 lg:w-1/2 lg:text-2xl font-gabarito">
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
        className="w-full flex flex-col h-2/3 scroll-smooth items-center justify-center"
      >
        <div className="w-11/12 font-gabarito gap-8 flex flex-col">
          <div>
            <SectionHeader
              littleTitle={"MINHAS"}
              bigTitle={"Experiências"}
              description={
                "Adentrei no universo do design e desenvolvimento no primeiro semestre da univerisdade e desde então nunca mais parei de me envolver em projetos e iniciativas"
              }
            />
          </div>
          <div className="flex flex-col gap-5">
            <Experiences
              titleBold={"Container Digital Jr - UFC"}
              title={"Projetista e Líder de Projetos"}
              dateSpan={"2023-2024"}
              description={
                "Desenvolvi aplicações WEB com HTML, CSS, JavaScript Vanilla e ReactJS. Atuei como Líder de Projetos em projeto de capacitação interna."
              }
            />

            <Experiences
              titleBold={"Laboratório de Computação Física"}
              title={"Bolsista Voluntário"}
              dateSpan={"2023-2025"}
              description={
                "Desenvolvi projetos que integram Eletrônica e Impressão 3D. Entre eles, projetos para o Processo Seletivo e, atualmente, desenvolve o projeto “FigMate” e compõe a equipe de projeto conjunto com o curso de Enfermagem."
              }
            />

            <Experiences
              titleBold={"Monitoria de Cognição e Tecnologias Digitais"}
              title={"Monitor Remunerado"}
              dateSpan={"2024"}
              description={
                "Auxiliava os alunos da disciplina de Cognição e Tecnologias Digitais no Instituto UFC Virtual."
              }
            />

            <Experiences
              titleBold={"Célula de Design Multimídia"}
              title={"Desenvolvedor e Pesquisador"}
              dateSpan={"2024-"}
              description={
                "Estou desenvolvendo jogo em Unity para pesquisa em Dark Patterns e bem-estar digital. Programei o protótipo do mesmo que foi apresentado no Simpósio Brasileiro sobre Fatores Humanos em Sistemas Computacionais (IHC, 2024). Também desenvolvi o site atual do grupo e pesquiso na área de dark patterns."
              }
            />
            <Experiences
              titleBold={"Residência Apple Developer Academy - iREDE"}
              title={"Designer UI/UX"}
              dateSpan={"2025-"}
              description={
                "Atuo como UI/UX de uma das aplicações multiplataforma (iOS, MacOS e VisionOS) para atender aos programas da Apple sediados em regiões interioranas do Brasil."
              }
            />
          </div>

          <div id="projects"></div>
          <SectionHeader
            littleTitle={"MEUS"}
            bigTitle={"Projetos"}
            description={
              "Vindo de um background muito diverso, meus projetos navegam entre o design, a programação, sistemas embarcados, modelagem e impressão 3D e outros. Em todos os projetos, principalmente os pessoais, tento adicionar um poucos de personalidade de maneira que eles atendam à necessidade ao mesmo tempo que não são ”só mais um na multidão”."
            }
          />
          <div className="gap-6 justify-center mb-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16">
            <Project
              link="/project/mdwk"
              title={"MDWK26"}
              year={"2025"}
              description={
                "Identidade Visual para o evento Media Week 2026 do curso Sistemas e Mídias Digitais."
              }
              image={MDWK}
            />
            <Project
              link=""
              title={"The Good Dev"}
              year={"Em Andamento"}
              description={
                "Jogo mobile para conscientização sobre dark patterns em jogos."
              }
              image={TheGoodDev}
            />
            <Project
              link="/project/zefiro"
              title={"Zéfiro"}
              year={"2025"}
              description={
                "Projeto para solucionar o problema do calor no bloco do curso de Sistemas e Mídias Digitais."
              }
              image={Zefiro}
            />
            <Project
              link="/project/deck"
              title={"DECK"}
              year={"2024"}
              description={
                "Rede social de projetos voltado para o curso de Sistemas e Mídias Digitais."
              }
              image={Deck}
            />
            <Project
              link="/project/midipie"
              title={"MidiPie"}
              year={"2024"}
              description={
                "Sintetizador WEB que interpreta sinais MIDI e transforma em som."
              }
              image={MidiPie}
            />
            <Project
              link="https://github.com/ribeiroLevi/AlexandriaV2-MTG"
              title={"Alexandria"}
              year={"2023"}
              description={"Biblioteca de cartas do jogo Magic The Gathering."}
              image={Alexandria}
            />
            <Project
              link="https://github.com/ribeiroLevi/SementinhaDoMal-MIDI"
              title={"Sementinha do Mal"}
              year={"2023"}
              description={"MIDI construído com Arduino e Impressão 3D."}
              image={SementinhaDoMal}
            />
            <Project
              link="https://youtu.be/D-aFkgHhbcY"
              title={"Senhor Patinhas"}
              year={"2023"}
              description={
                "Curta que faz paródia de produções Noir dos anos 40."
              }
              image={SenhorPatinhas}
            />
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
