export const LogoTipo = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.29941 21.632V12.6983C7.29941 9.78622 10.1128 10.1318 12.3832 10.1318H25.9071C29.066 10.1318 31.6819 9.63818 31.6326 13.5868L31.5832 18.0289C31.5338 21.5827 31.6326 22.8166 28.0788 23.557C27.1411 23.7544 26.7955 23.9518 26.7955 24.9389V31.0099C26.7955 32.1945 27.5359 32.0958 28.1776 32.0958C30.2999 32.0958 29.8557 28.7395 33.3601 28.7395C35.1863 28.7395 38.0491 29.924 38.0491 32.0958C38.0491 32.6881 37.9997 33.2803 37.8023 33.8726C35.9267 39.4994 33.8537 39.2526 26.3513 39.2526C22.9457 39.2526 19.1945 38.7097 19.1945 35.0079C19.1945 31.5528 19.1451 28.4927 19.1451 25.0377C19.1451 24.4948 18.9971 24.0505 18.4048 24.0505C17.6151 24.0505 17.5657 24.9389 17.5657 25.4819C17.5657 27.2588 17.0721 28.542 16.6773 30.2696C15.6408 34.7117 10.705 39.4007 6.0161 39.4007C3.54823 39.4007 1.91943 38.0186 1.91943 35.4521C1.91943 31.5528 9.71788 30.9112 9.71788 25.6793V23.8037C8.58269 23.8531 7.29941 23.3595 7.29941 21.632ZM25.4629 0.556396C27.7333 0.556396 30.0531 2.67877 31.9781 4.06077C32.8665 4.70242 35.137 6.3806 36.5683 7.71323C37.4074 8.50293 37.6542 9.44074 37.358 10.4772C36.9632 12.0073 35.8773 14.0309 34.3473 14.0309C33.8537 14.0309 33.3108 13.9816 33.1133 13.488C32.8172 11.8593 33.5575 8.70037 27.9308 8.70037H24.4264C22.7483 8.70037 21.465 6.13381 21.465 4.20885C21.465 2.03712 23.5873 0.556396 25.4629 0.556396ZM23.0937 15.9065H16.6279C15.7889 15.9065 15.2953 16.104 15.2953 16.9924C15.2953 17.8315 16.2824 18.0783 16.9735 18.0783H22.9457C24.0315 18.0783 24.5745 17.9302 24.5745 16.7456C24.5745 15.9559 23.6861 15.9065 23.0937 15.9065Z"
        fill="black"
        className="dark:fill-dark_text transition-all duration-200 ease-in-out"
      />
    </svg>
  );
};

export const Burger = ({ hover }: { hover: boolean }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 8.33333H35"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        className={`${
          hover && "group-hover:stroke-primary"
        } dark:stroke-dark_text transition-all duration-200 ease-in-out`}
      />
      <path
        d="M5 20H35"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        className={`${
          hover && "group-hover:stroke-primary"
        } dark:stroke-dark_text transition-all duration-200 ease-in-out`}
      />
      <path
        d="M5 31.6667H35"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        className={`${
          hover && "group-hover:stroke-primary"
        } dark:stroke-dark_text transition-all duration-200 ease-in-out`}
      />
    </svg>
  );
};

export const Close = ({ hover }: { hover: boolean }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="dark:stroke-dark_text transition-all duration-200 ease-in-out"
    >
      <path
        d="M9 31L31 9"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        className={`${
          hover && "group-hover:stroke-primary"
        } dark:stroke-dark_text transition-all duration-200 ease-in-out`}
      />
      <path
        d="M9 9L31 31"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        className={`${
          hover && "group-hover:stroke-primary"
        } dark:stroke-dark_text transition-all duration-200 ease-in-out`}
      />
    </svg>
  );
};

export const Home = ({ hover }: { hover: boolean }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${
        hover && "group-hover:stroke-primary"
      } stroke-light_text dark:stroke-dark_text fill-none transition-all duration-200 ease-in-out`}
    >
      <path d="M10 18V15C10 13.8954 10.8954 13 12 13V13C13.1046 13 14 13.8954 14 15V18"></path>
      <path d="M2 8L11.7317 3.13416C11.9006 3.04971 12.0994 3.0497 12.2683 3.13416L22 8"></path>
      <path d="M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11"></path>
    </svg>
  );
};

export const ServicesIcon = ({
  hover,
  height,
}: {
  hover?: boolean;
  height?: string;
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      strokeWidth="2"
      strokeLinejoin="round"
      className={`${hover && "group-hover:stroke-primary"} ${
        height && height
      } stroke-light_text dark:stroke-dark_text fill-none transition-all duration-200 ease-in-out`}
    >
      <path d="M8 15C12.8747 15 15 12.949 15 8C15 12.949 17.1104 15 22 15C17.1104 15 15 17.1104 15 22C15 17.1104 12.8747 15 8 15Z"></path>
      <path d="M2 6.5C5.13376 6.5 6.5 5.18153 6.5 2C6.5 5.18153 7.85669 6.5 11 6.5C7.85669 6.5 6.5 7.85669 6.5 11C6.5 7.85669 5.13376 6.5 2 6.5Z"></path>
    </svg>
  );
};

export const AboutMe = ({
  hover,
  subMenu,
}: {
  hover: boolean;
  subMenu: boolean;
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={`${subMenu ? "stroke-primary" : "dark:stroke-dark_text"} ${
        hover && "group-hover:stroke-primary_hover"
      } transition-all duration-200 ease-in-out`}
    >
      <path
        d="M1.25 19C1.25 19.4142 1.58579 19.75 2 19.75C2.41421 19.75 2.75 19.4142 2.75 19H1.25ZM2.75 19V18H1.25V19H2.75ZM2.75 18C2.75 14.5482 5.54822 11.75 9 11.75V10.25C4.7198 10.25 1.25 13.7198 1.25 18H2.75Z"
        fill="black"
        stroke="none"
        className={`${subMenu ? "fill-primary" : "dark:fill-dark_text"} ${
          hover && "group-hover:fill-primary_hover"
        }  transition-all duration-200 ease-in-out`}
      />
      <path d="M15.8038 11.3135C16.4456 10.6088 17.5544 10.6088 18.1962 11.3135C18.5206 11.6697 18.9868 11.8628 19.468 11.8403C20.4201 11.7958 21.2042 12.5799 21.1597 13.532C21.1372 14.0132 21.3303 14.4794 21.6865 14.8038C22.3912 15.4456 22.3912 16.5544 21.6865 17.1962C21.3303 17.5206 21.1372 17.9868 21.1597 18.468C21.2042 19.4201 20.4201 20.2042 19.468 20.1597C18.9868 20.1372 18.5206 20.3303 18.1962 20.6865C17.5544 21.3912 16.4456 21.3912 15.8038 20.6865C15.4794 20.3303 15.0132 20.1372 14.532 20.1597C13.5799 20.2042 12.7958 19.4201 12.8403 18.468C12.8628 17.9868 12.6697 17.5206 12.3135 17.1962C11.6088 16.5544 11.6088 15.4456 12.3135 14.8038C12.6697 14.4794 12.8628 14.0132 12.8403 13.532C12.7958 12.5799 13.5799 11.7958 14.532 11.8403C15.0132 11.8628 15.4794 11.6697 15.8038 11.3135Z" />
      <path d="M15.3636 16L16.4546 17.0909L18.6364 14.9091" />
      <path d="M9 11C11.2091 11 13 9.2091 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.2091 6.79086 11 9 11Z" />
    </svg>
  );
};

export const NavArrowDown = ({
  hover,
  subMenu,
}: {
  hover: boolean;
  subMenu: boolean;
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${
        subMenu
          ? "stroke-primary dark:stroke-primary"
          : "stroke-light_text dark:stroke-dark_text"
      } ${hover && "group-hover:stroke-primary_hover"} ${
        subMenu ? "rotate-180" : "rotate-0"
      } fill-none transition-all duration-200 ease-in-out`}
    >
      <path d="M6 9L12 15L18 9"></path>
    </svg>
  );
};

export const NavArrowRight = ({ hover }: { hover: boolean }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${
        hover && "group-hover:stroke-primary"
      } stroke-light_text dark:stroke-dark_text fill-none transition-all duration-200 ease-in-out`}
    >
      <path d="M9 6L15 12L9 18"></path>
    </svg>
  );
};

export const BookCode = ({
  hover,
  height,
}: {
  hover?: boolean;
  height?: string;
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${hover && "group-hover:stroke-primary"} ${
        height && height
      } stroke-light_text dark:stroke-dark_text fill-none transition-all duration-200 ease-in-out`}
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

export const CodeIcon = ({
  hover,
  height,
}: {
  hover?: boolean;
  height?: string;
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${hover && "group-hover:stroke-primary"} ${
        height && height
      } stroke-light_text dark:stroke-dark_text fill-none transition-all duration-200 ease-in-out`}
    >
      <path d="M13.5 6L10 18.5"></path>
      <path d="M6.5 8.5L3 12L6.5 15.5"></path>
      <path d="M17.5 8.5L21 12L17.5 15.5"></path>
    </svg>
  );
};

export const Formation = ({ hover }: { hover: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="20px"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${
        hover && "group-hover:stroke-primary"
      } stroke-light_text dark:stroke-dark_text fill-none transition-all duration-200 ease-in-out`}
    >
      <path d="M0 0h24v24H0z" stroke="none"></path>
      <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
      <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>
    </svg>
  );
};

export const Sun = ({ hover }: { hover: boolean }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${
        hover && "group-hover:stroke-primary"
      } stroke-light_text dark:stroke-dark_text fill-none transition-all duration-200 ease-in-out`}
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

export const Moon = ({ hover }: { hover: boolean }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${
        hover && "group-hover:stroke-primary"
      } stroke-light_text dark:stroke-dark_text fill-none transition-all duration-200 ease-in-out`}
    >
      <path d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z"></path>
    </svg>
  );
};

export const LinkedIn = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      className=" fill-dark_text"
    >
      <g clipPath="url(#clip0_170_328)">
        <path d="M19.0409 19.0412H16.0776V14.4004C16.0776 13.2937 16.0578 11.8691 14.5363 11.8691C12.9929 11.8691 12.7567 13.0749 12.7567 14.3198V19.0409H9.79343V9.49747H12.6382V10.8017H12.678C12.9627 10.3149 13.3741 9.91443 13.8684 9.64295C14.3627 9.37147 14.9214 9.23914 15.4849 9.26005C18.4884 9.26005 19.0422 11.2357 19.0422 13.8058L19.0409 19.0412ZM6.44969 8.19302C5.49992 8.19317 4.72984 7.42333 4.72969 6.47356C4.72953 5.5238 5.4993 4.75372 6.44906 4.75356C7.39883 4.75333 8.1689 5.52317 8.16906 6.47294C8.16914 6.92903 7.98804 7.36648 7.6656 7.68906C7.34316 8.01163 6.90578 8.19291 6.44969 8.19302ZM7.9314 19.0413H4.96492V9.49747H7.93133V19.0412L7.9314 19.0413ZM20.5183 2.00146H3.47586C2.67039 1.99239 2.00984 2.63763 2 3.4431V20.5566C2.00953 21.3625 2.67 22.0083 3.47578 21.9999H20.5183C21.3258 22.0099 21.9888 21.364 22 20.5566V3.44177C21.9885 2.63474 21.3254 1.98958 20.5183 2.00013" />
      </g>
      <defs>
        <clipPath id="clip0_170_328">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const GitHub = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      className=" fill-dark_text"
    >
      <g clipPath="url(#clip0_170_345)">
        <path d="M12.0001 2C6.47789 2 2 6.47711 2 12.0001C2 16.4184 4.86531 20.1669 8.83867 21.4891C9.33844 21.5817 9.52195 21.2722 9.52195 21.008C9.52195 20.7696 9.51258 19.9819 9.50836 19.1463C6.72633 19.7512 6.1393 17.9664 6.1393 17.9664C5.68438 16.8105 5.02891 16.5031 5.02891 16.5031C4.12164 15.8825 5.09734 15.8953 5.09734 15.8953C6.10148 15.9658 6.63023 16.9258 6.63023 16.9258C7.52219 18.4545 8.96969 18.0126 9.54031 17.757C9.63008 17.1108 9.88922 16.6695 10.1752 16.4198C7.95406 16.167 5.61914 15.3095 5.61914 11.4778C5.61914 10.386 6.00977 9.49391 6.64945 8.79359C6.54563 8.54172 6.20336 7.52469 6.74633 6.14719C6.74633 6.14719 7.58609 5.87844 9.49711 7.17227C10.2948 6.9507 11.1502 6.83961 12.0001 6.83578C12.8499 6.83961 13.7061 6.95063 14.5052 7.17227C16.4139 5.87852 17.2525 6.14727 17.2525 6.14727C17.7968 7.52461 17.4544 8.5418 17.3505 8.79359C17.9917 9.49391 18.3797 10.386 18.3797 11.4778C18.3797 15.3187 16.0403 16.1644 13.8135 16.412C14.1722 16.7223 14.4918 17.3309 14.4918 18.2638C14.4918 19.6018 14.4802 20.6787 14.4802 21.008C14.4802 21.2742 14.6602 21.586 15.1671 21.4877C19.1383 20.1641 22 16.417 22 12.0002C22 6.47711 17.5227 2 12.0001 2ZM5.74539 16.2453C5.72336 16.295 5.64516 16.3099 5.57398 16.2758C5.50141 16.2432 5.4607 16.1755 5.48414 16.1256C5.5057 16.0745 5.58406 16.0602 5.65641 16.0945C5.72906 16.1271 5.77047 16.1955 5.74539 16.2453ZM6.23727 16.6842C6.18961 16.7284 6.09633 16.7079 6.03305 16.638C5.96766 16.5684 5.95539 16.4751 6.00375 16.4302C6.05297 16.386 6.14336 16.4067 6.20891 16.4764C6.27438 16.547 6.28703 16.6395 6.23727 16.6842ZM6.57477 17.2458C6.51344 17.2884 6.41328 17.2484 6.35133 17.1595C6.29008 17.0706 6.29008 16.964 6.35266 16.9213C6.41477 16.8785 6.51344 16.917 6.57617 17.0052C6.63727 17.0956 6.63727 17.2023 6.57469 17.2459L6.57477 17.2458ZM7.14539 17.8962C7.09063 17.9566 6.97383 17.9404 6.88836 17.8579C6.80094 17.7773 6.77664 17.6629 6.83164 17.6024C6.88711 17.5418 7.00453 17.5588 7.09063 17.6407C7.17734 17.7212 7.20391 17.8364 7.14539 17.8962ZM7.88305 18.1157C7.85883 18.1941 7.74633 18.2297 7.63312 18.1964C7.52 18.1621 7.44602 18.0704 7.46883 17.9913C7.49234 17.9123 7.60531 17.8753 7.71938 17.9109C7.83234 17.945 7.90656 18.036 7.88305 18.1157ZM8.72242 18.2089C8.72523 18.2913 8.62922 18.3597 8.51031 18.3612C8.39078 18.3639 8.29398 18.2972 8.29266 18.2159C8.29266 18.1327 8.38656 18.065 8.50617 18.063C8.62508 18.0606 8.72242 18.1269 8.72242 18.2089ZM9.54703 18.1773C9.56125 18.2577 9.47867 18.3404 9.36055 18.3624C9.24453 18.3836 9.13703 18.3339 9.12227 18.2541C9.10789 18.1716 9.19203 18.089 9.30789 18.0677C9.42617 18.0471 9.53195 18.0955 9.54703 18.1773Z" />
      </g>
      <defs>
        <clipPath id="clip0_170_345">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Gmail = () => {
  return (
    <svg
      viewBox="0 0 30 24"
      xmlns="http://www.w3.org/2000/svg"
      height="16px"
      className=" w-full fill-dark_text"
    >
      <path d="M2.90916 22.9999H7.36373V11.6694L1 6.67065V21.0005C1 22.1052 1.85434 23 2.90916 23V22.9999Z" />
      <path d="M22.6362 22.9999H27.0909C28.1456 22.9999 29 22.1051 29 21.0004V6.67065L22.6362 11.6694V22.9999Z" />
      <path d="M22.6362 3.00487V11.6694L29 6.67062V4.00465C29 1.53359 26.3066 0.122273 24.4181 1.60524L22.6362 3.00487Z" />
      <path d="M7.36377 11.6694V3.00488L15.0002 9.00343L22.6366 3.00488V11.6694L15.0002 17.6679L7.36377 11.6694Z" />
      <path d="M1 4.00465V6.67062L7.36373 11.6694V3.00487L5.58188 1.60524C3.69339 0.122276 1 1.53359 1 4.00453V4.00465Z" />
    </svg>
  );
};

export const WhatsApp = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height="18px"
      className=" fill-dark_text"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.1485 4.26981C18.0415 2.16237 15.2393 1.00123 12.254 1C6.1025 1 1.09607 6.0014 1.09361 12.1485C1.09276 14.1136 1.60658 16.0317 2.58326 17.7226L1 23.5L6.91628 21.9495C8.54645 22.8379 10.3817 23.3061 12.2494 23.3066H12.2541C18.4049 23.3066 23.4119 18.3048 23.4142 12.1574C23.4155 9.17822 22.2557 6.37715 20.1485 4.26981ZM12.254 21.4237H12.2501C10.5857 21.423 8.95333 20.9761 7.52892 20.132L7.19038 19.931L3.67955 20.8511L4.61661 17.4315L4.39597 17.0809C3.46743 15.6054 2.97708 13.9001 2.97792 12.1492C2.97986 7.03984 7.14115 2.88304 12.2577 2.88304C14.7353 2.88385 17.0644 3.84899 18.8156 5.60061C20.5669 7.35224 21.5308 9.68053 21.53 12.1567C21.5278 17.2664 17.3668 21.4237 12.254 21.4237ZM17.342 14.4832C17.0633 14.3437 15.6922 13.67 15.4365 13.5769C15.1811 13.4839 14.995 13.4376 14.8093 13.7164C14.6233 13.9951 14.0889 14.6227 13.9262 14.8085C13.7634 14.9945 13.601 15.0178 13.322 14.8783C13.0431 14.7389 12.1447 14.4446 11.0795 13.4955C10.2506 12.7568 9.69096 11.8446 9.5282 11.5658C9.36573 11.2867 9.52679 11.1505 9.65052 10.9972C9.95239 10.6228 10.2547 10.2301 10.3476 10.0443C10.4407 9.85835 10.3941 9.69565 10.3242 9.55625C10.2547 9.41686 9.69701 8.04562 9.46468 7.48766C9.23816 6.94467 9.00843 7.01797 8.83716 7.0095C8.67469 7.00138 8.4887 6.99973 8.30272 6.99973C8.11685 6.99973 7.8147 7.06934 7.55904 7.34841C7.30348 7.62734 6.5832 8.30121 6.5832 9.67244C6.5832 11.0437 7.58241 12.3683 7.7218 12.5543C7.86115 12.7402 9.68821 15.5541 12.4854 16.7607C13.1508 17.048 13.6701 17.2192 14.0752 17.3476C14.7433 17.5596 15.351 17.5297 15.8316 17.458C16.3674 17.378 17.4813 16.784 17.7139 16.1333C17.9462 15.4826 17.9462 14.9249 17.8763 14.8085C17.8068 14.6924 17.6208 14.6227 17.342 14.4832Z"
        fill="white"
      />
    </svg>
  );
};

export const Responsive = () => {
  return (
    <svg
      viewBox="0 0 38 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height="56px"
    >
      <path
        d="M31 16.0099L31.01 15.9988"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-light_text dark:stroke-dark_text transition-all duration-200 ease-in-out"
      />
      <path
        d="M26 19.4V4.6C26 4.26863 26.2686 4 26.6 4H35.4C35.7314 4 36 4.26863 36 4.6V19.4C36 19.7314 35.7314 20 35.4 20H26.6C26.2686 20 26 19.7314 26 19.4Z"
        strokeWidth="1.5"
        className="stroke-light_text dark:stroke-dark_text transition-all duration-200 ease-in-out"
      />
      <path
        d="M2 15.5V2.6C2 2.26863 2.26863 2 2.6 2H21.4C21.7314 2 22 2.26863 22 2.6V15.5M2 15.5V17.4C2 17.7314 2.26863 18 2.6 18H21.4C21.7314 18 22 17.7314 22 17.4V15.5M2 15.5H22M9 22H10.5M10.5 22V18M10.5 22H13.5M13.5 22H15M13.5 22V18"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-light_text dark:stroke-dark_text transition-all duration-200 ease-in-out"
      />
      <g clipPath="url(#clip0_86_166)">
        <path
          d="M8.82497 9.40806V7.17464C8.82497 6.44661 9.52831 6.533 10.0959 6.533H13.4769C14.2666 6.533 14.9206 6.40961 14.9083 7.39675L14.8959 8.50728C14.8836 9.39572 14.9083 9.70421 14.0198 9.8893C13.7854 9.93866 13.699 9.98801 13.699 10.2348V11.7525C13.699 12.0487 13.8841 12.024 14.0445 12.024C14.5751 12.024 14.4641 11.1849 15.3401 11.1849C15.7967 11.1849 16.5124 11.4811 16.5124 12.024C16.5124 12.1721 16.5 12.3201 16.4507 12.4682C15.9818 13.8749 15.4635 13.8132 13.5879 13.8132C12.7365 13.8132 11.7988 13.6775 11.7988 12.752C11.7988 11.8883 11.7864 11.1232 11.7864 10.2595C11.7864 10.1237 11.7494 10.0127 11.6013 10.0127C11.4039 10.0127 11.3916 10.2348 11.3916 10.3705C11.3916 10.8148 11.2682 11.1356 11.1695 11.5674C10.9103 12.678 9.67638 13.8502 8.50415 13.8502C7.88718 13.8502 7.47998 13.5047 7.47998 12.8631C7.47998 11.8883 9.42959 11.7279 9.42959 10.4199V9.951C9.14579 9.96333 8.82497 9.83994 8.82497 9.40806ZM13.3658 4.13916C13.9335 4.13916 14.5134 4.66975 14.9946 5.01525C15.2168 5.17567 15.7844 5.59521 16.1422 5.92837C16.352 6.12579 16.4137 6.36024 16.3396 6.61937C16.2409 7.00189 15.9695 7.5078 15.5869 7.5078C15.4635 7.5078 15.3278 7.49546 15.2785 7.37207C15.2044 6.96488 15.3895 6.17515 13.9828 6.17515H13.1067C12.6872 6.17515 12.3664 5.53351 12.3664 5.05227C12.3664 4.50934 12.8969 4.13916 13.3658 4.13916ZM12.7736 7.9767H11.1571C10.9473 7.9767 10.8239 8.02606 10.8239 8.24816C10.8239 8.45794 11.0707 8.51963 11.2435 8.51963H12.7365C13.008 8.51963 13.1437 8.48261 13.1437 8.18646C13.1437 7.98904 12.9216 7.9767 12.7736 7.9767Z"
          className="dark:fill-dark_text fill-light_text transition-all duration-200 ease-in-out"
        />
      </g>
      <defs>
        <clipPath id="clip0_86_166">
          <rect
            width="10"
            height="10"
            fill="white"
            transform="translate(7 4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Optimization = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height="56px"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="fill-none stroke-light_text dark:stroke-dark_text transition-all duration-200 ease-in-out"
    >
      <path d="M13 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V14"></path>
      <path d="M2 7L22 7"></path>
      <path d="M5 5.01L5.01 4.99889"></path>
      <path d="M8 5.01L8.01 4.99889"></path>
      <path d="M11 5.01L11.01 4.99889"></path>
      <path d="M20.1241 20.1185C20.6654 19.5758 21 18.827 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21C18.8299 21 19.581 20.663 20.1241 20.1185ZM20.1241 20.1185L22 22"></path>
    </svg>
  );
};

export const Maintenance = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height="56px"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="fill-none stroke-light_text dark:stroke-dark_text transition-all duration-200 ease-in-out"
    >
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"></path>
      <path d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z"></path>
    </svg>
  );
};

export const WavePrimary = () => {
  return (
    <svg
      viewBox="0 0 283.5 27.8"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      preserveAspectRatio="none"
      id="wave-primary"
      className="rotate-180 fill-light_background dark:fill-dark_background transition-all duration-200 ease-in-out"
    >
      <path d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7	s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7	c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z M260.8,11.3	c-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z M242.4,8.6	c0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1c3.3,0.7,9.3,2.2,12.4,2.7	C239.9,8.7,242.4,8.6,242.4,8.6z M185.2,8.5c1.7-0.7-13.3,4.7-18.5,6.1c-2.1,0.6-6.2,1.6-10,2c-3.9,0.4-8.9,0.4-8.8,0.5	c0,0.2,5.8,0.8,11.2,0c5.4-0.8,5.2-1.1,7.6-1.6C170.5,14.7,183.5,9.2,185.2,8.5z M199.1,6.9c0.2,0-0.8-0.4-4.8,1.1	c-4,1.5-6.7,3.5-6.9,3.7c-0.2,0.1,3.5-1.8,6.6-3C197,7.5,199,6.9,199.1,6.9z M283,6c-0.1,0.1-1.9,1.1-4.8,2.5s-6.9,2.8-6.7,2.7	c0.2,0,3.5-0.6,7.4-2.5C282.8,6.8,283.1,5.9,283,6z M31.3,11.6c0.1-0.2-1.9-0.2-4.5-1.2s-5.4-1.6-7.8-2C15,7.6,7.3,8.5,7.7,8.6	C8,8.7,15.9,8.3,20.2,9.3c2.2,0.5,2.4,0.5,5.7,1.6S31.2,11.9,31.3,11.6z M73,9.2c0.4-0.1,3.5-1.6,8.4-2.6c4.9-1.1,8.9-0.5,8.9-0.8	c0-0.3-1-0.9-6.2-0.3S72.6,9.3,73,9.2z M71.6,6.7C71.8,6.8,75,5.4,77.3,5c2.3-0.3,1.9-0.5,1.9-0.6c0-0.1-1.1-0.2-2.7,0.2	C74.8,5.1,71.4,6.6,71.6,6.7z M93.6,4.4c0.1,0.2,3.5,0.8,5.6,1.8c2.1,1,1.8,0.6,1.9,0.5c0.1-0.1-0.8-0.8-2.4-1.3	C97.1,4.8,93.5,4.2,93.6,4.4z M65.4,11.1c-0.1,0.3,0.3,0.5,1.9-0.2s2.6-1.3,2.2-1.2s-0.9,0.4-2.5,0.8C65.3,10.9,65.5,10.8,65.4,11.1	z M34.5,12.4c-0.2,0,2.1,0.8,3.3,0.9c1.2,0.1,2,0.1,2-0.2c0-0.3-0.1-0.5-1.6-0.4C36.6,12.8,34.7,12.4,34.5,12.4z M152.2,21.1	c-0.1,0.1-2.4-0.3-7.5-0.3c-5,0-13.6-2.4-17.2-3.5c-3.6-1.1,10,3.9,16.5,4.1C150.5,21.6,152.3,21,152.2,21.1z"></path>
      <path d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C267.7,18.8,269.7,18,269.6,18z"></path>
      <path d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2	S227.6,9.9,227.4,9.8z"></path>
      <path d="M204.5,13.4c-0.1-0.1,2-1,3.2-1.1c1.2-0.1,2,0,2,0.3c0,0.3-0.1,0.5-1.6,0.4	C206.4,12.9,204.6,13.5,204.5,13.4z"></path>
      <path d="M201,10.6c0-0.1-4.4,1.2-6.3,2.2c-1.9,0.9-6.2,3.1-6.1,3.1c0.1,0.1,4.2-1.6,6.3-2.6	S201,10.7,201,10.6z"></path>
      <path d="M154.5,26.7c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C152.6,27.5,154.6,26.8,154.5,26.7z"></path>
      <path d="M41.9,19.3c0,0,1.2-0.3,2.9-0.1c1.7,0.2,5.8,0.9,8.2,0.7c4.2-0.4,7.4-2.7,7-2.6	c-0.4,0-4.3,2.2-8.6,1.9c-1.8-0.1-5.1-0.5-6.7-0.4S41.9,19.3,41.9,19.3z"></path>
      <path d="M75.5,12.6c0.2,0.1,2-0.8,4.3-1.1c2.3-0.2,2.1-0.3,2.1-0.5c0-0.1-1.8-0.4-3.4,0	C76.9,11.5,75.3,12.5,75.5,12.6z"></path>
      <path d="M15.6,13.2c0-0.1,4.3,0,6.7,0.5c2.4,0.5,5,1.9,5,2c0,0.1-2.7-0.8-5.1-1.4	C19.9,13.7,15.7,13.3,15.6,13.2z"></path>
    </svg>
  );
};
