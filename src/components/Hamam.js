import Icon61 from "../assets/img/61.jpg";
import Icon62 from "../assets/img/62.jpg";
import Icon63 from "../assets/img/63.jpg";
import Icon64 from "../assets/img/64.jpg";
import Icon65 from "../assets/img/65.jpg";
import Icon66 from "../assets/img/66.jpg";
import Icon67 from "../assets/img/67.jpg";
import Icon68 from "../assets/img/68.jpg";
import Icon69 from "../assets/img/69.jpg";
import Icon70 from "../assets/img/70.jpg";

const HamamBlock = () => {
    return (
        <section className="hamam" id="hamam">
             <div className="hamam__first-wrapper">
                <h2 className="hamam__first-wrapper__title">
                    WHAT IS A HAMMAM ? PECULIARITIES OF TURKISH BATH
                </h2>
                <h3 className="hamam__first-wrapper__subtitle">
                    Hammam - health benefits
                </h3>
                <p className="hamam__first-wrapper__text">
                    Turkish bath is useful for health and at the same time allows you to fully relax and rest. Visiting a Turkish bath is good for blood vessels, skin, respiratory system. It has a calming effect and relieves stress. It is a place of rest and relaxation. The construction of hamam is often chosen by those who are not suitable for sauna or Russian bath There are no high temperatures and therefore there are no contraindications for Turkish bath It is not only washing procedures and relaxation in the bath. Hamam is a whole ritual. It is a separate culture The popularity of hamam in recent decades in our country is constantly growing . And it is becoming more and more popular to have your own hamam at home.
                </p>
            </div>
            <div className="hamam__second-wrapper">
                <h2 className="hamam__second-wrapper__title">
                    HAMMAM CONSTRUCTION
                </h2>
                <p className="hamam__second-wrapper__text">
                    We carry out construction of Turkish baths for personal or commercial use. Working with the client, we offer a high quality product that will serve you for decades We use premium materials and advanced equipment. Entrust the construction of a Turkish bath to professionals!
                </p>
            </div>
            <div className="hamam__third-wrapper">
                <h3 className="hamam__third-wrapper__title">Portfolio</h3>
                <div className="hamam__third-wrapper__block">
                    <img src={Icon61} alt="Icon61" loading="lazy" className="hamam__third-wrapper__block__img"/>
                    <img src={Icon62} alt="Icon62" loading="lazy" className="hamam__third-wrapper__block__img"/>
                    <img src={Icon63} alt="Icon63" loading="lazy" className="hamam__third-wrapper__block__img"/>
                </div>  
                <h2 className="hamam__third-wrapper__info">MOSAIC IN HAMMAM</h2>
            </div>
            <div className="hamam__fourth-wrapper">
                <div className="hamam__fourth-wrapper__block">
                    <img src={Icon64} alt="Icon64" loading="lazy" className="hamam__fourth-wrapper__block__img"/>
                    <img src={Icon65} alt="Icon65" loading="lazy" className="hamam__fourth-wrapper__block__img"/>
                    <img src={Icon66} alt="Icon66" loading="lazy" className="hamam__fourth-wrapper__block__img"/>
                </div>
                <h3 className="hamam__fourth-wrapper__title">HAMMAM IN MOSAIC WITH ERGONOMIC BENCHES</h3>
            </div>
            <div className="hamam__fifth-wrapper">
                <img src={Icon67} alt="Icon67" loading="lazy" className="hamam__fifth-wrapper__img"/>
                <h3 className="hamam__fifth-wrapper__title">HAMMAM IN MARBLE</h3>
            </div>
            <div className="hamam__sixth-wrapper">
                <div className="hamam__sixth-wrapper__first-block">
                    <img src={Icon68} alt="Icon68" loading="lazy" className="hamam__sixth-wrapper__first-block__img"/>
                    <div className="hamam__sixth-wrapper__first-block__info">
                        <h3 className="hamam__sixth-wrapper__first-block__title">
                            HAMMAM EQUIPMENT
                        </h3>
                        <h3 className="hamam__sixth-wrapper__first-block__subtitle">
                            Steam generator EOS STEAMROCK PREMIUM 9,0/12,0/15,0/18,0 kvk
                        </h3>
                    </div>
                </div>
                <div className="hamam__sixth-wrapper__second-block">
                    <div className="hamam__sixth-wrapper__second-block__imgs">
                        <img src={Icon69} alt="Icon69" loading="lazy" className="hamam__sixth-wrapper__second-block__imgs__img"/>
                        <img src={Icon70} alt="Icon70" loading="lazy" className="hamam__sixth-wrapper__second-block__imgs__img"/>
                    </div>
                    <h3 className="hamam__sixth-wrapper__second-block__title">Steam generator Sawo STN - 120 DFP SST</h3>
                </div>
            </div>
        </section>
    );
}

export default HamamBlock;