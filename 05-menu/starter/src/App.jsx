import { useState } from "react";
import Categories from "./Categories.jsx";
import Menu from "./Menu.jsx";
import Title from "./Title.jsx";
import data from "./data.js";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    setMenu(data.filter((menuItem) => menuItem.category === category));
  };

  return (
    <main>
      <section className="menu">
        <Title title="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menu={menu} />
      </section>
    </main>
  );
};
export default App;
