"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav } from "./Components/Nav";

export default function Home() {
  return (
    <>
      <div className="background-gt h-screen w-full flex flex-col justify-between">
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
      <div className="bg-black h-screen">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center items-center text-white mt-16">
              <h1 className="lilitaOne text-4xl">Quem Somos</h1>
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
              <h1 className="lilitaOne text-4xl">Nossos Serviços</h1>
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
      </div>
    </>
  );
}
