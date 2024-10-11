import React from "react";
import { CircleCheck } from "lucide-react";

export default function Tarif() {
  return (
    <>
      <div className="p-10 ">
        <div className="bg-gray-900 p-5 rounded-3xl">
          <div className="text-white text-center flex flex-col justify-center items-center my-5">
            <h1 className="text-3xl md:text-4xl font-bold">
              Une tarification simple, pour tous.
            </h1>
            <p className="py-5">
              Quelle que soit la taille de votre entreprise, notre logiciel
              fonctionnera bien pour vous.
            </p>
            <p className="bg-white p-3 w-2/3 rounded-lg font-bold text-green-800 text-xl">
              Prennez une démo gratuitement en fonction de la taille de votre
              entreprise
            </p>
          </div>
          {/* les card price */}
          <div className="container mx-auto flex flex-col md:flex-row justify-center gap-10 items-center py-10 px-5 md:px-20">
            {/** Card Component - Reusable */}
            <div className="text-white text-center md:text-left">
              <div>
                <h1 className="text-3xl font-bold">350.000 Fcfa</h1>
              </div>
              <div className="py-5">
                <p className="py-2 font-bold">1 - 10 Employer</p>
                <p className="text-sm">
                  Good for anyone who is self-employed <br /> and just getting
                  started.
                </p>
              </div>
              <div>
                <button className="border-2 border-white my-2 rounded-full h-10 w-72 text-green-800">
                  Commander une démo
                </button>
              </div>
              <div>
                {/** Feature List */}
                {[...Array(5)].map((_, i) => (
                  <div className="flex gap-4 py-2 items-center" key={i}>
                    <CircleCheck />
                    <p>Send 10 quotes and invoices</p>
                  </div>
                ))}
              </div>
            </div>

            {/** Highlighted Card with Green Background */}
            <div className="text-white bg-green-800 rounded-3xl p-5 text-center md:text-left">
              <div>
                <h1 className="text-3xl font-bold">350.000 Fcfa</h1>
              </div>
              <div className="py-5">
                <p className="py-2 font-bold">1 - 10 Employer</p>
                <p className="text-sm">
                  Good for anyone who is self-employed <br /> and just getting
                  started.
                </p>
              </div>
              <div>
                <button className="border-2 border-white my-2 rounded-full h-10 w-72 text-white">
                  Commander une démo
                </button>
              </div>
              <div>
                {/** Feature List */}
                {[...Array(5)].map((_, i) => (
                  <div className="flex gap-4 py-2 items-center" key={i}>
                    <CircleCheck />
                    <p>Send 10 quotes and invoices</p>
                  </div>
                ))}
              </div>
            </div>

            {/** Another Card (same as the first) */}
            <div className="text-white text-center md:text-left">
              <div>
                <h1 className="text-3xl font-bold">350.000 Fcfa</h1>
              </div>
              <div className="py-5">
                <p className="py-2 font-bold">1 - 10 Employer</p>
                <p className="text-sm">
                  Good for anyone who is self-employed <br /> and just getting
                  started.
                </p>
              </div>
              <div>
                <button className="border-2 border-white my-2 rounded-full h-10 w-72 text-green-800">
                  Commander une démo
                </button>
              </div>
              <div>
                {/** Feature List */}
                {[...Array(5)].map((_, i) => (
                  <div className="flex gap-4 py-2 items-center" key={i}>
                    <CircleCheck />
                    <p>Send 10 quotes and invoices</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
