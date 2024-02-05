const MenuItem = ({
  url,
  children,
  text,
  closeSidebar,
}: {
  url: string;
  children: JSX.Element;
  text: string;
  closeSidebar: () => void;
}) => {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      aria-label="Ir a {text}"
      title={`Ir a ${text}`}
      className="group flex items-center gap-x-3 py-2"
      onClick={closeSidebar}
    >
      {children}
      <span className="h-5 text-base font-semibold dark:text-dark_text group-hover:text-primary_hover transition-all duration-200 ease-in-out">
        {text}
      </span>
    </a>
  );
};

export default MenuItem;
