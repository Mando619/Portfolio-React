import React from 'react';
import { Link } from 'react-router-dom';
import userData from './data';

const Header = () => {
    return (
        <div>
            <div className="header_container">
                <Link to="/"><h2>{userData.name}</h2></Link>
                <nav>
                    <ul>
                        <li> <a href={`mailto:${userData.myContact}`}>Estrada.Mando7@gmail.com</a> </li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default Header;