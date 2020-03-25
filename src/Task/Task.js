import React from 'react';
import Completed from "./Completed";
import Pending from "./Pending";

function Task(props) {
    return (
        <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6">
            <div>{props.text} - {props.priority === "urgent" ? <css style={{color: 'red'}}>"Urgent"</css> : "Can wait" } 
            </div>
            </div>
            <div class="col-4 col-md-2">
            <div id="duedate">
            {props.dueDate}
            </div>
            </div>
            
            <div class="col-8 col-md-4">
            <span class="statusbtn">
           
                <div>{props.status === "completed" ? <Completed /> : <Pending /> }
                <button type="button" class="btn btn-primary">Delete</button></div>
                </span>
                </div>
            
            
        
        </div>
        </div>
    );

}
export default Task;
