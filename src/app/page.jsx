"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav } from "./Components/Nav";

export default function Home() {
  return (
    <>
      <div className="background-gt h-screen w-full flex flex-col justify-end">
        <Nav />
        <div className="bg-black/75 h-32 flex flex-col justify-center items-center">
          <h1 className="lilitaOne text-white text-4xl">
            SEU NOVO CARRO ESTÁ AQUI!
          </h1>
          <a
            className="animate-bounce bg-white rounded-full mt-4 hover:cursor-pointer w-8 h-8 flex justify-center items-center"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>
        </div>
      </div>
      <div
        className="bg-black h-screen flex flex-col items-center"
        id="quemSomos"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center items-center text-white mt-16">
              <p className="lilitaOne text-4xl">Quem Somos</p>
              <p className="text-sm text-justify mt-4">
                A Elegance Veículos é uma empresa que atua no mercado de
                veículos alto padrão desde 2001, com o objetivo de proporcionar
                aos seus clientes um atendimento diferenciado e personalizado,
                com qualidade e transparência, visando sempre a satisfação total
                de seus clientes em levando-os a uma experiência única com
                nossos carros. Na Elegance Veículos, a satisfação total do
                cliente é a nossa prioridade. Cada aluguel é uma jornada única,
                onde qualidade, confiabilidade e paixão se fundem para criar uma
                experiência inigualável.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-white mt-16">
              <p className="lilitaOne text-4xl">Nossos Serviços</p>
              <p className="text-sm text-justify mt-4">
                Na Elegance Veículos, oferecemos uma seleção excepcional de
                supercarros e carros de luxo disponíveis para aluguel. Desde os
                icônicos supercarros que aceleram o coração até os carros de
                luxo que definem sofisticação, nossos veículos são escolhidos a
                dedo para proporcionar uma experiência única de direção. Você
                pode alugar o carro dos seus sonhos para eventos especiais,
                viagens memoráveis ou simplesmente para desfrutar da sensação de
                estar no controle de uma máquina de alta performance.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="flex gap-32 mt-16">
            <div className="flex flex-col items-center">
              <section className="h-32 w-32 bg-amber-900 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>
              </section>
              <p className="text-white lilitaOne text-lg">Acessibilidade</p>
            </div>

            <div className="flex flex-col items-center">
              <section className="h-32 w-32 bg-amber-900 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </section>
              <p className="text-white text-xl lilitaOne">Segurança</p>
            </div>

            <div className="flex flex-col items-center">
              <section className="h-32 w-32 bg-amber-900 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                  />
                </svg>
              </section>
              <p className="text-white text-xl lilitaOne">Satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
