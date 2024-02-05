const ProjectsCard = ({
  image,
  title,
  description,
  tags,
  code,
  demo,
  alt,
}: {
  image: string;
  title: string;
  description: string;
  tags: string[];
  code?: string;
  demo?: string;
  alt: string;
}) => {
  return (
    <div>
      <div className="bg-primary h-56 rounded-t-xl flex justify-center">
        <img
          src={`./projects/${image}`}
          alt={`Imagen de ${alt}`}
          loading="lazy"
          className="block rounded-[25px] object-cover p-4 my-auto"
        />
      </div>
      <div className="p-4 bg-light_highlight dark:bg-dark_highlight rounded-b-xl shadow-lg transition-all duration-200 ease-in-out">
        <h3 className="text-light_text dark:text-dark_text font-bold text-2xl">
          {title}
        </h3>
        <p className="text-light_text_secondary dark:text-dark_text_secondary transition-all duration-200 ease-in-out">
          {description}
        </p>
        <div className="mt-2 flex flex-wrap justify-start items-center gap-2">
          {tags.map((element, index) => (
            <span
              key={index}
              className="py-1 px-2 rounded-lg bg-light_background dark:bg-dark_background text-light_text dark:text-dark_text transition-all duration-200 ease-in-out"
            >
              {element}
            </span>
          ))}
        </div>
        <div className="mt-5 flex justify-between">
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver código de ${title}`}
              title={`Ver código de ${title}`}
              className="py-2 px-4 font-medium rounded-full bg-primary text-light_background hover:bg-primary_hover hover:scale-105 transition-all duration-200 ease-in-out"
            >
              Código
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver demo de ${title}`}
              title={`Ver demo de ${title}`}
              className="py-2 px-4 font-medium rounded-full bg-primary text-light_background hover:bg-primary_hover hover:scale-105 transition-all duration-200 ease-in-out"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
