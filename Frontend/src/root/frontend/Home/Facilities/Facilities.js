import React from "react"
import "./Facilities.css"
import FCard from "./FCard"

const Facilities = () => {
  return (
    <>
      <section className='Facilities background'>
        <h1 className="title"> Our Facilities </h1>
        <div className='container'>
          <FCard />
        </div>
      </section>
    </>
  )
}

export default Facilities