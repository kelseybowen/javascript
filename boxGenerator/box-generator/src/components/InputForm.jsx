import React, { useState } from 'react'

const InputForm = (props) => {

    const { boxList, setBoxList } = props;
    const [color, setColor] = useState("");
    const [size, setSize] = useState(50);

    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxList([...boxList, { color: color, size: size + "px", }]);
        setColor("");
        setSize(50);
    }

    return (
        <form className="col-sm-4 mx-auto" onSubmit={handleSubmit}>
            <h1>Make a Box</h1>
            <label className="form-label" htmlFor="color">Color</label>
            <input className="form-control" type="text" name="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <label className="form-label" htmlFor="size">Size</label>
            <input type="text" className="form-control" name="size" value={size} onChange={(e) => setSize(e.target.value)} />
            <button className="btn btn-secondary mt-2">Add</button>
        </form>
    )
}

export default InputForm