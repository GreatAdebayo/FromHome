import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Link as Link2, useHistory } from 'react-router-dom';
import { Link } from 'react-scroll';
import Swal from 'sweetalert2';
import axios from 'axios';
import {Baseurl} from '../components/Baseurl.js';

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



const Verify = () => {
let history = useHistory();
let Coderesponse = '';
let email = ''

useEffect(() => {
if(!localStorage.Email) {
history.push("/login")
} else {
email = localStorage.Email; 
}

});
  
const [isOpen, setIsOpen] = useState(false)
const toggle = () => {
setIsOpen(!isOpen)}
const [resend, setResend] = useState(false);
const [code, setCode] = useState({code:''});


const handleChange = (e) => {
  let name = e.target.name;
  let value = e.target.value;
  setCode({...code, [name]:value})
// code = inputRef.current.value;
} 

 const handleSubmit = (e) => {
  e.preventDefault();
    if (code.code) {
    let details = {email:email, code:code.code}
    axios.post(`${Baseurl}confirmcode.php`, JSON.stringify(details)).then(res => {
    Coderesponse = res.data;
      if(Coderesponse.CodeExpired){
        Toast2.fire({
          icon: 'info',
          title: 'Code Expired'
        })
       setResend(true);
       }else if(Coderesponse.CodeCorrect) {
        Toast2.fire({
          icon: 'success',
          title: 'Code correct, Successfully signed up'
        })
        setTimeout(() => history.push("/login"), 1000);
       } else if (Coderesponse.CodeWrong) {
        Toast2.fire({
          icon: 'error',
          title: 'Wrong code'
        })
        setResend(true);
       } else if (Coderesponse.EmailNotFound) {
        Toast2.fire({
          icon: 'error',
          title: 'User not found, Sign up'
        })
        setTimeout(() => history.push("/signup"), 1000);
        }
    })
      }else {
       Toast2.fire({
       icon: 'warning',
       title: 'Please fill all input'
    })
  }
  }

  const resendCode = () => {
  Toast.fire({
  icon: 'info',
  title: 'A verification code has been sent to your email'
  })
    
  //SEND VERIFICATION CODE STARTS//
  setResend(false);
  axios.post(`${Baseurl}sendcode.php`, JSON.stringify(email)).then(res => { 
      })
  //SEND VERIFICATION CODE ENDS// 
  }
  
 return (
  <>
   <Navbar toggle={toggle}/>
   <Sidebar isOpen={isOpen} toggle={toggle} />
   <section  className="about container mt-5" id="about">
     <div className="row">
      <div className="col-lg-5 d-none d-lg-block" data-aos="fade-left" data-aos-delay="100">
      <img src="assets/img/events-1.jpg" className="img-fluid rounded" alt=""/>
      </div>

     <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
     <div class="section-title mt-3">
      <h2>ACCOUNT VERIFICATION</h2>
      <p>VERIFICATION CODE</p>
      </div>
           
      <form onSubmit={handleSubmit}>
      <label className="ml-2" data-aos="fade" style={{fontFamily: '"Raleway" sans-serif', color:'#5fcf80'}}><small>Enter Verification Code</small></label>
       <div class="input-group mb-3">
      <div class="input-group-prepend">
      <span class="input-group-text border-top-0 border-left-0 border-right-0 rounded-0 border-bottom-0 " id="basic-addon1"><i class="fas fa-shield-check fa-2x"></i></span>
      </div>
               <input type="number" class="form-control border-top-0 border-left-0 border-right-0 rounded-0 py-3" aria-label="Username" aria-describedby="basic-addon1" name="code" placeholder="Enter Code" onChange={handleChange} value={code.code}/>
      </div><br/>
      {resend ? <small className="ml-2" data-aos="fade" style={{fontFamily: '"Raleway" sans-serif', color:'#5fcf80', cursor:'pointer'}} onClick={resendCode}>Resend Code</small> : null}
     <div className="text-center">
     <button className="btn g py-2 px-4 shadow font-weight-bold"> CONFIRM</button>
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
 )
}

export default Verify
