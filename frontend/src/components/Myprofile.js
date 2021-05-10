import React from 'react'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';


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

const Myprofile = (props) => {
  let history = useHistory();
  const handleClick = () => {
    Toast.fire({
      icon: 'success',
      title: 'Logged out successfully'
    })
    setTimeout(() => history.push("/login"), 500);
    localStorage.removeItem('Token');
  }
 return (
  <div>
     <section id="cta" class="courses">
     <div class="container" data-aos="fade-up">
   <div class="section-title mt-5">
   <h2>My Profile</h2>
   </div>
    <form>
  {/* <img src="/assets/img/trainers/trainer-2.jpg" alt="..." class="rounded-circle" style={{width:'80px', height:'80px'}}/> */}
  <p className="text-light rounded-circle shadow text-center p-auto" style={{ width: '80px', height: '80px', fontSize: '50px', backgroundColor: '#5fcf80' }}>{props.fname ? props.fname[0]:null}{props.lname ? props.lname[0] : null}</p>
  <div class="form-row mt-3">
    <div class="form-group col-md-6">
      <label for="inputEmail4" className="tx" style={{fontFamily: '"Poppins" sans-serif', color:'#777777'}}>First Name</label>
      <div class="input-group mb-3">
      <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1"><i class="far fa-user"></i></span>
      </div>
    <input type="text" class="form-control" placeholder="Firstname" aria-label="Username" aria-describedby="basic-addon1" value={props.fname} style={{fontFamily:'"Ubuntu", sans-serif'}}/>
        </div>
        </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4" className="tx" style={{fontFamily: '"Poppins" sans-serif', color:'#777777'}}>Last Name</label>
      <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1"><i class="far fa-user"></i></span>
  </div>
  <input type="text" class="form-control" placeholder="Lastname" aria-label="Username" aria-describedby="basic-addon1" value={props.lname} style={{fontFamily:'"Ubuntu", sans-serif'}}/>
        </div>
        </div>
           </div>

           
   <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" className="tx" style={{fontFamily: '"Poppins" sans-serif', color:'#777777'}}>Email</label>
      <div class="input-group mb-3">
      <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1"><i class="fas fa-envelope"></i></span>
    </div>
     <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" value={props.email} disabled style={{fontFamily:'"Ubuntu", sans-serif'}}/>
        </div>
        </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4" className="tx" style={{fontFamily: '"Poppins" sans-serif', color:'#777777'}}>Account Verification</label>
      <div class="input-group mb-3">
      <div class="input-group-prepend">
    <span class="input-group-text"><i class="fas fa-badge-check"></i></span>
  </div>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" value={props.status == 'true' ? 'Verified' : 'NotVerified'} disabled style={{fontFamily:'"Ubuntu", sans-serif'}}/>
    {props.status != 'true'?  <div class="input-group-append" style={{fontFamily: '"Nunito", sans-serif', backgroundColor:'#5fcf80', cursor:'pointer'}}>
    <span class="input-group-text text-light border-0 rounded">Verify Now</span>
     </div> : null}
     </div>
        </div>
           </div>
         </form>
    <button className="btn  g px-3 shadow font-weight-bold" style={{
    backgroundColor: '#5FCF80',
    color: 'white',
    fontFamily: '"Ubuntu", sans-serif'
   }}  onClick={handleClick}>Logout</button>
    </div>
      
        
   </section>
  </div>
 )
}


export default Myprofile
