// import { info } from "console";
import React, { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [allData, setAllData] = useState([])
    const submitForm = (event) => {
        event.preventDefault();
        if (email && password) {
            const newData = { email: email, password: password };
            setAllData([...allData, newData]);
            console.log(allData)
            setEmail("");
            setPassword("");

        } else {
            alert("enter email and password")
        }
        localStorage.setItem('data', JSON.stringify(allData));
    }
    //   const fs =require("fs")
    //   const jsonData = JSON.stringify(allData)
    //   fs.writeFile("info.json",jsonData)
   
    

    return (
        <>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
                <button >
                    sign up
                </button>
            </form>
        </>
    )
}
export default LoginForm