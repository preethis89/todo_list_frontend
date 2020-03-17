import React from 'react';

function Task(props) {
    return (
        <div class="container">
            <p>{props.text} - {props.urgent === true ? "Urgent" : ""} 
            <span>
                <button type="button" class="btn btn-primary">Completed</button>
                <button type="button" class="btn btn-primary">Delete</button>
                </span>
            </p> 
            
        </div>
    );

}
export default Task;