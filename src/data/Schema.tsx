export type header = {
  menu: {
    open: string;
    close: string;
  };
  navMenu: navMenu[];
  themeMenu: themeMenu;
  languageMenu: languageMenu;
};

export type navMenu = {
  url: string;
  text: string;
};

export type themeMenu = {
  title: string;
  light: string;
  dark: string;
};

export type languageMenu = {
  title: string;
  spanish: string;
  english: string;
};

export type home = {
  greeting: string;
  name: string;
  profession: string;
  description: string;
  socials: SocialProfile[];
};

export type SocialProfile = {
  title: string;
  url: string;
  ariaLabel: string;
  icon: JSX.Element;
};

export type services = {
  icon: JSX.Element;
  title: string;
  cards: {
    icon: JSX.Element;
    title: string;
    subTitle: string;
  }[];
};

export type projects = {
  title: string;
  cards: {
    image: string;
    title: string;
    description: string;
    tags: string[];
    code: string;
    demo: string;
  }[];
  button: {
    demoTitle: string;
    codeTitle: string;
    showMore: string;
    noMoreResults: string;
  };
};

export type skills = {
  icon: JSX.Element;
  title: string;
  cards: {
    title: string;
    skills: string[];
  }[];
};

export type backToTop = {
  ariaLabel: string;
};

export type footer = {
  title: string;
  socials: SocialProfile[];
};

export interface Schema {
  selected: string;
  header: header;
  home: home;
  services: services;
  projects: projects;
  skills: skills;
  backToTop: backToTop;
  footer: footer;
}
