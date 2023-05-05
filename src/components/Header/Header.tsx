import React from "react";
import dataTypes from "./data";
import "./style.scss";
const Header = ({ title }: dataTypes) => {
  return (
    <header className="header">
      <h2 className="header__title">{title}</h2>
    </header>
  );
};

export default Header;
