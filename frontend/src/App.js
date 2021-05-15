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
import Preview from './components/Preview';
import Takecourse from './components/Takecourse';
import CoursePreview  from './components/Coursepreview';


AOS.init();

function App() {
  return (
    <>
      <Router>
     
          <Route exact path="/" component={Home}/>
          <Route  path="/courses" component={Courses}/>
          <Route  path="/allcourses/:course" component={AllCourses}/>
          <Route  path="/coursedetails/:course" component={Coursedetails}/>
          <Route path="/login" component={Login}/>
          <Route  path="/signup" component={Signup}/>
          <Route  path="/verify" component={Verify}/>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/preview" component={Preview} />
        <Route path="/takecourse/:course" component={Takecourse} />
        <Route path="/coursepreview/:course"  component={CoursePreview} />
       
        </Router>
      
        {/* render={() => <Mylearning/>} */}
    </>
    
  );
  
}

export default App;
