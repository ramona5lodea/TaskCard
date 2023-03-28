import "./TaskContainer.css";
import TaskCard from "../task-card/TaskCard";

function TaskContainer(props) {
  return (
    <div className="container">
      <div className="task-list">
        <div className="task-list-grid">
          {props.data.map((item) => (
            <TaskCard
              id={item.id}
              status={item.status}
              name={item.name}
              dueDate={item.dueDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskContainer;
