import React from 'react'
import gsap from 'gsap';
import {ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Cocktails from './Components/Cocktails.jsx'
import About from './Components/About.jsx'
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
<main>

  <Navbar/>
  <Hero/>
  <Cocktails/>
  <About/>

</main>
)
}

export default App