import Zefiro from "./assets/ZefiroPosters.png";
import VentarolasTitle from "./assets/VentarolasTitle.png";
import MidiPieBanner from "./assets/midipieBanner.png";
import MDWKBanner from "./assets/MDWKBANNER.png";
import midiPieBannerPNG from "./assets/midipieBanner.png";
import deckbanner from "./assets/deckbanner.png";
import MDWKPic from "./assets/MDWKPicb.png";
import MDWKPicA from "./assets/MDWKPicA.png";
import BannerTheGoodDev from "./assets/theGoodDevFullPic.png";
import TheGoodDevPicA from "./assets/TheGoodDevPicA.png";
import cerejaBanner from "./assets/cerejaBanner.png";
import cerejaConceito from "./assets/conceitoCereja.png";
import cerejaApp from "./assets/appCereja.png";
import cerejaRender from "./assets/RenderBCereja.png";
import cerejaId from "./assets/IDVisualCereja.png";

import ZefiroBanner from "./assets/ZefiroBannerpng.png";
export const projects = [
  {
    path: "/project/midipie",
    title: "MidiPie: Cozinhe em, praticamente, qualquer lugar.",
    fullPic: midiPieBannerPNG,
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
    ],
  },
  {
    path: "/project/deck",
    title: "DECK",
    fullPic: deckbanner,
    blocks: [
      {
        type: "text" as const,
        content: `
DECK é uma rede social criada especificamente para os alunos do curso de Sistemas e Mídias Digitais. Nela, os alunos podem mostrar o que fazem independente
de sua área: Programação, Design, Jogos ou Audiovisual. Independente da sua área cada aluno tem seu espaço e pode ser 
visto!
        `,
      },
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
do ano seguinte, está foi a que desenvolvi. Abaixo o vídeo do conceito:
        `,
      },
      { type: "image" as const, src: MDWKPic },
      {
        type: "embed" as const,
        embedUrl: `https://www.youtube.com/embed/8nzRcni5nnY?si=byAdZnK6K7NUa1L3`,
      },
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
      { type: "image" as const, src: Zefiro },
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
  {
    path: "/project/tgd",
    title: "The Good Dev",
    fullPic: BannerTheGoodDev,
    blocks: [
      {
        type: "text" as const,
        content: `O The Good Dev foi, de longe, o projeto mais desafiador da minha vida. A ideia dele é simular o processo de
        desenvolvimento de um jogo, onde o Jogador (Dev) deve equilibrar as necessidades do mercado, do estúdio para o qual trabalha e
        o bem estar do público. O Jogador, usuário real, é confrontado com desafios reais do mercado de jogos: "Como fazer os usuários
        passarem mais tempo dentro do jogo?" ou "Como reutilizar recursos no jogo?". E deve escolher uma entre quatro alternativas, duas
        positivas e duas negativas, suas escolhas moldam como a base de jogadores se comporta e se sente dentro de quatro parâmetros.
        `,
      },
      {
        type: "text" as const,
        content: `Esses parâmetros são: Poder de Escolha, Senso de Comunidade, Capacidade de Progresso e Engajamento, eles são baseados na Teoria
        da Auto-Determinação (SDT), um framework do campo da psicologia para avaliar como fatores influenciam na motivação e no bem-estar da indivíduo.
        No contexto do jogo, esse conceito é utilizado para metrificar o "bem-estar" da sua base de jogadores. Seu objetivo é equilibridar
        todos esses pontos para ser o "The Good Dev".`,
      },
      {
        type: "text" as const,
        content: `Caso você falhe em equilibrar esses parâmetros cairá em um dos 6 possíveis "Bad Endings". Em três desses você é um "Meh Dev",
        que definem um desenvolvimento consistente mas que ainda fere o bem-estar da base de jogadores de algumas foram. Nos outros três você
        é um "Bad Dev", conseguir esse status significa que você feriu o bem-estar dos usuários profundamente.`,
      },
      { type: "image" as const, src: TheGoodDevPicA },
      {
        type: "text" as const,
        content: `O jogo foi criado com a intenção de gerar a reflexão e conscientização sobre Dark Patterns em jogos. "Dark Patterns", ou padrões deceptivos,
        são padrões de design utilizados para, intencionalmente, tirar proveito do usuário enquanto favorece o desenvolvedor. Em jogos, esse tema é muito
        amplo e vai de Loot Boxes a eventos temporários. Muitos desses padrões já estão diluídos no mercado e comumente utilizados em diversos gêneros.`,
      },
      {
        type: "text" as const,
        content: `Utilizei Unity para programar o jogo - fui o único programador do projeto - também participei ativamente produzindo a trilha do jogo, planejamento
        de algumas mecânicas e design de personagens. `,
      },
      {
        type: "text" as const,
        content: `Em 2025, após a conclusão da beta do jogo, ele foi submetido à Student Game Design Competition da CHIPLAY 2025 - Congresso Intercional
        de Interação Humano-Computador em Jogos - e foi indicado a três prêmios. A premiação vai ocorrer em outubro de 2025 e ocorrerá em Pittsburgh - EUA. Abaixo está o vídeo de apresentação pra competição
        que enviamos para a competição.`,
      },
      {
        type: "embed" as const,
        embedUrl: `https://www.youtube.com/embed/_6bTYb4EUmQ?si=hCc2pikCrsh1n4uP`,
      },
      {
        type: "text" as const,
        content: `Este é um dos projetos mais complexos de que participei em minha vida acadêmica. Estamos planejando em concluir seu desenvolvimento e
        publicá-lo na Play Store no segundo semestre de 2025. Eventualmente um port para iOS pode ser feito.`,
      },
    ],
  },
  {
    path: "/project/holywood",
    title: "Cereja Holywood",
    fullPic: cerejaBanner,
    blocks: [
      {
        type: "text" as const,
        content: `Como melhorar um produto já estabelecido no mercado? Para falar a verdade, um produto que pouca gente - se é que alguém - pensa em como melhorar. Este produto é o plástico filme. Na cadeira de Design Emocional, fui desafiado a encontrar, e resolver, os problemas deste produto. Neste desafio tive de reimaginar o plastico filme considerando os níveis camadas do Design Emocional propostas por Norman: visceral, comportamental e reflexivo `,
      },
      {
        type: "text" as const,
        content: `Durante uma primeira etapa, tive de levantar os problemas relacionados ao produto, falando diretamente com clientes (no caso, outros alunos da disciplina). Entre estes problemas estava: desperdício, dificuldade de corte e pontas perdidas no rolo. Isso estabelecido, segui para uma etapa de conceituação, no papel mesmo, para imaginar como ele funcionaria.`,
      },
      { type: "image" as const, src: cerejaConceito },
      {
        type: "text" as const,
        content: `Em tese, isso cumpre o nível comportamental do produto, que diz respeito ao uso do mesmo.`,
      },
      {
        type: "text" as const,
        content: `Entretanto, outro requisito do desafio é adicionar uma dimensão digital ao produto. E, a partir da necessidade de diminuição de desperdício, nasce o "Na Medida". A ideia é imprimir os rolos de papel com um grid. Este grid vai guiar o corte para o usuário utilizar o papel da forma mais eficiente possível. Mas onde entra o aplicativo? Ele analisaria, a apartir de imagens da embalagem, quanto de filme seria necessário para cobrir a área desejada. Este processo permite ao usuário, que desejar, a utilizar de forma mais consciente e eficiente o produto.`,
      },
      { type: "image" as const, src: cerejaApp },
      {
        type: "text" as const,
        content: `Depois do estabelecimento de requisitos de uso, passei para a construção da Identidade Visual. Foi estabelecido que a persona seria uma pessoa jovem, "cool" e que tem interesses que vão da culinária à tatuagem. Isso foi uma outra questão que apareceu durante as entrevistas com os usuários. O plastico filme não serve apenas para guardar comida, mas também para cobrir tatuagens no processo de cicatrização. E assim, nasciam as duas versões do "The Plastico Filme".`,
      },
      {
        type: "text" as const,
        content: `Em conceito, ambos plásticos são vendidas em caixas de metal reutilizável, que podem ser "recarregadas" comprando o refil do produto. Assim, evitando o despedício da caixa. O plástico voltado para tatuagem seria coberto por uma fina camada de pomada cicatrizante e seria reforçado quanto impermeabilização.`,
      },
      { type: "image" as const, src: cerejaId },

      {
        type: "text" as const,
        content: `E esta é a cara final do "The Plastico Filme"!`,
      },
      { type: "image" as const, src: cerejaRender },
      {
        type: "text" as const,
        content: `Este trabalho foi feito em equipe durante a disciplina de Design Emocional, em 2025. Fui responsável pelas entrevistas com os usuários, concept design do produto, os renders e também participei ativamente no processo de construção e implementação da identidade visual.`,
      },
    ],
  },
  {
    path: "/project/meiodapraca",
    title: "No Meio da Praça",
    fullPic: cerejaBanner,
    blocks: [
      { type: "image" as const, src: cerejaConceito },
      { type: "image" as const, src: cerejaApp },
      { type: "image" as const, src: cerejaRender },
      { type: "image" as const, src: cerejaId },
    ],
  },
];
