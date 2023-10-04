import { AiOutlineClose } from "react-icons/ai";
import Icon99 from "../assets/img/99.jpg";

const Popup = ({active, setActive}) => {
    return(
        <section className={active ? "popup active" : "popup"} onClick={() => setActive(false)}>
            <div className="popup__block" onClick={(e) => e.stopPropagation()}>
                <div className="popup__wrapper">
                    <div className="popup__wrapper__intro">
                        <h2 className="popup__wrapper__title">Call us back</h2>
                        <div className="popup__wrapper__contact-block">
                            <label className="popup__wrapper__contact-block__label">Phone number:</label>
                            <h3 className="popup__wrapper__contact-block__first-number" >+380674052765</h3>
                            <h3 className="popup__wrapper__contact-block__second-number">+353852021263</h3>
                        </div>
                        <div className="popup__wrapper__info-block">
                            <h2 className="popup__wrapper__info">Or send us an email</h2>
                            <h3 className="popup__wrapper__email">E-mail: pik.rud@gmail.com</h3>
                        </div>
                    </div>
                    <img src={Icon99} alt="Icon99" className="popup__img"/>
                </div>
                <AiOutlineClose onClick={() => setActive(false)} className="popup__close"/>
            </div>
        </section>
    )
}

export default Popup;