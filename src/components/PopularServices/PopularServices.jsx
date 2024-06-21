import React, { useState, useRef } from 'react';
import './PopularServices.css';
import service_img1 from '../../assets/service_img1.png';
import service_img2 from '../../assets/service_img2.png';
import service_img3 from '../../assets/service_img3.png';
import service_img4 from '../../assets/service_img4.jpeg';
import { FaArrowRightLong } from "react-icons/fa6";

const Services = ({ scrollToOurServices }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const services = [
        {
            img: service_img1,
            title: 'Start Your Own Business',
            description: 'Legal Formation Made Effortless',
            caption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod fugiat obcaecati suscipit ipsam eligendi! Alias facilis iusto blanditiis tempora autem numquam culpa, nostrum doloremque minima a error voluptatum necessitatibus maiores laudantium. Possimus.'
        },
        {
            img: service_img2,
            title: 'Demand a Refund',
            description: 'Been Wronged by airline or app?',
            caption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod fugiat obcaecati suscipit ipsam eligendi! Alias facilis iusto blanditiis tempora autem numquam culpa, nostrum doloremque minima a error voluptatum necessitatibus maiores laudantium. Possimus.'
        },
        {
            img: service_img3,
            title: 'Get Paid for Your Injuries',
            description: 'Injured at work or motor vehicle?',
            caption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod fugiat obcaecati suscipit ipsam eligendi! Alias facilis iusto blanditiis tempora autem numquam culpa, nostrum doloremque minima a error voluptatum necessitatibus maiores laudantium. Possimus.'
        }
    ];

    const handleScroll = (e) => {
        const index = Math.round(e.target.scrollLeft / e.target.offsetWidth);
        setActiveIndex(index);
    };

    return (
        <div className='container service'>
            <h2>Popular Services</h2>
            <div className="service-box" onScroll={handleScroll}>
                {services.map((service, index) => (
                    <div className="services" key={index}>
                        <img src={service.img} alt={service.title} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <div className="caption">{service.caption}</div>
                    </div>
                ))}
            </div>
            <div className="dots">  
                {services.map((_, index) => (
                    <span key={index} className={index === activeIndex ? 'active' : ''}></span>
                ))}
            </div>
            <button className='btn' onClick={scrollToOurServices}>View More <FaArrowRightLong className='btn-img' /></button>
            {/* <div className="service-detail">
                <div className="service-detail-left">
                    By combining the <span>accessibility</span> and feel of a small-town lawyer with the breadth and <span>power of modern technology</span>, we can provide <span>expertly crafted legal solutions</span> and <span>experienced lawyers</span> at <span>lower prices</span>. <span className="dot"></span>
                </div>
                <div className="service-detail-right">
                    <img src={service_img4} alt="Service Detail" />
                </div>
            </div> */}
        </div>
    );
}

export default Services;
