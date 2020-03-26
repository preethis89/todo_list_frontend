import React from 'react';
import "/Users/srini/Tech Returners/todo_list_frontend/src/Task/Task.css";
import "./Addtask.css"
function Addtask() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-3">
                    <div class="input-group-prepend">
                        <input type="date" class="form-control" />
                    </div>
                </div>
                <div class="col-4 col-md-4">
                    <input type="text" class="form-control" placeholder="Add task items here" />
                </div>
                <div class="col-6 col-md-2 ml-3">
                    <input type="checkbox" class="form-check-input" id="urgentCheckbox" />
                    <label class="form-check-label" htmlFor="urgentCheckbox">Urgent</label>
                </div>
                <div class="col-6 col-md-2 addtask">
                    <button class="btn btn-primary" type="button" id="addtaskbtn">Add Task</button>
                </div>
            </div>
        </div>
    );
}
export default Addtask;