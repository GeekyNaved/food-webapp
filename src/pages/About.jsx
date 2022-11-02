import React from 'react'
import HeroSection from '../components/HeroSection'

const About = () => {
  const data = {
    name: "Khan",
    image: "./images/about.svg",
  };
  return (
    <HeroSection {...data}/>
  )
}

export default About