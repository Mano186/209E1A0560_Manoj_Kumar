import React from 'react'
import './button.css'

export const Button = ({ buttonClick, show }) => {
    return (
      <button onClick={buttonClick} className="shadow-xl border-blue-1000/30 border-2 rounded w-64">
        {show ? 'Read less' : 'Read more'}
      </button>
    );
  }
  