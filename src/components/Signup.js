import React, { useState } from "react"
const Signup = () => {
    const [data, setData] = useState(
        { username: '', email: '', phone: '', password: '' }
    )
    let name, value;
    const handleInputChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setData({ ...data, [name]: value })
        console.log(data)
        localStorage.setItem('signup', JSON.stringify(data))

    }
    // ToDo: Add the logic to add the users in an array
    // Save the array in the local storage OR json file.

    return (
        <>
            <form>
                <div>
                    <lable htmlFor="username">Full Name</lable>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={data.username}
                        autoComplete='off'
                        onChange={handleInputChange} />
                </div>
                <div>
                    <lable htmlFor="email">Email</lable>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={data.email}
                        autoComplete='off'
                        onChange={handleInputChange} />

                </div>
                <div>
                    <lable htmlFor="phone">Phone no</lable>
                    <input
                        type="number"
                        name="phone"
                        id="phone"
                        value={data.phone}
                        autoComplete='off'
                        onChange={handleInputChange} />

                </div>
                <div>
                    <lable htmlFor="password">Password</lable>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={data.password}
                        autoComplete='off'
                        onChange={handleInputChange} />
                </div>
                <button type='submit'>Register</button>
            </form>
        </>
    )
}
export default Signup