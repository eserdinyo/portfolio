import React from 'react'
import { Github, Twitter, Linkedin } from 'react-feather'
import { LootieAnimation } from '../components/IntroAnimation'
import PageTransition from 'gatsby-plugin-page-transitions'

const IndexPage = () => (
  <PageTransition
    defaultStyle={{
      opacity: '0',
      width: '100%',
      transition: 'opacity 0.5s ease',
    }}
    transitionStyles={{
      entering: { opacity: '1' },
      entered: { opacity: '1' },
      exiting: { opacity: '0' },
    }}
    transitionTime={500}
  >
    <div className="intro-wrapper">
      <div className="title-wrapper">
        <h1 className="title">Muhammet Eser</h1>
        <h2 className="subtitle">Front End Developer</h2>
        <p className="popup">
          Hi! I develop websites and web applications with modern Javascript
          frameworks! Contact me if you are interested in working together!
        </p>
      </div>
      <div className="social-wrapper">
        <a href="https://github.com/eserdinyo" target="_blank">
          <Github color="#EFEFEF" size="48" className="social-links" />
          Github
        </a>
        <a href="https://twitter.com/eserdinyo" target="_blank">
          <Twitter color="#EFEFEF" size="48" className="social-links" />
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/eserdinyo/"
          target="_blank"
        >
          <Linkedin color="#EFEFEF" size="48" className="social-links" />
          LinkedIn
        </a>
      </div>
      <LootieAnimation />
    </div>
  </PageTransition>
)

export default IndexPage
