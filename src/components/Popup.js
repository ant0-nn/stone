import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Popup = ({active, setActive}) => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const botToken = '6685068862:AAHl2iMKeXim6547T_QyU8FbMLRkaKIlgDA';
            const groupId = '-1001993672377';
    
            const formData = `
            📞 Запит на дзвінок!\n\nІм'я: ${name}\n\n📱 Номер телефону: ${phone}
            `;
    
            const message = encodeURIComponent(formData);
            const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${groupId}&text=${message}`;
    
            const response = await fetch(url, {
            method: 'POST',
            });

            if (response.ok) {
                setName("")
                setPhone("")
                setActive(false)
              } 
        } catch(e) {
            console.log(e);
        }
    }

    return(
        <section className={active ? "popup active" : "popup" } onClick={() => setActive(false)}>
            <div className="popup__block" onClick={(e) => e.stopPropagation()}>
                <h1 className="popup__title">Leave your details and we will contact you on WhatsApp</h1>
                <form className="popup__form" onSubmit={handleSubmit}>
                    <label className="popup__label">
                        Enter your name
                        <input 
                            type="text" 
                            className="popup__input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label className="popup__label">
                        Enter your number
                        <input 
                            type="tel" 
                            className="popup__input"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}/>
                    </label>
                    <button className="popup__btn" type="submit">Call!</button>
                </form>
                <AiOutlineClose onClick={() => setActive(false)} className="popup__close"/>
            </div>
        </section>
    )
}

export default Popup;