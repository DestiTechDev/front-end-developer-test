import React, { useEffect, useState } from "react";
import facebook from "../../images/facebook-svgrepo-com.svg";
import twitter from "../../images/twitter-boxed-svgrepo-com.svg";
import youtube from "../../images/youtube-168-svgrepo-com.svg";
import instagram from "../../images/instagram-svgrepo-com.svg";
import linkedin from "../../images/linkedin-svgrepo-com.svg";

const Footer = () => {
  const [isCollapsedHelp, setIsCollapsedHelp] = useState(false);
  const [isCollapsedEmpresa, setIsCollapsedEmpresa] = useState(false);
  const [isCollapsedSuporte, setIsCollapsedSuporte] = useState(false);
  const [isCollapsedNossoTrabalho, setIsCollapsedNossoTrabalho] =
    useState(false);
  const [, setIsMobile] = useState(window.innerWidth < 768);

  const toggleCollapseHelp = () => {
    setIsCollapsedHelp(!isCollapsedHelp);
  };

  const toggleCollapseEmpresa = () => {
    setIsCollapsedEmpresa(!isCollapsedEmpresa);
  };

  const toggleCollapseSuporte = () => {
    setIsCollapsedSuporte(!isCollapsedSuporte);
  };

  const toggleCollapseNossoTrabalho = () => {
    setIsCollapsedNossoTrabalho(!isCollapsedNossoTrabalho);
  };

  // when is larg screen
  const checkWindowSize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth < 768) {
      setIsCollapsedHelp(false);
      setIsCollapsedEmpresa(false);
      setIsCollapsedSuporte(false);
      setIsCollapsedNossoTrabalho(false);
    }
  };

  // Event listener to get windows size
  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <div className="bg-[#192945] text-white">
      <div className="p-8 pt-12 flex justify-between w-full max-w-screen-xl mx-auto py-8 flex-col md:flex-row">
        <div className="text-left">
          <div className="flex items-center justify-between">
            <h3 className="mb-4 uppercase font-bold">Precisa de ajuda?</h3>

            <span
              onClick={toggleCollapseHelp}
              className="mr-2 lg:hidden md:hidden sm:inline-flex cursor-pointer inline-flex justify-center w-10 h-10 rounded-full group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 "
            >
              {isCollapsedHelp ? (
                <svg
                  className="w-[20px] h-[20px] text-white transform rotate-90"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path stroke="currentColor" d="M5 1 1 5l4 4" />
                </svg>
              ) : (
                <svg
                  className="w-[20px] h-[20px] text-white transform rotate-90"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path stroke="currentColor" d="m1 9 4-4-4-4" />
                </svg>
              )}
            </span>
          </div>

          <div className={`${isCollapsedHelp ? "hidden" : "block"}`}>
            <div>
              <label>Telefone:</label>
              <p className="font-bold mb-4">+055 21 1234-5678</p>
            </div>
            <div>
              <label>Email:</label>
              <p className="font-bold mb-4">info@example.com</p>
            </div>
            <div>
              <label>Endereço:</label>
              <p className="font-bold mb-4">Botafogo, 232 - Rio de Janeiro</p>
            </div>
          </div>
        </div>

        <ul className={`text-left capitalize mt-2`}>
          <div className="flex items-center justify-between">
            <h3 className="mb-4 uppercase font-bold">Empresa</h3>

            <span
              onClick={toggleCollapseEmpresa}
              className="lg:hidden md:hidden sm:inline-flex  cursor-pointer justify-center w-10 h-10 rounded-full group-hover:bg-white/50 dark:group-hover:bg-gray-800/60"
            >
              {isCollapsedEmpresa ? (
                <svg
                  className="w-[20px] h-[20px] text-white transform rotate-90"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path stroke="currentColor" d="M5 1 1 5l4 4" />
                </svg>
              ) : (
                <svg
                  className="w-[20px] h-[20px] text-white transform rotate-90"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path stroke="currentColor" d="m1 9 4-4-4-4" />
                </svg>
              )}
            </span>
          </div>
          <div className={`${isCollapsedEmpresa ? "hidden" : "block"}`}>
            <li className="cursor-pointer hover:text-blue-400 mb-1">
              Central de ajuda
            </li>
            <li className="cursor-pointer hover:text-blue-400 mb-1">
              Resgatar vale
            </li>
            <li className="cursor-pointer hover:text-blue-400 mb-1">Contato</li>
            <li className="cursor-pointer hover:text-blue-400 mb-1">
              Denunciar Abuso
            </li>
            <li className="cursor-pointer hover:text-blue-400 mb-1">
              Sobre nós
            </li>
          </div>
        </ul>

        <ul className={`text-left capitalize mt-2`}>
          <div className="flex items-center justify-between">
            <h3 className="mb-4 uppercase font-bold">Suporte</h3>

            <span
              onClick={toggleCollapseSuporte}
              className="cursor-pointer lg:hidden md:hidden sm:inline-flex justify-center w-10 h-10 rounded-full group-hover:bg-white/50 dark:group-hover:bg-gray-800/60"
            >
              {isCollapsedSuporte ? (
                <svg
                  className="w-[20px] h-[20px] text-white transform rotate-90"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path stroke="currentColor" d="M5 1 1 5l4 4" />
                </svg>
              ) : (
                <svg
                  className="w-[20px] h-[20px] text-white transform rotate-90"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path stroke="currentColor" d="m1 9 4-4-4-4" />
                </svg>
              )}
            </span>
          </div>

          <div className={`${isCollapsedSuporte ? "hidden" : "block"}`}>
            <li className="cursor-pointer hover:text-blue-400 mb-1">
              Suporte 24h
            </li>
            <li className="cursor-pointer hover:text-blue-400 mb-1">Licença</li>
            <li className="cursor-pointer hover:text-blue-400 mb-1">
              Satisfação
            </li>
            <li className="cursor-pointer hover:text-blue-400 mb-1">
              Precisão
            </li>
            <li className="cursor-pointer hover:text-blue-400 mb-1">
              Pagamento
            </li>
          </div>
        </ul>

        <ul className={`text-left capitalize mt-2`}>
          <div className="flex items-center justify-between">
            <h3 className="mb-4 uppercase font-bold">Nosso Trabalho</h3>

            <span
              onClick={toggleCollapseNossoTrabalho}
              className="cursor-pointer lg:hidden md:hidden sm:inline-flex  justify-center w-10 h-10 rounded-full group-hover:bg-white/50 dark:group-hover:bg-gray-800/60"
            >
              {isCollapsedNossoTrabalho ? (
                <svg
                  className="w-[20px] h-[20px] text-white transform rotate-90"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path stroke="currentColor" d="M5 1 1 5l4 4" />
                </svg>
              ) : (
                <svg
                  className="w-[20px] h-[20px] text-white transform rotate-90"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path stroke="currentColor" d="m1 9 4-4-4-4" />
                </svg>
              )}
            </span>
          </div>

          <div className={`${isCollapsedNossoTrabalho ? "hidden" : "block"}`}>
            <li className="cursor-pointer hover:text-blue-400 mb-1">
              Portifólio
            </li>
            <li className="cursor-pointer hover:text-blue-400 mb-1">
              Informações da conta
            </li>
            <li className="cursor-pointer hover:text-blue-400 mb-1">
              Trabalhe conosco
            </li>
            <li className="cursor-pointer hover:text-blue-400 mb-1">
              Politicas e regras
            </li>
            <li className="cursor-pointer hover:text-blue-400 mb-1">
              Encontre nosso time
            </li>
          </div>
        </ul>
      </div>

      <div className="p-8  border-[#303F58] border-t ">
       <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between max-w-screen-xl mx-auto ">
          <p className="order-2">© Copyright 2022</p>

          <ul className="flex order-1 lg:order-last sm:order-first mt-4 lg:mt-0 mb-4">
            <li className="cursor-pointer mr-4">
              <img
                src={facebook}
                width={24}
                height={24}
                style={{ filter: "invert(1)" }}
                alt="Facebook"
              />
            </li>
            <li className="cursor-pointer mr-4">
              <img
                src={twitter}
                width={24}
                height={24}
                style={{ filter: "invert(1)" }}
                alt="twitter"
              />
            </li>
            <li className="cursor-pointer mr-4">
              <img
                src={youtube}
                width={24}
                height={24}
                style={{ filter: "invert(1)" }}
                alt="youtube"
              />
            </li>
            <li className="cursor-pointer mr-4">
              <img
                src={instagram}
                width={24}
                height={24}
                style={{ filter: "invert(1)" }}
                alt="instagram"
              />
            </li>
            <li className="cursor-pointer">
              <img
                src={linkedin}
                width={24}
                height={24}
                style={{ filter: "invert(1)" }}
                alt="linkedin"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
