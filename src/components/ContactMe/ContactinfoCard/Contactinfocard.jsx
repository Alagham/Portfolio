import React from 'react'
import "./ContactinfoCard.css"

const Contactinfocard = ({iconUrl:Icon, text}) => {
  return (
    <div className="contact-details-card">
        <div className="icon">
            <Icon className="icon-img" />
        </div>
        <p>{text}</p>
    </div>
  )
}

export default Contactinfocard