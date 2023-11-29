import Icon44 from "../assets/img/44.jpg";
import Icon45 from "../assets/img/45.jpg";
import Icon46 from "../assets/img/46.jpg";
import Icon47 from "../assets/img/47.jpg";
import Icon48 from "../assets/img/48.jpg";
import Icon49 from "../assets/img/49.jpg";
import Icon50 from "../assets/img/50.jpg";
import Icon51 from "../assets/img/51.jpg";
import Icon52 from "../assets/img/52.jpg";
import Icon53 from "../assets/img/53.jpg";
import Icon54 from "../assets/img/54.jpg";
import Icon55 from "../assets/img/55.jpg";
import Icon56 from "../assets/img/56.jpg";
import Icon57 from "../assets/img/57.jpg";
import Icon58 from "../assets/img/58.jpg";
import Icon59 from "../assets/img/59.jpg";
import Icon60 from "../assets/img/60.jpg";

const SecondBlock = () => {
    return(
        <section className="second-block">
            <div className="second-block__first-wrapper" id="fireplaces">
                <div className="second-block__first-wrapper__block">
                    <img src={Icon44} alt="Icon44" loading="lazy" className="second-block__first-wrapper__block__img"/>
                    <img src={Icon45} alt="Icon45" loading="lazy" className="second-block__first-wrapper__block__img"/>
                    <img src={Icon46} alt="Icon46"loading="lazy" className="second-block__first-wrapper__block__img"/>
                </div>
                <h3 className="second-block__first-wrapper__title">FIREPLACES</h3>
            </div>
            <div className="second-block__second-wrapper">
                <div className="second-block__second-wrapper__block">
                    <img src={Icon47} alt="Icon47" loading="lazy" className="second-block__second-wrapper__block__img"/>
                    <img src={Icon48} alt="Icon48" loading="lazy" className="second-block__second-wrapper__block__img"/>
                    <img src={Icon49} alt="Icon49" loading="lazy" className="second-block__second-wrapper__block__img"/>
                </div>
                <img src={Icon50} alt="Icon50" loading="lazy" className="second-block__second-wrapper__img"/>
                <h3 className="second-block__second-wrapper__title">ELECTRIC FIREPLACES</h3>
            </div>
            <div className="second-block__third-wrapper">
                <div className="second-block__third-wrapper__first-block">
                    <img src={Icon51} alt="Icon51" loading="lazy" className="second-block__third-wrapper__first-block__img"/>
                    <img src={Icon52} alt="Icon52" loading="lazy" className="second-block__third-wrapper__first-block__img"/>
                    <img src={Icon53} alt="Icon53" loading="lazy" className="second-block__third-wrapper__first-block__img"/>
                </div>
                <div className="second-block__third-wrapper__second-block">
                    <img src={Icon54} alt="Icon54" loading="lazy" className="second-block__third-wrapper__second-block__img"/>
                    <img src={Icon55} alt="Icon55" loading="lazy" className="second-block__third-wrapper__second-block__img"/>
                    <img src={Icon56} alt="Icon56" loading="lazy" className="second-block__third-wrapper__second-block__img"/>
                </div>
                <h3 className="second-block__third-wrapper__title">BIO FIREPLACES</h3>
            </div>
            <div className="second-block__fourth-wrapper">
                <div className="second-block__fourth-wrapper__block">
                    <img src={Icon57} alt="Icon57" loading="lazy" className="second-block__fourth-wrapper__block__img"/>
                    <img src={Icon58} alt="Icon58" loading="lazy" className="second-block__fourth-wrapper__block__img"/>
                    <img src={Icon59} alt="Icon59" loading="lazy" className="second-block__fourth-wrapper__block__img"/>
                    <img src={Icon60} alt="Icon60" loading="lazy" className="second-block__fourth-wrapper__block__img"/>
                </div>
                <h3 className="second-block__fourth-wrapper__title">BBQ</h3>
            </div>
        </section>
    );
}

export default SecondBlock;