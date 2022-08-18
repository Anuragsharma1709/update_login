// import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
 import Login from './components/Login';
import Registration from './components/Registration';
function App() {
  // const addData = (user) => {
  //   user.id = data.length + 1
  //   setData([...data, user])
  // }
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetchData()
  // })
  // const fetchData = () => {
  //   fetch("")
  //     .then(response => {
  //       return response.json
  //     })
  //     .then(info => {
  //       setData(info)
  //     })
  // }
  
  // ToDo: Add Routing for Login and Registration

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path = "/" element = {<Login/>}/>
      <Route path = "Registration" element = {<Registration/>}/>

     </Routes>
     </BrowserRouter>
     

    </>

  );
}

export default App;
