import MenuItem from "../common/MenuItem";
import SubMenu from "./SubMenu";
import Theme from "./Theme";

// Icons
import { Home, ServicesIcon } from "../../Icons/Icons";

const NavMenu = ({ closeSidebar }: { closeSidebar: () => void }) => {
  return (
    <nav className="md:block h-svh overflow-x-auto pb-24">
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
          <SubMenu closeSidebar={closeSidebar} />
        </li>
        <li>
          <Theme />
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
