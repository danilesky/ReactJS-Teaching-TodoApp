import { useState } from "react";

const AddTask = ({ addTaskFn }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState(0);

  const valueHandler = (e) => {
    setValue(e.target.value);
  };

  const addHandler = () => {
    addTaskFn(value, category);
    setValue("");
    setCategory(0);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={valueHandler} value={value} />
      <button onClick={addHandler}>Add</button>
      <select name="category" id="category" onChange={categoryHandler}>
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
    </div>
  );
};
export default AddTask;
