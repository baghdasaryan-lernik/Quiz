import React from 'react'
import { Link } from 'react-router-dom'


const StartQuiz = () => {
  return (
    
         <div className='container'>
          <div className='table'>
          <Link to='/quiz'><button style={{width:200 + "px"}}>Start Quiz</button></Link>
          </div>
        </div>
    
  )
}

export default StartQuiz