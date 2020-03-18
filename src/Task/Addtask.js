import React from 'react';
import './Task.css';

function Addtask() {
    return (
        <div class="container">
                <div class="row">
                    <div class="col">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <button class="btn btn-primary" type="button">Add Task</button>
            </div>
            <input type="text" class="form-control" placeholder="Add task items here" />
        </div>
        </div>
        </div>
        </div>


    );

}
export default Addtask;