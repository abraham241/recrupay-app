import React from "react";
import Image from "next/image";
import formimage from "@/public/images/formimage.png";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="py-10 px-5 sm:px-10 md:px-20 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="w-full md:w-2/4 flex justify-center">
          <Image
            src={formimage}
            alt="Picture of the author"
            className="p-10 sm:p-16 w-full md:w-auto"
          />
        </div>
        <div className="w-full md:w-2/4">
          <form className="max-w-sm w-full mx-auto flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold py-5 md:py-7 text-center md:text-left">
              s'inscrire
            </h1>
            <div className="mb-5">
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Nom & Prénom"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="E-mail"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                id="compagnie"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Nom de votre entreprise"
                required
              />
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="terms"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Accepter les conditions et la politique*
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-green-800 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Avoir la Démo
            </button>

            <div className="mt-5">
              <p className="py-5 text-center md:text-left">
                Si vous avez déjà un compte
              </p>
              <Link href="connexion">
                <button
                  type="submit"
                  className="w-full text-white bg-green-800 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Se connecter
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
