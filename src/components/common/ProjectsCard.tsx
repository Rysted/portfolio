const ProjectsCard = ({
  image,
  title,
  description,
  tags,
  code,
  demo,
}: {
  image: string;
  title: string;
  description: string;
  tags: string[];
  code?: string;
  demo?: string;
}) => {
  return (
    <div className="">
      <div className="bg-primary rounded-t-xl">
        <img
          src={`./projects/${image}`}
          alt="Imagen de MrCoffee"
          loading="lazy"
          className="block rounded-[25px] object-cover p-4"
        />
      </div>
      <div className="bg-light_highlight dark:bg-dark_highlight p-4 rounded-b-xl">
        <h3 className="text-light_text dark:text-dark_text font-bold text-2xl">
          {title}
        </h3>
        <p className="text-light_text_secondary dark:text-dark_text_secondary">
          {description}
        </p>
        <div className="mt-2">
          <ul className="flex flex-wrap justify-start items-center gap-2">
            {tags.map((element, index) => (
              <li
                key={index}
                className="py-1 px-2 rounded-lg bg-dark_highlight dark:bg-light_highlight text-dark_text dark:text-light_text"
              >
                {element}
              </li>
            ))}
          </ul>
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
