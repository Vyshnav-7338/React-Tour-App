import React from 'react'
import './Loader.css'
function Loader() {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <div class="loader"></div>
      <h1 className='loaderHead'>Loader</h1>
    </div>
  )
}

export default Loader
