const SkillItem = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <div className="py-4">
      <h3 className="text-xl font-bold text-light_text dark:text-dark_text transition-all duration-200 ease-in-out">
        {title}
      </h3>
      <p className="text-light_text_secondary dark:text-dark_text_secondary transition-all duration-200 ease-in-out">
        {skills.join(", ")}
      </p>
    </div>
  );
};

export default SkillItem;
