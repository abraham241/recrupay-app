import React from "react";
import Image from "next/image";
import propos from "@/public/images/propos.jpeg";
export default function Propos() {
  return (
    <>
      <div className="bg-green-800 md:px-20 px-10" id="propos">
        {/* Titre */}
        <div className="text-white text-center py-5 ">
          <h1 className="text-3xl md:text-4xl font-bold py-5">
            Ce que recruPay vous permet de faire
          </h1>
          <p>
            La solution complète pour gérer recrutement, formation et
            collaboration
          </p>
        </div>

        {/* Slider + Image */}
        <div className="flex flex-col md:flex-row justify-center items-center py-16 text-right">
          {/* Contenu */}
          <div className="ensemble flex flex-col md:justify-end md:items-end md:w-3/5 w-full">
            <div className="hover:bg-white group py-3 p-10 rounded text-left w-full md:w-[550px]">
              <h1 className="text-2xl font-bold text-white group-hover:text-green-800 pb-2">
                Gestion de recrutement
              </h1>
              <p className="text-white group-hover:text-black">
                Un logiciel tout-en-un qui simplifie la gestion des talents afin
                de <br /> suivre les candidatures de manière fluide et intuitive
                avec notre <br /> module de Gestion de Recrutement.
              </p>
            </div>

            <div className="hover:bg-white group py-4 p-10 rounded text-left w-full md:w-[550px]">
              <h1 className="text-2xl font-bold text-white group-hover:text-green-800 pb-2">
                Gestion des formations
              </h1>
              <p className="text-white group-hover:text-black">
                Créez des programmes de formation personnalisés, adaptés aux{" "}
                <br />
                besoins spécifiques de votre entreprise et de vos équipes pour{" "}
                <br />
                maximiser leur efficacité.
              </p>
            </div>

            <div className="hover:bg-white group py-4 p-10 rounded text-left w-full md:w-[550px]">
              <h1 className="text-2xl font-bold text-white group-hover:text-green-800">
                Réseau social interne
              </h1>
              <p className="text-white group-hover:text-black">
                Créez une véritable communauté d’entreprise où chaque <br />
                collaborateur peut partager des idées, des ressources et des{" "}
                <br />
                bonnes pratiques.
              </p>
            </div>

            <div className="hover:bg-white group py-4 p-10 rounded text-left w-full md:w-[550px]">
              <h1 className="text-2xl font-bold text-white group-hover:text-green-800">
                Messagerie instantanée
              </h1>
              <p className="text-white group-hover:text-black">
                Envoyez des notifications et des rappels directement via la{" "}
                <br />
                messagerie pour vous assurer que personne ne manque une <br />
                information importante.
              </p>
            </div>

            <div className=" py-3  group p-10 rounded text-left w-full md:w-[550px]">
              <button className="flex justify-start bg-white rounded-full p-3 my-5 text-green-800 font-bold">
                Essayez, c’est gratuit
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="image flex flex-col md:justify-end w-full md:w-4/5 mt-10 md:mt-0">
            <Image src={propos} alt="" className=" md:h-[700px] md:w-[800px]" />
          </div>
        </div>
      </div>
    </>
  );
}
