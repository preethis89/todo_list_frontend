import React from 'react';
import "./Task.css";

function TaskCount(props) {
    return (
        <div class="container">
                <div class="row">
                    <div class="col">
        <div id="taskCount1" class="w3-panel">
            <p class="w3-large">Outstanding task to be completed - {props.count}</p>
        </div>
        </div>
        </div>
        </div>

    );
}

export default TaskCount;