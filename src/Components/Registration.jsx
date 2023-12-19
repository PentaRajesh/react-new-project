import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Registration = () => {
    const [formData, setFormData] = useState({
        firstname:'',
        lastname:'',
        email:'',
        mobileno:'',
        education:'',
        occupation:'',
        gender:'',
        languages:[],
        password:'',
        cpassword:'',
      })
    
      const [formError, setFormError] = useState({})
      const [valid,setValid]=useState(true)
      const navigate = useNavigate()
      const onChangeHandler = (event) => {
    
        console.log(event)
        if(event.target.name === 'languages'){
    
          let copy = {...formData}
    
          if(event.target.checked){
            copy.languages.push(event.target.value)
          }else{
            copy.languages = copy.languages.filter(el => el !== event.target.value)
          }
    
          setFormData(copy)
    
        }else{
        setFormData(()=>({
          ...formData,
          [event.target.name]:event.target.value
        }))
      }
    }
    
    const validateForm = () => {
      let err = {}
    
      if(formData.firstname === ''){
        err.firstname = 'firstname required!'
      }
      if(formData.lastname === ''){
        err.lastname = 'lastname required!'
      }
      if(formData.email === ''){
        err.email = 'Email required!'
      }else{
          let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!regex.test(formData.email)){
          err.email = 'Email not  valid!'
        }
      }
      if(formData.mobileno === ''){
        err.mobileno = 'Mobile number required!'
      }
      if(formData.password === '' || formData.cpassword === ''){
        err.password = 'Password and Confirm Password required!'
      }else{
        if(formData.password !== formData.cpassword){
          err.password='Password not matched!'
        }else{
          if(formData.password.length < 6){
            err.password='Password Should be greater than 6 characters!'
          }
        }
      }
      if(formData.education === ''){
        err.education = 'Education required!'
      }
      if(formData.occupation === ''){
        err.occupation = 'Occupation required!'
      }
      if(formData.gender === ''){
        err.gender = 'Gender required!'
      }
      if(formData.languages.length < 1){
        err.languages = 'Any One Language required!'
      }
    
    
      setFormError({...err})
      
      return Object.keys(err).length < 1;
      axios.post('http://localhost:8000/users',formData)
      .then(result => console.log(result))
      navigate('/login')
      .catch(err => console.log(err))
    }
    
    const onSubmitHandler=(event) =>{
      event.preventDefault()
      console.log("Form Data:",formData)
      let isValid=validateForm()
      
      if(isValid){
        alert('Registered Successfully')
      }else{
        alert('In Valid Form') 
      }
      console.log(isValid)
      
    }
  return (
    
    <div className="App">
    <form onSubmit={onSubmitHandler}>
      <h4 className='mb-5 text-secondary'>Create Your Account</h4>
      <div className='form-group'>
        <label htmlFor='firstname' className='form-label'>First Name</label>
        <input className='form-control' name="firstname" placeholder='Enter First Name' onChange={onChangeHandler} value={formData.firstname} />
        <span className='non-valid'>{formError.firstname}</span>
      </div>
      <div className='form-group'>
        <label htmlFor='lastname' className='form-label'>Last Name</label>
        <input className='form-control' name="lastname" placeholder='Enter Last Name' onChange={onChangeHandler} value={formData.lastname}/>
        <span className='non-valid'>{formError.lastname}</span>
      </div>
      <div className='form-group'>
        <label htmlFor='email' className='form-label'>Email</label>
        <input className='form-control' name='email' placeholder='Enter Email' onChange={onChangeHandler} value={formData.email}/>
        <span className='non-valid'>{formError.email}</span>
      </div>
      <div className='form-group'>
        <label htmlFor='mobileno' className='form-label'>Mobile Number</label>
        <input className='form-control' name='mobileno' placeholder='Enter Mobile No.' onChange={onChangeHandler} value={formData.mobileno}/>
        <span className='non-valid'>{formError.mobileno}</span>
      </div>
      <div className='form-group'>
        <label htmlFor='education' className='form-label'>Education</label>
        <select className='form-select' name='education'onChange={onChangeHandler} value={formData.education}>
          <option value=""></option>
          <option value="student">Garduation</option>
          <option value="employee">Masters</option>
          <option value="other">Phd</option>
        </select>
        <span className='non-valid'>{formError.education}</span>
      </div>
      
      <div className='form-group'>
        <label htmlFor='occupation' className='form-label'>Occupation</label>
        <select className='form-select' name='occupation'onChange={onChangeHandler} value={formData.occupation}>
          <option value=""></option>
          <option value="student">Student</option>
          <option value="employee">Employee</option>
          <option value="other">Other</option>
        </select>
        <span className='non-valid'>{formError.occupation}</span>
      </div>
      <div className='form-group'>
        <label htmlFor='gender' className='form-label'>Gender</label>
      <div>
        <div>
        <input type="radio" name='gender' value="male" onChange={onChangeHandler} checked={formData.gender === 'male'}/>
        <label htmlFor='male'>Male</label>
        </div>
        <div>
        <input type="radio" name='gender' value="female" onChange={onChangeHandler} checked={formData.gender === 'female'}/>
        <label htmlFor='female'>Female</label>
        </div>
        <div>
        <input type="radio" name='gender' value="other" onChange={onChangeHandler} checked={formData.gender === 'other'}/>
        <label htmlFor='other'>Other</label>
        </div>
        <span className='non-valid'>{formError.gender}</span>
      </div>
      </div>
      <div className='form-group'>
        <label htmlFor='gender' className='form-label'>Languages</label>
        <div>
          <div>
            <input type='checkbox' name='languages' value="html" onChange={onChangeHandler} checked={formData.languages.indexOf('html') !== -1}/>
            <label htmlFor='html'>HTML</label>
          </div>
          <div>
            <input type='checkbox' name='languages' value="css" onChange={onChangeHandler} checked={formData.languages.indexOf('css') !== -1}/>
            <label htmlFor='css'>CSS</label>
          </div>
          <div>
            <input type='checkbox' name='languages' value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1}/>
            <label htmlFor='javascript'>Javascript</label>
          </div>
        </div>
        <span className='non-valid'>{formError.languages}</span>
      </div>
      <div className='form-group'>
        <label htmlFor='password' className='form-label'>Password</label>
        <input className='form-control' name='password' placeholder='Enter Password' onChange={onChangeHandler} value={formData.password}/>
        <span className='non-valid'>{formError.password}</span>
      </div>
      <div className='form-group'>
        <label htmlFor='cpassword' className='form-label'>Confirm Password</label>
        <input className='form-control' name='cpassword' placeholder='Confirm Your Password' onChange={onChangeHandler} value={formData.cpassword}/>
      </div>
      <div className='form-group'>
        <button className='btn btn-primary float-end' type='submit'>Sign Up</button>
      </div>
    </form>
    <p className='text-center mt-3 text-secondary'>
      If you have account, Please <Link to="/login">Login Now</Link>
    </p>
  </div>
  )
}

export default Registration