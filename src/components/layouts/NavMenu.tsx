import MenuItem from "../common/MenuItem";
import SubMenu from "../common/SubMenu";
import Theme from "./Theme";

// Icons
import { Home, Services } from "../../Icons/Icons";

const NavMenu = () => {
  return (
    <nav className="md:block h-svh overflow-x-auto pb-24">
      <ul className="flex flex-col gap-y-2 px-6">
        <li>
          <MenuItem url="#home" text="Inicio">
            <Home hover={true} />
          </MenuItem>
        </li>
        <li>
          <MenuItem url="#services" text="Servicios">
            <Services hover={true} />
          </MenuItem>
        </li>
        <li>
          <SubMenu />
        </li>
        <li>
          <Theme />
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;