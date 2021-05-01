import React, { useEffect }from 'react'
import axios from 'axios';
import { Baseurl } from '../components/Baseurl.js';
import Swal from 'sweetalert2';
import Navbar from '../components/Dashboardnav';
import { Link as Link2, useHistory } from 'react-router-dom';
import { Link } from 'react-scroll';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mylearning from './Mylearning.js';
import Savedcourses from './Savedcourses.js';
import Postedcourses from './Postedcourses';
import Myprofile from './Myprofile';
import Payment from './Payment';


const Toast = Swal.mixin({
 toast: true,
 position: 'top-end',
 showConfirmButton: false,
 timer: 500,
 timerProgressBar: true,
 didOpen: (toast) => {
 toast.addEventListener('mouseenter', Swal.stopTimer)
 toast.addEventListener('mouseleave', Swal.resumeTimer)
 }
})

const Dashboard = () => {
 let history = useHistory();
 useEffect(() => {
  let token = localStorage.getItem('Token');
  axios.post(`${Baseurl}profile.php`, JSON.stringify(token)).then(res => {
   if (res.status == 200) {
    let profileResponse = res.data.UserInfo;

   }

  }).catch(function (error){
   if (error.response) {
    Toast.fire({
     icon: 'info',
     title: 'Session expired'
     })
   setTimeout(() => history.push("/login"), 500);
  }
  })
  
  });
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
      <Route exact path="/dashboard" component={Mylearning}/>
      <Route path="/dashboard/savedcourses" component={Savedcourses} />
      <Route path="/dashboard/postedcourses" component={Postedcourses} />
      <Route path="/dashboard/myprofile" component={Myprofile} />
      <Route path="/dashboard/payment" component={Payment}/>
      </Switch>
      </Router>
     
      
      <footer id="footer">
      <div className="footer-top">
      <div className="container">
      <div className="row">
      <div className="col-lg-3 col-md-6 footer-contact">
      <h3>Fromhome</h3>
       <p>
          Lagos,
          Nigeria <br/>
      <strong>Phone:</strong> +1 5589 55488 55<br/>
      <strong>Email:</strong> info@fromhome.com<br/>
            </p>
        </div>

            <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Link2 to="/"  style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a >Home</a></Link2></li>
              <li><Link2 to="/" style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a>About us</a></Link2></li>
              <li><Link to="courses" style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a to="courses">Courses</a></Link></li>
            
            </ul>
              </div>
              

              <div class="col-lg-3 col-md-6 footer-links">
        <h4>Our Courses</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a>HTML</a></li>
              <li><i class="bx bx-chevron-right"></i> <a>Bootstrap</a></li>
              <li><i class="bx bx-chevron-right"></i> <a>Wordpress</a></li>
              <li><i class="bx bx-chevron-right"></i> <a>Git</a></li>
              <li><i class="bx bx-chevron-right"></i> <a>React</a></li>
            </ul>
              </div>
              
              <div class="container d-md-flex py-4">
              <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span><a>Fromhome</a></span></strong>. All Rights Reserved
        </div>
      
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a  class="twitter"><i class="bx bxl-twitter"></i></a>
        <a  class="facebook"><i class="bx bxl-facebook"></i></a>
        <a  class="instagram"><i class="bx bxl-instagram"></i></a>
        <a  class="google-plus"><i class="bx bxl-skype"></i></a>
        <a  class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
      </div>

      <Link to="about"  className="back-to-top"><a id="back-to-top"  role="button"><i className="back-top fas fa-chevron-circle-up float-right" style={{color:'#5fcf80', fontSize:'35px'}}></i></a></Link>
      </div>
      </div>
      </div>
      </footer>
      </>
 )
}

export default Dashboard
