import React, { useEffect } from 'react'
import TeamCard from '../assets/Layout/TeamCard'
import TeamData from '../assets/Layout/TeamData'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Team = () => {
  useEffect(() => {
    Aos.init(({ duration: 1000 }))
  }, [])
  return (
    <>

      <div className="container my-5 teamsdata" data-aos="fade-up">
        <h1 className='text-center'>Our Team</h1>
        <p className='text-center team-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima <br></br>neque tempora reiciendis.</p>
        <div className="row mx-0 mx-0">
          {
            TeamData.map((element) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6  teamcards" data-aos="fade-up">
                  <TeamCard title={element.title}
                    paragraph={element.paragraph}
                    image={element.image}
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

export default Team