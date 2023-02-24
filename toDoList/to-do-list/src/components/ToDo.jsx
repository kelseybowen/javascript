import React, { useState } from 'react'

const doneStyle = {
    textDecoration: "line-through"
};

const ToDo = () => {

    const [toDoItem, setToDoItem] = useState({
        task: "",
        completed: false
    });

    const [toDoList, setToDoList] = useState([]);

    const handleChange = (e) => {
        setToDoItem({ ...toDoItem, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setToDoList([...toDoList, toDoItem]);
        setToDoItem({ task: "", completed: "" });
    }

    const handleDelete = (e, item, i) => {
        // console.log(item.completed);

        setToDoList(item.completed, true);
    }

    return (
        <div className="App container px-4">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className='text-center py-4'>To Do List</h1>
                <div className="my-3 container">
                    <label htmlFor="task">Add</label>
                    <input 
                        type="text" 
                        className='form-control' 
                        name="task" 
                        value={toDoItem.task} 
                        onChange={handleChange} />
                    <input 
                        type="hidden" 
                        name="completed" 
                        value={false} />
                    <button className='btn btn-primary my-3'>Add</button>
                </div>
            </form>
            <div className='my-3 container'>
                <ul className="list-group">
                    {
                        toDoList.map((item, i) =>
                            <li 
                                style={item.completed ? doneStyle : null} 
                                className='list-group-item' 
                                name={item} 
                                key={i}>{item.task}
                                value={toDoList.item.task}
                                <button 
                                    className='btn btn-outline-danger float-end' 
                                    key={i} 
                                    value={toDoList.item.completed}
                                    onClick={(e) => handleDelete(e, item, i)}>Delete</button>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}


export default ToDo