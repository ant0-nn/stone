import { useState, useEffect } from "react";
import Popup from "./Popup";

const Main = () => {
    const [modalActive, setModalActive] = useState(false)

    useEffect(() => {
        if (modalActive) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [modalActive]);
    return(
        <section className="main">
            <h1 className="main__title">Natural stone in design</h1>
            <button className="main__btn"
            onClick={() => setModalActive(true)}>
                CONTACT US
            </button>
            <Popup active={modalActive} setActive={setModalActive}/>
        </section>
    )
}

export default Main;