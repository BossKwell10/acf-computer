import { ProductCard } from "../../../components";

export const FeatureProduct = () => {
  return (
    <section className="my-20">
      <h1 className="text-3xl text-center font-semibold dark:text-slate-100 mb-10 underline underline-offset-8">
        Découvrez Nos Meilleurs Produits
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row dark:text-slate-100">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};
