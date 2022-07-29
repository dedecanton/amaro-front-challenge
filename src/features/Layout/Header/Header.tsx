import React from "react";
import { useNavigate } from "react-router-dom";
import AmaroLogo from "../../../assets/AmaroLogo";
import CartIcon from "./CartIcon";
import "./Header.scss";

const Header = () => {

  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/')
  }
  const handleCartIconClick = () => {
    navigate('/cart')
  }

  return (
    <header>
      <div className="header__container">
        <div className="header__image" onClick={handleLogoClick}>
          <AmaroLogo />
        </div>
        <CartIcon onClick={handleCartIconClick}/>
      </div>
    </header>
  );
};

export default Header;
