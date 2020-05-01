import React from 'react';
import Completed from "./Completed";
import moment from "moment";
import { AiFillDelete } from 'react-icons/ai';
import { FaHourglassStart } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

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
        
            <div className="row shadow" id="todoItems">
                <div className="col-6 col-md-4 tasktext" >
                    <div style={props.status === 1 ? comstyle : null}><FaAngleRight/>  {props.text}
                    </div>
                </div>
                <div className="col-6 col-md-2 tasktext">
                    {props.priority === 1 ? 
                    <div style={{ color: 'red' }}>"Urgent"</div> 
                    : "Can wait"}
                </div>
                <div className="col col-md-3 tasktext">
                    <div id="duedate">
                        {moment(props.dueDate).format("MMM Do YY")}
                    </div>
                </div>
                <div className="col col-md-3 tasktext">
                    <span className="statusbtn">
                        <div>{props.status === 1 ? <Completed /> : <button className="btn btn-primary" onClick={completeHandleClick}><FaHourglassStart /></button>}
                            <button type="button" className="btn btn-primary" onClick={deleteHandleClick}><AiFillDelete /></button></div>
                    </span>
                </div>
            </div>
        
    );
}
export default Task;
