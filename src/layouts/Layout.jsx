import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para menú desplegable
  const toggle = () => {
    // Cambiar el estado de isOpen a true o false.
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="bg-gray-800">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <h1 className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-pulse">
            Victor Zg
          </h1>
          <div className="flex gap-4 items-center">
            {/* Botón de hamburguesa */}
            <div className="md:hidden">
              <button
                onClick={toggle}
                className="text-white focus:outline-none"
              >
                {isOpen ? (
                  // Cerrado

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // Abierto
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 9h16.5m-16.5 6.75h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            {/* Fin del botón de hamburguesa */}
            <div className="hidden md:flex gap-4">
              <nav>
                <ul className="flex items-center gap-2">
                  <li>
                    <a
                      href="/"
                      className="text-white hover:bg-gray-700 hover:text-gray-200 px-4 py-2 rounded-sm transition duration-300"
                    >
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-white hover:bg-gray-700 hover:text-gray-200 px-4 py-2 rounded-sm transition duration-300"
                    >
                      Sobre mí
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-white hover:bg-gray-700 hover:text-gray-200 px-4 py-2 rounded-sm transition duration-300"
                    >
                      Contáctame
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* Menú desplegable para dispositivos móviles */}
        <nav className={`md:hidden ${isOpen ? "block pb-4" : "hidden"}`}>
          <ul className="flex flex-col items-center gap-2">
            <li>
              <a
                href="/"
                className="text-white hover:bg-gray-700 hover:text-gray-200 px-4 py-2 rounded-sm transition duration-300"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-white hover:bg-gray-700 hover:text-gray-200 px-4 py-2 rounded-sm transition duration-300"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-white hover:bg-gray-700 hover:text-gray-200 px-4 py-2 rounded-sm transition duration-300"
              >
                Contáctame
              </a>
            </li>
          </ul>
        </nav>
        {/* Fin del menú desplegable */}
      </header>

      <main className="container mx-auto px-4 ">
        <Outlet />
      </main>

      <footer className="text-center text-xl p-2">
        Todos los derechos reservados Víctor Zg
      </footer>
    </div>
  );
}
