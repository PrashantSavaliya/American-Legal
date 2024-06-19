import React, { useState, useEffect } from 'react';
import '../Home/Home.css';
import home_img from '../../assets/home_img.png';
import manImg from '../../assets/man.png'; 
import bg from '../../assets/bg.png';
import businessmanImg from '../../assets/businessmanImg.png'; // New image
import { VscSearch } from "react-icons/vsc";

const Banner = () => {
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex + 1) % 3); // Cycle through 3 image sets
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    return (
        <div className='container home-main'>
            <div className="left-home">
                <h2>Solve Your</h2>
                <h2 className='legal'>Legal Needs</h2>
                <h3>promptly and affordably <div className='dot'></div></h3>
                <p>American Legal is a virtual law firm on a mission to provide everyone with timely, high quality legal representation and solutions at affordable prices.</p>
                <div className='input-div'>
                    <input type="text" placeholder='Find a service: i.e., "Form an LLC"' />
                    <span>
                        <VscSearch className='search-icon' />
                    </span>
                </div>
                <div className='popular-names'>
                    Popular : <span className='popular'>Form an LLC</span><span className='popular'>Demand a Refund</span><span className='popular'>Compensation</span>
                </div>
            </div>
            <div className="right-home">
                {imageIndex === 0 && (
                    <>
                        <img src={bg} alt="Background" className="bg-image" />
                        <img src={home_img} alt="Home" className="home-image" />
                    </>
                )}
                {imageIndex === 1 && (
                    <>
                        <img src={bg} alt="Background" className="bg-image" />
                        <img src={manImg} alt="Man" className="man-image" />
                    </>
                )}
                {imageIndex === 2 && (
                <img src={businessmanImg} alt="Businessman" className="businessman-image" />
                )}
            </div>
        </div>
    );
}

export default Banner;
