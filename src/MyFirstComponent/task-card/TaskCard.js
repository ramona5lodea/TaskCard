import "./TaskCard.css";
import Badge from "../badge/Badge";
import Date from "../date-container/Date";

function TaskCard(props) {
  // const id = "T-2";
  // // const status = "Todo";
  // const name = "Create a Design System for Enum Workspace."
  // const dueDate = new Date(2022, 5, 23)

  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="task-id"> {props.id}</p>
        <Badge status={props.status} />
      </div>
      <div className="card-content">
        <p>{props.name}</p>
      </div>
      <div className="card-footer">
        <Date date = {props.dueDate}/>
      </div>
    </div>
  );
}

export default TaskCard;
