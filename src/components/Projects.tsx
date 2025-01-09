import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data=[

    {
        id:0,
        title:"Website",
        desc:"An App with features of location and thumbnail",
        img:"/Project-01.png",
        tags:[" Custom CSS","Html"]
    },
    {
      id:1,
      title:"E-commerce Website",
      desc:"An app for selling Solar-panels",
      img:"/Project-03.png",
      tags:["Html","Custom CSS"]
  },
  
    {
      id:2,
      title:"BMW Website",
      desc:"An app for an automobile company",
      img:"/Project-02.png",
      tags:["Html","Custom CSS","Typescript","Next.js"]
  },
 
];

const Projects = () => {
  return (
    <div id='projects' className='container'>
      <Heading title='My Projects'/>
      <div className='grid-container'>
        {data.map((el)=>(<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}

        />))}
      </div>
    </div>
  )
}

export default Projects
