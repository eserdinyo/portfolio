import React from 'react'
import ProjectBox from '../components/ProjectBox'
import shows from '../img/tv-shows.png';
import erdtool from '../img/erdtool.png';
import evdenmarket from '../img/evdenmarket.png';
import habits from '../img/6habits.jpg';
import todoto from '../img/todoto.jpg';

import { ProjectAnimation } from '../components/IntroAnimation'
import PageTransition from 'gatsby-plugin-page-transitions'

const SecondPage = () => (
  <PageTransition
    defaultStyle={{
      width: '100%',
      transition: 'opacity 0.5s ease',
      opacity: '0',
    }}
    transitionStyles={{
      entering: { opacity: '1' },
      entered: { opacity: '1' },
      exiting: { opacity: '0' },
    }}
    transitionTime={500}
  >
    <div className="project-wrapper">
      <div className="project-title">
        <p className="p-title">Personal Projects </p>
      </div>
      <div className="project-list">
        <ProjectBox
          visit="https://show-quiz.netlify.com/#/"
          title="Tv Shows Quiz"
          image={shows}
          github='https://github.com/eserdinyo/tv-shows-quiz'
          text="A quiz app about popular show charactes."
        />
        <ProjectBox
          visit="https://www.youtube.com/watch?v=Jnhd6FXPj_g"
          title="ERDTool"
          image={erdtool}
          github='https://github.com/eserdinyo/erd-tool'
          text="A vue app for creating relational database."
        />
        <ProjectBox
          visit="https://www.youtube.com/watch?v=6j2gJVisRs8"
          title="Evdenmarket.com"
          image={evdenmarket}
          text="E-commerce app for shopping from markets arround you"
        />
        <ProjectBox
          visit="https://chrome.google.com/webstore/detail/6habits/dbkmfednhfmnihoifkpgmmjmaheeipgo"
          title="6habits"
          image={habits}
          github='https://github.com/eserdinyo/6habits'
          text="A chrome extension help you to easily make new habit."
        />
        <ProjectBox
          visit="https://chrome.google.com/webstore/detail/todoto/afgnoceeehpmcmnemcbpgaapjcjadmof"
          title="Todoto"
          image={todoto}
          github='https://github.com/eserdinyo/todoto'
          text="Todoto is a chrome new tab extension. Never forget what will you do!"
        />

      </div>
      <ProjectAnimation />
    </div>
  </PageTransition>
)

export default SecondPage
