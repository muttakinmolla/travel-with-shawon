import React from 'react';
import NavBar from './NavBar/NavBar';
import TopBar from './Topbar/TopBar';

const Header = () => {
    return (
        <div>
            <TopBar></TopBar>
            <NavBar></NavBar>
        </div>
    );
};

export default Header;