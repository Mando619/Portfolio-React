import React from 'react';
import userData from './data';


const Home = () => {

    return (
        <div>
            <div className="home_container">
                <div className="home_head_wrapper">
                    <p>{userData.aboutMe}</p>
                </div>
                <div className="image_container">
                    <img src={userData.startImage} alt="Author"></img>
                </div>
            </div>
        </div>
    );
}

export default Home;