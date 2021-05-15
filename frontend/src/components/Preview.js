import React, {useState, useEffect} from 'react'
import PreviewNav from '../components/Previewnavbar';
import Files from './Files';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Link as Link2 } from 'react-scroll';
import Previewdetails from './Previewdetails';
import axios from 'axios';
import { Baseurl } from '../components/Baseurl.js';



const Preview = () => {
useEffect(() => {
 let courseCode = JSON.parse(localStorage.code)
 axios.post(`${Baseurl}coursedetails.php`, JSON.stringify(courseCode)
 ).then(res => {
   if (res.status == 200) {
     if (res.data.CourseDetails) {
    let CourseResponse = res.data.CourseDetails;
    setCourseDetails(CourseResponse);
     localStorage.setItem('courseId', JSON.stringify(CourseResponse.course_id)) 
     } else {
      setCourseDetails([]);
  }
   
  }

 })
}, [])

const [courseDetails, setCourseDetails] = useState({})
 return (
  <div>
   <PreviewNav />
   <section id="cta" class="cta mt-5" style={{
        backgroundColor: '#5FCF80',
        backgroundSize: 'cover',
        padding: '80px 0',
        zIndex: 997
  
      }}>
      <div class="container mt-3" data-aos="zoom-in">
        <div class="text-center">
          <h3 className="text-uppercase">{courseDetails.title}</h3>
           <p> Manage your course here to keep track of all activities. </p>
           <a class="cta-btn" style={{cursor:'pointer'}}>{courseDetails.status}</a>
        </div>

      </div>
   </section>
   <Switch>
   <Route exact path="/preview">
     <Previewdetails course={courseDetails}/>
    </Route>

   <Route path="/preview/files">
    <Files/>
    </Route>
   
   </Switch>
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
              <li><Link to="/"  style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a >Home</a></Link></li>
              <li><Link to="/" style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a>About us</a></Link></li>
              <li><Link2 to="courses" style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a to="courses">Courses</a></Link2></li>
              <li><Link to="/signup"><i class="bx bx-chevron-right"></i> <a href="#">Signup</a></Link></li>
           
            </ul>
              </div>
              

              <div class="col-lg-3 col-md-6 footer-links">
        <h4>Our Courses</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">HTML</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Bootstrap</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Wordpress</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Git</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">React</a></li>
            </ul>
              </div>
              
              <div class="container d-md-flex py-4">
              <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span><a>Fromhome</a></span></strong>. All Rights Reserved
        </div>
      
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
      </div>

      <Link2 to="main"  className="back-to-top"><a id="back-to-top"  role="button"><i className="back-top fas fa-chevron-circle-up float-right" style={{color:'#5fcf80', fontSize:'35px'}}></i></a></Link2>
      </div>
      </div>
      </div>
      </footer>
  </div>
 )
}

export default Preview
