import React from "react";

export default function choix() {
  return (
    <>
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
              <h1>Automatisation des processus</h1>
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
              <h1>Collaboration améliorée</h1>
            </div>
            <div>
              <p>
                Favorisez la collaboration entre équipes avec des outils <br />
                intégrés comme la messagerie instantanée et le partage de <br />
                ressources pour une communication fluide au sein de
                l'entreprise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
