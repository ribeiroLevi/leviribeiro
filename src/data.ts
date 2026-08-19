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
import submundoBanner from "./assets/SubmundoCover.png";
import noBordersBanner from "./assets/NoBordersBanner.png";
import caveCaderno from "./assets/CaveCaderno.png";
import noMeioDaPracaBanner from "./assets/NoMeioDaPracaBanner.png";

import ZefiroBanner from "./assets/ZefiroBannerpng.png";

export const projects = [
  {
    path: "/project/midipie",
    title: "MidiPie: Cozinhe em, praticamente, qualquer lugar.",
    fullPic: midiPieBannerPNG,
    blocks: [
      {
        type: "text" as const,
        content: `No contexto da produção musical, a gíria "cozinhar" (ou "let him cook") refere-se ao ato de construir ou produzir algo de excelência. É um processo criativo dinâmico que transforma ideias brutas em composições marcantes.`,
      },
      { type: "image" as const, src: MidiPieBanner },
      {
        type: "text" as const,
        content: `Partindo desse conceito, retomei o desenvolvimento do MidiPie — um projeto pessoal que estava pausado. O MidiPie é um sintetizador web capaz de capturar sinais MIDI e convertê-los em ondas sonoras manipuláveis em tempo real. A aplicação permite calibrar parâmetros essenciais como frequência, forma de onda (wave shape), ganho e sustain.

Como o projeto havia sido iniciado há algum tempo, mantive a estrutura original em JavaScript puro para finalizá-lo. Retomar o JS puro após meses focado em outros ecossistemas trouxe seus desafios, mas revelou-se um excelente exercício prático.

Apesar de sua proposta direta, o desenvolvimento do MidiPie foi fundamental para expandir minhas habilidades de programação além das landing pages e sistemas institucionais convencionais, explorando o processamento de áudio na web.

Como desdobramento futuro, planejo desenvolver um sintetizador mais robusto e completo, integrando múltiplos módulos de manipulação de onda inspirados na arquitetura dos sintetizadores Moog.`,
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
        content: `O DECK é uma plataforma social projetada especificamente para a comunidade do curso de Sistemas e Mídias Digitais (SMD) da UFC. A proposta é criar um espaço centralizado para que estudantes deem visibilidade aos seus projetos, independentemente de sua área de atuação: Programação, Design, Jogos ou Audiovisual.`,
      },
      {
        type: "text" as const,
        content: `A ideia nasceu durante a disciplina de Projeto Integrado I, cujo desafio era conceber uma solução funcional para um problema real da comunidade acadêmica.

Inicialmente, a premissa levantada por docentes era de que "os alunos não guardavam seus trabalhos". Contudo, a pesquisa qualitativa que conduzi com o corpo discente revelou uma realidade diferente: os alunos armazenavam suas criações, mas raramente as publicavam por receio de julgamento, insegurança ou por aguardarem um "projeto perfeito". Identificar essa dor comportamental foi determinante para direcionar toda a arquitetura de informação e proposta do DECK.`,
      },
      {
        type: "text" as const,
        content: `O ciclo de desenvolvimento estendeu-se por cerca de seis meses. Atuei como Head de UX, sendo responsável pelas pesquisas com usuários, mapeamento de jornadas e relatórios de diagnóstico. No desenvolvimento front-end, trabalhei na implementação de componentes críticos, incluindo o editor de texto rico utilizado para a documentação técnica das publicações.`,
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
        content: `O Media Week é o evento anual do curso de Sistemas e Mídias Digitais (UFC), dedicado a promover palestras, oficinas e a integração acadêmica entre as quatro grandes áreas do curso: Audiovisual, Jogos, Programação e Design.

Durante a disciplina de Comunicação Visual II, desenvolvemos em equipe a proposta de identidade visual para a edição do evento. O conceito e o manifesto da marca foram consolidados no vídeo a seguir:`,
      },
      { type: "image" as const, src: MDWKPic },
      {
        type: "embed" as const,
        embedUrl: `https://www.youtube.com/embed/8nzRcni5nnY?si=byAdZnK6K7NUa1L3`,
      },
      {
        type: "text" as const,
        content: `Sob os pilares de "Diversidade, Empoderamento e Inspiração", projetamos uma linguagem iconográfica focada na representação de cada uma das "Trilhas" (áreas de ênfase) do curso:

Olho — Representa o Audiovisual. Alude diretamente ao olho humano — elemento central na percepção cinematográfica — e à mecânica do obturador de uma câmera.

Direcional — Representa a trilha de Jogos. Sendo o desenvolvimento de jogos uma das vertentes de maior convergência no curso, o D-Pad clássico sintetiza a interatividade de forma imediata.

Chaves — Representam a Programação. Optamos por fugir do clichê "</>" e adotar as chaves {}, um símbolo icônico do código que dialoga de forma mais direta com quem programa.

Cursor — Representa o Design Digital. Presente em fluxos de UI, UX, 3D e Design Gráfico, a seta do cursor consolida-se como o elemento unificador da criação digital.`,
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
        content: `Um dos desafios de convivência no bloco de Sistemas e Mídias Digitais é o desconforto térmico nas áreas comuns. O calor constante nos corredores e halls afeta diretamente o bem-estar dos estudantes nos intervalos. Na disciplina de Semiótica Aplicada à Multimídia, fomos desafiados a criar intervenções físicas e gráficas no espaço para amenizar dores do cotidiano universitário.

Após pesquisas de campo com os frequentadores do bloco, confirmamos que o calor era uma das principais queixas. Para responder a essa demanda com uma solução acessível e funcional, idealizamos o projeto Zéfiro centrando a intervenção na distribuição de ventarolas.`,
      },
      { type: "image" as const, src: VentarolasTitle },
      {
        type: "text" as const,
        content: `A ventarola — um leque manual leve e de baixo custo de produção — foi adotada como suporte físico de utilidade imediata, permitindo que os alunos se refrescassem durante a permanência no bloco.`,
      },
      { type: "image" as const, src: Zefiro },
      {
        type: "text" as const,
        content: `A identidade visual do projeto buscou inspiração em Zéfiro, a personificação mitológica do Vento Oeste, metáfora para o sopro de ar refrescante antes e depois das aulas. Como designer responsável pela produção gráfica, desenvolvi uma série de seis pôsteres e a arte das próprias ventarolas, articulando pinturas clássicas com uma linguagem contemporânea.

A distribuição espacial das peças acompanhava a temperatura do ambiente: nas entradas do bloco, onde o calor é mais intenso, utilizou-se tons quentes (laranja e amarelo) e expressões do cotidiano nordestino sobre o clima. À medida que o usuário se aproximava dos pontos de retirada das ventarolas, a paleta transicionava para tons frios (azul e branco), antecipando a sensação de alívio e frescor.`,
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
        content: `O "The Good Dev" é um jogo educacional e simulador de tomada de decisão no qual o jogador assume o papel de um desenvolvedor de jogos. O objetivo é equilibrar as exigências financeiras do mercado, as pressões do estúdio e o bem-estar da comunidade de jogadores. O usuário confronta dilemas reais da indústria — como estratégias de retenção e monetização —, escolhendo entre alternativas que impactam diretamente a percepção do público.`,
      },
      {
        type: "text" as const,
        content: `A mecânica do jogo utiliza como modelo teórico a Teoria da Autodeterminação (SDT), estruturando o "bem-estar" do jogador em quatro métricas principais: Autonomia (Poder de Escolha), Relacionamento (Senso de Comunidade), Competência (Capacidade de Progresso) e Engajamento. O desafio consiste em manter esses parâmetros equilibrados para obter o status de "The Good Dev".`,
      },
      {
        type: "text" as const,
        content: `Decisões desequilibradas conduzem a seis finais alternativos ("Bad Endings"): três variações do status "Meh Dev" (desenvolvimento sustentável comercialmente, mas com prejuízos moderados à experiência) e três variações de "Bad Dev" (situações em que a ética do design foi severamente comprometida).`,
      },
      { type: "image" as const, src: TheGoodDevPicA },
      {
        type: "text" as const,
        content: `A proposta central do projeto é fomentar a conscientização crítica sobre Dark Patterns (padrões deceptivos) em jogos digitais — práticas deliberadamente projetadas para manipular a atenção ou o consumo do usuário. O jogo aborda temas que variam desde mecânicas de Loot Boxes até dinâmicas de escassez artificial em eventos temporários.`,
      },
      {
        type: "text" as const,
        content: `Atuei como programador principal do jogo em Unity, além de compor a trilha sonora original, colaborar no game design de mecânicas e no desenvolvimento das personas.`,
      },
      {
        type: "text" as const,
        content: `Após a conclusão da versão beta, o "The Good Dev" foi indicado a três premiações na Student Game Design Competition do CHI PLAY 2025 (ACM SIGCHI Annual Symposium on Computer-Human Interaction in Play), realizado em Pittsburgh, EUA. Abaixo está o vídeo de apresentação enviado ao comitê da competição:`,
      },
      {
        type: "embed" as const,
        embedUrl: `https://www.youtube.com/embed/_6bTYb4EUmQ?si=hCc2pikCrsh1n4uP`,
      },
      {
        type: "text" as const,
        content: `Sendo uma das produções mais robustas da minha trajetória acadêmica, o projeto segue em fase final de polimento com previsão de publicação mobile.`,
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
        content: `Como aprimorar um produto cotidiano e amplamente consolidado no mercado, no qual pouca gente para para pensar em melhorias? Este foi o ponto de partida para redesenhar o plástico filme. Na disciplina de Design Emocional, fui desafiado a identificar e solucionar as dores desse produto, reimaginando sua experiência a partir dos três níveis propostos por Don Norman: visceral, comportamental e reflexivo.`,
      },
      {
        type: "text" as const,
        content: `A primeira etapa envolveu pesquisa qualitativa e entrevistas com usuários para mapear os principais pontos de fricção. As queixas mais recorrentes incluíam o desperdício de material, a dificuldade de corte e a perda constante da ponta no rolo. Com esses diagnósticos em mãos, avancei para a fase de conceituação e sketches analógicos para estruturar novas dinâmicas de uso.`,
      },
      { type: "image" as const, src: cerejaConceito },
      {
        type: "text" as const,
        content: `Essa reestruturação atende diretamente ao nível comportamental do produto, focado na usabilidade, na eficiência e na redução da frustração durante o manuseio.`,
      },
      {
        type: "text" as const,
        content: `Outro requisito do projeto era incorporar uma dimensão digital à solução. Para combater o desperdício, criei o conceito "Na Medida": o filme plástico ganha um grid guia impresso em sua superfície, enquanto um aplicativo complementar analisa a área do recipiente via câmera e indica a quantidade exata de filme necessária para a vedação. A integração estimula o consumo consciente de forma intuitiva.`,
      },
      { type: "image" as const, src: cerejaApp },
      {
        type: "text" as const,
        content: `Com os requisitos funcionais estabelecidos, passei para o desenvolvimento da identidade visual. As pesquisas revelaram que o plástico filme possui um uso muito forte fora da cozinha: a proteção de tatuagens em fase de cicatrização. Com base nisso, definimos uma persona jovem e urbana, articulando referências do universo gastronômico e da cultura da tatuagem para dar origem ao branding do "The Plástico Filme".`,
      },
      {
        type: "text" as const,
        content: `O projeto prevê embalagens em caixas metálicas reutilizáveis recarregáveis por refil, eliminando o descarte frequente de caixas de papelão. Além disso, a versão voltada para tatuagem foi concebida com reforço de impermeabilização e uma fina camada protetora com pomada cicatrizante integrada.`,
      },
      { type: "image" as const, src: cerejaId },
      {
        type: "text" as const,
        content: `Abaixo, o resultado visual e a modelagem final do "The Plástico Filme":`,
      },
      { type: "image" as const, src: cerejaRender },
      {
        type: "text" as const,
        content: `O projeto foi desenvolvido em equipe na disciplina de Design Emocional. Minha atuação esteve concentrada na condução das entrevistas com usuários, concept design do produto, renderização 3D e participação ativa na criação e aplicação da identidade visual.`,
      },
    ],
  },
  {
    path: "/project/meiodapraca",
    title: "No Meio da Praça",
    fullPic: noMeioDaPracaBanner,
    blocks: [
      {
        type: "text" as const,
        content: `O Passeio Público de Fortaleza é um espaço urbano denso em memória, cujas origens remontam ao período imperial. Historicamente conhecida como Praça dos Mártires, foi palco de acontecimentos marcantes da história cearense e nacional. Apesar de sua relevância patrimonial, ao longo dos anos 2000 o local enfrentou um severo processo de degradação e abandono, sendo frequentemente associado à insegurança urbana.`,
      },
      {
        type: "text" as const,
        content: `Anos mais tarde, iniciativas de revitalização permitiram que a praça resgatasse sua vocação comunitária, reocupando um lugar de destaque no dinamismo cultural do Centro de Fortaleza.`,
      },
      {
        type: "text" as const,
        content: `Essas transformações, marcadas por ciclos de apogeu, declínio e reconstrução, são o fio condutor do podcast "No Meio da Praça". O projeto reúne relatos impactantes, como os de Miguel Ângelo de Azevedo (Nirez) — guardião de um dos acervos históricos mais importantes do Ceará —, da proprietária do Café Passeio e de frequentadores que testemunharam diferentes épocas do espaço.`,
      },
      {
        type: "text" as const,
        content: `Desenvolvido em equipe para a disciplina de Oficina de Podcast, assumi a responsabilidade técnica do projeto sonoro: conduzi os processos de decupagem, montagem, mixagem e masterização, além de compor as trilhas sonoras originais para pontuar a narrativa. O episódio completo pode ser conferido abaixo:`,
      },
      {
        type: "embed" as const,
        embedUrl: `https://www.youtube.com/embed/WV6qFhyTHZk?si=Ua053zFQd7Clml48`,
      },
    ],
  },
  {
    path: "/project/submundo",
    title: "Funk Submundo: Apocalipse Sonoro na Favela",
    fullPic: submundoBanner,
    blocks: [
      {
        type: "text" as const,
        content: `O "Funk Submundo: Apocalipse Sonoro na Favela" é um projeto multimídia e de pesquisa desenvolvido para a disciplina de Redação para Mídias Digitais na Universidade Federal do Ceará (UFC), em parceria com Lucas Ryan Fernandes e João Pedro Lemos. O objetivo principal foi documentar, catalogar e dar visibilidade às vertentes obscuras e experimentais do funk periférico — como o funk bruxaria —, investigando como essas sonoridades de contracultura operam à margem dos algoritmos e da indústria tradicional.`,
      },
      {
        type: "text" as const,
        content: `Apesar de ter participado de todas as etapas de ideação e pesquisa sociocultural, atuei primordialmente na produção musical do EP conceitual e no desenvolvimento da plataforma web que centraliza a experiência da aplicação.`,
      },
      {
        type: "text" as const,
        content: `O ecossistema do projeto foi estruturado em dois produtos principais: um website interativo que serve como acervo de preservação cultural e galeria digital, e um EP experimental intitulado "Redações Paramidiáticas Multidimensionais Dialógicas (RPMD)", cujas faixas foram integradas à página e disponibilizadas no YouTube.`,
      },
      {
        type: "text" as const,
        content: `No desenvolvimento do website, busquei criar uma arquitetura limpa, funcional e de carregamento dinâmico sob uma identidade visual crua e minimalista. A proposta foi transformar a página em um ponto de ancoragem para o ouvinte, articulando análises estéticas, contextos históricos e reprodutores de áudio de forma fluida para garantir uma imersão completa no gênero.`,
      },
      {
        type: "text" as const,
        content: `Na produção musical do EP "RPMD", o desafio foi traduzir o rigor da pesquisa acadêmica em experimentação sonora prática. Cada faixa foi construída como um estudo de caso sobre os elementos e técnicas de produção do Funk Submundo, explorando timbres agressivos, desacelerados e arranjos pautados por montagens digitais de estéticas sombrias.`,
      },
      {
        type: "text" as const,
        content: `Como resultado, o projeto conseguiu não apenas registrar a relevância sociocultural de um gênero periférico de nicho, mas também demonstrar a capacidade de integrar design, código e produção fonográfica em um produto multimídia coeso, acessível publicamente e alinhado com as discussões contemporâneas de comunicação e mídia.`,
      },
      {
        type: "link" as const,
        url: "https://submundo-ashen.vercel.app/",
        label: "Acessar site do projeto",
      },
    ],
  },
  {
    path: "/project/noborders",
    title: "NoBorders",
    fullPic: noBordersBanner,
    blocks: [
      {
        type: "text" as const,
        content: `O NoBorders é um ambiente educacional multiplataforma voltado para a expansão do Apple Developer Academy para outras regiões do Brasil e do mundo, sem a necessidade de infraestrutura física. Inicialmente, o objetivo era levar o conteúdo programático e as dinâmicas de aprendizado para salas imersivas em Realidade Aumentada/Virtual no visionOS. Contudo, para atender às necessidades reais dos usuários, o projeto se expandiu com telas e fluxos projetados para macOS, além da previsão de suporte ao iOS.`,
      },
      {
        type: "text" as const,
        content: `Atuei principalmente como Designer UI/UX, além de modelar e animar alguns ativos 3D integrados à aplicação. No design de interface, fui responsável por estruturar as telas no visionOS para os fluxos de Professor e Aluno, traduzindo as metodologias do Apple Developer Academy para uma experiência imersiva e espacial.`,
      },
      {
        type: "text" as const,
        content: `De modo geral, os fluxos do aluno e do professor envolvem interfaces objetivas: gestão de formulários, organização das informações da turma e salas virtuais integradas para colaboração.`,
      },
      {
        type: "text" as const,
        content: `O principal desafio do projeto foi a concepção do "Caderno": uma sala de reunião focada na visualização de conteúdo textual integrada a um diagrama em "nuvem de conhecimento". O objetivo era permitir navegação ágil entre tópicos distintos e, simultaneamente, evidenciar as interconexões entre os conteúdos. Como alternativa satisfatória, adotamos uma abordagem visual inspirada no "Graph View" do Obsidian.`,
      },
      { type: "image" as const, src: caveCaderno },
      {
        type: "text" as const,
        content: `Ao longo de aproximadamente três meses de trabalho no Figma, desenvolvi para o visionOS um ecossistema composto por seis fluxos de navegação, reunindo dezenas de telas e componentes estruturados para computação espacial.`,
      },
      {
        type: "text" as const,
        content: `Com as regras de negócio e diretrizes consolidadas no visionOS, a transição para o macOS ocorreu de forma bem mais simples. Seguindo as especificações de design para Desktop, assumi a adaptação do "Caderno", por ter sido o designer responsável pela sua concepção original no ecossistema imersivo.`,
      },
      {
        type: "text" as const,
        content: `Como resultado, o NoBorders provou ser um estudo de caso consistente sobre como adaptar metodologias educacionais complexas para ambientes imersivos e multiplataforma. O projeto me permitiu aprofundar competências em spatial computing e design de sistemas entre ecossistemas, entregando uma solução coesa e funcional tanto para telas tradicionais quanto para experiências em realidade aumentada.`,
      },
    ],
  },
];
