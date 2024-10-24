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
    { label: "A propos", href: "#propos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav className="w-full fixed top-0 px-6 md:px-20 bg-white shadow z-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="h-16 w-24 flex items-center">
            <Link href="#home">
              <Image src={recrulogo} alt="Le logo" />
            </Link>
          </div>

          {/* Menu pour desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="font-semibold hover:text-green-700"
                scroll={false}
              >
                {item.label}
              </Link>
            ))}

            {/* Dropdown pour desktop */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="font-semibold focus:outline-none hover:text-green-700"
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
                    Social-média
                  </Link>
                </div>
              )}
            </div>

            {/* Boutons pour desktop */}
            <div className="flex space-x-4">
              <Link href="connexion">
                <Button variant="outline" className="rounded-full">
                  Se connecter
                </Button>
              </Link>
              <Link href="formulaire">
                <Button className="bg-green-800 text-white rounded-full">
                  Démo gratuite
                </Button>
              </Link>
            </div>
          </div>

          {/* Menu mobile (menu burger) */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block font-semibold text-gray-700"
              >
                {item.label}
              </Link>
            ))}

            {/* Dropdown mobile */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="font-semibold focus:outline-none text-gray-700"
              >
                Modules
              </button>
              {isDropdownOpen && (
                <div className="mt-2 bg-white shadow-lg rounded-lg py-2 z-10">
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
                    Social-média
                  </Link>
                </div>
              )}
            </div>

            {/* Boutons dans le menu mobile */}
            <div className="space-y-2">
              <Link href="connexion">
                <Button variant="outline" className="w-full">
                  Se connecter
                </Button>
              </Link>
              <Link href="formulaire">
                <Button className="bg-green-800 text-white w-full">
                  Démo gratuite
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
