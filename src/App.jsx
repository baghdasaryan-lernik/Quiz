import React from 'react'
import Quiz from './components/Quiz'
import {Route, Routes} from 'react-router-dom'
import StartQuiz from './components/StartQuiz'

const App = () => {

  return (
    <>
     
    <Routes>
       <Route path='/' element={<StartQuiz/>}/>
       <Route path='/quiz' element={<Quiz/>}/>
    </Routes>
    </>
  )
}

export default App