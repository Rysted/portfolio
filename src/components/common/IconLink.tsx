const IconLink = ({
  url,
  title,
  children,
}: {
  url: string;
  title: string;
  children: JSX.Element;
}) => {
  return (
    <a
      href={url}
      className="group"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
      title={title}
    >
      {children}
    </a>
  );
};

export default IconLink;
