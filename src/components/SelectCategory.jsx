const SelectCategory = ({ categoryFn, category }) => {
  const categoryHandler = (e) => {
    categoryFn(e.target.value);
  };
  return (
    <select name="category" id="category" onChange={(e) => categoryHandler(e)}>
      <option selected={category === 0} value="0">
        All
      </option>
      <option selected={category === 1} value="1">
        Home 🏠
      </option>
      <option selected={category === 2} value="2">
        Work 🗄
      </option>
      <option selected={category === 3} value="3">
        School 📚
      </option>
    </select>
  );
};

export default SelectCategory;
