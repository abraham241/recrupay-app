import React from "react";
import Image from "next/image";
import recrulogo from "@/public/images/recrulogo.jpg";
import Link from "next/link";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Fouter() {
  return (
    <>
      <div className="bg-green-800 flex flex-wrap py-10 px-5 md:px-10 lg:px-20 justify-between">
        {/* Logo Section */}
        <div className="flex justify-center items-center w-full md:w-1/3 mb-6 md:mb-0">
          <Image src={recrulogo} alt="logo" className="h-20 w-32 mr-64" />
        </div>

        {/* Liens utils Section */}
        <div className="w-full md:w-1/3 text-white mb-6 md:mb-0">
          <h4 className="pb-2 text-xl font-bold">Liens utils</h4>
          <ul>
            <li className="py-1">
              <Link href="propos">Ce que recruPay vous permet de faire</Link>
            </li>
            <li className="py-1">
              <Link href="/">
                Pourquoi choisir recruPay pour votre entreprise
              </Link>
            </li>
            <li className="py-1">
              <Link href="/">Questions fréquentes</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/3 text-white">
          <h4 className="pb-2 text-xl font-bold">Contact</h4>
          <ul>
            <li className="py-1">
              <Link href="/" className="flex items-center gap-2">
                <Phone />
                (+241) 77-80-88-64
              </Link>
            </li>
            <li className="py-1 flex items-center gap-2">
              <MapPin />
              <p>Libreville/ Gabon</p>
            </li>
            <li className="py-1">
              <Link href="/" className="flex items-center gap-2">
                <Mail />
                contact@samba-tech.ga
              </Link>
            </li>
          </ul>

          {/* Demo Button */}
          <div className="py-4">
            <Link href="formulaire">
              <Button className="bg-white text-green-800 hover:bg-slate-200">
                Demander une démo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
