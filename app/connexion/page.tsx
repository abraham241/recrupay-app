import React from "react";
import Image from "next/image";
import recrlogo from "@/public/images/recrulogo.jpg";
import Link from "next/link";
import Fouter from "../components/Fouter";

export default function Page() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="h-20 bg-green-800 flex justify-center items-center">
          <Link key="" href="/">
            <Image src={recrlogo} alt="Recrulogo" className="h-16 w-32 p-3" />
          </Link>
        </nav>

        {/* Main content */}
        <div className="flex-grow w-full pb-10 flex flex-col justify-center">
          <form className="max-w-sm w-full mx-auto flex flex-col justify-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold py-5 md:py-7 text-center">
              Se connecter
            </h1>
            <div className="mb-5">
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                id="password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Mot de passe"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-green-800 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Se connecter
            </button>
          </form>
        </div>

        {/* Footer */}
        <Fouter />
      </div>
    </>
  );
}
