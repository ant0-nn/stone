import {FirstNavBar, SecondNavBar} from "../assets/data/data.js";
import { Link } from "react-scroll";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {

    const handleWhatsAppClick = () => {
        const whatsappLink = `https://wa.me/+353852021268`;
        window.open(whatsappLink, '_blank');
    };

    return(
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__wrapper">
                    <div className="footer__intro">
                        <img src="/img/white-logo.svg" alt="logo" className="footer__logo"/>
                        <div className="footer__nav">
                            <ul className="footer__list">
                                {FirstNavBar.map(item => (
                                    <li key={item.id}>
                                        <Link   to={item.link.slice(1)}
                                                smooth={true}
                                                duration={1000} 
                                                className="footer__list__item">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <ul className="footer__list">
                                {SecondNavBar.map(item => (
                                    <li key={item.id}>
                                        <Link   to={item.link.slice(1)}
                                                smooth={true}
                                                duration={1000} 
                                                className="footer__list__item">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="footer__info">
                        <span className="footer__data">E-mail: pik.rud@gmail.com</span>
                        <span className="footer__data">Phone number: +39 3293958013</span>
                        <ImWhatsapp className="footer__whatsapp" onClick={handleWhatsAppClick}/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;