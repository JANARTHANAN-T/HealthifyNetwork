import React from 'react'
import './Profile.css'

function Profile() {
  const close =()=>{
    document.getElementById('profile').classList.remove('show');
    document.getElementById('profile').classList.add('hide');
  }
  return (
    <div id='profile' className='vh-100 profile bg-dark text-light show'>
    <div className='d-flex justify-content-between align-items-center'>
       <div className='mx-4 mt-3'>
            <h5>My Profile</h5>
       </div>
       <div onClick={close} className="mx-2 pointer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg></div>
    </div>
        <div className='m-4'>
        <p>Name: Janarthanan T</p>
        <p>Gender: Male</p>
        <p>Blood Group: O+</p>
        <p>Age: 19</p>
        </div>
        <button className='btn btn-outline-light m-4  '>LogOut</button>
    </div>
  )
}

export default Profile