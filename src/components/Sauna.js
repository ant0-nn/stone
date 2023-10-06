import Icon71 from "../assets/img/71.jpg";
import Icon72 from "../assets/img/72.jpg";
import Icon73 from "../assets/img/73.jpg";
import Icon74 from "../assets/img/74.jpg";
import Icon75 from "../assets/img/75.jpg";
import Icon76 from "../assets/img/76.jpg";
import Icon77 from "../assets/img/77.jpg";
import Icon78 from "../assets/img/78.jpg";
import Icon79 from "../assets/img/79.jpg";
import Icon80 from "../assets/img/80.jpg";
import Icon81 from "../assets/img/81.jpg";
import Icon82 from "../assets/img/82.jpg";
import Icon83 from "../assets/img/83.jpg";
import Icon84 from "../assets/img/84.jpg";
import Icon85 from "../assets/img/85.jpg";
import Icon86 from "../assets/img/86.jpg";
import Icon87 from "../assets/img/87.jpg";
import Icon88 from "../assets/img/88.jpg";
import Icon89 from "../assets/img/89.jpg";

const SaunaBlock = () => {
    return(
        <section className="sauna" id="sauna">
            <div className="sauna__first-wrapper">
                <h2 className="sauna__first-wrapper__title">SAUNAS </h2>
                <p className="sauna__first-wrapper__text">
                What is sauna?<br/>Sauna originated from the modern Finnish sauna and is now widespread all over the world. It can be built inside an apartment building, in the basement, inside a townhouse or a cottage. It can be a separate room inside the apartment, an annex to the house, a separate building on the plot. Saunas are present in gyms - most often it is a dry-air sauna, its effect allows people to lose excess weight faster, at the same time, having a comfortable temperature for everyone, such a sauna does not allow overheating.
                </p>
            </div>
            <div className="sauna__second-wrapper">
                <h2 className="sauna__second-wrapper__title">Portfolio</h2>
                <img src={Icon71} alt="Icon71" className="sauna__second-wrapper__img"/>
            </div>
            <div className="sauna__third-wrapper">
                <div className="sauna__third-wrapper__first-block">
                    <img src={Icon72} alt="Icon72" className="sauna__third-wrapper__first-block__img"/>
                    <img src={Icon73} alt="Icon73" className="sauna__third-wrapper__first-block__img"/>
                    <img src={Icon74} alt="Icon74" className="sauna__third-wrapper__first-block__img"/>
                </div>
                <div className="sauna__third-wrapper__second-block">
                    <img src={Icon75} alt="Icon75" className="sauna__third-wrapper__second-block__img"/>
                    <img src={Icon76} alt="Icon76" className="sauna__third-wrapper__second-block__img"/>
                    <img src={Icon77} alt="Icon77" className="sauna__third-wrapper__second-block__img"/>
                    <img src={Icon78} alt="Icon78" className="sauna__third-wrapper__second-block__img"/>
                </div>
                <h3 className="sauna__third-wrapper__title">FINNISH STEAM ROOM</h3>
            </div>
            <div className="sauna__fourth-wrapper">
                <div className="sauna__fourth-wrapper__block">
                    <img src={Icon79} alt="Icon79" className="sauna__fourth-wrapper__block__img"/>
                    <img src={Icon80} alt="Icon80" className="sauna__fourth-wrapper__block__img"/>
                    <img src={Icon81} alt="Icon81" className="sauna__fourth-wrapper__block__img"/>
                </div>
                <h3 className="sauna__fourth-wrapper__title">
                    FINNISH STEAM LIGHTING OF SALT AND BENCHES
                </h3>
            </div>
            <div className="sauna__fifth-wrapper">
                <div className="sauna__fifth-wrapper__block">
                    <img src={Icon82} alt="Icon82" className="sauna__fifth-wrapper__block__img"/>
                    <img src={Icon83} alt="Icon83" className="sauna__fifth-wrapper__block__img"/>
                    <img src={Icon84} alt="Icon84" className="sauna__fifth-wrapper__block__img"/>
                    <img src={Icon85} alt="Icon85" className="sauna__fifth-wrapper__block__img"/>
                </div>
                <h3 className="sauna__fifth-wrapper__title">
                    SENIOR ROOMS
                </h3>
            </div>
            <div className="sauna__sixth-wrapper">
                <div className="sauna__sixth-wrapper__block">
                    <img src={Icon86} alt="Icon86" className="sauna__sixth-wrapper__block__img"/>
                    <img src={Icon87} alt="Icon87" className="sauna__sixth-wrapper__block__img"/>
                </div>
                <h3 className="sauna__sixth-wrapper__title">HUMPBACK</h3>
            </div>
            <div className="sauna__seventh-wrapper">
                <div className="sauna__seventh-wrapper__block">
                    <img src={Icon88} alt="Icon88" className="sauna__seventh-wrapper__block__img"/>
                    <img src={Icon89} alt="Icon89" className="sauna__seventh-wrapper__block__img"/>
                </div>
                <h3 className="sauna__seventh-wrapper__title">
                    SAUNA EQUIPMENT
                </h3>
            </div>
        </section>
    );
}

export default SaunaBlock;