import Icon21 from "../assets/img/21.jpg";
import Icon22 from "../assets/img/22.jpg";
import Icon23 from "../assets/img/23.jpg";
import Icon24 from "../assets/img/24.jpg";
import Icon25 from "../assets/img/25.jpg";
import Icon26 from "../assets/img/26.jpg";
import Icon27 from "../assets/img/27.jpg";
import Icon28 from "../assets/img/28.jpg";
import Icon29 from "../assets/img/29.jpg";
import Icon30 from "../assets/img/30.jpg";
import Icon31 from "../assets/img/31.jpg";
import Icon32 from "../assets/img/32.jpg";
import Icon33 from "../assets/img/33.jpg";
import Icon34 from "../assets/img/34.jpg";
import Icon35 from "../assets/img/35.jpg";
import Icon36 from "../assets/img/36.jpg";
import Icon37 from "../assets/img/37.jpg";
import Icon38 from "../assets/img/38.jpg";
import Icon39 from "../assets/img/39.jpg";
import Icon40 from "../assets/img/40.jpg";
import Icon41 from "../assets/img/41.jpg";
import Icon42 from "../assets/img/42.jpg";
import Icon43 from "../assets/img/43.jpg";

const FirstBlock = () => {
    return(
        <section className="first-block">
            <h2 className="first-block__title">INSTRUCTION</h2>
            <div className="first-block__first-wrapper">
                <div className="first-block__first-wrapper__first-block">
                    <img src={Icon21} alt="Icon21" loading="lazy" className="first-block__first-wrapper__first-block__img"/>
                    <img src={Icon22} alt="Icon22" loading="lazy" className="first-block__first-wrapper__first-block__img"/>
                </div>
                <div className="first-block__first-wrapper__second-block">
                    <img src={Icon23} alt="Icon23" loading="lazy" className="first-block__first-wrapper__second-block__img"/>
                    <img src={Icon24} alt="Icon24" loading="lazy" className="first-block__first-wrapper__second-block__img"/>
                    <img src={Icon25} alt="Icon25" loading="lazy" className="first-block__first-wrapper__second-block__img"/>
                </div>
                <h3 className="first-block__first-wrapper__title">
                    AVERAGE COST OF WORK
                </h3>
            </div>
            <div className="first-block__second-wrapper">
                <div className="first-block__second-wrapper__block">
                    <div className="first-block__second-wrapper__first-block">
                        <img src={Icon26} alt="Icon26" loading="lazy" className="first-block__second-wrapper__first-block__img"/>
                        <img src={Icon27} alt="Icon27" loading="lazy" className="first-block__second-wrapper__first-block__img"/>
                    </div>
                    <img src={Icon28} alt="Icon28" loading="lazy" className="first-block__second-wrapper__second-block"/>
                </div>
                <h3 className="first-block__second-wrapper__title">MARBLE COLUMNS</h3>
            </div>
            <div className="first-block__third-wrapper" id="bathroom">
                <div className="first-block__third-wrapper__first-block">
                    <img src={Icon29} alt="Icon29" loading="lazy" className="first-block__third-wrapper__first-block__img"/>
                    <img src={Icon30} alt="Icon30" loading="lazy" className="first-block__third-wrapper__first-block__img"/>
                </div>
                <div className="first-block__third-wrapper__second-block">
                    <img src={Icon31} alt="Icon31" loading="lazy" className="first-block__third-wrapper__second-block__img"/>
                    <img src={Icon32} alt="Icon32" loading="lazy" className="first-block__third-wrapper__second-block__img"/>
                    <img src={Icon33} alt="Icon33" loading="lazy" className="first-block__third-wrapper__second-block__img"/>
                </div>
                <h3 className="first-block__third-wrapper__title">STONE BATHROOMS</h3>
            </div>
            <div className="first-block__forth-wrapper">
                <div className="first-block__forth-wrapper__first-block">
                    <img src={Icon34} alt="Icon34" loading="lazy" className="first-block__forth-wrapper__first-block__img"/>
                    <img src={Icon35} alt="Icon35" loading="lazy" className="first-block__forth-wrapper__first-block__img"/>
                    <img src={Icon36} alt="Icon36" loading="lazy" className="first-block__forth-wrapper__first-block__img"/>
                </div>
                <div className="first-block__forth-wrapper__second-block">
                    <img src={Icon37} alt="Icon37" loading="lazy" className="first-block__forth-wrapper__second-block__img"/>
                    <div className="first-block__forth-wrapper__second-block__other">
                        <img src={Icon38} alt="Icon38" loading="lazy" className="first-block__forth-wrapper__second-block__other__img"/>
                        <img src={Icon39} alt="Icon39" loading="lazy" className="first-block__forth-wrapper__second-block__other__img"/>
                    </div>
                </div>
                <h3 className="first-block__forth-wrapper__title">LADDERS</h3>
            </div>
            <div className="first-block__fifth-wrapper" id="table">
                <div className="first-block__fifth-wrapper__block">
                    <img src={Icon40} alt="Icon40" loading="lazy" className="first-block__fifth-wrapper__block__img"/>
                    <img src={Icon41} alt="Icon41" loading="lazy" className="first-block__fifth-wrapper__block__img"/>
                    <img src={Icon42} alt="Icon42" loading="lazy" className="first-block__fifth-wrapper__block__img"/>
                    <img src={Icon43} alt="Icon43" loading="lazy" className="first-block__fifth-wrapper__block__img"/>
                </div>
                <h3 className="first-block__fifth-wrapper__title">TABLETOPS</h3>
            </div>
        </section>
    );
}

export default FirstBlock;