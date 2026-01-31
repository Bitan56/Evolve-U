import React from 'react'
import '../styles/Card.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Card(props) {
  return (
    <div className='main-card-container'>
      <main className='main-card'>
        <div className="main-card-img"><img src="" alt="" /></div>
        <div className="main-card-des">
          <h3 className='main-card-title'>{props.title}</h3>
          <p>{props.description}</p>
          
        </div>
      </main>
<button className="main-card-btn">View Roadmap <FaRegArrowAltCircleRight /></button>
    </div>
  )
}

export default Card