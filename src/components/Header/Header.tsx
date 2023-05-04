import React from 'react';
import data from './data.json';
import dataTypes from './data';
import './style.scss';
const Header = ({ title }: dataTypes) => {
    return (
        <div className="header">
            <h2 className="header__title">{data.title}</h2>
        </div>
    );
}

export default Header;