import About from "./components/About";
import FirstBlock from "./components/FirstBlock";
import Footer from "./components/Footer";
import HamamBlock from "./components/Hamam";
import Header from "./components/Header";
import Main from "./components/Main";
import NameBlock from "./components/NameBlock";
import ProductionBlock from "./components/Production";
import SaunaBlock from "./components/Sauna";
import SecondBlock from "./components/SecondBlock";
import "./style/style.scss";

const App = () => {
    return(
        <>
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
            <Footer/>
        </>
    )
}

export default App;