import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Createdcourses = () => {
const [skeleton, Setskeleton] = useState(true);

useEffect(() => {
  setTimeout(() => Setskeleton(false), 1000);
})
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
          <h3>Created Courses</h3>
      <p> Track all courses created and how much you've earned from them. </p>
      <a class="cta-btn" style={{cursor:'pointer'}}>Earnings: ₦1,000</a>
        </div>

      </div>
     </section>
     
   {/* COURSES SECTION */}
   <section id="courses" class="courses">
   <div class="container" data-aos="fade-up">
   <div class="section-title mt-5">
   <h2>Created Courses</h2>
   </div>
    {/* STARTS      */}
<div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
<div class="course-item">
<div class="course-content">
<div class="d-flex justify-content-between align-items-center mb-3">
<Link  className="mr-5" style={{ cursor: 'pointer', textDecoration:'none' }}><h4>Preview</h4></Link>
<p class="price">Free</p>
</div>
{skeleton ? <Skeleton  count={5} duration={2}/> :<div> <h3><a style={{ cursor: 'pointer' }}>Search Engine Optimization</a></h3>
<p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
<div class="trainer d-flex justify-content-between align-items-center">
<div class="trainer-profile d-flex align-items-center">
  <img src="/assets/img/trainers/trainer-2.jpg" class="img-fluid" alt=""/>
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
  </div>
 )
}

export default Createdcourses;
