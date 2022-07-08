import React from "react"
import { Data } from "./Data"

function FCard() {
  return (
    <>
      <div className='content grid5 mtop'>
        {Data.map((items, index) => (
          <div className='box' key={index} >
            <img src={items.image} alt='' />
            <h4>{items.title} </h4>
            <label>{items.details}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default FCard
