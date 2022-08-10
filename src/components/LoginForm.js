    import React,{useState} from "react";
    import {link} from "react-router-dom";
    const LoginForm = () => {
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")

        const[allData, setAllData] =useState([])
        const submitForm =(event) =>{
            event.preventDefault();
            if(email && password){
                const newData ={ email: email, password: password};
                setAllData([...allData,newData]);
                console.log(allData)
                setEmail("");
                setPassword("");
            }else{
                alert("enter email and password")
            }
            
        }
        return (
            <>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                    type = "text" 
                    name ="email" 
                    id = "email"
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                    type = "password" 
                    name ="Password" 
                    id = "password" 
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
                <button ><link to="/singnup">
                sign up
                </link></button>
            </form>
            </>
        )
    }
    export default LoginForm