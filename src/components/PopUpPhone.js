import { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const PopUpPhone = () => {
    const [isPhonePopupOpen, setIsPhonePopupOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFormSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      const phonePattern = /^\+?\d{10,12}$/;
  
      if (!phonePattern.test(phoneNumber)) {
        setIsSubmitting(false);
        return;
      }
  
      try {
        const botToken = '6685068862:AAHl2iMKeXim6547T_QyU8FbMLRkaKIlgDA';
        const groupId = '-1001993672377';
  
        const formData = `
          📞 Запит на дзвінок!\n\n📱 Номер телефону: ${phoneNumber}
        `;
  
        const message = encodeURIComponent(formData);
        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${groupId}&text=${message}`;
  
        const response = await fetch(url, {
          method: 'POST',
        });
  
        if (response.ok) {
          setIsSubmitting(false);
          setIsPhonePopupOpen(false);
        } else {
          setIsSubmitting(false);
        }
      } catch (error) {
        alert('Помилка сервера.');
        setIsSubmitting(false);
      }
    };

    return(
      <div>
        <div className="pop-up-phone"
            onClick={() => setIsPhonePopupOpen(!isPhonePopupOpen)}>
            {isPhonePopupOpen ? <AiOutlineClose/> : <AiFillPhone/>}
        </div>
        {isPhonePopupOpen && (
        <div className="phonePopUp-container">
          <h2 className="phonePopUp-container--title">
            Leave your phone number and we will contact you on WhatsApp
          </h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type="tel"
              placeholder="Your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <button type="submit" disabled={isSubmitting}>
              Call!
            </button>
          </form>
          <p className="phonePopUp-container--text">
            Or you can call us at this phone number:<br/>
            <a href="https://wa.me/+353852021268">+353 (85) 202 12 68</a>
          </p>
        </div>
      )}
      </div>
    );
};

export default PopUpPhone;