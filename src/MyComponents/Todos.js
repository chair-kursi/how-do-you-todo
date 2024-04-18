import React, { useEffect, useState } from 'react'
import { TodoItem } from "./TodoItem";

//some optimizations:
// 1. update the todos in local storage after sorting them 
// 2. store variable to tell when todos change in local storage, 
//      only then do the sorting and make it true, adding a todo will make it false 

export const Todos = ({todos, setTodos, priorityOrder, onDelete}) => {
    
    const [todosSorted, setTodosSorted] = useState(false);
    let styli = {
        minHeight: "86.8vh"
    }
    
    const sortTodos = () => {

        const sortedTodos = todos.sort((a, b) => {
    
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        });

        sortedTodos.forEach((todo, index) => {
            todo.sno = index;
        });

        return sortedTodos;
    }

    useEffect(() => {
        
        sortTodos();
        setTodos(sortTodos());
        setTodosSorted(true);

    }, [todos])

    return (todosSorted && //can add a loading spinner here
        <div className="container" style={styli}>
            <h3 className="text-center">Todos List</h3>
            {
                todos.length === 0 ? "No todos to display" : //create and call notodo component
                    
                    todos.map((todo) => {
                        return (<TodoItem todo={todo} key={todo.sno} onDelete={onDelete} />)
                    })
            }          
            
        </div>
    )
}