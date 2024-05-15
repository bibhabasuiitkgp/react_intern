import React from 'react';
import './styles.css'; // Importing the CSS file for styling

function Navbar() {
    return (
        <nav>
            <h4>Project</h4>
            <ul>
                <li><a href="header9.html">home</a></li>
                <li><a href="#">about us <i className="fas fa-chevron-down"></i></a></li>

                <li><a href="header9.html">projects</a></li>
                <li><a href="header9.html">news</a></li>
                <li><a href="header9.html">gallery</a></li>
                <li><a href="header9.html">blog</a></li>
                <li><a href="header9.html">contact</a></li>


            </ul>
        </nav>
    );
}

export default Navbar;
