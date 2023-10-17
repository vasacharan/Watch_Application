import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';


export const Register = () => {


const [inputValue, setInputvalue] = useState({
    id : '',
    password : '',
    fullname : '',
    email : '',
    phone : '',
    country : 'India',
    address : '',
    gender : 'male'
});

const {id,password,fullname,email,phone,country,address,gender} = inputValue;
  
const navigate = useNavigate();

    const isValidate =()=>{
        let isProceed = true;
        let errormessage = 'Please Enter the value in';
        if( inputValue.id === null || inputValue.id === ""){
            isProceed = false;
            errormessage += ' UserName';
        }
       
        if(inputValue.password === null || inputValue.password === ""){
            isProceed = false;
            errormessage += ' Password';
        }
        if(inputValue.fullname === null || inputValue.fullname === ""){
            isProceed = false;
            errormessage += ' Fullname';
        }
        if(inputValue.password === null || inputValue.password === ""){
            isProceed = false;
            errormessage += ' Email';
        }
        if(!isProceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(email) || /^[6-9][0-9]{9}$/.test(phone)){

            }else{
                isProceed = false;
                toast.warning('Please enter the Valid Email / Phone')
            }
        }
        if(inputValue.phone === null || inputValue.phone === ""){
            isProceed = false;
            errormessage += ' Phone number';
        }

        return isProceed;
        }
        
    
    
    const handleInputValues =(e)=>{
        setInputvalue({...inputValue, [e.target.name] : e.target.value})

    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(isValidate()){
    //    console.log(inputValue);
    // if isValidate is true below code will execute
         fetch("http://localhost:8000/user",{
        method:'POST',
        headers:{'content-type':'Application/json'},
        body:JSON.stringify(inputValue)
        }).then((res)=>{
            toast.success('Registred Successfully.')
            navigate('/Signin');
        }).catch((err)=>{
            toast.error('Failed:'+err.message)
        });
      }
    }
  

  return (
    <div>
        <div className='offset-lg-3 col-lg-6 mt-3'>
            <form className='container' onSubmit={handleSubmit}>
                <div className='card'>
                    <div className='card-header sign-in-box'>
                    <h3>User Registration Form</h3><br/>
                    </div>
                    <div className='card-body sign-in-box'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='form-group'>
                                    <laber>User Name<span className='text-danger'>*</span></laber>
                                    <input type='text' placeholder='user Name' name='id' onChange={handleInputValues} className='form-control'/>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='form-group'>
                                    <laber>Password<span className='text-danger'>*</span></laber>
                                    <input type='password' placeholder='Password' name='password' onChange={handleInputValues} className='form-control'/>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='form-group'>
                                    <laber>Full Name<span className='text-danger'>*</span></laber>
                                    <input type='text' placeholder='Fullname' name='fullname' onChange={handleInputValues} className='form-control'/>
                                </div>
                             </div>
                             <div className='col-lg-6'>
                                <div className='form-group'>
                                    <laber>Email<span className='text-danger'>*</span></laber>
                                    <input type='email' placeholder='Email' name='email' onChange={handleInputValues} className='form-control'/>
                                </div>
                             </div>
                             <div className='col-lg-6'>
                             <div className='form-group'>
                                 <laber>Phone<span className='text-danger'>*</span></laber>
                                 <input type='text' placeholder='Phone' name='phone' onChange={handleInputValues} className='form-control'/>
                             </div>
                             </div>
                             <div className='col-lg-6'>
                             <div className='form-group'>
                                 <laber>Country<span className='errmsg'>*</span></laber>
                                 <select className='form-control' name='country' onChange={handleInputValues}>
                                <option value='india'>India</option>
                                <option value='usa'>USA</option>
                                <option value='China'>China</option>
                                <option value='Japan'>Japan</option>
                                 </select>
                             </div>
                             </div>
                             <div className='col-lg-12'>
                             <div className='form-group' onChange={handleInputValues}>
                                 <laber>Address<span className='errmsg'>*</span></laber>
                                <textarea className='form-control' name='address'></textarea>
                             </div>
                             </div>
                             <div className='col-lg-6'>
                             <div className='form-group'>
                                 <laber>Gender</laber><br />
                                <input type='radio' name='gender' value='male' onChange={handleInputValues} className='app-check'/>
                                <label>Male</label>
                                <input type='radio' name='gender' value='female' onChange={handleInputValues} className='app-check'/>
                                <label>Female</label>
                             </div>
                             </div>

                        </div>

                    </div>
                    <div className='card-footer sign-in-box'>
                    <button type='submit' className='btn btn-primary'>Register</button>
                    <Link to='/Signin' className='btn btn-danger ms-2'>Back</Link>
                    </div>
                  
                </div>
          
            </form>
  
    </div> 
    </div>
  )
}
