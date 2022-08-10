import './App.css';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import{
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <Routes>
   <Route path="signup" element= {Signup}/>
   <Route path="/" element= {LoginForm}/>

    </Routes>
    </Router>
      
    </>

  );
}

export default App;
