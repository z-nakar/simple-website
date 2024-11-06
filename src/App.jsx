import React, { useState } from 'react';
import { Navbar } from './components/Navbar- Components/Navbar'
import { Footer } from './components/Footer-Components/Footer'
import  Background  from './components/Background-Components/Background'
import Hero from './components/Hero-Components/Hero';


const App = () => {
  let heroData = [
    {text1: "Dive into", text2: "What you love"},
    {text1: "Indulge", text2: "Your passions"},
    {text1: "Give in to", text2: "Your passions"},
  ]
  const[heroCount, setHeroCount] = useState(4);
  const[playStatus, setPlayStatus] = useState(false);



  return (
    <div>
      <Navbar />
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />

    </div>
    
  )
}

export default App