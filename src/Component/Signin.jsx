import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



export const Signin = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        sessionStorage.clear();
    },[]);

    const [signin, setSignin] = useState({
        urname : '',
        password : ''
    });

    const {urname , password} = signin;

    const handleSigninValues = (e)=>{
        setSignin({...signin, [e.target.name] : e.target.value})
        
    }

    const handleSignin =(e)=>{
        e.preventDefault();
        if(validateInputs()){
            //implementation
            // console.log('Proceed');
           fetch("http://localhost:8000/user/"+urname).then((res)=>{
            return res.json();
           }).then((resp)=>{
            // console.log(resp);
            if(Object.keys(resp).length === 0){
                toast.error('Please Enter valid Username')
            }
            if(resp.password === password){
                toast.success('Success');
                sessionStorage.setItem('urname',urname);
                navigate('/')
            }else{
                toast.error('Please Enter valid Password')
            }
           }).catch((err)=>{
            toast.error('Login failed due to:'+err.message)
           });
        }
        // console.log(signin);
    }

    const validateInputs =()=>{
        let result = true;
        if(urname === null || urname === ""){
            result = false;
            toast.warning('Please enter Username')
        }
        if(password === null || password === ""){
            result = false;
            toast.warning('Please enter Password')
        }
        return true;
    }
   
  return (
    <div>
        <div className='offset-lg-3 col-lg-6 mt-5'>
            <form className='container text-start' onSubmit={handleSignin}>
            <div className='card'>
                <div className='card-header sign-in-box'>
                <h3 className='text-center'>User Sign In Form</h3>
                </div>

                <div className='card-body sign-in-box'>
                <div className='row'>
                    <div className='col-lg'>
                        <div className='form-group'>
                        
                        <label>User Name/Email</label>
                        <input type='text' placeholder='UserName' name='urname' onChange={handleSigninValues} className='form-control'/>
                        <label>Password</label>
                        <input type='password' placeholder='Password' name='password' onChange={handleSigninValues} className='form-control'/><br />
                        
                      
                        </div>
                    </div>
                </div>    
                </div>
                <div className='card-footer sign-in-box'>
                <button type='submit' className='btn btn-primary'>Signin</button>
                <p >For New User<Link to='/Register' className='btn btn-info'>Register</Link>click here</p>
                </div>
            
                
                
            </div>
        
        </form>

        </div>
    
    </div>
  )
}

