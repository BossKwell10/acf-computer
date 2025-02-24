export const Testimonials = () => {
  const testimonialsData = [
    {
      title: "Ordinateurs portables",
      description:
        "Nous proposons une large gamme d'ordinateurs portables pour le travail, les étudiants ou le gaming.",
      imgSrc:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",
      altText: "Ordinateur portable",
      author: "ACF Computeur",
    },
    {
      title: "Périphériques",
      description:
        "Découvrez notre sélection de périphériques informatiques : claviers, souris, moniteurs, imprimantes et autres équipements complémentaires.",
      imgSrc:
        "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
      altText: "Périphériques informatiques",
      author: "ACF Computeur",
    },
    {
      title: "Accessoires",
      description:
        "Nous proposons une large gamme d'accessoires informatiques : sacs pour ordinateurs, protections d'écran, supports ergonomiques, etc.",
      imgSrc:
        "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg",
      altText: "Accessoires informatiques",
      author: "ACF Computeur",
    },
    {
      title: "Composants informatiques",
      description:
        "Découvrez notre gamme de composants informatiques : cartes mères, processeurs, cartes graphiques, mémoire RAM, et bien plus encore.",
      imgSrc:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80",
      altText: "Composants informatiques",
      author: "ACF Computeur",
    },
  ];

  return (
    <section className="my-20 px-4">
      <h1 className="text-3xl text-center font-semibold dark:text-slate-100 mb-10 underline underline-offset-8">
        À propos de nos produits
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {testimonialsData.map((testimonial, index) => (
          <figure
            key={index}
            className="flex flex-col items-center p-6 text-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 
        transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105"
          >
            <blockquote className="mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {testimonial.title}
              </h3>
              <p className="my-4 font-light">{testimonial.description}</p>
            </blockquote>
            <figcaption className="flex items-center space-x-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.imgSrc}
                alt="user"
              />
              <div className="text-left">
                <div className="font-medium dark:text-white">
                  {testimonial.category}
                </div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  {testimonial.author}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
