import Zefiro from "./assets/ZefiroPosters.png"
import VentarolasTitle from "./assets/VentarolasTitle.png";
import MidiPieBanner from "./assets/midipieBanner.png";
import MDWKBanner from "./assets/MDWKBANNER.png";
import midiPieBannerPNG from "./assets/midipieBanner.png";
import MDWKPic from"./assets/MDWKPicb.png";
import MDWKPicA from "./assets/MDWKPicA.png";

import ZefiroBanner from "./assets/ZefiroBannerpng.png";
export const projects = [
  {
    path: "/project/midipie",
    title: "MidiPie: Cozinhe - praticamente - em qualquer lugar.",
    fullPic: "./assets/midipieBanner.png",
    blocks: [
      {
        type: "text" as const,
        content: `
Cozinhar, quando utilizado para se referir ao processo de produção musical, é comumente relacionado ao ato de produzir algo muito bom. Mas, de maneira geral, a gíria se relaciona ao processo de construir/fazer qualquer coisa muito boa.
        `,
      },
      { type: "image" as const, src: MidiPieBanner },
      {
        type: "text" as const,
        content: `
Com isso em mente, da semana passada pra cá eu peguei pra refazer esse projetinho antigo que eu comecei mas não terminei. Ele é um sintetizador WEB que pega sinais MIDI e os transforma em ondas sonoras. Elas podem ser manipuladas de algumas formas — na aplicação dá pra alterar frequência, wave shape, gain e sustain.

Como ele foi um projeto iniciado há bastante tempo, sua construção estava sendo feita em JavaScript e resolvi terminá-lo com os arquivos que já existiam. Devo admitir que voltar a utilizar JS depois de quase 6 meses teve suas dificuldades, mas valeu a pena.

Apesar de ser um projeto antigo, ele foi fundamental para me tirar da zona de conforto de programar apenas landing pages ou sites empresariais.

Em um futuro próximo tenho vontade de construir um sintetizador maior e com mais manipulações de onda ao estilo Moog.
        `,
      },
      { type: "image" as const, src: MDWKBanner },
    ],
  },
  {
    path: "/project/deck",
    title: "DECK",
    fullPic: "./assets/midipieBanner.png",
    blocks: [
      {
        type: "text" as const,
        content: `
DECK é uma rede social criada especificamente para os alunos do curso de Sistemas e Mídias Digitais. Nela, os alunos podem mostrar o que fazem independente
de sua área: Programação, Design, Jogos ou Audiovisual. Independente da sua área cada aluno tem seu espaço e pode ser 
visto!
        `,
      },
      { type: "image" as const, src: midiPieBannerPNG },
      {
        type: "text" as const,
        content: `
O projeto nasceu na disciplina de Projeto Integrado I, na qual os alunos devem construir um sistema completo que
resolva um problema - para o curso, ONG's ou qualquer fim que não gere retorno financeiro. 

O problema encontrado foi: 
"Os alunos do SMD não guardam seus trabalhos", apontado por um dos professores do curso. Contudo, essa era
a visão de apenas um dos lados do problema e foi necessário ouvir os alunos dos curso. Foi realizada uma pesquisa
que mostrou que, na realidade, os alunos guardavam seus trabalhos mas não mostravam ou publicavam. Isso se devia,
entre outros motivos, por medo de julgamento, insegurança e a espera pelo "trabalho merecedor" de ser postado. Assim,
é possível perceber que o problema a ser solucionado era muito mais complexo que o mostrado inicialmente. Isso guiou
todo o desenvolvimento do projetos`,
      },
      {
        type: "text" as const,
        content: `
O desenvolvimento do projeto durou cerca de 6 meses - mesmo sendo interrompido por uma greve nacional. Estive responsável
como HEAD de UX, realizei pesquisas com os alunos e relatórios para compreender a situação que realmente ocorria. Além
disso tembém atuei como desenvolvedor front-end desenvolvendo trechos cruciais do projeto, como o editor de texto para
documentação dos projetos dos usuários.`,
      },
      { type: "image" as const, src: MDWKBanner },
    ],
  },
  {
    path: "/project/mdwk",
    title: "Marca Media Week 2026",
    fullPic: MDWKBanner,
    blocks: [
      {
        type: "text" as const,
        content: `
Media Week é um evento anual do curso de Sistemas e Mídias Digitais onde os alunos podem assistir e ministras
palestras e oficinas dentro das quatro grande áreas do curso: Audiovisual, Jogos, Programação e Design. O evento
visa promover a integração entre as áreas e os alunos sendo um grande incentivo à multidisciplinaridade.

Durante a disciplina de Comunicação Visual II os alunos, em grupos, devem construir a identidade visual do evento
do ano seguinte, está foi a que desenvolvi.
        `,
      },
      { type: "image" as const, src: MDWKPic },
      {
        type: "text" as const,
        content: `
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
        `,
      },
      { type: "image" as const, src: MDWKPicA },
    ],
  },
  {
    path: "/project/zefiro",
    title: "Zéfiro: O Vento Divino",
    fullPic: ZefiroBanner,
    blocks: [
      {
        type: "text" as const,
        content: `
Um problema latente do espaço do curso de Sistemas e Mídias Digitais é o calor nos espaços de convivência
do bloco onde o curso é sediado. Seja no térreo, no hall do primeiro e segundo andar o calor é uma constante
para os alunos. Com isso, durante a disciplina de Semiótica Aplicada à Multimídia, os alunos recebem uma premissa
na qual devem trabalhar interveções dentro do bloco. Nossa premissa foi: Tornar os espaços de convivência melhores.
Seja ao dispor placas nas salas para saber se estão ocupadas ou cartazes na copa para que alimentos não sejam roubados,
a ideia é tornar o dia-a-dia nesses espaços melhor.

Primeiramente, foi feita uma pesquisa para compreender o que mais aflingia os alunos nesses espaços. O calor foi uma
das mais comentadas. Mas como resolver um problema de infraestrutura com uma intervenção? Simples: Ventarolas! 
        `,
      },
      { type: "image" as const, src: VentarolasTitle },
      {
        type: "text" as const,
        content: `Uma ventarola nada mais é que um leque, comumente, entregue de forma gratuita durante eventos
        por ser altamente customizável e barato de produzir. A ideia era permitir que os alunos pudessem aliviar, 
        mesmo que um pouco o calor utilizando as Ventarolas.`,  
      },
      { type: "image" as const, src: Zefiro},
      { 
        type: "text" as const,
        content: `Com isso, veio a inspiração para as peças gráficas: Zéfiro! Zéfiro é a personificação do "Vento Oeste"
        sendo uma ótima representação para aquele breve sopro de vento que vai refrescar o aluno antes ou depois das aulas.
        Então utilizei pinturas clássicas para permear todas a construção gráfica desse projeto. Sendo um trabalho em grupo,
        fiquei responsável, majoritariamente, pela produção das peças que foram utilizadas durante o projeto - Seis pôsteres
        e as Ventarolas em si. 
      
As peças se conectavam em sua disposição pelo bloco. As mais próximas à entrada - e mais distantes das Ventarolas -
possuem cores quentes (amarelo e laranja) e frases que remetem ao calor - também contendo construções frasais típicas do linguajar
jovem nordestino. Quanto mais próximas às Ventarolas as imagens assumem cores mais frias (azul e branco) para remeter ao frescor
que as Ventarolas traríam.`,
      },
    ],
  },
];
