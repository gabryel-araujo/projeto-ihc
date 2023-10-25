import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide,
  faTags,
  faQuestion,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export function Nav({ abrirModal }) {
  const [openNav, setOpenNav] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const textRef = React.useRef();
  const emailRef = React.useRef();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <section className="flex items-center gap-1">
          <FontAwesomeIcon icon={faCarSide} />
          <a href="#carros" className="flex items-center">
            Carros
          </a>
        </section>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <section className="flex items-center gap-1">
          <FontAwesomeIcon icon={faQuestion} />
          <a href="#quemSomos" className="flex items-center">
            Sobre nós
          </a>
        </section>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <section
          className="flex items-center gap-1 hover:cursor-pointer"
          onClick={abrirModal}
        >
          <FontAwesomeIcon icon={faUser} />

          <a className="flex items-center">Conta</a>
        </section>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 fixed">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img
              src="/logoElegance.png"
              alt="logo da empresa"
              className="w-32"
            />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <a href="#faleConosco">
              <Button
                // variant="gradient"
                size="sm"
                className="hidden lg:inline-block bg-gradient-to-r from-orange-500 to-orange-700"
              >
                <span className="text-black font-bold">Fale Consoco</span>
              </Button>
            </a>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <Button
            // variant="gradient"
            size="sm"
            fullWidth
            className="mb-2 bg-gradient-to-r from-orange-500 to-orange-700"
            onClick={() => {
              setOpenNav(!openNav);
              handleOpen();
            }}
          >
            <span>Fale Conosco</span>
          </Button>
        </Collapse>
      </Navbar>
      {/* modal abaixo */}
      <Dialog open={open} handler={handleOpen} className="bg-orange-500">
        <DialogHeader className="text-white sombra">Fale Conosco</DialogHeader>
        <DialogBody>
          <div className="flex flex-col w-full md:w-1/2">
            <span className="tiltNeon text-white sombra">
              Sua mensagem aqui:
            </span>
            <textarea
              className="h-24 rounded-md p-2 resize-none shadow-lg focus:outline-none"
              ref={textRef}
            ></textarea>
            <span className="tiltNeon text-white sombra">Email:</span>
            <input
              type="email"
              className="h-8 rounded-md shadow-lg p-2 focus:outline-none"
              ref={emailRef}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={(e) => {
              handleOpen();
            }}
            className="mr-1"
          >
            <span>Cancelar</span>
          </Button>
          <Button
            className="flex items-center gap-3 justify-between bg-white text-black h-10 h-12"
            onClick={(e) => {
              handleOpen();
              textRef.current.value = "";
              emailRef.current.value = "";
            }}
          >
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
        </DialogFooter>
      </Dialog>
    </>
  );
}
