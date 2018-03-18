import React from 'react';
import './Header.css';
import Logo from '../../assets/img/teatrix-logo.png';


const header = (props) => {
    return (
        <div className="Header">
            <div className="Header__img">
                <img src={Logo} alt='logo'/>
            </div>
            <p>Studio Teatrix</p>
            <input type="button" value="Logout" className='Header__btn' onClick={props.handleLogout}/>
        </div>
    )
};

export default header;