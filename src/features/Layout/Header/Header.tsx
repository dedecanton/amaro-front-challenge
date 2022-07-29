import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AmaroLogo from "../../../assets/AmaroLogo";
import CartIcon from "./CartIcon";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  
  const stickyHandler = () => {
    window.scrollY > 30 ? setIsScrolled(true) : setIsScrolled(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', stickyHandler)
  }, [])

  const handleLogoClick = () => {
    navigate('/')
  }
  const handleCartIconClick = () => {
    navigate('/cart')
  }

  return (
    <header>
      <div className={"header__container " + (isScrolled ? 'header__container-scrolled' : '')}>
        <div className="header__image" onClick={handleLogoClick}>
          <AmaroLogo />
        </div>
        <CartIcon onClick={handleCartIconClick}/>
      </div>
    </header>
  );
};

export default Header;
