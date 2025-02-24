import { Accordion } from "./Accordion";

export const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "Nos services ?",
      reponse:
        "✅ Conseils personnalisés : Nous aidons nos clients à choisir les produits les mieux adaptés à leurs besoins. " +
        "🛠️ Service après-vente : Un support technique dédié pour l'entretien, la réparation et l'assistance à l'installation des produits. " +
        "💳 Financement : Des solutions de paiement échelonné pour faciliter l'acquisition de matériel informatique.",
    },
    {
      id: 2,
      question: "Nos avantages ?",
      reponse:
        "🔍 Expertise technique : Une équipe de professionnels qualifiés pour vous conseiller. " +
        "🔒 Produits certifiés : Nous proposons uniquement des produits issus de grandes marques répondant aux normes de qualité. " +
        "💬 Service client premium : Une relation client basée sur l'écoute, la disponibilité et la réactivité.",
    },
    {
      id: 3,
      question: "Pourquoi choisir ACF COMPUTER ?",
      reponse:
        "🏆 Nous mettons un point d'honneur à offrir une **expérience d'achat agréable**. " +
        "Où chaque client est accompagné du début à la fin de son parcours. " +
        "🖥️ Nous offrons non seulement des produits fiables mais aussi un service client attentif et professionnel.",
    },
  ];
  
  

  return (
    <section className="my-16 px-6 py-10 border rounded-lg dark:border-gray-700 shadow-md dark:bg-gray-800 transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
      <h1 className="text-3xl text-center font-bold text-gray-900 dark:text-slate-100 mb-6 underline underline-offset-8">
        Questions Fréquentes 🧐
      </h1>
      <div
        className="space-y-4"
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        {faqs.map((faq) => (
          <Accordion key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};
