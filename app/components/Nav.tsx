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

  const menuItems = [
    { label: "A propos", href: "/" },
    { label: "Nos tarifs", href: "/" },
    { label: "FAQ", href: "/" },
  ];

  return (
    <>
      <nav className="w-full  px-20 bg-white shadow">
        <div className="flex justify-between items-center h-20">
          {/* Logo visible sur toutes les tailles d'écran */}
          <div className="h-20 w-32 flex justify-center items-center">
            <Image src={recrulogo} alt="Recrulogo" />
          </div>

          {/* Liens déplacés à côté du logo (visible uniquement sur desktop) */}
          <div className="hidden md:flex space-x-4 pr-36">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href} className="font-bold">
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
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                  <Link
                    href="/sub-menu-1"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Sub Menu 1
                  </Link>
                  <Link
                    href="/sub-menu-2"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Sub Menu 2
                  </Link>
                  <Link
                    href="/sub-menu-3"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Sub Menu 3
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Bouton "Démo gratuite" visible seulement sur mobile */}
          <div className="md:hidden">
            <Button className="bg-green-800 rounded-full">Démo gratuite</Button>
          </div>

          {/* Boutons à droite (desktop uniquement) */}
          <div className="hidden md:flex space-x-4">
            <Button variant="outline" className=" rounded-full">
              Se connecter
            </Button>
            <Button className="bg-green-800 rounded-full">Démo gratuite</Button>
          </div>

          {/* Bouton mobile (menu burger) visible seulement sur mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                  <Link
                    href="/sub-menu-1"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Sub Menu 1
                  </Link>
                  <Link
                    href="/sub-menu-2"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Sub Menu 2
                  </Link>
                  <Link
                    href="/sub-menu-3"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Sub Menu 3
                  </Link>
                </div>
              )}
            </div>

            {/* Boutons dans le menu mobile */}
            <Button variant="outline" className="block w-full">
              Se connecter
            </Button>
          </div>
        )}
      </nav>
    </>
  );
}
