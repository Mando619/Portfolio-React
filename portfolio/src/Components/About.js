import React from 'react';
import userData from './data';
import Header from './Header';
import Contact from './Contact';


const About = () => {
    return (
        <div>
            <Header name={userData.name} myContact={userData.myContact}></Header>
            <div className="about_container">
                <h2>{userData.aboutMe}</h2>
            </div>
            <Contact></Contact>
        </div>
    )
}

export default About;