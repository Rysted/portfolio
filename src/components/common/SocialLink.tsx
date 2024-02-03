const SocialLink = ({
  url,
  Children,
  text,
}: {
  url: string;
  Children: React.ComponentType;
  text: string;
}) => {
  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-x-2 bg-primary text-dark_text px-3 py-1 rounded-full hover:bg-primary_hover hover:scale-110 transition-all duration-200 ease-in-out"
      >
        <Children />
        <span>{text}</span>
      </a>
    </>
  );
};

export default SocialLink;
