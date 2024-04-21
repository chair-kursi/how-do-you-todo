import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom/cjs/react-router-dom.min';

// feature to add: add expiry/deadline date to the todo

export const AddTodo = ({todos, editTodo, addTodo, Priorities}) => {

    const [title,
        setTitle] = useState();
    const [desc,
        setDesc] = useState();
    const [priority,
        setPriority] = useState();
    const {sno} = useParams();

    const submit = (e) => {

        e.preventDefault();

        if (!title || !desc || !priority) {
            alert("Title or Desc or Priority can not be blank");
            return;
        }

        if (sno !== undefined) {

            const newTodo = {
                sno,
                title,
                desc,
                priority
            };

            editTodo(sno, newTodo);

            setTitle();;
            setDesc("");
            setPriority("");

            return;
        }

        addTodo(title, desc, priority);
        setDesc("");
        setTitle("");
        setPriority("");
    }

    const ShowPriorities = () => {

        return (Priorities.map((priority) => {
            return <option key={priority} value={priority}>
                {priority}
            </option>
        }));
    }

    useEffect(() => {

        if (sno !== undefined) {

            setTitle(todos[sno].title);
            setDesc(todos[sno].desc);
            setPriority(todos[sno].priority);
        } else {

            setTitle("");
            setDesc("");
            setPriority("");
        }

    }, [sno]); //as the same component may be used to edit a todo, it is necessary to update the state when "sno" changes

    return (
        <div className="container" style={{
            minHeight: "80vh"
        }}>
            <h3 className="text-center">Add A Todo</h3>
            <form onSubmit={submit} className="mb-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        id="title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Desc</label>
                    <input
                        type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="form-control"
                        id="desc"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="priority" className="form-label">Priority</label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="form-control"
                        id="priority">
                        <option value="">Select Priority</option>
                        {ShowPriorities()}
                    </select>
                </div>
                <button type="submit" className="btn btn-success btn-sm">{sno?"Update":"Add"}</button>
            </form>
        </div>
    )
}