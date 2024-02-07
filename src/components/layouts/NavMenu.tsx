import MenuItem from "../common/MenuItem";
import SubMenu from "./SubMenu";

// Icons
import { BookCode, CodeIcon, Home, ServicesIcon } from "../../Icons/Icons";

const NavMenu = ({
  disableSidebar,
  active,
}: {
  disableSidebar: () => void;
  active: string;
}) => {
  return (
    <nav className="py-5">
      <ul className="flex flex-col gap-y-2 px-4">
        <li>
          <MenuItem
            url="#home"
            text="Inicio"
            disableSidebar={disableSidebar}
            active={active === "home"}
          >
            <Home active={active === "home"} />
          </MenuItem>
        </li>
        <li>
          <MenuItem
            url="#services"
            text="Servicios"
            disableSidebar={disableSidebar}
            active={active === "services"}
          >
            <ServicesIcon hover={true} active={active === "services"} />
          </MenuItem>
        </li>
        <li>
          <MenuItem
            url="#projects"
            text="Proyectos"
            disableSidebar={disableSidebar}
            active={active === "projects"}
          >
            <CodeIcon hover={true} active={active === "projects"} />
          </MenuItem>
        </li>
        <li>
          <MenuItem
            url="#skills"
            text="Habilidades"
            disableSidebar={disableSidebar}
            active={active === "skills"}
          >
            <BookCode hover={true} active={active === "skills"} />
          </MenuItem>
        </li>
        <li className="bg-light_background dark:bg-dark_background rounded-xl transition-all duration-200 ease-in-out">
          <SubMenu />
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
