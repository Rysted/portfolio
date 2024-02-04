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
    <div className="bg-light_highlight dark:bg-dark_highlight p-5 rounded-2xl flex flex-col justify-between">
      <div className="flex justify-center mb-5">{children}</div>
      <div className="flex flex-col justify-between">
        <h3 className="text-lg font-bold text-primary dark:text-primary_dark">
          {title}
        </h3>
        <p className="text-light_text dark:text-dark_text text-sm pt-2">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
