import React from 'react';
import './footer.scss';

const Footer = (props) => {
    return (
        <footer>
            <p>&copy; {(new Date().getFullYear())} Sean Parmar</p>
        </footer>
    );
}

export default Footer;