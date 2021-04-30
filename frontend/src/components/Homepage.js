import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-scroll';
import { Link as Link2 } from 'react-router-dom';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
   setIsOpen(!isOpen);
  };
 
  return (
    <>
      <Navbar  toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        {/* Hero section starts */}
   <section id="hero" className="d-flex justify-content-center align-items-center">
   <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
    <h1>Learning Today, <br /> Leading Tomorrow</h1>
   <h2>We make learning convenient and teaching easy</h2>
   <Link2 to="/courses"><a  className="btn-get-started">Take a Course <i class="fal fa-arrow-right"></i></a></Link2>
   </div>
  </section>
      {/* Hero section Ends */}
      
      {/* About section starts */}
      <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div class="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
          <img src="assets/img/bg2.jpg" className="img-fluid rounded" alt=""/>
        </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>Fromhome Online Learning.</h3>
              <p class="fst-italic">
              With our Learning Management Web application, we have made:
              </p>
              <ul>
                <li><i className="bi bi-check-circle"></i> Learning easy by studying right from the comfort of your home or wherever.</li>
                <li><i className="bi bi-check-circle"></i> Teaching more fun as tutors can upload there materials and millions of students can access them.</li>
                <li><i className="bi bi-check-circle"></i> Learning in general fun.</li>
              </ul>
          </div>
        </div>

      </div>
     </section>
      {/* About section Ends */}
      
      {/* Count section starts */}
     <section id="about" class="counts section-bg">
      <div class="container">

        <div class="row counters">

          <div class="col-lg-4 col-4 text-center">
            <span data-purecounter-start="0" data-purecounter-end="1232" data-purecounter-duration="1" class="purecounter">10</span>
            <p>Students</p>
          </div>

          <div class="col-lg-4 col-4 text-center">
            <span data-purecounter-start="0" data-purecounter-end="64" data-purecounter-duration="1" class="purecounter">20</span>
            <p>Courses</p>
            </div>
            
            <div class="col-lg-4 col-4 text-center">
            <span data-purecounter-start="0" data-purecounter-end="64" data-purecounter-duration="1" class="purecounter">50</span>
            <p>Tutors</p>
          </div>


        </div>

      </div>
      </section>
      {/* Count section ends */}

      {/* Why us section starts */}
      
    <section id="why-us" class="why-us">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-4 d-flex align-items-stretch">
            <div class="content">
              <h3>Learning Made Easy</h3>
          <p>
         With our Learning Management Application, we've made learning fun and interesting as well as teaching fun.
          </p>
          <div class="text-center">
          <a href="about.html" class="more-btn" style={{ textDecoration: 'none', fontWeight:'bold' }}>Learn More <i class="bx bx-chevron-right"></i></a>
          </div>
          </div>
          </div>
          <div class="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-boxes d-flex flex-column justify-content-center">
              <div class="row">
                <div class="col-xl-6 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-receipt"></i>
                    <h4>Learning made easy</h4>
                    <p>Your can learn with ease from the comfort of your home.</p>
                  </div>
                </div>
                <div class="col-xl-6 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-cube-alt"></i>
                    <h4>Teaching made fun</h4>
                    <p>Reach out to more numbers of students by posting your courses on our platform.</p>
                  </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

      </div>
      </section>
      {/* Why us section ends */}
      
{/* Courses us section starts */}
<section id="courses" class="features mt-4">
      <div class="container" data-aos="fade-up">

      <div class="section-title mt-3">
      <h2>Courses</h2>
            <p>Popular Courses</p>
          </div>
     <div class="row" data-aos="zoom-in" data-aos-delay="100">
      <div class="col-lg-3 col-md-4">
      <div class="icon-box">
      <i class="fab fa-html5" style={{color: '#ffbb2c'}}></i>
      <Link2 to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>HTML</a></h3></Link2>
      </div>
      </div>
           
      <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
      <div class="icon-box">
      <i class="ri-bar-chart-box-line" style={{color: '#5578ff'}}></i>
      <Link2 to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>Graphics Design</a></h3></Link2>
      </div>
      </div>
           
    <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
    <div class="icon-box">
    <i class="fab fa-android" style={{color:" #e80368"}}></i>
    <Link2 to="/allcourses"  style={{ textDecoration: 'none' }}><h3><a>Andriod Development</a></h3></Link2>
    </div>
    </div>
    
           
     <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
     <div class="icon-box">
     <i class="fab fa-react" style={{color:" #e361ff"}}></i>
     <Link2 to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>React</a></h3></Link2>
     </div>
      </div>
           
      <div class="col-lg-3 col-md-4 mt-4">
      <div class="icon-box">
      <i class="fab fa-angular" style={{color: "#47aeff"}}></i>
      <Link2 to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>Angular</a></h3></Link2>
      </div>
      </div>
           
      <div class="col-lg-3 col-md-4 mt-4">
      <div class="icon-box">
      <i class="fab fa-git"  style={{color: "#ffa76e"}}></i>
      <Link2 to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>GIT</a></h3></Link2>
      </div>
      </div>
           
      <div class="col-lg-3 col-md-4 mt-4">
      <div class="icon-box">
      <i class="fab fa-bootstrap"  style={{color: "#11dbcf"}}></i>
      <Link2 to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>Bootstrap</a></h3></Link2>
      </div>
      </div>
           

      <div class="col-lg-3 col-md-4 mt-4">
      <div class="icon-box">
      <i class="fab fa-wordpress"  style={{color: "#4233ff"}}></i>
      <Link2 to="/allcourses"  style={{ textDecoration: 'none' }}><h3><a>Wordpress</a></h3></Link2>
      </div>
      </div>
           
      <div class="col-lg-3 col-md-4 mt-4">
      <div class="icon-box">
      <i class="fab fa-vuejs" style={{color: "#b2904f"}}></i>
      <Link2 to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>Vue</a></h3></Link2>
      </div>
      </div>
           

      <div class="col-lg-3 col-md-4 mt-4">
      <div class="icon-box">
      <i class="fab fa-laravel"  style={{color: "#b20969"}}></i>
      <Link2 to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>Laravel</a></h3></Link2>
      </div>
      </div>
           

      <div class="col-lg-3 col-md-4 mt-4">
      <div class="icon-box">
      <i class="fab fa-php" style={{color: "#ff5828"}}></i>
      <Link2 to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>PHP</a></h3></Link2>
      </div>
      </div>
      
      <div class="col-lg-3 col-md-4 mt-4">
      <div class="icon-box">
      <i class="fab fa-java"  style={{color: "#29cc61"}}></i>
      <Link2 to="/allcourses" style={{ textDecoration: 'none' }}><h3><a>Java</a></h3></Link2>
      </div>
      </div>
      </div>

      </div>
      
   </section>

  
      <section id="cta" class="cta" style={{
        backgroundColor: '#5FCF80',
        backgroundSize: 'cover',
        padding: '120px 0'
  
      }}>
      <div class="container" data-aos="zoom-in">

        <div class="text-center">
          <h3>Are you a Tutor?</h3>
          <p> Create a courses now and let students start taking it. </p>
          <Link2 style={{ textDecoration: 'none' }}><a class="cta-btn">Create a Course <i class="fal fa-arrow-right"></i></a></Link2>
        </div>

      </div>
    </section>
      
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
              <li><Link to="hero"  style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a >Home</a></Link></li>
              <li><Link to="about" style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a>About us</a></Link></li>
              <li><Link to="courses" style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a to="courses">Courses</a></Link></li>
              <li><Link2 to="/signup"><i class="bx bx-chevron-right"></i> <a href="#">Signup</a></Link2></li>
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

      <Link to="hero"  className="back-to-top"><a id="back-to-top"  role="button"><i className="back-top fas fa-chevron-circle-up float-right" style={{color:'#5fcf80', fontSize:'35px'}}></i></a></Link>
      </div>
      </div>
      </div>
      </footer>
      
   
      
    </>
  )
}

export default Home


