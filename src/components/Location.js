import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const Location = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const botToken = '6685068862:AAHl2iMKeXim6547T_QyU8FbMLRkaKIlgDA';
            const groupId = '-1001993672377';
    
            const formData = `
            📞 Запит на зворотній звʼязок!\n\nІм'я: ${name}\n\n📱 Номер телефону: ${phone}
            `;
    
            const message = encodeURIComponent(formData);
            const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${groupId}&text=${message}`;
    
            const response = await fetch(url, {
            method: 'POST',
            });

            if (response.ok) {
                setName("")
                setPhone("")
              } 
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <section className="location">
            <div className="location__block">
                <img src="/img/black-logo.png"
                     alt="black-logo" 
                     className="location__logo"/>
                <form onSubmit={handleSubmit} className="location__form">
                    <label className="location__label">
                        Enter your name
                        <input 
                            type="text" 
                            className="location__input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label className="location__label">
                        Enter your number
                        <input 
                            type="tel" 
                            className="location__input"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}/>
                    </label>
                    <button className="location__btn" type="submit">Submit a request!</button>
                </form>
            </div>
            <div className="location__other">
                <h3>Starpass limited</h3>
                <div className="location__decor">
                    <FaLocationDot className="location__decor__icon"/>
                    <span className="location__decor__title">
                        Address
                    </span>
                </div>
                <p className="location__address">
                77 camden street lower Dublin 2, D02 XE80
                </p>
                <div className="location__decor">
                    <BsFillTelephoneOutboundFill className="location__decor__icon"/>
                    <span className="location__decor__title">
                        Phone
                    </span>
                </div>
                <div className="location__number">
                    <span>
                        +353 (85) 202 1268
                    </span>
                    <span>
                        +39 (32) 9395 8013
                    </span>
                    <span>
                        +380 (67) 405 2765 (WhatsApp)
                    </span>
                </div>
                <span className="location__email">E-mail: starpass.it@gmail.com</span>
            </div>
        </section>
    )
}

export default Location