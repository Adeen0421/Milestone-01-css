import React from 'react'
import Heading from './Heading'

const Skils = () => {
  return (
    <div id='skills' className='container'>
      <Heading title='Skills'/>
      <h1 className='s-h'>Technical Skills
      </h1>
      <ul>
        <li className='s-p '>Programming Languages: [e.g., Python, JavaScript, C++]</li>
        <li className='s-p'>Web Development: [e.g., HTML, CSS, React, Node.js]</li>
        <li className='s-p'>Database Management: [e.g., MySQL, MongoDB, PostgreSQL]</li>
        <li className='s-p'>Tools & Technologies: [e.g., Git, Docker, Kubernetes, Figma, Adobe Suite]</li>
      </ul>
      

      <h1 className='s-h'>Design Skills
      </h1>
      <ul>
       
        <li className='s-p'>UI/UX Design: Wireframing, Prototyping, User Research</li>
        <li className='s-p'>Graphic Design: Branding, Illustration, Typography</li>
        <li className='s-p'>Tools: [e.g., Figma, Sketch, Adobe Photoshop, Illustrator]</li>
      </ul>

      <h1 className='s-h'>Soft Skills
      </h1>
      <ul>
        <li className='s-p'>Creative Problem-Solving</li>
        <li className='s-p'>Effective Communication</li>
        <li className='s-p'>Team Collaboration</li>
        <li className='s-p'>Time Management</li>
        <li className='s-p'>Adaptability</li>
      </ul>
    </div>
  )
}

export default Skils
