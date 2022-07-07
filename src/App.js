import { useState } from "react";
import { todo, completed, inProgress } from "./data";
import "./styles.css";

export default function App() {
  const [allTasks, setAllTasks] = useState({ todo, inProgress, completed });

  const taskClickHandler = (task, category) => {
    console.log(task, category);
    let updatedTask = allTasks[category].filter((t) => t.id !== task.id);
    if (category === "todo") {
      updatedTask = {
        ...allTasks,
        [category]: updatedTask,
        inProgress: [...allTasks["inProgress"], task]
      };
    }
    if (category === "inProgress") {
      updatedTask = {
        ...allTasks,
        [category]: updatedTask,
        completed: [...allTasks["completed"], task]
      };
    }
    setAllTasks(updatedTask);
  };
  return (
    <div className="App">
      {Object.keys(allTasks).map((col, id) => (
        <div key={id}>
          <h3>{col}</h3>
          {allTasks[col].map((t) => (
            <li key={t.id} onClick={() => taskClickHandler(t, col)}>
              {t.name}
            </li>
          ))}
        </div>
      ))}
    </div>
  );
}
