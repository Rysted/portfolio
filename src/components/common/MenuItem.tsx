const MenuItem = ({
  url,
  children,
  text,
  closeSidebar,
  active,
}: {
  url: string;
  children: JSX.Element;
  text: string;
  closeSidebar: () => void;
  active?: boolean;
}) => {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      aria-label="Ir a {text}"
      title={`Ir a ${text}`}
      onClick={closeSidebar}
      className={`group flex items-center gap-x-4 p-2 rounded-lg ${
        active && "bg-primary-100 dark:bg-primary-700"
      }`}
    >
      {children}
      <span
        className={`h-5 text-base font-semibold ${
          active
            ? "text-primary-600 dark:text-primary-300"
            : "text-secondary-700 dark:text-secondary-300"
        } group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-all duration-200 ease-in-out`}
      >
        {text}
      </span>
    </a>
  );
};

export default MenuItem;
