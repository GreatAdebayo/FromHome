import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Link as Link2 ,  useHistory} from 'react-router-dom';
import { Link } from 'react-scroll';
import axios from 'axios';
import {Baseurl} from '../components/Baseurl.js';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
const Toast2 = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const Signup = () => {
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('Your First Name');
  const [value1, setValue1] = useState('Your Last Name');
  const [value2, setValue2] = useState('Your Email');
  const [value3, setValue3] = useState('Your Password');
  const [isShow, setIsShow] = useState(false)
  const [isShow1, setIsShow1] = useState(false)
  const [isShow2, setIsShow2] = useState(false)
  const [isShow3, setIsShow3] = useState(false)
  const [signup, setSignup] = useState({firstname: '', lastname: '', email: '', password: '' });
  const [isRoll, setIsRoll] = useState(false)


  const toggle = () => {
    setIsOpen(!isOpen);
  };
 
  const handleClick = () => {
    setValue('');
    setIsShow(true)
  }
  const handleClick1 = () => {
    setValue1('');
    setIsShow1(true)
  }
  const handleClick2 = () => {
    setValue2('');
    setIsShow2(true)
  }
  const handleClick3 = () => {
    setValue3('');
    setIsShow3(true)
  }
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setSignup({ ...signup, [name]: value })
  }
  const handleSubmit = (e) => {
    setIsRoll(true)
    e.preventDefault();
    if (signup.firstname && signup.lastname && signup.email && signup.password) {
      let signUpResponse = '';
      axios.post(`${Baseurl}signup.php`, JSON.stringify(signup)).then(res => {
        setIsRoll(false);
        signUpResponse = res.data;
        if (signUpResponse.Verify) {
          Toast2.fire({
            icon: 'info',
            title: 'Account already created, Login'
          })
        setTimeout(() => history.push('/login'), 500);
        }
        else if (signUpResponse.UserExists) {
          Toast2.fire({
            icon: 'error',
            title: 'Email address used'
          })
        } else if(signUpResponse.AccountCreated) {
          Toast2.fire({
            icon: 'success',
            title: 'Verification code will be sent shortly'
          })
    setIsRoll(true);
     //SEND VERIFICATION CODE STARTS//
    axios.post(`${Baseurl}sendcode.php`, JSON.stringify(signup.email)).then(res => {
      let sendCodeResponse = res.data
      if (sendCodeResponse.VerifyCodeSent) {
        Toast.fire({
          icon: 'info',
          title: 'A verification code has been sent to your email'
        })
        localStorage.setItem('Email', signup.email);
        setTimeout(() => history.push("/verify"), 1500);
      }
    })
     //SEND VERIFICATION CODE ENDS//
        }
      })
    } else {
      setIsRoll(false)
      setSignup("")
      Toast2.fire({
        icon: 'info',
        title: 'Please fill all input'
      })
    }
  }
   
         
 return (
  <>
   <Navbar toggle={toggle}/>
   <Sidebar isOpen={isOpen} toggle={toggle} />
   <section  className="about container mt-5" id="about">
     <div className="row">
      <div className="col-lg-5 d-none d-lg-block" data-aos="fade-left" data-aos-delay="100">
      <img src="assets/img/course-details.jpg" className="img-fluid rounded" alt=""/>
      </div>

     <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
     <div class="section-title mt-3">
      <h2>Signup</h2>
      <p>Signup PAGE</p>
      <Link2 to="/login" style={{ textDecoration:'none'}}><small className="ml-2" data-aos="fade" style={{fontFamily: '"Raleway" sans-serif', color:'#5fcf80', cursor:'pointer'}}>Login Instead</small></Link2>
      </div>
      <form onSubmit={handleSubmit}>
      {isShow ? <label className="ml-2" data-aos="fade" style={{fontFamily: '"Raleway" sans-serif', color:'#5fcf80'}}><small>Your First Name</small></label>
    : null }
       <div class="input-group mb-3">
      <div class="input-group-prepend">
      <span class="input-group-text border-top-0 border-left-0 border-right-0 rounded-0 border-bottom-0 " id="basic-addon1"><i class="far fa-user fa-2x"></i></span>
      </div>
      <input type="text" class="form-control border-top-0 border-left-0 border-right-0 rounded-0 py-3" placeholder={value} aria-label="Username" aria-describedby="basic-addon1" onClick={handleClick} name="firstname" onChange={handleChange} value={ signup.firstname}/>
      </div><br />
      
      {isShow1 ? <label className="ml-2" data-aos="fade" style={{fontFamily: '"Raleway" sans-serif', color:'#5fcf80'}}><small>Your Last Name</small></label>
    : null }
       <div class="input-group mb-3">
      <div class="input-group-prepend">
      <span class="input-group-text border-top-0 border-left-0 border-right-0 rounded-0 border-bottom-0 " id="basic-addon1"><i class="fal fa-user fa-2x fa"></i></span>
      </div>
       <input type="text" class="form-control border-top-0 border-left-0 border-right-0 rounded-0 py-3" placeholder={value1} aria-label="Username" aria-describedby="basic-addon1" onClick={handleClick1} name="lastname" onChange={ handleChange} value={ signup.lastname}/>
      </div><br/>
      
      {isShow2 ? <label className="ml-2" data-aos="fade" style={{fontFamily: '"Raleway" sans-serif', color:'#5fcf80'}}><small>Your email</small></label>
    : null }
       <div class="input-group mb-3">
      <div class="input-group-prepend">
      <span class="input-group-text border-top-0 border-left-0 border-right-0 rounded-0 border-bottom-0 " id="basic-addon1"><i class="fas fa-envelope fa-2x"></i></span>
      </div>
       <input type="text" class="form-control border-top-0 border-left-0 border-right-0 rounded-0 py-3" placeholder={value2} aria-label="Username" aria-describedby="basic-addon1" onClick={handleClick2} name="email" onChange={ handleChange} value={ signup.email}/>
      </div><br/>
      
    {isShow3 ? <label className="ml-2" data-aos="fade" style={{fontFamily: '"Raleway" sans-serif', color:'#5fcf80'}}><small>Your password</small></label>
    :null }
    <div class="input-group mb-3">
    <div class="input-group-prepend">
    <span class="input-group-text border-top-0 border-left-0 border-right-0 rounded-0 border-bottom-0 " id="basic-addon1"><i class="fas fa-lock fa-2x"></i></span>
    </div>
    <input type="password" class="form-control border-top-0 border-left-0 border-right-0 rounded-0 py-3" placeholder={value3} aria-label="Username" aria-describedby="basic-addon1" onClick={handleClick3} name="password" onChange={ handleChange} value={ signup.password}/>
     </div>
     <div className="text-center">
     <button className="btn g py-2 px-4 shadow font-weight-bold">{isRoll ? <i class="fad fa-spinner fa-spin"></i> 
      :null} SIGNUP</button>
      </div>
   
      </form>
   
     

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
              <li><Link2 to="/"  style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a >Home</a></Link2></li>
              <li><Link2 to="/" style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a>About us</a></Link2></li>
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
);
};

export default Signup;

