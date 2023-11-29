import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { AiOutlineUp } from "react-icons/ai";

const TopButton = () => { 

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrolled = document.documentElement.scrollTop;
        setIsVisible(scrolled > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return(
        <div>
            <button onClick={scrollToTop} className={`top-button ${isVisible ? 'show' : ''}`}>
                <AiOutlineUp />
            </button>
        </div>
    )
}

export default TopButton;