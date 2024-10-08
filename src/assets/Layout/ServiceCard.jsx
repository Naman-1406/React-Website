import React from 'react'

const ServiceCard = (props) => {
  return (
    <>
     <div className="card servicescard border-0">
            <i className={props.icon} ></i>
            <div className="card-body">
                <h2>{props.title}</h2>
                <p>{props.paragraph}</p>
                <span>{props.more}</span>
            </div>
        </div>
    </>
  )
}

export default ServiceCard