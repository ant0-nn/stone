import ReactPlayer from "react-player/youtube"

const About = () => {
    return(
        <section className="about">
            <div className="about__first-block">
                <h2 className="about__title">Development of design projects and constructive</h2>
                <div className="about__wrapper">
                    <img src="img/1.jpg" alt="Icon1" loading="lazy" className="about__first-block__img"/>
                    <img src="img/2.jpg" alt="Icon2" loading="lazy" className="about__first-block__img"/>
                    <img src="img/3.jpg" alt="Icon3" loading="lazy" className="about__first-block__img"/>
                </div>
            </div>
            <div className="about__second-block">
                <h2 className="about__title">
                    We carry out individual design projects with further author's support
                </h2>
                <div className="about__wrapper">
                    <img src="img/4.jpg" alt="Icon4" loading="lazy" className="about__second-block__img"/>
                    <img src="img/5.jpg" alt="Icon5" loading="lazy" className="about__second-block__img"/>
                    <img src="img/6.jpg" alt="Icon6" loading="lazy" className="about__second-block__img"/>
                </div>
            </div>
            <div className="about__third-block">
                <h2 className="about__title">
                    Natural stone in the interior selection and support at<br/> all stages of order fulfillment
                </h2>
                <div className="about__third-block__wrapper"> 
                    <div className="about__third-block__first">
                        <img src="img/7.jpg" alt="Icon7" loading="lazy" className="about__third-block__first__img"/>
                        <img src="img/8.jpg" alt="Icon8" loading="lazy" className="about__third-block__first__img"/>
                        <h3 className="about__third-block__title">
                            CALACATTA
                        </h3>
                    </div>
                    <div className="about__third-block__second">
                        <div className="about__third-block__second__wrapper">
                            <img src="img/9.jpg" alt="Icon9" loading="lazy" className="about__third-block__second__wrapper__img"/>
                            <img src="img/10.jpg" alt="Icon10" loading="lazy" className="about__third-block__second__wrapper__img"/>
                            <h3 className="about__third-block__second__wrapper__title">
                                SADOLIT BLUE
                            </h3>
                        </div>
                        <img src="img/11.jpg" alt="Icon11" loading="lazy" className="about__third-block__second__img"/>
                    </div>
                </div>
            </div>
            <div className="about__forth-block">
                <div className="about__forth-block__wrapper">
                    <div className="about__forth-block__first">
                        <div className="about__forth-block__first__intro">
                            <img src="img/12.jpg" alt="Icon12" loading="lazy" className="about__forth-block__first__intro__img"/>
                            <img src="img/13.jpg" alt="Icon13" loading="lazy" className="about__forth-block__first__intro__img"/>
                        </div>
                        <h3 className="about__forth-block__first__title">UKRAINIAN LABRODORITE</h3>
                    </div>
                    <div className="about__forth-block__second">
                        <div className="about__forth-block__second__intro">
                            <div className="about__forth-block__second__intro__block">
                                <img src="img/14.jpg" alt="Icon14" loading="lazy" className="about__forth-block__second__intro__block__img"/>
                                <img src="img/15.jpg" alt="Icon15" loading="lazy" className="about__forth-block__second__intro__block__img"/>
                            </div>
                            <img src="img/16.jpg" alt="Icon16" loading="lazy" className="about__forth-block__second__intro__img"/>
                        </div>
                        <h3 className="about__forth-block__second__title">NERO MARQUINA</h3>
                    </div>
                </div>
            </div>
            <div className="about__fifth-block">
                <div className="about__fifth-block__wrapper">
                    <img src="img/17.jpg" alt="Icon17" loading="lazy" className="about__fifth-block__img"/>
                    <img src="img/18.jpg" alt="Icon18" loading="lazy" className="about__fifth-block__img"/>
                    <img src="img/19.jpg" alt="Icon19" loading="lazy" className="about__fifth-block__img"/>
                    <img src="img/20.jpg" alt="Icon20" loading="lazy" className="about__fifth-block__img"/>
                </div>
                <h3 className="about__fifth-block__title">ONYX</h3>
            </div>
            <div className="about__sixth-block">
                <ReactPlayer 
                            url='https://www.youtube.com/watch?v=xreI-uTHJws' 
                            className="about__sixth-block__video"
                            controls
                            width="100%"/>
                <ReactPlayer 
                            url='https://www.youtube.com/watch?v=GfxSQ7etbX0' 
                            className="about__sixth-block__video"
                            controls
                            width="100%"/>
            </div>
        </section>
    )
}

export default About;