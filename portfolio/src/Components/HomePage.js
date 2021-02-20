import React from 'react';
import userData from './data';
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';
//import { DiJavaScript, DiMongodb, DiMysql } from 'react-icons';

const Home = () => {

    return (
        <div>
            <div className="home_container">
                <div className="home_head_wrapper">
                    <p>{userData.aboutMe}</p>
                    <div className="skills_column">
                        <h3>Skills</h3>
                        <i className="devicon-javascript-plain"></i>
                        <i className="devicon-mongodb-plain-wordmark"></i>
                        <FaReact></FaReact>
                        <i className="devicon-mysql-plain-wordmark"></i>
                        <FaNodeJs></FaNodeJs>
                        <FaHtml5></FaHtml5>
                        <FaCss3></FaCss3>
                    </div>
                </div>
                <div className="image_container">
                    <img src={userData.startImage} alt="Author"></img>
                </div>
            </div>
        </div>
    );
}

export default Home;