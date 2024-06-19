import React, { useRef, useState, useEffect } from 'react';
import './Client.css';
import wave from '../../assets/working_wave_img.png';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useSwipeable } from 'react-swipeable';

const Client = () => {
  const clientReview = useRef();
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const newIndex = (currentReviewIndex + 1) % reviews.length;
      setCurrentReviewIndex(newIndex);
    },
    onSwipedRight: () => {
      const newIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
      setCurrentReviewIndex(newIndex);
    },
  });

  useEffect(() => {
    setReviews([
      {
        stars: 3,
        text: "After a catastrophic accident at one of our worksites, American Legal was instrumental in helping us deal successfully with investigations by OSHA and the Mass Department of Industrial Accidents. Their expertise and dedication ensured a successful outcome. We highly recommend American Legal for any construction business facing legal challenges.",
        author: "Ariel Peguero",
        company: "ABG Construction, Inc."
      },
      {
        stars: 5,
        text: "Navigating legal issues can be daunting, but American Legal made it easy for us. They helped us with contracts, client proposals and compliance. Their low prices and quick turnaround times were invaluable. The client dashboard is a great tool for tracking our clients and legal documents. American Legal is an essential partner for any business.",
        author: "Melany Ferrimy",
        company: "Ferrimy Construction"
      },
      {
        stars: 4,
        text: "American Legal has been a game-changer for my small advertising agency. They guided me through forming my LLC seamlessly and affordably. Their step-by-step guidance helps create client contracts fast and easy and there was a lawyer always available to answer my questions. I highly recommend American Legal to any small business owner.",
        author: "",
        company: "VU Creative Studio"
      },
      {
        stars: 3,
        text: "Running a restaurant comes with legal challenges, and American Legal has been there for us. They helped us resolve a liquor licensing issue efficiently and professionally. The online platform is user-friendly and lets us manage all our legal needs in one place. Their support has allowed us to focus on providing great food and service.",
        author: "Katiuska Valiente",
        company: "Peka Restaurant"
      },
    ]);
  }, []);

  return (
    <div className='container client' {...handlers}>
      <div className="left-client">
        <h2>What Clients Say About Us</h2>
        <img src={wave} alt="Wave" className="wave-image" />
        <div className='arrows'>
          <FaArrowLeft className='left-arrow' onClick={() => {
            const newIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
            setCurrentReviewIndex(newIndex);
          }} />
          <FaArrowRight className='right-arrow' onClick={() => {
            const newIndex = (currentReviewIndex + 1) % reviews.length;
            setCurrentReviewIndex(newIndex);
          }} />
        </div>
      </div>
      <div className="right-client">
        <div className="client-review">
          <ul ref={clientReview} className="review-list">
            {reviews.map((review, index) => (
              <li key={index} className={`review-item ${index === currentReviewIndex ? 'active' : ''}`}>
                <div className="review-box" style={index === currentReviewIndex ? { border: '2px solid #e5e7eb', color: `var(--white-color)` } : {}}>
                  <div className="stars" style={index === currentReviewIndex ? { color: `var(--yellow-color)` } : {}}>
                    {[...Array(review.stars)].map((_, i) => <FaStar key={i} />)}
                  </div>
                  <p>{review.text}</p>
                  <h3>{review.author}</h3>
                  <h4>{review.company}</h4>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Client;
