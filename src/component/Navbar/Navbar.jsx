import React , {useState} from 'react'
import './Navbar.css'
import logo from '../../assert/image/logo.png'
import { NavLink, Link } from 'react-router-dom'
import Profile from '../Profile/Profile'

function Navbar() {
    const user=null
    const [onProfile,setOnProfile]=useState(false)
    const toggleProfile=()=>{
        setOnProfile(!onProfile)
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand mx-4" to="/">
                    <img src={logo} height="40px" />
                    <span className='logo-text'>Healthify Network</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link mx-4">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/consult" className="nav-link mx-4">Consult</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/pharmacy" className="nav-link mx-4">Pharmacy</NavLink>
                        </li>
                        <li className="nav-item">
                        {user==null?
                            <Link to='/auth' style={{textDecoration: 'none'}}>
                            <div  className="nav-link mx-4" style={{color:'#1385ae'}}>Login/Register</div>
                            </Link>
                        :   <div onClick={toggleProfile} class="nav-link mx-4 pointer" style={{color:'#1385ae'}}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg></div>
                        }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {onProfile && <Profile />}
    </div>
  )
}

export default Navbar