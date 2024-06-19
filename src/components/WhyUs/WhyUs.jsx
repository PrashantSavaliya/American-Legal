import React from 'react'
import './WhyUs.css';
import call_gif from '../../assets/call_gif.gif';
import true_gif from '../../assets/true_gif.gif';
import lock_gif from '../../assets/lock_gif.gif';
import money_gif from '../../assets/money_gif.gif';
import saveFile_gif from '../../assets/saveFile_gif.gif';

const WhyUs = () => {
  return (
    <div className='container why-us'>
      <div className="left-why-us">
        <h2>Why Us</h2>
        <div className='show-gif-container'>
          <div>
            <div className='show-gif'><img src={money_gif} alt="money gif" /></div>
            <h3><div className='dot'></div>Save Money</h3>
            <p>Experience Legal Excellence for up to 90% less than traditional law firms.</p>
          </div>
          <div>
            <div className='show-gif'><img src={saveFile_gif} alt="save file gif" /></div>
            <h3><div className='dot'></div>Save Time</h3>
            <p>Basic needs such as contracts and documents solved instantly. For everything else, get step-by-step guidance and prompt online assistance.</p>
          </div>
          <div>
            <div className='show-gif'><img src={true_gif} alt="true gif" /></div>
            <h3><div className='dot'></div>Get it Done Right</h3>
            <p>All services carefully designed by Top Lawyers for your peace of mind.</p>
          </div>
          <div>
            <div className='show-gif'><img src={lock_gif} alt="lock gif" /></div>
            <h3><div className='dot'></div>Protect Your Privacy</h3>
            <p>With American Legal the attorney-client privilege protects your confidentiality.</p>
          </div>
          <div>
            <div className='show-gif'><img src={call_gif} alt="call gif" /></div>
            <h3><div className='dot'></div>Get a Lawyer Anytime</h3>
            <p>Experience Lawyers available on demand by video or call.</p>
          </div>
        </div>
      </div>
      <div className="right-why-us">
        <div class="grid-container">

          <div class="grid-item"><p className='rectangle'></p></div>
          <div class="grid-item"><p className='empty-rectangle'></p></div>
          <div class="grid-item"><p className='empty-rectangle'></p></div>
          <div class="grid-item"><p className='empty-rectangle'></p></div>
          <div class="grid-item"><p className='rectangle'></p></div>

          <div class="grid-item"><p className='empty-rectangle'></p></div>
          <div class="grid-item"><p className='empty-rectangle'></p></div>
          <div class="grid-item"><img src={money_gif} alt="icon1" /></div>
          <div class="grid-item"><p className='empty-rectangle'></p></div>
          <div class="grid-item"><p className='empty-rectangle'></p></div>

          <div class="grid-item"><p className='empty-rectangle'></p></div>
          <div class="grid-item"><img src={saveFile_gif} alt="icon2" /></div>
          <div class="grid-item"><p className='empty-rectangle'></p></div>
          <div class="grid-item"><p className='rectangle'></p></div>
          <div class="grid-item"><p className='empty-rectangle'></p></div>

          <div class="grid-item"><p className='rectangle'></p></div>
          <div class="grid-item"><p className='empty-rectangle'></p></div>
          <div class="grid-item"><p className='empty-rectangle'></p></div>
          <div class="grid-item"><p className='empty-rectangle'></p></div>
          <div class="grid-item"><img src={true_gif} alt="icon3" /></div>

          <div class="grid-item"><p className='empty-rectangle'></p></div>
          <div class="grid-item"><p className='empty-rectangle'></p></div>
          <div class="grid-item"><img src={lock_gif} alt="icon4" /></div>
          <div class="grid-item"><p className='empty-rectangle'></p></div>
          <div class="grid-item"><p className='empty-rectangle'></p></div>

          <div class="grid-item"><p className='empty-rectangle'></p></div>
          <div class="grid-item"><img src={call_gif} alt="icon5" /></div>
          <div class="grid-item"><p className='empty-rectangle'></p></div>
          <div class="grid-item"><p className='rectangle'></p></div>
          <div class="grid-item"><p className='empty-rectangle'></p></div>

        </div>
      </div>
    </div>
  )
}

export default WhyUs
