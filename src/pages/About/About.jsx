import React from 'react'
import "./About.css";
import aboutImg from "../../Images/about.jpg";

const About = () => {
  return (
    <section>

      <div className='about'>
        <div className='container'>
          <div className='section-title'>
            <h2>About</h2>
          </div>
          <div className='about-content grid'>
            <div className='about-img'>
              <img src={aboutImg} alt="" />
            </div>
            <div className='about-text'>
              <h2 className='about-title fs-26 ls-1'>About BookSearcher</h2>
              <p className='fs-17'>Discover your next literary adventure with our book finder!
                Our user-friendly platform allows you to explore a vast collection of books tailored
                to your interests. Simply input your preferences, from genre to author, and let our
                intuitive search tool guide you to your next favorite read. Whether you're seeking
                thrilling mysteries, heartfelt romances, or insightful non-fiction, our book finder
                is your gateway to endless literary possibilities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About