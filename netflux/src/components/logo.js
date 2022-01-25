import React from 'react';
import logo from "../style/img/logo.svg";

const Logo = (props) =>{
    return (
        <a href="/" className={ props.classes }>
            <img alt="#" src={ logo } width="80" />
        </a>
    )
};

Logo.defaultProps = {
    classes: "navbar-item"
}

export default Logo;