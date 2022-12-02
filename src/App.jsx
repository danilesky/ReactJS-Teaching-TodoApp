import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Menu from "./components/Menu";
import SelectCategory from "./components/SelectCategory";
import Task from "./components/Task";
import { createTask } from "./functions/createTask";

function App() {
  const [todos, setTodos] = useState([]);
  const [menu, setMenu] = useState("TODOS");
  const [currentCategory, setCurrentCategory] = useState();

  const addHandler = (title, category) => {
    setTodos((prevTodos) => [createTask(title, category), ...prevTodos]);
  };

  const deleteHandler = (title) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.title !== title));
  };

  const completeHandler = (title) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.title === title) {
          todo.completed = true;
        }
        return todo;
      })
    );
  };

  const menuHandler = (name) => {
    setMenu(name);
  };
  const currentCategoryHandler = (category) => {
    setCurrentCategory(category);
  };
  console.log(currentCategory);
  return (
    <div className="App">
      <SelectCategory
        category={currentCategory}
        categoryFn={currentCategoryHandler}
      />
      <Menu menuFn={menuHandler} />
      <AddTask addTaskFn={addHandler} />
      {menu === "TODOS" ? (
        <div>
          <h3>---------------Todos💪---------------</h3>
          {todos.map((item) => {
            if (item.completed === false && item.categoryId == currentCategory)
              return (
                <Task
                  key={item.title}
                  data={item}
                  deleteFn={deleteHandler}
                  completeFn={completeHandler}
                />
              );
          })}
        </div>
      ) : (
        <div>
          <h3>---------------Done✅---------------</h3>
          {todos.map((item) => {
            if (item.completed === true)
              return (
                <Task
                  key={item.title}
                  data={item}
                  deleteFn={deleteHandler}
                  completeFn={() => {}}
                />
              );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
