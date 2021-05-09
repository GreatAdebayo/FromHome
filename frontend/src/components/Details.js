import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'



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


const Details = () => {
let history = useHistory();
 const [lsDetails, setLsDetails] = useState("")
 const [details, setDetails] = useState({category: '', title: '', cost: '', desc: '', section: [] });
 const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value
    setDetails({...details, [name]:value})
  }

 const handleSubmit = (e) => {
   e.preventDefault();
   if (details.category && details.title && details.desc) {
    localStorage.setItem('details', JSON.stringify(details))
     Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Course Details saved',
      showConfirmButton: false,
      timer: 1500,
     })
     history.push('/dashboard/createcourse/section')
   } else {
    Toast2.fire({
      icon: 'info',
      title: 'Please fill all details'
    })
   }
   
 }


 return (
  <div className="border p-4 rounded">
  <form data-aos="fade-up" onSubmit={handleSubmit}> 
  <div class="form-group">
  <div className="border px-3 pt-3 mb-4 rounded text-center">
  <p style={{fontFamily: '"Poppins" sans-serif', color: '#777777' }} className="font-weight-bold"><i class="fas fa-info-circle"></i> Course Basic Details <br /> <span>
   <small style={{ fontFamily: '"Poppins" sans-serif', color: '#777777' }}>You can always change details even after saving</small><br/>
   </span></p>
  </div>
    <label for="exampleFormControlSelect1" className="tx font-weight-bold" style={{fontFamily: '"Poppins" sans-serif', color:'#777777'}}>Category</label>
    <select value={details.category} class="form-control" id="exampleFormControlSelect1" onChange={handleChange} name="category" type="text">
      <option>Choose Course Category</option>
      <option>React</option>
      <option>Angular</option>
      <option>Vue</option>
      <option>HTML</option>
      <option>Bootstrap</option>
      <option>Graphics Design</option>
      <option>Andriod Development</option>
      <option>GIT</option>
      <option>Vue</option>
      <option>Laravel</option>
      <option>PHP</option>
      <option>Java</option>
      <option>Others</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1" className="tx font-weight-bold" style={{fontFamily: '"Poppins" sans-serif', color:'#777777'}}>Course Title</label>
    <input value={details.title} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Type course title" name="title" onChange={handleChange}/>
    </div>
    <div class="form-group">
  <label for="exampleFormControlSelect1" className="tx font-weight-bold" style={{fontFamily: '"Poppins" sans-serif', color:'#777777'}}>Cost</label>
  <input value={details.cost} type="number" class="form-control" id="exampleFormControlInput1" placeholder="Type course amount" name="cost"   onChange={handleChange}/>
  <label class="tx font-weight-bold">
    Leave blank if course is Free
  </label>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1" className="tx font-weight-bold" style={{fontFamily: '"Poppins" sans-serif', color:'#777777'}}>Description</label>
    <textarea value={details.desc} class="form-control" id="exampleFormControlTextarea1" rows="3" name="desc"  onChange={handleChange}/>
  </div>
  <button className="btn  g px-3 shadow font-weight-bold" style={{
    backgroundColor: '#5FCF80',
    color: 'white',
    fontFamily:'"Ubuntu", sans-serif'
    }}>Save</button>     
   </form>
     </div>
 )
}

export default Details;
