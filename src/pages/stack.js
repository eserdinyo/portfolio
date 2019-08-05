import React from 'react'
import ProjectBox from '../components/ProjectBox'
import vue from '../img/stack/Vue.png';
import react from '../img/stack/react.png';
import js from '../img/stack/js.png';
import nuxt from '../img/stack/nuxt.png';
import scss from '../img/stack/scss.png';
import git from '../img/stack/git.png';
import webpack from '../img/stack/webpack.png';
import node from '../img/stack/node.png';

import { ProjectAnimation } from '../components/IntroAnimation'
import PageTransition from 'gatsby-plugin-page-transitions'

const ForthPage = () => (
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
        <div className="project-wrapper stack">
            <div className="project-title">
                <p className="p-title stack-title">Tech Stack</p>
            </div>
            <div className="stack-list">
                <div>
                    <img src={js} alt="" />
                </div>
                <div>
                    <img src={node} alt="" />
                </div>
                <div>
                    <img src={react} alt="" />
                </div>
                <div>
                    <img src={vue} alt="" />
                </div>
                <div>
                    <img src={nuxt} alt="" />
                </div>
                <div>
                    <img src={scss} alt="" />
                </div>

                <div>
                    <img src={git} alt="" />
                </div>
                <div>
                    <img src={webpack} alt="" />
                </div>
            </div>
            <ProjectAnimation />
        </div>
    </PageTransition>
)

export default ForthPage
