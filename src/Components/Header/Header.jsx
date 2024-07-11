// src/Components/Header/Header.jsx
import React, { useState } from 'react';
import './Header.css';

const Header = ({ userName, onLogout }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="header-container">
            <div className="dropdown">
                <button className="dropbtn" onClick={toggleDropdown}>
                   {userName}<span className="arrow">&#9660;</span>
                </button>
                {dropdownVisible && (
                    <div className="dropdown-content">
                        {/* <div className="dropdown-item">{userName}</div> */}
                        <div className="dropdown-item" onClick={onLogout}>Logout</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
