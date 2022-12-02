import { echoCategory } from "../functions/echoCategory";
const Task = ({ data, deleteFn, completeFn }) => {
  return (
    <div>
      <h3>
        {data.title} {echoCategory(data.categoryId)}
      </h3>
      <button onClick={() => completeFn(data.title)}>Complete</button>
      <a href="#" onClick={() => deleteFn(data.title)}>
        Delete
      </a>
    </div>
  );
};

export default Task;
