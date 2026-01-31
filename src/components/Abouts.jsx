import React from 'react'
import '../styles/Abouts.css'

function Abouts(props) {
  return (
    <>
    <div className='w-[90%]] h-[inherit] center about-card'>
        <div className='h-[150px] w-[150px] bg-amber-600 rounded-[50%]'>
            <img src="" alt="" />
        </div>
        <div className='about-des'>
            <h2> {props.name} </h2>
            <p> {props.description} </p>
        </div>
    </div>
    </>
  )
}

export default Abouts