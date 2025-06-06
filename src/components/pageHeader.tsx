export function Header() {
  return (
    <nav className="sticky top-0 bg-white z-50 flex justify-center w-full h-20">
      <div className="w-11/12 bg-white flex h-20 items-center flex-row justify-between">
        <p className="font-gabarito text-xl">levi ribeiro</p>
        <div className="font-gabarito flex flex-row gap-6">
          <a href="#about">sobre</a>
          <a href="#experiences">experiências</a>
          <a href="#projects">projetos</a>
          {/*<a href="#articles">artigos</a>*/}
        </div>
      </div>
    </nav>
  );
}
