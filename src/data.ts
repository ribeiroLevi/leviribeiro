import MidiPieBanner from "./assets/midipieBanner.png";
import MDWKBanner from "./assets/MDWKBANNER.png";

export const projects = [
  {
    path: "/project/midipie",
    title: "MidiPie: Cozinhe - praticamente - em qualquer lugar.",
    fullPic: MidiPieBanner,
    pics: [MidiPieBanner, MDWKBanner],
    description: `
Cozinhar, quando utilizado para se referir ao processo de produção musical, é comumente relacionado ao ato de produzir algo muito bom. Mas, de maneira geral, a gíria se relaciona ao processo de construir/fazer qualquer coisa muito boa.

Com isso em mente, da semana passada pra cá eu peguei pra refazer esse projetinho antigo que eu comecei mas não terminei. Ele é um sintetizador WEB que pega sinais MIDI e os transforma em ondas sonoras. Elas podem ser manipuladas de algumas formas — na aplicação dá pra alterar frequência, wave shape, gain e sustain.

Como ele foi um projeto iniciado há bastante tempo, sua construção estava sendo feita em JavaScript e resolvi terminá-lo com os arquivos que já existiam. Devo admitir que voltar a utilizar JS depois de quase 6 meses teve suas dificuldades, mas valeu a pena.

Apesar de ser um projeto antigo, ele foi fundamental para me tirar da zona de conforto de programar apenas landing pages ou sites empresariais.

Em um futuro próximo tenho vontade de construir um sintetizador maior e com mais manipulações de onda ao estilo Moog.
`,
  },
  {
    path: "/project/mdwk",
    title: "Marca Media Week 2026",
    pics: [MDWKBanner],
    fullPic: MDWKBanner,
    description: [`
Media Week é um evento anual do curso de Sistemas e Mídias Digitais onde os alunos podem assistir e ministras
palestras e oficinas dentro das quatro grande áreas do curso: Audiovisual, Jogos, Programação e Design. O evento
visa promover a integração entre as áreas e os alunos sendo um grande incentivo à multidisciplinaridade.

Durante a disciplina de Comunicação Visual II os alunos, em grupos, devem construir a identidade visual do evento
do ano seguinte, está foi a que desenvolvi.

Guiado pela ideia de "Diversidade, Empoderamento e Inspiração" construímos ícones para representar as Trilhas do
curso - "Trilhas" é o nome carinhoso que as áreas recebem dentro do curso.

  Olho — representa o Audiovisual. Nossa inspiração foi, obviamente o olho humano, pois ele permeia todos os
  processos do campo do Audiovisual. Contudo, não apenas isso, ele também representa o obturador de um câmera 
  que funciona como os olhos do equipamento

  Direcional — representa a trilha de Jogos. No curso, o campo dos Jogos Digitais é o mais estudado, assim nada
  melhor que o direcional de um controle de video game para representar essa Trilha.

  Chaves — representam Programação. Tentamos sair do óbvio, mas sem perder a identificação. Então optamos por
  utilizar um símbolo mais interno da comunidade mas que fugisse do clichê '</>'

  Cursor — representa Design Digital. No curso, o ramo do Design Digital é o mais trabalhado - UI, UX, Design de
  Interação e Design Gráfico. Toda essa área é permeada por uma coisa: O cursor do mouse. Assim, decidimos consolidar
  o campo neste símbolo simples mas poderoso.
`],
  },
  {
    path: "/project/zefiro",
    title: "Zéfiro: O Vento Divino",
    pics:[],
    fullPic: MDWKBanner,
    description: `
Este espaço é reservado para a futura identidade visual do evento Media Week 2026, promovido pelo curso de Sistemas e Mídias Digitais. Aqui será apresentada a proposta gráfica oficial que representará o evento em todas as suas aplicações, como materiais de divulgação, redes sociais, sinalização, brindes e apresentações. A identidade visual irá refletir os valores, a criatividade e a inovação que fazem parte da essência do curso, buscando dialogar com temas contemporâneos da mídia digital, tecnologia, design e cultura.

O conceito visual será pensado para engajar tanto o público acadêmico quanto os visitantes externos, transmitindo uma imagem moderna, acessível e alinhada com os objetivos do evento.

Em breve, este espaço será atualizado com: logo oficial da Media Week 2026, paleta de cores e tipografia, elementos gráficos e padrões visuais, versões aplicadas em diferentes formatos. Fique atento às próximas atualizações!
`,
  },
];
