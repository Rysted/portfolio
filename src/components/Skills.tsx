import { BookCode } from "../Icons/Icons";

const Skills = () => {
  return (
    <section
      id="services"
      className="px-5 py-20 select-none bg-light_background dark:bg-dark_background transition-all duration-200 ease-in-out"
    >
      <header className="flex justify-start items-center gap-x-2 md:max-w-[800px] mx-auto">
        <BookCode styles="w-8 h-8" />
        <h2 className="text-3xl font-bold text-light_text dark:text-dark_text transition-all duration-200 ease-in-out">
          Habilidades
        </h2>
      </header>
      <article></article>
    </section>
  );
};

export default Skills;
