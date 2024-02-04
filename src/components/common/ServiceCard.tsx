const ServiceCard = ({
  children,
  title,
  subTitle,
}: {
  children: JSX.Element;
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="p-5 rounded-2xl flex flex-col justify-between bg-light_highlight dark:bg-dark_highlight transition-all duration-200 ease-in-out">
      <div className="flex justify-center mb-5">{children}</div>
      <div className="flex flex-col justify-between">
        <h3 className="text-lg font-bold text-primary dark:text-primary_dark">
          {title}
        </h3>
        <p className="text-sm pt-2 text-light_text dark:text-dark_text transition-all duration-200 ease-in-out">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
