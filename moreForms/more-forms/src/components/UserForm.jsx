import React, { useState } from 'react'

const UserForm = (props) => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm: ""
    })

    const [fNameErr, setFNameErr] = useState("");
    const [lNameErr, setLNameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [confirmErr, setConfirmErr] = useState("");


    const changeHandler = (e) => {
        setUser({...user, [e.target.name] : e.target.value});
    }

    const handleFName = (e) => {
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setFNameErr("First Name must be at least 2 characters!");
        } else {
            setFNameErr("");
        }
        changeHandler(e);
    }

    const handleLName = (e) => {
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setLNameErr("Last Name must be at least 2 characters!");
        } else {
            setLNameErr("");
        }
        changeHandler(e);
    }

    const handleEmail = (e) => {
        if(e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailErr("Email must be at least 5 characters!");
        } 
        else {
            setEmailErr("");
        }
        changeHandler(e);
    }

    const handlePassword = (e) => {
        if(e.target.value.length < 8 && e.target.value.length > 0) {
            setPasswordErr("Password must be at least 8 characters!");
        } 
        else {
            setPasswordErr("");
        }
        changeHandler(e);
    }

    const handleConfirm = (e) => {
        if(e.target.value !== user.password) {
            setConfirmErr("Passwords must match!");
        } 
        else {
            setConfirmErr("");
        }
        changeHandler(e);
    }

    return (
        <div>
            <form className="form col-md-6 mx-auto m-3" onSubmit={() => {}}>
                <h1>Form</h1>
                <div className="form-group mt-3">
                    
                    <label htmlFor="firstName" className="form-label">First Name: </label>
                    <input type="text" name="firstName" className="form-control" onChange={handleFName} value={user.firstName} />
                    {fNameErr ? <p className="text-danger">{fNameErr}</p>  : null}
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="lastName" className="form-label">Last Name: </label>
                    <input type="text" name="lastName" onChange={handleLName} value={user.lastName} className="form-control" />
                    {lNameErr ? <p className="text-danger">{lNameErr}</p> : null}
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="email" className="form-label">Email: </label>
                    <input type="text" name="email" onChange={handleEmail} value={user.email} className="form-control" />
                    {emailErr ? <p className="text-danger">{emailErr}</p> : null}
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="password" className="form-label">Password: </label>
                    <input type="password" name="password" onChange={handlePassword} value={user.password} className="form-control" />
                    {passwordErr ? <p className="text-danger">{passwordErr}</p> : null}
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="confirm" className="form-label">Confirm Password: </label>
                    <input type="password" name="confirm" onChange={handleConfirm} value={user.confirm} className="form-control" />
                    {confirmErr ? <p className="text-danger">{confirmErr}</p> : null}
                </div>
            </form>

            <div className="mx-auto col-md-6">
                <h2>Form Data</h2>
                <p>First Name: {user.firstName}</p>
                <p>Last Name: {user.lastName}</p>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
                <p>Confirm Password: {user.confirm}</p>
            </div>
        </div>
    )
}

export default UserForm