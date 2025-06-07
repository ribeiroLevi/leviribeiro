interface FullProject {
  title: String;
  fullPic: string;
  description: String;
  links?: String[];
}

import { Footer } from "./footer";
import { ProjectHeader } from "./projectHeader";

export function FullProject({
  title,
  fullPic,
  description,
  links,
}: FullProject) {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <ProjectHeader></ProjectHeader>
      <div className="w-full flex flex-col gap-10 items-center">
        <img src={fullPic} alt="" />
        <h1 className="font-bebas text-6xl">{title}</h1>
        <p className="font-gabarito text-xl w-2/3">{description}</p>
        <img className="w-2/3" src={fullPic} alt="" />
        {/* <p className="font-gabarito text-xl w-2/3">
          "Cozinhar" quando utilizado para se referir ao processo de produção
          musical, é comumente relacionado ao ato de produzir algo muito bom.
          Mas, de maneira geral, a gíria se relaciona ao processo de
          construir/fazer qualquer coisa muito boa.Com isso em mente, da semana
          passada pra cá eu peguei pra refazer esse projetinho antigo que eu
          comecei mas não terminei. Ele é um sintetizador WEB que pega sinais
          MIDI e os transforma em ondas sonoras. Elas podem ser manipuladas de
          algumas formas - na aplicação da pra alterar frequência, wave shape,
          gain e sustain.Como ele foi um projeto iniciado a bastante tempo, sua
          construção estava sendo feita em JavaScript e resolvi termina-lo com
          os arquivos que já existiam. Devo admitir que voltar a utilizar js
          depois de quase 6 meses teve suas dificuldades, mas valeu a pena.
        </p> */}
      </div>
      <Footer></Footer>
    </div>
  );
}
