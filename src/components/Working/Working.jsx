import React from 'react';
import './Working.css';
import wave from '../../assets/working_wave_img.png';

const Working = () => {
  return (
    <div className='container working'>
      <h2><div className="dot"></div> How It Works</h2>
      <img src={wave} alt="wave" className="wave-img"/>
      <div className="working-main">
        <div className="working-box box-1">
          <div className='count'>1</div>
          <h4>Tell Us What You Need</h4>
          <p>Use the search bar to find the legal service you need (i.e., “Start a Business, Sue the Insurance Company, Etc.”). Choose the one that best suits your needs and proceed.</p>
        </div>
        <div className="working-box box-2">
          <div className='count'>2</div>
          <h4>Discover Your Options</h4>
          <p>Answer a few questions to help our legal wizard determine and recommend the best legal options for you.</p>
        </div>
        <div className="working-box box-3">
          <div className='count'>3</div>
          <h4>Leave The Rest To Us</h4>
          <p>Select a service and follow our step-by-step guidance. Once we have all the necessary information, we’ll take care of everything for you.</p>
        </div>
      </div>
      <button className='btn'>Get Started</button>
    </div>
  );
}

export default Working;
