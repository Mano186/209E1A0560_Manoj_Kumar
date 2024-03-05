import React, { useState } from 'react';
import './card.css';

export default function CardComponent({ img, title, nation, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='shadow-xl border-blue-500/30 border-2 rounded w-64'>
      <div className='h-98'>
        <img src={img} alt={`Avatar ${title}`} />
      </div>
      <div className='p-4'>
        <h1 className='text-xl font-bold'>{title}</h1>
        <h2 className='text-l font-bold text-blue-500'>{nation}</h2>
        <p className={`text-sm ${isExpanded ? 'visible' : 'hidden'}`}>{description}</p>
        <br />
        <button onClick={handleToggle} className='your-class-name'>
          {isExpanded ? 'Know Less' : 'Know More '}
        </button>
      </div>
    </div>
  );
}
