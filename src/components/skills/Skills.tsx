import { skills } from "@schema";

import SkillItem from "../common/SkillItem";

const Skills = ({ skills }: { skills: skills }) => {
  return (
    <section id="skills" className="px-5 py-10 xl:pb-64 select-none">
      <header className="mt-20 flex justify-start items-center gap-x-2 md:max-w-[800px] lg:max-w-[1100px] mx-auto">
        {skills.icon}
        <h2 className="text-3xl font-bold text-light_text dark:text-dark_text transition-all duration-200 ease-in-out">
          {skills.title}
        </h2>
      </header>
      <article className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[800px] lg:max-w-[1100px] mx-auto pt-10">
        {skills.cards.map((skill, index) => (
          <SkillItem key={index} title={skill.title} skills={skill.skills} />
        ))}
      </article>
    </section>
  );
};

export default Skills;
