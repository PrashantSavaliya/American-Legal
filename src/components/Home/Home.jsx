import React, { useState, useEffect } from "react";
import './Home.css'
import home_img from '../../assets/home_img.png'
import manImg from '../../assets/manImg.png'
import businessmanImg from '../../assets/businessmanImg.png'
import bg from '../../assets/bg.png'
import { VscSearch } from "react-icons/vsc";

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false);

    const popularItems = ["Form an LLC", "Demand a Refund", "Compensation"];
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex + 1) % 3); 
        }, 1000); 

        return () => clearInterval(interval); 
    }, []);

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        setIsInputFocused(false);
    };
    return (
        <div className='container home-main'>
            <div className="left-home">
                <h2>Solve Your</h2>
                <h2 className='legal'>Legal Needs</h2>
                <h3>promptly and affordably <div className='dot'></div></h3>
                <p>American Legal is a virtual law firm on a mission to provide everyone with timely, high quality legal representation and solutions at affordable prices.</p>
                <div className='input-container'>
                    <div className='input-div'>
                        <input
                            type="text"
                            placeholder='Find a service: i.e., "Form an LLC"'
                            value={inputValue}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                        <span><VscSearch className='search-icon' /></span>
                    </div>
                    {isInputFocused && (
                        <div className='suggestions'>
                            {popularItems.map((item, index) => (
                                <div
                                    key={index}
                                    className='suggestion-item'
                                    onMouseDown={() => handleSuggestionClick(item)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                    <div className='popular-names'>
                        Popular: {popularItems.map((item, index) => (
                            <span key={index} className='popular'>{item}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="right-home">
                <div className="black-box">
                    <div className="yellow-box">
                        <img src={home_img} alt="" className="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home