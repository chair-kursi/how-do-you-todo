import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    
    const setPriorityColor = (priority) => {

        if(priority === "High")
            return "text-danger";
        else if(priority === "Medium")
            return "text-warning";
        else if(priority === "Low")
            return "text-success";
    }

    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <p><small className={setPriorityColor(todo.priority)}> {todo.priority} </small></p>

            <button className="btn btn-sm btn-danger" onClick={()=>onDelete(todo)}> Delete </button>
            
            <hr/>
        </div>
    )
}