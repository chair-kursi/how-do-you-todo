import React , {useState} from 'react'

// feature to add: add expiry/deadline date to the todo

export const AddTodo = ({addTodo, Priorities}) => {

    const [title, setTitle]         = useState("")
    const [desc, setDesc]           = useState("")
    const [priority, setPriority]   = useState("");

    const submit = (e)=>{

        e.preventDefault();

        if(!title || !desc || !priority)
        {
            alert("Title or Desc or Priority can not be blank");
            return;
        }

        addTodo     (title, desc, priority);
        setDesc     ("");
        setTitle    ("");
        setPriority ("");
    }

    const ShowPriorities = () => {

        return (
            
            Priorities.map((priority) => {
                return <option key={priority} value={priority}> {priority} </option>
            })
        );
    }


    return (
        <>
        <div className="container">
            <h3 className="text-center">Add A Todo</h3>
            <form onSubmit={submit} className="mb-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text"  value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Desc</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="priority" className="form-label">Priority</label>
                    <select value={priority} onChange={(e) => setPriority(e.target.value)} className="form-control" id="priority">
                        <option value="">Select Priority</option>
                        {ShowPriorities()}
                    </select>
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
        </>
    )
}