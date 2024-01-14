import { lazy } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import NameBlock from './components/NameBlock';
import PopUpPhone from './components/PopUpPhone';
import TopButton from './components/TopButton';
import BackGround from "./assets/img/bg.png";
import "./style/style.scss";

const About = lazy(() => import('./components/About'));
const FirstBlock = lazy(() => import('./components/FirstBlock'));
const Footer = lazy(() => import('./components/Footer'));
const HamamBlock = lazy(() => import('./components/Hamam'));
const ProductionBlock = lazy(() => import('./components/Production'));
const SaunaBlock = lazy(() => import('./components/Sauna'));
const SecondBlock = lazy(() => import('./components/SecondBlock'));

const App = () => {
    return(
        <>
            <img src={BackGround} alt="BackGround" className="bg" />
            <Header/>
            <Main/>
            <NameBlock/>
            <div className="container">
                <About/>
            </div>
            <NameBlock/>
            <div className="container">
                <FirstBlock/>
                <SecondBlock/>
                <HamamBlock/>
                <SaunaBlock/>
                <ProductionBlock/>
            </div>
            <TopButton/>
            <PopUpPhone/>
            <Footer/>
        </>
    )
}

export default App;