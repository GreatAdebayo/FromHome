import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Baseurl } from '../components/Baseurl.js';


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: false,
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
    localStorage.removeItem('code');
    localStorage.removeItem('courseId');
    localStorage.removeItem('courseTitle');
  }

  const changePic = () => {
    setDefault(false)
    setDefault2(true)
  }


  const handlePic = (e) => {
    let fileName = e.target.files[0];
    setFile(fileName)
    Toast.fire({
      icon: 'success',
      title: 'Pic Chosen, click upload'
    })
  }


  const uploadPic = () => {
    let token = localStorage.getItem('Token')
    const formData = new FormData();
    if (file) {
      formData.append('myFile', file);
      axios.post(`${Baseurl}profilepics.php`, formData, {
        headers: {
          'content-type': 'multipart/form-data',
          'Authorization': token
        }
      }
      ).then(res => {
        if (res.status == 200) {
          let profileResponse = res.data
          if (profileResponse.PicUploaded) {
            setDefault2(false)
            setDefault(true)
            Toast.fire({
              icon: 'success',
              title: 'Pics Uploaded'
            })
            history.push('/');
            history.goBack();
          }
         
        }
     }) 
    } else {
      Toast.fire({
        icon: 'info',
        title: 'Please Choose Pic'
        })
    }
 } 
const fileUrl = `${Baseurl}profilepics/`;
const [showDefault, setDefault] = useState(true)
const [showDefault2, setDefault2] = useState(false)
 const [file, setFile] = useState('')
  
 return (
  <div>
  <section id="cta" class="courses">
  <div class="container" data-aos="fade-up">
   <div class="section-title mt-5">
   <h2>My Profile</h2>
 </div>

  <form>


  
           
 {showDefault2 ? <label className="tx text-light rounded-circle shadow text-center pt-4 font-weight-bold" style={{ width: '80px', height: '80px', fontSize: '13px', backgroundColor: 'black', cursor: 'pointer' }}>Choose Pic <br /><i class="fas fa-camera"></i><input type="file" hidden onChange={handlePic} /></label> : null}

{showDefault ? <> {props.profile ? <img src={fileUrl+props.profile} alt="..." class="rounded-circle" style={{width:'80px', height:'80px'}}/> : <p className="text-light rounded-circle shadow text-center p-auto" style={{ width: '80px', height: '80px', fontSize: '50px', backgroundColor: '#5fcf80', cursor: 'pointer' }} >{props.lname ? props.lname[0] : null}</p>}</> : null}
         

 {showDefault ? <p style={{ color: '#777777', cursor: 'pointer' }} className="txt mt-2" onClick={changePic}>Click to change</p> : <p style={{ color: '#777777', cursor: 'pointer' }} className="txt" onClick={uploadPic}>Click to upload</p>}          

           
  <div class="form-row mt-3">
    <div class="form-group col-md-6">
      <label for="inputEmail4" className="tx" style={{color:'#777777'}}>First Name</label>
      <div class="input-group mb-3">
      <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1"><i class="far fa-user"></i></span>
      </div>
    <input type="text" class="form-control" placeholder="Firstname" aria-label="Username" aria-describedby="basic-addon1" value={props.fname} style={{fontFamily:'"Ubuntu", sans-serif'}}/>
        </div>
        </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4" className="tx" style={{color:'#777777'}}>Last Name</label>
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
    {props.status != 'true'?  <div class="input-group-append border-0 rounded" style={{fontFamily: '"Nunito", sans-serif', backgroundColor:'#5fcf80', cursor:'pointer'}}>
    <span class="input-group-text text-light">Verify Now</span>
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
