import React from 'react';
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';
import HomePage from './HomePage'
import userData from './data';



const Starter = () => {
    return (
        <div className="start">
            <Header name={userData.name} myContact={userData.myContact}></Header>
            <HomePage name={userData.starterName} MyParagraph={userData.myInfo} myImage={userData.startImage} myLinks={userData.myLinks}></HomePage>
            <Projects projects={userData.projects}></Projects>
            <Contact contact={userData.myContact} ></Contact>
        </div>
    )
}

export default Starter;