import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar- Components/Navbar'
import { Footer } from './components/Footer-Components/Footer'
import  Background  from './components/Background-Components/Background'
import Hero from './components/Hero-Components/Hero';


const App = () => {
  let heroData = [
    {text1: "Unleash", text2: "Your Inner Beast"},
    {text1: "Embrace", text2: "Your Shadow"},
    {text1: "Forge", text2: "Your Path"},
    {text1: "Stand Strong", text2: "In The Rift"},
    {text1: "Rise", text2: "With Power"},
    {text1: "Defy", text2: "Your Limits"},
    {text1: "Master", text2: "Your Destiny"},
  ]
  const[heroCount, setHeroCount] = useState(0);
  const[playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=> {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000);
  },[])

  return (
    <div>
      <Navbar />
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />

    </div>
    
  )
}

export default App