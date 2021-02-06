import React from 'react';
import userData from './data';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';




const Contact = () => {

    return (
        <div className="contact_container">
            <p>{userData.contactData}</p>
            <br></br>

            <div className="social_links">
                <ul>
                    <li>
                        <a href={`mailto:${userData.myContact}`}>
                            <FaEnvelope></FaEnvelope>
                        </a>
                    </li>
                    <li>
                        <a href={userData.myLinks[0].url}>
                            <FaGithub></FaGithub>
                        </a>
                    </li>
                    <li>
                        <a href={userData.myLinks[1].url}>
                            <FaLinkedin></FaLinkedin>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}



export default Contact;
