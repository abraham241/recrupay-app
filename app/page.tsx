"use client";
import Nav from "./components/Nav";
import { useState } from "react";
import Fouter from "./components/Fouter";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import cnx from "@/public/images/cnx.png";
import h241 from "@/public/images/h241.png";
import community from "@/public/images/community.png";
import dengui from "@/public/images/dengui.png";
import safrimat from "@/public/images/safrimat.png";
import samba from "@/public/images/samba.png";
import Dashboard6 from "@/public/images/Dashboard6.png";
import Dashboard5 from "@/public/images/Dashboard5.png";
import Dashboard3 from "@/public/images/Dashboard3.png";
import Dashboard4 from "@/public/images/Dashboard4.png";
import propos from "@/public/images/propos.jpeg";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(h241); // Initialiser avec une image par défaut

  // Fonction pour changer l'image en fonction du survol
  const handleMouseEnter = (image: any) => {
    setCurrentImage(image);
  };

  return (
    <>
      <Nav />
      {/*  */}
      <div className=" pt-36 px-10 md:px20" id="home">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            On connecte les meilleurs
            <br />
            <span className="inline-block mb-2">employeurs</span> avec une{" "}
            {/* Ajout d'une marge en bas pour espacer */}
            <span className="text-green-800">
              jeunesse curieuse & <br /> engagée.
            </span>
          </h1>
          <p className="text-center py-5">
            Un logiciel tout-en-un qui simplifie la gestion des talents,
            améliore la collaboration et <br /> permet de suivre le rythme dans
            un environnement toujours plus compétitif. <br />
          </p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <Link href="formulaire">
            <Button className="bg-green-800 md:px-4 md:py-2 rounded-full text-white p-3 ">
              Essayez une démo
            </Button>
          </Link>
          <Button className="bg-white rounded-full text-green-800 border-2 hover:bg-gray-100 p-2 flex gap-2 justify-center items-center ">
            <span className="text-green-800">
              <Play />
            </span>
            Voir la video
          </Button>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="py-10 px-10 md:px20">
        <h1 className="text-3xl font-bold text-center  md:text-4xl">
          Ils nous font confiance
        </h1>
        <div className=" justify-center items-center gap-10  px-10 md:px20 md:flex ">
          <div className="flex gap-10 justify-center items-center">
            <Image
              src={h241}
              alt="Picture of the author"
              className="h-20 w-24"
            />
            <Image
              src={cnx}
              alt="Picture of the author"
              className="h-14 w-32  "
            />
          </div>
          <div className="flex gap-10 py-10 justify-center items-center">
            <Image
              src={samba}
              alt="Picture of the author"
              className="h-24 w-36"
            />
            <Image
              src={community}
              alt="Picture of the author"
              className="h-32 w-32"
            />
          </div>
          <div className="flex gap-10 justify-center items-center">
            <Image
              src={dengui}
              alt="Picture of the author"
              className="h-14 w-32"
            />
            <Image
              src={safrimat}
              alt="Picture of the author"
              className="h-40 w-36"
            />
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className=" scroll-margin bg-green-800 md:px-20 px-10" id="propos">
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
        <div className="flex-col md:flex-row md:flex justify-between gap-20 py-16 ">
          <div className="ensemble flex flex-col md:justify-end md:items-end md:w-3/5 w-full">
            <div
              className="hover:bg-white group py-3 p-10 rounded text-left w-full md:w-[550px]"
              onMouseEnter={() => handleMouseEnter(Dashboard5)} // Changer l'image au survol
            >
              <h1 className="text-2xl font-bold text-white group-hover:text-green-800 pb-2">
                Gestion de recrutement
              </h1>
              <p className="text-white group-hover:text-black">
                Un logiciel tout-en-un qui simplifie la gestion des talents afin
                de
                <br /> suivre les candidatures de manière fluide et intuitive
                avec notre <br /> module de Gestion de Recrutement.
              </p>
            </div>

            <div
              className="hover:bg-white group py-4 p-10 rounded text-left w-full md:w-[550px]"
              onMouseEnter={() => handleMouseEnter(Dashboard4)} // Changer l'image au survol
            >
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

            <div
              className="hover:bg-white group py-4 p-10 rounded text-left w-full md:w-[550px]"
              onMouseEnter={() => handleMouseEnter(Dashboard3)} // Changer l'image au survol
            >
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

            <div
              className="hover:bg-white group py-4 p-10 rounded text-left w-full md:w-[550px]"
              onMouseEnter={() => handleMouseEnter(Dashboard6)} // Changer l'image au survol
            >
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

            <div className="py-3 group p-10 rounded text-left w-full md:w-[550px]">
              <Link href="formulaire">
                <button className="flex justify-start bg-white rounded-full p-3 my-5 text-green-800 font-bold">
                  Essayez, c’est gratuit
                </button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="image  md:justify-end w-full md:w-4/5  md:mt-0 z-0">
            <Image
              src={currentImage} // Affiche l'image actuellement survolée
              alt=""
              className="filter blur-[1px]"
            />
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="md:px-20 py-10 px-10">
        {/* Titre */}
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold py-4">
            Pourquoi choisir recru<span className="text-green-800">Pay</span>{" "}
            pour votre entreprise
          </h1>
          <p>
            Avec des fonctionnalités d’automatisation puissantes, telles que le
            tri automatique des CV et la gestion des formations en ligne,
            <br />
            RecruPay vous offre des tableaux de bord et rapports détaillés
          </p>
        </div>

        {/* Section cards */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
          <div className="bg-gray-100 w-full lg:w-1/3 p-10 rounded-md">
            <div className="text-3xl font-bold">
              <p>01</p>
            </div>
            <div className="text-xl font-bold py-2">
              <h1>Automatisation des recrutements</h1>
            </div>
            <div>
              <p>
                Le logiciel vous permet de simplifier et d’automatiser les
                tâches chronophages, comme le tri des candidatures, la
                planification des entretiens et le suivi des candidats. Cela
                améliore la productivité et permet à l'équipe RH de se
                concentrer sur les tâches à plus forte valeur ajoutée.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 w-full lg:w-1/3 p-10 rounded-md">
            <div className="text-3xl font-bold">
              <p>02</p>
            </div>
            <div className="text-xl font-bold py-2">
              <h1>Gestion des formations</h1>
            </div>
            <div>
              <p>
                Créez des programmes de formation personnalisés, adaptés aux{" "}
                <br />
                besoins spécifiques de votre entreprise. Suivez la progression{" "}
                <br />
                de chaque employé en temps réel avec des rapports détaillés.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 w-full lg:w-1/3 p-10 rounded-md">
            <div className="text-3xl font-bold">
              <p>03</p>
            </div>
            <div className="text-xl font-bold py-2">
              <h1>Accédez à notre communauté de jeune talents</h1>
            </div>
            <div>
              <p>
                un nombre de candidats importants pour vos offres de stage,
                alternance, ou premier emploi. une vaste communauté de jeunes
                certifié pour vos offres d'emploi en rapport avec les
                technologies et outils que vous utilisez en entreprise.
                Renforcez vos équipes avec les meilleurs talents.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="bg-green-800 " id="action">
        <div className="text-white text-center md:px-20 py-10 px-10">
          <h1 className="text-3xl md:text-4xl font-bold ">
            Commencez dès aujourd'hui
          </h1>
          <p className="py-5">
            Profitez d’une version d’essai gratuite pour découvrir tous les
            avantages de notre <br /> solution. Aucun engagement nécessaire.
          </p>
          <Link href="formulaire">
            <Button className="bg-white text-green-800 hover:bg-slate-200">
              Inscrivez-vous pour une version d'essai gratuite
            </Button>
          </Link>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="md:px-20 py-10 px-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center" id="faq">
          Questions fréquentes
        </h1>
        <div className="py-7 ">
          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Quels sont les avantages de recruPay ?
              </AccordionTrigger>
              <AccordionContent>
                RecruPay offre plusieurs avantages : il automatise les tâches de
                recrutement, propose un suivi en temps réel des candidatures, et
                inclut des modules de formation. Il facilite la collaboration
                grâce à sa messagerie interne, fournit des rapports avancés, et
                garantit la sécurité des données des candidats. Son interface
                intuitive améliore l'efficacité des recruteurs et l'expérience
                des candidats, tout en étant personnalisable
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger>recruPay est - il sécurisé ?</AccordionTrigger>
              <AccordionContent>
                Oui, RecruPay est sécurisé. Il utilise des mesures de protection
                avancées telles que le cryptage des données, des contrôles
                d'accès stricts et des sauvegardes régulières pour garantir la
                confidentialité et l'intégrité des informations des candidats.
                De plus, il est conforme aux réglementations comme le RGPD,
                assurant que les données personnelles sont traitées de manière
                sécurisée et en respectant les normes de confidentialité.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger>Qui peut utiliser recruPay</AccordionTrigger>
              <AccordionContent>
                RecruPay peut être utilisé par les responsables RH, les
                recruteurs, les agences de recrutement, les chefs d'entreprise
                et les managers d'équipes pour optimiser et simplifier le
                processus de recrutement.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                En quoi la solution recrupay va-t-elle m'aider à améliorer les
                Recrutement ?
              </AccordionTrigger>
              <AccordionContent>
                RecruPay vous aide à améliorer vos recrutements en automatisant
                les tâches répétitives, en centralisant les candidatures, en
                facilitant la collaboration via la messagerie interne, et en
                fournissant des analyses pour optimiser votre stratégie de
                recrutement.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <Fouter />
      {/*  */}
    </>
  );
}
