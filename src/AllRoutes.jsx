import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './screen/Home/Home'
import Consultation from './screen/Consultation/Consultation'
import Specialist from './screen/Specialist/Specialist'
import ChatBot from './screen/ChatBot/ChatBot'
import DoctorProfile from './screen/DoctorProfile/DoctorProfile'
import PatientList from './screen/PatientList/PatientList'
import Pharmacy from './screen/Pharmacy/Pharmacy'
import Auth from './screen/Auth/Auth'

const AllRoutes = () => {
    return ( 
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/consult' element={<Consultation />}/>
          <Route path='/consult/:id' element={<Specialist />}/>
          <Route path='/consult/bot' element={<ChatBot />}/>
          <Route path='/consult/:id/:doc' element={<DoctorProfile />}/>
          <Route path='/patient' element={<PatientList />}/>
          <Route path='/pharmacy' element={<Pharmacy />}/>
          <Route path='/auth' element={<Auth />}/>
      </Routes>
    )
  }
  
  export default AllRoutes