import React from 'react'
import {Link} from 'react-router-dom';

export const TodoItem = ({todo, onDelete}) => {

    const setPriorityColor = (priority) => {

        if (priority === "High") 
            return "text-danger";
        else if (priority === "Medium") 
            return "text-warning";
        else if (priority === "Low") 
            return "text-success";
        }
    
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <p>
                <small className={setPriorityColor(todo.priority)}>
                    {todo.priority}
                </small>
            </p>
            <Link to={"/add/" + todo.sno}>
                <button className="btn btn-sm btn-outline-success">
                    Edit
                </button>
            </Link>
            <button className="btn btn-sm btn-danger ms-2" onClick={() => onDelete(todo)}>
                Delete
            </button>

            <hr/>
        </div>
    )
}