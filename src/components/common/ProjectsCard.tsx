import Redirect from "./Redirect";

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
    <div className="flex flex-col justify-between bg-light_highlight dark:bg-dark_highlight rounded-b-xl shadow-lg transition-all duration-200 ease-in-out">
      <div>
        <div className="bg-primary-600 dark:bg-primary-300 h-56 rounded-t-xl flex justify-center">
          <img
            src={`./projects/${image}`}
            alt={`Imagen de ${alt}`}
            loading="lazy"
            width="0"
            height="100%"
            className="block w-auto rounded-[25px] object-cover p-4 my-auto"
          />
        </div>
        <div className="p-4">
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
                className="py-2 px-4 font-bold rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-700 dark:text-secondary-300 transition-all duration-200 ease-in-out"
              >
                {element}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 flex justify-between">
        {code && (
          <Redirect
            text="Código"
            url={code}
            title={`Ver código de: ${title}`}
          />
        )}
        {demo && (
          <Redirect text="Demo" url={demo} title={`Ver demo de: ${title}`} />
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
