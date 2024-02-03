const MenuItem = ({
  url,
  children,
  text,
}: {
  url: string;
  children: JSX.Element;
  text: string;
}) => {
  return (
    <a href={url} className="group flex items-center gap-x-3 py-2">
      {children}
      <span className="h-5 text-base font-semibold dark:text-dark_text group-hover:text-primary_hover transition-all duration-200 ease-in-out">
        {text}
      </span>
    </a>
  );
};

export default MenuItem;
