import React, {useEffect, useState}from 'react'
import { Link } from 'react-router-dom';
import { Link as Link2 } from 'react-scroll';
import Skeleton from 'react-loading-skeleton';

const Mylearning = (props) => {
  const [skeleton, Setskeleton] = useState(true);
  useEffect(() => {
    setTimeout(() => Setskeleton(false), 1500);
  })
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
    {/* STARTS      */}
<div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
<div class="course-item">
<div class="course-content">
<div class="d-flex justify-content-between align-items-center mb-3">
<Link to="/coursedetails" className="mr-5" style={{ cursor: 'pointer', textDecoration:'none' }}><h4>Course Details</h4></Link>
<p class="price">Free</p>
</div>
{skeleton ? <Skeleton  count={5} duration={2}/> :<div> <h3><a style={{ cursor: 'pointer' }}>Search Engine Optimization</a></h3>
<p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
<div class="trainer d-flex justify-content-between align-items-center">
<div class="trainer-profile d-flex align-items-center">
  <img src="assets/img/trainers/trainer-2.jpg" class="img-fluid" alt=""/>
  <span>Lana</span>
</div>
<div class="trainer-rank d-flex align-items-center">
  <i class="bx bx-user"></i>&nbsp;35
  &nbsp;&nbsp;
  <i class='bx bxs-star'></i>&nbsp;42
</div>
</div></div>}


</div>

</div>
</div>     
 {/* ENDS */}
</div>
</section>
   {/* COURSES SECTION */}  
  </>
 )
}

export default Mylearning;
