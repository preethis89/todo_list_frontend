import React from 'react';
import Completed from "./Completed";
import Pending from "./Pending";

function Task(props) {
    return (
        <div class="container">
                <div class="row">
                    <div class="col-12 col-4">
            <p>{props.text} - {props.urgent === true ? <css style={{color: 'red'}}>"Urgent"</css> : "Can wait"} 
            <span>
                <div>{props.status === "completed" ? <Completed /> : <Pending /> }
                <button type="button" class="btn btn-primary">Delete</button></div>
                </span>
            </p> 
            
        </div>
        </div>
        </div>
    );

}
export default Task;
