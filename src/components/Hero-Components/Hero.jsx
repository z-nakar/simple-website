import React from 'react'
import '../Hero-Components/Hero.css'
import btn_arrow from '../Background-Components/arrow_btn.png'
import btn_pause from '../Background-Components/pause_icon.png'
import btn_play from '../Background-Components/play_icon.png'


const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className="hero-explore">
        <p>Become a legend</p>
        <img src={btn_arrow} alt=""></img>
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCount===0 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount===1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount===2 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={()=>setHeroCount(3)} className={heroCount===3 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={()=>setHeroCount(4)} className={heroCount===4 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={()=>setHeroCount(5)} className={heroCount===5 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={()=>setHeroCount(6)} className={heroCount===6 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img  onClick={()=>setPlayStatus(!playStatus)} src={playStatus?btn_pause : btn_play} alt=""></img>
          <p>See the video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero