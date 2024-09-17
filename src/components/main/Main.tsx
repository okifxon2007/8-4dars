import React, { useEffect, useState } from 'react'
import '../main/index.css'
import { useNavigate } from 'react-router-dom'
const Main = () => {

  const [org, setorg] = useState(1);
  const [two, settwo] = useState(2);
  const [thre, setthre] = useState(3);
  const [foor, setfor] = useState(4)


  const nav = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('formDataOnepage')) {
      setorg('👍')
    }
    if (localStorage.getItem('formDataTwopage')) {
      settwo('👍')
    }
    if (localStorage.getItem('formDataFourpage')) {
      setthre('👍')
    }
    if (localStorage.getItem('formDataFivepage')) {
      setfor('👍')
    }
  },[])




  function handone(){
    nav('/')
    
  }
  function handtwo(){
    nav('/twopage')
   
  }
  function handthree(){
    nav('/threepage')
    
  }
  function handfor(){
    nav('/forpage')
   
  }
  
  return (
    <div>
        <div className="conta">
          <div className="lm-top">
          <div className="leftmain">
           <button onClick={handone} >{org}</button>
           <h1>Business structure <br /> <span>Business representative</span> <br /> <span>Business details</span></h1>
           </div>
           <br />
           <br />
           <br />
           <br />
           <div className="leftmain">
           <button onClick={handtwo} >{two}</button>
           <h1>Bank details</h1>
           </div>
           <br />
           <br />
           <div className="leftmain">
           <button onClick={handthree}>{thre}</button>
           <h1>2 step authentication</h1>
           </div>

           <br />

           <div className="leftmain">
           <button onClick={handfor}>{foor}</button>
           <h1>Overview</h1>
           </div>
           
          </div>
            
        </div>
      
            
    </div>
  )
}

export default Main