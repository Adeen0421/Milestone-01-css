
import React from 'react'
import Image from 'next/image';
interface propsType{
    title:string; 
    desc:string;
    img:string;
    tags:string[];
    }
    const Card:React.FC<propsType> = ({title, desc, img, tags}) => {
      return (
      <div className='border-container'>
        <div>
            <Image className="img"
            src={img}
            width={350}
            height={350}
            alt={title}
            />
        </div>
        <div className='text-c'>
        <div className='text'>{title}</div>
        <div>{desc}</div>
        <div>
            {tags.map((el) =>
             (<div className="tags" key={el}>
                {el}
            </div>))}
        </div>
        </div>
        </div>
      )
    }
    
    export default Card