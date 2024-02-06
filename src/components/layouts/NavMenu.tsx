import MenuItem from "../common/MenuItem";
import SubMenu from "./SubMenu";

// Icons
import { BookCode, CodeIcon, Home, ServicesIcon } from "../../Icons/Icons";

const NavMenu = ({ closeSidebar }: { closeSidebar: () => void }) => {
  return (
    <nav className="py-5">
      <ul className="flex flex-col gap-y-2 px-4">
        <li>
          <MenuItem url="#home" text="Inicio" closeSidebar={closeSidebar}>
            <Home />
          </MenuItem>
        </li>
        <li>
          <MenuItem
            url="#services"
            text="Servicios"
            closeSidebar={closeSidebar}
          >
            <ServicesIcon hover={true} />
          </MenuItem>
        </li>
        <li>
          <MenuItem
            url="#projects"
            text="Proyectos"
            closeSidebar={closeSidebar}
          >
            <CodeIcon hover={true} />
          </MenuItem>
        </li>
        <li>
          <MenuItem
            url="#skills"
            text="Habilidades"
            closeSidebar={closeSidebar}
          >
            <BookCode hover={true} />
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
