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
      <path d="M2 20V19C2 15.134 5.13401 12 9 12V12"></path>
      <path d="M15.8038 12.3135C16.4456 11.6088 17.5544 11.6088 18.1962 12.3135V12.3135C18.5206 12.6697 18.9868 12.8628 19.468 12.8403V12.8403C20.4201 12.7958 21.2042 13.5799 21.1597 14.532V14.532C21.1372 15.0132 21.3303 15.4794 21.6865 15.8038V15.8038C22.3912 16.4456 22.3912 17.5544 21.6865 18.1962V18.1962C21.3303 18.5206 21.1372 18.9868 21.1597 19.468V19.468C21.2042 20.4201 20.4201 21.2042 19.468 21.1597V21.1597C18.9868 21.1372 18.5206 21.3303 18.1962 21.6865V21.6865C17.5544 22.3912 16.4456 22.3912 15.8038 21.6865V21.6865C15.4794 21.3303 15.0132 21.1372 14.532 21.1597V21.1597C13.5799 21.2042 12.7958 20.4201 12.8403 19.468V19.468C12.8628 18.9868 12.6697 18.5206 12.3135 18.1962V18.1962C11.6088 17.5544 11.6088 16.4456 12.3135 15.8038V15.8038C12.6697 15.4794 12.8628 15.0132 12.8403 14.532V14.532C12.7958 13.5799 13.5799 12.7958 14.532 12.8403V12.8403C15.0132 12.8628 15.4794 12.6697 15.8038 12.3135V12.3135Z"></path>
      <path d="M15.3636 17L16.4546 18.0909L18.6364 15.9091"></path>
      <path d="M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z"></path>
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

export const NavArrowRight = ({ hover = false }: { hover: boolean }) => {
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
      <path d="M9 6L15 12L9 18"></path>
    </svg>
  );
};

export const BookCode = ({ hover = false }: { hover: boolean }) => {
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
      <path d="M4 19V5C4 3.89543 4.89543 3 6 3H19.4C19.7314 3 20 3.26863 20 3.6V16.7143" />
      <path d="M6 17H20" />
      <path d="M6 21C6 21 19 21 20 21" />
      <path d="M6 21C4.89543 21 4 20.1046 4 19C4 17.8954 4.89543 17 6 17" />
      <path d="M12.75 7L11 13.25" strokeWidth="1" />
      <path d="M9.25 8.25L7.5 10L9.25 11.75" strokeWidth="1" />
      <path d="M14.75 8.25L16.5 10L14.75 11.75" strokeWidth="1" />
    </svg>
  );
};

export const Code = ({ hover = false }: { hover: boolean }) => {
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
      <path d="M13.5 6L10 18.5"></path>
      <path d="M6.5 8.5L3 12L6.5 15.5"></path>
      <path d="M17.5 8.5L21 12L17.5 15.5"></path>
    </svg>
  );
};

export const Formation = ({ hover = false }: { hover: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${
        hover
          ? "group-hover:stroke-primary transition-all ease-in duration-200"
          : ""
      } h-5 my-auto stroke-light_text dark:stroke-dark_text fill-none`}
    >
      <path d="M0 0h24v24H0z" stroke="none"></path>
      <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
      <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>
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
