import React from 'react'
import { Github } from 'react-feather'


const ProjectBox = props => (
  <div className="box">
    <img className="box-image" src={props.image} alt={props.title} />
    <div>
      <a href={props.visit} target='_blank'>
        {props.title}
      </a>

      <p style={{ textAlign: 'center', padding: '5px', fontSize: '16px' }}>
        {props.text}
      </p>
      {
        props.github
          ? (
            <a href={props.github}>
              <Github />
              Show me Code</a>
          )
          : "It's not open source :("
      }
    </div>
  </div>
)

export default ProjectBox
