const IconLink = ({
  url,
  text,
  children,
}: {
  url: string;
  text: string;
  children: JSX.Element;
}) => {
  return (
    <a
      href={url}
      className="group"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ir a ${text}`}
      title={`Ir a ${text}`}
    >
      {children}
    </a>
  );
};

export default IconLink;
