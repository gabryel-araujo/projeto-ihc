import { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
  Button,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faTag } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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

export function SidebarWithContentSeparator() {
  const [open, setOpen] = useState(0);
  const [valorChip, setValorChip] = useState([]);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="bg-gray-200 h-[calc(100vh-2rem)] h-full max-w-[20rem] p-4">
      <div className="px-2">
        <Typography variant="h5" color="blue-gray">
          Escolha seu carro
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <hr className="my-2 border-black" />
          <ListItem>
            <div className="w-72">
              <Input label="Pesquise aqui..." />
            </div>
          </ListItem>
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <FontAwesomeIcon icon={faCar} />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Categoria
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <label htmlFor="checkEletrico">
                <ListItem className="select-none">
                  <ListItemPrefix>
                    <input
                      type="checkbox"
                      className="mr-2"
                      id="checkEletrico"
                      value={"Elétrico"}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValorChip([...valorChip, e.target.value]);
                        } else {
                          setValorChip(
                            valorChip.filter((item) => item !== e.target.value)
                          );
                        }
                      }}
                    />
                  </ListItemPrefix>
                  Elétrico
                </ListItem>
              </label>

              <label htmlFor="checkSedan">
                <ListItem className="select-none">
                  <ListItemPrefix>
                    <input
                      type="checkbox"
                      className="mr-2"
                      id="checkSedan"
                      value={"Sedan"}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValorChip([...valorChip, e.target.value]);
                        } else {
                          setValorChip(
                            valorChip.filter((item) => item !== e.target.value)
                          );
                        }
                      }}
                    />
                  </ListItemPrefix>
                  Sedan
                </ListItem>
              </label>

              <label htmlFor="checkEsportivo">
                <ListItem className="select-none">
                  <ListItemPrefix>
                    <input
                      type="checkbox"
                      className="mr-2"
                      id="checkEsportivo"
                      value={"Esportivo"}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValorChip([...valorChip, e.target.value]);
                        } else {
                          setValorChip(
                            valorChip.filter((item) => item !== e.target.value)
                          );
                        }
                      }}
                    />
                  </ListItemPrefix>
                  Esportivo
                </ListItem>
              </label>

              <label htmlFor="checkSUV">
                <ListItem className="select-none">
                  <ListItemPrefix>
                    <input
                      type="checkbox"
                      className="mr-2"
                      id="checkSUV"
                      value={"SUV"}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValorChip([...valorChip, e.target.value]);
                        } else {
                          setValorChip(
                            valorChip.filter((item) => item !== e.target.value)
                          );
                        }
                      }}
                    />
                  </ListItemPrefix>
                  SUV
                </ListItem>
              </label>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <FontAwesomeIcon icon={faTag} />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Marcas
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <label htmlFor="checkBMW">
                <ListItem className="select-none">
                  <ListItemPrefix>
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={"BMW"}
                      id="checkBMW"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValorChip([...valorChip, e.target.value]);
                        } else {
                          setValorChip(
                            valorChip.filter((item) => item !== e.target.value)
                          );
                        }
                      }}
                    />
                  </ListItemPrefix>
                  BMW
                </ListItem>
              </label>

              <label htmlFor="checkCherolet">
                <ListItem className="select-none">
                  <ListItemPrefix>
                    <input
                      type="checkbox"
                      className="mr-2"
                      id="checkCherolet"
                      value={"Chevrolet"}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValorChip([...valorChip, e.target.value]);
                        } else {
                          setValorChip(
                            valorChip.filter((item) => item !== e.target.value)
                          );
                        }
                      }}
                    />
                  </ListItemPrefix>
                  Chevrolet
                </ListItem>
              </label>

              <label htmlFor="checkFerrari">
                <ListItem className="select-none">
                  <ListItemPrefix>
                    <input
                      type="checkbox"
                      className="mr-2"
                      id="checkFerrari"
                      value={"Ferrari"}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValorChip([...valorChip, e.target.value]);
                        } else {
                          setValorChip(
                            valorChip.filter((item) => item !== e.target.value)
                          );
                        }
                      }}
                    />
                  </ListItemPrefix>
                  Ferrari
                </ListItem>
              </label>

              <label htmlFor="checkMercedes">
                <ListItem className="select-none">
                  <ListItemPrefix>
                    <input
                      type="checkbox"
                      className="mr-2"
                      id="checkMercedes"
                      value={"Mercedes"}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValorChip([...valorChip, e.target.value]);
                        } else {
                          setValorChip(
                            valorChip.filter((item) => item !== e.target.value)
                          );
                        }
                      }}
                    />
                  </ListItemPrefix>
                  Mercedes
                </ListItem>
              </label>

              <label htmlFor="checkPorsche">
                <ListItem className="select-none">
                  <ListItemPrefix>
                    <input
                      type="checkbox"
                      className="mr-2"
                      id="checkPorsche"
                      value={"Porsche"}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValorChip([...valorChip, e.target.value]);
                        } else {
                          setValorChip(
                            valorChip.filter((item) => item !== e.target.value)
                          );
                        }
                      }}
                    />
                  </ListItemPrefix>
                  Porsche
                </ListItem>
              </label>

              <label htmlFor="checkTesla">
                <ListItem className="select-none">
                  <ListItemPrefix>
                    <input
                      type="checkbox"
                      className="mr-2"
                      id="checkTesla"
                      value={"Tesla"}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValorChip([...valorChip, e.target.value]);
                        } else {
                          setValorChip(
                            valorChip.filter((item) => item !== e.target.value)
                          );
                        }
                      }}
                    />
                  </ListItemPrefix>
                  Tesla
                </ListItem>
              </label>
            </List>
          </AccordionBody>
        </Accordion>

        <Button
          variant="outlined"
          className="flex items-center gap-3 justify-between bg-black text-white h-10"
          onClick={(e) => {
            Toast.fire({
              icon: "error",
              title: "Não encontramos carros para esse filtro!",
            });
          }}
        >
          Filtrar
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
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
            />
          </svg>
        </Button>

        <hr className="my-2 border-black" />
        <div className="grid grid-cols-3 gap-1 ">
          {valorChip.map((item) => {
            return (
              <Chip
                value={item}
                key={item}
                className="bg-gradient-to-r from-orange-500 to-orange-700 text-black text-center"
              />
            );
          })}
        </div>
      </List>
    </Card>
  );
}
