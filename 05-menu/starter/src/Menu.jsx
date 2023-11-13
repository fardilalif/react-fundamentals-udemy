import MenuItem from "./MenuItem.jsx";

const Menu = (props) => {
  const { menu } = props;
  return (
    <div className="section-center">
      {menu.map((singleMenu) => (
        <MenuItem singleMenu={singleMenu} key={singleMenu.id} />
      ))}
    </div>
  );
};
export default Menu;
