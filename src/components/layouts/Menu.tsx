// Icons
import { Burger } from "../../icons/Icons";

const Menu = ({
  isOpenMenu,
  toggleSidebar,
}: {
  isOpenMenu: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <button onClick={toggleSidebar} className="group">
      <Burger isOpenMenu={isOpenMenu} hover={true} />
    </button>
  );
};

export default Menu;
