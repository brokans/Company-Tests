import React from 'react'
import ArchitectureCards from '../../components/home/ArchitectureCards'
import Footer from '../../components/home/Footer'

function Arhitektuur() {
  return (
    <div>
        <img
          className="homePage-img"
          src="https://media.architecturaldigest.com/photos/56ba787ca254b168296a8fff/master/w_1920%2Cc_limit/zaha-hadid-architecture-01.jpg"
          alt="pic"
        />
        <br /> <br />
        <ArchitectureCards />
        <div className='div-space'>
          {}
        </div>
        <Footer />
    </div>
  )
}

export default Arhitektuur