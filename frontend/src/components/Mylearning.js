import React from 'react'
import { Link } from 'react-router-dom';
import { Link as Link2 } from 'react-scroll';

const Mylearning = () => {
 return (
  <div>
   <section id="cta" class="cta" style={{
        backgroundColor: '#5FCF80',
        backgroundSize: 'cover',
        padding: '80px 0',
        zIndex: 997
  
      }}>
      <div class="container" data-aos="zoom-in">
        <div class="text-center">
          <h3>Welcome Adebayo I.</h3>
          <p> Start Learning and posting courses, you have multiple choices. </p>
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
  <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
  <div class="course-item">
  <div class="course-content mt-4">
<h3><a style={{ cursor: 'pointer' }}>Website Design</a></h3>
<p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
<div class="trainer d-flex justify-content-between align-items-center">
<div class="trainer-profile d-flex align-items-center">
  <img src="assets/img/trainers/trainer-1.jpg" class="img-fluid" alt=""/>
  <span>Antonio</span>
</div>
<div class="trainer-rank d-flex align-items-center">
  <i class="bx bx-user"></i>&nbsp;50
  &nbsp;&nbsp;
  <i class="bx bx-heart"></i>&nbsp;65
</div>
</div>
</div>
</div>
</div> 


</div>

</div>
</section>
   {/* COURSES SECTION */}  
  </div>
 )
}

export default Mylearning;
