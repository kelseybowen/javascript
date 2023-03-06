import React from 'react'

const Form = (props) => {

    const {search, setSearch} = props;

    const handleSelect = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container text-center py-5">
            <form onSubmit={handleSubmit}>
                <div className="row text-center">
                    <div className="col-md-auto">
                        <label htmlFor="search" className='form-label'>Search for:</label>
                    </div>
                    <div className="col-md-auto">
                        <select name="category" className='form-select form-control' onChange={handleSelect}>
                            <option name="none"> </option>
                            <option name="people" value={"something"}>People</option>
                            <option name="planets" value={"something else"}>Planets</option>
                        </select>
                    </div>
                    <div className="col-md-auto">
                        <label htmlFor="_id" className='form-label'>ID:</label>
                    </div>
                    <div className="col-md-auto">
                        <input type="text" name="_id" className='form-control' onChange={(e) => setSearch.id(e.target.value)} />
                    </div>
                    <div className="col-md-auto">
                        <button className="btn btn-primary" type="submit">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form