import React, { useEffect } from 'react'
import ServiceData from '../assets/Layout/ServiceData'
import ServiceCard from '../assets/Layout/ServiceCard'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Service = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
  })
  return (
    <>
    <div className="container service" data-aos="fade-up">
        <h1 className='text-center'>Our Services</h1>
        <div className="row mx-0">
            {
                ServiceData.map((service)=>{
                    return(
                        <div className="col-lg-4 col-sm-6 servicecard" data-aos="fade-up">    
                        <ServiceCard title={service.title}
                          paragraph={service.paragraph}
                          icon={service.icon}
                          more={service.more}
                        />
                    </div>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default Service