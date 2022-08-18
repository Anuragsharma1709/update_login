import React, { useState } from 'react'
import { addUser, getUsers } from './api';

const Registration = () => {
    const [dataInput, setDataInput] = useState({ name: "", email: "", phone: "", password: "" })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDataInput(prev => ({ ...prev, [name]: value }))
    }

    const saveUser = async (e) => {
        e.preventDefault();

        // Get users from api
        const users = await getUsers();
        console.log(users)
        // debugger
        // Check if the username/email exists in collections of users
        if(dataInput.email === !users.email ){
            // If not exists, add the user in the collection of users.
            addUser(dataInput)
        }
        // Else, show a message: user already exists
        else{
            alert(' user allready exists')
        }

    }


    return (
        <>
            <form onSubmit={saveUser}>
                <div>
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={dataInput.username}
                        autoComplete='off'
                        onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={dataInput.email}
                        autoComplete='off'
                        onChange={handleInputChange} />

                </div>
                <div>
                    <label htmlFor="phone">Phone no</label>
                    <input
                        type="number"
                        name="phone"
                        id="phone"
                        value={dataInput.phone}
                        autoComplete='off'
                        onChange={handleInputChange} />

                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={dataInput.password}
                        autoComplete='off'
                        onChange={handleInputChange} />
                </div>
                <button type='submit'>Register</button>
            </form>
        </>
    )
}

export default Registration
