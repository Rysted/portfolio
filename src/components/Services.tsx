import {
  ServicesIcon,
  Responsive,
  Optimization,
  Maintenance,
} from "../Icons/Icons";
import ServiceCard from "./common/ServiceCard";

const Services = () => {
  return (
    <section
      id="services"
      className="select-none md:max-w-[800px] mx-auto pt-2 pb-20"
    >
      <header className="flex justify-start items-center gap-x-2">
        <ServicesIcon height="h-8" />
        <h2 className="text-3xl font-bold">Services</h2>
      </header>
      <div className="pt-10">
        <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <ServiceCard
            title="Diseño único y adaptable a todos los dispositivos"
            subTitle="Creo sitios web únicos y flexibles, diseñados para destacar la identidad de tu marca."
          >
            <Responsive height="h-14" />
          </ServiceCard>

          <ServiceCard
            title="Optimización para motores de búsqueda (SEO)"
            subTitle="Elevo tu presencia en línea mediante estrategias de SEO para aumentar tu visibilidad en internet."
          >
            <Optimization height="h-14" />
          </ServiceCard>

          <ServiceCard
            title="Mantenimiento, soporte y soluciones personalizadas"
            subTitle="Brindo servicios de mantenimiento, soporte técnico y soluciones personalizadas."
          >
            <Maintenance height="h-14" />
          </ServiceCard>
        </article>
      </div>
    </section>
  );
};

export default Services;
