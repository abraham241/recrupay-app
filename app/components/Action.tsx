import React from "react";
import { Button } from "@/components/ui/button";


export default function Action() {
  return (
    <>
      <div className="bg-green-800 " id="action">
        <div className="text-white text-center md:px-20 py-10 px-10">
          <h1 className="text-3xl md:text-4xl font-bold ">
            Commencez dès aujourd'hui
          </h1>
          <p className="py-5">
            Profitez d’une version d’essai gratuite pour découvrir tous les
            avantages de notre <br /> solution. Aucun engagement nécessaire.
          </p>
          <Button className="bg-white text-green-800">
            Inscrivez-vous pour une version d'essai gratuite
          </Button>
        </div>
      </div>
    </>
  );
}
