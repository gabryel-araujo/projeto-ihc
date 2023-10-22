"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav } from "./Components/Nav";
import { SidebarWithContentSeparator } from "./Components/sideBar";
//importando o json de carros
import carros from "./carros.json";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Footer from "./Components/Footer";

export default function Home() {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const MySwal = withReactContent(Swal);
  var carrosJson = carros;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [passwordField, setPasswordField] = useState(false);
  const handleOpenPsswd = () => setPasswordField(true);
  const handleClosePsswd = () => setPasswordField(false);
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);

  useEffect(() => {
    console.log(carrosJson);
  }, []);

  return (
    <>
      <div className="background-gt h-screen w-full flex flex-col justify-end">
        <Nav abrirModal={handleOpen} />
        <div className="bg-black/75 h-32 flex flex-col justify-center items-center">
          <h1 className="lilitaOne text-white text-4xl">
            SEU NOVO CARRO ESTÁ AQUI!
          </h1>
          <a
            className="animate-bounce bg-white rounded-full mt-4 hover:cursor-pointer w-8 h-8 flex justify-center items-center"
            href="#quemSomos"
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
        className="bg-black h-screen flex flex-col items-center shadow-md"
        id="quemSomos"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
            <div className="flex flex-col justify-center items-center text-white mt-16">
              <p className="lilitaOne text-4xl">Quem Somos</p>
              <p className="text-justify mt-4 tiltNeon">
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
              <p className="text-justify mt-4 tiltNeon">
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
              <section className="h-32 w-32 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full flex items-center justify-center">
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
              <section className="h-32 w-32 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full flex items-center justify-center">
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
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </section>
              <p className="text-white text-xl lilitaOne">Segurança</p>
            </div>

            <div className="flex flex-col items-center">
              <section className="h-32 w-32 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full flex items-center justify-center">
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

      <div
        className="h-25 flex flex-col justify-center items-center gradient-bg"
        id="carros"
      >
        <p className="text-black text-4xl mt-12 lilitaOne sombra">
          Nossos Carros
        </p>
      </div>
      {/* <div className=" bg-black p-6 flex flex-col items-center"> */}
      <p className="text-white text-4xl mt-12 lilitaOne">Nossos Carros</p>
      <div className=" bg-slate-600 grid grid-cols-4 p-4 rounded-md bg-white">
        <div className="col-span-1">
          <SidebarWithContentSeparator />
        </div>
        <div className="col-span-3 flex flex-wrap gap-4 h-screen overflow-scroll">
          {carrosJson.carros.map((carro) => {
            return (
              <Card
                className="w-80 max-w-[26rem] shadow-lg flex flex-col justify-between bg-gray-200"
                key={carro.modelo}
              >
                <CardHeader
                  floated={false}
                  color="gray"
                  className="flex justify-center items-center h-56"
                >
                  <img
                    src={carro.src}
                    alt="ui/ux review check"
                    className="h-fit"
                  />
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                  <IconButton
                    size="sm"
                    color="red"
                    variant="text"
                    className="!absolute top-4 right-4 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </IconButton>
                </CardHeader>
                <CardBody>
                  <div className="mb-3 flex items-center justify-between">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="font-medium tiltNeon"
                    >
                      {`${carro.marca} ${carro.modelo} - ${carro.ano}`}
                    </Typography>
                    <Typography
                      color="blue-gray"
                      className="flex items-center gap-1.5 font-normal tiltNeon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="-mt-0.5 h-5 w-5 text-yellow-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      5.0
                    </Typography>
                  </div>
                  <Typography color="gray" className="tiltNeon">
                    {carro.descricao}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-3">
                  <Button size="lg" fullWidth={true} onClick={handleOpen}>
                    Reservar
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
      {/* </div> */}

      {/* Modal */}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Faça seu Cadastro</DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-1">
            <Input label="Nome Completo" onClick={handleClosePsswd} />
            <Input label="Email" onClick={handleClosePsswd} />
            <Input type="password" label="Senha" onClick={handleOpenPsswd} />
            <Input type="password" label="Confirmar Senha" />
          </div>
          <div
            className={`flex flex-col  bg-gray-200 rounded-md shadow-md mt-2 p-2 ${
              passwordField == false ? `hidden` : ``
            }`}
          >
            <section className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <p>Deve conter no mínimo 6 caracteres</p>
            </section>
            <section className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <p>Letra maiúscula ou minúscula</p>
            </section>
            <section className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <p>Caractere especial(!@#$%&*)</p>
            </section>
            <section className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <p>Números</p>
            </section>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={(e) => {
              handleOpen();
              handleClosePsswd();
            }}
            className="mr-1"
          >
            <span>Cancelar</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              handleOpen();
              Toast.fire({
                icon: "success",
                title: "Cadastro realizado com sucesso!",
              });
            }}
          >
            <span>Confirmar</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {/* Footer / Fale conosco */}
      <div className="h-screen flex flex-col justify-end items-center ">
        <div className="bg-gradient-to-r from-orange-500 to-orange-700 w-3/5 h-72 rounded-lg absolute mb-52 flex items-center justify-around p-4 gap-2">
          <div className="flex flex-col w-1/2">
            <p className="text-white text-4xl lilitaOne sombra">Fale conosco</p>
            <span className="tiltNeon text-white sombra">
              Sua mensagem aqui:
            </span>
            <textarea className="h-24 rounded-md p-2 resize-none shadow-lg focus:outline-none"></textarea>
            <span className="tiltNeon text-white sombra">Email:</span>
            <input
              type="email"
              className="h-8 rounded-md shadow-lg p-2 focus:outline-none"
            />
          </div>
          <div className="flex items-center justify-center">
            <Button className="flex items-center gap-3 justify-between bg-white text-black h-10 h-12">
              Enviar Email
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
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className="h-72 w-full flex justify-end bg-black">
          <Footer />
        </div>
      </div>
    </>
  );
}
