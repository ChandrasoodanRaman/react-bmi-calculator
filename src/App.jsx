import { useState } from 'react'

import './App.css'

function App() {

  const [height,setHeight]=useState(0)
  const [weight,setWeight]=useState(0)
  const [bmi,setbmi]=useState(null)
  const [bmiStatus,setBmistatus]=useState("")
  const [errormsg,setErrormsg]=useState("")
  const calculateBmi=()=>{
    const isvalidheight=/^\d+$/.test(height)
    const isvalidweight=/^\d+$/.test(weight)
      if(isvalidheight && isvalidweight)
        {
            const heightinm=height/100
            const bmivalue= weight/(heightinm*heightinm)
            setbmi(bmivalue.toFixed(2))
            if (bmivalue<18.5)
              {
                setBmistatus("Underweight")
                
              }
              else if(bmivalue>=18.5 && bmivalue<24.9)
                {
                  setBmistatus("Normal weight")
                }
                else if(bmivalue>=25 && bmivalue<29.9 )
                  {
                    setBmistatus("Over weight")
                  }
                  else{
                    setBmistatus("Obese")
                  }
              setErrormsg("")

        }
        else{
          setbmi(null)
          setBmistatus("")
          setErrormsg("please enter valid numeric value")
        }

  }
  const clearall=()=>
    {
      setHeight("")
      setWeight("")
      setbmi(null)
      setBmistatus("")

    }
  return (
    <>
      <div className='bmi-calculator'>
          <div  className='box'>
            <div className='data'>
                <h1>BMI CALCULATOR</h1>
                {errormsg  && <p className='error'>{errormsg}</p>}
                <div className='input-container'>
                      <label htmlFor='height'>height(cm):</label>
                      <input type='text' id='height'  value={height} onChange={(e)=>setHeight(e.target.value)}></input>
                      
                </div>
                <div className='input-container'>
                      <label htmlFor='weight'>weight(kg):</label>
                      <input type='text' id='weight' value={weight} onChange={(e)=>setWeight(e.target.value)}></input>
                      
                </div>
                <button onClick={calculateBmi}>BMI CALCULATE</button>
                <button onClick={clearall}>Clear</button>
                {bmi!=null && (
                                    <div className='result'>
                                    <p>your bmi is {bmi}</p>
                                    <p>status:{bmiStatus}</p>
                                </div>
                )}

            </div>

          </div>

      </div>
    
    
    
    
    
    
    </>
  )
 
}

export default App
