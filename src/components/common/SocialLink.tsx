const SocialLink = ({
  url,
  children,
  text,
}: {
  url: string;
  children: JSX.Element;
  text: string;
}) => {
  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ir a {text}"
        title={`Ir a ${text}`}
        className="flex items-center gap-x-2 bg-primary text-dark_text px-3 py-1 rounded-full hover:bg-primary_hover hover:scale-110 transition-all duration-200 ease-in-out"
      >
        {children}
        <span>{text}</span>
      </a>
    </>
  );
};

export default SocialLink;
