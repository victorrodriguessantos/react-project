import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <h1> Menu </h1>
            <div>
                <ul>
                    <Link to="/"><li> Usuarios </li></Link>
                    <Link to="/posts"><li> Postagens </li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;