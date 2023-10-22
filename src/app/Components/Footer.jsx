function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-16 bg-black">
      <aside>
        {/* <div className="rounded-full w-60 h-60 bg-white flex justify-center items-center ">
          <img src="/logoElegance.png" alt="logo da empresa" className="w-52" />
        </div> */}
        {/* <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p> */}
      </aside>
      <nav>
        <header className="footer-title text-white text-center">
          Serviços
        </header>
        <a className="link link-hover text-white">Marcas</a>
        <a className="link link-hover text-white">Design</a>
        <a className="link link-hover text-white">Marketing</a>
      </nav>
      <nav>
        <header className="footer-title text-white">Empresa</header>
        <a className="link link-hover text-white">Sobre nós</a>
        <a className="link link-hover text-white">Contato</a>
        <a className="link link-hover text-white">Trabalhe conosco</a>
      </nav>
      <nav>
        <header className="footer-title text-white">Legal</header>
        <a className="link link-hover text-white">Termos de uso</a>
        <a className="link link-hover text-white">Política de privacidade</a>
        <a className="link link-hover text-white">Política de cookies</a>
      </nav>
    </footer>
  );
}

export default Footer;
