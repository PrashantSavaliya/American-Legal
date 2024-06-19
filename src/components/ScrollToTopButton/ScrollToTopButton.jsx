import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return (
        visible && (
            <button onClick={handleClick} className='scroll-to-top-button'>
                <FaArrowUp className='icon'/>
            </button>
        )
    );
}

export default ScrollToTopButton