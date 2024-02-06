const Redirect = ({
  children,
  url,
  text,
  title,
}: {
  children?: JSX.Element;
  url: string;
  text: string;
  title: string;
}) => {
  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={title}
        title={title}
        className="flex items-center gap-4 h-10 gap-x-2 px-4 py-2 rounded-full bg-primary-500 hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-300 text-white transition-all duration-200 ease-in-out"
      >
        {children}
        <span>{text}</span>
      </a>
    </>
  );
};

export default Redirect;
