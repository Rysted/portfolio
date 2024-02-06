import ServiceCard from "./common/ServiceCard";

// Icons
import {
  ServicesIcon,
  Responsive,
  Optimization,
  Maintenance,
} from "../Icons/Icons";

const Services = () => {
  return (
    <section id="services" className="px-5 py-20 select-none">
      <header className="flex justify-start items-center gap-x-2 md:max-w-[800px] lg:max-w-[1100px] mx-auto">
        {" "}
        <ServicesIcon styles="w-8 h-8" />
        <h2 className="text-3xl font-bold text-light_text dark:text-dark_text transition-all duration-200 ease-in-out">
          Servicios
        </h2>
      </header>

      <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[800px] lg:max-w-[1100px] mx-auto pt-10">
        <ServiceCard
          title="Diseño único y adaptable a todos los dispositivos"
          subTitle="Creo sitios web únicos y flexibles, diseñados para destacar la identidad de tu marca."
        >
          <Responsive />
        </ServiceCard>

        <ServiceCard
          title="Optimización para motores de búsqueda (SEO)"
          subTitle="Elevo tu presencia en línea mediante estrategias de SEO para aumentar tu visibilidad en internet."
        >
          <Optimization />
        </ServiceCard>

        <ServiceCard
          title="Mantenimiento, soporte y soluciones personalizadas"
          subTitle="Brindo servicios de mantenimiento, soporte técnico y soluciones personalizadas."
        >
          <Maintenance />
        </ServiceCard>
      </article>
    </section>
  );
};

export default Services;
