import React, { useEffect, useState } from "react";
import logo from "../../images/Logo-excursion.png";

const menuTopOptions = [
  {
    id: "email",
    label: "tour.support@gmail.com",
  },
  {
    id: "aboutUs",
    label: "Sobre nós",
  },
  {
    id: "contact",
    label: "Contato",
  },
  {
    id: "pictures",
    label: "Fotos",
  },
];

const menuOptions = [
  {
    id: "createAcount",
    label: "criar conta",
  },
  {
    id: "login",
    label: "login",
  },
  {
    id: "help",
    label: "ajuda",
  },
  {
    id: "carShopping",
    label: "Carrinho",
  },
  {
    id: "language",
    label: "idioma",
  },
];

const Header = () => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const reversedMenu = menuOptions.slice().reverse();

  const checkWindowSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Event listener to get windows size
  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <nav className="bg-white w-full">
      {!isMobile && (
        <div className=" bg-blue-950 h-[40px]">
          <div className="max-w-screen-xl flex flex-wrap justify-end mx-auto pt-2">
            <ul className="flex text-black">
              {menuTopOptions.map((menuTopOption, index) => (
                <li
                  key={menuTopOption.id}
                  className={`text-white text-sm ml-4 border-solid border-white  ${
                    index === menuTopOptions.length - 1 ? "" : "border-r"
                  }`}
                >
                  <a
                    href={`#${menuTopOption.id}`}
                    className="pl-4 pr-6"
                    aria-current="page"
                  >
                    {menuTopOption.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img src={logo} className="" alt="logo" width={205} height={36} />
        </a>

        {isMobile ? (
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-black rounded-lg hover:bg-gray-100  focus:ring-gray-200 dark:text-black dark:hover:bg-gray-100 "
            aria-controls="navbar-hamburger"
            aria-expanded="false"
            onClick={() => setOpenedMenu(!openedMenu)}
          >
            <span className="sr-only">Abrir menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        ) : (
          <ul className="flex  text-black uppercase font-bold">
            {reversedMenu.map((menuOption, index) => (
              <li
                key={menuOption.id}
                className={`border-gray-100 border-solid ml-4 rounded-full ${
                  index === reversedMenu.length - 1
                    ? "bg-blue-400 text-white hover:bg-blue-500 min-w-[150px]"
                    : "bg-white"
                }  p-2 pr-0`}
              >
                <a
                  href={`#${menuOption.id}`}
                  className="block py-2 pl-3 pr-4 "
                  aria-current="page"
                >
                  {menuOption.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        className={`bg-black bg-opacity-60 h-full relative bottom-20 ${
          openedMenu ? "" : "hidden"
        }`}
      >
        <div
          className={`w-4/5 absolute top-0 right-0 bottom-0 bg-white text-left`}
          id="navbar-hamburger"
        >
          <div className="text-right mr-4 mt-6">
            <button
              data-collapse-toggle="navbar-hamburger"
              type="button"
              className=" p-2 w-10 h-10 text-sm text-black rounded-lg hover:bg-gray-100  focus:ring-gray-200 dark:text-black dark:hover:bg-gray-100 "
              aria-controls="navbar-hamburger"
              aria-expanded="false"
              onClick={() => setOpenedMenu(!openedMenu)}
            >
              <span className="sr-only">Fechar menu</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col text-black uppercase font-bold p-4 pr-0">
            {menuOptions.map((menuOption, index) => (
              <li
                key={menuOption.id}
                className={`border-gray-100 border-solid ${
                  index === menuOptions.length - 1 ? "" : "border-b"
                }  p-2 pr-0`}
              >
                <a
                  href={`#${menuOption.id}`}
                  className="block py-2 pl-3 pr-4 "
                  aria-current="page"
                >
                  {menuOption.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
