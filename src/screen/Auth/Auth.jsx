import React, {useState} from 'react'
import './Auth.css'
import login from '../../assert/image/login.png'

function Auth() {
    const [log,setLogin]=useState(true)
    const [role,setRole]=useState(' ')
    console.log(role);
  return (
    <div className='container'>
    {(role==='client' || role==='doctor') && 
    
    <div className='heading-1 text-center'>SIGN UP</div>
    }
        <div className="row my-3 d-flex align-items-center">
        {role===' ' &&
            <div className="col-md-6">
                <img src={login} className="img-fluid hidden-img" alt='login' />
            </div>
        }
            <div className="col-md-6 pt-3">
            {log?
             <div>
             <div className='heading-1 text-center'>LOG IN</div>
                <div className="card shadow p-1">
                    <div className="card-body">
                        <label htmlFor='email' className='form-label fs-5'>Email <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='Email' id='email' />
                        <label htmlFor='password' className='form-label fs-5 mt-3'>Password <span className='text-danger'>*</span></label>
                        <input type="password" className='form-control' placeholder='password' id='password' />
                        <div className='d-flex justify-content-end'>
                            <button className='btn'>forget password</button>
                        </div>
                        <button className='btn btn-login'>LogIn</button>
                    </div>
                </div>
                <div className='my-4 text-center'>
                    <p>Don't have an account? <span style={{color:'#1385ae',cursor:'pointer'}} onClick={()=>{setLogin(!log)}}>Sign Up</span></p>
                </div>
             </div>  :
             <div>
             {
                role===' ' &&
             <div className='heading-1 text-center'>SIGN UP</div>
             }
                <div className="card shadow p-1">
                    <div className="card-body">
                        <label htmlFor='name' className='form-label fs-5'>Name <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='Name' id='name ' />
                        <label htmlFor='email' className='form-label fs-5 mt-3'>Email <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='Email' id='email' />
                        <label htmlFor='mobile' className='form-label fs-5 mt-3'>Mobile Number <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='Mobile Number' id='mobile' />
                        <label htmlFor='role' className='form-label fs-5 mt-3'>Register As <span className='text-danger'>*</span></label>
                        <div className='form-check'>
                        <input type="radio" name="role" value="doctor" id="doctor" onChange={()=>{setRole('doctor')}} className='form-check-input' />
                        <label class="form-check-label" for="doctor">Doctor</label>
                        </div>
                        <div className='form-check'>
                        <input type="radio" name="role" id="client" onChange={()=>{setRole('client')}} className='form-check-input' />
                        <label class="form-check-label" for="client">Client</label>
                        </div>
                        </div>
                        </div>
                        { role===' '&&
                <div className='my-4 text-center'>
                    <p>Already have an account? <span style={{color:'#1385ae',cursor:'pointer'}} onClick={()=>{setLogin(!log)}}>Log In</span></p>
                </div>
                        }
             </div> 
            }
            </div>
            {
                (role==='client' || role==='doctor') && 
                <div className="col-md-6 pt-3">
                <div className="card shadow ">
                            <div className="card-body">  
                            <div className="row">
                                <div className="col-md-6">    
                                    <label htmlFor='dob' className='form-label fs-5 mt-3'>Date of Birth <span className='text-danger'>*</span></label>
                                    <input type="date" className='form-control' id='dob' />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor='blood' className='form-label fs-5 mt-3'>Blood Group <span className='text-danger'>*</span></label>
                                    <input type="text" className='form-control' id='blood' placeholder='eg,. O+' />
                                </div>
                            </div>                     
                    
                        <label htmlFor='gender' className='form-label fs-5 mt-3'>Gender <span className='text-danger'>*</span></label>
                        <div className='form-check'>
                        <input type="radio" name="gender" id="male" className='form-check-input' />
                        <label class="form-check-label" for="male">Male</label>
                        </div>
                        <div className='form-check'>
                        <input type="radio" name="gender" id="female" className='form-check-input' />
                        <label class="form-check-label" for="female">Female</label>
                        </div>
                        <label htmlFor='password' className='form-label fs-5 mt-3'>Password <span className='text-danger'>*</span></label>
                        <input type="password" className='form-control' placeholder='6-10 character' id='password' />
                        <label htmlFor='confirm-password' className='form-label fs-5 mt-3'>Confirm Password <span className='text-danger'>*</span></label>
                        <input type="password" className='form-control' placeholder='6-10 character' id='confirm-password' />
                    </div>
                </div>

                </div>
            }
            {role==='doctor' &&
            <div className="col-md-6 pt-3">
                <div className="card shadow ">
                            <div className="card-body">       
                        <label htmlFor='current-role' className='form-label fs-5 mt-3'>Current Role <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' id='current-role' placeholder='Current Role' />
                        <label htmlFor='working' className='form-label fs-5 mt-3'>Working Hospital <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='Work Place' id='working' />
                        <label htmlFor='experience' className='form-label fs-5 mt-3'>Year of Experience <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='In numbers' id='experience' />
                        <label htmlFor='doctor-id' className='form-label fs-5 mt-3'>Doctor ID <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' id='doctor-id' placeholder='Doctor ID' />
                        <label htmlFor='degree' className='form-label fs-5 mt-3'>Degree <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' id='degree' placeholder='Degree ex,. M.B.B.S, B.D.S,..' />
                    </div>
                </div>
                </div>
            }
            {
                role==='doctor' &&
                <div className="col-md-6 pt-3">
                <div className="card shadow ">
                            <div className="card-body">       
                        <label htmlFor='specialisation' className='form-label fs-5 mt-3'>Specialisation <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' id='specialisation' placeholder='Specialisation' />
                        <label htmlFor='university' className='form-label fs-5 mt-3'>University of study <span className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='University' id='university' />
                        <label className='form-label fs-5 mt-3'>Preferred Time <span className='text-danger'>*</span></label>
                        <div className="row">
                            <div className="col-md-6">
                        <label htmlFor='start' className='form-label fs-5 mt-1'>Starts <span className='text-danger'>*</span></label>
                        <input type="time" className='form-control' id='start' />
                            </div>
                            <div className="col-md-6">
                        <label htmlFor='end' className='form-label fs-5 mt-1'>Ends <span className='text-danger'>*</span></label>
                        <input type="time" className='form-control' id='end' />
                            </div>
                        </div>
                        <label htmlFor='clinic-address' className='form-label fs-5 mt-3'>Clinic Address <span className='text-danger'>*</span></label>
                        <textarea rows='3' className='form-control' id='clinic-address' placeholder='' ></textarea>

                    </div>
                </div>
                </div>
            }
            {(role==='client' || role=='doctor') &&
            <div className='container text-center'>
            <button className='btn btn-login my-5'>Sign up</button>
            </div>
             }
        </div>
    </div>
  )
}

export default Auth