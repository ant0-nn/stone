import Icon1 from "../assets/img/1.jpg";
import Icon2 from "../assets/img/2.jpg";
import Icon3 from "../assets/img/3.jpg";
import Icon4 from "../assets/img/4.jpg";
import Icon5 from "../assets/img/5.jpg";
import Icon6 from "../assets/img/6.jpg";
import Icon7 from "../assets/img/7.jpg";
import Icon8 from "../assets/img/8.jpg";
import Icon9 from "../assets/img/9.jpg";
import Icon10 from "../assets/img/10.jpg";
import Icon11 from "../assets/img/11.jpg";
import Icon12 from "../assets/img/12.jpg";
import Icon13 from "../assets/img/13.jpg";
import Icon14 from "../assets/img/14.jpg";
import Icon15 from "../assets/img/15.jpg";
import Icon16 from "../assets/img/16.jpg";
import Icon17 from "../assets/img/17.jpg";
import Icon18 from "../assets/img/18.jpg";
import Icon19 from "../assets/img/19.jpg";
import Icon20 from "../assets/img/20.jpg";
import Video1 from "../assets/video/2023-10-04 20-52-27.mp4";
import Video2 from "../assets/video/2023-10-04 20-52-45.mp4";

const About = () => {
    return(
        <section className="about">
            <div className="about__first-block">
                <h2 className="about__title">Development of design projects and constructive</h2>
                <div className="about__wrapper">
                    <img src={Icon1} alt="Icon1" className="about__first-block__img"/>
                    <img src={Icon2} alt="Icon2" className="about__first-block__img"/>
                    <img src={Icon3} alt="Icon3" className="about__first-block__img"/>
                </div>
            </div>
            <div className="about__second-block">
                <h2 className="about__title">
                    We carry out individual design projects with further author's support
                </h2>
                <div className="about__wrapper">
                    <img src={Icon4} alt="Icon4" className="about__second-block__img"/>
                    <img src={Icon5} alt="Icon5" className="about__second-block__img"/>
                    <img src={Icon6} alt="Icon6" className="about__second-block__img"/>
                </div>
            </div>
            <div className="about__third-block">
                <h2 className="about__title">
                    Natural stone in the interior selection and support at<br/> all stages of order fulfillment
                </h2>
                <div className="about__third-block__wrapper"> 
                    <div className="about__third-block__first">
                        <img src={Icon7} alt="Icon7" className="about__third-block__first__img"/>
                        <img src={Icon8} alt="Icon8" className="about__third-block__first__img"/>
                        <h3 className="about__third-block__title">
                            CALACATTA
                        </h3>
                    </div>
                    <div className="about__third-block__second">
                        <div className="about__third-block__second__wrapper">
                            <img src={Icon9} alt="Icon9" className="about__third-block__second__wrapper__img"/>
                            <img src={Icon10} alt="Icon10" className="about__third-block__second__wrapper__img"/>
                            <h3 className="about__third-block__second__wrapper__title">
                                SADOLIT BLUE
                            </h3>
                        </div>
                        <img src={Icon11} alt="Icon11" className="about__third-block__second__img"/>
                    </div>
                </div>
            </div>
            <div className="about__forth-block">
                <div className="about__forth-block__wrapper">
                    <div className="about__forth-block__first">
                        <div className="about__forth-block__first__intro">
                            <img src={Icon12} alt="Icon12" className="about__forth-block__first__intro__img"/>
                            <img src={Icon13} alt="Icon13" className="about__forth-block__first__intro__img"/>
                        </div>
                        <h3 className="about__forth-block__first__title">UKRAINIAN LABRODORITE</h3>
                    </div>
                    <div className="about__forth-block__second">
                        <div className="about__forth-block__second__intro">
                            <div className="about__forth-block__second__intro__block">
                                <img src={Icon14} alt="Icon14" className="about__forth-block__second__intro__block__img"/>
                                <img src={Icon15} alt="Icon15" className="about__forth-block__second__intro__block__img"/>
                            </div>
                            <img src={Icon16} alt="Icon16" className="about__forth-block__second__intro__img"/>
                        </div>
                        <h3 className="about__forth-block__second__title">NERO MARQUINA</h3>
                    </div>
                </div>
            </div>
            <div className="about__fifth-block">
                <div className="about__fifth-block__wrapper">
                    <img src={Icon17} alt="Icon17" className="about__fifth-block__img"/>
                    <img src={Icon18} alt="Icon18" className="about__fifth-block__img"/>
                    <img src={Icon19} alt="Icon19" className="about__fifth-block__img"/>
                    <img src={Icon20} alt="Icon20" className="about__fifth-block__img"/>
                </div>
                <h3 className="about__fifth-block__title">ONYX</h3>
            </div>
            <div className="about__sixth-block">
                <video className="about__sixth-block__first-video" controls poster={Icon19}>
                    <source src={Video1} type="video/mp4"/>
                </video>
                <video className="about__sixth-block__second-video" controls poster={Icon20}>
                    <source src={Video2} type="video/mp4"/>
                </video>
            </div>
        </section>
    )
}

export default About;