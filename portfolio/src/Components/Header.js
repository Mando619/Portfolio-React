import React from 'react';
import { Link } from 'react-router-dom';
import userData from './data';

const Header = () => {
    return (
        <div>
            <div className="header_container">
                <Link to="/index"><h2>{userData.name}</h2></Link>
                <nav>
                    <ul>
                        <li><Link to="/about">About</Link> </li>
                        <li> <a href={`mailto:${userData.myContact}`}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;