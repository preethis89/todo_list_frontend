import React from 'react';
import "/Users/srini/Tech Returners/todo_list_frontend/src/Task/Task.css";

function Addtask() {
    return (
        <div class="container">
                <div class="row">
                    <div class="col">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <button class="btn btn-primary" type="button" id="addtaskbtn">Add Task</button>
            </div>
            <div>
              <input type="date"   class="form-control" /> 
            </div>
            <input type="text" class="form-control" placeholder="Add task items here" />
        </div>
        </div>
        </div>
        </div>


    );

}
export default Addtask;