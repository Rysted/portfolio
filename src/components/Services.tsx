import {
  ServicesIcon,
  Responsive,
  Optimization,
  Maintenance,
} from "../Icons/Icons";

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
          <div className="bg-light_bg_card dark:bg-dark_bg_card p-5 rounded-2xl flex flex-col justify-between">
            <div className="flex justify-center mb-5">
              <Responsive height="h-14" />
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="text-lg font-bold text-primary">
                Diseño único y adaptable a todos los dispositivos
              </h3>
              <p className="text-light_text dark:text-dark_text text-sm pt-2">
                Creo sitios web únicos y flexibles, diseñados para destacar la
                identidad de tu marca.
              </p>
            </div>
          </div>

          <div className="bg-light_bg_card dark:bg-dark_bg_card p-5 rounded-2xl flex flex-col justify-between">
            <div className="flex justify-center mb-5">
              <Optimization height="h-14" />
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="text-lg font-bold text-primary">
                Optimización para motores de búsqueda (SEO)
              </h3>
              <p className="text-light_text dark:text-dark_text text-sm pt-2">
                Eleva tu presencia en línea mediante estrategias efectivas para
                aumentar la visibilidad.
              </p>
            </div>
          </div>

          <div className="bg-light_bg_card dark:bg-dark_bg_card p-5 rounded-2xl flex flex-col justify-between">
            <div className="flex justify-center mb-5">
              <Maintenance height="h-14" />
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="text-lg font-bold text-primary">
                Mantenimiento, soporte y soluciones personalizadas
              </h3>
              <p className="text-light_text dark:text-dark_text text-sm pt-2">
                Brindo servicios de mantenimiento, soporte técnico y soluciones
                personalizadas.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
