"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-tailwind/react";
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
    </>
  );
}
