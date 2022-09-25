import React from 'react'
import './Home.css'
import bannerdoctors from '../../assert/image/banner-doctors.png'
import icon1 from '../../assert/image/icon-1.png'
import icon2 from '../../assert/image/icon-2.png'
import icon3 from '../../assert/image/icon-3.png'
import icon4 from '../../assert/image/icon-4.png'
import icon5 from '../../assert/image/icon-5.png'
import icon6 from '../../assert/image/icon-6.png'
import specility from '../../assert/image/specility.png'
import choosedoc from '../../assert/image/choosedoc-1.png'
import doconline from '../../assert/image/doc-online1.png'
import buymedicine from '../../assert/image/buy-medicine.png'
import { NavLink } from 'react-router-dom'


function Home() {
  return (
    <div>
    {/* Landing Page */}
      <div className="landing-page row px-5 pt-5 d-flex align-items-center mx-0">
        <div className="col-md-6 ">
          <div >
            <div className='heading-1'>The right care, is wherever you are.</div>
            <div className='heading-2'>Consult India’s Top Doctors Online, Safely From Home.</div>
            <div className='heading-1'>Starting at <span className='batch'> ₹125</span></div>
            <NavLink to="/consult" className='btn btn-1 '>Consult Now</NavLink>
          </div>
        </div>
        <div className="col-md-6">
          <img className='img-fluid hidden-img mx-auto' src={bannerdoctors}  alt="" />
        </div>
      </div>
      {/* Why page */}
      <div className='container'>
        <div className='heading-3 ms-2 mt-5 p-5 '>Why consult online on Healthify Network</div>
        <div className="row">
          <div className="col-lg-6">
              <div className='row d-flex align-items-center justify-content-center p-5'>
                <div className='col-sm-2'>
                  <img src={icon1} className="icon" alt="" />
                </div>
                <div className='col-sm-10 px-4'>
                  <div className='heading-1'>Convenience</div>
                  <p>Most patients prefer online consultations due to the easy and convenient process involved.</p>
                </div>
              </div>
          </div>
          <div className="col-lg-6">
              <div className='row d-flex align-items-center justify-content-center p-5'>
                <div className='col-sm-2'>
                  <img src={icon2} className="icon" alt="" />
                </div>
                <div className='col-sm-10 px-4'>
                  <div className='heading-1'>Accessibility</div>
                  <p>With 30+ specialities, 4000+ Doctors and partnerships with more than 600 renowned hospitals across the nation.</p>
                </div>
              </div>
          </div>
          <div className="col-lg-6">
              <div className='row d-flex align-items-center justify-content-center p-5'>
                <div className='col-sm-2'>
                  <img src={icon3} className="icon" alt="" />
                </div>
                <div className='col-sm-10 px-4'>
                  <div className='heading-1'>Security and privacy</div>
                  <p>Since online consultations in India are still picking up, it comes with popular belief that your medical information</p>
                </div>
              </div>
          </div>
          <div className="col-lg-6">
              <div className='row d-flex align-items-center justify-content-center p-5'>
                <div className='col-sm-2'>
                  <img src={icon4} className="icon" alt="" />
                </div>
                <div className='col-sm-10 px-4'>
                  <div className='heading-1'>Complete confidentiality</div>
                  <p>Our intuitive platform facilitates a quick online doctor chat about any concern, with complete confidentiality.</p>
                </div>
              </div>
          </div>
          <div className="col-lg-6">
              <div className='row d-flex align-items-center justify-content-center p-5'>
                <div className='col-sm-2'>
                  <img src={icon5} className="icon" alt="" />
                </div>
                <div className='col-sm-10 px-4'>
                  <div className='heading-1'>Certified Online Doctors</div>
                  <p>We have a broad network of top specialized doctors, with over 10 years of experience to provide you with quality care.</p>
                </div>
              </div>
          </div>
          <div className="col-lg-6">
              <div className='row d-flex align-items-center justify-content-center p-5'>
                <div className='col-sm-2'>
                  <img src={icon6} className="icon" alt="" />
                </div>
                <div className='col-sm-10 px-4'>
                  <div className='heading-1'>Affordability</div>
                  <p>Online consultations help you save money since it costs a fraction of the price compared to physically visiting a doctor.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      {/* how to use page */}
      <div className='container'>
      <div className='heading-3 ms-2 mt-5 p-5 '>How does an online doctor consultation work</div>
      <div className='row d-flex align-items-center justify-content-center px-5 py-2'>
        <div className="col-sm-2">
          <img src={specility} className="icon" alt="" />
        </div>
        <div className='col-sm-10 px-4'>
            <div className='heading-1'>Choose a speciality</div>
            <p>Choose a specialty based on the medical condition you have. If you are unsure, you can consult with a general physician to guide you through your health condition.</p>
        </div>
      </div>
      <div className='row d-flex align-items-center justify-content-center px-5 py-2'>
        <div className="col-sm-2">
          <img src={choosedoc} className="icon" alt="" />
        </div>
        <div className='col-sm-10 px-4'>
            <div className='heading-1'>Choose your doctor</div>
            <p>Choose your doctor based on your preferences. Few parameters you can consider are the years of experience, qualification, languages they speak, hospitals they work in, and the location they are based out of.</p>
        </div>
      </div>
      <div className='row d-flex align-items-center justify-content-center px-5 py-2'>
        <div className="col-sm-2">
          <img src={doconline} className="icon" alt="" />
        </div>
        <div className='col-sm-10 px-4'>
            <div className='heading-1'>Talk to a doctor online</div>
            <p>Consult a doctor online either through chat, audio call, or video call and address your health problems. Apart from medical advice, the doctor will also give lifestyle tips for your condition.</p>
        </div>
      </div>
      <div className='row d-flex align-items-center justify-content-center px-5 py-2'>
        <div className="col-sm-2">
          <img src={buymedicine} className="icon" alt="" />
        </div>
        <div className='col-sm-10 px-4'>
            <div className='heading-1'>Buy medicines online</div>
            <p>You can buy medicines online through our app and get them delivered to your doorstep, all without you having to step out of home.</p>
        </div>
      </div>
      </div>
      {/* contact */}

    </div>
  )
}

export default Home