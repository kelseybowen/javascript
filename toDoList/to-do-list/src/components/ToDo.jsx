import React, { useState } from 'react'

// const doneStyle = {
//     textDecoration: "line-through"
// };

const ToDo = () => {

    const [toDoItem, setToDoItem] = useState("");

    const [toDoList, setToDoList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (toDoItem.length === 0) {
            return;
        }
        const newToDo = {
            item: toDoItem,
            complete: false
        }

        setToDoList([...toDoList, newToDo]);
        setToDoItem("");
    }

    const handleDone = (idx) => {
        const updated = toDoList.map((item, i) => {
            if (idx === i) {
                item.complete = !item.complete;
            }
            return item;
        });
        setToDoList(updated);
    }

    const handleDelete = (deletedI) => {
        const filtered = toDoList.filter((item, i) => {
            return i !== deletedI;
        })
        setToDoList(filtered);
    }

    return (
        <div className="App container px-4">
            <form className="form" onSubmit={(e) => { handleSubmit(e) }}>
                <h1 className='text-center py-4'>To Do List</h1>
                <div className="my-3 container">
                    <label htmlFor="task">Add</label>
                    <input
                        type="text"
                        className='form-control'
                        name="task"
                        value={toDoItem}
                        onChange={(e) => { setToDoItem(e.target.value) }} />
                    <button className='btn btn-primary my-3'>Add</button>
                </div>
            </form>
            <div className='my-3 container'>
                {
                    toDoList.map((item, i) => {
                        const classes = ["bold"];
                        if (item.complete) {
                            classes.push("line-through");
                        }
                        return (

                            <div key={i} style={{ "display": "flex", "justifyContent": "space-evenly", "alignItems": "baseline" }}>
                                <input type="checkbox" checked={item.complete} onChange={(e) => { handleDone(i) }} />
                                <p className={classes.join(" ")}>{item.item}</p>
                                <button className="btn btn-outline-danger" onClick={(e) => { handleDelete(i) }}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}


export default ToDo