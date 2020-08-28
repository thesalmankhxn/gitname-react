import React from 'react';
import propTypes from 'prop-types';

import "./NavBar.scss";

const NavBar = ({ icon, title}) => {


return (
    <div className="navbar">
        <h1>
            <i className={icon}></i>
            {title}
        </h1>
    </div>
);
}

NavBar.defaultProps = {
    title: 'GitName',
    icon: 'fab fa-github'
};

NavBar.propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string.isRequired
};

export default NavBar;
