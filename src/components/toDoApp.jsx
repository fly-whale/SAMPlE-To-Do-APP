import { useEffect, useState } from "react";
import "./toDoApp.css";

function ToDoApp() {
  const [Todo, setTodo] = useState("");
  const [TodoTaskes, setTodoTaskes] = useState([]);
  const addtaske = (event) => {
    event.preventDefault();
    setTodoTaskes([...TodoTaskes, Todo]);
    console.log(Todo);
  };
  const deleteTaske = (index) => {
    setTodoTaskes(TodoTaskes.filter((_, i) => i !== index));
  };
  const Ch_box = () => {
    alert("Taskes Completed");
  };
  return (
    <>
      <form onSubmit={addtaske} className="header">
        <h1>To Do APP</h1>
        <input
          value={Todo}
          onChange={(event) => setTodo(event.target.value)}
          type="text"
          placeholder="Add youre taskes....."
        />
      </form>

      <div>
        {TodoTaskes.map((task,index) => (
          <ul>
            
            <li>
              {task}
              <input onClick={Ch_box} type="checkbox" />
              <i
                onClick={() => {
                  deleteTaske(index);
                }}
                className="fa-solid fa-trash-can"
                
              ></i>
              
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default ToDoApp;
