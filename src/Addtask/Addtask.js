import React, { useState } from 'react';
import "./Addtask.css";
function Addtask(props) {

    const [tasktext, setText] = useState("");
    const [date, setDate] = useState("2020-04-20");
    const [priority, setUrgent] = useState(false);

    const handleTxtChange = (event) => {
        setText(event.target.value);
    }

    const handleDateChange = (event) => {
        setDate(event.target.value)
    }

    const handleUrgentChange = (event) => {
        setUrgent(event.target.checked);
    }

    const handleAddTask = () => {
        props.addNewTaskFunc(tasktext, date, priority);

    }


    return (
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4" id="add-date">
                    <div class="input-group-prepend">
                        <input type="date" class="form-control" value={date} onChange={handleDateChange} />
                    </div>
                </div>
                <div class="col-12 col-md-4" id="add-text">
                    <input type="text" class="form-control" value={tasktext} onChange={handleTxtChange} placeholder="Add task item here..." />
                </div>
                <div class="col-6 col-md-1 ml-1" id="chkbox">
                    <input type="checkbox" class="form-check-input" id="urgentCheckbox" value={priority} onChange={handleUrgentChange} />
                    <label class="form-check-label" htmlFor="urgentCheckbox">Urgent</label>
                </div>
                <div class="col-6 col-md-2 addtask">
                    <button class="btn btn-primary" type="button" id="addtaskbtn" onClick={handleAddTask}>Add Task</button>
                </div>
            </div>
        </div>
    );
}
export default Addtask;