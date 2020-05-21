import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
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
            <a class="btn btn-secondary" id="addbutton" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><FaPlus /></a>
            <div class="row" id="addcollapse">
                <div class="collapse multi-collapse" id="multiCollapseExample1">
                <div class="d-flex justify-content-around text-white">
                        <div class="p-2" id="add-date">
                            <div class="input-group-prepend">
                                <input type="date" class="form-control" value={date} onChange={handleDateChange} />
                            </div>
                        </div>
                        <div class="p-2" id="add-text">
                            <input type="text" class="form-control" value={tasktext} onChange={handleTxtChange} placeholder="Add task item here..." />
                        </div>
                        <div class="p-2 ml-4" id="chkbox">
                            <input type="checkbox" class="form-check-input" id="urgentCheckbox" value={priority} onChange={handleUrgentChange} />
                            <label class="form-check-label" htmlFor="urgentCheckbox">Urgent</label>
                        </div>
                        <div class="p-2 addtask">
                            <button class="btn btn-primary" type="button" id="addtaskbtn" onClick={handleAddTask}>Add Task</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Addtask;