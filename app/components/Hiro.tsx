import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Hiro() {
  return (
    <>
      <div className=" pt-24 px-10 md:px20">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Le logiciel qu’il vous faut pour <br />
            gérer <span className="inline-block mb-2">vos</span>{" "}
            {/* Ajout d'une marge en bas pour espacer */}
            <span className="text-green-800">
              recrutements & <br /> formations
            </span>
          </h1>
          <p className="text-center py-5">
            Un logiciel tout-en-un qui simplifie la gestion des talents,
            améliore la collaboration et <br /> permet de suivre le rythme dans
            un environnement toujours plus compétitif. <br /> Révolutionnez la
            formation et le recrutement de votre entreprise.
          </p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <button className="bg-green-800 px-4 py-2 rounded-full text-white">
            Essayez une démo{" "}
          </button>
          <Button className="bg-white rounded-full text-green-800 border-2 hover:bg-gray-100 ">
            <span className="text-green-800">
              <Play />
            </span>
            Voir la video
          </Button>
        </div>
      </div>
    </>
  );
}
