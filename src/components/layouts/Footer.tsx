import IconLink from "../common/IconLink";

import { footer } from "@schema";

const Footer = ({ footer }: { footer: footer }) => {
  return (
    <footer className="px-5 pt-20 lg:pt-32 pb-36 lg:pb-5 select-none font-poppins bg-light_highlight dark:bg-dark_highlight text-light_text dark:text-dark_text transition-all duration-200 ease-in-out">
      <section className="xl:pt-30 max-w-[800px] lg:max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <h4 className="text-xl">{footer.title}</h4>
          <div className="flex justify-center items-center gap-4">
            {footer.socials.map((social, index) => (
              <IconLink
                key={index}
                url={social.url}
                title={social.title}
                aria-label={social.ariaLabel}
              >
                {social.icon}
              </IconLink>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
