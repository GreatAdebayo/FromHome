import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';
import { Baseurl } from '../components/Baseurl.js';
import {useHistory} from 'react-router-dom'

const Createdcourses = (props) => {
let history = useHistory();
  

const [createdCourse, setCreatedCourse] = useState([])
useEffect(() => {
  setTimeout(() => Setskeleton(false), 1000);
  let token = localStorage.getItem('Token')
  axios.post(`${Baseurl}createdcourses.php`, JSON.stringify(token)
  ).then(res => {
    if (res.status == 200) {
      setTimeout(() => Setskeleton(false), 1000);
      let CourseResponse = res.data.CreatedCourse;
      setCreatedCourse(CourseResponse);
    }
    
  }).catch(function (error){
    if (error.response) {
    Setskeleton(true)
   }
  })
  
}, [])
  
const handleCourseCode = (code) => {
  localStorage.setItem('code', JSON.stringify(code))
  history.push('/preview')
  }
  
  
  const [skeleton, Setskeleton] = useState(true);
 
 return (
   <div>
      <section id="cta" class="cta mt-5" style={{
        backgroundColor: '#5FCF80',
        backgroundSize: 'cover',
        padding: '80px 0',
        zIndex: 997
  
      }}>
      <div class="container" data-aos="zoom-in">
        <div class="text-center">
          <h3>Tutor's Portal</h3>
      <p> Manage your courses, add files to your course sections and track other details about your courses. </p>
           <a class="cta-btn" style={{ cursor: 'pointer' }}>Earnings: ₦{props.earning}.00</a>
        </div>

      </div>
     </section>
     
   {/* COURSES SECTION */}
<section id="courses" class="courses">
<div class="container" data-aos="fade-up">
<div class="section-title mt-5">
<h2>Created Courses</h2>
</div>
         
       
    
<div class="row" data-aos="zoom-in" data-aos-delay="100">
   {/* STARTS      */}

  {createdCourse == '' ? <h5 className="text-capitalize">no course created</h5> : null} 
  {createdCourse.map((item, index) => {
  return (             
  <div class="col-lg-4 col-md-6  align-items-stretch mb-4" key={index}>
   {skeleton ? <Skeleton  count={6} duration={2}/> :   <div class="course-item">
    <div class="course-content">
      <div class="d-flex justify-content-between align-items-center mb-3">
    <Link className="mr-5" style={{ cursor: 'pointer', textDecoration: 'none' }} onClick={()=>handleCourseCode(item.course_code)}><h4>Preview</h4></Link>
            <p class="price">{item.cost == 'Free' ? 'Free' : <>₦{item.cost}</>}</p>
      </div>

      <h3 className="text-capitalize" style={{ cursor: 'pointer', textDecoration:'none' }}><a>{item.title}</a></h3>
      <p className="text-capitalize">{item.description}</p>
      <div class="trainer d-flex justify-content-between align-items-center">
        <div class="trainer-profile d-flex align-items-center">
          <img src="/assets/img/trainers/trainer-1.jpg" class="img-fluid" alt=""/>
          <span>{item.tutor_name}</span> 
        </div>
        <div class="trainer-rank d-flex align-items-center">
          <i class="bx bx-user"></i>&nbsp;50
          &nbsp;&nbsp;
          <i class='bx bxs-star'></i>&nbsp;65
        </div>
      </div>
    </div>
  </div>}       
   

</div>   
        );
      })}

           

{/* ENDS */}
         

 </div>
</div>
</section>
     {/* COURSES SECTION */} 
  </div>
 )
}

export default Createdcourses;
