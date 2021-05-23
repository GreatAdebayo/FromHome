import React, {useEffect, useState, useRef} from 'react'
import Swal from 'sweetalert2'
import axios from 'axios';
import { Baseurl } from '../components/Baseurl.js';
import { useHistory } from 'react-router-dom'



const Toast2 = Swal.mixin({
   toast: true,
   position: 'top-end',
   showConfirmButton: false,
   timer: 2000,
   didOpen: (toast) => {
   toast.addEventListener('mouseenter', Swal.stopTimer)
   toast.addEventListener('mouseleave', Swal.resumeTimer)
   }
})


const Files = () => {
   let history = useHistory();
   useEffect(() => {
      const courseId = localStorage.getItem('courseId');
      axios.post(`${Baseurl}coursesections.php`, JSON.stringify(courseId)
      ).then(res => {
         if (res.status == 200) {
            if (res.data) {
         let sectionResponse = res.data
         setSection(sectionResponse)
         }else{
            setSection([])  
         }

         }
      })  
   }, [])
   

 
  const [section, setSection] = useState([])
  const [fileName, setFileName] = useState('')
  const [file, setFile] = useState('')
  const [isRoll, setIsRoll] = useState(false) 

   const chooseFile = (e) => {
      let value = e.target.value;
      setFileName(value);
      let file = e.target.files[0];
      setFile(file)
      if (setFileName) {
       Toast2.fire({
       icon: 'success',
       title: 'File Chosen'
    }) 
   }  
   }

   const addFile = (id) => {
   setIsRoll(true)
   const formData = new FormData();
   if(file) {
      formData.append('myFile', file);
   axios.post(`${Baseurl}postfiles.php`, formData, {
      headers: {
         'content-type': 'multipart/form-data',
         'Authorization':  id
         }
   }).then(res => {
      if (res.status == 200) {
         let postFileRes = res.data
         setIsRoll(false)
         if (postFileRes.FileNotSupported) {
            Toast2.fire({
               icon: 'error',
               title: 'File not Supported'
            })
         }else if (postFileRes.FileNotUploaded) {
            Toast2.fire({
               icon: 'error',
               title: 'Uploaded Failed'
            })
         } else if (postFileRes.FileUploaded) {
            Toast2.fire({
               icon: 'success',
               title: 'File Uploaded successfully'
            })
         history.push('/preview');
         history.goBack();
         } else if (postFileRes.FileLarge) {
            Toast2.fire({
               icon: 'info',
               title: 'File too Large'
            })
         } else if (postFileRes.HasFile) {
            Toast2.fire({
               icon: 'info',
               title: 'Section already has a file'
            })
         } 
      }
         }) 
   } else {
      setIsRoll(false)
      Toast2.fire({
         icon: 'info',
         title: 'Choose a File'
         }) 
   }
  
   }




  return (
    <div className="border p-4 rounded m-4">
    <form data-aos="fade-up">
    <div class="form-group">
    <div className="border px-3 pt-3 mb-4 rounded text-center">
   <p style={{ fontFamily: '"Poppins" sans-serif', color: '#777777' }} className="font-weight-bold"><i class="fas fa-paperclip"></i> Add Files <br /> <span>
  <small style={{fontFamily: '"Poppins" sans-serif', color: '#777777' }}>You can add Videos, PDF, Text Files etc.</small>
  </span></p>
   </div>
          


   <div className="row">
    {setSection ? <p className="tx text-uppercase" style={{color:'#777777'}}><strong>Course Sections:</strong></p>
   : null}
     {fileName == '' ? null : <div class="aler py-3 pl-2 mb-3 tx" style={{ color: '#777777' }}>
      <strong>File Name:</strong> {fileName.split(/[\\/]/).pop()} <br/> {isRoll ? <span><i class="fad fa-spinner fa-spin fa-2x mr-2 mt-1" style={{color:'#5fcf80'}}></i>Uploading, please wait, do not refresh page...</span>
     : null } 
      </div>}            
  
    {section.map((item, index) => {
       return (
      <div className="col-md-3">
      <div class="aler py-1 px-3 mb-3 pt-3 tx" style={{ color: '#777777' }}>
      <>
      <strong class="text-uppercase mr-3" key={index}>{index+1}. {item.section_name}</strong>
      <p><strong>Content:</strong> {item.content.length > 15 ? `${item.content.substring(0, 15)}...` : item.content == '' ? 'No Content' : <>{item.content}</>} <br />
      <span><p><strong>File: {item.files == 'false' ? 'No File Attached' : 'File Attached'}</strong></p> </span>  <label className="btn g btn-sm">
     <strong> Choose File</strong> <input type="file" hidden onChange={chooseFile}/>
      </label> <a className="btn g float-right btn-sm" onClick={()=>addFile(item.section_id)}><strong>Add</strong> </a>  </p>    
      </>
       </div> 
      </div>
       );
    })}   
   </div>

   </div>
   </form>
   </div>
 )
}

export default Files;
