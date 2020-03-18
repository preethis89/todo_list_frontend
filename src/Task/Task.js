import React from 'react';
import Completed from "./Completed";
import Pending from "./Pending";

function Task(props) {
    return (
        <div class="container">
                <div class="row">
                    <div class="col">
            <p>{props.text} - {props.urgent === true ? "Urgent" : ""} 
            <span>
                <button type="button">{props.status === "completed" ? <Completed /> : <Pending /> }</button>
                <button type="button" class="btn btn-primary">Delete</button>
                </span>
            </p> 
            
        </div>
        </div>
        </div>
    );

}
export default Task;
