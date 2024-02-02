export const Burger = ({
  isOpenMenu,
  hover = false,
}: {
  isOpenMenu: boolean;
  hover: boolean;
}) => {
  return (
    <>
      <svg
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          hover
            ? "group-hover:stroke-primary transition-all ease-in duration-200"
            : ""
        } w-10 my-auto stroke-light_text dark:stroke-dark_text fill-none`}
      >
        {isOpenMenu ? (
          <>
            <path d="M6 18L18 6"></path>
            <path d="M6 6L18 18"></path>
          </>
        ) : (
          <>
            <path d="M3 5H21"></path>
            <path d="M3 12H21"></path>
            <path d="M3 19H21"></path>
          </>
        )}
      </svg>
    </>
  );
};

export const Close = ({ hover = false }: { hover: boolean }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${
        hover
          ? "group-hover:stroke-primary transition-all ease-in duration-200"
          : ""
      } w-10 md:hidden stroke-light_text dark:stroke-dark_text fill-none`}
    >
      <path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"></path>
    </svg>
  );
};

export const Home = ({ hover = false }: { hover: boolean }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        hover
          ? "group-hover:stroke-primary transition-all ease-in duration-200"
          : ""
      } h-5 my-auto stroke-light_text dark:stroke-dark_text fill-none`}
    >
      <path d="M10 18V15C10 13.8954 10.8954 13 12 13V13C13.1046 13 14 13.8954 14 15V18"></path>
      <path d="M2 8L11.7317 3.13416C11.9006 3.04971 12.0994 3.0497 12.2683 3.13416L22 8"></path>
      <path d="M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11"></path>
    </svg>
  );
};

export const AboutMe = ({ hover = false }: { hover: boolean }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${
        hover
          ? "group-hover:stroke-primary transition-all ease-in duration-200"
          : ""
      } h-5 my-auto stroke-light_text dark:stroke-dark_text fill-none`}
    >
      <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"></path>
      <path d="M22 17.2798C22 17.8812 21.7625 18.4588 21.3383 18.8861C20.3619 19.8701 19.415 20.8961 18.4021 21.8443C18.17 22.0585 17.8017 22.0507 17.5795 21.8268L14.6615 18.8861C13.7795 17.9972 13.7795 16.5623 14.6615 15.6734C15.5522 14.7758 17.0032 14.7758 17.8938 15.6734L17.9999 15.7803L18.1059 15.6734C18.533 15.2429 19.1146 15 19.7221 15C20.3297 15 20.9113 15.2428 21.3383 15.6734C21.7625 16.1007 22 16.6784 22 17.2798Z"></path>
      <path d="M5 20V19C5 15.134 8.13401 12 12 12C13.0736 12 14.0907 12.2417 15 12.6736"></path>
    </svg>
  );
};

export const NavArrowDown = ({
  hover = false,
  subMenu,
}: {
  hover: boolean;
  subMenu: boolean;
}) => {
  return (
    <svg
      stroke-width="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${
        hover
          ? "group-hover:stroke-primary transition-all ease-in duration-200"
          : ""
      } ${
        subMenu ? "rotate-180" : "rotate-0"
      } h-5 my-auto stroke-light_text dark:stroke-dark_text fill-none`}
    >
      <path d="M6 9L12 15L18 9"></path>
    </svg>
  );
};

export const Services = ({ hover = false }: { hover: boolean }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      strokeLinejoin="round"
      className={`${
        hover
          ? "group-hover:stroke-primary transition-all ease-in duration-200"
          : ""
      } h-5 my-auto stroke-light_text dark:stroke-dark_text fill-none`}
    >
      <path d="M8 15C12.8747 15 15 12.949 15 8C15 12.949 17.1104 15 22 15C17.1104 15 15 17.1104 15 22C15 17.1104 12.8747 15 8 15Z"></path>
      <path d="M2 6.5C5.13376 6.5 6.5 5.18153 6.5 2C6.5 5.18153 7.85669 6.5 11 6.5C7.85669 6.5 6.5 7.85669 6.5 11C6.5 7.85669 5.13376 6.5 2 6.5Z"></path>
    </svg>
  );
};

export const Contact = ({ hover = false }: { hover: boolean }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${
        hover
          ? "group-hover:stroke-primary transition-all ease-in duration-200"
          : ""
      } h-5 my-auto stroke-light_text dark:stroke-dark_text fill-none`}
    >
      <path d="M7 9L12 12.5L17 9"></path>
      <path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"></path>
    </svg>
  );
};

export const Sun = ({ hover = false }: { hover: boolean }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${
        hover
          ? "group-hover:stroke-primary transition-all ease-in duration-200"
          : ""
      } h-5 my-auto stroke-light_text dark:stroke-dark_text fill-none`}
    >
      <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"></path>
      <path d="M22 12L23 12"></path>
      <path d="M12 2V1"></path>
      <path d="M12 23V22"></path>
      <path d="M20 20L19 19"></path>
      <path d="M20 4L19 5"></path>
      <path d="M4 20L5 19"></path>
      <path d="M4 4L5 5"></path>
      <path d="M1 12L2 12"></path>
    </svg>
  );
};

export const Moon = ({ hover = false }: { hover: boolean }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${
        hover
          ? "group-hover:stroke-primary transition-all ease-in duration-200"
          : ""
      } h-5 my-auto stroke-light_text dark:stroke-dark_text fill-none`}
    >
      <path d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z"></path>
    </svg>
  );
};
