import React from "react";
import { Outlet } from "react-router-dom";
import {
  useAddScheduleMutation,
  useGetAllSheduleListQuery,
} from "../../services/scheduleApi";
import Header from "./Header";
import "./model.css";
import { Link } from "react-router-dom";

function Schedule() {
  const { isLoading, data, refetch } = useGetAllSheduleListQuery();
  const [newSchedule, setNewSchedule] = React.useState("");
  const [AddScheduleFn] = useAddScheduleMutation();
  
  async function AddTodoFn() {
    const newScheduleObj = {
      title: newSchedule,
      todos: [],
    };
    await AddScheduleFn(newScheduleObj);
    refetch();
  }

  return (
    <div>
      <div id="back">
        <Header />
        <div className="d-flex container-fluid m-5 container mgn">
          {/* Sidebar */}
          <div className="sidebar vh-100 bg-dark text-light d-flex flex-column align-items-center p-4 rounded side-header">
            <button
              type="button"
              className="btn btn-outline-light mb-4 w-100 add-schedule"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{color:"white"}}
            >
              <i className="bi bi-plus"></i> Add Schedule
            </button>
            <div className="schedule-list w-100">
              {!isLoading &&
                data?.map((schedule, index) => (
                  <Link
                    key={index}
                    className="btn btn-light text-dark w-100 mb-3 text-start d-flex align-items-center">
                    {schedule.title}
                  </Link>
                ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="main-content flex-grow-1 p-3 shadow rounded bg-light">
            <Outlet />
          </div>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add New Schedule
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="Enter schedule title"
                  value={newSchedule}
                  onChange={(e) => setNewSchedule(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={AddTodoFn}
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
