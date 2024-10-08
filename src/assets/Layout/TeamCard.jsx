import React from 'react'

const TeamCard = (props) => {
  return (
    <>
      <div className="card t-card mt-4 border-0 bg-light position-relative">
      <img src={props.image} />
        <ul className='t-icon position-absolute top-0 list-unstyled'>
          <li><i class="fa-brands fa-instagram"></i></li>
          <li><i class="fa-brands fa-facebook"></i></li>
          <li><i class="fa-brands fa-twitter"></i></li>
          <li><i class="fa-brands fa-linkedin-in"></i></li>
        </ul>
        <div className="card-body">
          <h3>{props.title}</h3>
          <p >{props.paragraph}</p>
        </div>
      </div>
    </>
  )
}

export default TeamCard