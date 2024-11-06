import React from 'react'
import "./ContactMe.css"
import ContactInfoCard from './ContactinfoCard/Contactinfocard'
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import ContactForm from './ContactForm/ContactForm';



const ContactMe = () => {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>
        <div className="contact-content">
            <div style={{flex:1}}>
                <ContactInfoCard
                iconUrl= { MdOutlineEmail }
                text = "hamzahalagbe27@gmail.com" 
                />
                <ContactInfoCard
                iconUrl= { FaGithub } 
                text = "https://github.com/" 
                />  
                <ContactInfoCard
                iconUrl= { FaPhone }
                text = "07046441783" 
                />
                
                
            </div>
            <div style={{flex:1}}></div>
            <ContactForm/>
        </div>
    </section>
  )
}

export default ContactMe