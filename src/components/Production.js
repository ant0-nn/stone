import Icon29 from "../assets/img/29.jpg";
import Icon90 from "../assets/img/90.jpg";
import Icon91 from "../assets/img/91.jpg";
import Icon92 from "../assets/img/92.jpg";
import Icon93 from "../assets/img/93.jpg";
import Icon94 from "../assets/img/94.jpg";
import Icon95 from "../assets/img/95.jpg";
import Icon96 from "../assets/img/96.jpg";
import Icon97 from "../assets/img/97.jpg";
import Icon98 from "../assets/img/98.jpg";

const ProductionBlock = () => {
    return(
        <section className="production">
            <div className="production__first-wrapper">
                <div className="production__first-wrapper__block">
                    <img src={Icon90} alt="Icon90" loading="lazy" className="production__first-wrapper__block__img"/>
                    <img src={Icon91} alt="Icon91" loading="lazy" className="production__first-wrapper__block__img"/>
                    <img src={Icon92} alt="Icon92" loading="lazy" className="production__first-wrapper__block__img"/>
                </div>
                <h3 className="production__first-wrapper__title">PRODUCTION</h3>
            </div>
            <div className="production__second-wrapper">
                <div className="production__second-wrapper__first-block">
                    <img src={Icon93} alt="Icon93" loading="lazy" className="production__second-wrapper__first-block__img"/>
                    <img src={Icon94} alt="Icon94" loading="lazy" className="production__second-wrapper__first-block__img"/>
                </div>
                <img src={Icon95} alt="Icon95" loading="lazy" className="production__second-wrapper__second-block"/>
                <div className="production__second-wrapper__third-block">
                    <div className="production__second-wrapper__third-block__first-block">
                        <img src={Icon96} alt="Icon96" loading="lazy" className="production__second-wrapper__third-block__first-block__img"/>
                        <img src={Icon97} alt="Icon97" loading="lazy" className="production__second-wrapper__third-block__first-block__img"/>
                    </div>
                    <div className="production__second-wrapper__third-block__second-block">
                        <img src={Icon29} alt="Icon29" loading="lazy" className="production__second-wrapper__third-block__second-block__img"/>
                        <img src={Icon98} alt="Icon29" loading="lazy" className="production__second-wrapper__third-block__second-block__img"/>
                    </div>
                </div>
                <h3 className="production__second-wrapper__title">ENGINEERING SOLUTIONS</h3>
            </div>
            <div className="production__third-wrapper" id="stone">
                <h2 className="production__third-wrapper__title">
                    Starpass stone
                </h2>
                <p className="production__third-wrapper__text">
                    Since 1998, Starpass Stone has been opening its doors to its customers. Over many years of experience, we have been able to establish ourselves as a reliable partner and a high-level professional. The main profile of the company is the production and selection of natural stone for the customer, the manufacture of natural stone products of any style and degree of complexity, fireplaces, barbecues, countertops. Development of interior design, facades, fireplaces, floors with further author's support and development of the design. Your personal guide to choosing a stone WhatsApp +380674052765 Petro Rudenko Today, Starpass Stone provides a full range of services - from measurements to turnkey works and further maintenance.
                </p>
            </div>
        </section>
    )
}

export default ProductionBlock;