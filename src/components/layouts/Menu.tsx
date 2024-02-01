const Menu = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <button onClick={toggleSidebar}>
      <img
        src="./icons/menu.svg"
        alt="Icono para abrir el menú"
        className="w-10 dark:invert"
      />
    </button>
  );
};

export default Menu;
