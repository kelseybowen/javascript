import React, { useState } from 'react'

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirm, setConfirm] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password, confirm};
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirm("");
    };

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={ createUser }>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <div>
                    <label htmlFor="confirm">Confirm Password: </label>
                    <input type="password" onChange={(e) => setConfirm(e.target.value)} value={confirm}/>
                </div>
                <input type="submit" value="Create User" />
            </form>

            <h2>Form Data</h2>
            <div>
                <p>First Name: { firstName }</p>
                <p>Last Name: { lastName}</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { confirm }</p>
            </div>
        </div>
    )
}

export default UserForm