import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useDelScheduleMutation,
  useEditScheduleMutation,
} from "../../services/scheduleApi";
import "./schedulecards.css";

function ScheduleCards({ cards }) {
  const [delScheduleFn] = useDelScheduleMutation();
  const [editScheduleFn] = useEditScheduleMutation();
  const [newTitle, setNewTitle] = useState(cards.title);

  async function Delete() {
    await delScheduleFn(cards.id);
  }

  async function handleEdit() {
    await editScheduleFn({
      id: cards.id,
      title: newTitle,
      todos: cards.todos,
    });
  }

  async function handleDeleteTask(taskId) {
    const updatedTodos = cards.todos.filter((todo) => todo.id !== taskId);
    await editScheduleFn({
      id: cards.id,
      title: cards.title,
      todos: updatedTodos,
    });
  }

  return (
    <div className="card shadow-sm mb-4 m-2" style={{ width: "20rem"}}>
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0 text-uppercase">{cards.title}</h5>
        <div>
          <i
            className="bi bi-trash3 text-danger"
            onClick={Delete}
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">
          Total Tasks: {cards.todos?.length || 0}
        </h6>
        <ul
          className="list-group list-group-flush"
          style={{ maxHeight: "150px", overflowY: "auto" }}
        >
          {cards.todos && cards.todos.length > 0 ? (
            cards.todos.map((todo) => (
              <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                {todo.task}
                <i
                  className="bi bi-trash text-danger"
                  onClick={() => handleDeleteTask(todo.id)}
                  style={{ cursor: "pointer" }}
                ></i>
              </li>
            ))
          ) : (
            <li className="list-group-item text-muted">No tasks available</li>
          )}
        </ul>
      </div>
      <div className="card-footer">
        <Link to={`/cards/${cards.id}`} className="btn btn-primary w-100">
          Add Task
        </Link>
      </div>
    </div>
  );
}

export default ScheduleCards;
