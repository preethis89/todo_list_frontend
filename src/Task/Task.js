import React from 'react';

function Task(props) {
    return (
        <div class="container">
            <p>{props.text} - {props.urgent === true ? "Urgent" : ""}</p>
        </div>
    );

}
export default Task;