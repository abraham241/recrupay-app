"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import recrulogo from "@/public/images/recrulogo.jpg";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Liens du menu modifiés pour être des ancres vers les sections de la page
  const menuItems = [
    { label: "A propos", href: "#propos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav className="w-full fixed px-8 md:px-20 bg-white shadow z-10">
        <div className="flex justify-between items-center gap-10 ">
          {/* Logo visible sur toutes les tailles d'écran */}
          <div className="h-20 w-32 flex justify-center items-center">
            <Link href="#home">
              <Image src={recrulogo} alt="Le logo" />
            </Link>
          </div>

          {/* Wrapper pour aligner les liens à gauche, espace vide au centre, et boutons à droite */}
          <div className="flex justify-between items-center w-full">
            {/* Liens à gauche */}
            <div className="flex gap-5 space-x-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="font-bold scroll-margin"
                  scroll={false}
                >
                  {item.label}
                </Link>
              ))}

              {/* Lien avec menu déroulant (desktop uniquement) */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="font-bold focus:outline-none"
                >
                  Modules
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                    <Link
                      href="#recrutement"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Gestion de recrutement
                    </Link>
                    <Link
                      href="#formations"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Gestion des formations
                    </Link>
                    <Link
                      href="#lms"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      L.M.S
                    </Link>
                    <Link
                      href="#social-media"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Social média
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Espace vide au centre */}
            <div className="flex-grow"></div>

            {/* Boutons à droite (desktop uniquement) */}
            <div className="hidden md:flex space-x-4">
              <Link href="connexion">
                <Button variant="outline" className="block w-full rounded-full">
                  Se connecter
                </Button>
              </Link>
              <Link href="formulaire">
                <Button className="bg-green-800 rounded-full">
                  Démo gratuite
                </Button>
              </Link>
            </div>

            {/* Bouton mobile (menu burger) visible seulement sur mobile */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <div className="md:hidden space-y-4 mt-4">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href} className="block font-bold">
                {item.label}
              </Link>
            ))}

            {/* Menu déroulant dans le menu mobile */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="font-bold focus:outline-none"
              >
                Modules
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-10">
                  <Link
                    href="#recrutement"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Gestion de recrutement
                  </Link>
                  <Link
                    href="#formations"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Gestion des formations
                  </Link>
                  <Link
                    href="#lms"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    L.M.S
                  </Link>
                  <Link
                    href="#social-media"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Social-media
                  </Link>
                </div>
              )}
            </div>

            {/* Boutons dans le menu mobile */}
            <Link href="connexion">
              <Button variant="outline" className="block w-full">
                Se connecter
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
