import React, { useState } from 'react'
export default function SimpleLayout(props) {

  return (

<>
      <main role="main">
        {props.preContainer && props.preContainer}
        <div className="album">
            {props.children}
        </div>
      </main>
</>
  )
}