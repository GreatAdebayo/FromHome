import React from 'react';
import { Link } from 'react-router-dom';
import { Link as Link2 } from 'react-scroll';

const Courses = () => {
 return (
  <div>
   {/* Courses us section starts */}
   <section id="courses" class="features mt-4">
      <div class="container" data-aos="fade-up">

      <div class="section-title mt-3">
      <h2>Courses</h2>
      <p>Our Courses</p>
     <Link to="/" style={{textDecoration: 'none'}}> <h5><i class="fas fa-long-arrow-alt-left"></i> Home</h5></Link>
          </div>     
     <div class="row" data-aos="zoom-in" data-aos-delay="100">
     <div class="input-group mb-3">
      <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span>
      </div>
      <input type="text" class="form-control py-3" placeholder="Search for a course" aria-label="Username" aria-describedby="basic-addon1"  name="email"/>
      </div>
           
      
      <div class="col-lg-3 col-md-4">
      <div class="icon-box">
      <i class="fab fa-html5" style={{color: '#ffbb2c'}}></i>
      <Link to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>HTML</a></h3></Link>
      </div>
      </div>
           
      <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
      <div class="icon-box">
      <i class="ri-bar-chart-box-line" style={{color: '#5578ff'}}></i>
      <Link to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>Graphics Design</a></h3></Link>
      </div>
      </div>
           
    <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
    <div class="icon-box">
    <i class="fab fa-android" style={{color:" #e80368"}}></i>
    <Link to="/allcourses"  style={{ textDecoration: 'none' }}><h3><a>Andriod Development</a></h3></Link>
    </div>
    </div>
    
           
     <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
     <div class="icon-box">
     <i class="fab fa-react" style={{color:" #e361ff"}}></i>
     <Link to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>React</a></h3></Link>
     </div>
      </div>
           
      <div class="col-lg-3 col-md-4 mt-4">
      <div class="icon-box">
      <i class="fab fa-angular" style={{color: "#47aeff"}}></i>
      <Link to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>Angular</a></h3></Link>
      </div>
      </div>
           
      <div class="col-lg-3 col-md-4 mt-4">
      <div class="icon-box">
      <i class="fab fa-git"  style={{color: "#ffa76e"}}></i>
      <Link to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>GIT</a></h3></Link>
      </div>
      </div>
           
      <div class="col-lg-3 col-md-4 mt-4">
      <div class="icon-box">
      <i class="fab fa-bootstrap"  style={{color: "#11dbcf"}}></i>
      <Link to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>Bootstrap</a></h3></Link>
      </div>
      </div>
           

      <div class="col-lg-3 col-md-4 mt-4">
      <div class="icon-box">
      <i class="fab fa-wordpress"  style={{color: "#4233ff"}}></i>
      <Link to="/allcourses"  style={{ textDecoration: 'none' }}><h3><a>Wordpress</a></h3></Link>
      </div>
      </div>
           
      <div class="col-lg-3 col-md-4 mt-4">
      <div class="icon-box">
      <i class="fab fa-vuejs" style={{color: "#b2904f"}}></i>
      <Link to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>Vue</a></h3></Link>
      </div>
      </div>
           

      <div class="col-lg-3 col-md-4 mt-4">
      <div class="icon-box">
      <i class="fab fa-laravel"  style={{color: "#b20969"}}></i>
      <Link to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>Laravel</a></h3></Link>
      </div>
      </div>
           

      <div class="col-lg-3 col-md-4 mt-4">
      <div class="icon-box">
      <i class="fab fa-php" style={{color: "#ff5828"}}></i>
      <Link to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>PHP</a></h3></Link>
      </div>
      </div>
      
      <div class="col-lg-3 col-md-4 mt-4">
      <div class="icon-box">
      <i class="fab fa-java"  style={{color: "#29cc61"}}></i>
      <Link to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>Java</a></h3></Link>
      </div>
      </div>
      </div>

      </div>
      
   </section>
   
   {/* Courses ends */}

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

      <Link2 to="courses"  className="back-to-top"><a id="back-to-top"  role="button"><i className="back-top fas fa-chevron-circle-up float-right" style={{color:'#5fcf80', fontSize:'35px'}}></i></a></Link2>
      </div>
      </div>
      </div>
      </footer>
   
  </div>
 )
}

export default Courses;
