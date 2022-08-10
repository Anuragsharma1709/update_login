import React from "react"
const Signup = ()=>{
    return (
        <>
        <form>
            <div>
                <lable htmlFor="username">Full Name</lable>
                <input type ="text" name="username" id="username"/>
            </div>
            <div>
                <lable htmlFor="email">Email</lable>
                <input type ="text" name="email" id="email"/>
            </div>
            <div>
                <lable htmlFor="phone">Phone no</lable>
                <input type ="number" name="phone" id="phone"/>
            </div>
            <div>
                <lable htmlFor="password">Password</lable>
                <input type ="password" name="password" id="password"/>
            </div>
            <button>Register</button>
        </form>
        </>
    )
}
export default Signup