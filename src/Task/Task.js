import React from 'react';
import Completed from "./Completed";
import moment from "moment";
function Task(props) {
    const deleteHandleClick = () => {
        props.deleteTaskFn(props.id);
    };
    const completeHandleClick = () => {
        props.completedTaskFn(props.id);
    };
    const comstyle={
        fontStyle : "italic",
        textDecoration : "line-through",
        color : "#27a1d1"
        
    }
    return (
        <div className="container">
            <div className="row" id="todoItems">
                <div className="col-12 col-md-4">
                    <div style={props.status === "completed" ? comstyle : null}> {props.text}
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    {props.priority === true ? 
                    <css style={{ color: 'red' }}>"Urgent"</css> 
                    : "Can wait"}
                </div>
                <div className="col-4 col-md-2">
                    <div id="duedate">
                        {moment(props.dueDate).format("MMM Do YY")}
                    </div>
                </div>
                <div className="col-8 col-md-3">
                    <span className="statusbtn">
                        <div>{props.status === "completed" ? <Completed /> : <button class="btn btn-primary" onClick={completeHandleClick}>Pending</button>}
                            <button type="button" className="btn btn-primary" onClick={deleteHandleClick}>Delete</button></div>
                    </span>
                </div>
            </div>
        </div>
    );
}
export default Task;
