import React, {useEffect, useState}from 'react'
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';
import { Baseurl } from '../components/Baseurl.js';


const Mylearning = (props) => {
  const [skeleton, Setskeleton] = useState(true);
  const [createdCourse, setCreatedCourse] = useState([]);


    useEffect(() => {
    setTimeout(() => Setskeleton(false), 1000);
    let token = JSON.parse(localStorage.getItem('Token'))
     axios.post(`${Baseurl}getmylearning.php`, JSON.stringify(token)
      ).then(res => {
        if (res.status == 200) {
          let learningCourseRes = res.data.MyLearning
          if (learningCourseRes) {
          setCreatedCourse(learningCourseRes)    
          } else {
            setCreatedCourse([]) 
          } 
        } 
      })
    }, [])


 return (
  <>
   <section id="cta" class="cta mt-5" style={{
        backgroundColor: '#5FCF80',
        backgroundSize: 'cover',
        padding: '80px 0',
        zIndex: 997
  
      }}>
      <div class="container mt-3" data-aos="zoom-in">
        <div class="text-center">
          <h3>Welcome {props.fname} {props.lname}.</h3>
           <p> Learn from the best, Real-world tutors teaching real-world skills. </p>
           <a class="cta-btn" style={{cursor:'pointer'}}>Wallet: ₦{props.balance}.00</a>
        </div>

      </div>
   </section>
   

   {/* COURSES SECTION */}
   <section id="courses" class="courses">
  <div class="container" data-aos="fade-up">
   <div class="section-title mt-3">
   <h2>My Learning</h2>
   </div>

         
   <div class="row" data-aos="zoom-in" data-aos-delay="100">
   {/* STARTS      */}

  {createdCourse == '' ? <h5 className="text-capitalize">Happy Learning</h5> : null} 
  {createdCourse.map((item, index) => {
  return (             
  <div class="col-lg-4 col-md-6  align-items-stretch mb-4" key={index}>
   {skeleton ? <Skeleton  count={6} duration={2}/> :   <div class="course-item">
  <div class="course-content">
  <div class="d-flex justify-content-between align-items-center mb-3">
  <Link to={`/coursepreview/${item.course_code}`} className="mr-5" style={{ cursor: 'pointer', textDecoration: 'none'}}><h4>Course Details</h4></Link>
  <p class="price"> {item.cost == 'Free' ? 'Free' : <>₦{item.cost}</>}</p>
   </div>

      <h3 className="text-capitalize" style={{ cursor: 'pointer', textDecoration:'none' }}><a>{item.course_title}</a></h3>
      <p className="text-capitalize">{item.description}</p>
      <div class="trainer d-flex justify-content-between align-items-center">
        <div class="trainer-profile d-flex align-items-center">
          <img src="/assets/img/trainers/trainer-1.jpg" class="img-fluid" alt=""/>
          <span>{item.tutor}</span> 
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
  </>
 )
}

export default Mylearning;
