import { useState, useEffect } from "react";
import {FirstNavBar, SecondNavBar} from "../assets/data/data.js";
import Logo from "../assets/img/black-logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    const handleMobileNavClick = () => {
        setIsOpen(false);
        setTimeout(() => {
        }, 300);
    };

    return(
        <header className="header">
            <div className="header__container">
                <div className="header__wrapper">
                    <ul className="header__nav-bar">
                        {FirstNavBar.map(item => (
                            <li key={item.id}>
                                <Link to={item.link.slice(1)}
                                        smooth={true}
                                        duration={1000} 
                                        className="header__nav-bar__item">
                                        {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <img src={Logo} alt="logo" className="header__img" />
                    <ul className="header__nav-bar">
                        {SecondNavBar.map(item => (
                            <li key={item.id}>
                                <Link to={item.link.slice(1)}
                                        smooth={true}
                                        duration={1000} 
                                        className="header__nav-bar__item">
                                        {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className={`header__mobile-nav ${isOpen ? "active" : ""}`}>
                        <ul className="header__nav-bar-phone">
                            {FirstNavBar.map(item => (
                                <li key={item.id}>
                                    <Link to={item.link.slice(1)}
                                          smooth={true}
                                          duration={1000} 
                                          className="header__nav-bar-phone__item"
                                          onClick={() => handleMobileNavClick(item.link)}>
                                          {item.name}
                                    </Link>
                                </li>
                            ))}
                            {SecondNavBar.map(item => (
                                <li key={item.id}>
                                    <Link to={item.link.slice(1)}
                                          smooth={true}
                                          duration={1000} 
                                          className="header__nav-bar-phone__item"
                                          onClick={() => handleMobileNavClick(item.link)}>
                                          {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                <div onClick={() => setIsOpen(!isOpen)} className="header__btn">
                        {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;