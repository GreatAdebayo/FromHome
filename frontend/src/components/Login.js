import React, {useState, useEffect} from 'react'
import { MDBBtn } from 'mdbreact';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Link as Link2, useHistory } from 'react-router-dom';
import { Link } from 'react-scroll';
import Swal from 'sweetalert2'
import axios from 'axios';
import {Baseurl} from '../components/Baseurl.js';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1000,
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
  timer: 1000,
  didOpen: (toast) => {
  toast.addEventListener('mouseenter', Swal.stopTimer)
  toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


const Login = () => {
useEffect(() => {
localStorage.removeItem('Email');
});
let history = useHistory();
 const [isOpen, setIsOpen] = useState(false)
 const [value, setValue] = useState('Type your email');
 const [value2, setValue2] = useState('Type your password');
 const [isShow, setIsShow] = useState(false);
 const [isShow2, setIsShow2] = useState(false);
 const [login, setLogin] = useState({email: '', password: '' });
 const [isRoll, setIsRoll] = useState(false)

  const toggle = () => {
   setIsOpen(!isOpen);
  };
 
 const handleClick1 = () => {
  setValue('');
  setIsShow(true) 
 }
 const handleClick2 = () => {
  setValue2('');
  setIsShow2(true) 
 }

const handleChange = (e) => {
  let name = e.target.name
  let value = e.target.value
  setLogin({...login, [name]:value})
}
const submitForm = (e) => {
  setIsRoll(true)
  e.preventDefault();
  if (login.email && login.password){
    axios.post(`${Baseurl}login.php`, JSON.stringify(login)).then(res => {
      setIsRoll(false)
      let loginResponse = res.data;
      if (loginResponse.LoginSuccess) {
      Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
      })
      localStorage.setItem('Token', loginResponse.Auth);
      setTimeout(() => history.push("/dashboard"), 1000);
      } else if(loginResponse.IncorrectPwd) {
        Toast2.fire({
          icon: 'error',
          title: 'Incorrect password'
        })
      } else if (loginResponse.EmailNotFound) {
        Toast2.fire({
          icon: 'info',
          title: 'Email not found'
        })
      }
    })
    
  } else {
    setIsRoll(false)
    Toast2.fire({
      icon: 'warning',
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
      <img src="assets/img/events-2.jpg" className="img-fluid rounded" alt=""/>
      </div>

     <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
     <div class="section-title mt-3">
      <h2>LOGIN TO CONTINUE</h2>
      <p>LOGIN PAGE</p>
      <Link2 to="/signup" style={{ textDecoration:'none'}}><small className="ml-2" data-aos="fade" style={{fontFamily: '"Raleway" sans-serif', color:'#5fcf80', cursor:'pointer'}}>Signup Instead</small></Link2>  
           </div>
      <form onSubmit={submitForm}>
           {isShow ? <label className="ml-2" data-aos="fade" style={{fontFamily: '"Raleway" sans-serif', color:'#5fcf80'}}><small>Type your email</small></label>
    : null }
       <div class="input-group mb-3">
      <div class="input-group-prepend">
      <span class="input-group-text border-top-0 border-left-0 border-right-0 rounded-0 border-bottom-0 " id="basic-addon1"><i class="fas fa-envelope fa-2x"></i></span>
      </div>
      <input type="text" class="form-control border-top-0 border-left-0 border-right-0 rounded-0 py-3" placeholder={value} aria-label="Username" aria-describedby="basic-addon1" onClick={handleClick1} name="email" onChange={handleChange} value={login.email}/>
      </div><br/>
      {isShow2 ? <label className="ml-2" data-aos="fade" style={{fontFamily: '"Raleway" sans-serif', color:'#5fcf80'}}><small>Type your password</small></label>
   
    : null }
       <div class="input-group mb-3">
      <div class="input-group-prepend">
      <span class="input-group-text border-top-0 border-left-0 border-right-0 rounded-0 border-bottom-0 " id="basic-addon1"><i class="fas fa-lock fa-2x"></i></span>
      </div>
      <input type="password" class="form-control border-top-0 border-left-0 border-right-0 rounded-0 py-3" placeholder={value2} aria-label="Username" aria-describedby="basic-addon1" onClick={handleClick2} name="password" onChange={handleChange} value={login.password}/>
     </div>
     <div className="text-center">
     <button className="btn g py-2 px-4 shadow font-weight-bold">{isRoll ? <i class="fad fa-spinner fa-spin"></i> 
    : null } LOGIN</button>
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
              <li><Link2 to="/signup"><i class="bx bx-chevron-right"></i> <a>Signup</a></Link2></li>
           
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
);
};

export default Login;

