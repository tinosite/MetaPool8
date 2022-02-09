import Navbar from '../navbar/navbar'
import React from 'react'

export default function SimpleLayout(props) {
  return (
    <>
      <Navbar />
      <main role="main">
        {props.preContainer && props.preContainer}
        <div className="album">
            {props.children}
        </div>
      </main>
    </>
  )
}