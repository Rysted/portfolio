export const LogoTipo = () => {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 670 719"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M106.705 388.834V228.251C106.705 175.906 157.275 182.117 198.086 182.117H441.179C497.959 182.117 544.981 173.245 544.094 244.221L543.207 324.068C542.319 387.947 544.094 410.127 480.215 423.435C463.359 426.984 457.148 430.532 457.148 448.276V557.402C457.148 578.695 470.456 576.92 481.99 576.92C520.139 576.92 512.155 516.591 575.146 516.591C607.972 516.591 659.43 537.883 659.43 576.92C659.43 587.567 658.542 598.213 654.994 608.859C621.28 710 584.018 705.564 449.163 705.564C387.947 705.564 320.52 695.805 320.52 629.265C320.52 567.161 319.632 512.155 319.632 450.051C319.632 440.292 316.971 432.307 306.324 432.307C292.129 432.307 291.242 448.276 291.242 458.036C291.242 489.975 282.37 513.042 275.273 544.094C256.641 623.942 167.921 708.226 83.6375 708.226C39.2776 708.226 10 683.384 10 637.25C10 567.161 150.177 555.627 150.177 461.584V427.871C129.772 428.758 106.705 419.886 106.705 388.834ZM433.194 10C474.005 10 515.703 48.1496 550.304 72.9912C566.274 84.5247 607.085 114.69 632.814 138.644C647.896 152.839 652.332 169.696 647.009 188.327C639.911 215.83 620.393 252.205 592.89 252.205C584.018 252.205 574.259 251.318 570.71 242.446C565.387 213.169 578.695 156.388 477.554 156.388H414.563C384.398 156.388 361.331 110.254 361.331 75.6528C361.331 36.616 399.48 10 433.194 10ZM390.608 285.919H274.385C259.303 285.919 250.431 289.468 250.431 305.437C250.431 320.52 268.175 324.956 280.596 324.956H387.947C407.465 324.956 417.224 322.294 417.224 301.001C417.224 286.806 401.255 285.919 390.608 285.919Z"
        className="fill-light_text dark:fill-dark_text"
      />
    </svg>
  );
};

export const Burger = ({
  hover,
  isOpenMenu,
}: {
  hover: boolean;
  isOpenMenu: boolean;
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
        } w-10 stroke-light_text dark:stroke-dark_text fill-none`}
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

export const Close = ({ hover }: { hover: boolean }) => {
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

export const Home = ({ hover }: { hover: boolean }) => {
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
      } h-5 stroke-light_text dark:stroke-dark_text fill-none`}
    >
      <path d="M10 18V15C10 13.8954 10.8954 13 12 13V13C13.1046 13 14 13.8954 14 15V18"></path>
      <path d="M2 8L11.7317 3.13416C11.9006 3.04971 12.0994 3.0497 12.2683 3.13416L22 8"></path>
      <path d="M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11"></path>
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={` h-5 ${
        subMenu
          ? "stroke-primary dark:stroke-primary"
          : "stroke-light_text dark:stroke-dark_text"
      } ${
        hover
          ? "group-hover:stroke-primary_hover transition-all ease-in duration-200"
          : ""
      } fill-none`}
    >
      <path d="M2 20V19C2 15.134 5.13401 12 9 12V12"></path>
      <path d="M15.8038 12.3135C16.4456 11.6088 17.5544 11.6088 18.1962 12.3135V12.3135C18.5206 12.6697 18.9868 12.8628 19.468 12.8403V12.8403C20.4201 12.7958 21.2042 13.5799 21.1597 14.532V14.532C21.1372 15.0132 21.3303 15.4794 21.6865 15.8038V15.8038C22.3912 16.4456 22.3912 17.5544 21.6865 18.1962V18.1962C21.3303 18.5206 21.1372 18.9868 21.1597 19.468V19.468C21.2042 20.4201 20.4201 21.2042 19.468 21.1597V21.1597C18.9868 21.1372 18.5206 21.3303 18.1962 21.6865V21.6865C17.5544 22.3912 16.4456 22.3912 15.8038 21.6865V21.6865C15.4794 21.3303 15.0132 21.1372 14.532 21.1597V21.1597C13.5799 21.2042 12.7958 20.4201 12.8403 19.468V19.468C12.8628 18.9868 12.6697 18.5206 12.3135 18.1962V18.1962C11.6088 17.5544 11.6088 16.4456 12.3135 15.8038V15.8038C12.6697 15.4794 12.8628 15.0132 12.8403 14.532V14.532C12.7958 13.5799 13.5799 12.7958 14.532 12.8403V12.8403C15.0132 12.8628 15.4794 12.6697 15.8038 12.3135V12.3135Z"></path>
      <path d="M15.3636 17L16.4546 18.0909L18.6364 15.9091"></path>
      <path d="M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z"></path>
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${
        subMenu
          ? "stroke-primary dark:stroke-primary"
          : "stroke-light_text dark:stroke-dark_text"
      } ${
        hover
          ? "group-hover:stroke-primary_hover transition-all ease-in duration-200"
          : ""
      } ${subMenu ? "rotate-180" : "rotate-0"} h-5 fill-none`}
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${
        hover
          ? "group-hover:stroke-primary transition-all ease-in duration-200"
          : ""
      } h-5 stroke-light_text dark:stroke-dark_text fill-none`}
    >
      <path d="M9 6L15 12L9 18"></path>
    </svg>
  );
};

export const BookCode = ({ hover }: { hover: boolean }) => {
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
      } h-5 stroke-light_text dark:stroke-dark_text fill-none`}
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

export const Code = ({ hover }: { hover: boolean }) => {
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
      } h-5 stroke-light_text dark:stroke-dark_text fill-none`}
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${
        hover
          ? "group-hover:stroke-primary transition-all ease-in duration-200"
          : ""
      } h-5 stroke-light_text dark:stroke-dark_text fill-none`}
    >
      <path d="M0 0h24v24H0z" stroke="none"></path>
      <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
      <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>
    </svg>
  );
};

export const Services = ({ hover }: { hover: boolean }) => {
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
      } h-5 stroke-light_text dark:stroke-dark_text fill-none`}
    >
      <path d="M8 15C12.8747 15 15 12.949 15 8C15 12.949 17.1104 15 22 15C17.1104 15 15 17.1104 15 22C15 17.1104 12.8747 15 8 15Z"></path>
      <path d="M2 6.5C5.13376 6.5 6.5 5.18153 6.5 2C6.5 5.18153 7.85669 6.5 11 6.5C7.85669 6.5 6.5 7.85669 6.5 11C6.5 7.85669 5.13376 6.5 2 6.5Z"></path>
    </svg>
  );
};

export const Contact = ({ hover }: { hover: boolean }) => {
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
      } h-5 stroke-light_text dark:stroke-dark_text fill-none`}
    >
      <path d="M7 9L12 12.5L17 9"></path>
      <path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"></path>
    </svg>
  );
};

export const Sun = ({ hover }: { hover: boolean }) => {
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
      } h-5 stroke-light_text dark:stroke-dark_text fill-none`}
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${
        hover
          ? "group-hover:stroke-primary transition-all ease-in duration-200"
          : ""
      } h-5 stroke-light_text dark:stroke-dark_text fill-none`}
    >
      <path d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z"></path>
    </svg>
  );
};

export const LinkedIn = ({ hover = false }: { hover?: boolean }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        hover
          ? "group-hover:fill-primary transition-all ease-in duration-200"
          : ""
      } h-5 fill-dark_text`}
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

export const GitHub = ({ hover = false }: { hover?: boolean }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        hover
          ? "group-hover:fill-primary transition-all ease-in duration-200"
          : ""
      } h-5 fill-dark_text`}
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

export const Gmail = ({ hover = false }: { hover?: boolean }) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5">
      <g clipPath="url(#clip0_170_356)">
        <path
          d="M12 18H5C4.46957 18 3.96086 17.7893 3.58579 17.4142C3.21071 17.0391 3 16.5304 3 16V6M3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6M3 6L12 12L21 6M21 6V13.5M15 18H21M21 18L18 15M21 18L18 21"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${
            hover
              ? "group-hover:stroke-primary transition-all ease-in duration-200"
              : ""
          } h-5 stroke-dark_text fill-none`}
        />
      </g>
      <defs>
        <clipPath id="clip0_170_356">
          <rect
            className={`${
              hover
                ? "group-hover:fill-primary transition-all ease-in duration-200"
                : ""
            } h-5 w-full fill-dark_text`}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
