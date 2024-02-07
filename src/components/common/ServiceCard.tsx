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
    <div className="p-5 rounded-xl flex flex-col justify-between bg-light_highlight dark:bg-dark_highlight transition-all duration-200 ease-in-out">
      <div className="flex justify-center mb-5">{children}</div>
      <div className="flex flex-col justify-between">
        <h3 className="text-lg font-bold text-primary-600 dark:text-primary-300 transition-all duration-200 ease-in-out">
          {title}
        </h3>
        <p className="text-sm pt-2 text-secondary-700 dark:text-secondary-300 transition-all duration-200 ease-in-out">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
