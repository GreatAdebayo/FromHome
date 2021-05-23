import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Baseurl } from './Baseurl.js';
import {useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-scroll';
import { Link as Link2 } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useParams } from "react-router";
import ReactPlayer from 'react-player'



const Toast = Swal.mixin({
 toast: true,
 position: 'top-end',
 showConfirmButton: false,
 timer: 1500,
 didOpen: (toast) => {
 toast.addEventListener('mouseenter', Swal.stopTimer)
 toast.addEventListener('mouseleave', Swal.resumeTimer)
 }
})


const TutorPreview = () => {
 const toggle = () => {
  setIsOpen(!isOpen);
 };
 let {course} = useParams();
 
 useEffect(() => {
  if (localStorage.Token) {
   axios.post(`${Baseurl}takecourse.php`, JSON.stringify(course)
   ).then(res => {
    if (res.status == 200) {
     if (res.data.Sections) {
      let sectionResponse = res.data.Sections;
      setCourseSection(sectionResponse);
     } else {
      setCourseSection([]);
     }
    }
  
   })

  } else {
   Toast.fire({
    icon: 'info',
    title: 'Please Login'
    })
   history.push('/login')
 }
 }, []);
  
  // useEffect(() => {
  // let CourseTitle = JSON.parse(localStorage.getItem('courseTitle2'))
  // setTitle(CourseTitle) 
   
  // }, [])


 let history = useHistory();
 const [videoFilePath, setVideoFilePath] = useState('');
 const [isOpen, setIsOpen] = useState(false)
 const [courseSection, setCourseSection] = useState([])
 const fileUrl = `${Baseurl}uploads/`;
 const [title, setTitle] = useState('')

  
const playVideo = (file) => {
  setVideoFilePath(file)
}
  
const handleProgress = ({played}) => {
  if (played >= 1) {
    Toast.fire({
      icon: 'success',
      title: 'Section Completed'
      })
  }
  
  
}
  
 return (
  <div>
      <Navbar  toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
     
     <section id="cta" class="cta mt-4">
    <div class="container mt-3" data-aos="zoom-in">
    <div>
    <h4 className="text-dark mb-4">{title}</h4>
        <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={fileUrl+videoFilePath}
          width='100%'
          height='100%'
          controls={true} 
          onProgress={handleProgress}    
        />
      </div>
        </div>
      </div>
     </section>
     
      
    <section id="cta" class="cta">
      <div class="container" data-aos="fade-up">
         <div className='text-center'>
         <div class="section-title">
       <h2>Course Sections</h2>
        </div>
         </div>
     

        {/* //STARTS// */}
        
        {courseSection.map((item, index) => {
         return (
          <div class="accordion " id="accordionExample" key={index}>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.section_name.split(" ").join("")}`} aria-expanded="true" aria-controls="collapseOne">
              {index+1}. {item.section_name}
              </button>
            </h2>
            <div id={item.section_name.split(" ").join("")} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body text-left">
                <strong>Content:</strong> <span style={{fontFamily: '"Raleway", sans-serif'}}>{item.content}</span>  <br/> <br/>
                {!item.file_name ? '' : item.file_name.charAt(item.file_name.length - 1) == '4' ? <span style={{ fontFamily: '"Raleway", sans-serif', cursor: 'pointer' }}
                onClick={() => playVideo(item.file_name)}><i class="fas fa-play"></i> Click to Play Video</span> :
                item.file_name.charAt(item.file_name.length - 1) == 'f' ? <span style={{fontFamily: '"Raleway", sans-serif', cursor: 'pointer' }}
                onClick={() => playVideo(item.file_name)}><i class="fas fa-download"></i> Download PDF File</span>  :
                item.file_name.charAt(item.file_name.length - 1) == 'p' ? <span style={{fontFamily: '"Raleway", sans-serif', cursor: 'pointer' }}
                onClick={() => playVideo(item.file_name)}><i class="fas fa-download"></i> Download Zip File</span> : null}
              </div>
            </div>
           </div>
           </div>
          );
        })}
     
 {/* //ENDS// */}
         
   </div>
   </section>

     <div className="container mb-5">
     <div class="form-group text-left">
    <label for="exampleFormControlTextarea1" className="tx font-weight-bold" style={{fontFamily: '"Poppins" sans-serif', color:'#777777'}}>Note</label>
    <textarea  class="form-control"  rows="3" name="desc" placeholder="Write down important points"/>
  </div>
    <div className="text-left">
  <button className="btn  g px-3 shadow font-weight-bold" style={{
    backgroundColor: '#5FCF80',
    color: 'white',
    fontFamily:'"Ubuntu", sans-serif'
      }}>Save</button>
      </div>
   
    </div>
   

 

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
              <li><Link2 to="/courses" style={{ cursor: 'pointer' }}><i class="bx bx-chevron-right"></i> <a to="courses">Courses</a></Link2></li>
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

      <Link to="cta"  className="back-to-top"><a id="back-to-top"  role="button"><i className="back-top fas fa-chevron-circle-up float-right" style={{color:'#5fcf80', fontSize:'35px'}}></i></a></Link>
      </div>
      </div>
      </div>
      </footer>
       </div>
 )
}

export default TutorPreview;
