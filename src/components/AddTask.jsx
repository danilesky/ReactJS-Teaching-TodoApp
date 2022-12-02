import { useState } from "react";
import SelectCategory from "./SelectCategory";

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

  const categoryHandler = (cat) => {
    setCategory(cat);
  };

  return (
    <div>
      <input type="text" onChange={valueHandler} value={value} />
      <button onClick={addHandler}>Add</button>
      <SelectCategory category={category} categoryFn={categoryHandler} />
    </div>
  );
};
export default AddTask;
