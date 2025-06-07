import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { Project } from "./components/project";
import { FullProject } from "./components/fullProjects";
import MidiPieBanner from "./assets/midipieBanner.png";
import MDWKBanner from "./assets/MDWKBANNER.png";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/project/midipie"
          element={
            <FullProject
              title={"MidiPie: Cozinhe - praticamente - em qualquer lugar."}
              fullPic={MidiPieBanner}
              description={
                "Cozinhar, quando utilizado para se referir ao processo de produção musical, é comumente relacionado ao ato de produzir algo muito bom. Mas, de maneira geral, a gíria se relaciona ao processo de construir/fazer qualquer coisa muito boa. Com isso em mente, da semana passada pra cá eu peguei pra refazer esse projetinho antigo que eu comecei mas não terminei. Ele é um sintetizador WEB que pega sinais MIDI e os transforma em ondas sonoras. Elas podem ser manipuladas de algumas formas — na aplicação dá pra alterar frequência, wave shape, gain e sustain. Como ele foi um projeto iniciado há bastante tempo, sua construção estava sendo feita em JavaScript e resolvi terminá-lo com os arquivos que já existiam. Devo admitir que voltar a utilizar JS depois de quase 6 meses teve suas dificuldades, mas valeu a pena."
              }
            />
          }
        ></Route>

        <Route
          path="/project/mdwk"
          element={
            <FullProject
              title={"Marca MDWK26"}
              fullPic={MDWKBanner}
              description={
                "Este espaço é reservado para a futura identidade visual do evento Media Week 2026, promovido pelo curso de Sistemas e Mídias Digitais. Aqui será apresentada a proposta gráfica oficial que representará o evento em todas as suas aplicações, como materiais de divulgação, redes sociais, sinalização, brindes e apresentações. A identidade visual irá refletir os valores, a criatividade e a inovação que fazem parte da essência do curso, buscando dialogar com temas contemporâneos da mídia digital, tecnologia, design e cultura. O conceito visual será pensado para engajar tanto o público acadêmico quanto os visitantes externos, transmitindo uma imagem moderna, acessível e alinhada com os objetivos do evento. Em breve, este espaço será atualizado com: logo oficial da Media Week 2026, paleta de cores e tipografia, elementos gráficos e padrões visuais, versões aplicadas em diferentes formatos. Fique atento às próximas atualizações!"
              }
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
