import React, {useEffect, useState, useRef} from 'react'
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios';
import { Baseurl } from '../components/Baseurl.js';


const Toast2 = Swal.mixin({
   toast: true,
   position: 'top-end',
   showConfirmButton: false,
   timer: 1500,
   didOpen: (toast) => {
   toast.addEventListener('mouseenter', Swal.stopTimer)
   toast.addEventListener('mouseleave', Swal.resumeTimer)
   }
})


const Files = (props) => {
   useEffect(() => {
      const allDetails = localStorage.getItem('details'); 
      if (allDetails) {  
      setLsDetails(JSON.parse(allDetails))
       setShowDetails(true) 
      
        } else {
         setLsDetails({})
           
      }
      
      // LOOPING OUT THE SECTIONS
      const sectionArray = localStorage.getItem('details');
      if (sectionArray) {
         setLsSection(JSON.parse(sectionArray).section)
         if (lsSection === '') {
            setShowSection(false)
         } else {
            setShowSection(true)
         }
     
         } else {
      setLsSection([])   
      } 
     
      }, [])
   
  const fileRef = useRef(null)
  const sectionRef = useRef(null)
  const [lsDetails, setLsDetails] = useState({})
  const [lsSection, setLsSection] = useState([])
  const [showDetails, setShowDetails] = useState(false)
  const [showSection, setShowSection] = useState(false)
  const [fileName, setFileName] = useState('')
  const [isRoll, setIsRoll] = useState(false)
  const [file, setFile] = useState('')
   

  const handleChange = (e) => {
   setFileName(fileRef.current.value);
   setFile(e.target.files[0])
   if (setFileName) {
    Toast2.fire({
    icon: 'success',
    title: 'File Chosen'
    }) 
   }  
     
   }

const handleFile = () => {
const LsSection = lsDetails.section 
const sectionName = sectionRef.current.value;
if (fileName && sectionName) {
if (LsSection){
   let check = LsSection.find(data => sectionName == data.name)
   if (check) {
   let fileArray = check.file
   fileArray.push(fileName)
   localStorage.setItem('details', JSON.stringify(lsDetails))
   const sectionArray = localStorage.getItem('details');
   Toast2.fire({
         icon: 'success',
         title: 'File attached'
   })
   setLsSection(JSON.parse(sectionArray).section)
 }   
   }
} else {
   Toast2.fire({
      icon: 'info',
      title: 'Please choose a file'
      }) 
}
}
   
   const postCourse = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('myFile', file, file.name)
      // setIsRoll(true)
      console.log(fileName)
      axios.post(`${Baseurl}test.php`, formData, {
         headers: {
            'content-type': 'multipart/form-data'
         }
      }).then(res => {
         console.log(res.data)
      })

   }

  return (
    <div className="border p-4 rounded">
    <form data-aos="fade-up">
    <div class="form-group">
    <div className="border px-3 pt-3 mb-4 rounded text-center">
   <p style={{ fontFamily: '"Poppins" sans-serif', color: '#777777' }} className="font-weight-bold"><i class="fas fa-paperclip"></i> Attach Files <br /> <span>
  <small style={{fontFamily: '"Poppins" sans-serif', color: '#777777' }}>You can't make any changes once course is posted</small>
  </span></p>
   </div>
          
  {showDetails ? <div class="aler py-2 pl-2 mb-3 tx" style={{ color: '#777777' }}>
  <p className="text-uppercase"><strong>Course Details</strong></p>
  <strong>Course Title:</strong> <span className="text-uppercase">{lsDetails.title}</span> <br/>
  <strong>Category:</strong> <span className="text-uppercase">{lsDetails.category}</span> <br />
  <strong>Cost:</strong> <span className="text-uppercase">{lsDetails.cost == '' ? 'Free' : <>₦{lsDetails.cost}</>}</span>          
  </div> : null}

  <label className="btn g px-2 shadow mt-4">
   <strong> Choose File</strong> <input type="file" hidden multiple ref={fileRef} onChange={handleChange}/>
    </label>
              
   {fileName == '' ? null : <div class="aler py-2 pl-2 mb-3 tx" style={{ color: '#777777' }}>
   <strong>File Name:</strong> {fileName.split(/[\\/]/).pop()}
   </div>}


   <div class="form-group">
   <small className="tx font-weight-bold" style={{fontFamily: '"Poppins" sans-serif', color:'#777777'}}>Choose Section for this File</small>
   <div class="input-group mb-3">
   <select class="form-control form-control"  type="text" ref={sectionRef}>
   {lsSection.map((item, index) => {
      return (
    <option key={index}>{item.name}</option>
      );
      })} 
   </select>
   <div class="input-group-append">
   <span class="input-group-text btn g font-weight-bold border-0" id="basic-addon2"  onClick={handleFile}>Add</span>
   </div>
    </div>
    </div>






    <div className="row">
    {showSection ? <p className="tx text-uppercase" style={{color:'#777777'}}><strong>Course Sections:</strong></p>
     :null}
    {lsSection.map((item, index) => {
      return (
      <div className="col-md-3">
      <div class="aler py-1 px-2 mb-3 tx" style={{ color: '#777777' }}>
      <>
      <strong class="text-uppercase mr-3" key={index}>{index+1}. {item.name}</strong>
      <p><strong>Content:</strong> {item.content.length > 15 ? `${item.content.substring(0, 15)}...` : item.content == '' ? 'No Content' : <>{item.content}</>} <br />
      <span><p><strong>File: {item.file == '' ? 'No File Attached' : 'File Attached'}</strong></p> </span></p>
            
      </>
       </div> 
      </div>
         ); })}        
      </div>



   <button className="btn g px-3 shadow font-weight-bold" style={{
    backgroundColor: '#5FCF80',
    color: 'white',
    fontFamily:'"Ubuntu", sans-serif'
   }} onClick={postCourse}>{isRoll ? <i class="fad fa-spinner fa-spin"></i> 
   : null } Post Course <i class="fal fa-long-arrow-right"></i></button>
   </div>
   </form>
      </div>
 )
}

export default Files;
