import React from 'react';
import "./Task.css";


function TaskCount(props) {
    return (
        <div className="container" id="taskcount">
                <div className="row">
                    <div className="col">
        <div id="taskCount1">
            <h4>Outstanding task to be completed - {props.count}</h4>
        </div>
        </div>
        </div>
        </div>

    );
}

export default TaskCount;