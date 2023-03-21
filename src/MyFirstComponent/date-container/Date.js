import "./Date.css"

function Date(props) {
  return (
    <div>
      <p className="dueDate">Due Date</p>
      <p className="date">{props.date.toLocaleDateString()}</p>
    </div>
  );
}

export default Date