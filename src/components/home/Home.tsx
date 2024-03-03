import { home } from "@schema";

import Redirect from "../common/Redirect";

const Home = ({ home }: { home: home }) => {
  return (
    <section
      id="home"
      className="items-center lg:p-5 pt-24 lg:pt-5 h-screen select-none"
    >
      <article className="relative overflow-hidden w-full h-full p-5 rounded-xl flex justify-center items-center lg:bg-transparent transition-all duration-200 ease-in-out">
        <div className="relative max-w-[800px] lg:max-w-[1100px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-light_text dark:text-dark_text transition-all duration-200 ease-in-out">
            {`${home.greeting} `}
            <b className="text-primary-500 dark:text-primary-300 transition-all duration-200 ease-in-out">
              {home.name}
            </b>
            ,
          </h1>
          <b className="text-2xl lg:text-3xl block pt-5 text-primary-500 dark:text-primary-300 transition-all duration-200 ease-in-out">
            {home.profession}
          </b>
          <p className="text-sm md:text-lg lg:text-xl text-light_text dark:text-dark_text transition-all duration-200 ease-in-out">
            {home.description}
          </p>

          <nav
            role="navigation"
            className="flex flex-wrap justify-start items-center gap-2 md:gap-5 mt-5"
          >
            {home.socials.map((social, index) => (
              <Redirect
                key={index}
                url={social.url}
                text={social.title}
                title={social.ariaLabel}
              >
                {social.icon}
              </Redirect>
            ))}
          </nav>
        </div>
        <div className="hidden lg:block absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 dark:bg-[radial-gradient(125%_125%_at_50%_10%,#212121_50%,#4ab0ff_100%)] bg-[radial-gradient(125%_125%_at_50%_10%,#fff_50%,#4ab0ff_100%)] transition-all duration-200 ease-in-out"></div>
      </article>
    </section>
  );
};

export default Home;
