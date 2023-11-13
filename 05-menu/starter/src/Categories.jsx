const Categories = (props) => {
  const { categories, filterItems } = props;
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            className="btn"
            onClick={() => filterItems(category)}
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
