import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Homepage.js';
import Courses from './components/Courses.js';
import AllCourses from './components/Allcourses.js';
import Coursedetails from './components/Coursedetails.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Verify from './components/Verify.js';
import Dashboard from './components/Dashboard.js';
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';



AOS.init();

function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route exact path="/">
          <Home/>
          </Route>
        
          <Route exact path="/courses">
          <Courses/>
          </Route>

          <Route exact path="/allcourses">
          <AllCourses/>
          </Route>

          <Route exact path="/coursedetails">
          <Coursedetails/>
          </Route>

          <Route exact path="/login">
          <Login/>
          </Route>

          <Route exact path="/signup">
          <Signup/>
          </Route>

          <Route exact path="/verify">
          <Verify/>
          </Route>

          <Route exact path="/dashboard">
          <Dashboard/>
          </Route>


        </Switch>
      
      </Router>
      
    </>
  );
}

export default App;
