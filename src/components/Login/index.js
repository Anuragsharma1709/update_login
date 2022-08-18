import React, { useState } from "react";
import { getUsers } from "./api";
import {Link} from "react-router-dom"

const Login = () => {
    const [dataInput, setDataInput] = useState({
        email: '',
        password: ''
    })

    const submitForm = async(event) => {
        event.preventDefault();
        // Get users from api
        const users = await getUsers();
        console.log(users)
        // ToDo: Add the logic to check the user credentials
        // Check if the username/email exists in collections of users
        // If exists, check the password is correct.
        if (dataInput.email === users.email && dataInput.password === users.password) {
            alert('login sucessful')

            // If correct, redirect to home page
            
        } 
        // Else, show a message: invalid credentials.
        else
            alert("enter correct email and password")

        // -----------------------------------------
        // "abc" - string: representation of text
        // 123 - integer: representation of integer
        // [] - array: collection of items: [] represents an empty array
        // {} - object: container for property and values { email: "anurag@test.com", password: "password@123" }
        // [{...}, {...}] - collection of objects

        // ToDo: Save & Update the local storage when you have the email and password
        // localStorage.setItem('data', JSON.stringify(data));
    }

    return (
        <>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={dataInput.email}
                        onChange={(event) => setDataInput(prev => ({ ...prev, email: event.target.value }))}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={dataInput.password}
                        onChange={(event) => setDataInput(prev => ({ ...prev, password: event.target.value }))}
                    />
                </div>
                <button type="submit">Login</button>
                <button>
                   <Link to ="/Registration">sign up</Link> 
                </button>
            </form>
        </>
    )
}
export default Login