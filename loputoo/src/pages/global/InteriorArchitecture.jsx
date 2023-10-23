import React from 'react'
import InteriorCards from '../../components/home/InteriorCards'
import Footer from '../../components/home/Footer'

function Sisearhitektuur() {
  return (
    <div>
      <img
          className="homePage-img"
          src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-0c79eba/www.decorilla.com/online-decorating/wp-content/uploads/2018/10/modern-interior-design-grey-living-room2.png"
          alt="pic"
        />
        <br /> <br />
        < InteriorCards />
        <div className='div-space'>
          {}
        </div>
        <Footer />
        
    </div>
  )
}

export default Sisearhitektuur