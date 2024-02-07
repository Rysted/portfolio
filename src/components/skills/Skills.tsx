import { BookCode } from "../../Icons/Icons";

import SkillItem from "../common/SkillItem";

// Data for the projects
import { SkillsData } from "./SkillsData";

const Skills = () => {
  return (
    <section id="skills" className="px-5 py-10 xl:pb-64 select-none">
      <header className="mt-20 flex justify-start items-center gap-x-2 md:max-w-[800px] lg:max-w-[1100px] mx-auto">
        <BookCode styles="w-8 h-8" colors={true} />
        <h2 className="text-3xl font-bold text-light_text dark:text-dark_text transition-all duration-200 ease-in-out">
          Habilidades
        </h2>
      </header>
      <article className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[800px] lg:max-w-[1100px] mx-auto pt-10">
        {SkillsData.map((skill, index) => (
          <SkillItem key={index} title={skill.title} skills={skill.skills} />
        ))}
      </article>
    </section>
  );
};

export default Skills;
