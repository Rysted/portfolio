import MenuItem from "../common/MenuItem";
import SubMenu from "./SubMenu";

// Icons
import {
  BookCode,
  CodeIcon,
  Formation,
  Home,
  ServicesIcon,
} from "../../Icons/Icons";

const NavMenu = ({ closeSidebar }: { closeSidebar: () => void }) => {
  return (
    <nav className="h-svh overflow-x-auto pt-5 pb-24 md:block">
      <ul className="flex flex-col gap-y-2 px-6">
        <li>
          <MenuItem url="#home" text="Inicio" closeSidebar={closeSidebar}>
            <Home hover={true} />
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
        <li>
          <MenuItem
            url="#formation"
            text="Formación"
            closeSidebar={closeSidebar}
          >
            <Formation hover={true} />
          </MenuItem>
        </li>
        <li>
          <SubMenu />
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
