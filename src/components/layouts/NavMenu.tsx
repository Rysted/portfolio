import MenuItem from "../common/MenuItem";
import SubMenu from "./SubMenu";

// Icons
import { BookCode, CodeIcon, Home, ServicesIcon } from "../../Icons/Icons";

const NavMenu = ({
  closeSidebar,
  active,
}: {
  closeSidebar: () => void;
  active: string;
}) => {
  return (
    <nav className="py-5">
      <ul className="flex flex-col gap-y-2 px-4">
        <li>
          <MenuItem
            url="#home"
            text="Inicio"
            closeSidebar={closeSidebar}
            active={active === "home"}
          >
            <Home active={active === "home"} />
          </MenuItem>
        </li>
        <li>
          <MenuItem
            url="#services"
            text="Servicios"
            closeSidebar={closeSidebar}
            active={active === "services"}
          >
            <ServicesIcon hover={true} active={active === "services"} />
          </MenuItem>
        </li>
        <li>
          <MenuItem
            url="#projects"
            text="Proyectos"
            closeSidebar={closeSidebar}
            active={active === "projects"}
          >
            <CodeIcon hover={true} active={active === "projects"} />
          </MenuItem>
        </li>
        <li>
          <MenuItem
            url="#skills"
            text="Habilidades"
            closeSidebar={closeSidebar}
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
