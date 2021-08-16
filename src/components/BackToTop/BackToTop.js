import React, { useState, useEffect } from 'react'
import "./BackToTop.css";


 const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibilty = () => {
        if (window.pageYOffset > 900){
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibilty);
        return () => {
            window.removeEventListener("scroll", toggleVisibilty);
        };
    }, []);
    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div onClick={scrollToTop} className="back-top-container">
                    <BackToTop/>
                </div>
            )}
            
        </div>
    )
}
export default BackToTop
