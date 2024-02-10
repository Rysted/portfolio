import { services } from "@schema";

import ServiceCard from "./common/ServiceCard";

const Services = ({ services }: { services: services }) => {
  return (
    <section id="services" className="px-5 py-10 select-none">
      <header className="mt-20 flex justify-start items-center gap-x-2 md:max-w-[800px] lg:max-w-[1100px] mx-auto">
        {services.icon}
        <h2 className="text-3xl font-bold text-light_text dark:text-dark_text transition-all duration-200 ease-in-out">
          {services.title}
        </h2>
      </header>

      <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[800px] lg:max-w-[1100px] mx-auto pt-10">
        {services.cards.map((card, index) => (
          <ServiceCard key={index} title={card.title} subTitle={card.subTitle}>
            {card.icon}
          </ServiceCard>
        ))}
      </article>
    </section>
  );
};

export default Services;
