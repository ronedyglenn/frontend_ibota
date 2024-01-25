import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(){
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Index">Index</Link></li>
                <li><Link to="/Connexion">Connexion</Link></li>
            </ul>
        </nav>
    )
}
