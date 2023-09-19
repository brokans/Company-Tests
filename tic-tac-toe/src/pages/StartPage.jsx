import React from 'react'
import {Link} from "react-router-dom"

function StartPage() {
  return (
    <div>
        <div className="start-page">
        <label htmlFor="">Player 1 </label> <br />
        <input type="text" /> <br /> <br />
        <label htmlFor="">Player 2 </label> <br />
        <input type="text" /> <br />
        <Link to={"/game"}>
          <button>Start</button>
        </Link>
        
      </div>
    </div>
  )
}

export default StartPage