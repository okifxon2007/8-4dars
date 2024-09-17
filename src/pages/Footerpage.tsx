import React from 'react'
import Header from '../components/header/Header'
import Main from '../components/main/Main'
import '../pages/index.css'
const Footerpage = () => {
  function handfinish(){
    alert('siz muvaffaqqiyatli royxatdan otdingiz')
  }
  return (
    <div>
           <div className="onepar">
          <Header></Header>
          </div>
          <div className="display conta">
       <div className="chart">
       <Main></Main> 
       </div>
          


        <div className="twopar">
        <div className="dfthree conta">
            <h1 className='footpag'>Missing required business information</h1> <br /> <br />
            <button onClick={handfinish}>Submit</button>
        </div>
        </div>
     
       </div>
    </div>
  )
}

export default Footerpage