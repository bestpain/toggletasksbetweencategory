import { useState } from "react";
import { todo, completed, inProgress } from "./data";
import "./styles.css";

export default function App() {
  const [allTasks, setAllTasks] = useState({ todo, inProgress, completed });
  const toggleHandler = (task, updatedTasks, c1, c2) => {
    return {
      ...allTasks,
      [c1]: updatedTasks,
      [c2]: [...allTasks[c2], task]
    };
  };
  const taskClickHandler = (task, category) => {
    let updatedTask = allTasks[category].filter((t) => t.id !== task.id);
    if (category === "todo") {
      setAllTasks(toggleHandler(task, updatedTask, "todo", "inProgress"));
    } else {
      setAllTasks(toggleHandler(task, updatedTask, "inProgress", "completed"));
    }
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
